# 🔄 Automatische Deployment Workflow

Deze guide legt uit hoe de automatische deployment van Voxa Auris website werkt.

## 🎯 Hoe het werkt

```
Wijziging maken → Push naar GitHub → Automatisch builden → Deploy naar Hostinger → Live! 🎉
```

## 📋 Eenmalige Setup (Doe dit NU)

### Stap 1: GitHub Secrets Instellen

Je moet FTP credentials toevoegen aan GitHub zodat het kan deployen naar Hostinger.

1. **Ga naar je GitHub repository**:
   - https://github.com/Voxa-Auris/Website

2. **Open Settings**:
   - Klik op **Settings** (bovenaan)
   - Klik op **Secrets and variables** → **Actions**

3. **Voeg deze 4 secrets toe** (klik op "New repository secret" voor elk):

   #### Secret 1: `FTP_SERVER`
   - **Name**: `FTP_SERVER`
   - **Value**: Je Hostinger FTP server (bijv. `ftp.voxa-auris.com` of `ftp.yourdomain.com`)
   - Je vindt dit in Hostinger → **File Manager** → **FTP Accounts**

   #### Secret 2: `FTP_USERNAME`
   - **Name**: `FTP_USERNAME`
   - **Value**: Je FTP gebruikersnaam (bijv. `u123456789` of `website@voxa-auris.com`)

   #### Secret 3: `FTP_PASSWORD`
   - **Name**: `FTP_PASSWORD`
   - **Value**: Je FTP wachtwoord

   #### Secret 4: `FTP_SERVER_DIR`
   - **Name**: `FTP_SERVER_DIR`
   - **Value**: De map waar je website staat (bijv. `/public_html/` of `/public_html/voxa-auris.com/`)
   - **⚠️ BELANGRIJK**: Moet eindigen met een `/`

### Stap 2: Hostinger FTP Account Vinden

Als je je FTP credentials niet weet:

1. Log in op [Hostinger hPanel](https://hpanel.hostinger.com)
2. Ga naar **Files** → **FTP Accounts**
3. Klik op **Configure FTP Client** bij je account
4. Noteer:
   - **Hostname** → Dit is je `FTP_SERVER`
   - **Username** → Dit is je `FTP_USERNAME`
   - **Port** (meestal 21)
   - **Directory** → Dit is je `FTP_SERVER_DIR`

5. Als je het wachtwoord niet meer weet:
   - Klik op **Change Password** om een nieuw wachtwoord in te stellen
   - Gebruik dit nieuwe wachtwoord als `FTP_PASSWORD`

### Stap 3: Test de Setup

Na het instellen van de secrets:

1. Ga naar **Actions** tab in je GitHub repository
2. Klik op **🚀 Deploy to Hostinger** workflow
3. Klik op **Run workflow** → **Run workflow**
4. Wacht ~2 minuten
5. Check of je website live is op https://www.voxa-auris.com

## 🚀 Dagelijks Gebruik

### Voor Claude (geautomatiseerd)

Wanneer je wijzigingen wilt:

1. **Stuur me je verzoek**, bijvoorbeeld:
   - "Voeg een nieuwe pagina toe voor Pricing"
   - "Wijzig de tekst op de homepage"
   - "Voeg een nieuw component toe voor testimonials"

2. **Ik doe dan automatisch**:
   ```bash
   # Implementeer de wijziging
   # Test lokaal
   npm run build

   # Commit naar GitHub
   git add .
   git commit -m "Beschrijving van wijziging"
   git push origin main
   ```

3. **GitHub Actions neemt het over**:
   - Installeert dependencies
   - Runt lint checks
   - Bouwt de productie versie
   - Deployed automatisch naar Hostinger
   - Je site is binnen 2-3 minuten live! 🎉

### Handmatig (als je zelf wijzigingen maakt)

```bash
# 1. Maak je wijzigingen in code
# 2. Test lokaal
npm run dev

# 3. Commit en push
git add .
git commit -m "Beschrijf je wijziging"
git push origin main

# 4. Deployment gebeurt automatisch! ✨
```

## 📊 Deployment Status Checken

### GitHub Actions Dashboard

1. Ga naar **Actions** tab: https://github.com/Voxa-Auris/Website/actions
2. Zie alle deployments en hun status:
   - ✅ Groen = Succesvol
   - 🔴 Rood = Gefaald
   - 🟡 Geel = Bezig

### Live Logs Bekijken

1. Klik op een workflow run
2. Klik op **build-and-deploy** job
3. Zie real-time logs van:
   - Build process
   - FTP upload
   - Deployment status

## 🔧 Workflow Details

### Wanneer Deployment Triggert

De workflow start automatisch bij:
- ✅ Push naar `main` branch
- ✅ Handmatige trigger via GitHub UI (Actions → Run workflow)

### Wat er Gebeurt (stap voor stap)

1. **📥 Code Ophalen**: Haalt laatste code van GitHub
2. **📦 Node.js Setup**: Installeert Node.js 18
3. **📚 Dependencies**: Installeert alle NPM packages
4. **🔍 Linting**: Controleert code quality (warnings stoppen deployment niet)
5. **🏗️ Build**: Maakt productie build in `dist/` folder
6. **📊 Artifact**: Slaat build op (7 dagen backup)
7. **🌐 FTP Deploy**: Upload `dist/` naar Hostinger
8. **✅ Complete**: Site is live!

### Build Output

De build maakt:
```
dist/
├── index.html          # Hoofd HTML
├── CNAME              # Domein configuratie
├── .htaccess          # Apache config voor SPA routing
└── assets/
    ├── index-[hash].js   # JavaScript bundle
    └── index-[hash].css  # CSS bundle
```

## 🛠️ Troubleshooting

### ❌ Deployment Faalt

**1. Check FTP Credentials**
- Ga naar Settings → Secrets and variables → Actions
- Verifieer dat alle 4 secrets correct zijn ingesteld
- Test FTP login met FileZilla of een andere FTP client

**2. Check FTP_SERVER_DIR**
- Moet eindigen met `/` (bijv. `/public_html/`)
- Check of de map bestaat in Hostinger
- Probeer `/public_html/` of `/domains/voxa-auris.com/public_html/`

**3. Check GitHub Actions Logs**
- Ga naar Actions tab
- Klik op de gefaalde run
- Bekijk de foutmelding in de logs

### ⚠️ Site Werkt Niet Na Deployment

**1. Routing Issues (404 op pagina refresh)**
- Check of `.htaccess` correct is geüpload
- Verifieer Apache mod_rewrite is enabled in Hostinger

**2. Bestanden Niet Zichtbaar**
- Check `FTP_SERVER_DIR` in secrets
- Login via Hostinger File Manager en verifieer bestanden

**3. SSL/HTTPS Issues**
- Zorg dat SSL is geactiveerd in Hostinger
- Uncomment de HTTPS redirect regels in `.htaccess`

### 🐛 Veelvoorkomende Fouten

| Fout | Oorzaak | Oplossing |
|------|---------|-----------|
| `530 Login authentication failed` | Verkeerde FTP credentials | Check `FTP_USERNAME` en `FTP_PASSWORD` |
| `550 No such directory` | Verkeerde map | Check `FTP_SERVER_DIR` (moet eindigen met `/`) |
| `Build failed` | Code errors | Check Actions logs voor specifieke fout |
| `CNAME already exists` | Duplicate CNAME | Dit is normaal, geen probleem |

## 🎯 Best Practices

### ✅ DO's

- ✅ Test altijd lokaal voor je pushed (`npm run dev`)
- ✅ Gebruik duidelijke commit messages
- ✅ Check Actions tab na elke push
- ✅ Houd FTP credentials veilig (gebruik alleen GitHub Secrets)
- ✅ Maak backups van belangrijke wijzigingen

### ❌ DON'Ts

- ❌ Commit NOOIT FTP credentials in code
- ❌ Push niet direct naar `main` zonder testen
- ❌ Verwijder geen bestanden handmatig van server tijdens deployment
- ❌ Wijzig .htaccess op server (edit lokaal en push)

## 📁 Bestandsstructuur

```
voxa-auris-website/
├── .github/
│   └── workflows/
│       ├── build.yml       # Build & test workflow
│       └── deploy.yml      # Deployment workflow ⭐
├── public/
│   ├── CNAME              # Domein configuratie
│   └── .htaccess          # Apache configuratie ⭐
├── src/                   # Source code
├── dist/                  # Build output (auto-generated)
└── WORKFLOW.md            # Deze file! 📖
```

## 🔐 Security

- 🔒 FTP credentials zijn veilig opgeslagen in GitHub Secrets
- 🔒 Secrets zijn NOOIT zichtbaar in logs
- 🔒 Alleen repository admins kunnen secrets bekijken/wijzigen
- 🔒 `.htaccess` bevat security headers voor extra bescherming

## 📞 Hulp Nodig?

### Quick Fixes

**Deployment is rood in Actions:**
```bash
# 1. Check de error in Actions logs
# 2. Fix het probleem lokaal
# 3. Push opnieuw
git push origin main
```

**Site niet bereikbaar:**
```bash
# 1. Check DNS settings in Hostinger
# 2. Verifieer CNAME record: www.voxa-auris.com
# 3. Wacht tot 24 uur voor DNS propagatie
```

**Wijzigingen niet zichtbaar:**
```bash
# 1. Hard refresh: Ctrl+Shift+R (Windows) / Cmd+Shift+R (Mac)
# 2. Clear browser cache
# 3. Check Actions tab of deployment succesvol was
```

### Contact

- **GitHub Issues**: [Create an issue](https://github.com/Voxa-Auris/Website/issues)
- **Hostinger Support**: 24/7 live chat in hPanel
- **Claude**: Stuur me een bericht! 🤖

---

## 🎉 Klaar!

Je hebt nu een volledig geautomatiseerde deployment workflow! 🚀

**Workflow samenvatting:**
```
Jij zegt wat je wil → Claude implementeert → Push naar GitHub → Automatisch live → Geniet! ☕
```

**Deployment tijd:** ~2-3 minuten van push tot live ⚡

**Geen handmatig werk meer nodig!** 🎊

---

*Voxa Auris — AI die nooit slaapt* 🤖✨
