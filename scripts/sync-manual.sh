#!/bin/sh
# Copies a plugin's manual from the plugin repo into this site.
#   scripts/sync-manual.sh Contour [path/to/robotic-audio-plugins]
# The manual lands in plugins/<name>/manual/, with the fonts it expects beside it.
set -e

name="$1"
repo="${2:-../robotic-audio-plugins}"

if [ -z "$name" ] || [ ! -d "$repo/plugins/$name/Manual" ]; then
    echo "usage: scripts/sync-manual.sh <PluginName> [plugin repo]" >&2
    exit 1
fi

cd "$(dirname "$0")/.."
slug=$(echo "$name" | tr '[:upper:]' '[:lower:]')
manual="plugins/$slug/manual"

rm -rf "$manual"
mkdir -p "$manual/fonts"
cp -R "$repo/plugins/$name/Manual/." "$manual/"
cp "$repo"/assets/fonts/*.ttf "$manual/fonts/"

echo "Synced $name manual to $manual"
