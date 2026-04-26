"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Clock, Euro, CheckCircle2, ShieldCheck, Sparkles, Target, Info, ChevronRight, Calendar } from "lucide-react"
import Link from "next/link"
import { ServiceSidebar } from "@/components/ServiceSidebar"

export default function CosmelanServicePage() {
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
            activeService="Cosmelan – Melasma Treatment" 
            categoryTitle="Face Treatments" 
          />

          {/* 3. MAIN CONTENT */}
          <div className="lg:col-span-9 space-y-16 md:space-y-24">
            
            {/* HERO SECTION */}
            <section className="space-y-12">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-light text-zinc-900 tracking-tight leading-tight">
                  Cosmelan – <br />
                  <span className="italic font-serif text-zinc-500">Professional Melasma Treatment</span>
                </h1>
                <div className="flex flex-wrap gap-4 border-b border-zinc-200 pb-8">
                  <span className="text-xs font-bold text-zinc-900 uppercase tracking-widest flex items-center gap-2">
                    <Euro size={14} className="text-zinc-400" /> Cost: 580€ treatment and homepack
                  </span>
                  <span className="text-xs font-bold text-zinc-900 uppercase tracking-widest flex items-center gap-2">
                    <Clock size={14} className="text-zinc-400" /> Professional Application
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                <div className="space-y-6 text-zinc-600 font-light leading-relaxed text-[16px]">
                   <h3 className="text-2xl font-light text-zinc-900">What Is Cosmelan?</h3>
                  <p>
                    Cosmelan is the world’s leading professional treatment for melasma and deep, stubborn pigmentation. It works by inhibiting the overproduction of melanin, reducing dark patches and preventing recurrence.
                  </p>
                  <p>
                    At Gerka Clinic, Cosmelan is performed by <span className="text-zinc-900 font-medium">Giselle Gerka</span>, who has over 15 years of experience working with Cosmelan and was trained directly at the official Mesoestetic headquarters. This guarantees correct application, safe protocols and optimal long-term results.
                  </p>
                  <p>
                    Cosmelan is suitable for pigmentation that has not responded to other treatments.
                  </p>
                </div>
                <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
                  <img src="/cos1.webp" alt="Cosmelan Mask Application" className="w-full h-full object-cover" />
                </div>
              </div>
            </section>

            {/* WHAT DOES IT TREAT SECTION */}
            <section className="bg-white rounded-[3rem] p-10 md:p-16 border border-zinc-100 shadow-sm">
               <div className="space-y-12">
                  <h2 className="text-3xl font-light text-zinc-900">What Does <span className="italic font-serif text-zinc-500">Cosmelan Treat?</span></h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                    {[
                      "Melasma (hormonal pigmentation)",
                      "Sun-induced dark spots",
                      "Post-inflammatory hyperpigmentation",
                      "Stubborn facial pigmentation",
                      "Dark patches on forehead, cheeks or upper lip",
                      "Uneven tone and discolouration"
                    ].map(item => (
                      <div key={item} className="flex gap-4 items-start">
                         <span className="text-zinc-900 font-bold">▪</span>
                         <p className="text-sm text-zinc-500 font-light uppercase tracking-wide">{item}</p>
                      </div>
                    ))}
                  </div>
               </div>
            </section>

            {/* PROCESS SECTION: TWO-PHASE METHOD */}
            <section className="space-y-12">
               <div className="space-y-4">
                  <h2 className="text-3xl font-light text-zinc-900">How Cosmelan <span className="italic font-serif text-zinc-500">Works</span></h2>
                  <p className="text-zinc-500 font-light">Cosmelan works through a two-phase process:</p>
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Phase 1 */}
                  <div className="p-10 rounded-[2.5rem] bg-[#EAEAE6] border border-zinc-200 space-y-6">
                    <div className="flex flex-col gap-2">
                       <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400">Phase 1</span>
                       <h3 className="text-2xl font-light text-zinc-900">In Clinic</h3>
                    </div>
                    <p className="text-sm text-zinc-600 leading-relaxed font-light">
                      A professional depigmenting mask is applied to inhibit excess melanin production. This mask stays on for several hours depending on your skin type.
                    </p>
                  </div>

                  {/* Phase 2 */}
                  <div className="p-10 rounded-[2.5rem] bg-zinc-900 text-white space-y-6">
                    <div className="flex flex-col gap-2">
                       <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500">Phase 2</span>
                       <h3 className="text-2xl font-light text-white">Homecare Programme</h3>
                    </div>
                    <p className="text-sm text-zinc-400 leading-relaxed font-light">
                      A medical-grade depigmenting cream is used daily to maintain and enhance results. This phase is essential for long-term success and recurrence prevention.
                    </p>
                  </div>
               </div>
            </section>

            {/* WHY CHOOSE & SUITABILITY BENTO GRID */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
              <div className="space-y-8 p-10 bg-white border border-zinc-100 rounded-[3rem] shadow-sm">
                 <h3 className="text-2xl font-light text-zinc-900">Why Choose Gerka Clinic for Cosmelan?</h3>
                 <ul className="space-y-4">
                    {[
                      "More than 15 years of hands-on experience with Cosmelan",
                      "Trained directly at the Mesoestetic Headquarters",
                      "Deep understanding of melasma behaviour on different phototypes",
                      "Strict professional protocols to reduce risks and rebound pigmentation",
                      "Custom follow-up plan adapted to each skin type"
                    ].map(text => (
                      <li key={text} className="flex gap-4 items-start text-sm text-zinc-500 font-light">
                         <div className="w-1.5 h-1.5 rounded-full bg-zinc-900 mt-2 shrink-0" /> {text}
                      </li>
                    ))}
                 </ul>
                 <p className="text-xs italic text-zinc-400 font-light border-t border-zinc-50 pt-4">
                    Expert application dramatically improves safety, results and long-term pigment control.
                 </p>
              </div>

              <div className="space-y-8 p-10 bg-zinc-50 border border-zinc-100 rounded-[3rem]">
                 <h3 className="text-2xl font-light text-zinc-900">Who Is Suitable?</h3>
                 <p className="text-sm text-zinc-500 font-light">Cosmelan is ideal for:</p>
                 <ul className="space-y-4">
                    {[
                      "Deep melasma",
                      "Hormonal pigmentation (pregnancy, contraceptives)",
                      "Pigmentation resistant to peels or lasers",
                      "Long-standing or recurrent pigment",
                      "Medium to darker skin tones requiring cautious management"
                    ].map(text => (
                      <li key={text} className="flex items-center gap-4 text-sm text-zinc-800 font-medium">
                         <Target size={16} className="text-zinc-400" /> {text}
                      </li>
                    ))}
                 </ul>
              </div>
            </section>

            {/* FINAL CTA */}
            <section className="bg-zinc-900 rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl relative overflow-hidden">
              <div className="space-y-3 text-center md:text-left relative z-10">
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-500">Start Your Pigmentation Journey</p>
                <h2 className="text-3xl md:text-4xl font-light text-white leading-tight">Book your consultation</h2>
              </div>
              <Link href="/#contact" className="w-full md:w-auto relative z-10">
                <button className="w-full md:w-auto bg-white text-zinc-900 px-12 py-5 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] hover:scale-105 transition-all active:scale-95 shadow-lg">
                  Book Now
                </button>
              </Link>
            </section>

          </div>
        </div>
      </div>
    </main>
  )
}