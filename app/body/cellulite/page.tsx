"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Clock, Euro, CheckCircle2, ShieldCheck, Zap, Target, Info, ChevronRight, Beaker, Scissors, Calendar } from "lucide-react"
import Link from "next/link"
import { ServiceSidebar } from "@/components/ServiceSidebar"

const subcisionIdeal = ["Deep dimples", "Tethered cellulite", "Persistent areas that do not improve with creams or exercise"]
const sunekosIdeal = ["Wavy cellulite", "Superficial dimpling", "Crepey thigh or buttock skin", "Combination treatments with subcision"]

export default function CelluliteTreatmentPage() {
  return (
    <main className="bg-[#FAF9F6] min-h-screen pb-20">
      
      {/* 1. TOP NAVIGATION */}
      <div className="pt-32 pb-8 px-6 md:px-10 max-w-7xl mx-auto">
        <Link href="/" className="group inline-flex items-center gap-2 text-zinc-400 hover:text-zinc-900 transition-colors">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Back to services</span>
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* 2. REUSABLE SIDEBAR */}
          <ServiceSidebar 
            activeService="Cellulite Treatment – Subcision & Sunekos Cell 15" 
            categoryTitle="Body Treatments" 
          />

          {/* 3. MAIN CONTENT */}
          <div className="lg:col-span-9 space-y-16 md:space-y-24">
            
            {/* HERO SECTION */}
            <section className="space-y-12">
              <div className="space-y-8">
                <h1 className="text-4xl md:text-5xl font-light text-zinc-900 tracking-tight leading-tight">
                  Cellulite Treatment – <br />
                  <span className="italic font-serif text-zinc-500 font-light">Subcision & Sunekos Cell 15</span>
                </h1>
                
                <div className="flex flex-wrap gap-y-6 gap-x-8 border-b border-zinc-200 pb-10">
                  <div className="flex flex-col gap-1.5">
                    <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest text-nowrap">Sunekos Cell 15</span>
                    <span className="text-sm font-bold text-zinc-900 flex items-center gap-2">
                      <Euro size={14} className="text-zinc-400" /> €350 per session
                    </span>
                    <span className="text-xs font-medium text-zinc-500 italic">Package of 3: €900</span>
                  </div>
                  
                  <div className="flex flex-col gap-1.5 border-l border-zinc-200 pl-8">
                    <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest text-nowrap">Subcision</span>
                    <span className="text-sm font-bold text-zinc-900 flex items-center gap-2">
                      <Calendar size={14} className="text-zinc-400" /> Consultation Required
                    </span>
                    <span className="text-xs font-medium text-zinc-500 italic">Price on assessment</span>
                  </div>

                  <div className="flex flex-col gap-1.5 border-l border-zinc-200 pl-8">
                    <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest text-nowrap">Clinic Location</span>
                    <span className="text-sm font-bold text-zinc-900 flex items-center gap-2 italic">
                      Gerka Clinic Dublin
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                <div className="space-y-6 text-zinc-600 font-light leading-relaxed text-[16px]">
                  <h3 className="text-2xl font-light text-zinc-900">What Is Cellulite and Why Does It Occur?</h3>
                  <p>
                    Cellulite is caused by tight fibrous bands beneath the skin pulling downward while fat pushes upward, creating dimples, uneven texture and a lumpy appearance. It affects women of all ages and body types, and is not related to weight or fitness.
                  </p>
                  <p>
                    At Gerka Clinic, we take a medical, structural approach to treating cellulite by addressing both the fibrous bands and the skin quality. Our protocol combines Subcision with Sunekos Cell 15, delivering smoother, firmer and more elastic skin.
                  </p>
                </div>
                <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-white border-8">
                  <img src="/cell.webp" alt="Cellulite Clinical Application" className="w-full h-full object-cover" />
                </div>
              </div>
            </section>

            {/* PART 1: SUBCISION */}
            <section className="bg-white rounded-[3rem] p-10 md:p-16 border border-zinc-100 shadow-sm space-y-12">
               <div className="max-w-3xl space-y-4">
                  <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-400">Structural Release</span>
                  <h2 className="text-3xl font-light text-zinc-900">1. Subcision (Manual or Blunt Cannula)</h2>
                  <p className="text-zinc-500 font-light leading-relaxed">
                    Subcision is a minimally invasive technique that releases the fibrous bands pulling the skin down. By freeing these tethered areas, the skin surface becomes smoother and more even. <strong>Pricing for subcision is determined during your clinical consultation based on the depth and quantity of tethered bands.</strong>
                  </p>
               </div>

               <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div className="space-y-6">
                    <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-900">The Procedure</h4>
                    <ul className="space-y-4">
                       {[
                         "A tiny needle or blunt cannula is inserted under the skin",
                         "The fibrous septae responsible for dimpling are released",
                         "The area lifts naturally as tension is reduced",
                         "Micro-trauma stimulates new collagen production"
                       ].map((item, i) => (
                         <li key={i} className="text-sm text-zinc-500 flex gap-4 font-light">
                           <span className="text-zinc-900 font-bold">▪</span> {item}
                         </li>
                       ))}
                    </ul>
                  </div>
                  <div className="p-8 bg-zinc-50 rounded-[2.5rem] space-y-4 border border-zinc-100">
                    <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-900 flex items-center gap-2">
                       <Target size={16} className="text-zinc-400" /> Ideal For
                    </h4>
                    <ul className="space-y-2">
                       {subcisionIdeal.map(item => (
                         <li key={item} className="text-sm text-zinc-500 font-light italic">▪ {item}</li>
                       ))}
                    </ul>
                  </div>
               </div>
            </section>

            {/* PART 2: SUNEKOS CELL 15 */}
            <section className="bg-zinc-900 text-white rounded-[3rem] p-10 md:p-16 space-y-12 shadow-2xl overflow-hidden relative">
               <div className="max-w-3xl space-y-4 relative z-10">
                  <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-500">Dermal Regeneration</span>
                  <h2 className="text-3xl font-light text-white">2. Sunekos Cell 15 Injectables</h2>
                  <p className="text-zinc-400 font-light leading-relaxed">
                    Sunekos Cell 15 is an advanced injectable designed specifically for cellulite and body skin laxity. It contains amino acids and hyaluronic acid that restore dermal thickness, elasticity and smoothness.
                  </p>
               </div>

               <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
                  <div className="space-y-6">
                    <h4 className="text-sm font-bold uppercase tracking-widest text-white">How It Works</h4>
                    <ul className="space-y-4">
                       {[
                         "Stimulates fibroblasts to produce collagen and elastin",
                         "Improves the skin’s structure and firmness",
                         "Reduces the appearance of waves and uneven texture",
                         "Hydrates and plumps crepey body skin"
                       ].map((item, i) => (
                         <li key={i} className="text-sm text-zinc-400 flex gap-4 font-light">
                           <CheckCircle2 size={18} className="text-zinc-500 shrink-0" /> {item}
                         </li>
                       ))}
                    </ul>
                  </div>
                  <div className="p-8 bg-white/5 rounded-[2.5rem] space-y-6 border border-white/10 backdrop-blur-sm">
                    <div className="space-y-2">
                      <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-300">Clinical Pricing</h4>
                      <p className="text-2xl font-light">€350 <span className="text-xs uppercase tracking-widest text-zinc-500 ml-1">per session</span></p>
                      <p className="text-sm text-zinc-400 font-light">Package of 3 sessions: <strong>€900</strong></p>
                    </div>
                    <ul className="space-y-2 border-t border-white/10 pt-4">
                       {sunekosIdeal.map(item => (
                         <li key={item} className="text-xs text-zinc-400 font-light uppercase tracking-widest flex items-center gap-2">
                            <Info size={12} className="text-zinc-600" /> {item}
                         </li>
                       ))}
                    </ul>
                  </div>
               </div>
               <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-zinc-100/5 blur-[100px] rounded-full" />
            </section>

            {/* BENTO GRID: BENEFITS & COURSE */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Benefits Card */}
              <div className="bg-white border border-zinc-100 p-12 rounded-[3rem] space-y-8 shadow-sm">
                <h3 className="text-2xl font-light text-zinc-900">Combined Clinical Benefits</h3>
                <ul className="space-y-4">
                  {[
                    "Releases tethered cellulite bands",
                    "Smooths dimples and irregularities",
                    "Improves dermal thickness",
                    "Reduces crepiness and laxity",
                    "Boosts collagen and elastin production",
                    "Natural, progressive and long-lasting results",
                    "Minimal downtime, no scarring"
                  ].map((text) => (
                    <li key={text} className="flex items-center gap-4 text-sm text-zinc-500 font-light">
                      <div className="w-1.5 h-1.5 rounded-full bg-zinc-900 shrink-0" /> {text}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Treatment Course Card */}
              <div className="bg-[#EAEAE6] p-12 rounded-[3rem] flex flex-col justify-center space-y-8">
                <div className="space-y-4">
                   <h3 className="text-2xl font-light text-zinc-900 uppercase tracking-tight">Treatment Protocol</h3>
                   <p className="text-xs text-zinc-400 font-bold uppercase tracking-widest">Typical Clinical Journey:</p>
                </div>
                <ul className="space-y-5">
                   <li className="text-sm text-zinc-600 font-light flex gap-3 leading-relaxed">
                      <span className="font-bold text-zinc-900 italic">01</span> 1–2 subcision sessions (depending on severity of tethering)
                   </li>
                   <li className="text-sm text-zinc-600 font-light flex gap-3 leading-relaxed">
                      <span className="font-bold text-zinc-900 italic">02</span> 3 sessions of Sunekos Cell 15 spaced 2 weeks apart
                   </li>
                   <li className="text-sm text-zinc-600 font-light flex gap-3 leading-relaxed">
                      <span className="font-bold text-zinc-900 italic">03</span> Visible results appearing from 8–12 weeks
                   </li>
                </ul>
                <div className="p-4 bg-white/40 rounded-2xl border border-zinc-200">
                   <p className="text-xs italic text-zinc-500">Optimised for post-weight loss, postpartum or age-related cellulite.</p>
                </div>
              </div>
            </section>

            {/* FINAL CTA */}
            <section className="bg-zinc-900 rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl relative overflow-hidden">
              <div className="space-y-4 text-center md:text-left relative z-10 max-w-xl">
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-500">Clinical Excellence</p>
                <h2 className="text-3xl md:text-4xl font-light text-white leading-tight">Start your transformation</h2>
                <p className="text-sm text-zinc-400 font-light leading-relaxed">
                  Smooth dimples and tighten skin with our dual-action medical protocol.
                </p>
              </div>
              <Link href="/#contact" className="w-full md:w-auto relative z-10">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full md:w-auto bg-white text-zinc-900 px-12 py-5 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] shadow-lg"
                >
                  Book Consultation
                </motion.button>
              </Link>
            </section>

          </div>
        </div>
      </div>
    </main>
  )
}