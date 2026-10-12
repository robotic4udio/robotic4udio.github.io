// The shop: Moonbase's embedded storefront (loaded and set up in _layouts/default.html) does the
// cart, checkout, account and live prices; this hands it the site's buttons and works out bundle savings.
(function () {
  // Buttons say what to do in data-shop (add_to_cart, purchase, download_product, view_cart,
  // view_account) and on what (data-product, data-bundle). Their links are Moonbase's hosted pages,
  // followed instead when the storefront script is blocked or fails to load.
  document.addEventListener('click', function (event) {
    var button = event.target.closest('[data-shop]');
    if (!button || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey) return;
    var action = button.dataset.shop;
    if (!window.Moonbase || typeof window.Moonbase[action] !== 'function') return;
    event.preventDefault();
    var args = {};
    if (button.dataset.product) args.product_id = button.dataset.product;
    if (button.dataset.bundle) args.bundle_id = button.dataset.bundle;
    var result = Object.keys(args).length ? window.Moonbase[action](args) : window.Moonbase[action]();
    if (result && typeof result.catch === 'function') {
      result.catch(function () { if (button.href) window.location.href = button.href; });
    }
  });

  // "Save €78" beside a bundle: the plugins' prices one by one minus the bundle's, in the shopper's currency
  function money(amount, currency) {
    try {
      return new Intl.NumberFormat(undefined, { style: 'currency', currency: currency, currencyDisplay: 'narrowSymbol',
                                                maximumFractionDigits: amount % 1 === 0 ? 0 : 2 }).format(amount);
    } catch (e) {
      return amount + ' ' + currency;
    }
  }

  function updateSavings(storefront) {
    if (!storefront || !storefront.products) return;
    var currency = (storefront.currency || storefront.suggestedCurrency || 'EUR');
    var prices = {};
    storefront.products.forEach(function (p) {
      var v = p.defaultVariation;
      if (v && v.price) prices[p.id] = v.price[currency];
    });
    (storefront.bundles || []).forEach(function (b) {
      var v = b.defaultVariation;
      var bundlePrice = v && v.price ? v.price[currency] : undefined;
      document.querySelectorAll('[data-bundle-saving="' + b.id + '"]').forEach(function (el) {
        var ids = (el.dataset.bundleProducts || '').split(',').filter(Boolean);
        var separate = ids.reduce(function (sum, id) { return sum + (prices[id] || 0); }, 0);
        var amount = el.querySelector('strong');
        if (bundlePrice === undefined || !amount) return;
        el.hidden = separate <= bundlePrice;
        amount.textContent = money(separate - bundlePrice, currency);
      });
    });
  }

  if (window.Moonbase && typeof window.Moonbase.on === 'function') {
    window.Moonbase.on('storefront-updated', function (event) { updateSavings(event && event.storefront); });
  }
})();
