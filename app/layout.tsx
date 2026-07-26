// app/layout.tsx
import type React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import { CartProvider } from '@/context/CartContext';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Gerka Clinic | Aesthetic Gynaecology & Wellness',
    template: '%s | Gerka Clinic',
  },
  description:
    'Gerka Clinic is a leading Dublin aesthetic clinic specialising in regenerative medicine, aesthetic treatments, and women’s health on Stillorgan Road.',
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
    description:
      'Specialized women’s health and aesthetic clinic in Dublin and Barcelona.',
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
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <meta name="theme-color" content="#ffffff" />

        {/* Google Analytics */}
       {/* Google Ads Tag */}
<Script
  src="https://www.googletagmanager.com/gtag/js?id=AW-18205338617"
  strategy="afterInteractive"
/>

<Script id="google-ads" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'AW-18205338617');
  `}
</Script>

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
                description:
                  'Leading aesthetic and regenerative medicine clinic specializing in women’s wellness.',
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
                  'Regenerative Medicine',
                ],
              },
            ]),
          }}
        />
      </head>

      <body className={`${inter.className} bg-white antialiased`}>
        <Script
          id="google-translate-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              function googleTranslateElementInit() {
                new google.translate.TranslateElement({
                  pageLanguage: 'en',
                  includedLanguages: 'en,es',
                  layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
                  autoDisplay: false
                }, 'google_translate_element');
              }
            `,
          }}
        />

        <Script
          src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          strategy="afterInteractive"
        />

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