"use client"

import { useState, useEffect } from "react"
import { createPortal } from "react-dom"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown, ChevronRight, ShoppingBag, Globe } from "lucide-react"
import { useCart } from "@/context/CartContext"

function LanguageSwitcher() {
  const [lang, setLang] = useState('en')
  
  useEffect(() => {
    if (document.cookie.includes('googtrans=/en/es') || document.cookie.includes('googtrans=/auto/es')) {
      setLang('es')
    } else {
      setLang('en')
    }
  }, [])

  const toggleLanguage = () => {
  if (lang === "en") {
    document.cookie = "googtrans=/en/es; path=/";
  } else {
    document.cookie =
      "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  }

  window.location.reload();
};

  return (
    <button 
      onClick={toggleLanguage}
      className="flex items-center gap-1 p-2 text-zinc-800 hover:text-zinc-500 transition-colors"
      title="Toggle Language"
    >
      <Globe size={18} strokeWidth={1.5} />
      <span className="text-[10px] font-bold mt-0.5">{lang === 'en' ? 'ES' : 'EN'}</span>
    </button>
  )
}

const navItems = [
  { href: "/about", label: "About Us" },
  { 
    href: "#", 
    label: "Face",
    dropdown: [
      { label: "SkinVive", href: "/face/skinvive" },
      { label: "Face Skin Lesion Removal", href: "/face/skin-lesion-removal" },
      { label: "Exilis® Radiofrequency Facial Tightening", href: "/face/exilis" },
      { label: "Sunekos® Skin Booster", href: "/face/sunekos" },
      { label: "Profhilo® Skin Booster", href: "/face/profhilo" },
      { label: "Polynucleotides", href: "/face/polynucleotides" },
      { label: "Cosmelan – Professional Melasma Treatment", href: "/face/cosmelan" },
      { label: "HydraFacial – Deep Cleansing & Skin Renewal", href: "/face/hydrafacial" },
      { label: "Chemical Peels – Medical Skin Resurfacing", href: "/face/peels" },
      { label: "PRP Facial Rejuvenation", href: "/face/prp-facial" },
      { label: "Anti-Wrinkle Neuromodulator Treatments", href: "/face/anti-wrinkle" },
      { label: "Acne & Rosacea", href: "/face/acne-rosacea" },
    ]
  },
  { 
    href: "#", 
    label: "Body",
    dropdown: [
      { label: "Vanquish ME® Body Contouring", href: "/body/vanquish" },
      { label: "Fat Reduction – DesoBody Injectables", href: "/body/desobody" },
      { label: "Cellulite Treatment – Subcision & Sunekos Cell 15", href: "/body/cellulite" },
      { label: "Pigmentation Treatment", href: "/body/pigmentation" },
      { label: "Exilis Body Skin Tightening", href: "/body/exilis-body" },
      { label: "Postpartum Scar Treatment", href: "/body/postpartum-scar" },
      { label: "Body Skin Lesion Removal", href: "/body/lesion-removal" }
    ]
  },
  { 
    href: "#", 
    label: "Hair & Nail",
    dropdown: [
      { label: "Hair Loss Restoration", href: "/hair-loss-treatments" },
      { label: "Hydrafacial Scalp", href: "/hydrafacial-scalp" },
      { label: "Nail Disorders Treatments", href: "/nail" }
    ]
  },
  { href: "/peptide-skin-regeneration-therapy", label: "Peptide Therapy" },
  { 
    href: "#", 
    label: "Rejuvenation",
    isRejuvenationGroup: true,
    dropdown: [
      { label: "Hand Rejuvenation", href: "/hand-rejuvenation" },
      { label: "Earlobe Rejuvenation", href: "/earlobe-rejuvenation-lobuloplasty" },
    ]
  },
  { 
    href: "#", 
    label: "Women's Health",
    isSectioned: true,
    sections: [
      {
        title: "Medical / Vulval Health",
        items: [
           { label: "Private Smear Test Dublin", href: "/womens-health/private-smear-test-dublin" },
          { label: "Vulval Lichen Specialist Care", href: "/womens-health/vulval-lichen" },
          { label: "Vaginal Dryness & Genitourinary Syndrome Support", href: "/womens-health/vaginal-dryness" }
        ]
      },
      {
        title: "Functional",
        items: [
          { label: "Emsella® Chair Pelvic Floor Treatment", href: "/womens-health/emsella" },
          { label: "Vaginal PRP Treatment", href: "/womens-health/prp" },
          { label: "O-Shot® & P-Shot® (Sexual Wellness)", href: "/womens-health/oshot-pshot" },
          { label: "Vaginismus: Advanced Specialist Treatment", href: "/womens-health/vaginismus" }
        ]
      },
      {
        title: "Aesthetic / Surgical",
        items: [
          { label: "Postpartum Scar Treatment", href: "/womens-health/postpartum-scar" },
          { label: "Exilis Ultra Femme® Vaginal Tightening", href: "/womens-health/exilis-ultra-femme" },
          { label: "Hymenoplasty (Surgical)", href: "/womens-health/hymenoplasty" },
          { label: "Labiaplasty (Surgical)", href: "/womens-health/labiaplasty" },
          { label: "Intimate Area Lesion Removal", href: "/womens-health/intimate-lesion-removal" },
        ]
      }
    ]
  },
  { href: "/shop", label: "Shop" },
  { href: "/clinical-outcomes", label: "Outcomes" },
]

// ─── Portal wrapper – renders children directly into <body> ───────────────────
function BodyPortal({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return null
  return createPortal(children, document.body)
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const pathname = usePathname()
  const { cartCount } = useCart()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Lock body scroll when sidebar is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset"
    return () => { document.body.style.overflow = "unset" }
  }, [isOpen])

  useEffect(() => {
    setIsOpen(false)
    setActiveDropdown(null)
  }, [pathname])

  return (
    <>
      <nav
        onMouseLeave={() => setActiveDropdown(null)}
        className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
          scrolled || activeDropdown || isOpen
            ? "bg-white border-b border-zinc-100 py-3 shadow-md" 
            : "bg-white/95 backdrop-blur-md py-4 md:py-6"
        }`}
      >
        <div className="max-w-[1750px] mx-auto px-4 md:px-8 flex items-center justify-between gap-1">
          
          {/* LOGO AREA */}
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <div className="relative w-8 h-8 md:w-9 md:h-9 lg:w-11 lg:h-11">
              <Image src="/icon2.png" alt="Gerka Clinic" fill className="object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="text-[17px] md:text-xl lg:text-base tracking-[0.1em] text-zinc-900 uppercase leading-tight">
                Gerka Clinic
              </span>
              <span className="text-[9px] tracking-[0.15em] text-zinc-700 uppercase font-medium">
                Aesthetic & Intimate Health
              </span>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden min-[1600px]:flex items-center justify-center gap-x-0 min-[1700px]:gap-x-1 2xl:gap-x-2 flex-1 min-w-0">
            {navItems.map((item) => {
              const hasDropdown = item.dropdown || item.sections
              const isActive = item.href !== "#" && pathname === item.href

              return (
                <div 
                  key={item.label}
                  className="relative py-2"
                  onMouseEnter={() => hasDropdown ? setActiveDropdown(item.label) : setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className="group flex items-center gap-0.5 whitespace-nowrap px-1 min-[1700px]:px-2"
                  >
                    <span className={`text-[9px] min-[1700px]:text-[10px] font-semibold tracking-tight min-[1700px]:tracking-normal transition-colors duration-300 uppercase ${
                      isActive || activeDropdown === item.label ? "text-zinc-900 border-b border-zinc-900" : "text-zinc-500 hover:text-zinc-900"
                    }`}>
                      {item.label}
                    </span>
                    {hasDropdown && <ChevronDown size={10} className={`text-zinc-300 transition-transform ${activeDropdown === item.label ? "rotate-180 text-zinc-900" : ""}`} />}
                  </Link>

                  <AnimatePresence>
                    {activeDropdown === item.label && hasDropdown && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 pt-4"
                      >
                        <div className="bg-white border border-zinc-100 shadow-2xl rounded-2xl p-6 min-w-[280px] max-h-[75vh] overflow-y-auto custom-scrollbar">
                          {item.isSectioned ? (
                            <div className="space-y-6">
                              {item.sections?.map((section) => (
                                <div key={section.title}>
                                  <h4 className="text-[10px] uppercase tracking-widest font-bold text-zinc-400 mb-3 border-b pb-1">
                                    {section.title}
                                  </h4>
                                  <ul className="space-y-2">
                                    {section.items.map((sub) => (
                                      <li key={sub.label}>
                                        <Link href={sub.href} className="text-[12px] text-zinc-600 hover:text-zinc-900 block py-1">
                                          {sub.label}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <ul className="space-y-2">
                              {item.dropdown?.map((sub) => (
                                <li key={sub.label}>
                                  <Link href={sub.href} className="text-[12px] text-zinc-600 hover:text-zinc-900 block py-1">
                                    {sub.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>

          {/* ACTION BUTTONS */}
          <div className="flex items-center gap-2 md:gap-4 shrink-0">
            
            {/* GOOGLE TRANSLATE CUSTOM SWITCHER */}
            <LanguageSwitcher />
            <div id="google_translate_element" className="hidden absolute"></div>

            {/* SHOPPING BAG */}
            <Link href="/shop/cart" className="relative p-2 text-zinc-800 hover:text-zinc-500 transition-colors">
              <ShoppingBag size={20} strokeWidth={1.5} />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-[#002D40] text-white text-[8px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* CONTACT - DESKTOP ONLY */}
            <div className="hidden min-[1600px]:block">
              <Link href="/#contact">
                <button className="bg-zinc-900 hover:bg-zinc-800 text-white text-[9px] 2xl:text-[10px] font-bold tracking-[0.2em] uppercase px-5 py-3 rounded-full transition-all shadow-md active:scale-95 whitespace-nowrap">
                  Contact
                </button>
              </Link>
            </div>

            {/* HAMBURGER */}
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="min-[1600px]:hidden p-2.5 text-zinc-800 hover:bg-zinc-50 rounded-xl transition-colors"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </nav>

      {/* ── MOBILE SIDEBAR – rendered into <body> via portal ─────────────────
           This escapes the nav's stacking context so it works correctly on
           iPad Safari, where fixed children of a fixed parent get clipped.   */}
      <BodyPortal>
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                key="backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
                className="fixed inset-0 bg-black/20 z-[199] min-[1600px]:hidden"
              />

              {/* Sidebar panel */}
              <motion.div
                key="sidebar"
                initial={{ opacity: 0, x: "100%" }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="fixed inset-0 top-0 bg-white z-[200] min-[1600px]:hidden flex flex-col pt-24 overflow-y-auto"
              >
                {/* Close button at top-right */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-5 right-5 p-2.5 text-zinc-800 hover:bg-zinc-50 rounded-xl transition-colors"
                  aria-label="Close menu"
                >
                  <X size={26} />
                </button>

                <div className="p-6 space-y-1 pb-32">
                  {navItems.map((item) => {
                    if (item.isRejuvenationGroup && item.dropdown) {
                      return item.dropdown.map((sub) => (
                        <Link 
                          key={sub.label} 
                          href={sub.href} 
                          className="block py-4 border-b border-zinc-50 text-[13px] font-medium tracking-widest text-zinc-900 uppercase"
                        >
                          {sub.label}
                        </Link>
                      ))
                    }

                    const hasSub = item.dropdown || item.sections
                    const isExpanded = mobileExpanded === item.label

                    return (
                      <div key={item.label} className="border-b border-zinc-50 last:border-0">
                        {hasSub ? (
                          <div className="py-1">
                            <button 
                              onClick={() => setMobileExpanded(isExpanded ? null : item.label)}
                              className="w-full flex justify-between items-center py-4 text-left"
                            >
                              <span className="text-[13px] font-medium tracking-widest text-zinc-900 uppercase">
                                {item.label}
                              </span>
                              <ChevronRight className={`transition-transform duration-300 text-zinc-400 ${isExpanded ? "rotate-90" : ""}`} size={18} />
                            </button>
                            <AnimatePresence>
                              {isExpanded && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  className="overflow-hidden bg-zinc-50/50 px-4 rounded-2xl mb-2"
                                >
                                  <div className="py-4 space-y-4">
                                    {item.isSectioned ? (
                                      item.sections?.map(sec => (
                                        <div key={sec.title} className="space-y-3">
                                          <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em]">{sec.title}</p>
                                          <div className="flex flex-col gap-3 border-l border-zinc-200 pl-4">
                                            {sec.items.map(sub => (
                                              <Link key={sub.label} href={sub.href} className="text-xs text-zinc-600 active:text-zinc-900">
                                                {sub.label}
                                              </Link>
                                            ))}
                                          </div>
                                        </div>
                                      ))
                                    ) : (
                                      <div className="flex flex-col gap-4 border-l border-zinc-200 pl-4">
                                        {item.dropdown?.map(sub => (
                                          <Link key={sub.label} href={sub.href} className="text-xs text-zinc-600 active:text-zinc-900">
                                            {sub.label}
                                          </Link>
                                        ))}
                                      </div>
                                    )}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ) : (
                          <Link href={item.href} className="block py-5 text-[13px] font-medium tracking-widest text-zinc-900 uppercase">
                            {item.label}
                          </Link>
                        )}
                      </div>
                    )
                  })}
                  
                  <div className="pt-10 space-y-4">
                    <Link href="/#contact">
                      <button className="w-full bg-zinc-900 text-white py-5 rounded-full tracking-[0.25em] uppercase text-[11px] font-bold shadow-xl">
                        Book Consultation
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </BodyPortal>
    </>
  )
}