# ⚡ Quick Start: GitHub Setup

Voor de volledige gids, zie [DEPLOYMENT.md](./DEPLOYMENT.md)

## 🚀 In 5 minuten op GitHub

### 1️⃣ Git Initialiseren

```bash
cd voxa-auris-website
git init
git add .
git commit -m "🎉 Initial commit"
```

### 2️⃣ GitHub Repository Maken

Ga naar [github.com/new](https://github.com/new) en maak een nieuwe repository aan:
- **Naam**: `voxa-auris-website`
- **Visibility**: Private
- **⚠️ NIET** aanvinken: README, .gitignore, license (heb je al!)

### 3️⃣ Push naar GitHub

Vervang `JOUW-USERNAME`:

```bash
git remote add origin https://github.com/JOUW-USERNAME/voxa-auris-website.git
git branch -M main
git push -u origin main
```

**Password**: Gebruik je [Personal Access Token](https://github.com/settings/tokens), niet je wachtwoord!

## 🌐 Deploy naar Hostinger

### Eenvoudigste methode:

```bash
# Build
npm install
npm run build

# Upload dist/ naar Hostinger via File Manager
```

Zie [DEPLOYMENT.md](./DEPLOYMENT.md) voor:
- ✅ Automatische Git deployment
- ✅ .htaccess configuratie
- ✅ Claude Code setup
- ✅ Troubleshooting

## 📝 Updates maken

```bash
# Maak changes
git add .
git commit -m "✨ Update beschrijving"
git push

# Build en upload opnieuw
npm run build
# Upload dist/ naar Hostinger
```

---

**Klaar!** 🎉 Je code staat nu veilig op GitHub en draait op Hostinger.
