"use client"

import { useState } from "react"
import dynamic from "next/dynamic"
import Head from "next/head"
import { motion } from "framer-motion"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero"
import { TreatmentGrid } from "@/components/services"
import { MissionSection } from "@/components/mission"
import { FAQSection } from "@/components/faq"
import { ContactSection } from "@/components/contact"
import { PaymentPlan } from "@/components/payment"
import { TrustedBrands } from "@/components/logo"

// ✅ FIX: Disable SSR for booking component
const AppointmentBooking = dynamic(
  () => import("@/components/appoint"),
  { ssr: false }
)

export default function HomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Gerka Clinic",
    "url": "https://www.gerkaclinic.com",
    "logo": "https://www.gerkaclinic.com/logo.png",
    "description": "Exclusive women's wellness and aesthetic clinic in Dublin specializing in BTL Emsella, Skin Rejuvenation, and feminine health.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1 Priory Office Park, Stillorgan Rd",
      "addressLocality": "Blackrock",
      "addressRegion": "Dublin",
      "postalCode": "A94NH31",
      "addressCountry": "IE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "53.2986",
      "longitude": "-6.1956"
    },
    "telephone": "+353-87-888-8087",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "sameAs": [
      "https://www.instagram.com/gerkaclinic",
      "https://www.facebook.com/gerkaclinic"
    ],
    "priceRange": "€€",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "84"
    }
  }

  return (
    <>
      <Head>
        <title>Gerka Clinic | Premier Women's Wellness & Aesthetics Dublin</title>

        <meta
          name="description"
          content="Gerka Clinic offers advanced aesthetic treatments and intimate women's wellness solutions. Specializing in BTL Emsella, Skin Tightening, and Bio-identical hormones in Stillorgan, Dublin."
        />

        <meta
          name="keywords"
          content="Women's Wellness Dublin, Aesthetic Clinic Stillorgan, BTL Emsella Ireland, Skin Lesion Removal, Labiaplasty Dublin, Skin Tightening, Gerka Clinic"
        />

        <meta name="author" content="Gerka Clinic" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph */}
        <meta property="og:title" content="Gerka Clinic | Premier Women's Wellness & Aesthetics" />
        <meta property="og:description" content="Experience exclusive care at Gerka Clinic. Advanced medical aesthetics and feminine wellness treatments in a private, professional setting." />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:url" content="https://www.gerkaclinic.com" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Gerka Clinic | Women's Wellness" />
        <meta name="twitter:description" content="Expert led aesthetic and intimate health treatments in Dublin." />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <div className="min-h-screen bg-white">
        <Navbar />

        <main>
          <HeroSection />

          <section id="services" className="scroll-mt-20">
            <TreatmentGrid />
          </section>

          <MissionSection />

          <PaymentPlan />

          {/* ✅ Booking section (same UI, now safe) */}
          <section id="booking" className="scroll-mt-20">
            <AppointmentBooking />
          </section>

          <FAQSection />

          <section id="contact" className="scroll-mt-20">
            <ContactSection />
            <TrustedBrands />
          </section>
        </main>

        <Footer />
      </div>
    </>
  )
}