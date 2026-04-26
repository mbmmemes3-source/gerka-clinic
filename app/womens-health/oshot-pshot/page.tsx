"use client"

import { motion } from "framer-motion"
import { 
  ArrowLeft, 
  ShieldCheck, 
  Award, 
  Euro, 
  Lock, 
  CheckCircle2, 
  Sparkles, 
  Activity, 
  Heart,
  ChevronRight,
  Info,
  Microscope,
  Clock
} from "lucide-react"
import Link from "next/link"
import { ServiceSidebar } from "@/components/ServiceSidebar"

const treatmentBenefits = [
  "Improved tissue quality and resilience",
  "Enhanced hydration and cellular regeneration",
  "Improved sensitivity and responsiveness",
  "Increased personal confidence",
  "Long-term support for sexual wellness",
  "Non-surgical approach with minimal downtime"
]

const trustFactors = [
  {
    icon: <Award className="text-zinc-900" size={20} />,
    title: "Certified by the Inventor",
    desc: "First clinic in Ireland certified by Dr Charles Runels (inventor of O-Shot®/P-Shot®)."
  },
  {
    icon: <Microscope className="text-zinc-900" size={20} />,
    title: "Regen Lab® Technology",
    desc: "Exclusive use of advanced PRP systems for optimal concentration and safety."
  },
  {
    icon: <ShieldCheck className="text-zinc-900" size={20} />,
    title: "Internationally Recognised",
    desc: "Protocols aligned with global standards for regenerative intimate medicine."
  }
]

export default function OShotPShotPage() {
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
            activeService="Vaginal PRP Treatment" 
            categoryTitle="Women's Health" 
          />

          {/* 3. MAIN CONTENT AREA */}
          <div className="lg:col-span-9 space-y-16 md:space-y-24">
            
            {/* HERO SECTION */}
            <section className="space-y-12">
              <div className="space-y-8">
                <div className="space-y-6">
                  <motion.div 
                     initial={{ opacity: 0, y: 10 }}
                     animate={{ opacity: 1, y: 0 }}
                     className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 text-white text-[9px] font-bold uppercase tracking-[0.2em]"
                  >
                    <ShieldCheck size={12} /> Ireland's First Certified Provider
                  </motion.div>
                  <h1 className="text-4xl md:text-6xl font-light text-zinc-900 tracking-tight leading-tight">
                    O-Shot®, G-Shot® & P-Shot® <br />
                    <span className="italic font-serif text-zinc-500 font-light text-3xl md:text-5xl">Regenerative Intimate Wellness</span>
                  </h1>
                </div>

                {/* PRICING GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-y border-zinc-200 py-10">
                  <div className="space-y-2">
                    <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">O-Shot®</p>
                    <p className="text-xl font-bold text-zinc-900 flex items-center gap-2">
                      <Euro size={16} className="text-zinc-400" /> €800
                    </p>
                    <p className="text-[10px] text-zinc-500 italic">Single Procedure</p>
                  </div>
                  <div className="space-y-2 border-l border-zinc-200 pl-6">
                    <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">O-Shot® & G-Shot®</p>
                    <p className="text-xl font-bold text-zinc-900 flex items-center gap-2">
                      <Euro size={16} className="text-zinc-400" /> €1,200
                    </p>
                    <p className="text-[10px] text-zinc-500 italic">Combined Protocol</p>
                  </div>
                  <div className="space-y-2 border-l border-zinc-200 pl-6">
                    <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">P-Shot® (Men)</p>
                    <p className="text-xl font-bold text-zinc-900 flex items-center gap-2">
                      <Euro size={16} className="text-zinc-400" /> €950
                    </p>
                    <p className="text-[10px] text-zinc-500 italic">Regen Lab® Certified</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                <div className="space-y-6 text-zinc-600 font-light leading-relaxed text-[17px]">
                  <p>
                    At Gerka Clinic, we offer advanced regenerative intimate treatments designed to support sexual wellness, tissue health and confidence in both women and men.
                  </p>
                  <p>
                    We are proud to be the <span className="text-zinc-900 font-medium italic underline decoration-zinc-200 underline-offset-4">first clinic in Ireland</span> certified to perform these procedures by their inventor, Dr Charles Runels, bringing internationally recognised expertise to our patients in Dublin.
                  </p>
                  <p>
                    By exclusively using <span className="font-medium text-zinc-900">Regen Lab®</span> technology, we ensure the highest concentration of autologous growth factors, ensuring safety, consistency, and premium clinical results.
                  </p>
                </div>
                <div className="aspect-[4/5] rounded-[3.5rem] overflow-hidden shadow-2xl border-white border-8 relative">
                  <img src="/oshot.jpg" alt="Gerka Clinic Regenerative Medicine" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-zinc-900/5" />
                </div>
              </div>
            </section>

            {/* TRUST BAR */}
            <section className="bg-white border border-zinc-100 rounded-[3rem] p-10 md:p-16 shadow-sm">
               <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                  {trustFactors.map((factor, i) => (
                    <div key={i} className="space-y-4">
                       <div className="w-10 h-10 rounded-2xl bg-[#FAF9F6] flex items-center justify-center">
                          {factor.icon}
                       </div>
                       <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-900 leading-tight">{factor.title}</h4>
                       <p className="text-sm text-zinc-500 font-light leading-relaxed">{factor.desc}</p>
                    </div>
                  ))}
               </div>
            </section>

            {/* BENEFITS SECTION */}
            <section className="space-y-12">
               <div className="max-w-2xl space-y-4">
                  <h3 className="text-3xl font-light text-zinc-900 uppercase tracking-tight">Clinical Benefits</h3>
                  <p className="text-zinc-500 font-light">Depending on the individual case, intimate regenerative medicine supports:</p>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                  {treatmentBenefits.map(item => (
                    <div key={item} className="flex items-center gap-4 py-3 border-b border-zinc-100">
                       <Sparkles size={16} className="text-zinc-300" />
                       <span className="text-sm text-zinc-600 font-light uppercase tracking-wide">{item}</span>
                    </div>
                  ))}
               </div>
            </section>

            {/* WHY CHOOSE US: BENTO GRID */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-zinc-900 text-white p-12 rounded-[3.5rem] space-y-8 shadow-xl relative overflow-hidden flex flex-col justify-between">
                <div className="space-y-6 relative z-10">
                  <h3 className="text-2xl md:text-3xl font-light leading-tight">
                    Our <span className="italic font-serif text-zinc-400">Clinical Approach</span>
                  </h3>
                  <ul className="space-y-4">
                    {[
                      "Training direct from the source (Dr Runels)",
                      "Internationally aligned protocol systems",
                      "Highly personalised medical assessment",
                      "Dublin's leading regenerative specialist"
                    ].map(text => (
                      <li key={text} className="flex items-start gap-3 text-sm text-zinc-400 font-light">
                        <CheckCircle2 size={18} className="text-zinc-500 mt-0.5 shrink-0" /> {text}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white/5 blur-3xl rounded-full" />
              </div>

              <div className="bg-[#EAEAE6] p-12 rounded-[3.5rem] space-y-8 flex flex-col justify-center border border-zinc-200/50">
                <div className="space-y-6">
                   <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                      <Lock size={20} className="text-zinc-900" />
                   </div>
                   <h3 className="text-2xl font-light text-zinc-900 tracking-tight">Discretion & Professionalism</h3>
                   <p className="text-sm text-zinc-600 font-light leading-relaxed">
                     Intimate concerns are deeply personal. We provide a non-judgemental and confidential environment where patients feel safe to discuss and receive advanced regenerative care.
                   </p>
                </div>
                <div className="pt-6 border-t border-zinc-300 flex items-center gap-3">
                   <ShieldCheck size={16} className="text-zinc-400" />
                   <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Medically Responsible Care</span>
                </div>
              </div>
            </section>

            {/* FINAL CTA */}
            <section className="bg-zinc-900 rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl relative overflow-hidden">
              <div className="space-y-3 text-center md:text-left relative z-10 max-w-xl">
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-500">Expert Certification</p>
                <h2 className="text-3xl md:text-4xl font-light text-white leading-tight">Book a private consultation</h2>
                <p className="text-sm text-zinc-400 font-light">Discover how regenerative medicine can support your intimate wellbeing.</p>
              </div>
              <Link href="/#contact" className="w-full md:w-auto relative z-10">
                <button className="w-full md:w-auto bg-white text-zinc-900 px-12 py-5 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] hover:scale-105 transition-all active:scale-95 shadow-lg">
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