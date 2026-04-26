"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Check, 
  ShieldAlert, 
  Target, 
  ArrowRight, 
  Droplets,
  Sparkles,
  Wind,
  Stethoscope,
  RefreshCw,
  Zap,
  Waves,
  HeartPulse
} from "lucide-react"
import Link from "next/link"
import { HydraFacialHeroBanner } from "@/components/hydraBanner"

// Steps of the HydraFacial Scalp Protocol
const scalpModalities = [
  {
    id: "cleansing",
    title: "Step 01",
    subtitle: "Cleansing & Exfoliation",
    image: "/scalp1.jpg", 
    description: "The scalp is gently exfoliated using vortex technology to remove dead skin cells, residue, and deep-seated impurities that standard washing cannot reach.",
    benefits: [
      "Remove surface dead skin cells",
      "Purify the scalp surface",
      "Decongest follicular openings",
      "Refresh dull, heavy-feeling hair"
    ],
    approach: "Mechanical and chemical exfoliation to reset the scalp's natural balance."
  },
  {
    id: "extraction",
    title: "Step 02",
    subtitle: "Deep Extraction & Detox",
    image: "/scalp2.jpg", 
    description: "Using painless suction, excess oil, debris, and stubborn product build-up are lifted from the scalp and follicular openings.",
    benefits: [
      "Clear clogged hair follicles",
      "Reduce excess sebum (oil)",
      "Eliminate product residue",
      "Improve scalp breathability"
    ],
    approach: "Deep-tissue suction to eliminate biological and environmental blockages."
  },
  {
    id: "hydration",
    title: "Step 03",
    subtitle: "Hydration & Nourishment",
    image: "/hy.png", 
    description: "Specialised HydraFacial serums are delivered directly into the scalp to deeply hydrate, soothe, and rebalance the skin.",
    benefits: [
      "Infuse active nutrients",
      "Deeply hydrate dry scalp",
      "Calm itchiness and irritation",
      "Balance the scalp microbiome"
    ],
    approach: "Direct infusion of biostimulatory compounds for immediate relief."
  },
  {
    id: "revitalisation",
    title: "Step 04",
    subtitle: "Scalp Revitalisation",
    image: "/scalp3.webp", 
    description: "The final step leaves the scalp cleaner and fresher, providing the ideal foundation for hair growth and ongoing care.",
    benefits: [
      "Enhanced scalp vitality",
      "Improved hair environment",
      "Prepares scalp for growth serums",
      "Lighter, fresher sensation"
    ],
    approach: "Creating a healthy biological environment for stronger hair growth."
  }
]

export default function HydraFacialScalpPage() {
  const [activeTab, setActiveTab] = useState(scalpModalities[0])

  return (
    <main className="bg-white">
        <HydraFacialHeroBanner/>
      {/* SECTION 1: HERO INTRO */}
      <section className="relative py-16 md:py-24 lg:pt-48 lg:pb-32 bg-[#FAF9F6] overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:col-span-7 space-y-6 md:space-y-8 text-center lg:text-left"
            >
              <div className="inline-flex items-center rounded-full px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500 bg-white border border-zinc-200 shadow-sm">
                Clinical Scalp Detox
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-zinc-900 tracking-tight leading-[1.1]">
                HydraFacial <br className="hidden sm:block" />
                <span className="italic font-serif text-zinc-500 font-light">Scalp Therapy.</span>
              </h1>
              <div className="space-y-4 text-sm md:text-[17px] text-zinc-500 font-light leading-relaxed max-w-2xl mx-auto lg:mx-0">
                <p>
                  Advanced scalp cleansing and hydration for a healthier hair environment.
                </p>
                <p>
                  At Gerka Clinic, HydraFacial Scalp is an advanced treatment designed to deeply cleanse, exfoliate and hydrate the scalp, helping to create the ideal environment for healthier-looking hair.
                </p>
              </div>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2">
                <div className="text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-zinc-900 border-b-2 border-zinc-900 pb-1">
                  Foundation For Hair Health
                </div>
                <div className="text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-zinc-400">
                  Non-Invasive Vortex Technology
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-5 relative"
            >
              <div className="aspect-[4/3] sm:aspect-[16/9] lg:aspect-[7/5] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl z-10 relative">
                <img src="/hydra2.jpg" alt="HydraFacial Scalp Treatment" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-zinc-200/50 rounded-full blur-3xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2: SUITABILITY */}
      <section className="py-16 md:py-24 px-5 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div className="space-y-6">
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-400">Clinical Suitability</span>
              <h2 className="text-3xl md:text-4xl font-light text-zinc-900 leading-tight">
                Is this treatment <br /> right for <span className="italic font-serif text-zinc-500">you?</span>
              </h2>
              <p className="text-zinc-500 font-light leading-relaxed max-w-xl">
                A healthy scalp is an essential foundation for stronger, healthier-looking hair. A consultation is recommended before treatment to assess scalp condition and suitability.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               {[
                 { icon: <Wind size={18}/>, text: "Oily & Congested Scalp" },
                 { icon: <Droplets size={18}/>, text: "Dry & Flaky Scalp" },
                 { icon: <RefreshCw size={18}/>, text: "Clogged Hair Follicles" },
                 { icon: <Zap size={18}/>, text: "Product Build-up & Residue" }
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

      {/* SECTION 3: TREATMENT MODALITIES (TABS) */}
      <section className="py-16 md:py-24 bg-zinc-900 text-white overflow-hidden md:rounded-[3rem]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div className="space-y-8">
              <div className="space-y-4 text-center lg:text-left">
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-500">Protocol Steps</span>
                <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white">How the <span className="italic font-serif text-zinc-400">Treatment Works.</span></h2>
              </div>

              <div className="flex flex-col space-y-2">
                {scalpModalities.map((modal) => (
                  <button
                    key={modal.id}
                    onClick={() => setActiveTab(modal)}
                    className={`text-left px-5 py-4 md:px-8 md:py-6 rounded-xl md:rounded-2xl transition-all duration-500 border flex justify-between items-center group ${
                      activeTab.id === modal.id 
                      ? "bg-white border-white text-zinc-900 translate-x-0 md:translate-x-2" 
                      : "bg-transparent border-white/10 text-zinc-500 hover:border-white/30"
                    }`}
                  >
                    <span className="text-sm md:text-xl font-medium tracking-tight">{modal.subtitle}</span>
                    <ArrowRight className={`w-4 h-4 transition-transform duration-500 ${activeTab.id === modal.id ? "translate-x-0" : "-translate-x-4 opacity-0"}`} />
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
                    <img src={activeTab.image} alt={activeTab.subtitle} className="w-full h-full object-cover" />
                  </div>
                  
                  <div className="space-y-6">
                    <h3 className="text-2xl md:text-3xl font-light">{activeTab.subtitle}</h3>
                    <p className="text-zinc-400 text-sm md:text-lg font-light leading-relaxed">{activeTab.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                      <div className="space-y-4">
                        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-500">Key Benefits</span>
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

      {/* SECTION 4: THINNING SUPPORT & AFTERCARE */}
      <section className="py-16 md:py-24 lg:py-32 px-5 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Hair Thinning Info */}
            <div className="bg-[#FAF9F6] p-8 md:p-12 rounded-[2.5rem] space-y-8">
              <h3 className="text-2xl md:text-3xl font-light text-zinc-900">Hair Thinning Support</h3>
              <p className="text-zinc-500 font-light text-sm md:text-base leading-relaxed">
                HydraFacial Scalp is not a cure for hair loss, but it is an essential supportive treatment. By improving scalp hydration and condition, it optimises the environment for healthier growth.
              </p>
              <div className="grid grid-cols-1 gap-4">
                {[
                  "Standalone scalp reset",
                  "Supportive part of a wider hair restoration protocol",
                  "Optimises medical hair treatments",
                  "Refreshing, non-invasive experience"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 py-3 border-b border-zinc-200 last:border-0">
                    <Sparkles size={16} className="text-zinc-400" />
                    <span className="text-sm md:text-base text-zinc-700 font-light">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Aftercare */}
            <div className="bg-zinc-50 border border-zinc-100 p-8 md:p-12 rounded-[2.5rem] space-y-8">
               <h3 className="text-2xl md:text-3xl font-light text-zinc-900">Patient Aftercare</h3>
               <p className="text-zinc-500 font-light text-sm md:text-base leading-relaxed">
                 To maintain the results of your scalp revitalisation, we advise the following guidelines:
               </p>
               <div className="space-y-4">
                  {[
                    "Keep the scalp clean and free of product for 24h",
                    "Avoid harsh products for a short period",
                    "Follow personalised care advice from your clinician",
                    "Maintain your recommended restoration plan"
                  ].map((text, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-zinc-900 mt-2" />
                      <span className="text-xs md:text-sm font-medium uppercase tracking-widest text-zinc-800">{text}</span>
                    </div>
                  ))}
               </div>
               <p className="text-xs italic text-zinc-400 pt-4 border-t border-zinc-100">
                 Downtime is minimal to none; most patients feel cleaner and lighter immediately.
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: FINAL CTA */}
      <section className="py-16 md:py-32 px-5 sm:px-8 max-w-5xl mx-auto text-center">
        <div className="space-y-12">
          <div className="space-y-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-400">The Gerka Clinic Choice</span>
            <h2 className="text-3xl md:text-5xl font-light text-zinc-900 leading-tight">Advanced Scalp Health</h2>
            <p className="text-base md:text-xl text-zinc-500 font-light leading-relaxed max-w-3xl mx-auto">
              We combine advanced technology with professional assessment to offer treatments tailored to each patient’s individual hair and scalp needs.
            </p>
          </div>
          
          <div className="pt-6">
            <Link href="/#contact" className="inline-block w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-zinc-900 text-white px-10 py-5 rounded-full text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-zinc-800 transition-all active:scale-95 shadow-xl shadow-zinc-200">
                Book Scalp Consultation
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
              <span className="text-[9px] font-black uppercase tracking-widest text-zinc-400">Personalised Care</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}