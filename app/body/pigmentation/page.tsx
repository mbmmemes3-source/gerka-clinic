"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Clock, Euro, CheckCircle2, ShieldCheck, Sparkles, Target, Info, ChevronRight, HelpCircle, AlertCircle, Calendar } from "lucide-react"
import Link from "next/link"
import { ServiceSidebar } from "@/components/ServiceSidebar"

const treatableAreas = [
  "Inner thighs",
  "Underarms",
  "Buttocks",
  "Groin folds",
  "Back and shoulders",
  "Chest",
  "Abdomen",
  "Post-acne marks (back/chest)",
  "Darkening caused by friction",
  "Intimate areas"
]

const methodology = [
  {
    title: "1. Happy Intim® Peels",
    desc: "A medical-grade brightening solution specifically designed for sensitive areas to gently exfoliate and lighten pigmentation."
  },
  {
    title: "2. Dermamelan® Intimate",
    desc: "The gold-standard depigmenting treatment for the intimate area, groin, and inner thighs, targeting stubborn or deep-seated pigment."
  },
  {
    title: "3. Mesoestetic® Body Protocols",
    desc: "Professional peeling agents such as lactic or mandelic acid used to treat pigmentation on the back, chest, and limbs."
  },
  {
    title: "4. Prescription Home Care",
    desc: "Tailored formulas to maintain results and prevent rebound hyperpigmentation, ensuring the skin barrier remains healthy."
  }
]

const pigmentationFaqs = [
  {
    q: "Is body pigmentation treatment safe?",
    a: "Yes — we use specialized medical-grade ingredients and adjust the protocol based on the sensitivity of the area being treated."
  },
  {
    q: "How long until I see results?",
    a: "Noticeable brightening typically appears within 2-4 weeks. For deeper pigmentation or Dermamelan protocols, results continue to improve over 3 months."
  },
  {
    q: "Can this treat dark inner thighs and underarms?",
    a: "Absolutely. Friction-induced darkening in these areas is one of the most common concerns we manage at the clinic."
  },
  {
    q: "Can pigmentation come back?",
    a: "Yes, if the underlying cause (like friction) continues. We provide specific guidelines on prevention and long-term maintenance."
  }
]

export default function BodyPigmentationPage() {
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
            activeService="Pigmentation Treatment" 
            categoryTitle="Body Treatments" 
          />

          {/* 3. MAIN CONTENT */}
          <div className="lg:col-span-9 space-y-16 md:space-y-24">
            
            {/* HERO SECTION */}
            <section className="space-y-12">
              <div className="space-y-8">
                <h1 className="text-4xl md:text-5xl font-light text-zinc-900 tracking-tight leading-tight">
                  Body Pigmentation <br />
                  <span className="italic font-serif text-zinc-500 font-light">Depigmentation & Tone Correction</span>
                </h1>
                
                <div className="flex flex-wrap gap-y-6 gap-x-8 border-b border-zinc-200 pb-10">
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Happy Intim Peel</span>
                    <span className="text-sm font-bold text-zinc-900 flex items-center gap-2">
                      <Euro size={14} className="text-zinc-400" /> From €120 per session
                    </span>
                  </div>
                  <div className="flex flex-col gap-1 border-l border-zinc-200 pl-8">
                    <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Dermamelan Intimate</span>
                    <span className="text-sm font-bold text-zinc-900 flex items-center gap-2">
                      <Euro size={14} className="text-zinc-400" /> €480 per session
                    </span>
                  </div>
                  <div className="flex flex-col gap-1 border-l border-zinc-200 pl-8">
                    <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Other Body Areas</span>
                    <span className="text-sm font-bold text-zinc-900 flex items-center gap-2 italic">
                      <Calendar size={14} className="text-zinc-400" /> Price on Assessment
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                <div className="space-y-6 text-zinc-600 font-light leading-relaxed text-[16px]">
                  <h3 className="text-2xl font-light text-zinc-900">What Is Body Pigmentation Treatment?</h3>
                  <p>
                    Body pigmentation refers to the localised darkening of skin caused by hormonal shifts, chronic friction, inflammation, or post-acne scarring. It often appears in areas such as the inner thighs, underarms, groin, and buttocks.
                  </p>
                  <p>
                    At Gerka Clinic, we use industry-leading depigmentation protocols like <strong>Dermamelan®</strong> and <strong>Happy Intim®</strong>. Our approach is purely medical, focusing on regulating melanin production while improving overall skin texture and health.
                  </p>
                </div>
                <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-white border-8">
                  <img src="/pigment.webp" alt="Body Pigmentation Assessment" className="w-full h-full object-cover" />
                </div>
              </div>
            </section>

            {/* METHODOLOGY SECTION */}
            <section className="bg-white rounded-[3rem] p-10 md:p-16 border border-zinc-100 shadow-sm space-y-12">
               <div className="max-w-2xl space-y-4">
                  <h2 className="text-3xl font-light text-zinc-900">How Does the <span className="italic font-serif text-zinc-500 font-light">Treatment Work?</span></h2>
                  <p className="text-zinc-500 font-light">Our clinical protocol combines advanced depigmenting agents with barrier-respecting solutions:</p>
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {methodology.map((item, i) => (
                    <div key={i} className="p-8 rounded-[2rem] bg-zinc-50 border border-zinc-100 space-y-3">
                       <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-900">{item.title}</h4>
                       <p className="text-sm text-zinc-500 font-light leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
               </div>
            </section>

            {/* AREAS TREATED SECTION */}
            <section className="space-y-12">
               <h3 className="text-3xl font-light text-zinc-900">Areas <span className="italic font-serif text-zinc-500">of Clinical Focus</span></h3>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-12">
                  {treatableAreas.map(area => (
                    <div key={area} className="flex items-center gap-3 py-3 border-b border-zinc-100">
                       <Target size={16} className="text-zinc-300" />
                       <span className="text-[13px] text-zinc-700 font-light uppercase tracking-wide">{area}</span>
                    </div>
                  ))}
               </div>
            </section>

            {/* BENTO GRID: BENEFITS & SUITABILITY */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Benefits Card */}
              <div className="bg-zinc-900 text-white p-12 rounded-[3rem] space-y-8 shadow-xl">
                <h3 className="text-2xl font-light text-white">Benefits of Clinical Depigmentation</h3>
                <ul className="space-y-4">
                  {[
                    "Reduction of dark spots and patches",
                    "Brighter and more uniform skin tone",
                    "Targets pigment at the cellular level",
                    "Safe for intimate and sensitive friction zones",
                    "Minimally invasive with low downtime",
                    "Effective for post-inflammatory hyperpigmentation (PIH)"
                  ].map((text) => (
                    <li key={text} className="flex items-start gap-4 text-sm text-zinc-400 font-light leading-relaxed">
                      <CheckCircle2 size={18} className="text-zinc-500 shrink-0" /> {text}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Suitability Card */}
              <div className="bg-[#EAEAE6] p-12 rounded-[3rem] space-y-8">
                <div className="space-y-4">
                   <h3 className="text-2xl font-light text-zinc-900">Who is a Candidate?</h3>
                   <p className="text-sm text-zinc-600 font-light">The treatment is ideal for those experiencing:</p>
                </div>
                <ul className="space-y-4">
                   {[
                     "Inner thigh or underarm darkening",
                     "Pigmentation on the buttocks or groin",
                     "Post-acne marks on the back or chest",
                     "Darkening due to friction or tight clothing",
                     "Post-pregnancy skin changes",
                     "Hormone-related skin darkening"
                   ].map(text => (
                     <li key={text} className="text-sm text-zinc-700 flex gap-3 items-start">
                        <div className="w-1.5 h-1.5 rounded-full bg-zinc-400 shrink-0 mt-1.5" /> 
                        <span className="font-light">{text}</span>
                     </li>
                   ))}
                </ul>
                <div className="pt-4 border-t border-zinc-200">
                   <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 italic">Suitable for all skin phototypes.</p>
                </div>
              </div>
            </section>

            {/* TREATMENT JOURNEY & FAQs */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 pt-16 border-t border-zinc-200">
               <div className="space-y-8">
                  <div className="space-y-2">
                     <h3 className="text-2xl font-light text-zinc-900 uppercase tracking-tight">Treatment Protocol</h3>
                     <p className="text-xs text-zinc-400 font-bold uppercase tracking-widest">Expected Timeline:</p>
                  </div>
                  <ul className="space-y-6">
                    <li className="flex items-center gap-4">
                       <div className="w-2 h-2 bg-zinc-900 rotate-45 shrink-0" />
                       <p className="text-sm text-zinc-600 font-light">Course of 3–6 sessions for standard peels.</p>
                    </li>
                    <li className="flex items-center gap-4">
                       <div className="w-2 h-2 bg-zinc-900 rotate-45 shrink-0" />
                       <p className="text-sm text-zinc-600 font-light">Single intensive session for Dermamelan Intimate.</p>
                    </li>
                    <li className="flex items-center gap-4">
                       <div className="w-2 h-2 bg-zinc-900 rotate-45 shrink-0" />
                       <p className="text-sm text-zinc-600 font-light">Mandatory nightly home care for long-term correction.</p>
                    </li>
                  </ul>
                  <div className="p-4 bg-white border border-zinc-100 rounded-2xl">
                     <p className="text-xs italic text-zinc-400 leading-relaxed">Pricing for body areas beyond intimate zones is tailored to the surface area and depth of pigment.</p>
                  </div>
               </div>

               <div className="space-y-10">
                  <h3 className="text-2xl font-light text-zinc-900">Clinical FAQs</h3>
                  <div className="space-y-8">
                     {pigmentationFaqs.map((faq, i) => (
                       <div key={i} className="space-y-2">
                          <h4 className="text-[13px] font-bold uppercase tracking-widest text-zinc-900 flex gap-3">
                             <span className="text-zinc-300 font-serif">{i + 1}.</span> {faq.q}
                          </h4>
                          <p className="text-[14px] text-zinc-500 font-light leading-relaxed pl-7">
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
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-500">Clinical Skin Correction</p>
                <h2 className="text-3xl md:text-4xl font-light text-white leading-tight">Book a clinical assessment</h2>
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