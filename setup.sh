#!/usr/bin/env bash
set -e

echo "═══════════════════════════════════════════"
echo " Fuego Explorer + xfg-api — One-Click Setup"
echo "═══════════════════════════════════════════"
echo ""

# ── Check Node.js ──
if ! command -v node &>/dev/null; then
  echo "❌ Node.js is required. Install it: https://nodejs.org"
  exit 1
fi
echo "✔ Node.js $(node -v)"

# ── Find or clone xfg-api ──
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
XFGAPI_DIR=""

if [ -d "../xfg-api/gateway" ]; then
    XFGAPI_DIR="$(cd ../xfg-api/gateway && pwd)"
    echo "✔ Found xfg-api at $XFGAPI_DIR"
elif [ -d "$SCRIPT_DIR/../xfg-api/gateway" ]; then
    XFGAPI_DIR="$(cd "$SCRIPT_DIR/../xfg-api/gateway" && pwd)"
    echo "✔ Found xfg-api at $XFGAPI_DIR"
else
    echo "⟳ Cloning xfg-api..."
    git clone https://github.com/usexfg/xfg-api.git /tmp/xfg-api-setup 2>/dev/null || true
    if [ -d /tmp/xfg-api-setup/gateway ]; then
        XFGAPI_DIR="/tmp/xfg-api-setup/gateway"
        echo "✔ Cloned to $XFGAPI_DIR"
    else
        echo "❌ Could not find or clone xfg-api."
        echo "   Clone it manually: git clone https://github.com/usexfg/xfg-api.git ../xfg-api"
        exit 1
    fi
fi

# ── Install dependencies ──
echo ""
echo "⟳ Installing xfg-api dependencies..."
cd "$XFGAPI_DIR"
npm install --silent 2>&1 | tail -1
echo "✔ Dependencies installed"

# ── Summary ──
echo ""
echo "═══════════════════════════════════════════"
echo " Setup Complete"
echo "═══════════════════════════════════════════"
echo ""
echo "›› Start the xfg-api gateway:"
echo ""
echo "   MAINNET (default):"
echo "   cd $XFGAPI_DIR && node server.js"
echo ""
echo "   TESTNET:"
echo "   cd $XFGAPI_DIR && CORE_RPC_URL=http://127.0.0.1:28280 node server.js"
echo ""
echo "   CUSTOM RPC:"
echo "   cd $XFGAPI_DIR && CORE_RPC_URL=http://your-node:18180 PORT=8787 node server.js"
echo ""
echo "›› Serve the explorer (in another terminal):"
echo "   cd $SCRIPT_DIR && python3 -m http.server 8080"
echo ""
echo "›› Open: http://localhost:8080?testnet=1  (add ?testnet=1 for testnet)"
echo ""
echo "Default ports:"
echo "   xfg-api gateway :8787 (REST)"
echo "   fuegod mainnet  :18180"
echo "   fuegod testnet  :28280"
echo "   walletd         :8070"
echo ""
