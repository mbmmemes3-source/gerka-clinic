"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Clock, Euro, CheckCircle2, ShieldCheck, Zap, Target, Info, ChevronRight, HeartPulse, UserCheck, Activity, GraduationCap } from "lucide-react"
import Link from "next/link"
import { ServiceSidebar } from "@/components/ServiceSidebar"

const conditions = [
  "Stress urinary incontinence",
  "Urge urinary incontinence",
  "Mixed urinary incontinence",
  "Pelvic floor weakness after childbirth",
  "Menopausal pelvic floor changes",
  "Mild sexual dysfunction related to pelvic floor strength"
]

const maleBenefits = [
  {
    title: "Erectile performance optimisation",
    description: "Enhancing blood flow and neuromuscular control essential for sexual health.",
    icon: <Activity size={20} className="text-zinc-400" />
  },
  {
    title: "Post-prostate rehabilitation",
    description: "Accelerating recovery and restoring continence following prostate procedures.",
    icon: <HeartPulse size={20} className="text-zinc-400" />
  },
  {
    title: "Male pelvic floor training",
    description: "Deep core strengthening to improve bladder control and pelvic stability.",
    icon: <Target size={20} className="text-zinc-400" />
  }
]

const mechanismBenefits = [
  "Strengthen pelvic floor muscles",
  "Improve neuromuscular control",
  "Enhance bladder support",
  "Improve overall pelvic stability"
]

const suitabilityPoints = [
  "A non-surgical solution for urinary incontinence",
  "Pelvic floor strengthening without exercises",
  "Postpartum or menopausal pelvic floor support",
  "A discreet option with no downtime"
]

export default function EmsellaServicePage() {
  return (
    <main className="bg-[#FAF9F6] min-h-screen pb-20">
      
      {/* 1. TOP NAVIGATION */}
      <div className="pt-32 pb-8 px-6 md:px-10 max-w-7xl mx-auto">
        <Link href="/" className="group inline-flex items-center gap-2 text-zinc-400 hover:text-zinc-900 transition-colors">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Back to health services</span>
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 lg:gap-20">
          
          <ServiceSidebar 
            activeService="Emsella® Chair Pelvic Floor Treatment" 
            categoryTitle="Women's Health" 
          />

          <div className="lg:col-span-9 space-y-16 md:space-y-24">
            
            {/* HERO SECTION */}
            <section className="space-y-12">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-light text-zinc-900 tracking-tight leading-tight">
                  Emsella® Chair – <br />
                  <span className="italic font-serif text-zinc-500 font-light">Advanced Pelvic Floor Therapy</span>
                </h1>
                <div className="flex flex-wrap gap-6 border-b border-zinc-200 pb-8">
                  <span className="text-xs font-bold text-zinc-900 uppercase tracking-widest flex items-center gap-2">
                    <Euro size={14} className="text-zinc-400" /> €90 per session
                  </span>
                  <span className="text-xs font-bold text-zinc-900 uppercase tracking-widest flex items-center gap-2">
                    <Euro size={14} className="text-zinc-400" /> Package of 6: €420
                  </span>
                  <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest flex items-center gap-2 italic">
                    Extra session: €60
                  </span>
                  <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest italic border-l border-zinc-200 pl-4">
                    Dublin Clinic
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                <div className="space-y-6 text-zinc-600 font-light leading-relaxed text-[16px]">
                  <p>
                    The Emsella® Chair is a non-invasive, chair-based treatment designed to strengthen the pelvic floor muscles using high-intensity focused electromagnetic technology (HIFEM®).
                  </p>
                  <p>
                    At Gerka Clinic, Dublin, Emsella® is offered as part of our specialised pelvic floor and regenerative women’s health services, providing an effective solution for patients who prefer a non-surgical and <span className="text-zinc-900 font-medium underline decoration-zinc-200 underline-offset-4">fully clothed treatment</span>.
                  </p>
                  <p>
                    Emsella® is suitable for <span className="font-medium text-zinc-800">both women and men</span> and is commonly used to support conditions related to pelvic floor weakness.
                  </p>
                </div>
                <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-white border-8">
                  <img src="/emsella.jpeg" alt="Emsella Chair Consultation" className="w-full h-full object-cover" />
                </div>
              </div>
            </section>

            {/* CONDITIONS SECTION */}
            <section className="bg-white rounded-[3rem] p-10 md:p-16 border border-zinc-100 shadow-sm space-y-12">
               <div className="max-w-2xl space-y-4">
                  <h2 className="text-3xl font-light text-zinc-900">What Conditions Can <br/><span className="italic font-serif text-zinc-500">Emsella® Help With?</span></h2>
                  <p className="text-zinc-500 font-light">Emsella® may be beneficial for patients experiencing:</p>
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                  {conditions.map(item => (
                    <div key={item} className="flex items-center gap-4 py-2 border-b border-zinc-50">
                       <Target size={16} className="text-zinc-300" />
                       <span className="text-sm text-zinc-600 font-light">{item}</span>
                    </div>
                  ))}
               </div>
            </section>

            {/* --- EMSELLA FOR MEN --- */}
            <section className="bg-[#1A1A1A] text-white rounded-[3.5rem] p-10 md:p-16 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-zinc-800 rounded-full blur-[100px] opacity-50" />
               
               <div className="relative z-10 space-y-12">
                  <div className="space-y-4 max-w-2xl">
                    <h2 className="text-3xl md:text-4xl font-light tracking-tight">
                      Emsella® for Men – <br/>
                      <span className="italic font-serif text-zinc-400">Targeted Male Wellness</span>
                    </h2>
                    <p className="text-zinc-400 font-light leading-relaxed">
                      Beyond incontinence, the Emsella® Chair is a revolutionary tool for male intimate health and core stability. 
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {maleBenefits.map((benefit, i) => (
                      <div key={i} className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700 p-8 rounded-[2rem] space-y-4 hover:border-zinc-500 transition-colors group">
                        <div className="w-12 h-12 rounded-2xl bg-zinc-700 flex items-center justify-center group-hover:bg-zinc-100 transition-colors group-hover:text-zinc-900">
                          {benefit.icon}
                        </div>
                        <h4 className="text-lg font-medium leading-snug">{benefit.title}</h4>
                        <p className="text-xs text-zinc-400 font-light leading-relaxed">{benefit.description}</p>
                      </div>
                    ))}
                  </div>
               </div>
            </section>

            {/* HOW IT WORKS SECTION */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
               <div className="space-y-8 order-2 lg:order-1">
                  <div className="space-y-4">
                    <h3 className="text-3xl font-light text-zinc-900">How Does the <span className="italic font-serif text-zinc-500">Emsella® Chair Work?</span></h3>
                    <p className="text-zinc-600 font-light leading-relaxed">
                      Emsella® uses <span className="text-zinc-900 font-medium">HIFEM® technology</span> to induce supramaximal pelvic floor muscle contractions that cannot be achieved through voluntary exercises alone. Each session delivers thousands of deep muscle contractions, helping to:
                    </p>
                  </div>
                  <ul className="space-y-4">
                    {mechanismBenefits.map((item, i) => (
                      <li key={i} className="flex items-center gap-4 text-sm text-zinc-500 font-light">
                        <div className="w-1.5 h-1.5 rounded-full bg-zinc-900 shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
                  <div className="p-6 bg-zinc-900 text-white rounded-2xl space-y-2">
                    <p className="text-xs uppercase tracking-widest font-bold text-zinc-400">Treatment Detail</p>
                    <p className="text-sm font-light leading-relaxed">The treatment is performed while the patient sits comfortably on the chair, <span className="italic">fully clothed</span>, with no internal devices.</p>
                  </div>
               </div>
               <div className="order-1 lg:order-2 aspect-[4/3] rounded-[3rem] overflow-hidden shadow-xl border border-zinc-100">
                  <img src="/emsella2.webp" alt="Emsella HIFEM Technology" className="w-full h-full object-cover" />
               </div>
            </section>

            {/* BENTO GRID: PROTOCOL & SUITABILITY */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[#EAEAE6] p-12 rounded-[3rem] space-y-8">
                <div className="space-y-4">
                   <h3 className="text-2xl font-light text-zinc-900 uppercase tracking-tight">Treatment Protocol</h3>
                   <p className="text-sm text-zinc-600 font-light leading-relaxed">
                    A standard course usually consists of <span className="font-bold text-zinc-900">6 sessions (€420)</span>, performed twice per week over 3 weeks. Extra sessions after the initial course are available at <span className="font-bold text-zinc-900">€60 each</span>.
                   </p>
                </div>
                <div className="grid grid-cols-2 gap-4 border-t border-zinc-300 pt-8">
                   <div className="space-y-1">
                      <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Session Length</p>
                      <p className="text-sm font-medium text-zinc-800">Approx. 28 mins</p>
                   </div>
                   <div className="space-y-1 text-right">
                      <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Package Pricing</p>
                      <p className="text-sm font-medium text-zinc-800">Available</p>
                   </div>
                </div>
              </div>

              <div className="bg-white border border-zinc-100 p-12 rounded-[3rem] space-y-8 shadow-sm">
                <div className="space-y-2">
                   <h3 className="text-2xl font-light text-zinc-900">Is Emsella® Right for You?</h3>
                   <p className="text-xs text-zinc-400 font-bold uppercase tracking-widest">Emsella® may be suitable if you want:</p>
                </div>
                <ul className="space-y-4">
                   {suitabilityPoints.map(point => (
                     <li key={point} className="flex items-center gap-4 text-sm text-zinc-600 font-light">
                        <UserCheck size={18} className="text-zinc-300 shrink-0" /> {point}
                     </li>
                   ))}
                </ul>
                <p className="text-xs italic text-zinc-400 pt-4 border-t border-zinc-50">
                  Suitability is confirmed following a medical assessment.
                </p>
              </div>
            </section>

            {/* FINAL CTA */}
            <section className="bg-zinc-900 rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl relative overflow-hidden">
              <div className="space-y-3 text-center md:text-left relative z-10">
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-500">Restore Your Confidence</p>
                <h2 className="text-3xl md:text-4xl font-light text-white leading-tight">Book a consultation</h2>
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