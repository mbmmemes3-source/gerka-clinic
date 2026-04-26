"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Clock, Euro, CheckCircle2, Sparkles, Target, Info, ChevronRight, HelpCircle } from "lucide-react"
import Link from "next/link"
import { ServiceSidebar } from "@/components/ServiceSidebar"

const concerns = [
  "Congestion & blackheads",
  "Enlarged pores",
  "Dullness",
  "Uneven texture",
  "Dehydrated skin",
  "Early signs of ageing",
  "Post-holiday dullness"
]

const steps = [
  "Cleanses the skin",
  "Exfoliates dead cells",
  "Extracts impurities",
  "Infuses hydrating serums",
  "Improves glow and smoothness"
]

const faqs = [
  {
    q: "Does HydraFacial hurt?",
    a: "No — it is gentle and comfortable."
  },
  {
    q: "How often should I have it?",
    a: "Once a month is ideal for optimal skin health."
  },
  {
    q: "Will it make me red?",
    a: "Minimal redness that resolves quickly."
  },
  {
    q: "Can I wear makeup afterwards?",
    a: "Yes — after a few hours."
  }
]

export default function HydraFacialServicePage() {
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
            activeService="HydraFacial" 
            categoryTitle="Face Treatments" 
          />

          {/* 3. MAIN CONTENT */}
          <div className="lg:col-span-9 space-y-16 md:space-y-24">
            
            {/* HERO SECTION */}
            <section className="space-y-12">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-light text-zinc-900 tracking-tight leading-tight">
                  HydraFacial – <br />
                  <span className="italic font-serif text-zinc-500 font-light">Deep Cleansing & Skin Renewal</span>
                </h1>
                <div className="flex flex-wrap gap-4 border-b border-zinc-200 pb-8">
                  <span className="text-xs font-bold text-zinc-900 uppercase tracking-widest flex items-center gap-2">
                    <Euro size={14} className="text-zinc-400" /> Cost: 180€ (90 min)
                  </span>
                  <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest flex items-center gap-2">
                    Additional boosters 60€
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                <div className="space-y-6 text-zinc-600 font-light leading-relaxed text-[16px]">
                  <h3 className="text-2xl font-light text-zinc-900">What Is a HydraFacial?</h3>
                  <p>
                    HydraFacial is a non-invasive treatment that deeply cleanses, exfoliates and hydrates the skin using <span className="text-zinc-900 font-medium">vortex suction technology</span>. It removes impurities while infusing nourishing serums, leaving the skin glowing and refreshed.
                  </p>
                  <p>
                    Ideal before events or as part of regular skin maintenance. Instant results with no downtime.
                  </p>
                  
                  <div className="pt-4 space-y-4">
                     <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-900">What Concerns Does It Treat?</h4>
                     <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
                        {concerns.map(item => (
                          <li key={item} className="text-sm text-zinc-500 flex gap-3 items-center">
                            <span className="text-zinc-900">▪</span> {item}
                          </li>
                        ))}
                     </ul>
                  </div>
                </div>
                <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
                  {/* Image from screenshot: woman receiving hydrafacial */}
                  <img src="/hydra1.webp" alt="HydraFacial Treatment" className="w-full h-full object-cover" />
                </div>
              </div>
            </section>

            {/* ACTION SHOT */}
            <section className="relative aspect-[21/9] rounded-[3rem] overflow-hidden shadow-sm border border-zinc-100">
               <img src="/hydra2.webp" alt="Clinical HydraFacial Application" className="w-full h-full object-cover" />
               <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/10 to-transparent" />
            </section>

            {/* HOW IT WORKS & BENEFITS BENTO */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* How it Works */}
              <div className="bg-white rounded-[3rem] p-10 border border-zinc-100 shadow-sm space-y-8">
                <h3 className="text-2xl font-light text-zinc-900">How HydraFacial <span className="italic font-serif text-zinc-500">Works</span></h3>
                <p className="text-sm text-zinc-500 font-light">HydraFacial uses a specialised device that:</p>
                <div className="space-y-4">
                  {steps.map((step, i) => (
                    <div key={i} className="flex gap-4 items-center">
                      <span className="text-[10px] font-bold text-zinc-300 border border-zinc-200 w-6 h-6 rounded-full flex items-center justify-center shrink-0">{i + 1}</span>
                      <p className="text-sm text-zinc-600 font-light">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div className="bg-zinc-900 text-white rounded-[3rem] p-10 space-y-8 shadow-xl">
                <h3 className="text-2xl font-light">Benefits</h3>
                <ul className="space-y-4">
                  {[
                    "Instant glow",
                    "Deep pore cleansing",
                    "Smooth, hydrated skin",
                    "No irritation",
                    "Safe for all skin types",
                    "No downtime"
                  ].map((text) => (
                    <li key={text} className="flex items-center gap-4 text-sm text-zinc-400 font-light">
                      <CheckCircle2 size={18} className="text-zinc-100 shrink-0" /> {text}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* SUITABILITY SECTION */}
            <section className="bg-[#EAEAE6]/50 rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row items-center gap-12">
               <div className="w-full md:w-1/3">
                  <h4 className="text-2xl font-light text-zinc-900">Who Is It For?</h4>
               </div>
               <div className="w-full md:w-2/3 space-y-4">
                  <p className="text-lg text-zinc-800 font-light leading-relaxed">
                    Suitable for all skin types, including sensitive skin. Perfect for brides, events, or regular monthly skin maintenance.
                  </p>
                  <div className="inline-flex items-center gap-2 bg-white border border-zinc-200 px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                    <Sparkles size={12} /> The Gold Standard Cleanse
                  </div>
               </div>
            </section>

            {/* TREATMENT SPECIFIC FAQs */}
            <section className="space-y-12">
               <div className="space-y-2">
                  <h2 className="text-3xl font-light text-zinc-900">FAQs</h2>
                  <div className="w-12 h-[1px] bg-zinc-300" />
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
                  {faqs.map((faq, i) => (
                    <div key={i} className="space-y-3">
                       <h4 className="text-[13px] font-bold uppercase tracking-widest text-zinc-900 flex gap-3">
                          <span className="text-zinc-300">{i + 1}.</span> {faq.q}
                       </h4>
                       <p className="text-[15px] text-zinc-500 font-light leading-relaxed pl-7">
                          {faq.a}
                       </p>
                    </div>
                  ))}
               </div>
            </section>

            {/* FINAL CTA */}
            <section className="bg-zinc-900 rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl">
              <div className="space-y-3 text-center md:text-left">
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-500">Ready For The Glow?</p>
                <h2 className="text-3xl md:text-4xl font-light text-white leading-tight">Book a consultation</h2>
              </div>
              <Link href="/#contact" className="w-full md:w-auto">
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