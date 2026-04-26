"use client"

import Link from "next/link"
import { motion } from "framer-motion"

interface Service {
  name: string
  href: string
}

interface ServiceSection {
  title: string
  items: Service[]
}

interface ServiceSidebarProps {
  activeService: string
  categoryTitle: string
}

const faceServices: Service[] = [
  { name: "SkinVive", href: "/face/skinvive" },
  { name: "Face Skin Lesion Removal", href: "/face/skin-lesion-removal" },
  { name: "Exilis® Radiofrequency Facial Tightening", href: "/face/exilis-facial" },
  { name: "Sunekos® Skin Booster", href: "/face/sunekos" },
  { name: "Profhilo® Skin Booster", href: "/face/profhilo" },
  { name: "Polynucleotide Skin Regeneration", href: "/face/polynucleotides" },
  { name: "Cosmelan – Melasma Treatment", href: "/face/cosmelan" },
  { name: "HydraFacial", href: "/face/hydrafacial" },
  { name: "Medical Skin Resurfacing", href: "/face/peels" },
  { name: "PRP Facial Rejuvenation", href: "/face/prp-facial" },
  { name: "Anti-Wrinkle Treatments", href: "/face/anti-wrinkle" },
  { name: "Acne & Rosacea", href: "/face/acne-rosacea" },
]

const bodyServices: Service[] = [
  { name: "Vanquish ME® Body Contouring", href: "/body/vanquish" },
  { name: "Fat Reduction – DesoBody", href: "/body/desobody" },
  { name: "Cellulite Treatment", href: "/body/cellulite" },
  { name: "Body Pigmentation Treatment", href: "/body/pigmentation" },
  { name: "Exilis Body Skin Tightening", href: "/body/exilis-body" },
  { name: "Postpartum Scar Treatment", href: "/body/postpartum-scar" },
  { name: "Body Skin Lesion Removal", href: "/body/lesion-removal" },
]

// UPDATED DATA STRUCTURE
const womensHealthServices: ServiceSection[] = [
  {
    title: "MEDICAL / VULVAL HEALTH",
    items: [
       { name: "Private Smear Test Dublin", href: "/womens-health/private-smear-test-dublin" },
      { name: "Vulval Lichen Specialist Care", href: "/womens-health/vulval-lichen" },
      { name: "Vaginal Dryness & Genitourinary Syndrome Support", href: "/womens-health/vaginal-dryness" },
    ]
  },
  {
    title: "FUNCTIONAL",
    items: [
      { name: "Emsella® Chair Pelvic Floor Treatment", href: "/womens-health/emsella" },
      { name: "Vaginal PRP Treatment", href: "/womens-health/prp" },
      { name: "O-Shot® & P-Shot® (Sexual Wellness)", href: "/womens-health/oshot-pshot" }, // Added here
      { name: "Vaginismus: Advanced Specialist Treatment", href: "/womens-health/vaginismus" },
    ]
},
  {
    title: "AESTHETIC / SURGICAL",
    items: [
      { name: "Postpartum Scar Treatment", href: "/womens-health/postpartum-scar" },
      // { name: "Skin Lesion Removal", href: "/womens-health/skin-lesion-removal" },
      { name: "Exilis Ultra Femme® Vaginal Tightening", href: "/womens-health/exilis-ultra-femme" },
      { name: "Hymenoplasty (Surgical)", href: "/womens-health/hymenoplasty" },
      { name: "Labiaplasty (Surgical)", href: "/womens-health/labiaplasty" },
      { name: "Intimate Area Lesion Removal", href: "/womens-health/intimate-lesion-removal" },
    ]
  }
]

export function ServiceSidebar({ activeService, categoryTitle }: ServiceSidebarProps) {
  const isWomensHealth = categoryTitle.toLowerCase().includes("women")

  return (
    <aside className="hidden lg:block lg:col-span-3">
      <div className="sticky top-32 space-y-10">
        <motion.div 
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-400 mb-8 border-b border-zinc-100 pb-4">
            {categoryTitle}
          </h4>

          {isWomensHealth ? (
            /* Render Sectioned Layout for Women's Health (3 Sections) */
            <div className="space-y-10">
              {womensHealthServices.map((section) => (
                <div key={section.title}>
                  <h5 className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-zinc-900 mb-5">
                    {section.title}
                  </h5>
                  <ul className="space-y-5">
                    {section.items.map((service) => {
                      // Comparison logic for active state
                      const isActive = activeService === service.name
                      return (
                        <li key={service.name}>
                          <Link 
                            href={service.href} 
                            className={`text-[13px] tracking-wide transition-all duration-300 block relative group ${
                              isActive 
                                ? "text-zinc-900 font-bold border-l-2 border-zinc-900 pl-4" 
                                : "text-zinc-500 hover:text-zinc-900 pl-4 border-l-2 border-transparent hover:border-zinc-200"
                            }`}
                          >
                            {service.name}
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              ))}
            </div>
          ) : (
            /* Render Standard Flat Layout for Face/Body */
            <ul className="space-y-5">
              {(categoryTitle.toLowerCase().includes("face") ? faceServices : bodyServices).map((service) => {
                const isActive = activeService === service.name
                return (
                  <li key={service.name}>
                    <Link 
                      href={service.href} 
                      className={`text-[13px] tracking-wide transition-all duration-300 block relative group ${
                        isActive 
                          ? "text-zinc-900 font-bold border-l-2 border-zinc-900 pl-4" 
                          : "text-zinc-400 hover:text-zinc-900 pl-4 border-l-2 border-transparent hover:border-zinc-200"
                      }`}
                    >
                      {service.name}
                    </Link>
                  </li>
                )
              })}
            </ul>
          )}
        </motion.div>
      </div>
    </aside>
  )
}