#!/bin/bash

# 🚀 Voxa Auris Deployment Script
# Dit script bouwt je project en bereidt het voor op upload naar Hostinger

set -e  # Stop bij fouten

echo "🚀 Voxa Auris - Deployment Script"
echo "=================================="
echo ""

# Check of Node.js beschikbaar is
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is niet geïnstalleerd!"
    echo "   Download: https://nodejs.org"
    exit 1
fi

echo "✅ Node.js versie: $(node --version)"
echo ""

# Vraag bevestiging
read -p "🔨 Wil je een productie build maken? (y/n) " -n 1 -r
echo ""
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "❌ Build geannuleerd"
    exit 0
fi

# Installeer dependencies
echo "📦 Dependencies installeren..."
npm install

# Lint check
echo ""
echo "🔍 Code checken..."
npm run lint || echo "⚠️  Lint warnings gevonden (niet kritiek)"

# Build voor productie
echo ""
echo "🏗️  Productie build maken..."
npm run build

# Check of build succesvol was
if [ -d "dist" ]; then
    echo ""
    echo "✅ Build succesvol!"
    echo ""
    echo "📁 Bestanden klaar in: ./dist/"
    echo ""
    echo "📋 Volgende stappen:"
    echo "   1. Log in op Hostinger File Manager"
    echo "   2. Navigeer naar public_html/ (of je domein-map)"
    echo "   3. Verwijder oude bestanden"
    echo "   4. Upload ALLE bestanden uit ./dist/"
    echo "   5. Kopieer .htaccess.example naar .htaccess"
    echo ""
    echo "🌐 Of gebruik SFTP/FTP voor snellere upload:"
    echo "   - Host: ftp.hostinger.com (of je domein)"
    echo "   - Port: 21 (FTP) of 22 (SFTP)"
    echo "   - Upload ./dist/* naar /public_html/"
    echo ""
    
    # Optie om zip te maken
    read -p "📦 Wil je een ZIP maken voor eenvoudige upload? (y/n) " -n 1 -r
    echo ""
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        TIMESTAMP=$(date +%Y%m%d_%H%M%S)
        ZIP_NAME="voxa-auris-deploy-${TIMESTAMP}.zip"
        
        cd dist
        zip -r "../${ZIP_NAME}" .
        cd ..
        
        echo ""
        echo "✅ ZIP gemaakt: ${ZIP_NAME}"
        echo "   Upload deze ZIP via Hostinger File Manager"
        echo "   en pak uit in public_html/"
    fi
    
else
    echo ""
    echo "❌ Build gefaald! Check de errors hierboven."
    exit 1
fi

echo ""
echo "🎉 Klaar voor deployment!"
echo "=================================="
