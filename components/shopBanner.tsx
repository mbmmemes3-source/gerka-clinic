"use client"

import { motion } from "framer-motion"
import { ShieldCheck, ArrowRight, Sparkles } from "lucide-react"

export function ShopBanner() {
  return (
    <section className="relative w-full bg-[#FAF9F6] overflow-hidden rounded-[3rem] mb-20 shadow-sm border border-zinc-100">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
        
        {/* --- LEFT SIDE: MODEL IMAGE --- */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative aspect-[4/5] lg:aspect-square overflow-hidden"
        >
          <img 
            src="/zo.avif" // Replace with your model image
            alt="Clinical Skin Care"
            className="w-full h-full object-cover object-center scale-105"
          />
          {/* Subtle overlay to blend image with off-white background */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#FAF9F6]/10" />
        </motion.div>

        {/* --- RIGHT SIDE: TEXT CONTENT --- */}
        <div className="p-10 md:p-16 lg:p-20 space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <span className="h-[1px] w-8 bg-zinc-300" />
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-400">
                The Clinical Boutique
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-5xl font-light text-zinc-900 tracking-tight leading-[1.1]">
              Advanced Dermal <br />
              <span className="italic font-serif text-zinc-500">Formulations.</span>
            </h2>
            
            <p className="text-zinc-500 font-light text-sm md:text-lg leading-relaxed max-w-md">
              Extend your clinical results with a curated selection of medical-grade skincare, chosen by our specialists for proven biological efficacy.
            </p>
          </motion.div>

          {/* Key Benefits / Trust Markers */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                <ShieldCheck size={18} className="text-zinc-400" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-600">Medical Grade</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                <Sparkles size={18} className="text-zinc-400" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-600">Expert Curated</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="pt-6"
          >
            <button className="group flex items-center gap-4 bg-zinc-900 text-white px-8 py-4 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-zinc-800 transition-all shadow-xl">
              Explore Collections
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>

      </div>

      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/40 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
    </section>
  )
}