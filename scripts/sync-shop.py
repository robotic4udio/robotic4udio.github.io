#!/usr/bin/env python3
"""Write _data/shop.json from the Moonbase storefront (public, no key needed).

The site's prices come from Moonbase: the storefront script fills them in live in the visitor's
currency, and this snapshot gives the build what it needs without JavaScript: which plugins are on
sale (listed in the storefront with a release), the euro price written into the page as a fallback,
and the bundles. Run it after changing anything in Moonbase; the "Shop sync" workflow also runs it
every day and commits the snapshot when it changed.

    python3 scripts/sync-shop.py
"""
import json
import pathlib
import urllib.request

STOREFRONT = "https://roboticaudio.moonbase.sh/api/customer/storefront"
CURRENCY = "EUR"
SYMBOLS = {"EUR": "€", "USD": "$", "GBP": "£"}
OUT = pathlib.Path(__file__).resolve().parent.parent / "_data" / "shop.json"


def money(amount):
    if amount is None:
        return None
    text = f"{amount:.0f}" if float(amount).is_integer() else f"{amount:.2f}"
    return SYMBOLS.get(CURRENCY, CURRENCY + " ") + text


def prices(item):
    variation = item.get("defaultVariation") or {}
    price = (variation.get("price") or {}).get(CURRENCY)
    original = (variation.get("originalPrice") or {}).get(CURRENCY, price)
    return {
        "price": price,
        "price_text": money(price),
        "original_price": original,
        "original_price_text": money(original),
        "free": price == 0,
    }


def main():
    request = urllib.request.Request(STOREFRONT, headers={"Accept": "application/json", "User-Agent": "roboticaudio.com shop sync"})
    with urllib.request.urlopen(request, timeout=30) as response:
        storefront = json.load(response)

    products = {}
    for product in storefront.get("products", []):
        products[product["id"]] = {
            "name": product.get("name"),
            # A product only goes on sale on the site once it has a release to download
            "released": bool(product.get("currentVersion")),
            "version": product.get("currentVersion"),
            **prices(product),
        }

    bundles = []
    for bundle in storefront.get("bundles", []):
        contents = [p["id"] if isinstance(p, dict) else p for p in bundle.get("products", [])]
        separate = sum((products.get(pid) or {}).get("price") or 0 for pid in contents)
        entry = {
            "id": bundle["id"],
            "name": bundle.get("name"),
            "tagline": bundle.get("tagline") or "",
            "description": bundle.get("description") or "",
            "products": contents,
            **prices(bundle),
        }
        # What the plugins would cost one by one, for "save €x" next to the bundle's price
        entry["separate_price_text"] = money(separate)
        entry["saving_text"] = money(separate - entry["price"]) if entry["price"] is not None and separate > entry["price"] else None
        bundles.append(entry)

    snapshot = {"currency": CURRENCY, "products": products, "bundles": bundles}
    text = json.dumps(snapshot, indent=2, ensure_ascii=False) + "\n"
    if OUT.exists() and OUT.read_text() == text:
        print("shop.json is up to date")
        return
    OUT.write_text(text)
    on_sale = [pid for pid, p in products.items() if p["released"]]
    print(f"Wrote {OUT.relative_to(OUT.parent.parent)}: {len(products)} products ({', '.join(on_sale) or 'none'} on sale), {len(bundles)} bundles")


if __name__ == "__main__":
    main()
