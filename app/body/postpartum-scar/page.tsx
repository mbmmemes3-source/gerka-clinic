"use client"

import { motion } from "framer-motion"
import { ArrowLeft, ShieldCheck, Target, Heart, Activity, Sparkles, ChevronRight, Info, Microscope, Stethoscope } from "lucide-react"
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

const approachSteps = [
  { title: "Medical Laser Therapy", desc: "To stimulate collagen regeneration and improve texture." },
  { title: "Radiofrequency", desc: "To enhance tissue elasticity and reduce fibrosis." },
  { title: "Local Injectables", desc: "Treatments to improve tissue quality and hydration." },
  { title: "Scar Debridement", desc: "Techniques when indicated to release fibrotic tissue." },
  { title: "Targeted Protocols", desc: "Designed to reduce pain, tightness, and tension." },
  { title: "Regenerative Strategies", desc: "To support healing and long-term improvement." }
]

const expectedBenefits = [
  "Improved scar appearance",
  "Reduced pain and sensitivity",
  "Increased tissue flexibility",
  "Reduced tension and discomfort",
  "Enhanced overall wellbeing"
]

export default function PostpartumScarPage() {
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
            activeService="Postpartum Scar Treatment" 
            categoryTitle="Body Treatments" 
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
                    Cost: TBC
                  </span>
                  <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest italic">
                    Medically Led Recovery
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
                  <div className="p-6 bg-white border border-zinc-100 rounded-2xl shadow-sm">
                    <p className="text-sm italic text-zinc-500">
                      Our goal is not only to soften and improve the appearance of the scar, but also to restore comfort, mobility, and confidence.
                    </p>
                  </div>
                </div>
                <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-white border-8">
                  {/* Image showing the C-section scar from your screenshot */}
                  <img src="/post.webp" alt="Postpartum Scar Assessment" className="w-full h-full object-cover" />
                </div>
              </div>
            </section>

            {/* WHY IT MATTERS - BENTO BOX */}
            <section className="bg-white rounded-[3rem] p-10 md:p-16 border border-zinc-100 shadow-sm">
               <div className="grid grid-cols-1 lg:grid-cols-[0.6fr_0.4fr] gap-12 items-center">
                  <div className="space-y-8">
                     <h2 className="text-3xl font-light text-zinc-900">Why Scar Treatment <br/><span className="italic font-serif text-zinc-500">Matters</span></h2>
                     <p className="text-zinc-500 font-light leading-relaxed">
                        Untreated postpartum scars can create ongoing physical discomfort and emotional distress. Tension or pain from scar tissue may limit movement, affect posture, or interfere with intimate wellbeing.
                     </p>
                     <p className="text-zinc-500 font-light leading-relaxed">
                        Our treatments aim to improve quality of life by addressing both the visible and invisible effects of postpartum scarring.
                     </p>
                  </div>
                  <div className="bg-zinc-900 text-white p-8 rounded-[2.5rem] space-y-6">
                     <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                        <Heart size={20} className="text-white" />
                     </div>
                     <h4 className="text-lg font-medium">Holistic Recovery</h4>
                     <p className="text-xs text-zinc-400 leading-relaxed uppercase tracking-widest">
                        Focusing on mobility, confidence, and comfort.
                     </p>
                  </div>
               </div>
            </section>

            {/* CONDITIONS & AREAS WE TREAT */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-zinc-50 border border-zinc-100 p-10 rounded-[3rem] space-y-8">
                <h3 className="text-2xl font-light text-zinc-900">Conditions We Treat</h3>
                <ul className="space-y-4">
                  {conditions.map((item) => (
                    <li key={item} className="flex items-start gap-4 text-sm text-zinc-600 font-light leading-relaxed">
                      <span className="text-zinc-900 font-bold mt-0.5">▪</span> {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#EAEAE6]/50 p-10 rounded-[3rem] space-y-8">
                <h3 className="text-2xl font-light text-zinc-900">Treatment Areas</h3>
                <ul className="space-y-6">
                   {[
                     { area: "Lower abdomen", type: "Caesarean scars" },
                     { area: "Perineal area", type: "Episiotomy scars" },
                     { area: "Surrounding connective tissue", type: "Structural support" }
                   ].map((item, i) => (
                     <li key={i} className="space-y-1">
                        <div className="flex items-center gap-3">
                           <Target size={16} className="text-zinc-400" />
                           <span className="text-sm font-bold text-zinc-900 uppercase tracking-widest">{item.area}</span>
                        </div>
                        <p className="text-xs text-zinc-500 pl-7 italic">({item.type})</p>
                     </li>
                   ))}
                </ul>
              </div>
            </section>

            {/* MEDICAL APPROACH SECTION */}
            <section className="space-y-12">
               <div className="max-w-2xl space-y-4">
                  <h2 className="text-3xl font-light text-zinc-900 uppercase tracking-tight">Our Medical Approach</h2>
                  <p className="text-zinc-500 font-light">We use a combination of advanced techniques designed to address both aesthetic and functional concerns:</p>
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {approachSteps.map((step, i) => (
                    <div key={i} className="p-8 bg-white border border-zinc-100 rounded-3xl space-y-4 shadow-sm group hover:border-zinc-300 transition-colors">
                       <Microscope size={20} className="text-zinc-300 group-hover:text-zinc-900 transition-colors" />
                       <h4 className="text-[13px] font-bold uppercase tracking-widest text-zinc-900">{step.title}</h4>
                       <p className="text-xs text-zinc-500 font-light leading-relaxed">{step.desc}</p>
                    </div>
                  ))}
               </div>
            </section>

            {/* BENTO GRID: OVERVIEW & BENEFITS */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Treatment Overview */}
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

              {/* Expected Benefits */}
              <div className="bg-white border border-zinc-100 p-12 rounded-[3rem] space-y-8 shadow-sm">
                <h3 className="text-2xl font-light text-zinc-900">Expected Benefits</h3>
                <ul className="space-y-4">
                   {expectedBenefits.map(benefit => (
                     <li key={benefit} className="flex items-center gap-4 text-sm text-zinc-600 font-light">
                        <Sparkles size={18} className="text-zinc-300 shrink-0" /> {benefit}
                     </li>
                   ))}
                </ul>
              </div>
            </section>

            {/* SAFETY NOTICE */}
            <section className="p-10 md:p-16 bg-[#EAEAE6] rounded-[3rem] space-y-8">
               <div className="flex flex-col md:flex-row gap-12 items-center">
                  <div className="w-full md:w-1/4">
                     <ShieldCheck size={48} strokeWidth={1} className="text-zinc-400" />
                  </div>
                  <div className="w-full md:w-3/4 space-y-6">
                     <h4 className="text-2xl font-light text-zinc-900">Safety & Medical Expertise</h4>
                     <p className="text-zinc-600 font-light leading-relaxed">
                        All postpartum scar treatments at Gerka Clinic are performed by trained medical professionals using clinically approved devices and evidence-based protocols. A consultation is required to assess suitability and design a personalised treatment plan.
                     </p>
                  </div>
               </div>
            </section>

            {/* FINAL CTA */}
            <section className="bg-zinc-900 rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl relative overflow-hidden">
              <div className="space-y-3 text-center md:text-left relative z-10">
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-500">Maternal Wellbeing</p>
                <h2 className="text-3xl md:text-4xl font-light text-white leading-tight">Book your scar assessment</h2>
              </div>
              <Link href="/#contact" className="w-full md:w-auto relative z-10">
                <button className="w-full md:w-auto bg-white text-zinc-900 px-12 py-5 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] hover:scale-105 transition-all active:scale-95 shadow-lg">
                  Check Availability
                </button>
              </Link>
            </section>

          </div>
        </div>
      </div>
    </main>
  )
}