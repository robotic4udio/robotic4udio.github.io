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
- `plugins/<name>/manual/`: the plugin's manual, copied from the plugin repo with `scripts/sync-manual.sh Contour`. Don't edit it here.
- `assets/audio/<name>/`: audio demos; list them under `demos:` in the plugin's file.
- `assets/images/<name>/`: screenshots; `image:` and `screenshots:` point at them. The current ones are drawn by the plugin repo's `tools/EditorShots` (e.g. `EchoEngineShots shot.png 1`), then converted to JPEG.
- `_config.yml`: `newsletter_action` turns the "notify me" email links into a sign-up form once a newsletter service is chosen.
- A plugin goes on sale by setting `buy_url` (and `price`) in its file.
