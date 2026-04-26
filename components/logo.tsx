"use client"

import React from "react"
import { motion } from "framer-motion"

const brands = [
  { name: "Mesoestetic", logo: "/meso.jpeg" },
  { name: "Hydrafacial", logo: "/hydrafacial.PNG" },
  { name: "ZO Skin Health", logo: "/zo.jpg" },
  { name: "Regen Lab", logo: "/lab.PNG" },
  { name: "BTL", logo: "/blt.jpeg" },
  { name: "Cellgenic", logo: "/cellge.webp" },

]

// Duplicate for seamless loop
const duplicatedBrands = [...brands, ...brands, ...brands]

export function TrustedBrands() {
  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* LEFT: TEXT CONTENT */}
          <div className="max-w-xl">
            <h2 className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.4em] text-zinc-400 mb-6">
              Trusted Brands & Technologies
            </h2>
            <h3 className="text-2xl md:text-3xl font-light tracking-tight text-zinc-800 mb-6 leading-tight">
              Evidence-based solutions <br />
              <span className="italic font-serif">for clinical performance.</span>
            </h3>
            <div className="space-y-4">
              <p className="text-sm md:text-[15px] text-zinc-600 leading-relaxed font-light">
                At Gerka Clinic, we work with a carefully curated selection of internationally recognised medical and aesthetic brands, chosen for their proven clinical performance, safety and innovation.
              </p>
              <p className="text-sm md:text-[15px] text-zinc-600 leading-relaxed font-light">
                Our treatments are supported by leading names such as <strong>Mesoestetic, ZO Skin Health, Regen Lab and BTL</strong>, allowing us to deliver advanced solutions tailored to each patient.
              </p>
            </div>
          </div>

          {/* RIGHT: SUBTLE BADGE/TEXT */}
          <div className="hidden lg:block lg:pl-20 border-l border-zinc-100">
            <p className="text-sm text-zinc-400 italic font-light leading-relaxed">
              "By combining premium skincare, regenerative medicine and state-of-the-art technology, we ensure high-quality results while maintaining the highest standards of care."
            </p>
          </div>
        </div>

        {/* LOGO CAROUSEL */}
        <div className="relative mt-12 py-10 border-y border-zinc-100">
          {/* Gradient Masks for a soft fade on edges */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />

          <div className="flex overflow-hidden group">
            <motion.div
              className="flex space-x-12 md:space-x-24 items-center"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {duplicatedBrands.map((brand, idx) => (
                <div 
                  key={idx} 
                  className="flex-shrink-0 flex flex-col items-center justify-center hover:grayscale-0 transition-all duration-500 opacity-100 hover:opacity-100"
                >
                  {/* Replace <img> with <Image /> if using Next.js Image component */}
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="h-10 md:h-18 w-auto object-contain"
                  />
                  <span className="mt-4 text-[9px] tracking-[0.3em] uppercase text-zinc-400 font-medium">
                    {brand.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
