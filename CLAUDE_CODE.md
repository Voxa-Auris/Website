# Claude Code Configuratie voor Voxa Auris

## Project Context

Dit is de Voxa Auris website - een premium AI-automatisering platform gebouwd met React, TypeScript en Vite.

## Belangrijke Bestanden

- `src/components/` - React componenten
  - `AIBall.tsx` - Interactieve 3D AI-bol (Three.js)
  - `Hero.tsx` - Landing hero sectie
  - `Navigation.tsx` - Navigatie menu
  - `ui/` - ShadCN UI componenten
  
- `src/pages/` - Route pagina's
  - `Index.tsx` - Home pagina
  - `Diensten.tsx` - Services pagina
  - `Contact.tsx` - Contact pagina
  
- `src/hooks/` - Custom hooks
- `src/lib/` - Utility functies

## Tech Stack

- React 18.3 + TypeScript 5.8
- Vite 5.4 (build tool)
- Tailwind CSS 3.4 + ShadCN UI
- Three.js + React Three Fiber (3D)
- Framer Motion (animaties)
- React Router (routing)

## Development Commands

```bash
npm run dev      # Start dev server (localhost:8080)
npm run build    # Build voor productie
npm run preview  # Preview productie build
npm run lint     # Lint code
```

## Design System

### Kleuren
- **Background**: #000000 (zwart)
- **Accent**: #f4dd8d (goud/beige)
- **Primary**: #11b4eb (blauw)

### Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## Code Style

- TypeScript strict mode
- Functional components met hooks
- Tailwind voor styling (geen CSS modules)
- Path alias: `@/` = `src/`

## AI Ball Component

De interactieve AI-bol is het centerpiece van de site:

```tsx
<AIBall 
  color="#11b4eb"      // Primary kleur
  accent="#f4dd8d"     // Accent kleur
  followSpeed={0.1}    // Muis-tracking snelheid
  pulseSpeed={2}       // Pulse animatie
/>
```

## Environment Variables

Prefix met `VITE_`:

```env
VITE_AIRTABLE_FORM_URL=https://airtable.com/...
VITE_CONTACT_PHONE=+31640824961
```

Gebruik: `import.meta.env.VITE_VARIABLE_NAME`

## Common Tasks

### Nieuwe pagina toevoegen
1. Maak `src/pages/NieuwePagina.tsx`
2. Update `src/App.tsx` met nieuwe route
3. Update `src/components/Navigation.tsx`

### Nieuwe component toevoegen
1. Maak in `src/components/ComponentNaam.tsx`
2. Gebruik TypeScript interfaces voor props
3. Gebruik Tailwind voor styling

### ShadCN component toevoegen
```bash
npx shadcn-ui@latest add button
```

## Deployment

1. Build: `npm run build`
2. Upload `dist/` naar Hostinger
3. Gebruik `.htaccess.example` voor SPA routing

## Beste Practices

- ✅ TypeScript types voor alle props
- ✅ Responsive design (mobile-first)
- ✅ Lazy loading voor off-screen content
- ✅ Optimized 3D animaties (60fps target)
- ✅ Accessibility (aria labels, keyboard nav)
- ❌ Geen inline styles
- ❌ Geen console.logs in productie
- ❌ Geen massive components (split!)

## Troubleshooting

### "Module not found"
Check `tsconfig.json` paths en `vite.config.ts` alias

### "Build fails"
- Check TypeScript errors: `npx tsc --noEmit`
- Check ESLint: `npm run lint`

### "Routes don't work on Hostinger"
Controleer `.htaccess` configuratie

## Performance Targets

- Lighthouse Score: > 90
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s
- Bundle size: < 500KB gzipped

## Notes voor Claude

- Gebruik altijd TypeScript
- Volg bestaande code patterns
- Test responsive design
- Optimaliseer voor performance
- Behoud design system consistency

---

*Voxa Auris - AI-automatisering die nooit slaapt* 🤖✨
