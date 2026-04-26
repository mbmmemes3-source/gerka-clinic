"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Check, 
  ShieldAlert, 
  Target, 
  ArrowRight, 
  Activity, 
  Droplets,
  Sparkles,
  Search,
  TestTube,
  Stethoscope,
  Wind,
  Euro
} from "lucide-react"
import Link from "next/link"
import { HairHeroBanner } from "@/components/hairBanner"

const hairTreatments = [
  {
    id: "prp",
    title: "PRP",
    subtitle: "Platelet-Rich Plasma",
    price: "€350",
    image: "/prp.webp",
    description: "The procedure uses the patient’s own plasma, which is rich in growth factors, to stimulate dormant hair follicles and improve scalp vascularisation.",
    benefits: [
      "Stimulate hair follicle activity",
      "Improve hair density and thickness",
      "Reduce hair shedding",
      "Support hair regrowth in early-stage hair loss"
    ],
    approach: "A natural regenerative treatment using concentrated growth factors from your own blood."
  },
  {
    id: "dutasteride",
    title: "Dutasteride",
    subtitle: "DHT Blocking Injections",
    price: "€350",
    image: "/dht.avif",
    description: "Micro-injections of dutasteride into the scalp are used to block the hormone DHT (dihydrotestosterone), which plays a key role in androgenetic alopecia.",
    benefits: [
      "Block local DHT activity at follicle level",
      "Slow the progression of hair loss",
      "Support stronger hair growth",
      "Targeted clinical delivery"
    ],
    approach: "Reducing local hormonal activity to protect follicles from progressive thinning."
  },
  {
    id: "vitamins",
    title: "Nutrient Complexes",
    subtitle: "Scalp Nutrition",
    price: "€350",
    image: "/scalp.jpg",
    description: "Specialised vitamin and nutrient scalp injections designed to nourish hair follicles and strengthen hair growth.",
    benefits: [
      "Essential vitamins & amino acids",
      "Minerals and trace elements",
      "Biostimulatory compounds",
      "Enhanced scalp vitality"
    ],
    approach: "Often combined with PRP or dutasteride as part of a comprehensive restoration protocol."
  }
]

export default function HairLossTreatmentPage() {
  const [activeTab, setActiveTab] = useState(hairTreatments[0])

  return (
    <main className="bg-white">
      <HairHeroBanner />

      {/* SECTION 1: MAIN CONTENT INTRO */}
      <section className="relative py-16 md:py-24 lg:pt-48 lg:pb-32 bg-[#FAF9F6] overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:col-span-7 space-y-6 md:space-y-8 text-center lg:text-left"
            >
              <div className="inline-flex items-center rounded-full px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500 bg-white border border-zinc-200 shadow-sm">
                Regenerative Therapy
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-zinc-900 tracking-tight leading-[1.1]">
                Hair Loss <br className="hidden sm:block" />
                <span className="italic font-serif text-zinc-500 font-light">Treatments.</span>
              </h1>
              <div className="space-y-4 text-sm md:text-lg text-zinc-500 font-light leading-relaxed max-w-2xl mx-auto lg:mx-0">
                <p>
                  Hair loss affects both men and women and may result from factors including genetics, hormonal changes, stress, ageing, or nutritional deficiencies.
                </p>
                <p>
                  At Gerka Clinic, we offer advanced regenerative treatments designed to support medical therapies, particularly in cases of androgenetic alopecia.
                </p>
              </div>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2">
                <div className="text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-zinc-900 border-b-2 border-zinc-900 pb-1">
                  Dublin Clinic
                </div>
                <div className="text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-zinc-400">
                  Clinical Consultation Required
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-5 relative"
            >
              <div className="aspect-[4/3] sm:aspect-[16/9] lg:aspect-[7/5] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl z-10 relative border-8 border-white">
                <img src="/hair.webp" alt="Regenerative Hair Restoration" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-zinc-200/50 rounded-full blur-3xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2: MEDICAL ASSESSMENT */}
      <section className="py-16 md:py-24 px-5 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div className="space-y-6">
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-400">Step 01: Diagnostics</span>
              <h2 className="text-3xl md:text-4xl font-light text-zinc-900 leading-tight">
                Medical Assessment <br /> & <span className="italic font-serif text-zinc-500">Blood Tests</span>
              </h2>
              <p className="text-zinc-500 font-light leading-relaxed max-w-xl">
                Before initiating treatments, a medical assessment is performed to identify possible underlying causes. When clinically indicated, blood tests evaluate factors influencing hair health.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               {[
                 { icon: <Activity size={18}/>, text: "Hormonal Imbalances" },
                 { icon: <Target size={18}/>, text: "Iron & Nutritional Deficiencies" },
                 { icon: <Search size={18}/>, text: "Thyroid Disorders" },
                 { icon: <TestTube size={18}/>, text: "Metabolic or Systemic Conditions" }
               ].map((item, i) => (
                 <div key={i} className="p-6 rounded-2xl bg-[#FAF9F6] border border-zinc-100 flex items-center gap-4">
                    <div className="text-zinc-900 shrink-0">{item.icon}</div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-600 leading-tight">{item.text}</span>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: TREATMENT MODALITIES TABS (WITH PRICING) */}
      <section className="py-16 md:py-24 bg-zinc-900 text-white overflow-hidden md:rounded-[3rem]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div className="space-y-8">
              <div className="space-y-4 text-center lg:text-left">
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-500">Advanced Protocols</span>
                <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white">Hair Restoration <span className="italic font-serif text-zinc-400">Modalities.</span></h2>
              </div>

              <div className="flex flex-col space-y-2">
                {hairTreatments.map((condition) => (
                  <button
                    key={condition.id}
                    onClick={() => setActiveTab(condition)}
                    className={`text-left px-5 py-4 md:px-8 md:py-6 rounded-xl md:rounded-2xl transition-all duration-500 border flex justify-between items-center group ${
                      activeTab.id === condition.id 
                      ? "bg-white border-white text-zinc-900 translate-x-0 md:translate-x-2" 
                      : "bg-transparent border-white/10 text-zinc-500 hover:border-white/30"
                    }`}
                  >
                    <div className="flex flex-col">
                       <span className="text-sm md:text-xl font-medium tracking-tight">{condition.title}</span>
                       <span className={`text-[10px] uppercase tracking-widest font-bold mt-1 ${activeTab.id === condition.id ? "text-zinc-400" : "text-zinc-600"}`}>
                         {condition.price} per session
                       </span>
                    </div>
                    <ArrowRight className={`w-4 h-4 transition-transform duration-500 ${activeTab.id === condition.id ? "translate-x-0" : "-translate-x-4 opacity-0"}`} />
                  </button>
                ))}
              </div>
            </div>

            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-8 md:space-y-10"
                >
                  <div className="relative aspect-video lg:aspect-video rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/5">
                    <img src={activeTab.image} alt={activeTab.title} className="w-full h-full object-cover" />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-zinc-900 px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
                       <Euro size={14} className="text-zinc-400" />
                       <span className="text-xs font-bold uppercase tracking-widest">{activeTab.price}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <h3 className="text-2xl md:text-3xl font-light">{activeTab.subtitle}</h3>
                    <p className="text-zinc-400 text-sm md:text-lg font-light leading-relaxed">{activeTab.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                      <div className="space-y-4">
                        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-500">How it helps</span>
                        <ul className="space-y-2">
                          {activeTab.benefits.map(s => (
                            <li key={s} className="flex items-start gap-3 text-xs md:text-sm text-zinc-300 font-light">
                              <div className="w-1 h-1 rounded-full bg-zinc-500 mt-2 shrink-0" /> 
                              <span>{s}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="p-6 rounded-2xl bg-zinc-800 border border-white/5">
                        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-500 block mb-3">Clinical Goal</span>
                        <p className="text-xs md:text-sm text-zinc-400 font-light italic leading-relaxed">{activeTab.approach}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: WHO CAN BENEFIT & TREATMENT PLAN */}
      <section className="py-16 md:py-24 lg:py-32 px-5 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            <div className="bg-[#FAF9F6] p-8 md:p-12 rounded-[2.5rem] space-y-8">
              <h3 className="text-2xl md:text-3xl font-light text-zinc-900">Who Can Benefit?</h3>
              <div className="grid grid-cols-1 gap-4">
                {[
                  "Androgenetic Alopecia (male or female pattern)",
                  "Progressive Hair Thinning",
                  "Hair shedding (hormonal or stress related)",
                  "Weakened Hair Structure",
                  "Reduced Hair Density"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 py-3 border-b border-zinc-200 last:border-0">
                    <Check size={16} className="text-zinc-400" />
                    <span className="text-sm md:text-base text-zinc-700 font-light">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-zinc-50 border border-zinc-100 p-8 md:p-12 rounded-[2.5rem] space-y-8">
               <h3 className="text-2xl md:text-3xl font-light text-zinc-900">The Treatment Plan</h3>
               <p className="text-zinc-500 font-light text-sm md:text-base leading-relaxed">
                 Therapies are performed as a series of sessions. All primary restoration treatments are standardised at <strong>€350 per session</strong>. Combined protocols may include:
               </p>
               <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-900" />
                    <span className="text-xs font-bold uppercase tracking-widest text-zinc-800">PRP hair therapy</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-900" />
                    <span className="text-xs font-bold uppercase tracking-widest text-zinc-800">Dutasteride blocking injections</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-900" />
                    <span className="text-xs font-bold uppercase tracking-widest text-zinc-800">Nutrient biostimulation</span>
                  </div>
               </div>
               <p className="text-xs italic text-zinc-400 pt-4 border-t border-zinc-100">
                 A course of 3–6 sessions is typically recommended to see optimal density results.
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: FINAL CTA */}
      <section className="py-16 md:py-32 px-5 sm:px-8 max-w-5xl mx-auto text-center">
        <div className="space-y-12">
          <div className="space-y-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-400">The Gerka Method</span>
            <h2 className="text-3xl md:text-5xl font-light text-zinc-900 leading-tight">Natural & Sustainable Results</h2>
            <p className="text-base md:text-xl text-zinc-500 font-light leading-relaxed max-w-3xl mx-auto">
              Our goal is not only to address hair loss but also to improve the overall health of the scalp and hair follicles, combining regenerative medicine with evidence-based protocols.
            </p>
          </div>
          
          <div className="pt-6">
            <Link href="/#contact" className="inline-block w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-zinc-900 text-white px-10 py-5 rounded-full text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-zinc-800 transition-all active:scale-95 shadow-xl shadow-zinc-200">
                Book Hair Assessment
              </button>
            </Link>
          </div>

          <div className="pt-12 flex justify-center gap-8 border-t border-zinc-100">
            <div className="flex items-center gap-2">
              <ShieldAlert size={14} className="text-zinc-300" />
              <span className="text-[9px] font-black uppercase tracking-widest text-zinc-400">Clinical Safety</span>
            </div>
            <div className="flex items-center gap-2">
              <Stethoscope size={14} className="text-zinc-300" />
              <span className="text-[9px] font-black uppercase tracking-widest text-zinc-400">Medical Assessment Mandatory</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}