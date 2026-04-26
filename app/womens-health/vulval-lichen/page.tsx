"use client"

import { motion } from "framer-motion"
import { 
  ArrowLeft, 
  Euro, 
  ShieldCheck, 
  Sparkles, 
  Microscope, 
  Target, 
  Info, 
  CheckCircle2, 
  Waves, 
  Zap, 
  Stethoscope,
  HeartPulse
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { ServiceSidebar } from "@/components/ServiceSidebar"

const benefits = [
  "Relief from itching and irritation",
  "Improved hydration and skin quality",
  "Enhanced tissue regeneration",
  "Support in long-term condition management",
  "Improved comfort and confidence"
]

const regenerativeItems = [
  {
    title: "PRP (Platelet-Rich Plasma)",
    desc: "A highly effective treatment using your own growth factors to stimulate healing, improve hydration and enhance tissue regeneration.",
    icon: <HeartPulse size={18} className="text-zinc-400" />
  },
  {
    title: "Cellular Matrix (Advanced Biostimulation)",
    desc: "A next-generation treatment combining hyaluronic acid with regenerative components to restore elasticity and support long-term tissue health.",
    icon: <Sparkles size={18} className="text-zinc-400" />
  }
]

export default function VulvalLichenServicePage() {
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
          
          {/* 2. SIDEBAR */}
          <ServiceSidebar 
            activeService="Vulval Lichen Specialist Care" 
            categoryTitle="Women's Health" 
          />

          {/* 3. MAIN CONTENT AREA */}
          <div className="lg:col-span-9 space-y-16 md:space-y-24">
            
            {/* HERO SECTION */}
            <section className="space-y-12">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-light text-zinc-900 tracking-tight leading-tight uppercase">
                  Vulval Lichen & <br />
                  <span className="italic font-serif text-zinc-500 font-light lowercase">Specialist Care</span>
                </h1>
                <div className="flex flex-wrap gap-4 border-b border-zinc-200 pb-8">
                  <span className="text-xs font-bold text-zinc-900 uppercase tracking-widest flex items-center gap-2">
                    <Euro size={14} className="text-zinc-400" /> Cost: Consultation Required
                  </span>
                  <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest italic">
                    Medical & Regenerative Specialist Care
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                <div className="space-y-6 text-zinc-600 font-light leading-relaxed text-[16px]">
                  <p>
                    Advanced diagnosis and personalised treatment for lichen sclerosus and chronic vulval conditions. We provide a comfortable environment for patients seeking both medical resolution and regenerative restoration.
                  </p>
                  <p>
                    At Gerka Clinic, we specialise in combining evidence-based medical care with advanced regenerative therapies to restore comfort, improve skin quality, and support long-term intimate wellbeing.
                  </p>
                  <p className="text-sm border-l-2 border-zinc-200 pl-4 py-1 italic">
                    Early diagnosis and appropriate management are essential to prevent progression and maintain vulval health.
                  </p>
                </div>
                <div className="aspect-[5/3] rounded-[3rem] overflow-hidden shadow-2xl border-white border-8 relative">
                  <Image 
                    src="/vulvar.jpg" 
                    alt="Vulval Lichen Specialist Care" 
                    fill 
                    className="object-cover"
                  />
                </div>
              </div>
            </section>

            {/* ABOUT THE CONDITION SECTION */}
            <section className="bg-white rounded-[3rem] p-10 md:p-16 border border-zinc-100 shadow-sm space-y-10">
               <div className="max-w-3xl space-y-6">
                  <h2 className="text-3xl font-light text-zinc-900 uppercase tracking-tight">Understanding <span className="italic font-serif text-zinc-500 font-light">Vulval Lichen</span></h2>
                  <div className="space-y-4 text-zinc-500 font-light leading-relaxed">
                    <p>
                      Vulval lichen (lichen sclerosus) is a chronic inflammatory condition that may cause itching, irritation, dryness, and visible skin changes.
                    </p>
                    <p>
                      Our clinical focus is to address the underlying inflammation while simultaneously repairing the skin barrier, reducing symptoms like tissue fragility and discomfort.
                    </p>
                  </div>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-zinc-50">
                  <div className="flex gap-4">
                     <ShieldCheck size={24} className="text-zinc-300 shrink-0" />
                     <p className="text-sm text-zinc-600 font-light">Stabilising chronic inflammatory progression.</p>
                  </div>
                  <div className="flex gap-4">
                     <Stethoscope size={24} className="text-zinc-300 shrink-0" />
                     <p className="text-sm text-zinc-600 font-light">Restoring skin integrity and daily comfort.</p>
                  </div>
               </div>
            </section>

            {/* DIAGNOSIS SECTION */}
            <section className="space-y-12">
               <div className="flex flex-col md:flex-row gap-10 items-start">
                  <div className="space-y-6 flex-1">
                    <h3 className="text-3xl font-light text-zinc-900">Clinical <span className="italic font-serif text-zinc-500">Diagnosis</span></h3>
                    <p className="text-zinc-600 font-light leading-relaxed">
                      Your assessment includes a specialist clinical examination and, when indicated, a vulval biopsy performed under local anaesthesia to confirm the diagnosis and guide the precision of your treatment.
                    </p>
                  </div>
                  <div className="p-8 bg-zinc-900 text-white rounded-[2.5rem] flex flex-col gap-4 min-w-[300px]">
                     <Microscope size={28} className="text-zinc-500" />
                     <p className="text-xs font-bold uppercase tracking-[0.2em]">Diagnostic Precision</p>
                     <p className="text-sm text-zinc-400 font-light">Specialist biopsy & clinical evaluation to identify condition stage.</p>
                  </div>
               </div>
            </section>

            {/* REGENERATIVE THERAPIES - KEY FOCUS */}
            <section className="space-y-12">
               <div className="space-y-4">
                  <h3 className="text-3xl font-light text-zinc-900 uppercase tracking-tight text-center">Advanced Regenerative Therapies</h3>
                  <p className="text-zinc-500 font-light text-center mx-auto max-w-2xl italic">At Gerka Clinic, regenerative medicine plays a central role in supporting tissue repair and improving vulval skin quality.</p>
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {regenerativeItems.map((item, i) => (
                    <div key={i} className="p-10 bg-white border border-zinc-100 rounded-[3rem] space-y-4 shadow-sm hover:border-zinc-300 transition-all duration-500 group">
                       <div className="p-3 bg-zinc-50 w-fit rounded-2xl group-hover:scale-110 transition-transform">
                          {item.icon}
                       </div>
                       <h5 className="text-[14px] font-bold uppercase tracking-widest text-zinc-900">{item.title}</h5>
                       <p className="text-sm text-zinc-500 font-light leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
               </div>
               
               <div className="bg-zinc-100/50 p-6 rounded-2xl border border-dashed border-zinc-300 text-center">
                  <p className="text-xs text-zinc-500 font-medium uppercase tracking-widest">
                    Particularly beneficial for: Dryness • Irritation • Tissue Fragility
                  </p>
               </div>
            </section>

            {/* TREATMENT APPROACH & ADJUNCT TECH */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Medical Management Card */}
              <div className="bg-zinc-900 text-white p-12 rounded-[3rem] space-y-8 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                   <Target size={120} />
                </div>
                <h3 className="text-2xl font-light">Medical Management</h3>
                <p className="text-zinc-400 font-light text-sm leading-relaxed">
                  Evidence-based pharmacological therapy to control inflammation and stabilise the condition. This foundational step is crucial for long-term health.
                </p>
                <div className="pt-4">
                  <div className="inline-flex items-center gap-2 px-4 py-2 border border-zinc-700 rounded-full text-[10px] font-bold uppercase tracking-widest">
                     Stabilization Phase
                  </div>
                </div>
              </div>

              {/* Adjunct Technologies Card */}
              <div className="bg-[#EAEAE6] p-12 rounded-[3rem] space-y-8">
                <h3 className="text-2xl font-light text-zinc-900 uppercase tracking-tight">Adjunct Technologies</h3>
                <div className="space-y-6">
                   <div className="space-y-2">
                      <div className="flex items-center gap-3">
                         <Waves size={16} className="text-zinc-900" />
                         <span className="text-sm font-bold text-zinc-800 uppercase tracking-wider">Laser Therapy</span>
                      </div>
                      <p className="text-xs text-zinc-500 pl-7">Supports hydration, elasticity and overall vulval comfort.</p>
                   </div>
                   <div className="space-y-2">
                      <div className="flex items-center gap-3">
                         <Zap size={16} className="text-zinc-900" />
                         <span className="text-sm font-bold text-zinc-800 uppercase tracking-wider">Shockwave Therapy</span>
                      </div>
                      <p className="text-xs text-zinc-500 pl-7">Enhances microcirculation and supports tissue regeneration.</p>
                   </div>
                </div>
              </div>
            </section>

            {/* BENEFITS */}
            <section className="space-y-10">
               <h3 className="text-2xl font-light text-zinc-900 text-center">Expected <span className="italic font-serif text-zinc-500">Benefits</span></h3>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {benefits.map(benefit => (
                    <div key={benefit} className="flex gap-4 items-center p-6 bg-white border border-zinc-100 rounded-2xl shadow-sm">
                       <CheckCircle2 size={18} className="text-zinc-300 shrink-0" /> 
                       <span className="text-xs text-zinc-600 font-bold uppercase tracking-wider">{benefit}</span>
                    </div>
                  ))}
               </div>
            </section>

            {/* SAFETY BOX */}
            <section className="bg-[#EAEAE6]/50 p-10 rounded-[3rem] space-y-8 flex flex-col justify-center border border-zinc-200/50">
               <div className="space-y-4 text-center max-w-2xl mx-auto">
                 <h3 className="text-2xl font-light text-zinc-900">Safety & Long-Term Care</h3>
                 <p className="text-[15px] text-zinc-500 font-light leading-relaxed">
                   At Gerka Clinic, our clinical examinations and biopsy procedures are conducted with the highest medical standards to ensure patient comfort and diagnostic accuracy.
                 </p>
                 <div className="inline-flex items-center gap-4 p-4 bg-white rounded-2xl border border-zinc-200 mt-4">
                    <Info size={18} className="text-zinc-400" />
                    <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Specialist consultation is mandatory for this service</p>
                 </div>
               </div>
            </section>

            {/* FINAL CTA */}
            <section className="bg-zinc-900 rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl relative overflow-hidden">
              <div className="space-y-3 text-center md:text-left relative z-10">
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-500">Clinical Specialist Care</p>
                <h2 className="text-3xl md:text-4xl font-light text-white leading-tight">Book your specialist assessment</h2>
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