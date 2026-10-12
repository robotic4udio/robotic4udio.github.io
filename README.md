# roboticaudio.com

The Robotic Audio website: plugins and studio. Jekyll, served by GitHub Pages from `main` at https://roboticaudio.com.
Hjalte's portfolio is the separate `hjalte` repo, served at https://roboticaudio.com/hjalte.

```sh
bundle install
bundle exec jekyll serve      # http://localhost:4000
```

## Where things are
- `index.html`, `plugins/index.html`, `studio.html`: the pages. `_data/studio.yml` holds the services and their selected work.
- `_products/<name>.md`: one file per plugin (the front matter is the product page: tagline, features, demos, screenshots, specs). Add a file to add a plugin.
- `plugins/<name>/manual/`: the plugin's manual, copied from the plugin repo. Don't edit it here. The plugin repo's `update-homepage` skill (`.claude/skills/update-homepage/scripts/update-site.sh`) refreshes every plugin's manual and screenshot in one go; `scripts/sync-manual.sh LineRunner` copies one manual by hand (it uses the plugin's name in lower case as the folder, so not for Echo Engine, whose page is `echo-engine`).
- `assets/audio/<name>/`: audio demos; list them under `demos:` in the plugin's file.
- `assets/images/<name>/`: screenshots; `image:` and `screenshots:` point at them. The current ones are drawn by the plugin repo's `tools/EditorShots` (e.g. `EchoEngineShots shot.png 1`), then converted to JPEG.
- `_config.yml`: `newsletter_action` turns the "notify me" email links into a sign-up form once a newsletter service is chosen.
- The shop is Moonbase (account `roboticaudio`, https://roboticaudio.moonbase.sh), run on the site by Moonbase's embedded storefront: `_layouts/default.html` loads its script (colours, fonts and options there), and the cart, checkout, account and downloads open over the page. `assets/js/shop.js` hands it the site's buttons (`data-shop="add_to_cart"` with `data-product` or `data-bundle`; the links underneath are Moonbase's hosted pages, followed when the script is blocked) and works out bundle savings.
- Moonbase is the only place prices live. Elements with `data-moonbase-render="product.<id>.price"` show the live price in the visitor's currency (`_includes/buy.html`, with the old price struck through during a sale, and "Owned | Download" for a signed-in customer who has it). `_data/shop.json` is a snapshot of the storefront for the build: which plugins are on sale (in the storefront with a published release), the euro prices written into the pages as fallback text, and the bundles. Refresh it with `python3 scripts/sync-shop.py` after changing anything in Moonbase; the "Shop sync" workflow (`.github/workflows/shop-sync.yml`) also runs it every morning and commits it when it changed. A plugin goes on sale by itself once its Moonbase product (the file's name, or `moonbase_id` in its front matter) is listed in the storefront with a release: its button turns from "Soon | Notify me" into the price and "Buy now" ("Free | Get it" at no cost), it moves to the front of the shop, its status reads "Out now" (or "Free"), a paid one gets "Try it free for 14 days", its "Price" spec shows the live price, and its page drops the "notify me" sign-up. To hold one back although Moonbase sells it, give its file `on_sale: false`. Bundles made in Moonbase show by themselves below the shop (Instruments, Effects and Tools, from each file's `category`) on the homepage and `/plugins/` (`_includes/bundles.html`), and each plugin page names the bundles it is in. Sales (promotions) set up in Moonbase lower the prices on the site and show a banner, with nothing to change here.
