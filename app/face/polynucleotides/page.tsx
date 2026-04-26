"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Clock, Euro, CheckCircle2, Target, Sparkles, ChevronRight, Info } from "lucide-react"
import Link from "next/link"
import { ServiceSidebar } from "@/components/ServiceSidebar"

export default function PolynucleotideServicePage() {
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
            activeService="Polynucleotides" 
            categoryTitle="Face Treatments" 
          />

          {/* 3. MAIN CONTENT */}
          <div className="lg:col-span-9 space-y-16 md:space-y-24">
            
            {/* HERO SECTION */}
            <section className="space-y-12">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-light text-zinc-900 tracking-tight leading-tight">
                  Polynucleotide <br />
                  <span className="italic font-serif text-zinc-500">Skin Regeneration</span>
                </h1>
                
                {/* UPDATED PRICING STRATEGY */}
                <div className="flex flex-wrap gap-y-4 gap-x-8 border-b border-zinc-200 pb-8">
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Eyes Treatment</span>
                    <span className="text-sm font-bold text-zinc-900 flex items-center gap-2">
                      <Euro size={14} className="text-zinc-400" /> €220 per session
                    </span>
                  </div>
                  <div className="flex flex-col gap-1 border-l border-zinc-200 pl-8">
                    <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Face Treatment</span>
                    <span className="text-sm font-bold text-zinc-900 flex items-center gap-2">
                      <Euro size={14} className="text-zinc-400" /> €220 per session
                    </span>
                  </div>
                  <div className="flex flex-col gap-1 border-l border-zinc-200 pl-8">
                    <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Duration</span>
                    <span className="text-sm font-bold text-zinc-900 flex items-center gap-2">
                      <Clock size={14} className="text-zinc-400" /> 20-30 min
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                <div className="space-y-6 text-zinc-600 font-light leading-relaxed text-[16px]">
                  <p>
                    At Gerka Clinic, we offer state-of-the-art polynucleotide treatments designed to deeply revitalise the skin. Unlike fillers that add volume, polynucleotides stimulate tissue repair at a cellular level, boost hydration, and enhance elasticity.
                  </p>
                  <p>
                    They are particularly effective for the <span className="text-zinc-900 font-medium">delicate eye area</span>, helping to reduce dark circles and fine lines, and for the <span className="text-zinc-900 font-medium">face</span> to improve overall structure and radiance. By increasing fibroblast activity, they strengthen the skin’s natural healing response.
                  </p>
                  <p>
                    Polynucleotides are biocompatible, highly purified DNA fractions that signal the skin to regenerate. Results develop gradually as the skin structure improves from within, providing a truly natural, refreshed appearance.
                  </p>
                </div>
                <div className="aspect-[5/6.5] rounded-[3rem] overflow-hidden shadow-2xl">
                  <img src="/poly1.webp" alt="Polynucleotide Application" className="w-full h-full object-cover" />
                </div>
              </div>
            </section>

            {/* PRODUCT SHOT */}
            <section className="relative aspect-[21/9] rounded-[3rem] overflow-hidden shadow-sm border border-zinc-100">
               <img src="/poly2.webp" alt="Polynucleotide Technology" className="w-full h-full object-cover" />
               <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/10 to-transparent" />
            </section>

            {/* AREAS WE TREAT SECTION */}
            <section className="bg-white rounded-[3rem] p-10 md:p-16 border border-zinc-100 shadow-sm">
               <div className="space-y-12">
                  <h2 className="text-3xl font-light text-zinc-900">Primary Applications <span className="italic font-serif text-zinc-500">of Polynucleotides</span></h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Eyes */}
                    <div className="space-y-5">
                       <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-900 flex items-center gap-2">
                          <Target size={16} className="text-zinc-400" /> Periorbital (Eyes)
                       </h4>
                       <ul className="space-y-3">
                          {[
                            "Dark circles and puffiness",
                            "Tear trough hollowing",
                            "Fine lines (Crow's feet)",
                            "Upper eyelid laxity"
                          ].map(item => (
                             <li key={item} className="text-sm text-zinc-500 flex gap-3 font-light leading-snug">
                                <span className="text-zinc-900">▪</span> {item}
                             </li>
                          ))}
                       </ul>
                    </div>

                    {/* Face */}
                    <div className="space-y-5">
                       <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-900 flex items-center gap-2">
                          <Target size={16} className="text-zinc-400" /> Full Face
                       </h4>
                       <ul className="space-y-3">
                          {[
                            "Overall texture improvement",
                            "Cheek and mid-face firming",
                            "Smoker's lines around the mouth",
                            "Acne scarring and pigmentation"
                          ].map(item => (
                             <li key={item} className="text-sm text-zinc-500 flex gap-3 font-light leading-snug">
                                <span className="text-zinc-900">▪</span> {item}
                             </li>
                          ))}
                       </ul>
                    </div>

                    {/* Neck & Hands */}
                    <div className="space-y-5">
                       <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-900 flex items-center gap-2">
                          <Target size={16} className="text-zinc-400" /> Neck & Hands
                       </h4>
                       <ul className="space-y-3">
                          {[
                            "Neck lines (Tech neck)",
                            "Crepey skin texture",
                            "Thinning skin on the hands",
                            "Sun damaged rejuvenation"
                          ].map(item => (
                             <li key={item} className="text-sm text-zinc-500 flex gap-3 font-light leading-snug">
                                <span className="text-zinc-900">▪</span> {item}
                             </li>
                          ))}
                       </ul>
                    </div>
                  </div>
               </div>
            </section>

            {/* BENTO GRID: INDICATIONS & CLINICAL NOTE */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Additional Indications Card */}
              <div className="bg-zinc-900 text-white p-12 rounded-[3rem] space-y-8 shadow-xl">
                <div className="space-y-2">
                   <h3 className="text-2xl font-light">Clinical Indications</h3>
                   <div className="w-12 h-[1px] bg-zinc-700" />
                </div>
                <ul className="space-y-5">
                  {[
                    "Preparation for other injectables",
                    "Post-procedure skin repair",
                    "Inflammatory skin conditions",
                    "Prevention of premature ageing"
                  ].map((text) => (
                    <li key={text} className="flex items-center gap-4 text-sm text-zinc-400 font-light">
                      <CheckCircle2 size={18} className="text-zinc-100 shrink-0" /> {text}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Protocol Card */}
              <div className="bg-[#EAEAE6] p-12 rounded-[3rem] flex flex-col justify-center space-y-6">
                <div className="space-y-4">
                   <h4 className="text-xl font-medium text-zinc-900 flex items-center gap-2">
                     Treatment Progress <Sparkles size={18} className="text-zinc-400" />
                   </h4>
                   <p className="text-sm text-zinc-600 font-light leading-relaxed">
                    Polynucleotides are a marathon, not a sprint. Results develop gradually, with optimal improvement visible 4 to 8 weeks after the second treatment.
                   </p>
                </div>
                <div className="p-6 bg-white/50 rounded-2xl border border-zinc-200 flex items-center justify-between">
                   <div>
                     <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1">Recommended Course</p>
                     <p className="text-[13px] text-zinc-800 font-medium">2–3 sessions every 3–4 weeks</p>
                   </div>
                   <Info size={20} className="text-zinc-300" />
                </div>
              </div>
            </section>

            {/* FINAL CTA */}
            <section className="bg-zinc-900 rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl relative overflow-hidden">
              <div className="space-y-3 text-center md:text-left relative z-10">
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-500">Natural Cellular Regeneration</p>
                <h2 className="text-3xl md:text-4xl font-light text-white leading-tight">Book your specialist <br/> consultation</h2>
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