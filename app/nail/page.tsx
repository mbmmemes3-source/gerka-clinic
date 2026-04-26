"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Check, ShieldAlert, Zap, Microscope, ArrowRight, Activity, Beaker } from "lucide-react"
import { NailHeroBanner } from "@/components/nailBanner"
import Link from "next/link"

const nailConditions = [
  {
    id: "fungal",
    title: "Onychomycosis",
    subtitle: "Fungal Nail Infection",
    image: "/ony.jpg",
    description: "Onychomycosis is a fungal infection of the nail that can cause thickening, brittleness, and discoloration ranging from yellow to brown.",
    symptoms: ["Thickened or brittle nails", "Yellow, white or brown discoloration", "Nail deformation", "Separation from the nail bed"],
    approach: "We utilize Lunula® Laser, a low-level cold laser technology designed to target organisms safely and support recovery."
  },
  {
    id: "psoriasis",
    title: "Nail Psoriasis",
    subtitle: "Symptomatic Management",
    image: "/pys.webp",
    description: "A manifestation of psoriasis that affects the nail plate, requiring specialized symptom control and health improvement.",
    symptoms: ["Pitting of the nail plate", "Onycholysis (nail lifting)", "Discoloration or 'oil drop' patches", "Thickened or crumbly nails"],
    approach: "Treatment focuses on symptom control and may involve topical therapies and medical management depending on severity."
  },
  {
    id: "bacterial",
    title: "Bacterial Infections",
    subtitle: "Acute Nail Care",
    image: "/bacteria.jpeg",
    description: "Infections around or under the nail can cause significant discomfort and require prompt medical evaluation.",
    symptoms: ["Redness and swelling", "Pain or tenderness", "Discharge or pus", "Nail plate changes"],
    approach: "Treatment depends on severity and may include topical or systemic therapy to prevent complications."
  },
  {
    id: "separation",
    title: "Onycholysis",
    subtitle: "Nail Separation",
    image: "/oni.jpeg",
    description: "Refers to the detachment of the nail plate from the nail bed, often appearing as a white or yellow area.",
    symptoms: ["Trauma-induced lifting", "Fungal or bacterial secondary infection", "Psoriasis-related separation", "Exposure to moisture/chemicals"],
    approach: "Management focuses on identifying the underlying cause, protecting the nail, and supporting healthy regrowth."
  }
]

export default function NailTreatmentPage() {
  const [activeTab, setActiveTab] = useState(nailConditions[0])

  return (
    <main className="bg-white">
      <NailHeroBanner />

      {/* SECTION 1: EDITORIAL HERO */}
      <section className="relative py-16 md:py-24 lg:pt-48 lg:pb-32 bg-[#F9F9F7] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:col-span-7 space-y-6 md:space-y-8 text-center lg:text-left"
            >
              <div className="inline-flex items-center rounded-full px-4 py-1.5 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500 bg-white border border-zinc-200 shadow-sm">
                Clinical Podiatry
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-zinc-900 tracking-tight leading-[1.1]">
                Nail Disorders <br className="hidden sm:block" />
                <span className="italic font-serif text-zinc-500 font-light">Treatment.</span>
              </h1>
              <p className="text-base md:text-xl text-zinc-500 font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
                At Gerka Clinic, Dublin, we offer medical assessment and treatment of common nail conditions affecting both fingernails and toenails.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2">
                <div className="flex items-center gap-2 text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-zinc-900 border-b-2 border-zinc-900 pb-1">
                  Dublin Clinic
                </div>
                <div className="flex items-center gap-2 text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-zinc-400">
                  Assessment Required
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="lg:col-span-5 relative"
            >
              <div className="aspect-[4/3] sm:aspect-[6/5] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl z-10 relative">
                <img src="/nail1.webp" alt="Nail Assessment" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-zinc-200/50 rounded-full blur-3xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE CLINICAL APPROACH */}
      <section className="py-16 md:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: <Microscope size={20} />, title: "Clinical Assessment", text: "Thorough nail evaluation to determine root causes." },
              { icon: <Beaker size={20} />, title: "Lab Investigation", text: "Laboratory confirmation for infectious vs inflammatory causes." },
              { icon: <Zap size={20} />, title: "Lunula® Laser", text: "Non-invasive cold laser for fungal nail infections." },
              { icon: <Activity size={20} />, title: "Individual Plans", text: "Customized management for symptoms and regrowth." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] bg-zinc-50 border border-zinc-100 space-y-4 hover:shadow-lg transition-all duration-500"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white flex items-center justify-center text-zinc-900 shadow-sm">
                  {item.icon}
                </div>
                <h3 className="text-base md:text-lg font-bold tracking-tight">{item.title}</h3>
                <p className="text-sm text-zinc-500 font-light leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: CONDITIONS TABS */}
      <section className="py-16 md:py-24 bg-zinc-900 text-white overflow-hidden sm:rounded-[3rem] md:rounded-[4rem]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div className="space-y-8 md:space-y-12">
              <div className="space-y-4 text-center lg:text-left">
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-500">Conditions We Treat</span>
                <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white">Expertise in <span className="italic font-serif text-zinc-400">Pathology.</span></h2>
              </div>

              {/* TABS NAVIGATION */}
              <div className="flex flex-col space-y-3">
                {nailConditions.map((condition) => (
                  <button
                    key={condition.id}
                    onClick={() => setActiveTab(condition)}
                    className={`text-left px-5 py-4 md:px-8 md:py-6 rounded-2xl md:rounded-3xl transition-all duration-500 border flex justify-between items-center group ${
                      activeTab.id === condition.id 
                      ? "bg-white border-white text-zinc-900 translate-x-1" 
                      : "bg-transparent border-white/10 text-zinc-500 hover:border-white/30"
                    }`}
                  >
                    <span className="text-base md:text-xl font-medium tracking-tight">{condition.title}</span>
                    <ArrowRight className={`w-4 h-4 md:w-5 md:h-5 transition-transform duration-500 ${activeTab.id === condition.id ? "translate-x-0" : "-translate-x-4 opacity-0 group-hover:opacity-100"}`} />
                  </button>
                ))}
              </div>
            </div>

            {/* TAB CONTENT */}
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-8 md:space-y-10"
                >
                  <div className="relative aspect-video sm:aspect-square lg:aspect-video rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/10">
                    <img 
                      src={activeTab.image} 
                      alt={activeTab.title} 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  
                  <div className="space-y-6">
                    <h3 className="text-2xl md:text-3xl font-light">{activeTab.subtitle}</h3>
                    <p className="text-zinc-400 text-base md:text-lg font-light leading-relaxed">{activeTab.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                      <div className="space-y-4">
                        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-500">Symptoms</span>
                        <ul className="grid grid-cols-1 gap-2">
                          {activeTab.symptoms.map(s => (
                            <li key={s} className="flex items-start gap-3 text-sm text-zinc-300 font-light">
                              <div className="w-1.5 h-1.5 rounded-full bg-zinc-500 mt-1.5 shrink-0" /> 
                              <span>{s}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="p-5 md:p-6 rounded-2xl md:rounded-3xl bg-zinc-800 border border-white/5">
                        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-500 block mb-3">Approach</span>
                        <p className="text-sm text-zinc-400 font-light italic leading-relaxed">{activeTab.approach}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: TECHNOLOGY SPOTLIGHT */}
      <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto bg-[#F9F9F7] rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">
            <div className="p-8 md:p-16 lg:p-20 space-y-6 md:space-y-8">
              <div className="space-y-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400">Technology Focus</span>
                <h2 className="text-3xl md:text-5xl font-light tracking-tight text-zinc-900">
                  Lunula® <span className="italic font-serif text-zinc-500">Cold Laser</span>
                </h2>
              </div>
              <p className="text-base md:text-lg text-zinc-600 font-light leading-relaxed">
                Lunula® is a non-invasive, pain-free treatment with no downtime. This low-level laser technology targets fungal organisms and supports healthy regrowth.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                {[
                  "Non-invasive & Pain-free",
                  "No recovery downtime",
                  "Targets fungal organisms",
                  "Support nail bed recovery",
                  "Improve appearance"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-zinc-900 flex items-center justify-center shrink-0">
                      <Check size={10} className="text-white" />
                    </div>
                    <span className="text-xs md:text-sm text-zinc-800 font-medium tracking-tight">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative min-h-[300px] md:min-h-[500px]">
              <img src="/nail3.PNG" alt="Lunula Laser Device" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: IMPORTANT MEDICAL INFO */}
      <section className="py-16 md:py-24 px-4 sm:px-6 max-w-4xl mx-auto">
        <div className="text-center space-y-8 md:space-y-12">
          <div className="space-y-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400">Clinical Protocol</span>
            <h2 className="text-2xl md:text-4xl font-light text-zinc-900">Important Medical Information</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10 text-left">
            {[
              "Laboratory confirmation may be required prior to starting laser treatment.",
              "Multiple treatment sessions are usually necessary for clinical success.",
              "Results vary based on individual growth rates and condition depth.",
              "Medical consultation is mandatory prior to receiving therapy."
            ].map((info, i) => (
              <div key={i} className="flex gap-4">
                <ShieldAlert size={20} className="text-zinc-300 shrink-0 mt-1" />
                <p className="text-[14px] md:text-[15px] text-zinc-500 font-light leading-relaxed">{info}</p>
              </div>
            ))}
          </div>
          <div className="pt-4 md:pt-8">
            <Link href="/#contact" className="inline-block w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-zinc-900 text-white px-8 md:px-12 py-4 md:py-5 rounded-full text-[10px] md:text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-zinc-800 transition-all active:scale-95 shadow-xl shadow-zinc-200">
                Request Assessment
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}