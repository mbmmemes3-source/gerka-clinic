"use client"

import { motion } from "framer-motion"
import { ArrowLeft, ShieldCheck, Target, Heart, Activity, Sparkles, ChevronRight, Info, Microscope, Stethoscope, UserCheck, Euro, Clock } from "lucide-react"
import Link from "next/link"
import { ServiceSidebar } from "@/components/ServiceSidebar"

const drynessSymptoms = [
  "Menopausal or perimenopausal changes",
  "Hormonal imbalance",
  "Post-partum tissue changes",
  "Reduced lubrication and comfort"
]

const lichenBenefits = [
  "Support tissue healing and resilience",
  "Improve comfort and skin quality",
  "Complement conventional medical management"
]

const oShotBenefits = [
  "Enhance tissue sensitivity and vascularisation",
  "Support intimate wellbeing",
  "Improve overall vaginal tissue health"
]

const steps = [
  { title: "Sample", desc: "A small blood sample is taken from the patient." },
  { title: "Processing", desc: "Processing the blood using Regen Lab® technology to isolate platelet-rich plasma." },
  { title: "Application", desc: "Precise medical application of PRP into targeted vaginal or vulvar tissues by our gynaecology specialist." }
]

export default function VaginalPRPPage() {
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
            activeService="Vaginal PRP Treatment" 
            categoryTitle="Women's Health" 
          />

          {/* 3. MAIN CONTENT AREA */}
          <div className="lg:col-span-9 space-y-16 md:space-y-24">
            
            {/* HERO SECTION */}
            <section className="space-y-12">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-light text-zinc-900 tracking-tight leading-tight">
                  Vaginal PRP <br />
                  <span className="italic font-serif text-zinc-500 font-light">Regenerative Gynaecology</span>
                </h1>
                <div className="flex flex-wrap gap-6 border-b border-zinc-200 pb-8">
                  <span className="text-xs font-bold text-zinc-900 uppercase tracking-widest flex items-center gap-2">
                    <Euro size={14} className="text-zinc-400" /> Cost: €550 per session
                  </span>
                  <span className="text-xs font-bold text-zinc-900 uppercase tracking-widest flex items-center gap-2">
                    <Clock size={14} className="text-zinc-400" /> Duration: 45-60 min
                  </span>
                  <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest flex items-center gap-2 italic border-l border-zinc-200 pl-4">
                    <ShieldCheck size={14} className="text-zinc-400" /> Regen Lab® System
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                <div className="space-y-6 text-zinc-600 font-light leading-relaxed text-[16px]">
                  <p>
                    Vaginal PRP (Platelet-Rich Plasma) is a regenerative medical treatment that uses the patient’s own blood components to stimulate tissue repair, hydration and cellular regeneration in the vaginal and vulvar area.
                  </p>
                  <p>
                    At Gerka Clinic, Dublin, vaginal PRP treatments are performed using <span className="text-zinc-900 font-medium">Regen Lab® systems</span>, an FDA-approved and CE-marked medical device widely recognised for its safety, sterility and high platelet concentration.
                  </p>
                  <p>
                    Vaginal PRP can be used as a <span className="font-medium text-zinc-800 underline decoration-zinc-200 underline-offset-4">stand-alone treatment</span> or as part of a personalised regenerative gynaecology plan.
                  </p>
                </div>
                <div className="aspect-[6/5] rounded-[3rem] overflow-hidden shadow-2xl border-white border-8">
                  <img src="/prp2.webp" alt="PRP Preparation" className="w-full h-full object-cover" />
                </div>
              </div>
            </section>

            {/* CONDITIONS SECTION */}
            <section className="bg-white rounded-[3rem] p-10 md:p-16 border border-zinc-100 shadow-sm space-y-12">
               <div className="max-w-2xl space-y-4">
                  <h2 className="text-3xl font-light text-zinc-900">What Conditions Can <br/><span className="italic font-serif text-zinc-500">Vaginal PRP Help With?</span></h2>
                  <p className="text-zinc-500 font-light italic">Vaginal PRP may be beneficial for women experiencing:</p>
               </div>
               
               <div className="space-y-12">
                  <div className="space-y-6">
                    <h4 className="text-[13px] font-bold uppercase tracking-[0.2em] text-zinc-900">Vaginal Dryness & Atrophy</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                       {drynessSymptoms.map(item => (
                         <li key={item} className="flex items-center gap-3 text-sm text-zinc-500 font-light">
                            <span className="text-zinc-900">▪</span> {item}
                         </li>
                       ))}
                    </ul>
                    <p className="text-xs text-zinc-400 font-light pt-2">PRP helps improve hydration, tissue thickness and elasticity through collagen stimulation.</p>
                  </div>

                  <div className="space-y-6 border-t border-zinc-50 pt-8">
                    <h4 className="text-[13px] font-bold uppercase tracking-[0.2em] text-zinc-900">Lichen Sclerosus (Adjunctive Treatment)</h4>
                    <p className="text-sm text-zinc-500 font-light max-w-2xl">Vaginal and vulvar PRP may be used as an adjunctive regenerative therapy in selected patients aiming to:</p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                       {lichenBenefits.map(item => (
                         <li key={item} className="flex items-center gap-3 text-sm text-zinc-500 font-light">
                            <span className="text-zinc-900">▪</span> {item}
                         </li>
                       ))}
                    </ul>
                  </div>

                  <div className="space-y-6 border-t border-zinc-50 pt-8">
                    <h4 className="text-[13px] font-bold uppercase tracking-[0.2em] text-zinc-900">Vaginal PRP Shot (O-Shot®-Style Treatment)</h4>
                    <p className="text-sm text-zinc-500 font-light max-w-2xl">PRP can also be administered as a vaginal revitalisation targeting specific areas to:</p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                       {oShotBenefits.map(item => (
                         <li key={item} className="flex items-center gap-3 text-sm text-zinc-500 font-light">
                            <span className="text-zinc-900">▪</span> {item}
                         </li>
                       ))}
                    </ul>
                  </div>
               </div>
            </section>

            {/* HOW IT WORKS SECTION */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
               <div className="space-y-10 order-2 lg:order-1">
                  <div className="space-y-4">
                    <h3 className="text-3xl font-light text-zinc-900">How Does <span className="italic font-serif text-zinc-500 font-light">Vaginal PRP Work?</span></h3>
                    <p className="text-zinc-600 font-light leading-relaxed">
                      The procedure involves a high-precision medical protocol. Platelets release <span className="text-zinc-900 font-medium">growth factors</span> that stimulate:
                    </p>
                  </div>
                  <div className="space-y-6">
                    {steps.map((step, i) => (
                      <div key={i} className="flex gap-6 items-start group">
                        <span className="text-xs font-bold text-zinc-300 border border-zinc-200 w-8 h-8 rounded-full flex items-center justify-center shrink-0 group-hover:bg-zinc-900 group-hover:text-white transition-colors">{i + 1}</span>
                        <div className="space-y-1">
                          <h5 className="text-[11px] font-bold uppercase tracking-widest text-zinc-900">{step.title}</h5>
                          <p className="text-sm text-zinc-500 font-light leading-relaxed">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <ul className="grid grid-cols-1 gap-2 pt-6 border-t border-zinc-100">
                    {["Collagen and elastin production", "Tissue regeneration", "Improved microcirculation"].map(x => (
                      <li key={x} className="flex items-center gap-2 text-xs font-bold text-zinc-400 uppercase tracking-widest">
                        <Activity size={14} className="text-zinc-900" /> {x}
                      </li>
                    ))}
                  </ul>
               </div>
               <div className="order-1 lg:order-2 aspect-square rounded-[3rem] overflow-hidden shadow-xl border border-zinc-100">
                  <img src="/wprp2.webp" alt="Vaginal PRP Medical Professional" className="w-full h-full object-cover" />
               </div>
            </section>

            {/* BENTO GRID: PROTOCOL & SUITABILITY */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-zinc-900 text-white p-12 rounded-[3rem] space-y-8 shadow-xl">
                <div className="space-y-4">
                   <h3 className="text-2xl font-light text-white uppercase tracking-tight leading-tight">Treatment Protocol</h3>
                   <p className="text-sm text-zinc-400 font-light leading-relaxed">
                    Treatment plans are personalised. Some patients benefit from a <span className="text-white font-bold">single session (€550)</span>, while others may require a series of treatments depending on clinical assessment.
                   </p>
                </div>
                <div className="p-6 bg-white/5 rounded-2xl border border-white/10 flex items-center gap-4">
                  <Info className="text-zinc-500" />
                  <p className="text-xs uppercase tracking-widest font-bold">Medical consultation is mandatory</p>
                </div>
              </div>

              <div className="bg-white border border-zinc-100 p-12 rounded-[3rem] space-y-8 shadow-sm">
                <div className="space-y-2">
                   <h3 className="text-2xl font-light text-zinc-900">Is Vaginal PRP Right for You?</h3>
                   <p className="text-xs text-zinc-400 font-bold uppercase tracking-widest">May be suitable if you want:</p>
                </div>
                <ul className="space-y-4">
                   {[
                     "A regenerative, non-hormonal option",
                     "Support for vaginal dryness or atrophy",
                     "Adjunctive therapy for lichen sclerosus",
                     "A vaginal revitalisation or PRP shot"
                   ].map(point => (
                     <li key={point} className="flex items-center gap-4 text-sm text-zinc-600 font-light">
                        <UserCheck size={18} className="text-zinc-300 shrink-0" /> {point}
                     </li>
                   ))}
                </ul>
                <p className="text-xs italic text-zinc-400 pt-4 border-t border-zinc-50">
                  Suitability is determined following a full medical assessment.
                </p>
              </div>
            </section>

            {/* FINAL CTA */}
            <section className="bg-zinc-900 rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl relative overflow-hidden">
              <div className="space-y-3 text-center md:text-left relative z-10">
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-500">Biological Intimate Care</p>
                <h2 className="text-3xl md:text-4xl font-light text-white leading-tight">Book your consultation</h2>
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