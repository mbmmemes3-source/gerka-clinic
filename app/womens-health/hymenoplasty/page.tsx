"use client"

import { motion } from "framer-motion"
import { 
  ArrowLeft, 
  ShieldCheck, 
  Lock, 
  Heart, 
  Clock, 
  CheckCircle2, 
  ChevronRight, 
  UserCircle, 
  Stethoscope, 
  Info,
  Euro 
} from "lucide-react"
import Link from "next/link"
import { ServiceSidebar } from "@/components/ServiceSidebar"

const whyChoosePoints = [
  "Experienced surgeons specialising in intimate procedures",
  "Completely discreet, judgement-free environment",
  "Personalised care tailored to your cultural and emotional needs",
  "Modern surgical standards and high safety protocols",
  "Supportive follow-up and aftercare"
]

export default function HymenoplastyServicePage() {
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
            activeService="Hymenoplasty (Surgical)" 
            categoryTitle="Women's Health" 
          />

          {/* 3. MAIN CONTENT AREA */}
          <div className="lg:col-span-9 space-y-16 md:space-y-24">
            
            {/* HERO SECTION */}
            <section className="space-y-12">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-light text-zinc-900 tracking-tight leading-tight">
                  Hymenoplasty – <br />
                  <span className="italic font-serif text-zinc-500 font-light">Confidential Specialist Care</span>
                </h1>
                <div className="flex flex-wrap gap-6 border-b border-zinc-200 pb-8">
                  <span className="text-xs font-bold text-zinc-900 uppercase tracking-widest flex items-center gap-2">
                    <Euro size={14} className="text-zinc-400" /> Cost: TBC / Consultation Required
                  </span>
                  <span className="text-xs font-bold text-zinc-900 uppercase tracking-widest flex items-center gap-2">
                    <Lock size={14} className="text-zinc-400" /> Discreet Environment
                  </span>
                  <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest italic border-l border-zinc-200 pl-4">
                    Sensitive & Personalised Service
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                <div className="space-y-6 text-zinc-600 font-light leading-relaxed text-[16px]">
                  <p>
                    A confidential and specialist hymenoplasty service at Gerka Clinic, offering sensitive, personalised care in a discreet environment.
                  </p>
                  <p>
                    This delicate surgical procedure aims to restore the hymenal tissue for personal, cultural, or emotional reasons. Our approach prioritises <span className="text-zinc-900 font-medium italic">comfort, confidentiality, and patient wellbeing</span> at every stage.
                  </p>
                </div>
                <div className="aspect-[5/4] rounded-[3rem] overflow-hidden shadow-2xl border-white border-8">
                  <img src="/hymeno1.avif" alt="Sensitive Clinical Care" className="w-full h-full object-cover" />
                </div>
              </div>
            </section>

            {/* CLINICAL PROCEDURE DETAILS */}
            <section className="bg-white rounded-[3rem] p-10 md:p-16 border border-zinc-100 shadow-sm space-y-12">
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-8">
                     <h2 className="text-3xl font-light text-zinc-900 uppercase tracking-tight">The Procedure</h2>
                     <div className="space-y-4 text-zinc-500 font-light leading-relaxed">
                        <p>
                          During your consultation, our specialist will discuss your goals, explain the procedure in detail, and tailor the treatment plan to your needs.
                        </p>
                        <p>
                          We use <span className="text-zinc-900 font-medium underline decoration-zinc-200 underline-offset-4">refined surgical techniques</span> to achieve natural-looking results while ensuring safety and minimal discomfort.
                        </p>
                     </div>
                     <div className="flex gap-6">
                        <div className="flex flex-col border-l-2 border-zinc-900 pl-4">
                           <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Duration</span>
                           <span className="text-sm font-medium text-zinc-800">Approx. 60 Minutes</span>
                        </div>
                        <div className="flex flex-col border-l-2 border-zinc-200 pl-4">
                           <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Anaesthesia</span>
                           <span className="text-sm font-medium text-zinc-800">Local Anaesthetic</span>
                        </div>
                     </div>
                  </div>
                  <div className="aspect-[4/3] rounded-[2.5rem] overflow-hidden border border-zinc-50 shadow-inner">
                     <img src="/pigment.webp" alt="Hymenoplasty Specialist Care" className="w-full h-full object-cover" />
                  </div>
               </div>
            </section>

            {/* WHY CHOOSE GERKA CLINIC SECTION */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Trust Points */}
              <div className="bg-zinc-900 text-white p-12 rounded-[3rem] space-y-8 shadow-xl">
                <h3 className="text-2xl font-light flex items-center gap-3">
                  Why Choose Gerka Clinic? <ShieldCheck size={24} className="text-zinc-500" />
                </h3>
                <ul className="space-y-5">
                  {whyChoosePoints.map((text) => (
                    <li key={text} className="flex items-start gap-4 text-sm text-zinc-400 font-light leading-relaxed">
                      <div className="w-1 h-1 rounded-full bg-white mt-2 shrink-0" /> {text}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Aftercare Card */}
              <div className="bg-[#EAEAE6] p-12 rounded-[3rem] space-y-8 flex flex-col justify-center">
                <div className="space-y-4">
                   <div className="w-10 h-10 rounded-full bg-white/50 flex items-center justify-center">
                      <Stethoscope size={20} className="text-zinc-900" />
                   </div>
                   <h3 className="text-2xl font-light text-zinc-900">Recovery & Support</h3>
                   <p className="text-sm text-zinc-600 font-light leading-relaxed">
                     Clear aftercare guidance is provided, and our team remains available to support you throughout your recovery. Your wellbeing is our priority from the first consultation through to final healing.
                   </p>
                </div>
                <div className="p-4 bg-white/40 rounded-2xl border border-zinc-200 inline-flex items-center gap-3">
                   <Info size={16} className="text-zinc-400" />
                   <p className="text-[11px] font-bold uppercase tracking-widest text-zinc-500">Judgement-free clinical environment</p>
                </div>
              </div>
            </section>

            {/* BOOK YOUR CONSULTATION SECTION */}
            <section className="bg-white border border-zinc-100 rounded-[3rem] p-10 md:p-16 space-y-10 shadow-sm relative overflow-hidden">
               <div className="max-w-2xl space-y-6 relative z-10">
                  <h2 className="text-3xl font-light text-zinc-900 uppercase tracking-tight">Book Your Consultation</h2>
                  <p className="text-lg text-zinc-500 font-light leading-relaxed">
                    If you are considering hymenoplasty and would like confidential expert guidance, we are here to support you. Book a private consultation and speak with one of our specialists.
                  </p>
               </div>
               
               <div className="pt-6 relative z-10">
                  <Link href="/#contact" className="w-full md:w-auto">
                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full md:w-auto bg-zinc-900 text-white px-12 py-5 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-zinc-800 transition-all active:scale-95 shadow-xl shadow-zinc-200 flex items-center justify-center gap-3"
                    >
                      Book Now <ChevronRight size={16} />
                    </motion.button>
                  </Link>
               </div>
               {/* Aesthetic Background Detail */}
               <div className="absolute top-0 right-0 w-64 h-64 bg-[#F9F9F7] rounded-full translate-x-1/2 -translate-y-1/2 -z-0 opacity-50" />
            </section>

          </div>
        </div>
      </div>
    </main>
  )
}