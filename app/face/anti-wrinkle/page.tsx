"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Clock, Euro, CheckCircle2, Target, HeartPulse, ShieldCheck, ChevronRight, Calendar } from "lucide-react"
import Link from "next/link"
import { ServiceSidebar } from "@/components/ServiceSidebar"

const treatmentAreas = [
  {
    category: "Upper Face",
    items: ["Forehead lines", "Frown lines (glabella)", "Crow's feet"]
  },
  {
    category: "Lower Face",
    items: ["Downturned corners of the mouth", "Dimpled chin (mentalis)", "Gummy smile", "Masseter slimming / jawline contouring", "Lip flip"]
  },
  {
    category: "Neck & Lower Facial Contouring",
    items: ["Platysmal bands (Nefertiti lift)", "Neck smoothing"]
  }
]

const functionalTreatments = [
  "Migraine management (reducing frequency and intensity)",
  "Hyperhidrosis (excessive sweating in underarms, hands, or feet)",
  "Teeth grinding / bruxism relief (via masseter relaxation)"
]

export default function AntiWrinkleServicePage() {
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
            activeService="Anti-Wrinkle Treatments" 
            categoryTitle="Face Treatments" 
          />

          {/* 3. MAIN CONTENT */}
          <div className="lg:col-span-9 space-y-16 md:space-y-24">
            
            {/* HERO SECTION */}
            <section className="space-y-12">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-light text-zinc-900 tracking-tight leading-tight">
                  Anti-Wrinkle <br />
                  <span className="italic font-serif text-zinc-500 font-light">Neuromodulator Treatments</span>
                </h1>
                <div className="flex flex-wrap gap-4 border-b border-zinc-200 pb-8">
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-bold text-zinc-900 uppercase tracking-widest flex items-center gap-2">
                        <Euro size={14} className="text-zinc-400" /> 180€ (1 area) | 280€ (2 areas) | 320€ (3 areas)
                    </span>
                    <span className="text-[10px] text-zinc-400 uppercase tracking-widest pl-6">Other areas to be confirmed</span>
                  </div>
                  <span className="text-xs font-bold text-zinc-900 uppercase tracking-widest flex items-center gap-2">
                    <Clock size={14} className="text-zinc-400" /> Duration: 1 hour
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                <div className="space-y-6 text-zinc-600 font-light leading-relaxed text-[16px]">
                  <h3 className="text-xl font-medium text-zinc-900">Anti-Wrinkle Neuromodulator Treatments at Gerka Clinic</h3>
                  <p>
                    At Gerka Clinic, we provide advanced anti-wrinkle treatments using approved neuromodulators to soften lines, rebalance facial expression, and enhance natural harmony. Neuromodulators temporarily relax selected muscles to reduce movement-related wrinkles and address a range of functional concerns.
                  </p>
                  <p>
                    Each treatment begins with a detailed consultation to assess your facial anatomy, understand your aesthetic goals, and tailor a precise plan that supports natural, refreshed results. Our medical practitioners are trained in safe, evidence-based injection techniques.
                  </p>
                  <p className="text-sm italic border-l-2 border-zinc-200 pl-4 py-1">
                    Typical treatment time is 15–30 minutes with minimal downtime. Initial results appear within a few days, with full effect developing in one to two weeks.
                  </p>
                </div>
                <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
                    {/* Using the image of practitioner applying treatment to woman's cheek from screenshot */}
                  <img src="/skinvive1.webp" alt="Neuromodulator Clinical Application" className="w-full h-full object-cover" />
                </div>
              </div>
            </section>

            {/* DIAGRAM VISUAL BREAK */}
            <section className="relative aspect-[21/9] rounded-[3rem] overflow-hidden shadow-sm border border-zinc-100">
               <img src="/wrinkle.webp" alt="Facial Contouring Mapping" className="w-full h-full object-cover" />
               <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/10 to-transparent" />
            </section>

            {/* AREAS WE TREAT SECTION */}
            <section className="bg-white rounded-[3rem] p-10 md:p-16 border border-zinc-100 shadow-sm">
               <div className="space-y-12">
                  <h2 className="text-3xl font-light text-zinc-900">Areas We <span className="italic font-serif text-zinc-500 font-light">Treat</span></h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {treatmentAreas.map((area) => (
                      <div key={area.category} className="space-y-5">
                         <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-900 flex items-center gap-2">
                            <Target size={16} className="text-zinc-400" /> {area.category}
                         </h4>
                         <ul className="space-y-3">
                            {area.items.map(item => (
                               <li key={item} className="text-sm text-zinc-500 flex gap-3 font-light">
                                  <span className="text-zinc-900">▪</span> {item}
                               </li>
                            ))}
                         </ul>
                      </div>
                    ))}

                    {/* Medical & Functional Section */}
                    <div className="space-y-5 md:col-span-2 pt-8 border-t border-zinc-50">
                       <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-900 flex items-center gap-2">
                          <HeartPulse size={16} className="text-zinc-400" /> Medical & Functional Treatments
                       </h4>
                       <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3">
                          {functionalTreatments.map(item => (
                             <li key={item} className="text-sm text-zinc-500 flex gap-3 font-light italic">
                                <span className="text-zinc-900">▪</span> {item}
                             </li>
                          ))}
                       </ul>
                    </div>
                  </div>
               </div>
            </section>

            {/* WHY CHOOSE US - BENTO BOX */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-zinc-900 text-white p-12 rounded-[3rem] space-y-8 shadow-xl">
                <div className="space-y-2">
                   <h3 className="text-2xl font-light">Why Choose Gerka Clinic?</h3>
                   <div className="w-12 h-[1px] bg-zinc-700" />
                </div>
                <ul className="space-y-5">
                  {[
                    "Expert medical injectors with advanced training",
                    "Tailored treatment plans that preserve natural expression",
                    "High clinical standards and safety-focused practice",
                    "Subtle, long-lasting, balanced results",
                    "Supportive aftercare and follow-up appointments"
                  ].map((text) => (
                    <li key={text} className="flex items-start gap-4 text-sm text-zinc-400 font-light leading-relaxed">
                      <CheckCircle2 size={18} className="text-zinc-100 shrink-0" /> {text}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#EAEAE6] p-12 rounded-[3rem] flex flex-col justify-center space-y-6">
                <div className="space-y-4">
                   <h4 className="text-xl font-medium text-zinc-900">Outcomes</h4>
                   <p className="text-sm text-zinc-600 font-light leading-relaxed">
                    Outcomes typically last three to four months, depending on individual factors. We recommend maintenance sessions to ensure your results stay consistent and natural.
                   </p>
                </div>
                <div className="p-6 bg-white/50 rounded-2xl border border-zinc-200 flex items-center justify-between">
                   <div>
                     <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1">Clinic Status</p>
                     <p className="text-[13px] text-zinc-800 font-medium uppercase tracking-tighter">Medical Grade Facility</p>
                   </div>
                   <ShieldCheck size={24} className="text-zinc-400" />
                </div>
              </div>
            </section>

            {/* FINAL CTA - BOOKING BOX */}
            <section className="bg-white border border-zinc-100 rounded-[3rem] p-10 md:p-16 space-y-10 shadow-sm">
               <div className="max-w-3xl space-y-6">
                  <h2 className="text-3xl font-light text-zinc-900 uppercase tracking-tight">Book Your Consultation</h2>
                  <p className="text-lg text-zinc-500 font-light leading-relaxed">
                    If you&apos;re considering anti-wrinkle neuromodulator treatments for aesthetic or functional concerns, our specialists are here to guide you. Book your consultation and discover a customised approach to natural confidence and improved comfort.
                  </p>
               </div>
               
               <div className="pt-4 flex flex-col md:flex-row items-center gap-8 border-t border-zinc-50 mt-10 pt-10">
                  <Link href="/#contact" className="w-full md:w-auto">
                    <button className="w-full md:w-auto bg-zinc-900 text-white px-12 py-5 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-zinc-800 transition-all active:scale-95 shadow-xl shadow-zinc-200">
                      Check Availability
                    </button>
                  </Link>
                  <div className="flex items-center gap-3 text-zinc-400">
                    <Calendar size={18} />
                    <span className="text-xs font-medium uppercase tracking-widest">Open Mon — Sat</span>
                  </div>
               </div>
            </section>

          </div>
        </div>
      </div>
    </main>
  )
}