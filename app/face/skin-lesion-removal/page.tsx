"use client"

import { motion } from "framer-motion"
import { ArrowLeft, ShieldAlert, Target, Microscope, Zap, CheckCircle2, ChevronRight, Eye, AlertTriangle, Euro, MessageCircle, Calendar } from "lucide-react"
import Link from "next/link"
import { ServiceSidebar } from "@/components/ServiceSidebar"

const benignLesions = [
  {
    title: "Intradermal Nevus (Raised Mole)",
    desc: "A common, benign skin growth where mole cells (melanocytes) are located entirely within the dermis. Typically skin-colored to light brown, soft, and raised (papules or nodules). We provide precision removal for cosmetic improvement."
  },
  {
    title: "Skin Tags (Acrochordons)",
    desc: "Soft, flesh-coloured or slightly pigmented growths commonly appearing on the neck, eyelids, underarms, and groin. Often related to friction or hormonal changes."
  },
  {
    title: "Sebaceous Hyperplasia",
    desc: "Small yellowish or skin-coloured papules caused by enlarged sebaceous glands. While benign, they require accurate diagnosis to distinguish from other lesions."
  },
  {
    title: "Dark Papular Lesions (DPN)",
    desc: "Dermatosis Papulosa Nigra consists of multiple small dark papules on the face and neck. Removal requires expertise to avoid pigmentation changes in darker skin types."
  },
  {
    title: "Warts (Verrucae)",
    desc: "Benign skin growths caused by the human papillomavirus (HPV). They may appear on various body areas and require targeted removal techniques."
  }
]

const techniques = [
  "Medical electrosurgery",
  "Radiofrequency techniques",
  "Precision excision",
  "Other lesion-specific methods"
]

export default function SkinLesionRemovalPage() {
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
            activeService="Skin Lesion Removal" 
            categoryTitle="Face Treatments" 
          />

          {/* 3. MAIN CONTENT AREA */}
          <div className="lg:col-span-9 space-y-16 md:space-y-24">
            
            {/* HERO SECTION */}
            <section className="space-y-12">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-light text-zinc-900 tracking-tight leading-tight">
                  Cosmetic Skin Lesion <br />
                  <span className="italic font-serif text-zinc-500 font-light">Removal – Precision Care</span>
                </h1>
                
                {/* PRICE BANNER */}
                <div className="flex flex-wrap gap-y-4 gap-x-8 border-b border-zinc-200 pb-8">
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Clinical Cost</span>
                    <span className="text-sm font-bold text-zinc-900 flex items-center gap-2">
                      <Euro size={14} className="text-zinc-400" /> From €90 per lesion
                    </span>
                  </div>
                  <div className="flex flex-col gap-1 border-l border-zinc-200 pl-8">
                    <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Remote Assessment</span>
                    <span className="text-sm font-bold text-zinc-900 flex items-center gap-2">
                      <MessageCircle size={14} className="text-zinc-400" /> WhatsApp Photo Quote
                    </span>
                  </div>
                  <div className="flex flex-col gap-1 border-l border-zinc-200 pl-8">
                    <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Dublin Clinic</span>
                    <span className="text-sm font-bold text-zinc-900 italic">Medical Excellence</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                <div className="space-y-6 text-zinc-600 font-light leading-relaxed text-[16px]">
                  <p>
                    At Gerka Clinic, Dublin, we offer cosmetic removal for a wide range of benign skin lesions, focusing on safety, precision and optimal aesthetic outcomes.
                  </p>
                  
                  <div className="p-6 bg-zinc-900 text-white rounded-3xl space-y-2 shadow-sm">
                    <p className="text-xs uppercase tracking-widest font-bold text-zinc-400">Facial Precision</p>
                    <p className="text-sm font-light">We specialize in removal of moles and lesions on delicate facial areas, including eyelids and periocular skin.</p>
                  </div>
                </div>
                <div className="aspect-[5/4] rounded-[3rem] overflow-hidden shadow-2xl border-white border-8">
                  <img src="/comp.png" alt="Skin Lesion Removal Clinical Care" className="w-full h-full object-cover" />
                </div>
              </div>
            </section>

            {/* ASSESSMENT BENTO GRID */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="bg-white border border-zinc-100 p-10 rounded-[3rem] space-y-8 shadow-sm">
                  <div className="space-y-4">
                     <h3 className="text-2xl font-light text-zinc-900 uppercase tracking-tight">How to Get a Quote</h3>
                     <p className="text-sm text-zinc-500 font-light leading-relaxed">
                        To receive a tailored price for your specific lesion(s), we offer two convenient routes:
                     </p>
                  </div>
                  <ul className="space-y-6">
                     <li className="flex gap-4 items-start">
                        <div className="w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center shrink-0">
                           <MessageCircle size={18} className="text-zinc-900" />
                        </div>
                        <div>
                           <p className="text-sm font-bold text-zinc-800 uppercase tracking-widest">WhatsApp Photo</p>
                           <p className="text-xs text-zinc-500 font-light mt-1">Send a high-resolution photo for a remote estimate.</p>
                        </div>
                     </li>
                     <li className="flex gap-4 items-start">
                        <div className="w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center shrink-0">
                           <Calendar size={18} className="text-zinc-900" />
                        </div>
                        <div>
                           <p className="text-sm font-bold text-zinc-800 uppercase tracking-widest">In-Clinic Consultation</p>
                           <p className="text-xs text-zinc-500 font-light mt-1">Formal clinical assessment and same-day removal where possible.</p>
                        </div>
                     </li>
                  </ul>
               </div>

               <div className="bg-[#EAEAE6] p-10 rounded-[3rem] space-y-8 flex flex-col justify-center">
                  <div className="space-y-4">
                     <h3 className="text-2xl font-light text-zinc-900 uppercase tracking-tight">Clinical Standards</h3>
                     <p className="text-sm text-zinc-600 font-light leading-relaxed">
                        Removal is performed using medical-grade electrosurgery or precision excision to ensure minimal marking, especially on the face.
                     </p>
                  </div>
                  <div className="p-6 bg-white/50 rounded-2xl border border-zinc-200 flex items-center gap-4">
                     <Microscope size={20} className="text-zinc-400" />
                     <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Histopathology analysis available if indicated</p>
                  </div>
               </div>
            </section>

            {/* BENIGN LESIONS DETAIL LIST */}
            <section className="space-y-12">
               <h3 className="text-3xl font-light text-zinc-900">Benign Lesions <span className="italic font-serif text-zinc-500">We Treat</span></h3>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {benignLesions.map((lesion) => (
                    <div key={lesion.title} className="p-8 bg-white border border-zinc-100 rounded-3xl space-y-4 shadow-sm group hover:border-zinc-300 transition-all">
                       <h4 className="text-xl font-medium text-zinc-900 flex items-center gap-3">
                          <Target size={18} className="text-zinc-300" /> {lesion.title}
                       </h4>
                       <p className="text-sm text-zinc-500 font-light leading-relaxed">
                          {lesion.desc}
                       </p>
                    </div>
                  ))}
               </div>
            </section>

            {/* IMPORTANT MEDICAL INFORMATION BOX */}
            <section className="p-10 md:p-16 bg-[#F9F9F7] rounded-[3rem] border border-zinc-100 space-y-10">
               <div className="flex items-center gap-4">
                  <AlertTriangle size={32} strokeWidth={1.5} className="text-zinc-400" />
                  <h3 className="text-2xl md:text-3xl font-light text-zinc-900 tracking-tight">Clinical Assessment</h3>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                  {[
                    "Only benign-appearing lesions are suitable for cosmetic removal",
                    "A consultation is required prior to treatment",
                    "Intradermal nevi removal results are focused on surface leveling",
                    "Suspicious lesions will be referred for medical evaluation"
                  ].map((info) => (
                    <div key={info} className="flex gap-4 items-start">
                       <div className="w-1.5 h-1.5 rounded-full bg-zinc-300 mt-2 shrink-0" />
                       <p className="text-[15px] text-zinc-500 font-light leading-relaxed">{info}</p>
                    </div>
                  ))}
               </div>
            </section>

            {/* FINAL CTA */}
            <section className="bg-zinc-900 rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl relative overflow-hidden">
              <div className="space-y-3 text-center md:text-left relative z-10">
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-500">Confidential Expert Care</p>
                <h2 className="text-3xl md:text-4xl font-light text-white leading-tight">Book your assessment</h2>
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