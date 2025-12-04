import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../src/index.css';
import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Voxa Auris - AI Automatisering voor Ondernemers',
  description: 'AI voice agents die je klanten 24/7 te woord staan. Alexander en Olivia kwalificeren leads en plannen afspraken in - zelfs wanneer jij slaapt.',
  keywords: 'AI voice agents, lead kwalificatie, automatisering, Breda, Nederland',
  authors: [{ name: 'Voxa Auris' }],
  openGraph: {
    title: 'Voxa Auris - AI Automatisering voor Ondernemers',
    description: 'AI voice agents die je klanten 24/7 te woord staan. Alexander en Olivia kwalificeren leads en plannen afspraken in.',
    type: 'website',
    url: 'https://voxaauris.nl',
    siteName: 'Voxa Auris',
    images: [
      {
        url: '/Voxa Auris Logo Transparant.png',
        alt: 'Voxa Auris Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Voxa Auris - AI Automatisering',
    description: 'AI voice agents voor 24/7 bereikbaarheid',
    images: ['/Voxa Auris Logo Transparant.png'],
  },
  icons: {
    icon: '/Voxa Auris Logo Transparant.png',
    apple: '/Voxa Auris Logo Transparant.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" className="dark">
      <head>
        {/* Plausible Analytics */}
        <script defer data-domain="voxaauris.nl" src="https://plausible.io/js/script.js"></script>

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Voxa Auris',
              description: 'AI voice agents die je klanten 24/7 te woord staan.',
              url: 'https://voxaauris.nl',
              telephone: '+31762057076',
              email: 'Info@voxa-auris.com',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Breda',
                addressRegion: 'Noord-Brabant',
                addressCountry: 'NL',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: '51.5719',
                longitude: '4.7683',
              },
              openingHoursSpecification: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '09:00',
                closes: '17:00',
              },
              priceRange: '€€',
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Voxa Auris',
              url: 'https://voxaauris.nl',
              logo: 'https://voxaauris.nl/Voxa Auris Logo Transparant.png',
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+31762057076',
                contactType: 'customer service',
                email: 'Info@voxa-auris.com',
                availableLanguage: ['nl', 'en'],
              },
              vatID: 'NL004733082B79',
              taxID: '89475216',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Breda',
                addressRegion: 'Noord-Brabant',
                addressCountry: 'NL',
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <Providers>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            {children}
          </TooltipProvider>
        </Providers>
      </body>
    </html>
  );
}
