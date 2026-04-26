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
  Layers,
  Search
} from "lucide-react"
import Link from "next/link"
import { HandHeroBanner } from "@/components/handsBanner"

const handTreatments = [
  {
    id: "peels",
    title: "Medical Peels",
    subtitle: "Pigmentation Treatment",
    image: "/pigm.jpg", // Ensure this exists
    description: "Chemical peels help remove damaged superficial skin layers and stimulate skin renewal. Peels can be customised depending on the degree of pigmentation and skin sensitivity.",
    symptoms: ["Reduction of sun spots", "Brighter skin tone", "More even skin tone", "Improved skin texture"],
    approach: "A clinical resurfacing technique designed to lift damaged cells and promote a smoother, brighter appearance."
  },
  {
    id: "laser",
    title: "Laser Therapy",
    subtitle: "Melanin Targeting",
    image: "/laser.png",
    description: "Laser therapy targets melanin deposits in the skin and helps break down pigmented lesions such as sun spots and age spots. Several sessions may be required depending on depth.",
    symptoms: ["Solar lentigines", "Sun damage", "Uneven pigmentation", "Accumulated melanin"],
    approach: "Non-invasive light energy shattering melanin deposits to significantly improve discoloration."
  },
  {
    id: "meso",
    title: "Mesotherapy",
    subtitle: "Hydration & Quality",
    image: "/meso.jpg",
    description: "Mesotherapy involves micro-injections of vitamins, antioxidants and skin-boosting ingredients to restore a healthier and more luminous skin appearance.",
    symptoms: ["Deep hydration", "Improved skin quality", "Stimulation of collagen", "Healthier luminosity"],
    approach: "Direct delivery of nutrient-rich 'cocktails' into the dermis for long-lasting structural improvement."
  },
  {
    id: "ha",
    title: "Hyaluronic Acid",
    subtitle: "Volume Restoration",
    image: "/filler.jpg",
    description: "Hyaluronic acid fillers can restore lost volume and improve skin hydration, resulting in smoother, fuller and younger-looking hands.",
    symptoms: ["Reduce visibility of veins", "Reduce visibility of tendons", "Restore soft tissue volume", "Improve skin elasticity"],
    approach: "Precision injections to fill hollow areas and provide internal support to the thin skin of the hands."
  }
]

export default function HandTreatmentPage() {
  const [activeTab, setActiveTab] = useState(handTreatments[0])

  return (
    <main className="bg-white">
      <HandHeroBanner />

      {/* SECTION 1: EDITORIAL HERO (Using your Intro Data) */}
      <section className="relative py-16 md:py-24 lg:pt-48 lg:pb-32 bg-[#FAF9F6] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:col-span-7 space-y-6 md:space-y-8 text-center lg:text-left"
            >
              <div className="inline-flex items-center rounded-full px-4 py-1.5 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500 bg-white border border-zinc-200 shadow-sm">
                Aesthetic Excellence
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-light text-zinc-900 tracking-tight leading-[1.1]">
                Hand Rejuvenation <br className="hidden sm:block" />
                <span className="italic font-serif text-zinc-500 font-light">Treatments.</span>
              </h1>
              <p className="text-base md:text-xl text-zinc-500 font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
                The hands are one of the first areas to show signs of ageing. Over time, sun exposure, pigmentation changes and loss of skin hydration or volume can make the hands appear older than the face.
 At Gerka Clinic, we offer advanced aesthetic treatments designed to improve the quality, colour and structure of the skin.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2">
                <div className="flex items-center gap-2 text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-zinc-900 border-b-2 border-zinc-900 pb-1">
                  Gerka Clinic Dublin
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
                <img src="/hand.jpg" alt="Hand Rejuvenation Intro" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-zinc-100 rounded-full blur-3xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2: COMMON CONCERNS (Your Specific Concerns List) */}
      <section className="py-16 md:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-400">Clinical Focus</span>
            <h2 className="text-3xl md:text-4xl font-light text-zinc-900">Common Concerns</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { icon: <Target size={20} />, text: "Sun spots and pigmentation" },
              { icon: <Zap size={20} />, text: "Uneven skin tone" },
              { icon: <Droplets size={20} />, text: "Loss of hydration and elasticity" },
              { icon: <Activity size={20} />, text: "Visible veins and tendons" },
              { icon: <Sparkles size={20} />, text: "Thin or crepey skin" }
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

      {/* SECTION 3: TREATMENT TABS (Strict Data Breakdown) */}
      <section className="py-16 md:py-24 bg-zinc-900 text-white overflow-hidden sm:rounded-[3rem] md:rounded-[4rem]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div className="space-y-8 md:space-y-12">
              <div className="space-y-4 text-center lg:text-left">
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-500">Therapeutic Modalities</span>
                <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white">Targeted <span className="italic font-serif text-zinc-400">Pathways.</span></h2>
              </div>

              <div className="flex flex-col space-y-3">
                {handTreatments.map((condition) => (
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
                        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-500">Key Benefits</span>
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
                        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-500 block mb-3">Clinical Method</span>
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

      {/* SECTION 4: COMBINATION TREATMENTS (Your Combination Data) */}
      <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto bg-[#FAF9F6] rounded-[2.5rem] md:rounded-[4rem] overflow-hidden border border-zinc-100 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">
            <div className="p-8 md:p-16 lg:p-20 space-y-6 md:space-y-8">
              <div className="space-y-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400">Personalised Protocols</span>
                <h2 className="text-3xl md:text-5xl font-light tracking-tight text-zinc-900">
                  Combination <span className="italic font-serif text-zinc-500">Treatments.</span>
                </h2>
              </div>
              <p className="text-base md:text-lg text-zinc-600 font-light leading-relaxed">
                For optimal results, treatments can be combined into a personalised plan to address pigmentation, texture, and volume simultaneously.
              </p>
              <div className="grid grid-cols-1 gap-4">
                {[
                  "Laser or peel for pigmentation",
                  "Mesotherapy for skin quality",
                  "Hyaluronic acid for volume restoration"
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
              <img src="/com.jpg" alt="Combined Hand Therapy" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: CONSULTATION (Your Final Section) */}
      <section className="py-16 md:py-24 px-4 sm:px-6 max-w-4xl mx-auto">
        <div className="text-center space-y-8 md:space-y-12">
          <div className="space-y-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400">Next Steps</span>
            <h2 className="text-2xl md:text-4xl font-light text-zinc-900">Consultation & Medical Assessment</h2>
          </div>
          <div className="flex flex-col items-center gap-6">
            <div className="flex gap-4 max-w-2xl text-center">
              <Search size={24} className="text-zinc-300 shrink-0 hidden md:block" />
              <p className="text-[16px] md:text-[18px] text-zinc-500 font-light leading-relaxed">
                At Gerka Clinic, every treatment begins with a medical assessment to determine the most suitable approach based on your skin type and aesthetic goals.
              </p>
            </div>
            <div className="pt-4 md:pt-8">
              <Link href="/#contact" className="inline-block w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-zinc-900 text-white px-12 py-5 rounded-full text-[10px] md:text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-zinc-800 transition-all active:scale-95 shadow-xl shadow-zinc-200">
                  Book Your Assessment
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}