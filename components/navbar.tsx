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
  const [lang, setLang] = useState("en")

  useEffect(() => {
    const decodeCookie = decodeURIComponent(document.cookie);
    const match = decodeCookie.match(/googtrans=\/[^/]+\/([^;]+)/)
    match?.[1] === "es" ? setLang("es") : setLang("en")
  }, [])

  const toggleLanguage = () => {
    const hostname = window.location.hostname;
    const dotDomain = hostname.substring(hostname.lastIndexOf(".", hostname.lastIndexOf(".") - 1));
    if (lang === "en") {
      document.cookie = "googtrans=/en/es; path=/";
      document.cookie = `googtrans=/en/es; path=/; domain=${hostname}`;
      if (dotDomain.includes(".")) document.cookie = `googtrans=/en/es; path=/; domain=${dotDomain}`;
      setLang("es");
    } else {
      document.cookie = "googtrans=/en/en; path=/";
      const expireStr = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      document.cookie = expireStr;
      setLang("en");
    }
    setTimeout(() => window.location.reload(), 100);
  }

  return (
    <button 
      onClick={toggleLanguage}
      className="flex items-center gap-1 text-[10px] md:text-[11px] font-bold tracking-widest text-zinc-800 hover:text-zinc-500 transition-colors border border-zinc-200 px-1.5 py-1 md:px-2 rounded bg-white shrink-0"
    >
      <Globe size={12} className="md:w-3.5 md:h-3.5" />
      {lang === "en" ? "ES" : "EN"}
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
      { label: "Exilis® Facial Tightening", href: "/face/exilis" },
      { label: "Sunekos® Skin Booster", href: "/face/sunekos" },
      { label: "Profhilo® Skin Booster", href: "/face/profhilo" },
      { label: "Polynucleotides", href: "/face/polynucleotides" },
      { label: "Cosmelan – Melasma Treatment", href: "/face/cosmelan" },
      { label: "HydraFacial", href: "/face/hydrafacial" },
      { label: "Chemical Peels", href: "/face/peels" },
      { label: "PRP Facial Rejuvenation", href: "/face/prp-facial" },
      { label: "Anti-Wrinkle Treatments", href: "/face/anti-wrinkle" },
      { label: "Acne & Rosacea", href: "/face/acne-rosacea" },
    ]
  },
  { 
    href: "#", 
    label: "Body",
    dropdown: [
      { label: "Vanquish ME®", href: "/body/vanquish" },
      { label: "Fat Reduction", href: "/body/desobody" },
      { label: "Cellulite Treatment", href: "/body/cellulite" },
      { label: "Body Pigmentation", href: "/body/pigmentation" },
      { label: "Exilis Body Tightening", href: "/body/exilis-body" },
      { label: "Postpartum Scar", href: "/body/postpartum-scar" },
      { label: "Body Skin Lesion Removal", href: "/body/lesion-removal" }
    ]
  },
  { 
    href: "#", 
    label: "Hair & Nail",
    dropdown: [
      { label: "Hair Loss Restoration", href: "/hair-loss-treatments" },
      { label: "Hydrafacial Scalp", href: "/hydrafacial-scalp" },
      { label: "Nail Disorders", href: "/nail" }
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
          { label: "Vaginal Dryness Support", href: "/womens-health/vaginal-dryness" },
        ]
      },
      {
        title: "Functional",
        items: [
          { label: "Emsella® Chair", href: "/womens-health/emsella" },
          { label: "Vaginal PRP", href: "/womens-health/prp" },
          { label: "O-Shot® & P-Shot®", href: "/womens-health/oshot-pshot" },
          { label: "Vaginismus Treatment", href: "/womens-health/vaginismus" },
          { label: "Fraxx™ Rejuvenation", href: "/womens-health/fraxx-vaginal-rejuvenation" },
        ]
      },
      {
        title: "Aesthetic / Surgical",
        items: [
          { label: "Postpartum Scar", href: "/womens-health/postpartum-scar" },
          { label: "Exilis Ultra Femme®", href: "/womens-health/exilis-ultra-femme" },
          { label: "Hymenoplasty (Surgical)", href: "/womens-health/hymenoplasty" },
          { label: "Labiaplasty (Surgical)", href: "/womens-health/labiaplasty" },
          { label: "Intimate Lesion Removal", href: "/womens-health/intimate-lesion-removal" },
          { label: "Labia Rejuvenation (HA)", href: "/womens-health/labia-rejuvenation-hyaluronic-acid" },
        ]
      }
    ]
  },
  { href: "/shop", label: "Shop" },
  { href: "/blog", label: "Blog" },
  { href: "/clinical-outcomes", label: "Outcomes" },
]

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

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset"
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
            ? "bg-white border-b border-zinc-100 py-2 shadow-md" 
            : "bg-white/95 backdrop-blur-md py-3 md:py-5"
        }`}
      >
        <div className="max-w-[1750px] mx-auto px-4 md:px-8 flex items-center justify-between gap-1 h-14 md:h-auto">
          
          {/* LOGO AREA */}
          <Link href="/" className="flex items-center gap-1.5 md:gap-2 group shrink-0">
            <div className="relative w-7 h-7 md:w-10 md:h-10">
              <Image src="/icon2.png" alt="Gerka Clinic" fill className="object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="text-[14px] md:text-lg font-light tracking-wider text-zinc-900 uppercase leading-tight">
                Gerka Clinic
              </span>
              <span className="text-[6px] md:text-[8px] tracking-[0.1em] text-zinc-500 uppercase font-medium">
                Aesthetic & Intimate Health
              </span>
            </div>
          </Link>

          {/* DESKTOP NAV - Breakpoint lowered to 1300px to avoid overlap */}
          <div className="hidden min-[1300px]:flex items-center justify-center gap-x-1 2xl:gap-x-2 flex-1">
            {navItems.map((item) => {
              const hasDropdown = item.dropdown || item.sections
              const isActive = item.href !== "#" && pathname === item.href

              return (
                <div 
                  key={item.label}
                  className="relative py-2"
                  onMouseEnter={() => hasDropdown ? setActiveDropdown(item.label) : setActiveDropdown(null)}
                >
                  <Link href={item.href} className="group flex items-center gap-0.5 whitespace-nowrap px-1.5 2xl:px-2.5">
                    <span className={`text-[9px] 2xl:text-[11px] font-semibold transition-colors duration-300 uppercase ${
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
                        <div className="bg-white border border-zinc-100 shadow-2xl rounded-2xl p-6 min-w-[280px] max-h-[70vh] overflow-y-auto">
                          {item.isSectioned ? (
                            <div className="space-y-6">
                              {item.sections?.map((section) => (
                                <div key={section.title}>
                                  <h4 className="text-[10px] uppercase tracking-widest font-bold text-zinc-400 mb-3 border-b pb-1">{section.title}</h4>
                                  <ul className="space-y-2">
                                    {section.items.map((sub) => (
                                      <li key={sub.label}>
                                        <Link href={sub.href} className="text-[12px] text-zinc-600 hover:text-zinc-900 block py-1">{sub.label}</Link>
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
                                  <Link href={sub.href} className="text-[12px] text-zinc-600 hover:text-zinc-900 block py-1">{sub.label}</Link>
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

          {/* ACTION BUTTONS - Always shrink-0 to prevent disappearing */}
          <div className="flex items-center gap-2 md:gap-3 shrink-0 relative z-[110]">
            <LanguageSwitcher />
            <div id="google_translate_element" className="hidden"></div>

            <Link href="/shop/cart" className="relative p-1.5 text-zinc-800 hover:text-zinc-500 transition-colors">
              <ShoppingBag size={18} strokeWidth={1.5} className="md:w-5 md:h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#002D40] text-white text-[7px] md:text-[8px] font-bold w-3.5 h-3.5 md:w-4 md:h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            <div className="hidden min-[1300px]:block">
              <Link href="/#contact">
                <button className="bg-zinc-900 hover:bg-zinc-800 text-white text-[9px] 2xl:text-[10px] font-bold tracking-[0.2em] uppercase px-4 py-2 rounded-full transition-all active:scale-95 whitespace-nowrap">
                  Contact
                </button>
              </Link>
            </div>

            {/* HAMBURGER MENU BUTTON */}
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="min-[1300px]:hidden p-1.5 text-zinc-800 hover:bg-zinc-50 rounded-lg transition-colors border border-zinc-100"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      <BodyPortal>
        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                key="backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
                className="fixed inset-0 bg-black/30 z-[199] min-[1300px]:hidden backdrop-blur-sm"
              />

              <motion.div
                key="sidebar"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="fixed inset-y-0 right-0 w-full max-w-[320px] bg-white z-[200] min-[1300px]:hidden flex flex-col shadow-2xl overflow-y-auto"
              >
                <div className="p-6 pt-24 space-y-1">
                  {navItems.map((item) => {
                    if (item.isRejuvenationGroup && item.dropdown) {
                      return item.dropdown.map((sub) => (
                        <Link key={sub.label} href={sub.href} className="block py-4 border-b border-zinc-50 text-[13px] font-medium tracking-widest text-zinc-900 uppercase">{sub.label}</Link>
                      ))
                    }
                    const hasSub = item.dropdown || item.sections
                    const isExpanded = mobileExpanded === item.label
                    return (
                      <div key={item.label} className="border-b border-zinc-50">
                        {hasSub ? (
                          <div className="py-1">
                            <button onClick={() => setMobileExpanded(isExpanded ? null : item.label)} className="w-full flex justify-between items-center py-4 text-left">
                              <span className="text-[13px] font-medium tracking-widest text-zinc-900 uppercase">{item.label}</span>
                              <ChevronRight className={`transition-transform duration-300 text-zinc-400 ${isExpanded ? "rotate-90" : ""}`} size={16} />
                            </button>
                            <AnimatePresence>
                              {isExpanded && (
                                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden bg-zinc-50/50 px-4 rounded-xl mb-2">
                                  <div className="py-4 space-y-4">
                                    {item.isSectioned ? (
                                      item.sections?.map(sec => (
                                        <div key={sec.title} className="space-y-2">
                                          <p className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">{sec.title}</p>
                                          <div className="flex flex-col gap-2 border-l border-zinc-200 pl-3">
                                            {sec.items.map(sub => (
                                              <Link key={sub.label} href={sub.href} className="text-xs text-zinc-600 active:text-zinc-900 py-1">{sub.label}</Link>
                                            ))}
                                          </div>
                                        </div>
                                      ))
                                    ) : (
                                      <div className="flex flex-col gap-4 border-l border-zinc-200 pl-4">
                                        {item.dropdown?.map(sub => (
                                          <Link key={sub.label} href={sub.href} className="text-xs text-zinc-600 active:text-zinc-900">{sub.label}</Link>
                                        ))}
                                      </div>
                                    )}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ) : (
                          <Link href={item.href} className="block py-5 text-[13px] font-medium tracking-widest text-zinc-900 uppercase">{item.label}</Link>
                        )}
                      </div>
                    )
                  })}
                  <div className="pt-10">
                    <Link href="/#contact">
                      <button className="w-full bg-zinc-900 text-white py-4 rounded-full tracking-[0.2em] uppercase text-[11px] font-bold shadow-xl">Book Consultation</button>
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