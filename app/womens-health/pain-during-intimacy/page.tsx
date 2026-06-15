"use client"

import React from "react"
import { motion } from "framer-motion"
import { 
  Heart, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck,
  Stethoscope,
  Info,
  Clock
} from "lucide-react"
import Link from "next/link"

const conditions = [
  {
    title: "Lichen Sclerosus",
    tag: "Frequently Misdiagnosed",
    desc: "A chronic inflammatory skin condition. Studies suggest women wait an average of 8 years for a correct diagnosis, often confusing it with menopause or thrush.",
    symptoms: ["Itching & Burning", "Tearing sensations", "White skin changes", "Vulvar irritation"]
  },
  {
    title: "Pelvic Floor Tension",
    tag: "Muscular Dysfunction",
    desc: "Stress, trauma, or hormonal shifts can cause 'muscle guarding'—excessive tightness that makes penetration painful or difficult.",
    symptoms: ["Muscle spasms", "Pressure sensations", "Difficulty relaxing", "Post-intimacy pain"]
  },
  {
    title: "Chronic Irritation",
    tag: "Microbiome & Hormonal",
    desc: "Recurrent infections or irritation caused by a combination of hormonal changes and shifts in the vaginal microbiome.",
    symptoms: ["Repeated infections", "Inflammatory response", "Persistent sensitivity", "Discomfort"]
  }
]

export default function PainDuringIntimacyPage() {
  return (
    <main className="bg-white min-h-screen overflow-x-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-28 pb-16 md:pt-40 md:pb-32 lg:pt-18 lg:pb-12 bg-[#FAF9F6] overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:col-span-7 space-y-6 md:space-y-8 text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-100 text-red-600 text-[10px] font-bold uppercase tracking-widest">
                <Heart size={12} fill="currentColor"/> Medical Support
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-zinc-900 tracking-tight leading-[1.1]">
                Pain During Intimacy <br className="hidden sm:block" />
                Is <span className="italic font-serif text-zinc-500 underline decoration-zinc-200 underline-offset-4 md:underline-offset-8">Not “Normal”.</span>
              </h1>
              
              <p className="text-zinc-500 font-light text-sm md:text-lg lg:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Burning, tearing, or muscle tension are often dismissed or confused with “just menopause.” At Gerka Clinic, our mission is to understand the cause behind the symptoms.
              </p>

              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4">
                 <Link href="/#contact" className="w-full sm:w-auto">
                   <button className="w-full sm:w-auto bg-zinc-900 text-white px-8 py-4 md:px-10 md:py-5 rounded-full text-[10px] md:text-[11px] font-bold uppercase tracking-widest hover:bg-zinc-800 transition-all shadow-xl active:scale-95">
                     Request Specialist Assessment
                   </button>
                 </Link>
                 <div className="flex items-center justify-center gap-2 text-zinc-400 text-[10px] uppercase tracking-widest font-bold">
                    <ShieldCheck size={14} /> Discreet & Private
                 </div>
              </div>
            </motion.div>

            {/* --- IMAGE FIXED FOR MOBILE --- */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-5 block w-full max-w-sm mx-auto lg:max-w-none"
            >
               <div className="aspect-[4/5] lg:aspect-[3/4] rounded-[3rem] md:rounded-[4rem] overflow-hidden border-8 border-white shadow-2xl lg:rotate-2">
                  <img src="/pain.webp" className="w-full h-full object-cover" alt="Compassionate Care" />
               </div>
            </motion.div>
          </div>
        </div>
        
        {/* Background Decor */}
        <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full bg-[#FAF9F6] -z-10" />
        <div className="absolute -bottom-24 -left-24 w-64 h-64 md:w-96 md:h-96 bg-zinc-200/30 blur-[80px] md:blur-[120px] rounded-full" />
      </section>

      {/* --- PHILOSOPHY SECTION --- */}
      <section className="py-16 md:py-24 px-5 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="bg-zinc-900 text-white p-8 md:p-12 lg:p-16 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl relative overflow-hidden order-2 lg:order-1">
               <div className="relative z-10 space-y-6">
                  <h2 className="text-2xl md:text-3xl font-light leading-tight">Beyond the symptoms.</h2>
                  <p className="text-zinc-400 font-light text-sm md:text-base leading-relaxed">
                    Every woman deserves to feel comfortable and pain-free. We combine regenerative gynaecology and functional medicine to create plans that respect your biological health.
                  </p>
                  <ul className="space-y-4 pt-4">
                     {["Regenerative Medicine", "Conventional Expertise", "Advanced Technology"].map(item => (
                       <li key={item} className="flex items-center gap-3 text-[10px] md:text-xs font-bold uppercase tracking-widest text-zinc-300">
                         <CheckCircle2 size={16} className="text-zinc-500" /> {item}
                       </li>
                     ))}
                  </ul>
               </div>
               <div className="absolute -bottom-20 -right-20 w-48 h-48 md:w-64 md:h-64 bg-white/5 blur-[80px] md:blur-[100px] rounded-full" />
            </div>
            
            <div className="space-y-6 md:space-y-8 order-1 lg:order-2 text-center lg:text-left">
               <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-400">Clinical Focus</span>
               <h3 className="text-3xl md:text-4xl lg:text-5xl font-light text-zinc-900 leading-tight">Conditions we <br className="hidden md:block"/><span className="italic font-serif text-zinc-500">commonly address.</span></h3>
               <p className="text-zinc-500 font-light text-base md:text-lg leading-relaxed">
                 Intimate discomfort is complex. It involves skin health, muscle response, and hormonal balance. We investigate the root cause.
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- CONDITIONS GRID --- */}
      <section className="py-16 md:py-24 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {conditions.map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] border border-zinc-200 shadow-sm flex flex-col justify-between"
              >
                <div className="space-y-6">
                  <div className="space-y-2">
                    <span className="text-[8px] md:text-[9px] font-black uppercase tracking-widest text-zinc-400 border-l-2 border-zinc-900 pl-3">
                      {item.tag}
                    </span>
                    <h4 className="text-xl md:text-2xl font-light text-zinc-900">{item.title}</h4>
                  </div>
                  <p className="text-zinc-500 text-sm font-light leading-relaxed">
                    {item.desc}
                  </p>
                  <div className="space-y-3 pt-4">
                    <p className="text-[9px] font-bold uppercase tracking-widest text-zinc-900 opacity-60">Key Symptoms:</p>
                    <div className="flex flex-wrap gap-2">
                      {item.symptoms.map(s => (
                        <span key={s} className="px-2.5 py-1 bg-zinc-50 border border-zinc-100 rounded-full text-[9px] text-zinc-500 uppercase font-medium">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="pt-8 md:pt-10">
                   <Link href="/#contact" className="text-[10px] font-black uppercase tracking-widest text-zinc-900 flex items-center gap-2 group">
                      Consult for {item.title} <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                   </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- APPROACH SECTION --- */}
      <section className="py-16 md:py-32 max-w-7xl mx-auto px-5 sm:px-8 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-light text-zinc-900 leading-tight">A Personalised <br className="hidden md:block"/><span className="italic font-serif text-zinc-500">Care Strategy.</span></h2>
            <p className="text-zinc-500 font-light text-sm md:text-base leading-relaxed">
              We move away from one-size-fits-all treatments. Innovative, evidence-based options exist that help reduce tension and discomfort.
            </p>
            <div className="p-6 md:p-8 bg-zinc-50 rounded-[2rem] border border-zinc-100 flex items-center gap-5 text-left">
              <ShieldCheck className="text-zinc-900 shrink-0" size={28} />
              <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-zinc-500 leading-relaxed">
                Utilising medical-grade protocols and functional diagnostic testing.
              </p>
            </div>
          </div>
          
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
             {[
               "Hormonal Imbalance Review",
               "Microbiome Health Support",
               "Pelvic Floor Spasm Reduction",
               "Regenerative Tissue Repair",
               "Dermatological Skin Control",
               "Personalised Aftercare"
             ].map((text, i) => (
               <div key={i} className="p-5 md:p-6 border border-zinc-100 rounded-2xl flex items-center gap-4 bg-white shadow-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-200" />
                  <span className="text-xs md:text-sm text-zinc-600 font-light">{text}</span>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-16 md:py-24 text-center bg-zinc-900 text-white mx-4 md:mx-6 lg:mx-10 rounded-[2.5rem] md:rounded-[4rem] mb-10 overflow-hidden relative shadow-2xl">
        <div className="max-w-4xl mx-auto px-6 space-y-8 md:space-y-10 relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-light tracking-tight leading-tight">
             It resonates with <span className="italic font-serif text-zinc-500">you.</span> <br className="hidden sm:block" />
             We are here to help.
          </h2>
          <p className="text-zinc-400 font-light text-base md:text-xl max-w-2xl mx-auto leading-relaxed">
            Break the silence. Speak with our specialists in a discreet, professional environment in Dublin.
          </p>
          <div className="pt-4 md:pt-6">
             <Link href="/#contact" className="inline-block w-full sm:w-auto">
               <button className="w-full sm:w-auto bg-white text-zinc-900 px-10 py-4 md:px-12 md:py-5 rounded-full text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] shadow-xl hover:bg-zinc-100 transition-all active:scale-95">
                  Book A Private Consultation
               </button>
             </Link>
          </div>
        </div>
        
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[800px] md:h-[800px] bg-white blur-[100px] md:blur-[150px] rounded-full" />
        </div>
      </section>

      <div className="pb-10 text-center">
         <p className="text-[9px] tracking-[0.4em] uppercase text-zinc-300 font-black px-4">
           Gerka Clinic Dublin • Aesthetic & Functional Wellness
         </p>
      </div>
    </main>
  )
}