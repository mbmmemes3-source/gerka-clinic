"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Clock, Euro, CheckCircle2, Sparkles, Target, Info, ChevronRight, Calendar } from "lucide-react"
import Link from "next/link"
import { ServiceSidebar } from "@/components/ServiceSidebar"

export default function ProfhiloServicePage() {
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
            activeService="Profhilo® Skin Booster" 
            categoryTitle="Face Treatments" 
          />

          {/* 3. MAIN CONTENT */}
          <div className="lg:col-span-9 space-y-16 md:space-y-24">
            
            {/* HERO SECTION */}
            <section className="space-y-12">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-light text-zinc-900 tracking-tight leading-tight">
                  Profhilo® <br />
                  <span className="italic font-serif text-zinc-500">Skin Booster</span>
                </h1>
                <div className="flex flex-wrap gap-4 border-b border-zinc-200 pb-8">
                  <span className="text-xs font-bold text-zinc-900 uppercase tracking-widest flex items-center gap-2">
                    <Euro size={14} className="text-zinc-400" /> Face or Neck or Hands: 320 €
                  </span>
                  <span className="text-xs font-bold text-zinc-900 uppercase tracking-widest flex items-center gap-2">
                    <Clock size={14} className="text-zinc-400" /> Duration: 15–20 min
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                <div className="space-y-6 text-zinc-600 font-light leading-relaxed text-[16px]">
                  <p>
                    At Gerka Clinic, we offer Profhilo®, a revolutionary injectable treatment that delivers deep hydration and stimulates collagen and elastin for firmer, smoother, and more radiant skin. Unlike traditional dermal fillers, Profhilo® spreads evenly beneath the skin, improving overall quality without adding volume or altering facial shape.
                  </p>
                  <p>
                    This treatment is ideal for patients experiencing dryness, dullness, fine lines, or loss of elasticity. Profhilo® works through one of the highest concentrations of hyaluronic acid available, promoting long-term <span className="italic font-serif text-zinc-800">bio-remodelling</span> of the skin.
                  </p>
                  <p>
                    During your consultation, our specialist will assess your skin concerns and discuss the recommended treatment plan—typically two sessions spaced four weeks apart. The procedure takes around 15–20 minutes and involves minimal downtime.
                  </p>
                </div>
                <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
                  {/* Using the image with benefit dots from your screenshot */}
                  <img src="/profhilo1.webp" alt="Profhilo Benefits and Application" className="w-full h-full object-cover" />
                </div>
              </div>
            </section>

            {/* VISUAL BREAK: TREATMENT MAPPING */}
            <section className="relative aspect-[21/9] rounded-[3rem] overflow-hidden shadow-sm border border-zinc-100">
               <img src="/profhilo2.webp" alt="Areas We Treat with Profhilo" className="w-full h-full object-cover" />
               <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/20 to-transparent" />
            </section>

            {/* AREAS WE TREAT SECTION */}
            <section className="bg-white rounded-[3rem] p-10 md:p-16 border border-zinc-100 shadow-sm">
               <div className="space-y-12">
                  <h2 className="text-3xl font-light text-zinc-900">Areas We Treat <span className="italic font-serif text-zinc-500">with Profhilo®</span></h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Face */}
                    <div className="space-y-5">
                       <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-900 flex items-center gap-2">
                          <Target size={16} className="text-zinc-400" /> Face
                       </h4>
                       <ul className="space-y-3">
                          {["Overall skin hydration and glow", "Fine lines and crepey skin", "Loss of firmness and elasticity"].map(item => (
                             <li key={item} className="text-sm text-zinc-500 flex gap-3 font-light leading-snug">
                                <span className="text-zinc-900">▪</span> {item}
                             </li>
                          ))}
                       </ul>
                    </div>

                    {/* Neck & Décolletage */}
                    <div className="space-y-5">
                       <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-900 flex items-center gap-2">
                          <Target size={16} className="text-zinc-400" /> Neck & Décolletage
                       </h4>
                       <ul className="space-y-3">
                          {["Crepey skin", "Horizontal neck lines", "Loss of tightness and smoothness"].map(item => (
                             <li key={item} className="text-sm text-zinc-500 flex gap-3 font-light leading-snug">
                                <span className="text-zinc-900">▪</span> {item}
                             </li>
                          ))}
                       </ul>
                    </div>

                    {/* Body */}
                    <div className="space-y-5">
                       <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-900 flex items-center gap-2">
                          <Target size={16} className="text-zinc-400" /> Body
                       </h4>
                       <ul className="space-y-3">
                          {["Hands", "Upper arms", "Knees", "Abdomen"].map(item => (
                             <li key={item} className="text-sm text-zinc-500 flex gap-3 font-light leading-snug">
                                <span className="text-zinc-900">▪</span> {item}
                             </li>
                          ))}
                       </ul>
                    </div>
                  </div>
               </div>
            </section>

            {/* BENTO GRID: BENEFITS & RESULTS */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Benefits Card */}
              <div className="bg-zinc-900 text-white p-12 rounded-[3rem] space-y-8 shadow-xl">
                <div className="space-y-2">
                   <h3 className="text-2xl font-light flex items-center gap-3">
                     Key Benefits <Sparkles size={20} className="text-zinc-500" />
                   </h3>
                   <div className="w-12 h-[1px] bg-zinc-700" />
                </div>
                <ul className="space-y-5">
                  {[
                    "Returns volume and firmness",
                    "Improves skin structure",
                    "Deeply hydrates your skin",
                    "Stimulates 4 types of collagen growth"
                  ].map((text) => (
                    <li key={text} className="flex items-center gap-4 text-sm text-zinc-400 font-light">
                      <CheckCircle2 size={18} className="text-zinc-100 shrink-0" /> {text}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Protocol Card */}
              <div className="bg-[#EAEAE6] p-12 rounded-[3rem] flex flex-col justify-center space-y-8">
                <div className="space-y-4">
                   <h4 className="text-xl font-medium text-zinc-900">Clinical Timeline</h4>
                   <p className="text-sm text-zinc-600 font-light leading-relaxed">
                     Mild swelling at injection points is normal and settles quickly. Results develop gradually, with optimal improvement visible four to eight weeks after treatment.
                   </p>
                </div>
                <div className="p-6 bg-white/50 rounded-2xl border border-zinc-200 flex items-center justify-between">
                   <div>
                     <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1">Recommended</p>
                     <p className="text-[13px] text-zinc-800 font-medium">2 sessions / 4 weeks apart</p>
                   </div>
                   <Info size={20} className="text-zinc-300" />
                </div>
              </div>
            </section>

            {/* FINAL CTA */}
            <section className="bg-zinc-900 rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl relative overflow-hidden">
              <div className="space-y-3 text-center md:text-left relative z-10">
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-500">Ready For The Experience?</p>
                <h2 className="text-3xl md:text-4xl font-light text-white leading-tight">Book a consultation</h2>
              </div>
              <Link href="/#contact" className="w-full md:w-auto relative z-10">
                <button className="w-full md:w-auto bg-white text-zinc-900 px-12 py-5 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] hover:scale-105 transition-all active:scale-95 shadow-lg">
                  Book Now
                </button>
              </Link>
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-zinc-100/5 blur-[100px] rounded-full" />
            </section>

          </div>
        </div>
      </div>
    </main>
  )
}