"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Clock, Euro, CheckCircle2, Info, Target, Sparkles, ChevronRight, Calendar } from "lucide-react"
import Link from "next/link"
import { ServiceSidebar } from "@/components/ServiceSidebar"

export default function SunekosServicePage() {
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
            activeService="Sunekos® Skin Booster" 
            categoryTitle="Face Treatments" 
          />

          {/* 3. MAIN CONTENT */}
          <div className="lg:col-span-9 space-y-16 md:space-y-24">
            
            {/* HERO SECTION */}
            <section className="space-y-12">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-light text-zinc-900 tracking-tight leading-tight">
                  Sunekos® <br />
                  <span className="italic font-serif text-zinc-500">Skin Booster</span>
                </h1>
                <div className="flex flex-wrap gap-4 border-b border-zinc-200 pb-8">
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Single Session</span>
                    <span className="text-sm font-bold text-zinc-900 flex items-center gap-2">
                      <Euro size={14} className="text-zinc-400" /> €280
                    </span>
                  </div>
                  <div className="flex flex-col gap-1 border-l border-zinc-200 pl-6">
                    <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Package of 3</span>
                    <span className="text-sm font-bold text-zinc-900 flex items-center gap-2">
                      <Euro size={14} className="text-zinc-400" /> €740
                    </span>
                  </div>
                  <div className="flex flex-col gap-1 border-l border-zinc-200 pl-6">
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
                    At Gerka Clinic, we offer Sunekos®, an innovative injectable treatment combining hyaluronic acid with a unique blend of amino acids to stimulate collagen and elastin production. This scientifically formulated solution <span className="italic font-serif text-zinc-800">revitalises</span> the skin from within, improving hydration, elasticity, and overall texture.
                  </p>
                  <p>
                    Sunekos® is ideal for patients looking to address fine lines, dullness, crepey skin, and loss of firmness without adding facial volume. It works by supporting the Extracellular Matrix (ECM), helping restore youthful structure and luminosity over a series of gentle injections.
                  </p>
                  <p>
                    During your consultation, our Dr will assess your skin concerns and recommend an individualised treatment plan, typically a course of three to four sessions spaced 7–10 days apart. With minimal downtime, mild swelling or redness may occur but usually resolves within hours.
                  </p>
                </div>
                <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
                  <img src="/sune1.webp" alt="Sunekos Treatment Mapping" className="w-full h-full object-cover" />
                </div>
              </div>
            </section>

            {/* VISUAL BREAK: CLINICAL MACRO */}
            <section className="relative aspect-[21/9] rounded-[3rem] overflow-hidden shadow-sm border border-zinc-100">
               <img src="/sune2.webp" alt="Sunekos Clinical Detail" className="w-full h-full object-cover" />
               <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/10 to-transparent" />
            </section>

            {/* AREAS WE TREAT SECTION */}
            <section className="bg-white rounded-[3rem] p-10 md:p-16 border border-zinc-100 shadow-sm">
               <div className="space-y-12">
                  <h2 className="text-3xl font-light text-zinc-900">Areas We Treat <span className="italic font-serif text-zinc-500">with Sunekos®</span></h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Face */}
                    <div className="space-y-5">
                       <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-900 flex items-center gap-2">
                          <Target size={16} className="text-zinc-400" /> Face
                       </h4>
                       <ul className="space-y-3">
                          {["Under-eye hollowness and dark circles", "Fine lines and crepey texture", "Overall hydration and glow", "Loss of elasticity"].map(item => (
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
                          {["Crepey, thinning skin", "Horizontal neck lines", "Dullness or dehydration"].map(item => (
                             <li key={item} className="text-sm text-zinc-500 flex gap-3 font-light leading-snug">
                                <span className="text-zinc-900">▪</span> {item}
                             </li>
                          ))}
                       </ul>
                    </div>

                    {/* Hands */}
                    <div className="space-y-5">
                       <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-900 flex items-center gap-2">
                          <Target size={16} className="text-zinc-400" /> Hands
                       </h4>
                       <ul className="space-y-3">
                          {["Skin thinning", "Texture irregularities", "Loss of firmness"].map(item => (
                             <li key={item} className="text-sm text-zinc-500 flex gap-3 font-light leading-snug">
                                <span className="text-zinc-900">▪</span> {item}
                             </li>
                          ))}
                       </ul>
                    </div>
                  </div>
               </div>
            </section>

            {/* INDICATIONS & PROTOCOL GRID */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Additional Indications Card */}
              <div className="bg-zinc-900 text-white p-12 rounded-[3rem] space-y-8">
                <div className="space-y-2">
                   <h3 className="text-2xl font-light">Additional Indications</h3>
                   <div className="w-12 h-[1px] bg-zinc-700" />
                </div>
                <ul className="space-y-5">
                  {[
                    "Acne-prone or stressed skin",
                    "Early signs of ageing",
                    "Support for scarred or compromised skin",
                    "General bio-regeneration"
                  ].map((text) => (
                    <li key={text} className="flex items-center gap-4 text-sm text-zinc-400 font-light">
                      <CheckCircle2 size={18} className="text-zinc-100 shrink-0" /> {text}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Clinical Note Card */}
              <div className="bg-[#EAEAE6] p-12 rounded-[3rem] flex flex-col justify-center space-y-6">
                <div className="space-y-4">
                   <h4 className="text-xl font-medium text-zinc-900 flex items-center gap-2">
                     Expected Results <Sparkles size={18} className="text-zinc-400" />
                   </h4>
                   <p className="text-sm text-zinc-600 font-light leading-relaxed">
                     Results develop progressively, with visible improvement in hydration and smoothness as collagen and elastin levels increase. Optimal results are seen after completing the full recommended course.
                   </p>
                </div>
                <div className="pt-4 p-6 bg-white/50 rounded-2xl border border-zinc-200">
                   <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-2">Clinical Protocol</p>
                   <p className="text-[13px] text-zinc-800 font-medium">3–4 sessions spaced 7–10 days apart.</p>
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
              {/* Decorative Glow */}
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-zinc-100/5 blur-[100px] rounded-full" />
            </section>

          </div>
        </div>
      </div>
    </main>
  )
}