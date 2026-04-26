"use client"

import { motion } from "framer-motion"
import { Home, ChevronRight } from "lucide-react"
import Link from "next/link"

export function GerkaHeroBanner() {
  const backgroundImages = [
    "/emsella.jpeg",
    "/vanquish.jpeg",
    "/skin.jpeg",
    "/prp.jpeg",
    "/labi.webp",
    "/exillis.jpeg",
    "/b3.webp",
    "/b1.webp"
  ]

  return (
    <section className="relative w-full min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden bg-white pt-30 lg:pt-40 lg:pb-24">
      
      {/* 1. BACKGROUND IMAGE COLLAGE */}
      <div className="absolute inset-0 z-0">
        {/* Adjusted grid: 2 columns on mobile, 3 on tablet, 4 on desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 opacity-40 grayscale p-4">
          {backgroundImages.map((src, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: i * 0.1 }}
              className={`aspect-square rounded-2xl md:rounded-3xl bg-zinc-100 overflow-hidden ${
                // Hide last 2 images on mobile to keep the section height manageable
                i > 5 ? "hidden sm:block" : ""
              }`}
            >
              <img 
                src={src} 
                alt="Clinic Detail" 
                className="w-full h-full object-cover" 
              />
            </motion.div>
          ))}
        </div>
        
      </div>

      {/* 2. MAIN CONTENT AREA */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 flex flex-col items-center text-center">
        
        {/* Top Pill Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-zinc-900 text-white text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] px-5 py-2 md:px-6 md:py-2.5 rounded-full mb-6 md:mb-10 shadow-lg shadow-zinc-200"
        >
          Established 2018
        </motion.div>

        {/* Headline */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-light text-zinc-900 tracking-tighter leading-none mb-6 md:mb-8"
        >
          ABOUT US
        </motion.h1>

        {/* Sub-description */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-zinc-600 text-base md:text-xl font-light max-w-2xl leading-relaxed mb-10 md:mb-12"
        >
          Ireland&apos;s premier comfortable environment for aesthetic gynaecology. <br className="hidden sm:block" />
          We unite scientific innovation with deeply personalised care.
        </motion.p>

        {/* Breadcrumb Navigation Pill */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white/90 backdrop-blur-md border border-zinc-100 shadow-sm px-6 py-3 md:px-8 md:py-4 rounded-full flex items-center gap-3 md:gap-4"
        >
          <Link 
            href="/" 
            className="flex items-center gap-2 text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-zinc-400 hover:text-zinc-900 transition-colors"
          >
            <Home size={12} className="md:w-[14px] md:h-[14px]" /> Home
          </Link>
          <ChevronRight size={12} className="text-zinc-300" />
          <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-zinc-900">
            Our Story
          </span>
        </motion.div>
      </div>

    </section>
  )
}