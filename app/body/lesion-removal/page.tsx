"use client"

import { motion } from "framer-motion"
import { ArrowLeft, ShieldCheck, Target, Microscope, Zap, CheckCircle2, Scissors, Info, AlertTriangle, Euro, MessageCircle, Calendar } from "lucide-react"
import Link from "next/link"
import { ServiceSidebar } from "@/components/ServiceSidebar"

const bodyLesions = [
  {
    title: "Skin Tags (Acrochordons)",
    desc: "Soft fibromas that commonly develop on the neck, underarms, and areas of friction. Removal is straightforward for improved comfort and aesthetics."
  },
  {
    title: "Seborrhoeic Keratoses",
    desc: "Harmless 'stuck-on' appearing plaques that can become itchy or catch on clothing. We remove these safely with minimal disruption to surrounding skin."
  },
  {
    title: "Cherry Angiomas",
    desc: "Small, bright red vascular spots caused by an overgrowth of blood vessels. These are easily treated using precision electrosurgery."
  },
  {
    title: "Epidermoid Cysts",
    desc: "Superficial benign lumps beneath the skin. Subject to assessment, these can be managed via minor clinical surgical techniques."
  },
  {
    title: "Benign Moles",
    desc: "Raised or flat moles on the body can be removed for cosmetic or comfort reasons, provided they are confirmed benign during assessment."
  },
  {
    title: "Warts (Non-Intimate)",
    desc: "Superficial viral growths on the limbs or torso. We use targeted removal methods to clear the lesion and prevent local spread."
  }
]

const techniques = [
  "Minor surgical removal",
  "Shave excision",
  "Medical electrosurgery",
  "Cautery & precision techniques"
]

export default function BodySkinLesionRemovalPage() {
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
            activeService="Skin Lesion Removal" 
            categoryTitle="Body Treatments" 
          />

          {/* 3. MAIN CONTENT AREA */}
          <div className="lg:col-span-9 space-y-16 md:space-y-24">
            
            {/* HERO SECTION */}
            <section className="space-y-12">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-light text-zinc-900 tracking-tight leading-tight">
                  Body Skin Lesion <br />
                  <span className="italic font-serif text-zinc-500 font-light">Safe & Precise Removal</span>
                </h1>
                
                {/* PRICE BANNER */}
                <div className="flex flex-wrap gap-y-4 gap-x-8 border-b border-zinc-200 pb-8">
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Starting Cost</span>
                    <span className="text-sm font-bold text-zinc-900 flex items-center gap-2">
                      <Euro size={14} className="text-zinc-400" /> From €90 per lesion
                    </span>
                  </div>
                  <div className="flex flex-col gap-1 border-l border-zinc-200 pl-8">
                    <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Clinical Quote</span>
                    <span className="text-sm font-bold text-zinc-900 flex items-center gap-2">
                      <MessageCircle size={14} className="text-zinc-400" /> WhatsApp Photo Review
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                <div className="space-y-6 text-zinc-600 font-light leading-relaxed text-[16px]">
                  <p>
                    At Gerka Clinic, we offer the assessment and removal of a range of benign skin lesions affecting different areas of the body. These lesions may be removed for aesthetic, functional, or comfort reasons—especially when they rub on clothing, become irritated, or grow.
                  </p>
                  <p>
                    All lesions are carefully assessed before treatment to determine the most suitable approach. Our focus is on achieving the best possible cosmetic result while maintaining a medical and safety-led approach.
                  </p>
                  <div className="p-6 bg-zinc-50 border border-zinc-100 rounded-2xl">
                    <p className="text-xs font-bold uppercase tracking-widest text-zinc-900 mb-2">Safety Standard</p>
                    <p className="text-sm italic">When clinically indicated, removed tissue may be sent for histopathology analysis for added safety and reassurance.</p>
                  </div>
                </div>
                <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-white border-8">
                  <img src="/body-lesion.webp" alt="Body skin assessment" className="w-full h-full object-cover" />
                </div>
              </div>
            </section>

            {/* WHAT WE TREAT GRID */}
            <section className="space-y-12">
               <div className="space-y-4">
                  <h3 className="text-3xl font-light text-zinc-900 uppercase tracking-tight">Lesions We Treat</h3>
                  <p className="text-zinc-500 font-light">We assess and treat a variety of common benign skin growths:</p>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {bodyLesions.map((item) => (
                    <div key={item.title} className="p-8 bg-white border border-zinc-100 rounded-3xl space-y-4 shadow-sm group hover:border-zinc-300 transition-all">
                       <h4 className="text-lg font-medium text-zinc-900 flex items-center gap-3">
                          <Target size={18} className="text-zinc-300" /> {item.title}
                       </h4>
                       <p className="text-sm text-zinc-500 font-light leading-relaxed">
                          {item.desc}
                       </p>
                    </div>
                  ))}
               </div>
            </section>

            {/* TREATMENT APPROACH */}
            <section className="bg-zinc-900 text-white rounded-[3rem] p-10 md:p-16 space-y-12 shadow-2xl relative overflow-hidden">
               <div className="max-w-2xl space-y-6 relative z-10">
                  <h2 className="text-3xl font-light">Clinical Approach</h2>
                  <p className="text-zinc-400 font-light leading-relaxed">
                    Depending on the type, size, and location of the lesion, we employ specific in-clinic techniques designed to minimize marking and maximize healing:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {techniques.map(tech => (
                       <div key={tech} className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                             <Scissors size={14} className="text-zinc-500" />
                          </div>
                          <span className="text-xs font-bold uppercase tracking-widest text-zinc-200">{tech}</span>
                       </div>
                    ))}
                  </div>
               </div>
               <div className="absolute top-0 right-0 w-64 h-64 bg-zinc-800 rounded-full blur-[100px] opacity-40" />
            </section>

            {/* WHY PATIENTS CHOOSE TREATMENT */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="bg-white border border-zinc-100 p-10 rounded-[3rem] space-y-8 shadow-sm">
                  <h3 className="text-2xl font-light text-zinc-900 uppercase tracking-tight">Indications for Removal</h3>
                  <ul className="space-y-4">
                     {[
                        "Lesions catching on jewellery or clothing",
                        "Chronic inflammation or irritation",
                        "Cosmetically bothersome appearance",
                        "Discomfort during exercise or shaving",
                        "Increase in size or change in texture"
                     ].map(point => (
                        <li key={point} className="flex items-start gap-3 text-sm text-zinc-500 font-light leading-relaxed">
                           <CheckCircle2 size={18} className="text-zinc-900 shrink-0 mt-0.5" /> {point}
                        </li>
                     ))}
                  </ul>
               </div>

               <div className="bg-[#EAEAE6] p-10 rounded-[3rem] space-y-8 flex flex-col justify-center">
                  <div className="space-y-4">
                     <h3 className="text-2xl font-light text-zinc-900 uppercase tracking-tight">Histology Service</h3>
                     <p className="text-sm text-zinc-600 font-light leading-relaxed">
                        Where appropriate, removed lesions are sent to a pathology laboratory for histological examination. This is essential in cases where diagnostic confirmation is clinically recommended.
                     </p>
                  </div>
                  <div className="p-6 bg-white/50 rounded-2xl border border-zinc-200 flex items-center gap-4">
                     <Microscope size={20} className="text-zinc-400" />
                     <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Pathology-led safety approach</p>
                  </div>
               </div>
            </section>

            {/* MEDICAL LIMITATIONS / SAFETY NOTE */}
            <section className="p-10 md:p-16 bg-[#F9F9F7] rounded-[3rem] border border-zinc-100 space-y-10">
               <div className="flex items-center gap-4">
                  <AlertTriangle size={32} strokeWidth={1.5} className="text-zinc-400" />
                  <h3 className="text-2xl md:text-3xl font-light text-zinc-900 tracking-tight">Important Medical Note</h3>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                  {[
                    "Every lesion requires clinical examination prior to any procedure",
                    "Suspicious or atypical lesions will be referred for medical review",
                    "Not all lesions are suitable for same-day removal",
                    "Patient safety always precedes cosmetic preference"
                  ].map((info) => (
                    <div key={info} className="flex gap-4 items-start">
                       <div className="w-1.5 h-1.5 rounded-full bg-zinc-300 mt-2 shrink-0" />
                       <p className="text-[15px] text-zinc-500 font-light leading-relaxed">{info}</p>
                    </div>
                  ))}
               </div>
            </section>

            {/* FINAL CTA */}
            <section className="bg-zinc-900 rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl relative overflow-hidden">
              <div className="space-y-3 text-center md:text-left relative z-10">
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-500">Professional Clinical Care</p>
                <h2 className="text-3xl md:text-4xl font-light text-white leading-tight">Book a lesion assessment</h2>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 relative z-10 w-full md:w-auto">
                 <Link href="/#contact" className="w-full sm:w-auto">
                    <button className="w-full bg-white text-zinc-900 px-8 py-4 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] hover:scale-105 transition-all active:scale-95 shadow-lg">
                      Book Consultation
                    </button>
                 </Link>
                 <a href="https://wa.me/0878888087" target="_blank" className="w-full sm:w-auto">
                    <button className="w-full border border-white/20 text-white px-8 py-4 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                      <MessageCircle size={16} /> Photo Quote
                    </button>
                 </a>
              </div>
            </section>

          </div>
        </div>
      </div>
    </main>
  )
}