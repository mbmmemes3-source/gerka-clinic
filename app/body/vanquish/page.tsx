"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Clock, Euro, CheckCircle2, ShieldCheck, Zap, Target, Info, ChevronRight, Calendar } from "lucide-react"
import Link from "next/link"
import { ServiceSidebar } from "@/components/ServiceSidebar"

const keyBenefits = [
  "FDA-cleared & CE-marked technology",
  "Non-surgical and non-invasive",
  "No downtime or recovery period",
  "Comfortable, contact-free treatment",
  "Clinically proven fat reduction"
]

export default function VanquishServicePage() {
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
            activeService="Vanquish ME® Body Contouring" 
            categoryTitle="Body Treatments" 
          />

          {/* 3. MAIN CONTENT */}
          <div className="lg:col-span-9 space-y-16 md:space-y-24">
            
            {/* HERO SECTION */}
            <section className="space-y-12">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-light text-zinc-900 tracking-tight leading-tight">
                  Vanquish ME® <br />
                  <span className="italic font-serif text-zinc-500 font-light">Body Contouring</span>
                </h1>
                <div className="flex flex-wrap gap-4 border-b border-zinc-200 pb-8">
                  <span className="text-xs font-bold text-zinc-900 uppercase tracking-widest flex items-center gap-2">
                    <Euro size={14} className="text-zinc-400" /> Cost: €200 per session
                  </span>
                  <span className="text-xs font-bold text-zinc-900 uppercase tracking-widest flex items-center gap-2">
                    <Clock size={14} className="text-zinc-400" /> Duration: 45 min
                  </span>
                  <span className="text-xs font-bold text-zinc-900 uppercase tracking-widest flex items-center gap-2 italic">
                    Package of 4: €600
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                <div className="space-y-6 text-zinc-600 font-light leading-relaxed text-[16px]">
                  <p>
                    Vanquish ME® by BTL Aesthetics is an advanced, non-invasive body contouring treatment designed to target and permanently reduce localised fat. Using selective radiofrequency energy, Vanquish ME® heats fat cells safely, triggering natural fat cell elimination while preserving surrounding tissues.
                  </p>
                  <p>
                    At Gerka Clinic, Vanquish ME® treatments are delivered using medical-grade protocols and FDA-cleared technology, offering a comfortable, <span className="text-zinc-900 font-medium">contact-free experience</span> with no needles, no anaesthesia and no downtime.
                  </p>
                  <p className="text-sm italic border-l-2 border-zinc-200 pl-4 py-1">
                    This treatment is ideal for patients close to their target weight who struggle with stubborn fat resistant to diet and exercise.
                  </p>
                </div>
                <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
                  <img src="/vanquish.jpeg" alt="Vanquish ME Procedure" className="w-full h-full object-cover" />
                </div>
              </div>
            </section>

            {/* BENTO GRID: BENEFITS & AREAS */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Key Benefits Card */}
              <div className="bg-zinc-900 text-white p-12 rounded-[3rem] space-y-8 shadow-xl">
                <div className="space-y-2">
                   <h3 className="text-2xl font-light flex items-center gap-3">
                     Key Benefits <ShieldCheck size={24} className="text-zinc-500" />
                   </h3>
                   <div className="w-12 h-[1px] bg-zinc-700" />
                </div>
                <ul className="space-y-5">
                  {keyBenefits.map((text) => (
                    <li key={text} className="flex items-start gap-4 text-sm text-zinc-400 font-light leading-relaxed">
                      <div className="w-1 h-1 rounded-full bg-white mt-2 shrink-0" /> {text}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Areas Treated Card */}
              <div className="bg-white border border-zinc-100 p-12 rounded-[3rem] flex flex-col justify-between space-y-8 shadow-sm">
                <div className="space-y-6">
                   <h3 className="text-2xl font-light text-zinc-900">Areas Treated</h3>
                   <p className="text-zinc-500 font-light leading-relaxed">
                     The large aperture of the Vanquish ME® applicator allows us to treat significant areas simultaneously for a balanced silhouette.
                   </p>
                   <ul className="grid grid-cols-2 gap-y-4">
                      {["Abdomen", "Flanks", "Thighs", "Arms", "Back fat"].map(area => (
                        <li key={area} className="flex items-center gap-3 text-sm text-zinc-800 font-medium">
                           <Target size={16} className="text-zinc-300" /> {area}
                        </li>
                      ))}
                   </ul>
                </div>
                <div className="pt-6 border-t border-zinc-50">
                   <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Technology Focus</span>
                   <p className="text-sm text-zinc-800 font-semibold mt-1">Selective Radiofrequency Energy</p>
                </div>
              </div>
            </section>

            {/* TREATMENT DETAILS & SUITABILITY */}
            <section className="bg-[#EAEAE6]/50 rounded-[3rem] p-10 md:p-16 space-y-12">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-4">
                     <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-400">Treatment Details</h4>
                     <p className="text-lg text-zinc-800 font-light leading-relaxed">
                        Sessions last approximately <span className="font-semibold text-zinc-900">45 minutes</span>. A clinical course of <span className="font-semibold text-zinc-900">4 treatments</span> is recommended for optimal silhouette refinement.
                     </p>
                  </div>
                  <div className="space-y-4">
                     <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-400">Suitability</h4>
                     <p className="text-lg text-zinc-800 font-light leading-relaxed">
                        Suitable for men and women seeking safe, effective body contouring. A consultation is required to assess individual suitability and create a personalised treatment plan.
                     </p>
                  </div>
               </div>
               <div className="flex items-center gap-3 text-zinc-500 border-t border-zinc-200 pt-8">
                  <Info size={18} className="shrink-0" />
                  <p className="text-xs uppercase tracking-widest">Protocol-led clinical excellence</p>
               </div>
            </section>

            {/* FINAL CTA */}
            <section className="bg-zinc-900 rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl relative overflow-hidden">
              <div className="space-y-3 text-center md:text-left relative z-10">
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-500">Refine Your Silhouette</p>
                <h2 className="text-3xl md:text-4xl font-light text-white leading-tight">Book a consultation</h2>
              </div>
              <Link href="/#contact" className="w-full md:w-auto relative z-10">
                <button className="w-full md:w-auto bg-white text-zinc-900 px-12 py-5 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] hover:scale-105 transition-all active:scale-95 shadow-lg">
                  Check Availability
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