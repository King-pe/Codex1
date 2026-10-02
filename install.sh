#!/data/data/com.termux/files/usr/bin/bash
set -eu

ROOT="$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)"
TARGET="${PREFIX:-$HOME/.termux}/bin/codex1"
mkdir -p "$(dirname "$TARGET")"
cp "$ROOT/codex1" "$TARGET"
chmod 755 "$TARGET"
printf '\nCodex1 installed to %s\n' "$TARGET"
printf 'Try: codex1 help\n'
