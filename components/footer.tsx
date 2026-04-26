"use client"

import React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { 
  Instagram, 
  Facebook, 
  Twitter, 
  MapPin, 
  Phone, 
  ArrowUp,
  MessageCircle
} from "lucide-react"

const services = [
  { name: "Face", color: "bg-[#D9D9D2]", href: "/face/prp-facial" },
  { name: "Body", color: "bg-[#D4C2C2]", href: "/body/cellulite" },
  { name: "Nails", color: "bg-[#F3E5F5]", href: "/nail" },
  { name: "Women's health", color: "bg-[#D1B68C]", href: "/womens-health/emsella" },
  /* Added 4 Major Services below */
  { name: "Hand Rejuvenation", color: "bg-[#E2E2E2]", href: "/hand-rejuvenation" },
  { name: "Hair Loss", color: "bg-[#C9D6C9]", href: "/hair-loss-treatments" },
  { name: "Earlobe Rejuvenation", color: "bg-[#E8D7CF]", href: "/earlobe-rejuvenation-lobuloplasty" },
  { name: "Peptide Skin Regeneration", color: "bg-[#D9D9D2]", href: "/peptide-skin-regeneration-therapy" }
]

const navLinks = {
  "Quick Links": [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/#contact" }
  ],
  "Legal": [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms" },
  ]
}

export function Footer() {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-[#EAEAE6] pt-16 pb-8 md:pt-24 md:pb-12 overflow-hidden">
      {/* BACKGROUND ANIMATION */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <motion.div 
          animate={{ 
            x: [0, 40, 0], 
            y: [0, -40, 0],
            scale: [1, 1.1, 1] 
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-20 -right-20 w-64 h-64 md:w-96 md:h-96 bg-white/40 blur-[80px] md:blur-[100px] rounded-full" 
        />
        <motion.div 
          animate={{ 
            x: [0, -30, 0], 
            y: [0, 30, 0] 
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-20 -left-20 w-60 h-60 md:w-80 md:h-80 bg-zinc-300/30 blur-[60px] md:blur-[80px] rounded-full" 
        />
      </div>

      <div className="max-w-8xl mx-auto px-6 md:px-10 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 md:gap-16 lg:gap-8 border-b border-zinc-300 pb-12 md:pb-20">
          
          {/* SECTION 1: LOGO & SOCIALS */}
          <div className="lg:col-span-4 flex flex-col space-y-6 md:space-y-8">
            <Link href="/" className="flex flex-col group">
              <span className="text-2xl md:text-3xl font-light tracking-[0.25em] md:tracking-[0.3em] text-zinc-800 uppercase leading-tight transition-all group-hover:tracking-[0.35em] duration-500">
                Gerka Clinic
              </span>
              <span className="text-[9px] md:text-[10px] tracking-[0.4em] md:tracking-[0.5em] text-zinc-500 uppercase font-medium mt-1">
                Aesthetic & Intimate Health
              </span>
            </Link>

            <div className="flex items-center gap-4 md:gap-5">
              {[Instagram, Facebook, Twitter, MessageCircle].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="w-10 h-10 rounded-full border border-zinc-300 flex items-center justify-center text-zinc-600 hover:bg-zinc-800 hover:text-white hover:border-zinc-800 transition-all duration-300 shadow-sm"
                >
                  <Icon size={18} strokeWidth={1.5} />
                </motion.a>
              ))}
            </div>

            <div className="space-y-1">
              <p className="text-[10px] md:text-xs tracking-[0.1em] text-zinc-500 font-medium">Monday To Saturday</p>
              <p className="text-[10px] md:text-[11px] tracking-[0.2em] text-zinc-400 italic">By Appointment ONLY</p>
            </div>
          </div>

          {/* SECTION 2: ADDRESS & CONTACT */}
          <div className="lg:col-span-3 space-y-6 md:space-y-8">
            <h4 className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.3em] text-zinc-400">Address</h4>
            <div className="space-y-5 md:space-y-6">
              <a 
                href="https://maps.google.com/?q=1+Priory+Office+Park+Stillorgan+Rd+A94NH31" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-start gap-4 group cursor-pointer"
              >
                <MapPin size={18} className="text-zinc-400 group-hover:text-zinc-800 transition-colors shrink-0 mt-0.5" />
                <p className="text-xs md:text-sm tracking-widest leading-relaxed text-zinc-600 uppercase">
                  1 Priory Office Park<br />
                  Stillorgan Rd.<br />
                  A94NH31
                </p>
              </a>
              <a href="tel:0878888087" className="flex items-center gap-4 group cursor-pointer">
                <Phone size={18} className="text-zinc-400 group-hover:text-zinc-800 transition-colors flex-shrink-0" />
                <p className="text-xs md:text-sm tracking-widest text-zinc-600">0878888087</p>
              </a>
            </div>
          </div>

          {/* SECTION 3: SERVICES (Now with 8 items) */}
          <div className="lg:col-span-2 space-y-6 md:space-y-8">
            <h4 className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.3em] text-zinc-400">Services</h4>
            <div className="flex flex-wrap lg:flex-col gap-3 items-start">
              {services.map((service) => (
                <Link key={service.name} href={service.href}>
                  <motion.div
                    whileHover={{ x: 5, scale: 1.02 }}
                    className={`${service.color} text-zinc-700 text-[9px] md:text-[11px] font-semibold tracking-widest uppercase px-4 py-2 md:px-6 md:py-2.5 rounded-full transition-shadow hover:shadow-md shadow-sm cursor-pointer whitespace-nowrap`}
                  >
                    {service.name}
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>

          {/* SECTION 4: NAVIGATION LINKS */}
          <div className="lg:col-span-3 grid grid-cols-2 lg:grid-cols-1 gap-8 md:gap-12">
            {Object.entries(navLinks).map(([title, links]) => (
              <div key={title} className="space-y-6">
                <h4 className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.3em] text-zinc-400">{title}</h4>
                <ul className="space-y-3 md:space-y-4">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link 
                        href={link.href} 
                        className="text-[12px] md:text-[13px] tracking-widest text-zinc-600 hover:text-zinc-900 transition-colors duration-300 relative group block w-fit"
                      >
                        {link.label}
                        <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-zinc-800 transition-all duration-300 group-hover:w-full" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-8 md:pt-12 flex flex-col-reverse md:flex-row justify-between items-center gap-8 md:gap-6">
          <p className="text-[9px] md:text-[10px] tracking-[0.2em] md:tracking-[0.3em] uppercase text-zinc-400 font-medium text-center md:text-left">
            © {new Date().getFullYear()} Gerka Clinic. All rights reserved.
          </p>
          
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -5 }}
            className="flex items-center gap-3 group"
          >
            <span className="text-[9px] md:text-[10px] tracking-[0.3em] md:tracking-[0.4em] uppercase text-zinc-500 font-bold group-hover:text-zinc-900 transition-colors">
              Back to Top
            </span>
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:bg-zinc-900 group-hover:text-white transition-all duration-300">
              <ArrowUp size={14} className="md:w-4 md:h-4" />
            </div>
          </motion.button>
        </div>
      </div>
    </footer>
  )
}