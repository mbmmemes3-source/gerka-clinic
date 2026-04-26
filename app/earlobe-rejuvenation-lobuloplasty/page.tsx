"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Check, 
  ShieldAlert, 
  Zap, 
  Target, 
  ArrowRight, 
  Activity, 
  Droplets,
  Sparkles,
  Search,
  Scissors,
  Ear
} from "lucide-react"
import Link from "next/link"
import { EarlobeHeroBanner } from "@/components/earBanner"

const treatmentModalities = [
  {
    id: "fillers",
    title: "Hyaluronic Acid",
    subtitle: "Non-Surgical Rejuvenation",
    image: "/ear1.jpeg", // Ensure this exists in public
    description: "For patients experiencing volume loss or mild elongation, hyaluronic acid fillers can delicately restore structure, improve contour, and enhance support for earrings.",
    symptoms: ["Restore lost volume", "Improve lobe contour", "Support for heavy earrings", "Smooth fine lines"],
    approach: "Delicately reinforces weakened tissue and recreates a soft, youthful contour without surgery."
  },
  {
    id: "lobuloplasty",
    title: "Lobuloplasty",
    subtitle: "Precision Minor Surgery",
    image: "/ear4.webp", // Ensure this exists in public
    description: "A minor surgical procedure performed under local anaesthetic to reshape, reduce, and refine earlobes that have become significantly stretched or distorted.",
    symptoms: ["Stretched piercings", "Elongated lobes", "Tissue distortion", "Previous trauma"],
    approach: "Precision removal of excess tissue and reshaping to achieve a Proportionate and harmonious result."
  }
]

export default function EarlobeTreatmentPage() {
  const [activeTab, setActiveTab] = useState(treatmentModalities[0])

  return (
    <main className="bg-white">
      <EarlobeHeroBanner />

      {/* SECTION 1: EDITORIAL HERO */}
      <section className="relative py-16 md:py-24 lg:pt-48 lg:pb-32 bg-[#FAF9F6] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:col-span-7 space-y-6 md:space-y-8 text-center lg:text-left"
            >
              <div className="inline-flex items-center rounded-full px-4 py-1.5 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500 bg-white border border-zinc-200 shadow-sm">
                Facial Aesthetics
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-zinc-900 tracking-tight leading-[1.1]">
                Earlobe <br className="hidden sm:block" />
                <span className="italic font-serif text-zinc-500 font-light">Rejuvenation.</span>
              </h1>
              <p className="text-base md:text-xl text-zinc-500 font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
                The earlobes are a subtle yet defining feature of facial harmony. Over time, they may lose volume, become elongated, or stretch due to ageing, jewellery use, or previous trauma. At Gerka Clinic, we offer advanced aesthetic treatments designed to restore balance, softness, and structural integrity.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2">
                <div className="flex items-center gap-2 text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-zinc-900 border-b-2 border-zinc-900 pb-1">
                  Dublin Clinic
                </div>
                <div className="flex items-center gap-2 text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-zinc-400">
                  Medical Assessment Required
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="lg:col-span-5 relative"
            >
              <div className="aspect-[5/3] sm:aspect-[8/5] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl z-10 relative">
                <img src="/ear.png" alt="Earlobe Consultation" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-zinc-100 rounded-full blur-3xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2: COMMON CONCERNS */}
      <section className="py-16 md:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-400">Clinical Indications</span>
            <h2 className="text-3xl md:text-4xl font-light text-zinc-900">Common Concerns</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { icon: <Droplets size={20} />, text: "Loss of volume and hydration" },
              { icon: <Activity size={20} />, text: "Elongated or stretched lobes" },
              { icon: <Scissors size={20} />, text: "Stretched or torn piercings" },
              { icon: <Target size={20} />, text: "Previous trauma or distortion" },
              { icon: <Sparkles size={20} />, text: "Loss of youthful fullness" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-[1.5rem] bg-zinc-50 border border-zinc-100 flex flex-col items-center text-center space-y-4 hover:shadow-lg transition-all duration-500"
              >
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-zinc-900 shadow-sm">
                  {item.icon}
                </div>
                <p className="text-xs md:text-sm text-zinc-600 font-medium leading-relaxed uppercase tracking-tighter">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: TREATMENT TABS */}
      <section className="py-16 md:py-24 bg-zinc-900 text-white overflow-hidden sm:rounded-[3rem] md:rounded-[4rem]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div className="space-y-8 md:space-y-12">
              <div className="space-y-4 text-center lg:text-left">
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-500">Bespoke Modalities</span>
                <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white">Targeted <span className="italic font-serif text-zinc-400">Pathways.</span></h2>
              </div>

              {/* TABS NAVIGATION */}
              <div className="flex flex-col space-y-3">
                {treatmentModalities.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item)}
                    className={`text-left px-5 py-4 md:px-8 md:py-6 rounded-2xl md:rounded-3xl transition-all duration-500 border flex justify-between items-center group ${
                      activeTab.id === item.id 
                      ? "bg-white border-white text-zinc-900 translate-x-1" 
                      : "bg-transparent border-white/10 text-zinc-500 hover:border-white/30"
                    }`}
                  >
                    <span className="text-base md:text-xl font-medium tracking-tight">{item.title}</span>
                    <ArrowRight className={`w-4 h-4 md:w-5 md:h-5 transition-transform duration-500 ${activeTab.id === item.id ? "translate-x-0" : "-translate-x-4 opacity-0 group-hover:opacity-100"}`} />
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
                  <div className="relative aspect-video rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/10">
                    <img src={activeTab.image} alt={activeTab.title} className="w-full h-full object-cover" />
                  </div>
                  
                  <div className="space-y-6">
                    <h3 className="text-2xl md:text-3xl font-light">{activeTab.subtitle}</h3>
                    <p className="text-zinc-400 text-base md:text-lg font-light leading-relaxed">{activeTab.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                      <div className="space-y-4">
                        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-500">Outcomes</span>
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
                        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-500 block mb-3">Therapeutic Focus</span>
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

      {/* SECTION 4: COMBINATION TREATMENTS */}
      <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto bg-[#FAF9F6] rounded-[2.5rem] md:rounded-[4rem] overflow-hidden border border-zinc-100 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">
            <div className="p-8 md:p-16 lg:p-20 space-y-6 md:space-y-8">
              <div className="space-y-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400">Refined Refinement</span>
                <h2 className="text-3xl md:text-5xl font-light tracking-tight text-zinc-900">
                  Elegant <span className="italic font-serif text-zinc-500">Integrity.</span>
                </h2>
              </div>
              <p className="text-base md:text-lg text-zinc-600 font-light leading-relaxed">
                Our philosophy is centred on subtle refinement—delivering elegant, natural outcomes that enhance the overall aesthetic without appearing overtreated. 
              </p>
              <div className="grid grid-cols-1 gap-4">
                {[
                  "Hyaluronic acid for volume restoration",
                  "Precision lobuloplasty for structural correction",
                  "Personalised aftercare for optimal healing"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-4 py-3 border-b border-zinc-200">
                    <div className="w-5 h-5 rounded-full bg-zinc-900 flex items-center justify-center shrink-0">
                      <Check size={10} className="text-white" />
                    </div>
                    <span className="text-xs md:text-sm text-zinc-800 font-medium tracking-tight uppercase">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative min-h-[300px] md:min-h-[500px]">
              <img src="/ear7.png" alt="Earlobe Results" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: CONSULTATION */}
      <section className="py-16 md:py-24 px-4 sm:px-6 max-w-4xl mx-auto">
        <div className="text-center space-y-8 md:space-y-12">
          <div className="space-y-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-400">Next Steps</span>
            <h2 className="text-2xl md:text-4xl font-light text-zinc-900">Consultation & Medical Assessment</h2>
          </div>
          <div className="flex flex-col items-center gap-6">
            <div className="flex gap-4 max-w-2xl text-center">
              <Search size={24} className="text-zinc-300 shrink-0 hidden md:block" />
              <p className="text-[16px] md:text-[18px] text-zinc-500 font-light leading-relaxed">
                At Gerka Clinic, every treatment begins with a medical assessment to determine the most suitable approach based on your anatomy and aesthetic goals.
              </p>
            </div>
            <div className="pt-4 md:pt-8">
              <Link href="/#contact" className="inline-block w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-zinc-900 text-white px-12 py-5 rounded-full text-[10px] md:text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-zinc-800 transition-all active:scale-95 shadow-xl shadow-zinc-200">
                  Request Assessment
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}