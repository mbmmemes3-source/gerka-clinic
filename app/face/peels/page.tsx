"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Clock, Euro, CheckCircle2, Sparkles, Target, Info, ChevronRight, Beaker } from "lucide-react"
import Link from "next/link"
import { ServiceSidebar } from "@/components/ServiceSidebar"

const treatableConditions = [
  "Pigmentation & sun damage",
  "Post-inflammatory hyperpigmentation",
  "Melasma (light cases)",
  "Acne & congestion",
  "Enlarged pores",
  "Uneven texture",
  "Dullness",
  "Fine lines"
]

const acidBlends = [
  "Glycolic Acid",
  "Lactic Acid",
  "Mandelic Acid",
  "Salicylic Acid",
  "TCA (Trichloroacetic Acid)"
]

const peelFaqs = [
  {
    q: "Will my skin peel a lot?",
    a: "Mild to moderate flaking is normal depending on peel strength."
  },
  {
    q: "How often can I get peels?",
    a: "Every 2–4 weeks depending on the programme."
  },
  {
    q: "Is it painful?",
    a: "Most peels cause a warm or tingling sensation."
  },
  {
    q: "Can peels treat melasma?",
    a: "Yes, but must be used carefully to avoid rebound pigment."
  }
]

export default function ChemicalPeelsServicePage() {
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
            activeService="Medical Skin Resurfacing" 
            categoryTitle="Face Treatments" 
          />

          {/* 3. MAIN CONTENT */}
          <div className="lg:col-span-9 space-y-16 md:space-y-24">
            
            {/* HERO SECTION */}
            <section className="space-y-12">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-light text-zinc-900 tracking-tight leading-tight">
                  Chemical Peels – <br />
                  <span className="italic font-serif text-zinc-500">Medical Skin Resurfacing</span>
                </h1>
                <div className="flex flex-wrap gap-6 border-b border-zinc-200 pb-8">
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Peeling Face</span>
                    <span className="text-sm font-bold text-zinc-900 flex items-center gap-2">
                      <Euro size={14} className="text-zinc-400" /> From €120 per session
                    </span>
                  </div>
                  <div className="flex flex-col gap-1 border-l border-zinc-200 pl-6">
                    <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">TCA Peel</span>
                    <span className="text-sm font-bold text-zinc-900 flex items-center gap-2">
                      <Euro size={14} className="text-zinc-400" /> €180 per session
                    </span>
                  </div>
                  <div className="flex flex-col gap-1 border-l border-zinc-200 pl-6">
                    <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Packages</span>
                    <span className="text-sm font-bold text-zinc-400 uppercase tracking-widest italic">
                      Price TBC
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                <div className="space-y-6 text-zinc-600 font-light leading-relaxed text-[16px]">
                   <h3 className="text-2xl font-light text-zinc-900">What Are Chemical Peels?</h3>
                  <p>
                    Chemical peels are medical exfoliating treatments that improve skin tone, texture and clarity by removing damaged surface layers and stimulating regeneration. Peels target pigmentation, acne, dullness and early ageing with safe, controlled depth.
                  </p>
                  <p>
                    At Gerka Clinic we offer gentle to medium-depth peels tailored to your skin type and goals.
                  </p>
                  
                  <div className="pt-4 space-y-4">
                     <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-900">What Can Peels Treat?</h4>
                     <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
                        {treatableConditions.map(item => (
                          <li key={item} className="text-sm text-zinc-500 flex gap-3 items-center font-light">
                            <span className="text-zinc-900">▪</span> {item}
                          </li>
                        ))}
                     </ul>
                  </div>
                </div>
                <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
                  <img src="/chemical1.webp" alt="Chemical Peel Application" className="w-full h-full object-cover" />
                </div>
              </div>
            </section>

            {/* PRODUCT SHOWCASE: MESOESTETIC */}
            <section className="bg-white rounded-[3rem] p-10 md:p-16 border border-zinc-100 shadow-sm overflow-hidden">
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-8">
                     <h2 className="text-3xl font-light text-zinc-900">Who Is <span className="italic font-serif text-zinc-500">Suitable?</span></h2>
                     <p className="text-zinc-500 font-light leading-relaxed">
                        Ideal for anyone wanting brighter, smoother skin or those battling pigmentation, acne or texture concerns. Safe for most skin tones when performed professionally.
                     </p>
                     <div className="flex flex-wrap gap-3">
                        {["Brightening", "Smoothing", "Anti-Acne", "Texture Correction"].map(tag => (
                          <span key={tag} className="px-4 py-2 bg-zinc-50 rounded-full text-[10px] font-bold uppercase tracking-widest text-zinc-400 border border-zinc-100">{tag}</span>
                        ))}
                     </div>
                  </div>
                  <div className="relative">
                     <img src="/chemical2.webp" alt="Mesoestetic Professional Solutions" className="w-full h-auto object-contain rounded-2xl" />
                  </div>
               </div>
            </section>

            {/* HOW IT WORKS SECTION */}
            <section className="space-y-12">
               <div className="space-y-4">
                  <h2 className="text-3xl font-light text-zinc-900">How Do Chemical Peels <span className="italic font-serif text-zinc-500">Work?</span></h2>
                  <p className="text-zinc-500 font-light leading-relaxed max-w-2xl">
                    A customised blend of medical acids exfoliates and renews the skin. This stimulates:
                  </p>
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="p-10 rounded-[2.5rem] bg-zinc-900 text-white space-y-8">
                    <div className="flex flex-col gap-2">
                       <h3 className="text-2xl font-light text-white flex items-center gap-3">Medical Acid Blends <Beaker size={20} className="text-zinc-500" /></h3>
                       <div className="w-12 h-[1px] bg-zinc-700" />
                    </div>
                    <ul className="space-y-4">
                      {acidBlends.map(acid => (
                        <li key={acid} className="text-sm text-zinc-400 font-light flex items-center gap-3">
                          <CheckCircle2 size={16} className="text-zinc-100" /> {acid}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-10 rounded-[2.5rem] bg-[#EAEAE6] border border-zinc-200 space-y-8">
                    <h3 className="text-2xl font-light text-zinc-900">Clinical Impact</h3>
                    <ul className="space-y-4">
                      {[
                        "Collagen improvement",
                        "Smoother, clearer texture",
                        "More even tone",
                        "Reduced pigment and congestion"
                      ].map(text => (
                        <li key={text} className="text-sm text-zinc-600 font-light flex gap-3 items-center">
                          <span className="text-zinc-900 font-bold">▪</span> {text}
                        </li>
                      ))}
                    </ul>
                    <p className="text-xs italic text-zinc-500 font-light border-t border-zinc-300 pt-4">
                      Results are visible within days.
                    </p>
                  </div>
               </div>
            </section>

            {/* BENEFITS & FAQ GRID */}
            <section className="grid grid-cols-1 lg:grid-cols-[0.4fr_0.6fr] gap-12">
               <div className="space-y-8">
                  <h3 className="text-2xl font-light text-zinc-900">Benefits</h3>
                  <ul className="space-y-4">
                    {[
                      "Brighter, more even complexion",
                      "Reduced pigmentation",
                      "Clearer pores",
                      "Improved texture",
                      "Radiant, renewed skin",
                      "Fast results"
                    ].map(text => (
                      <li key={text} className="flex gap-4 items-center text-sm text-zinc-500 font-light">
                        <Sparkles size={16} className="text-zinc-300" /> {text}
                      </li>
                    ))}
                  </ul>
               </div>

               <div className="space-y-10">
                  <h3 className="text-2xl font-light text-zinc-900">Treatment FAQs</h3>
                  <div className="grid grid-cols-1 gap-8">
                     {peelFaqs.map((faq, i) => (
                       <div key={i} className="space-y-2 group">
                          <h4 className="text-[13px] font-bold uppercase tracking-widest text-zinc-900 flex gap-3">
                             <span className="text-zinc-300">{i + 1}.</span> {faq.q}
                          </h4>
                          <p className="text-sm text-zinc-500 font-light leading-relaxed pl-7">
                             {faq.a}
                          </p>
                       </div>
                     ))}
                  </div>
               </div>
            </section>

            {/* FINAL CTA */}
            <section className="bg-zinc-900 rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl relative overflow-hidden">
              <div className="space-y-3 text-center md:text-left relative z-10">
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-500">Reveal Your Radiance</p>
                <h2 className="text-3xl md:text-4xl font-light text-white leading-tight">Book a consultation</h2>
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