# 🤖 Voxa Auris Website

Premium AI-automatisering website gebouwd met React, TypeScript en Vite. Interactieve, high-tech en sales-gedreven.

![Tech Stack](https://img.shields.io/badge/React-18.3-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue)
![Vite](https://img.shields.io/badge/Vite-5.4-purple)
![Tailwind](https://img.shields.io/badge/Tailwind-3.4-cyan)

## 📋 Inhoudsopgave

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Installatie](#-installatie)
- [Development](#-development)
- [Build & Deployment](#-build--deployment)
- [Projectstructuur](#-projectstructuur)
- [Design System](#-design-system)
- [Configuratie](#-configuratie)
- [Integraties](#-integraties)

## ✨ Features

- 🎨 **Interactieve AI-bol** met Three.js en Framer Motion
- 📱 **Volledig responsive** voor mobile, tablet en desktop
- ⚡ **Optimale performance** met lazy loading en tree-shaking
- 🎯 **SPA routing** met React Router
- 🎭 **Vloeiende animaties** met Framer Motion
- 🧩 **Herbruikbare UI componenten** via ShadCN
- 📝 **TypeScript** voor type-veiligheid
- 🎪 **3D visualisaties** met React Three Fiber

## 🛠️ Tech Stack

### Core
- **React 18.3** - UI framework
- **TypeScript 5.8** - Type-safe JavaScript
- **Vite 5.4** - Build tool en dev server

### Styling & UI
- **Tailwind CSS 3.4** - Utility-first CSS
- **ShadCN UI** - Herbruikbare component library
- **Framer Motion 11.18** - Animatie library

### 3D & Visualisaties
- **Three.js 0.160** - 3D graphics
- **React Three Fiber 8.18** - React renderer voor Three.js
- **React Three Drei 9.122** - Helpers voor R3F

### Routing & State
- **React Router 6.30** - Client-side routing
- **TanStack Query 5.83** - Data fetching en caching

### Forms & Validation
- **React Hook Form 7.61** - Form state management
- **Zod 3.25** - Schema validation

## 🚀 Installatie

### Vereisten

- Node.js 18.x of hoger
- npm 9.x of hoger

### Stappen

```bash
# Clone de repository
git clone [repository-url]
cd voxa-auris-fixed

# Installeer dependencies
npm install

# Kopieer environment variables
cp .env.example .env

# Pas .env aan met jouw configuratie
nano .env
```

## 💻 Development

### Start development server

```bash
npm run dev
```

De applicatie draait op `http://localhost:8080`

### Beschikbare scripts

```bash
# Start dev server
npm run dev

# Build voor productie
npm run build

# Build voor development
npm run build:dev

# Lint code
npm run lint

# Preview productie build
npm run preview
```

## 📦 Build & Deployment

### Build proces

```bash
# Productie build
npm run build
```

Dit genereert een `dist/` map met geoptimaliseerde statische bestanden.

### Deployment naar Hostinger

1. **Build het project**
   ```bash
   npm install
   npm run build
   ```

2. **Upload naar Hostinger**
   - Log in op Hostinger control panel
   - Open **File Manager**
   - Navigeer naar `public_html/` (of je domein-map)
   - Upload alle bestanden uit de `dist/` map
   - Zorg dat bestanden in de root staan (niet in `dist` submap)

3. **Configureer .htaccess voor SPA routing**
   
   Maak een `.htaccess` bestand in `public_html/`:
   
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

### Alternatieve deployment platforms

- **Vercel**: `npm i -g vercel && vercel`
- **Netlify**: Drag & drop `dist/` folder
- **GitHub Pages**: Gebruik `gh-pages` package

## 📁 Projectstructuur

```
voxa-auris-fixed/
├── src/
│   ├── components/          # React componenten
│   │   ├── ui/             # ShadCN UI componenten
│   │   ├── AIAgents.tsx    # AI Agents sectie
│   │   ├── AIBall.tsx      # Interactieve AI-bol
│   │   ├── AIOrb.tsx       # AI Orb component
│   │   ├── Benefits.tsx    # Benefits sectie
│   │   ├── CTASection.tsx  # Call-to-Action
│   │   ├── Footer.tsx      # Website footer
│   │   ├── Hero.tsx        # Hero sectie
│   │   └── Navigation.tsx  # Navigatie menu
│   ├── pages/              # Route pagina's
│   │   ├── Index.tsx       # Home pagina
│   │   ├── Diensten.tsx    # Services pagina
│   │   ├── Over.tsx        # Over ons pagina
│   │   ├── Contact.tsx     # Contact pagina
│   │   └── NotFound.tsx    # 404 pagina
│   ├── hooks/              # Custom React hooks
│   │   ├── use-mobile.tsx  # Mobile detection
│   │   └── use-toast.ts    # Toast notifications
│   ├── lib/                # Utility functies
│   │   └── utils.ts        # Helper functies
│   ├── assets/             # Statische bestanden
│   ├── App.tsx             # Root component
│   ├── App.css             # Global styles
│   ├── main.tsx            # Entry point
│   ├── index.css           # Tailwind base styles
│   └── vite-env.d.ts       # Vite type definitions
├── public/                 # Publieke statische bestanden
├── .env.example            # Environment variables template
├── .gitignore              # Git ignore regels
├── components.json         # ShadCN configuratie
├── eslint.config.js        # ESLint configuratie
├── index.html              # HTML template
├── package.json            # Dependencies en scripts
├── postcss.config.js       # PostCSS configuratie
├── tailwind.config.ts      # Tailwind configuratie
├── tsconfig.json           # TypeScript configuratie
├── tsconfig.app.json       # TS config voor app
├── tsconfig.node.json      # TS config voor Node
└── vite.config.ts          # Vite configuratie
```

## 🎨 Design System

### Kleuren

```css
--background: #000000    /* Zwart */
--accent: #f4dd8d       /* Goud/Beige */
--primary: #11b4eb      /* Blauw */
```

### AI Ball Component

De interactieve AI-bol is volledig aanpasbaar:

```tsx
<AIBall 
  color="#11b4eb"      // Primaire kleur (blauw)
  accent="#f4dd8d"     // Accent kleur (goud)
  followSpeed={0.1}    // Muis-volg snelheid (0.1 = subtiel)
  pulseSpeed={2}       // Pulse animatie snelheid (seconden)
/>
```

#### Aanpassingsopties

| Prop | Type | Default | Beschrijving |
|------|------|---------|--------------|
| `color` | string | `#11b4eb` | Primaire kleur van de bol |
| `accent` | string | `#f4dd8d` | Accent/gradient kleur |
| `followSpeed` | number | `0.1` | Snelheid muis-tracking (0.05-0.3) |
| `pulseSpeed` | number | `2` | Pulse animatie duur in seconden |

### Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ⚙️ Configuratie

### TypeScript Path Alias

Het project gebruikt `@/` als alias voor de `src/` directory:

```typescript
// In plaats van
import { Button } from '../../../components/ui/button'

// Gebruik
import { Button } from '@/components/ui/button'
```

Geconfigureerd in:
- `vite.config.ts`: `alias: { "@": path.resolve(__dirname, "./src") }`
- `tsconfig.json`: `paths: { "@/*": ["./src/*"] }`

### Environment Variables

Alle environment variables moeten prefixed worden met `VITE_`:

```env
VITE_AIRTABLE_FORM_URL=https://airtable.com/appXXX/shrYYY
VITE_CONTACT_PHONE=+31640824961
```

Gebruik in code:

```typescript
const formUrl = import.meta.env.VITE_AIRTABLE_FORM_URL
```

## 🔌 Integraties

### Airtable Formulier

Update de Airtable embed URL in `.env`:

```env
VITE_AIRTABLE_FORM_URL=https://airtable.com/appYourFormId/shrYourFormId
```

Gebruikt in:
- `src/components/CTASection.tsx`
- `src/pages/Diensten.tsx`
- `src/pages/Contact.tsx`

### ElevenLabs / Voice Agent

Update het telefoonnummer in `.env`:

```env
VITE_CONTACT_PHONE=+31640824961
```

Gebruikt in:
- `src/components/Hero.tsx`
- `src/pages/Diensten.tsx`

## 📱 Pagina's

| Route | Pagina | Beschrijving |
|-------|--------|--------------|
| `/` | Home | Hero + Benefits + AI Agents + CTA |
| `/diensten` | Services | AI Voice Agents, Lead Scraper, RAG, Social Media |
| `/over` | Over Ons | Bedrijfsinformatie |
| `/contact` | Contact | Contact formulier + bel-knop |
| `*` | 404 | Niet gevonden pagina |

## ⚡ Performance

- ✅ Tree-shaking via Vite
- ✅ Code splitting per route
- ✅ Lazy loading voor off-screen content
- ✅ Optimized 3D animaties (60fps)
- ✅ Gecomprimeerde assets
- ✅ Modern build output (ES2020)

## 🧪 Testing

```bash
# Lint check
npm run lint

# Type check
npx tsc --noEmit

# Preview build lokaal
npm run build && npm run preview
```

## 🤝 Contributing

Dit is een privé project voor Voxa Auris. Voor vragen of wijzigingen, neem contact op met het development team.

## 📝 License

Proprietary - © 2025 Voxa Auris

---

**Voxa Auris** — AI-automatisering die nooit slaapt 🤖✨

## 🚀 Quick Start

### Lokaal ontwikkelen

```bash
# Installeer dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:8080
```

### Deployen naar productie

```bash
# Build voor productie
npm run build

# Preview build
npm run preview
```

Zie [QUICKSTART.md](./QUICKSTART.md) voor GitHub setup en [DEPLOYMENT.md](./DEPLOYMENT.md) voor volledige deployment guide.

## 📦 Project Bestanden

- **[QUICKSTART.md](./QUICKSTART.md)** - In 5 minuten op GitHub
- **[DEPLOYMENT.md](./DEPLOYMENT.md)** - Volledige deployment gids (GitHub + Hostinger)
- **[CLAUDE_CODE.md](./CLAUDE_CODE.md)** - Claude Code configuratie en tips
- **[.htaccess.example](./.htaccess.example)** - Apache config voor SPA routing
- **[deploy.sh](./deploy.sh)** - Automatisch deployment script

## 🔗 Links

- 🌐 [Website](https://www.voxa-auris.com)
- 🎨 [Lovable Project](https://lovable.dev/projects/4aa2acb1-70dc-4336-ba0a-897942004205)
- 📚 [GitHub Repository](https://github.com/Voxa-Auris/Website)

## 📞 Support

Voor technische vragen of support:
- 📧 Email: [contact email]
- 📱 Telefoon: +31640824961
- 💬 GitHub Issues: Voor bugs en feature requests
