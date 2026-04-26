"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Clock, Euro, CheckCircle2, ShieldCheck, HeartPulse, Target, Sparkles, ChevronRight, Info, Microscope } from "lucide-react"
import Link from "next/link"
import { ServiceSidebar } from "@/components/ServiceSidebar"

const conditions = [
  "Caesarean section scars",
  "Episiotomy scars",
  "Postpartum scar pain or tenderness",
  "Scar tightness and pulling sensation",
  "Thickened or fibrotic scar tissue",
  "Reduced tissue flexibility affecting daily life"
]

const medicalApproach = [
  { title: "Medical laser therapy", desc: "To stimulate collagen regeneration and improve texture." },
  { title: "Radiofrequency", desc: "To enhance tissue elasticity and reduce fibrosis." },
  { title: "Local injectable treatments", desc: "To improve tissue quality and hydration." },
  { title: "Scar debridement techniques", desc: "When indicated to release fibrotic tissue." },
  { title: "Targeted protocols", desc: "To reduce pain, tightness, and tension." },
  { title: "Regenerative strategies", desc: "To support healing and long-term improvement." }
]

const expectedBenefits = [
  "Improved scar appearance",
  "Reduced pain and sensitivity",
  "Increased tissue flexibility",
  "Reduced tension and discomfort",
  "Enhanced overall wellbeing"
]

export default function PostpartumScarServicePage() {
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
            activeService="Postpartum Scar Treatment" 
            categoryTitle="Women's Health" 
          />

          {/* 3. MAIN CONTENT AREA */}
          <div className="lg:col-span-9 space-y-16 md:space-y-24">
            
            {/* HERO SECTION */}
            <section className="space-y-12">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-light text-zinc-900 tracking-tight leading-tight">
                  Postpartum <br />
                  <span className="italic font-serif text-zinc-500 font-light">Scar Treatment</span>
                </h1>
                <div className="flex flex-wrap gap-4 border-b border-zinc-200 pb-8">
                  <span className="text-xs font-bold text-zinc-900 uppercase tracking-widest flex items-center gap-2">
                    <Euro size={14} className="text-zinc-400" /> Cost: TBC
                  </span>
                  <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest italic">
                    Medical & Functional Recovery
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                <div className="space-y-6 text-zinc-600 font-light leading-relaxed text-[16px]">
                  <p>
                    Postpartum scars, particularly those resulting from caesarean section or episiotomy, can affect more than appearance. They may cause discomfort, tightness, altered sensation, or pain that interferes with daily activities, intimacy, and overall wellbeing.
                  </p>
                  <p>
                    At Gerka Clinic, we offer a comprehensive, medically led approach to postpartum scar treatment, combining advanced technologies and personalised protocols to improve scar quality, reduce symptoms, and restore tissue flexibility.
                  </p>
                  <p className="text-sm border-l-2 border-zinc-200 pl-4 py-1 italic">
                    Each treatment plan is tailored following a detailed assessment of the scar, surrounding tissue, and individual symptoms.
                  </p>
                </div>
                <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-white border-8">
                  {/* Image showing the C-section scar from your screenshot */}
                  <img src="/post.webp" alt="Postpartum Scar Treatment" className="w-full h-full object-cover" />
                </div>
              </div>
            </section>

            {/* WHY SCAR TREATMENT MATTERS SECTION */}
            <section className="bg-white rounded-[3rem] p-10 md:p-16 border border-zinc-100 shadow-sm space-y-10">
               <div className="max-w-3xl space-y-6">
                  <h2 className="text-3xl font-light text-zinc-900">Why Scar Treatment <span className="italic font-serif text-zinc-500">Matters</span></h2>
                  <div className="space-y-4 text-zinc-500 font-light leading-relaxed">
                    <p>
                      Untreated postpartum scars can create ongoing physical discomfort and emotional distress. Tension or pain from scar tissue may limit movement, affect posture, or interfere with intimate wellbeing.
                    </p>
                    <p>
                      Our treatments aim to improve quality of life by addressing both the visible and invisible effects of postpartum scarring. Our goal is not only to soften and improve the appearance of the scar, but also to restore comfort, mobility, and confidence.
                    </p>
                  </div>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-zinc-50">
                  <div className="flex gap-4">
                     <HeartPulse size={24} className="text-zinc-300 shrink-0" />
                     <p className="text-sm text-zinc-600 font-light">Addressing physical discomfort and tissue tension.</p>
                  </div>
                  <div className="flex gap-4">
                     <ShieldCheck size={24} className="text-zinc-300 shrink-0" />
                     <p className="text-sm text-zinc-600 font-light">Restoring emotional confidence and mobility.</p>
                  </div>
               </div>
            </section>

            {/* CONDITIONS WE TREAT LIST */}
            <section className="space-y-12">
               <h3 className="text-3xl font-light text-zinc-900">Conditions We <span className="italic font-serif text-zinc-500">Treat</span></h3>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                  {conditions.map(item => (
                    <div key={item} className="flex items-center gap-4 py-2 border-b border-zinc-100">
                       <Target size={16} className="text-zinc-300" />
                       <span className="text-sm text-zinc-600 font-light">{item}</span>
                    </div>
                  ))}
               </div>
            </section>

            {/* MEDICAL APPROACH BENTO GRID */}
            <section className="space-y-12">
               <div className="space-y-4">
                  <h3 className="text-3xl font-light text-zinc-900 uppercase tracking-tight">Our Medical Approach</h3>
                  <p className="text-zinc-500 font-light max-w-2xl">We treat postpartum scars using a combination of advanced techniques designed to address both aesthetic and functional concerns:</p>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {medicalApproach.map((item, i) => (
                    <div key={i} className="p-8 bg-white border border-zinc-100 rounded-3xl space-y-3 shadow-sm hover:border-zinc-300 transition-colors">
                       <Microscope size={18} className="text-zinc-400" />
                       <h5 className="text-[13px] font-bold uppercase tracking-widest text-zinc-900">{item.title}</h5>
                       <p className="text-xs text-zinc-500 font-light leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
               </div>
            </section>

            {/* TREATMENT OVERVIEW & AREAS TREATED */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Overview Card */}
              <div className="bg-zinc-900 text-white p-12 rounded-[3rem] space-y-8 shadow-xl">
                <h3 className="text-2xl font-light">Treatment Overview</h3>
                <ul className="space-y-5">
                  {[
                    "Personalised medical assessment",
                    "Combination treatment protocols",
                    "Non-surgical approach",
                    "Progressive improvement over sessions",
                    "Minimal downtime"
                  ].map((text) => (
                    <li key={text} className="flex items-center gap-4 text-sm text-zinc-400 font-light">
                      <div className="w-1.5 h-1.5 rounded-full bg-white shrink-0" /> {text}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Treatment Areas Card */}
              <div className="bg-[#EAEAE6] p-12 rounded-[3rem] space-y-8">
                <h3 className="text-2xl font-light text-zinc-900 uppercase tracking-tight">Treatment Areas</h3>
                <ul className="space-y-5">
                   {[
                     { label: "Lower abdomen", context: "caesarean scars" },
                     { label: "Perineal area", context: "episiotomy scars" },
                     { label: "Surrounding connective tissue", context: "" }
                   ].map((item, i) => (
                     <li key={i} className="space-y-1">
                        <div className="flex items-center gap-3">
                           <span className="text-zinc-900 font-bold">▪</span>
                           <span className="text-sm font-bold text-zinc-800 uppercase tracking-wider">{item.label}</span>
                        </div>
                        {item.context && <p className="text-xs text-zinc-500 pl-6 italic">({item.context})</p>}
                     </li>
                   ))}
                </ul>
              </div>
            </section>

            {/* EXPECTED BENEFITS & SAFETY */}
            <section className="grid grid-cols-1 lg:grid-cols-[0.45fr_0.55fr] gap-12">
               {/* Benefits */}
               <div className="space-y-8 p-10 bg-white border border-zinc-100 rounded-[3rem] shadow-sm">
                  <h3 className="text-2xl font-light text-zinc-900">Expected Benefits</h3>
                  <ul className="space-y-4">
                    {expectedBenefits.map(benefit => (
                      <li key={benefit} className="flex gap-4 items-center text-sm text-zinc-500 font-light">
                        <Sparkles size={16} className="text-zinc-300 shrink-0" /> {benefit}
                      </li>
                    ))}
                  </ul>
               </div>

               {/* Safety Box */}
               <div className="bg-[#EAEAE6]/50 p-10 rounded-[3rem] space-y-8 flex flex-col justify-center">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-light text-zinc-900">Safety & Medical Expertise</h3>
                    <p className="text-[15px] text-zinc-500 font-light leading-relaxed">
                      All postpartum scar treatments at Gerka Clinic are performed by trained medical professionals using clinically approved devices and evidence-based protocols.
                    </p>
                  </div>
                  <div className="p-5 bg-white rounded-2xl border border-zinc-200 flex items-center gap-4">
                     <Info className="text-zinc-400" />
                     <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">A consultation is required to assess suitability</p>
                  </div>
               </div>
            </section>

            {/* FINAL CTA */}
            <section className="bg-zinc-900 rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl relative overflow-hidden">
              <div className="space-y-3 text-center md:text-left relative z-10">
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-500">Maternal Clinical Care</p>
                <h2 className="text-3xl md:text-4xl font-light text-white leading-tight">Book your scar assessment</h2>
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