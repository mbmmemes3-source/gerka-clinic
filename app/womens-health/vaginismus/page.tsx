"use client"

import { motion } from "framer-motion"
import { ArrowLeft, ShieldCheck, Zap, HeartPulse, CheckCircle2, ChevronRight, Info, Activity, Stethoscope, Euro } from "lucide-react"
import Link from "next/link"
import { ServiceSidebar } from "@/components/ServiceSidebar"

const rfBenefits = [
  "Reduce pelvic floor muscle tension",
  "Improve tissue elasticity and comfort",
  "Enhance blood flow and neuromuscular relaxation",
  "Support long-term symptom improvement"
]

const btxResults = [
  "Reduced pain and muscle contraction",
  "Improved tolerance to penetration and examinations",
  "Faster functional recovery when combined with follow-up care"
]

export default function VaginismusServicePage() {
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
            activeService="Vaginismus: Advanced Specialist Treatment" 
            categoryTitle="Women's Health" 
          />

          {/* 3. MAIN CONTENT AREA */}
          <div className="lg:col-span-9 space-y-16 md:space-y-24">
            
            {/* HERO SECTION */}
            <section className="space-y-12">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-light text-zinc-900 tracking-tight leading-tight">
                  Vaginismus: <br />
                  <span className="italic font-serif text-zinc-500 font-light">Advanced Specialist Treatment</span>
                </h1>
                <div className="flex flex-wrap gap-4 border-b border-zinc-200 pb-8">
                  <span className="text-xs font-bold text-zinc-900 uppercase tracking-widest flex items-center gap-2">
                    <Euro size={14} className="text-zinc-400" /> Cost: TBC / Consultation Required
                  </span>
                  <span className="text-xs font-bold text-zinc-900 uppercase tracking-widest flex items-center gap-2">

                    <ShieldCheck size={14} className="text-zinc-400" /> Proven Experience Since 2018
                  </span>
                  <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest italic">
                    Radiofrequency & Botulinum Toxin
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                <div className="space-y-6 text-zinc-600 font-light leading-relaxed text-[16px]">
                  <h3 className="text-2xl font-light text-zinc-900 uppercase tracking-tight">Specialised, Evidence-Based Care</h3>
                  <p>
                    At Gerka Clinic, we provide specialised, evidence-based treatment for vaginismus, combining advanced medical technology with a compassionate, patient-centred approach.
                  </p>
                  <p>
                    Since 2018, our experienced medical team has successfully treated women seeking relief from pain, muscle spasm, and anxiety associated with this condition.
                  </p>
                  <p>
                    Vaginismus is a common and highly treatable condition characterised by <span className="text-zinc-900 font-medium">involuntary tightening</span> of the vaginal muscles, which can make penetration painful or impossible.
                  </p>
                </div>
                <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-white border-8">
                  {/* Image showing the couple in bed from your screenshot */}
                  <img src="/vaginismus.webp" alt="Supportive Intimate Care" className="w-full h-full object-cover" />
                </div>
              </div>
            </section>

            {/* CLINICAL FOCUS SECTION */}
            <section className="bg-white rounded-[3rem] p-10 md:p-16 border border-zinc-100 shadow-sm">
               <div className="max-w-3xl space-y-6 text-center mx-auto">
                  <h2 className="text-3xl font-light text-zinc-900 italic font-serif">Dual Aspect Recovery</h2>
                  <p className="text-zinc-500 font-light leading-relaxed">
                    At Gerka Clinic, we address both the <span className="font-medium text-zinc-900 uppercase tracking-wider text-sm">physical and emotional</span> aspects of vaginismus to ensure effective and lasting results. Our goal is to restore comfort, mobility, and confidence for our patients.
                  </p>
                  <div className="w-12 h-[1px] bg-zinc-200 mx-auto" />
               </div>
            </section>

            {/* TREATMENT OPTIONS: RADIOFREQUENCY */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
               <div className="space-y-10">
                  <div className="space-y-4">
                    <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-400">Option 01</span>
                    <h3 className="text-3xl font-light text-zinc-900">Radiofrequency Therapy</h3>
                    <p className="text-zinc-600 font-light leading-relaxed">
                      Our medical-grade radiofrequency treatment is a non-invasive option designed to target the neuromuscular pathways of the pelvic floor.
                    </p>
                  </div>
                  <ul className="space-y-4">
                    {rfBenefits.map((item, i) => (
                      <li key={i} className="flex items-center gap-4 text-sm text-zinc-500 font-light">
                        <div className="w-1.5 h-1.5 rounded-full bg-zinc-900 shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
                  <div className="p-5 bg-[#F9F9F7] rounded-2xl inline-block border border-zinc-100">
                    <p className="text-xs text-zinc-500 font-light">This treatment is comfortable, safe, and requires <span className="font-bold text-zinc-900">no recovery time</span>.</p>
                  </div>
               </div>
               <div className="aspect-[4/3] rounded-[3rem] overflow-hidden shadow-xl border border-zinc-100">
                  <img src="/vaginismus3.png" alt="Medical Technology" className="w-full h-full object-cover" />
               </div>
            </section>

            {/* TREATMENT OPTIONS: BTX (BOTOX) */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
               <div className="order-2 lg:order-1 aspect-[4/3] rounded-[3rem] overflow-hidden shadow-xl border border-zinc-100">
                  {/* Image showing medical gloved hands with syringe from your screenshot */}
                  <img src="/vaginismus2.webp" alt="BTX Medical Procedure" className="w-full h-full object-cover" />
               </div>
               <div className="order-1 lg:order-2 space-y-10">
                  <div className="space-y-4">
                    <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-500">Option 02</span>
                    <h3 className="text-3xl font-light text-zinc-900">BTX Treatment</h3>
                    <p className="text-zinc-600 font-light leading-relaxed">
                      In selected cases, <span className="text-zinc-900 font-medium">botulinum injections</span> may be recommended to temporarily relax the overactive vaginal muscles responsible for involuntary spasms. This allows for:
                    </p>
                  </div>
                  <ul className="space-y-5">
                    {btxResults.map((item, i) => (
                      <li key={i} className="flex gap-4 text-sm text-zinc-500 font-light leading-relaxed">
                        <CheckCircle2 size={20} className="text-zinc-900 shrink-0 mt-0.5" /> {item}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-6 border-t border-zinc-100">
                    <p className="text-xs text-zinc-400 uppercase tracking-widest font-bold flex items-center gap-2">
                       <Stethoscope size={14} /> Medical Controlled Setting
                    </p>
                    <p className="text-[11px] text-zinc-400 mt-2 font-light">All procedures are performed by experienced clinicians.</p>
                  </div>
               </div>
            </section>

            {/* CLINICAL SUMMARY BOX */}
            <section className="p-10 md:p-16 bg-[#EAEAE6] rounded-[3rem] space-y-8 text-center">
               <div className="max-w-2xl mx-auto space-y-4">
                  <h4 className="text-2xl font-light text-zinc-900 uppercase tracking-tight leading-tight">Comprehensive Functional Recovery</h4>
                  <p className="text-zinc-600 font-light leading-relaxed">
                    Our medical-grade approach ensures that your journey is safe, discreet, and tailored to your specific needs, providing the foundation for improved intimate health and wellbeing.
                  </p>
               </div>
            </section>

            {/* FINAL CTA */}
            <section className="bg-zinc-900 rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl relative overflow-hidden">
              <div className="space-y-3 text-center md:text-left relative z-10">
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-500">Intimate Functional Therapy</p>
                <h2 className="text-3xl md:text-4xl font-light text-white leading-tight">Book a private consultation</h2>
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