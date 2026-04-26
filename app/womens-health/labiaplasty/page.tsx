"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Clock, ShieldCheck, Heart, Scissors, Lock, CheckCircle2, ChevronRight, UserCircle, Activity, Euro } from "lucide-react"
import Link from "next/link"
import { ServiceSidebar } from "@/components/ServiceSidebar"

const whyChoosePoints = [
  "Specialist surgeons with extensive experience in women’s intimate health",
  "Personalised treatment planning",
  "Modern surgical facilities and discreet patient care",
  "Natural, balanced results",
  "Dedicated aftercare and follow-up support"
]

export default function LabiaplastyServicePage() {
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
            activeService="Labiaplasty" 
            categoryTitle="Women's Health" 
          />

          {/* 3. MAIN CONTENT AREA */}
          <div className="lg:col-span-9 space-y-16 md:space-y-24">
            
            {/* HERO SECTION */}
            <section className="space-y-12">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-light text-zinc-900 tracking-tight leading-tight">
                  Labiaplasty – <br />
                  <span className="italic font-serif text-zinc-500 font-light">Discreet Specialist Surgery</span>
                </h1>
                <div className="flex flex-wrap gap-4 border-b border-zinc-200 pb-8">
                  <span className="text-xs font-bold text-zinc-900 uppercase tracking-widest flex items-center gap-2">
                    <Euro size={14} className="text-zinc-400" /> Cost: TBC / Consultation Required
                  </span>
                  <span className="text-xs font-bold text-zinc-900 uppercase tracking-widest flex items-center gap-2">
                    <ShieldCheck size={14} className="text-zinc-400" /> Medically-Led Approach
                  </span>
                  <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest italic">
                    Dublin Clinical Excellence
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                <div className="space-y-6 text-zinc-600 font-light leading-relaxed text-[16px]">
                  <p>
                    A discreet, specialist labiaplasty service designed to enhance comfort, confidence, and intimate wellbeing at Gerka Clinic.
                  </p>
                  <p>
                    At Gerka Clinic, we offer a modern, compassionate approach to labiaplasty. This procedure reshapes or reduces the labia minora to address discomfort, asymmetry, or personal aesthetic concerns.
                  </p>
                  <p>
                    Many women choose labiaplasty to ease irritation during exercise or intimacy, or to restore confidence following childbirth or natural changes over time.
                  </p>
                </div>
                <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-white border-8">
                  {/* Image showing the pink flower from your screenshot */}
                  <img src="/labi.webp" alt="Labiaplasty Aesthetic Care" className="w-full h-full object-cover" />
                </div>
              </div>
            </section>

            {/* CLINICAL PROCEDURE & PROTOCOL */}
            <section className="bg-white rounded-[3rem] p-10 md:p-16 border border-zinc-100 shadow-sm space-y-12">
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-8">
                     <h2 className="text-3xl font-light text-zinc-900">The Surgical <span className="italic font-serif text-zinc-500">Procedure</span></h2>
                     <div className="space-y-4 text-zinc-500 font-light leading-relaxed">
                        <p>
                          Our experienced surgical team uses advanced techniques to ensure natural-looking results, minimal downtime, and the highest standards of safety.
                        </p>
                        <p>
                          Every consultation is private, personalised, and designed to help you understand the procedure, expected outcomes, and what will work best for your needs.
                        </p>
                     </div>
                     <div className="grid grid-cols-2 gap-6 pt-4">
                        <div className="flex flex-col border-l-2 border-zinc-900 pl-4">
                           <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Duration</span>
                           <span className="text-sm font-medium text-zinc-800">45–90 Minutes</span>
                        </div>
                        <div className="flex flex-col border-l-2 border-zinc-900 pl-4">
                           <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Technique</span>
                           <span className="text-sm font-medium text-zinc-800">Local Anaesthesia</span>
                        </div>
                     </div>
                  </div>
                  <div className="aspect-video rounded-[2.5rem] overflow-hidden border border-zinc-50 shadow-inner">
                     {/* The image with the white underwear and hands from your screenshot */}
                     <img src="/labi2.avif" alt="Post-Surgical Care" className="w-full h-full object-cover" />
                  </div>
               </div>
            </section>

            {/* WHY CHOOSE & RECOVERY GRID */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Trust Points */}
              <div className="bg-zinc-900 text-white p-12 rounded-[3rem] space-y-8 shadow-xl">
                <h3 className="text-2xl font-light">Why Choose Gerka Clinic?</h3>
                <ul className="space-y-5">
                  {whyChoosePoints.map((text) => (
                    <li key={text} className="flex items-start gap-4 text-sm text-zinc-400 font-light leading-relaxed">
                      <div className="w-1 h-1 rounded-full bg-white mt-2 shrink-0" /> {text}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recovery Card */}
              <div className="bg-[#EAEAE6] p-12 rounded-[3rem] space-y-8 flex flex-col justify-center">
                <div className="space-y-4">
                   <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center">
                      <Activity size={24} className="text-zinc-900" />
                   </div>
                   <h3 className="text-2xl font-light text-zinc-900 uppercase tracking-tight">Recovery Support</h3>
                   <p className="text-sm text-zinc-600 font-light leading-relaxed">
                     While swelling and tenderness are expected in the early stages, we provide clear aftercare guidance and full support throughout your recovery. We use refined techniques to achieve natural-looking results with minimal discomfort.
                   </p>
                </div>
                <div className="p-4 bg-white/40 rounded-2xl border border-zinc-200 inline-flex items-center gap-3">
                   <Lock size={16} className="text-zinc-400" />
                   <p className="text-[11px] font-bold uppercase tracking-widest text-zinc-500">Judgement-free environment</p>
                </div>
              </div>
            </section>

            {/* CONSULTATION BOX */}
            <section className="bg-white border border-zinc-100 rounded-[3rem] p-10 md:p-16 space-y-10 shadow-sm">
               <div className="max-w-3xl space-y-6">
                  <h2 className="text-3xl font-light text-zinc-900 uppercase tracking-tight">Book Your Consultation</h2>
                  <p className="text-lg text-zinc-500 font-light leading-relaxed">
                    If you are considering labiaplasty and want trusted professional advice, we are here to guide you. Book your confidential consultation and take the first step towards greater comfort and confidence.
                  </p>
               </div>
               
               <div className="pt-6 flex flex-col md:flex-row items-center gap-8 border-t border-zinc-50 mt-10 pt-10">
                  <Link href="/#contact" className="w-full md:w-auto">
                    <button className="w-full md:w-auto bg-zinc-900 text-white px-12 py-5 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-zinc-800 transition-all active:scale-95 shadow-xl shadow-zinc-200">
                      Request Consultation
                    </button>
                  </Link>
                  <div className="flex items-center gap-3 text-zinc-400">
                    <UserCircle size={20} />
                    <span className="text-xs font-medium uppercase tracking-widest">Confidential expert guidance</span>
                  </div>
               </div>
            </section>

          </div>
        </div>
      </div>
    </main>
  )
}