"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Clock, ShieldCheck, Heart, Microscope, Lock, CheckCircle2, ChevronRight, UserCircle, Activity, Target, Zap, Scissors, Euro } from "lucide-react"
import Link from "next/link"
import { ServiceSidebar } from "@/components/ServiceSidebar"

const treatedConditions = [
  "Skin tags (fibroepithelial polyps)",
  "Molluscum contagiosum",
  "Genital warts (HPV-related)",
  "Vascular lesions (angiomas)",
  "Seborrhoeic keratoses",
  "Other benign cutaneous growths"
]

const removalBenefits = [
  "Safe removal of benign lesions",
  "Relief from irritation or discomfort",
  "Improved aesthetic appearance",
  "Increased confidence and wellbeing",
  "Medical diagnosis when required"
]

export default function IntimateLesionServicePage() {
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
            activeService="Intimate Area Lesion Removal" 
            categoryTitle="Women's Health" 
          />

          {/* 3. MAIN CONTENT AREA */}
          <div className="lg:col-span-9 space-y-16 md:space-y-24">
            
            {/* HERO SECTION */}
            <section className="space-y-12">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-light text-zinc-900 tracking-tight leading-tight">
                  Intimate Area Lesion Removal – <br />
                  <span className="italic font-serif text-zinc-500 font-light">Safe & Discreet Clinical Care</span>
                </h1>
                <div className="flex flex-wrap gap-4 border-b border-zinc-200 pb-8">
                  <span className="text-xs font-bold text-zinc-900 uppercase tracking-widest flex items-center gap-2">
                    <Euro size={14} className="text-zinc-400" /> Cost: TBC / Consultation Required
                  </span>
                  <span className="text-xs font-bold text-zinc-900 uppercase tracking-widest flex items-center gap-2">
                    <ShieldCheck size={14} className="text-zinc-400" /> Advanced Medical Techniques
                  </span>
                  <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest italic">
                    Dublin Specialist Clinic
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                <div className="space-y-6 text-zinc-600 font-light leading-relaxed text-[16px]">
                  <p>
                    At Gerka Clinic, we provide specialist assessment and treatment for a wide range of benign skin lesions affecting the intimate and genital area.
                  </p>
                  <p>
                    These conditions can cause discomfort, irritation, aesthetic concern or impact confidence. Our approach combines medical precision, discretion and advanced techniques to ensure safe and effective outcomes.
                  </p>
                  <p>
                    All patients undergo a thorough clinical evaluation prior to treatment to ensure appropriate diagnosis and management.
                  </p>
                </div>
                <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-white border-8">
                  <img src="/lesion.png" alt="Clinical Precision Care" className="w-full h-full object-cover" />
                </div>
              </div>
            </section>

            {/* CONDITIONS & DIAGNOSIS SECTION */}
            <section className="bg-white rounded-[3rem] p-10 md:p-16 border border-zinc-100 shadow-sm space-y-12">
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  <div className="space-y-8">
                     <h2 className="text-3xl font-light text-zinc-900">Conditions <span className="italic font-serif text-zinc-500">We Treat</span></h2>
                     <div className="grid grid-cols-1 gap-3">
                        {treatedConditions.map((item) => (
                          <div key={item} className="flex items-center gap-3 py-2 border-b border-zinc-50">
                            <CheckCircle2 size={16} className="text-zinc-300" />
                            <span className="text-sm text-zinc-600 font-light">{item}</span>
                          </div>
                        ))}
                     </div>
                  </div>
                  <div className="bg-[#FAF9F6] p-8 md:p-10 rounded-[2.5rem] space-y-6">
                     <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                        <Microscope size={20} className="text-zinc-900" />
                     </div>
                     <h3 className="text-xl font-medium text-zinc-900">Medical Safety & Diagnosis</h3>
                     <p className="text-sm text-zinc-500 font-light leading-relaxed">
                        When clinically indicated, removed tissue may be sent for histopathological analysis to confirm the diagnosis and rule out any underlying pathology. If a lesion presents atypical features, we may recommend biopsy or referral for further specialist evaluation.
                     </p>
                  </div>
               </div>
            </section>

            {/* TREATMENT OPTIONS GRID */}
            <section className="space-y-10">
               <div className="max-w-2xl">
                  <h2 className="text-3xl font-light text-zinc-900">Tailored <span className="italic font-serif text-zinc-500">Treatment Options</span></h2>
                  <p className="text-zinc-500 font-light mt-4">Each treatment is tailored to achieve optimal cosmetic and medical results while preserving surrounding tissue integrity.</p>
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    { title: "Minor Surgery", icon: <Scissors size={18}/>, desc: "Under local anaesthesia" },
                    { title: "Electrocautery", icon: <Zap size={18}/>, desc: "Radiofrequency techniques" },
                    { title: "Laser Therapy", icon: <Target size={18}/>, desc: "Advanced light precision" },
                    { title: "Cryotherapy", icon: <Activity size={18}/>, desc: "Cold therapy management" }
                  ].map((option, i) => (
                    <div key={i} className="p-6 bg-white border border-zinc-100 rounded-3xl shadow-sm space-y-3">
                       <div className="text-zinc-900">{option.icon}</div>
                       <h4 className="text-sm font-bold uppercase tracking-widest">{option.title}</h4>
                       <p className="text-[11px] text-zinc-400 font-medium">{option.desc}</p>
                    </div>
                  ))}
               </div>
            </section>

            {/* BENEFITS & EXPECTATIONS GRID */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Benefits */}
              <div className="bg-zinc-900 text-white p-12 rounded-[3rem] space-y-8 shadow-xl">
                <h3 className="text-2xl font-light tracking-tight">Therapeutic Benefits</h3>
                <ul className="space-y-5">
                  {removalBenefits.map((text) => (
                    <li key={text} className="flex items-start gap-4 text-sm text-zinc-400 font-light leading-relaxed">
                      <div className="w-1 h-1 rounded-full bg-white mt-2 shrink-0" /> {text}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Expectations Card */}
              <div className="bg-[#EAEAE6] p-12 rounded-[3rem] space-y-8 flex flex-col">
                <div className="space-y-6">
                   <h3 className="text-2xl font-light text-zinc-900 uppercase tracking-tight">What to Expect</h3>
                   <div className="space-y-4">
                      {[
                        "Personalised consultation",
                        "Minimally invasive procedures",
                        "Local anaesthesia for comfort",
                        "Post-procedure care guidance"
                      ].map((item) => (
                        <div key={item} className="flex items-center gap-3">
                           <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center">
                              <CheckCircle2 size={12} className="text-zinc-400" />
                           </div>
                           <span className="text-sm text-zinc-600 font-medium">{item}</span>
                        </div>
                      ))}
                   </div>
                   <p className="text-xs text-zinc-400 italic leading-relaxed pt-2">
                     Mild redness, swelling or small scabs may occur following treatment and typically resolve within a few days.
                   </p>
                </div>
              </div>
            </section>

            {/* CONSULTATION BOX */}
            <section className="bg-white border border-zinc-100 rounded-[3rem] p-10 md:p-16 space-y-10 shadow-sm">
               <div className="max-w-3xl space-y-6">
                  <h2 className="text-3xl font-light text-zinc-900 uppercase tracking-tight">Request an Assessment</h2>
                  <p className="text-lg text-zinc-500 font-light leading-relaxed">
                    Not all lesions are suitable for immediate removal. A prior consultation is essential to ensure accurate diagnosis and to determine the most appropriate and safe treatment approach.
                  </p>
               </div>
               
               <div className="pt-6 flex flex-col md:flex-row items-center gap-8 border-t border-zinc-50 mt-10 pt-10">
                  <Link href="/#contact" className="w-full md:w-auto">
                    <button className="w-full md:w-auto bg-zinc-900 text-white px-12 py-5 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-zinc-800 transition-all active:scale-95 shadow-xl shadow-zinc-200">
                      Book Consultation
                    </button>
                  </Link>
                  <div className="flex items-center gap-3 text-zinc-400">
                    <Lock size={20} />
                    <span className="text-xs font-medium uppercase tracking-widest">Confidential Specialist Care</span>
                  </div>
               </div>
            </section>

          </div>
        </div>
      </div>
    </main>
  )
}