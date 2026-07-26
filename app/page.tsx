import type { Metadata } from "next"
import dynamic from "next/dynamic"

import { HeroSection } from "@/components/hero"
import { TreatmentGrid } from "@/components/services"
import { MissionSection } from "@/components/mission"
import { FAQSection } from "@/components/faq"
import { ContactSection } from "@/components/contact"
import { PaymentPlan } from "@/components/payment"
import { TrustedBrands } from "@/components/logo"

// ✅ Disable SSR for booking component
const AppointmentBooking = dynamic(
  () => import("@/components/appoint"),
  { ssr: false }
)

export const metadata: Metadata = {
  title: "Gerka Clinic | Aesthetic, Skin & Women's Health Dublin",
  description: "Gerka Clinic is a leading Dublin aesthetic clinic specialising in regenerative medicine, skin rejuvenation, and intimate women's health on Stillorgan Road.",
  alternates: {
    canonical: "https://www.gerkaclinic.com",
  },
}

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="min-h-screen bg-white">
        <main>
          <HeroSection />

          <section id="services" className="scroll-mt-20">
            <TreatmentGrid />
          </section>

          <MissionSection />

          <PaymentPlan />

          {/* ✅ Booking section */}
          <section id="booking" className="scroll-mt-20">
            <AppointmentBooking />
          </section>

          <FAQSection />

          <section id="contact" className="scroll-mt-20">
            <ContactSection />
            <TrustedBrands />
          </section>
        </main>
      </div>
    </>
  )
}