"use client"

import { motion } from "framer-motion"
import { 
  ArrowLeft, 
  ShieldCheck, 
  Microscope, 
  HeartPulse, 
  Calendar, 
  CheckCircle2, 
  ChevronRight, 
  Info, 
  Stethoscope, 
  UserCheck, 
  Euro,
  Clock
} from "lucide-react"
import Link from "next/link"
import { ServiceSidebar } from "@/components/ServiceSidebar"

const screeningAims = [
  {
    title: "HPV Testing",
    desc: "Checking for the presence of the Human Papillomavirus, a primary factor in cervical health."
  },
  {
    title: "Cell Analysis",
    desc: "Identifying abnormal cervical cell changes before they progress."
  },
  {
    title: "Early Detection",
    desc: "Spotting signs that may require medical follow-up or preventive care."
  }
]

const benefitPoints = [
  "Fast access: No waiting lists for public appointments",
  "Flexible scheduling: Convenient times to suit your lifestyle",
  "Discreet setting: A private, calm, and professional clinic",
  "Personalised care: Routine screening with a gentle approach",
  "Repeat testing: Suitable for those advised to have a follow-up smear",
  "Clinical reassurance: Peace of mind regarding your cervical health"
]

export default function SmearTestServicePage() {
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
          
          {/* 2. REUSABLE SIDEBAR */}
          <ServiceSidebar 
            activeService="Private Smear Test Dublin" 
            categoryTitle="Women's Health" 
          />

          {/* 3. MAIN CONTENT AREA */}
          <div className="lg:col-span-9 space-y-16 md:space-y-24">
            
            {/* HERO SECTION */}
            <section className="space-y-12">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-light text-zinc-900 tracking-tight leading-tight">
                  Private Smear Test <br />
                  <span className="italic font-serif text-zinc-500 font-light">Cervical Screening in Dublin</span>
                </h1>
                <div className="flex flex-wrap gap-4 border-b border-zinc-200 pb-8">
                  <span className="text-xs font-bold text-zinc-900 uppercase tracking-widest flex items-center gap-2">
                    <Euro size={14} className="text-zinc-400" /> Cost: €170
                  </span>
                  <span className="text-xs font-bold text-zinc-900 uppercase tracking-widest flex items-center gap-2">
                    <ShieldCheck size={14} className="text-zinc-400" /> Confidential & Private
                  </span>
                  <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest italic border-l border-zinc-200 pl-4">
                    Fast Results
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                <div className="space-y-6 text-zinc-600 font-light leading-relaxed text-[16px]">
                  <p>
                    At Gerka Clinic, we offer private smear tests in Dublin for women who prefer a fast, discreet and personalised appointment in a calm clinical environment.
                  </p>
                  <p>
                    A smear test, also known as <span className="text-zinc-900 font-medium italic underline decoration-zinc-200 underline-offset-4">cervical screening</span>, is a simple procedure used to collect a sample of cells from the cervix. This test plays an important role in preventive women’s health, helping to identify early cell changes before they become more serious.
                  </p>
                </div>
                <div className="aspect-[7/5] rounded-[3rem] overflow-hidden shadow-2xl border-white border-8">
                   {/* Suggested image: A clean clinical room or soft healthcare imagery */}
                  <img src="/private.jpg" alt="Private Smear Test Dublin" className="w-full h-full object-cover" />
                </div>
              </div>
            </section>

            {/* WHAT IS A SMEAR TEST SECTION */}
            <section className="bg-white rounded-[3rem] p-10 md:p-16 border border-zinc-100 shadow-sm space-y-12">
               <div className="max-w-2xl space-y-4">
                  <h2 className="text-3xl font-light text-zinc-900">What is a <span className="italic font-serif text-zinc-500">Smear Test?</span></h2>
                  <p className="text-zinc-500 font-light leading-relaxed">
                    A smear test is a quick procedure in which a soft brush is used to collect a small sample of cells from the cervix. It is usually well tolerated and takes only a few minutes. 
                  </p>
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {screeningAims.map((item, i) => (
                    <div key={i} className="space-y-4 p-6 bg-[#FAF9F6] rounded-2xl border border-zinc-50">
                       <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                          <Microscope size={18} className="text-zinc-400" />
                       </div>
                       <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-900 leading-tight">{item.title}</h4>
                       <p className="text-xs text-zinc-500 font-light leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
               </div>
            </section>

            {/* WHO BENEFITS SECTION */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
               <div className="space-y-8">
                  <div className="space-y-4">
                    <h3 className="text-3xl font-light text-zinc-900 uppercase tracking-tight leading-tight">Who may benefit from <br/><span className="italic font-serif text-zinc-500">Private Screening?</span></h3>
                    <p className="text-zinc-600 font-light leading-relaxed">
                      A private smear test is an ideal choice for women seeking convenience, comfort, and clinical reassurance without the wait.
                    </p>
                  </div>
                  <ul className="grid grid-cols-1 gap-4">
                    {benefitPoints.map((item, i) => (
                      <li key={i} className="flex items-center gap-4 text-sm text-zinc-500 font-light">
                        <CheckCircle2 size={18} className="text-zinc-900 shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
               </div>
               <div className="aspect-[4/5] rounded-[3.5rem] overflow-hidden shadow-xl border border-zinc-100">
                  <img src="/private2.webp" alt="Womens health consultation" className="w-full h-full object-cover" />
               </div>
            </section>

            {/* CLINICAL NOTE CARD */}
            <section className="bg-zinc-900 text-white rounded-[3.5rem] p-10 md:p-16 relative overflow-hidden">
               <div className="relative z-10 space-y-6 max-w-2xl">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                    <Stethoscope size={24} className="text-zinc-400" />
                  </div>
                  <h3 className="text-2xl font-light">Laboratory Analysis</h3>
                  <p className="text-zinc-400 font-light leading-relaxed">
                    Samples are sent to a certified laboratory to check for changes in cervical cells and, when appropriate, for HPV (Human Papillomavirus). Results are returned promptly and discussed with you in full confidentiality.
                  </p>
                  <div className="pt-4 border-t border-white/10">
                     <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">Preventive Care</p>
                     <p className="text-xs italic text-zinc-400 mt-2">Essential for spotting early cell changes before they progress.</p>
                  </div>
               </div>
               <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[100px]" />
            </section>

            {/* FINAL CTA */}
            <section className="bg-white border border-zinc-100 rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 shadow-sm relative overflow-hidden">
              <div className="space-y-3 text-center md:text-left relative z-10">
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-500">Private & Professional</p>
                <h2 className="text-3xl md:text-4xl font-light text-zinc-900 leading-tight tracking-tight uppercase">Schedule your screening</h2>
              </div>
              <Link href="/#contact" className="w-full md:w-auto relative z-10">
                <button className="w-full md:w-auto bg-zinc-900 text-white px-12 py-5 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-zinc-800 transition-all active:scale-95 shadow-lg">
                  Book Smear Test
                </button>
              </Link>
            </section>

          </div>
        </div>
      </div>
    </main>
  )
}