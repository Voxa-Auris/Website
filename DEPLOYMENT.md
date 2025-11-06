# 🚀 GitHub & Hostinger Deployment Guide

Complete gids om je Voxa Auris website naar GitHub te pushen en te deployen op Hostinger.

## 📋 Vereisten

- ✅ Git geïnstalleerd ([git-scm.com](https://git-scm.com))
- ✅ GitHub account ([github.com](https://github.com))
- ✅ Hostinger account met hosting
- ✅ Node.js 18+ geïnstalleerd

## 🔧 Stap 1: Lokale Git Setup

### 1.1 Initialiseer Git repository

```bash
cd voxa-auris-website
git init
```

### 1.2 Configureer Git (eerste keer)

```bash
git config --global user.name "Jouw Naam"
git config --global user.email "jouw@email.com"
```

### 1.3 Voeg alle bestanden toe

```bash
git add .
git status  # Controleer wat er toegevoegd wordt
```

### 1.4 Maak je eerste commit

```bash
git commit -m "🎉 Initial commit - Voxa Auris website"
```

## 🌐 Stap 2: GitHub Repository Aanmaken

### Optie A: Via GitHub Website

1. Ga naar [github.com/new](https://github.com/new)
2. Vul in:
   - **Repository name**: `voxa-auris-website`
   - **Description**: `Premium AI-automatisering website voor Voxa Auris`
   - **Visibility**: Private (aangeraden) of Public
   - **⚠️ BELANGRIJK**: Selecteer GEEN README, .gitignore of license (heb je al!)
3. Klik **Create repository**

### Optie B: Via GitHub CLI (geavanceerd)

```bash
gh repo create voxa-auris-website --private --source=. --remote=origin --push
```

## 📤 Stap 3: Push naar GitHub

### 3.1 Koppel remote repository

Vervang `JOUW-USERNAME` met je GitHub gebruikersnaam:

```bash
git remote add origin https://github.com/JOUW-USERNAME/voxa-auris-website.git
```

Controleer:
```bash
git remote -v
```

### 3.2 Push code naar GitHub

```bash
git branch -M main
git push -u origin main
```

Bij eerste keer pushen:
- **Username**: Je GitHub gebruikersnaam
- **Password**: Je GitHub Personal Access Token (NIET je wachtwoord!)

#### Personal Access Token aanmaken:
1. Ga naar [github.com/settings/tokens](https://github.com/settings/tokens)
2. Klik **Generate new token (classic)**
3. Vink aan: `repo` (full control)
4. Kopieer de token en gebruik deze als password

## 🏗️ Stap 4: Build voor Productie

### 4.1 Installeer dependencies

```bash
npm install
```

### 4.2 Test de build lokaal

```bash
npm run build
```

Dit maakt een `dist/` map met productie-klare bestanden.

### 4.3 Test de productie build

```bash
npm run preview
```

Open `http://localhost:4173` in je browser om te controleren of alles werkt.

## 🌍 Stap 5: Deploy naar Hostinger

### Methode 1: Handmatige Upload (Eenvoudigst)

1. **Build het project**
   ```bash
   npm run build
   ```

2. **Log in op Hostinger**
   - Ga naar [hpanel.hostinger.com](https://hpanel.hostinger.com)
   - Navigeer naar **File Manager**

3. **Upload bestanden**
   - Open `public_html/` (of je domein-map zoals `public_html/voxa-auris.nl/`)
   - Verwijder eventuele bestaande bestanden
   - Upload ALLE bestanden uit de `dist/` map
   - ⚠️ **Let op**: Upload de INHOUD van `dist/`, niet de map zelf

4. **Configureer .htaccess**
   
   Maak een nieuw bestand `.htaccess` in `public_html/`:
   
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

5. **Test je website**
   - Bezoek je domein (bijv. `https://voxa-auris.nl`)
   - Test alle pagina's en links

### Methode 2: Git Deployment (Automatisch) ⭐

Hostinger ondersteunt Git deployment voor automatische updates!

#### 5.1 Activeer Git in Hostinger

1. Log in op Hostinger hPanel
2. Ga naar **Advanced** → **Git**
3. Klik **Create Repository**
4. Vul in:
   - **Repository name**: `voxa-auris-website`
   - **Branch**: `main`
   - **Repository URL**: `https://github.com/JOUW-USERNAME/voxa-auris-website.git`
   - **Target directory**: `/public_html/voxa-auris.nl` (pas aan naar jouw domein)

#### 5.2 Deployment script configureren

In Hostinger Git settings, voeg dit **Post-receive script** toe:

```bash
#!/bin/bash

# Navigeer naar de repository
cd /home/USERNAME/repositories/voxa-auris-website || exit

# Installeer dependencies
npm install --production

# Build het project
npm run build

# Kopieer build naar public_html
rm -rf /home/USERNAME/public_html/voxa-auris.nl/*
cp -r dist/* /home/USERNAME/public_html/voxa-auris.nl/

# Maak .htaccess aan
cat > /home/USERNAME/public_html/voxa-auris.nl/.htaccess << 'EOF'
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
EOF

echo "✅ Deployment successful!"
```

⚠️ **Vervang `USERNAME` en `voxa-auris.nl` met jouw gegevens!**

#### 5.3 Automatisch deployen

Nu kun je automatisch deployen met:

```bash
git add .
git commit -m "Update website"
git push origin main
```

Hostinger zal automatisch:
1. Je code pullen
2. Dependencies installeren
3. Builden
4. Deployen naar je website

## 🔐 Stap 6: Environment Variables Configureren

### 6.1 Lokaal (voor development)

Kopieer `.env.example` naar `.env`:

```bash
cp .env.example .env
```

Pas aan:
```env
VITE_AIRTABLE_FORM_URL=https://airtable.com/appXXX/shrYYY
VITE_CONTACT_PHONE=+31640824961
```

### 6.2 Op Hostinger (voor productie)

Je hebt 2 opties:

**Optie A: Hardcode in build** (voor publieke data)
- Update `.env.example` met productie waarden
- Build lokaal en upload

**Optie B: Server environment variables** (voor gevoelige data)
1. SSH naar je Hostinger server
2. Voeg toe aan `.bashrc`:
   ```bash
   export VITE_AIRTABLE_FORM_URL="https://airtable.com/..."
   export VITE_CONTACT_PHONE="+31640824961"
   ```

## 🛠️ Stap 7: Claude Code Setup

### 7.1 Installeer Claude Code

```bash
npm install -g @anthropic-ai/claude-code
```

Of met pip:
```bash
pip install claude-code
```

### 7.2 Authenticatie

```bash
claude-code auth
```

Volg de instructies om je API key in te voeren.

### 7.3 Gebruik Claude Code

In je project directory:

```bash
# Open chat interface
claude-code

# Direct een taak uitvoeren
claude-code "Voeg een nieuwe sectie toe voor testimonials"

# Werk aan een specifiek bestand
claude-code "Optimaliseer de Hero component voor mobile" src/components/Hero.tsx
```

### 7.4 Claude Code met Git

Claude Code werkt perfect samen met Git:

```bash
# Laat Claude een feature maken
claude-code "Implementeer dark mode toggle"

# Check de changes
git diff

# Commit als je tevreden bent
git add .
git commit -m "✨ Add dark mode toggle"
git push
```

## 🔄 Stap 8: Workflow voor Updates

### Standaard workflow:

```bash
# 1. Maak een nieuwe feature branch (optioneel)
git checkout -b feature/nieuwe-feature

# 2. Maak je wijzigingen (met Claude Code of handmatig)
# ... bewerk bestanden ...

# 3. Test lokaal
npm run dev

# 4. Stage en commit changes
git add .
git commit -m "✨ Beschrijving van je wijziging"

# 5. Push naar GitHub
git push origin feature/nieuwe-feature  # of main

# 6. Build en deploy naar Hostinger
npm run build
# Upload dist/ naar Hostinger (of gebruik Git deployment)
```

### Met Git deployment (automatisch):

```bash
# Maak wijzigingen
# ... edit ...

# Commit en push
git add .
git commit -m "🚀 Update homepage content"
git push origin main

# Hostinger deployed automatisch! ✅
```

## 📊 Nuttige Git Commando's

```bash
# Status checken
git status

# Bekijk history
git log --oneline --graph

# Bekijk changes
git diff

# Nieuwe branch maken
git checkout -b feature/naam

# Switch tussen branches
git checkout main

# Merge een branch
git merge feature/naam

# Ongedaan maken van laatste commit (behoud changes)
git reset --soft HEAD~1

# Volledig ongedaan maken van laatste commit
git reset --hard HEAD~1

# Remote repository bekijken
git remote -v

# Pull laatste changes van GitHub
git pull origin main
```

## 🔍 Troubleshooting

### ❌ "Permission denied (publickey)"

**Oplossing**: Gebruik HTTPS in plaats van SSH:
```bash
git remote set-url origin https://github.com/JOUW-USERNAME/voxa-auris-website.git
```

### ❌ "Build fails on Hostinger"

**Oplossing**: Controleer Node.js versie:
```bash
node --version  # Moet 18+ zijn
```

Update Node via Hostinger panel of contact support.

### ❌ "Routes werken niet (404 op refresh)"

**Oplossing**: Controleer of `.htaccess` correct is geconfigureerd (zie Stap 5).

### ❌ "Git push vraagt telkens om wachtwoord"

**Oplossing 1**: Gebruik Personal Access Token
**Oplossing 2**: Cache credentials:
```bash
git config --global credential.helper cache
```

### ❌ "npm install fails op Hostinger"

**Oplossing**: Gebruik production build zonder dev dependencies:
```bash
npm ci --production
```

## 🎯 Best Practices

### ✅ Do's

- ✅ Commit regelmatig met duidelijke messages
- ✅ Test altijd lokaal voor je pushed
- ✅ Gebruik branches voor grote features
- ✅ Houd `.env` ALTIJD uit Git (staat in .gitignore)
- ✅ Backup je database/CMS data apart
- ✅ Monitor je website na deployment

### ❌ Don'ts

- ❌ Commit NOOIT API keys of secrets
- ❌ Push NIET direct naar `main` zonder testen
- ❌ Upload GEEN `node_modules/` naar Hostinger
- ❌ Gebruik GEEN `git push --force` op `main` branch
- ❌ Vergeet NIET om te builden voor deployment

## 📚 Extra Resources

- [Git Documentation](https://git-scm.com/doc)
- [GitHub Guides](https://guides.github.com)
- [Hostinger Tutorials](https://www.hostinger.com/tutorials)
- [Vite Deployment](https://vitejs.dev/guide/static-deploy.html)
- [Claude Code Docs](https://docs.claude.com/en/docs/claude-code)

## 💡 Volgende Stappen

Na succesvolle deployment:

1. 📊 **Analytics toevoegen** (Google Analytics, Plausible)
2. 🔍 **SEO optimalisatie** (meta tags, sitemap)
3. 🚀 **Performance monitoring** (Lighthouse, GTmetrix)
4. 📧 **Email opzetten** (voor contactformulier)
5. 🔒 **SSL/HTTPS** controleren (meestal automatisch via Hostinger)

## 🆘 Hulp Nodig?

- GitHub Issues: Maak een issue in je repository
- Hostinger Support: 24/7 live chat beschikbaar
- Claude: Vraag hulp aan Claude Code of in de chat

---

**Succes met je deployment! 🚀**

*Voxa Auris — AI-automatisering die nooit slaapt* 🤖✨
