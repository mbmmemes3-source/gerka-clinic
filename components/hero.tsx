"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    // min-h-[100dvh] ensures it fills the mobile screen perfectly even with browser bars
    <section className="relative w-full min-h-[100dvh] flex flex-col lg:flex-row overflow-hidden bg-[#F9F9F7] pt-10 lg:pt-12">
      
      {/* LEFT SIDE: Image Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20, lg: { x: -50, y: 0 } }}
        whileInView={{ opacity: 1, y: 0, lg: { x: 0 } }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full lg:w-1/2 h-[55vh] sm:h-[50vh] lg:h-screen"
      >
        <img 
          src="/hero.png" 
          alt="Aesthetic Wellness" 
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Subtle artistic overlay */}
        <div className="absolute inset-0 bg-zinc-900/10 mix-blend-multiply opacity-20" />
      </motion.div>

      {/* RIGHT SIDE: Content Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-12 sm:p-12 md:p-16 lg:p-24 bg-[#F9F9F7]">
        <div className="max-w-xl w-full flex flex-col space-y-6 md:space-y-8">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-[10px] sm:text-[11px] tracking-[0.3em] sm:tracking-[0.4em] uppercase text-zinc-400 font-semibold mb-4 sm:mb-6 block">
              Welcome to Gerka Clinic
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-zinc-800 leading-[1.1] sm:leading-[1.1]">
              Elevating your <br />
              <span className="italic font-serif text-zinc-500">natural</span> beauty.
            </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg text-zinc-500 font-light leading-relaxed max-w-md"
          >
            A premium wellness environment dedicated to modern aesthetics and 
            specialized women's health. Experience personalised care in the 
            heart of the city.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 pt-4 sm:pt-6"
          >
            <Link href="/#services" className="w-full sm:w-auto">
  <button className="group relative w-full sm:w-auto bg-zinc-900 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full overflow-hidden transition-all duration-300 hover:pr-14 active:scale-95">
    <span className="relative z-10 text-[11px] sm:text-[12px] tracking-[0.2em] uppercase font-medium sm:whitespace-nowrap">
      Explore Services
    </span>

    <ArrowRight className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 w-4 h-4" />
  </button>
</Link>
            
           <Link
  href="/about"
  className="group flex items-center justify-center gap-3 py-2 w-full"
>
  <span className="text-[10px] sm:text-[11px] tracking-[0.2em] sm:tracking-[0.25em] uppercase text-zinc-400 group-hover:text-zinc-800 transition-colors duration-300">
    Our Philosophy
  </span>

</Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}