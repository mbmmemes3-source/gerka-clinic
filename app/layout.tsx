// app/layout.tsx
import type React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

// Import Providers
import { CartProvider } from '@/context/CartContext';

// Import your components
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Gerka Clinic | Regenerative Aesthetic Gynaecology & Wellness Dublin',
    template: '%s | Gerka Clinic',
  },
  description:
    'Gerka Clinic is a leading Dublin aesthetic clinic specialising in aesthetic treatments, regenerative medicine and women’s health, located on Stillorgan Road and serving Mount Merrion, Blackrock and South Dublin.',
  keywords: [
    'Gerka Clinic Dublin',
    'Regenerative Aesthetic Gynaecology Ireland',
    'BTL Emsella Dublin',
    'Women’s Wellness Clinic',
    'Intimate Health Treatments',
    'Vanquish Me Fat Reduction',
    'Labiaplasty Dublin',
    'Aesthetic Medicine Barcelona',
  ],
  metadataBase: new URL('https://www.gerkaclinic.com'),
  alternates: {
    canonical: 'https://www.gerkaclinic.com',
  },
  authors: [{ name: 'Gerka Clinic', url: 'https://www.gerkaclinic.com' }],
  creator: 'Gerka Clinic',
  publisher: 'Gerka Clinic',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Gerka Clinic | Empowering Confidence Through Clinical Excellence',
    description: 'Specialized women’s health and aesthetic clinic in Dublin and Barcelona.',
    url: 'https://www.gerkaclinic.com',
    siteName: 'Gerka Clinic',
    images: [
      {
        url: 'https://www.gerkaclinic.com/og-image.jpg', 
        width: 1200,
        height: 630,
        alt: 'Gerka Clinic Reception',
      },
    ],
    locale: 'en_IE',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Favicons */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <meta name="theme-color" content="#ffffff" />

        {/* JSON-LD Structured Data for Medical Clinic */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                '@context': 'https://schema.org',
                '@type': 'MedicalClinic',
                name: 'Gerka Clinic',
                url: 'https://www.gerkaclinic.com',
                logo: 'https://www.gerkaclinic.com/logo.png',
                description: 'Leading aesthetic and regenerative medicine clinic specializing in women’s wellness.',
                address: {
                  '@type': 'PostalAddress',
                  streetAddress: '1 Priory Office Park, Stillorgan Rd',
                  addressLocality: 'Dublin',
                  postalCode: 'A94NH31',
                  addressCountry: 'IE',
                },
                contactPoint: {
                  '@type': 'ContactPoint',
                  telephone: '+353-878888087',
                  contactType: 'reservations',
                },
                medicalSpecialty: [
                  'Aesthetic Medicine',
                  'Gynaecology',
                  'Regenerative Medicine'
                ]
              }
            ]),
          }}
        />
      </head>
      <body className={`${inter.className} bg-white antialiased`}>
        {/* 
            We wrap the entire body content in CartProvider. 
            This allows Navbar, the Product page, and any future Cart sidebar 
            to share the same state.
        */}
        <CartProvider>
          <Navbar />
          
          <main className="min-h-screen">
            {children}
          </main>
          
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}