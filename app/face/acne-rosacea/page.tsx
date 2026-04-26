"use client"

import { motion } from "framer-motion"
import { 
  ArrowLeft, 
  ShieldCheck, 
  Stethoscope, 
  Microscope, 
  Sparkles, 
  Home, 
  ClipboardList, 
  CheckCircle2, 
  ChevronRight,
  Info,
  Target,
  Euro
} from "lucide-react"
import Link from "next/link"
import { ServiceSidebar } from "@/components/ServiceSidebar"

const inClinicTreatments = [
  "Deep cleansing facials",
  "Professional skin peels",
  "Laser and light-based treatments",
  "Skin-calming and barrier-repair protocols"
]

const homeSkincare = [
  "Personalised skincare routines",
  "Medical-grade products",
  "Anti-inflammation and sensitivity control",
  "Congestion reduction protocols"
]

export default function AcneRosaceaServicePage() {
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
            activeService="Acne & Rosacea" 
            categoryTitle="Face Treatments" 
          />

          {/* 3. MAIN CONTENT AREA */}
          <div className="lg:col-span-9 space-y-16 md:space-y-24">
            
            {/* HERO SECTION */}
            <section className="space-y-12">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-light text-zinc-900 tracking-tight leading-tight">
                  Acne & Rosacea <br />
                  <span className="italic font-serif text-zinc-500 font-light">Treatment in Dublin</span>
                </h1>
                <div className="flex flex-wrap gap-4 border-b border-zinc-200 pb-8">
                  <span className="text-xs font-bold text-zinc-900 uppercase tracking-widest flex items-center gap-2">
                    <Stethoscope size={14} className="text-zinc-400" /> Specialist Assessment
                  </span>
                  <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest italic border-l border-zinc-200 pl-4">
                    Medical & Aesthetic Integration
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                <div className="space-y-6 text-zinc-600 font-light leading-relaxed text-[16px]">
                  <p>
                    At Gerka Clinic, we understand that acne and rosacea can have different causes and triggers. Our approach is not only focused on improving the visible condition of the skin, but also on identifying the factors that may be contributing to it.
                  </p>
                  <p>
                    We assess each case individually and, when necessary, may recommend <span className="text-zinc-900 font-medium">further tests or medical investigations</span> to better understand what is happening beneath the surface.
                  </p>
                  <div className="p-6 bg-white border border-zinc-100 rounded-2xl italic text-sm text-zinc-500 shadow-sm">
                    "Our aim is to treat the skin gently but effectively, helping to reduce breakouts and inflammation while supporting long-term health."
                  </div>
                </div>
                <div className="aspect-[7/5] rounded-[3rem] overflow-hidden shadow-2xl border-white border-8">
                  <img src="/acne.webp" alt="Skin Assessment for Acne and Rosacea" className="w-full h-full object-cover" />
                </div>
              </div>
            </section>

            {/* THREE-PILLAR TREATMENT STRATEGY */}
            <section className="space-y-12">
               <div className="max-w-2xl">
                  <h2 className="text-3xl font-light text-zinc-900 uppercase tracking-tight">Our Treatment <span className="italic font-serif text-zinc-500">Pathways</span></h2>
                  <p className="text-zinc-500 text-sm mt-4 font-light leading-relaxed">A comprehensive strategy combining clinical precision with home-care consistency.</p>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Pillar 1: In-Clinic */}
                  <div className="bg-white border border-zinc-100 rounded-[2.5rem] p-8 space-y-6 shadow-sm">
                     <div className="w-12 h-12 rounded-2xl bg-[#FAF9F6] flex items-center justify-center">
                        <Sparkles className="text-zinc-400" size={24} />
                     </div>
                     <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-900">In-Clinic Care</h3>
                     <ul className="space-y-3">
                        {inClinicTreatments.map(item => (
                          <li key={item} className="text-xs text-zinc-500 flex gap-2 font-light">
                             <div className="w-1 h-1 rounded-full bg-zinc-300 mt-1.5 shrink-0" /> {item}
                          </li>
                        ))}
                     </ul>
                  </div>

                  {/* Pillar 2: Home Skincare */}
                  <div className="bg-zinc-900 text-white rounded-[2.5rem] p-8 space-y-6 shadow-xl">
                     <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                        <Home className="text-white" size={24} />
                     </div>
                     <h3 className="text-sm font-bold uppercase tracking-widest text-white">Home Skincare</h3>
                     <ul className="space-y-3">
                        {homeSkincare.map(item => (
                          <li key={item} className="text-xs text-zinc-400 flex gap-2 font-light">
                             <div className="w-1 h-1 rounded-full bg-zinc-600 mt-1.5 shrink-0" /> {item}
                          </li>
                        ))}
                     </ul>
                  </div>

                  {/* Pillar 3: Prescribed */}
                  <div className="bg-[#EAEAE6] rounded-[2.5rem] p-8 space-y-6">
                     <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center">
                        <ClipboardList className="text-zinc-900" size={24} />
                     </div>
                     <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-900">Medical Prescriptions</h3>
                     <ul className="space-y-3">
                        {["Topical treatments", "Oral medication (if indicated)", "Ongoing monitoring", "Clinical review"].map(item => (
                          <li key={item} className="text-xs text-zinc-600 flex gap-2 font-light">
                             <div className="w-1 h-1 rounded-full bg-zinc-400 mt-1.5 shrink-0" /> {item}
                          </li>
                        ))}
                     </ul>
                  </div>
               </div>
            </section>

            {/* CLINICAL GOALS SECTION */}
            <section className="bg-white rounded-[3rem] p-10 md:p-16 border border-zinc-100 shadow-sm space-y-12 relative overflow-hidden">
               <div className="max-w-2xl space-y-6 relative z-10">
                  <h2 className="text-3xl font-light text-zinc-900 uppercase tracking-tight">Clinical Objectives</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6">
                     {[
                        "Reduce breakouts and congestion",
                        "Minimize visible redness",
                        "Calm active inflammation",
                        "Alleviate irritation and sensitivity",
                        "Restore the skin barrier",
                        "Support long-term skin health"
                     ].map(goal => (
                        <div key={goal} className="flex items-center gap-3">
                           <CheckCircle2 size={18} className="text-emerald-500 shrink-0" />
                           <span className="text-sm text-zinc-600 font-light">{goal}</span>
                        </div>
                     ))}
                  </div>
               </div>
               <div className="absolute top-0 right-0 w-64 h-64 bg-[#FAF9F6] rounded-full translate-x-1/2 -translate-y-1/2 -z-0 opacity-50" />
            </section>

            {/* DIAGNOSTIC NOTE */}
            <section className="p-8 md:p-12 bg-zinc-900 text-white rounded-[3.5rem] relative overflow-hidden">
               <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
                  <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                     <Microscope className="text-zinc-400" size={32} />
                  </div>
                  <div className="space-y-4">
                     <h3 className="text-2xl font-light">Root Cause Investigation</h3>
                     <p className="text-zinc-400 font-light text-sm leading-relaxed max-w-2xl">
                        Acne and Rosacea often require more than surface-level treatment. Our gynaecology-led clinic is uniquely positioned to assess hormonal factors and systemic triggers that may be affecting your skin's health.
                     </p>
                  </div>
               </div>
               <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 blur-3xl rounded-full" />
            </section>

            {/* FINAL CTA */}
            <section className="bg-white border border-zinc-100 rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 shadow-sm relative overflow-hidden">
              <div className="space-y-3 text-center md:text-left relative z-10">
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-500">Personalised Clinical Care</p>
                <h2 className="text-3xl md:text-4xl font-light text-zinc-900 leading-tight tracking-tight uppercase">Start your treatment</h2>
              </div>
              <Link href="/#contact" className="w-full md:w-auto relative z-10">
                <button className="w-full md:w-auto bg-zinc-900 text-white px-12 py-5 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-zinc-800 transition-all active:scale-95 shadow-lg">
                  Book Assessment
                </button>
              </Link>
            </section>

          </div>
        </div>
      </div>
    </main>
  )
}