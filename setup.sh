#!/usr/bin/env bash
set -e

echo "═══════════════════════════════════════════"
echo " Fuego Explorer — One-Click Setup"
echo "═══════════════════════════════════════════"
echo ""

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
XFGAPI_DIR="$SCRIPT_DIR/xfg-api/gateway"

# ── Check Node.js ──
if ! command -v node &>/dev/null; then
  echo "❌ Node.js is required. Install it: https://nodejs.org"
  exit 1
fi
echo "✔ Node.js $(node -v)"

# ── Init git submodules ──
if [ -d "$SCRIPT_DIR/.git" ]; then
  echo "⟳ Initializing submodules..."
  cd "$SCRIPT_DIR"
  git submodule update --init --recursive 2>/dev/null || true
  echo "✔ Submodules ready"
fi

# ── Install xfg-api dependencies ──
if [ -f "$XFGAPI_DIR/package.json" ]; then
  echo ""
  echo "⟳ Installing xfg-api dependencies..."
  cd "$XFGAPI_DIR"
  npm install --silent 2>&1 | tail -1
  echo "✔ Dependencies installed"
else
  echo "⚠  xfg-api submodule not found at $XFGAPI_DIR"
  echo "   Run: git submodule update --init"
fi

# ── Summary ──
echo ""
echo "═══════════════════════════════════════════"
echo " Setup Complete"
echo "═══════════════════════════════════════════"
echo ""
echo "›› Start the API gateway:"
echo "   cd $XFGAPI_DIR && node server.js"
echo "   (or for testnet: CORE_RPC_URL=http://127.0.0.1:28280 node server.js)"
echo ""
echo "›› Serve the explorer:"
echo "   cd $SCRIPT_DIR && python3 -m http.server 8080"
echo ""
echo "›› Open: http://localhost:8080"
echo "   (add ?testnet=1 for testnet mode)"
echo ""
echo "›› Direct-daemon mode (no gateway):"
echo "   Set USE_GATEWAY = false in config.js"
echo "   Requires daemon started with --enable-cors=*"
echo ""
echo "Ports:"
echo "   explorer   :8080  (static SPA)"
echo "   xfg-api    :8787  (REST gateway)"
echo "   fuegod     :18180 (mainnet) / :28280 (testnet)"
echo ""
