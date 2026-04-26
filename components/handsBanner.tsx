"use client"

import { motion } from "framer-motion"
import { Home, ChevronRight, Euro, Droplets, Sparkles } from "lucide-react"
import Link from "next/link"

export function HandHeroBanner() {
  // Filenames optimized for the Hand Rejuvenation department
  const backgroundImages = [
    "/hand.jpg",
    "/pigm.jpg",
    "/hand2.jpg",
    "/meso.jpg",
    "/hand3.png",
    "/laser.png",
    "/com.jpg",
    "/hand6.jpg"
  ]

  return (
    <section className="relative w-full min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden bg-white pt-42 pb-4 md:pt-40 md:pb-20">
      
      {/* 1. BACKGROUND IMAGE COLLAGE */}
      <div className="absolute inset-0 z-0">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 opacity-40 grayscale p-4">
          {backgroundImages.map((src, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: i * 0.1 }}
              className={`aspect-square rounded-2xl md:rounded-3xl bg-zinc-100 overflow-hidden ${
                i > 5 ? "hidden lg:block" : i > 3 ? "hidden sm:block" : ""
              }`}
            >
              <img 
                src={src} 
                alt="Clinical Hand Detail" 
                className="w-full h-full object-cover" 
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* 2. MAIN CONTENT AREA */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center">
        
        {/* Headline */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-5xl lg:text-6xl font-light text-zinc-900 tracking-tighter leading-[0.9] mb-6 md:mb-8 uppercase"
        >
          HAND <br className="sm:hidden" />
          <span className="italic font-serif text-zinc-900 font-light lowercase">Rejuvenation</span>
        </motion.h1>

        {/* Sub-description */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-zinc-600 text-sm md:text-lg lg:text-xl font-light max-w-2xl leading-relaxed mb-8 uppercase tracking-widest px-4"
        >
          Advanced Treatment to improve <br className="hidden md:block" />
          <span className="font-medium text-zinc-900">Pigmentation, quality & volume</span> loss in the hands.
        </motion.p>

        {/* --- PRICING SECTION --- */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-4 md:gap-12 mb-12"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-zinc-50 flex items-center justify-center border border-zinc-100">
              <Droplets size={14} className="text-zinc-400" />
            </div>
            <div className="text-left">
              <p className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest leading-none mb-1">Volume & Hydration</p>
              <p className="text-sm font-medium text-zinc-800 tracking-tight">Hyaluronic Acid — €420 <span className="text-[10px] text-zinc-400 ml-1">/ session</span></p>
            </div>
          </div>

          <div className="hidden sm:block w-[1px] h-8 bg-zinc-200" />

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-zinc-50 flex items-center justify-center border border-zinc-100">
              <Sparkles size={14} className="text-zinc-400" />
            </div>
            <div className="text-left">
              <p className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest leading-none mb-1">Tone Correction</p>
              <p className="text-sm font-medium text-zinc-800 tracking-tight">Pigmentation — €250 <span className="text-[10px] text-zinc-400 ml-1">/ session</span></p>
            </div>
          </div>
        </motion.div>

        {/* Breadcrumb Navigation Pill */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white/90 backdrop-blur-md border border-zinc-100 shadow-sm px-6 py-3 md:px-8 md:py-4 rounded-full flex items-center gap-3 md:gap-4"
        >
          <Link href="/" className="flex items-center gap-2 text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-zinc-400 hover:text-zinc-900 transition-colors">
            <Home size={14} className="w-3 h-3 md:w-3.5 md:h-3.5" /> Home
          </Link>
          <ChevronRight size={12} className="text-zinc-300" />
          <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-zinc-900">
            Hand Treatment
          </span>
        </motion.div>
      </div>

    </section>
  )
}