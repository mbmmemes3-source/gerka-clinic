"use client"

import { motion } from "framer-motion"
import { 
  ArrowLeft, 
  Clock, 
  Euro, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  Target, 
  Info, 
  ChevronRight, 
  Beaker, 
  HeartPulse, 
  Dna
} from "lucide-react"
import Link from "next/link"
import { ServiceSidebar } from "@/components/ServiceSidebar"

const concerns = [
  "Fine lines and early ageing",
  "Loss of skin firmness",
  "Dull or tired-looking complexion",
  "Uneven skin texture",
  "Enlarged pores and congestion",
  "Acne scarring and pitting",
  "Thinning hair and scalp health",
  "Dehydrated or crepey skin"
]

const steps = [
  "A small blood sample is collected by our clinical team.",
  "The sample is processed in Regenlab’s FDA-approved centrifuge system.",
  "Platelet-rich plasma is precisely separated and activated.",
  "PRP is injected or micro-needled into the target area (Face or Scalp).",
  "Growth factors trigger natural collagen synthesis and repair over 2–12 weeks."
]

const prpFaqs = [
  {
    q: "Is PRP safe?",
    a: "Yes. Because it uses your own blood (autologous), there is no risk of allergic reaction. We use Regenlab, the only FDA-approved system for clinical preparation."
  },
  {
    q: "Does the treatment hurt?",
    a: "We apply a medical-grade numbing cream before the procedure to ensure you are comfortable throughout the session."
  },
  {
    q: "When will I see results?",
    a: "You may notice a 'glow' within days, but the biological repair (collagen and hair follicle stimulation) takes 2 to 12 weeks to fully manifest."
  },
  {
    q: "How many sessions are needed?",
    a: "For both skin and hair, we typically recommend a course of 3 sessions spaced 4 weeks apart for optimal clinical outcomes."
  }
]

export default function PRPServicePage() {
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
            activeService="PRP Facial Rejuvenation" 
            categoryTitle="Face Treatments" 
          />

          {/* 3. MAIN CONTENT */}
          <div className="lg:col-span-9 space-y-16 md:space-y-24">
            
            {/* HERO SECTION */}
            <section className="space-y-12">
              <div className="space-y-6">
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-4xl md:text-6xl font-light text-zinc-900 tracking-tight leading-tight"
                >
                  PRP <br />
                  <span className="italic font-serif text-zinc-500 font-light">Biological Regeneration</span>
                </motion.h1>
                <div className="flex flex-wrap gap-6 border-b border-zinc-200 pb-8">
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Face Treatment</span>
                    <span className="text-sm font-bold text-zinc-900 flex items-center gap-2">
                      <Euro size={14} /> €350 per session
                    </span>
                  </div>
                  <div className="flex flex-col gap-1 border-l border-zinc-200 pl-6">
                    <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Hair Treatment</span>
                    <span className="text-sm font-bold text-zinc-900 flex items-center gap-2">
                      <Euro size={14} /> €450 per session
                    </span>
                  </div>
                  <div className="flex flex-col gap-1 border-l border-zinc-200 pl-6">
                    <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Duration</span>
                    <span className="text-sm font-bold text-zinc-900 flex items-center gap-2">
                      <Clock size={14} /> 90-120 min
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                <div className="space-y-6 text-zinc-600 font-light leading-relaxed text-[17px]">
                  <h3 className="text-2xl font-light text-zinc-900 uppercase tracking-tight">The Power of Your Own Biology</h3>
                  <p>
                    PRP (Platelet-Rich Plasma) Therapy is a revolutionary regenerative treatment that utilizes the growth factors in your own blood to repair tissue and stimulate cell growth.
                  </p>
                  <p>
                    Whether used for <strong>facial rejuvenation</strong> or <strong>hair loss restoration</strong>, PRP offers a 100% natural approach to anti-ageing. At Gerka Clinic, we utilize the <span className="text-zinc-900 font-medium italic underline decoration-zinc-200 underline-offset-4">Regenlab System</span>, ensuring the highest concentration of platelets and the strictest safety standards in Ireland.
                  </p>
                </div>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-white border-8"
                >
                  <img src="/prp1.webp" alt="PRP Clinical Procedure" className="w-full h-full object-cover" />
                </motion.div>
              </div>
            </section>

            {/* REGENLAB ADVANTAGE */}
            <section className="bg-zinc-900 text-white rounded-[3.5rem] p-10 md:p-16 space-y-12 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-zinc-800 rounded-full blur-[100px] opacity-40" />
               <div className="relative z-10 max-w-2xl space-y-6">
                  <h2 className="text-3xl font-light">The Regenlab Difference <br/><span className="text-zinc-500 font-serif italic">FDA Approved Technology</span></h2>
                  <p className="text-zinc-400 font-light text-sm leading-relaxed">
                    Most clinics use generic centrifuge kits. Gerka Clinic invests in Regenlab technology—the gold standard for in-clinic PRP preparation. This system provides a fully closed, sterile environment that eliminates contamination risk and ensures a consistently high platelet count for maximum healing.
                  </p>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                  {["Sterile Closed System", "Maximized Growth Factors", "FDA & CE Certified"].map((text) => (
                    <div key={text} className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl flex items-center gap-4">
                       <ShieldCheck className="text-zinc-400" size={20} />
                       <span className="text-[10px] font-bold uppercase tracking-widest">{text}</span>
                    </div>
                  ))}
               </div>
            </section>

            {/* THE PROCESS SECTION */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
               <div className="space-y-10">
                  <h3 className="text-3xl font-light text-zinc-900">The 5-Step <span className="italic font-serif text-zinc-500">Treatment Journey</span></h3>
                  <div className="space-y-8">
                    {steps.map((step, i) => (
                      <div key={i} className="flex gap-6 items-start group">
                        <span className="text-xs font-bold text-zinc-300 border border-zinc-200 w-10 h-10 rounded-full flex items-center justify-center shrink-0 group-hover:bg-zinc-900 group-hover:text-white transition-all duration-300">0{i + 1}</span>
                        <p className="text-[15px] text-zinc-600 font-light leading-relaxed pt-2">{step}</p>
                      </div>
                    ))}
                  </div>
               </div>
               <div className="aspect-[4/5] rounded-[3.5rem] overflow-hidden shadow-xl border-zinc-100 border">
                  <img src="/prp2.webp" alt="PRP Scientific Process" className="w-full h-full object-cover" />
               </div>
            </section>

            {/* HAIR & SKIN GRID */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-12 rounded-[3rem] border border-zinc-100 shadow-sm space-y-8">
                <div className="w-12 h-12 rounded-2xl bg-[#FAF9F6] flex items-center justify-center">
                  <Sparkles size={24} className="text-zinc-400" />
                </div>
                <h3 className="text-2xl font-light text-zinc-900">PRP for Skin</h3>
                <ul className="space-y-4">
                  {concerns.slice(0, 6).map(text => (
                    <li key={text} className="flex items-center gap-4 text-sm text-zinc-500 font-light">
                       <CheckCircle2 size={16} className="text-zinc-900" /> {text}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#EAEAE6] p-12 rounded-[3rem] space-y-8">
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center">
                  <HeartPulse size={24} className="text-zinc-900" />
                </div>
                <h3 className="text-2xl font-light text-zinc-900">PRP for Hair</h3>
                <p className="text-sm text-zinc-600 font-light leading-relaxed">
                  When injected into the scalp, PRP increases blood supply to the hair follicle and increases the thickness of the hair shaft, effectively treating male and female pattern baldness.
                </p>
                <div className="pt-4 border-t border-zinc-300">
                   <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-2">Ideal for:</p>
                   <p className="text-sm text-zinc-800 font-medium">Androgenetic Alopecia & Hair Thinning</p>
                </div>
              </div>
            </section>

            {/* FAQ SECTION */}
            <section className="space-y-12">
               <div className="text-center space-y-2">
                  <h2 className="text-3xl font-light text-zinc-900 tracking-tight">Frequently Asked Questions</h2>
                  <div className="w-12 h-[1px] bg-zinc-300 mx-auto" />
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
                  {prpFaqs.map((faq, i) => (
                    <div key={i} className="space-y-3">
                       <h4 className="text-[12px] font-bold uppercase tracking-widest text-zinc-900 flex gap-3">
                          <span className="text-zinc-300 font-serif">0{i + 1}.</span> {faq.q}
                       </h4>
                       <p className="text-[14px] text-zinc-500 font-light leading-relaxed pl-8 italic">
                          {faq.a}
                       </p>
                    </div>
                  ))}
               </div>
            </section>

            {/* FINAL CTA */}
            <section className="bg-zinc-900 rounded-[3rem] p-10 md:p-20 flex flex-col items-center text-center space-y-8 shadow-2xl relative overflow-hidden">
              <div className="space-y-3 relative z-10">
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-500">Natural Biological Healing</p>
                <h2 className="text-3xl md:text-5xl font-light text-white leading-tight">Start your regenerative <br/> journey today</h2>
              </div>
              <Link href="/#contact" className="relative z-10">
                <button className="bg-white text-zinc-900 px-12 py-5 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] hover:scale-105 transition-all shadow-xl">
                  Book A Consultation
                </button>
              </Link>
              <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-zinc-100/5 blur-[120px] rounded-full" />
            </section>

          </div>
        </div>
      </div>
    </main>
  )
}