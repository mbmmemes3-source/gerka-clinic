"use client"

import { motion } from "framer-motion"
import { ArrowLeft, ShieldCheck, Zap, Heart, Activity, Sparkles, ChevronRight, Info, Microscope, Stethoscope, UserCheck, Target, CheckCircle2, Euro, Clock } from "lucide-react"
import Link from "next/link"
import { ServiceSidebar } from "@/components/ServiceSidebar"

const indications = [
  "Childbirth",
  "Menopause or perimenopause",
  "Age-related tissue laxity",
  "Vaginal dryness or reduced sensation",
  "Mild pelvic discomfort"
]

const keyBenefits = [
  "Non-surgical vaginal tightening",
  "Improves vaginal tone and elasticity",
  "Supports intimate comfort and hydration",
  "Safe and clinically proven technology",
  "No downtime or recovery period",
  "Suitable for women at different life stages"
]

export default function ExilisUltraFemmePage() {
  return (
    <main className="bg-[#FAF9F6] min-h-screen pb-20">
      
      {/* 1. TOP NAVIGATION */}
      <div className="pt-32 pb-8 px-6 md:px-10 max-w-7xl mx-auto">
        <Link href="/" className="group inline-flex items-center gap-2 text-zinc-400 hover:text-zinc-900 transition-colors">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Back to women's health</span>
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* 2. REUSABLE SIDEBAR */}
          <ServiceSidebar 
            activeService="Exilis Ultra Femme® Vaginal Tightening" 
            categoryTitle="Women's Health" 
          />

          {/* 3. MAIN CONTENT AREA */}
          <div className="lg:col-span-9 space-y-16 md:space-y-24">
            
            {/* HERO SECTION */}
            <section className="space-y-12">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-light text-zinc-900 tracking-tight leading-tight">
                  Exilis Ultra Femme® – <br />
                  <span className="italic font-serif text-zinc-500 font-light">Advanced Vaginal Tightening</span>
                </h1>
                <div className="flex flex-wrap gap-6 border-b border-zinc-200 pb-8">
                  <span className="text-xs font-bold text-zinc-900 uppercase tracking-widest flex items-center gap-2">
                    <Euro size={14} className="text-zinc-400" /> €400 Internal & External Session
                  </span>
                  <span className="text-xs font-bold text-zinc-900 uppercase tracking-widest flex items-center gap-2">
                    <Euro size={14} className="text-zinc-400" /> Package of 3: €1050
                  </span>
                  <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest flex items-center gap-2 italic border-l border-zinc-200 pl-4">
                    <Clock size={14} className="text-zinc-400" /> 45-60 min
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                <div className="space-y-6 text-zinc-600 font-light leading-relaxed text-[16px]">
                  <p>
                    Exilis Ultra Femme® is a non-surgical radiofrequency treatment designed to improve vaginal laxity, tissue tone and comfort, using controlled monopolar radiofrequency energy to stimulate <span className="text-zinc-900 font-medium italic font-serif">collagen remodelling</span> and tissue tightening.
                  </p>
                  <p>
                    At Gerka Clinic, Dublin, we have been offering Exilis Ultra Femme® since 2019, making us one of the clinics with the longest experience in Ireland delivering this advanced technology for women’s intimate health.
                  </p>
                </div>
                <div className="aspect-[7/5] rounded-[3rem] overflow-hidden shadow-2xl border-white border-8">
                  <img src="/exillis.jpeg" alt="Exilis Ultra Femme Applicator" className="w-full h-full object-cover" />
                </div>
              </div>
            </section>

            {/* MECHANISM SECTION: DIAGRAM */}
            <section className="bg-white rounded-[3rem] p-10 md:p-16 border border-zinc-100 shadow-sm space-y-12">
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-8">
                     <h2 className="text-3xl font-light text-zinc-900 uppercase tracking-tight">How Exilis Works?</h2>
                     <p className="text-zinc-500 font-light leading-relaxed">
                        The treatment uses a combination of radiofrequency and ultrasound to gently heat the internal and external tissues. This thermal energy triggers the body's natural healing response to regenerate collagen fibers.
                     </p>
                     <div className="flex items-center gap-4 p-4 bg-zinc-50 rounded-2xl border border-zinc-100 w-fit">
                        <Zap className="text-zinc-400" size={24} />
                        <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Thermal Collagen Remodelling</span>
                     </div>
                  </div>
                  <div className="relative aspect-video rounded-[2.5rem] overflow-hidden shadow-lg border border-zinc-50">
                     <img src="/ultra.webp" alt="Exilis Ultra Femme Mechanism" className="w-full h-full object-cover" />
                  </div>
               </div>
            </section>

            {/* INDICATIONS SECTION */}
            <section className="space-y-12">
               <div className="max-w-2xl space-y-4">
                  <h3 className="text-3xl font-light text-zinc-900 uppercase tracking-tight">Ideal For Women Experiencing</h3>
                  <p className="text-zinc-500 font-light italic">This treatment is ideal for changes related to:</p>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                  {indications.map(item => (
                    <div key={item} className="flex items-center gap-4 py-3 border-b border-zinc-100">
                       <Target size={16} className="text-zinc-300" />
                       <span className="text-sm text-zinc-600 font-light">{item}</span>
                    </div>
                  ))}
               </div>
            </section>

            {/* BENTO GRID: BENEFITS & CLINICAL NOTE */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Key Benefits Card */}
              <div className="bg-zinc-900 text-white p-12 rounded-[3rem] space-y-8 shadow-xl">
                <h3 className="text-2xl font-light">Key Benefits</h3>
                <ul className="space-y-5">
                  {keyBenefits.map((text) => (
                    <li key={text} className="flex items-start gap-4 text-sm text-zinc-400 font-light leading-relaxed">
                      <CheckCircle2 size={18} className="text-zinc-100 shrink-0" /> {text}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Suitability/Downtime Card */}
              <div className="bg-[#EAEAE6] p-12 rounded-[3rem] space-y-8 flex flex-col justify-center">
                <div className="space-y-4">
                   <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center">
                      <Activity size={24} className="text-zinc-900" />
                   </div>
                   <h3 className="text-2xl font-light text-zinc-900 uppercase tracking-tight">Clinical Protocol</h3>
                   <p className="text-sm text-zinc-600 font-light leading-relaxed">
                     Optimal results are typically achieved through a series of <span className="font-bold text-zinc-900">3 sessions</span>. The treatment is safe, comfortable, and discreet with <span className="font-bold text-zinc-900">no downtime</span> required.
                   </p>
                </div>
                <div className="pt-6 border-t border-zinc-200">
                   <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-2">Package Pricing</p>
                   <p className="text-[13px] text-zinc-800 font-medium">Available for recommended clinical courses.</p>
                </div>
              </div>
            </section>

            {/* FINAL CTA */}
            <section className="bg-zinc-900 rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl relative overflow-hidden">
              <div className="space-y-3 text-center md:text-left relative z-10">
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-500">Intimate Aesthetic Care</p>
                <h2 className="text-3xl md:text-4xl font-light text-white leading-tight">Book a private consultation</h2>
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