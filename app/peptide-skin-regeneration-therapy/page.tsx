"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Check, 
  ShieldCheck, 
  Zap, 
  Target, 
  ArrowRight, 
  Activity, 
  Droplets,
  Sparkles,
  Heart,
  Dna,
  Clock,
  Search,
  RefreshCw,
  Microscope,
  Layers,
  Sparkle
} from "lucide-react"
import Link from "next/link"
import { PeptideHeroBanner } from "@/components/natural"

const regenerativeModalities = [
  {
    id: "peptides",
    title: "Peptide Therapy™",
    subtitle: "Science-Led Regeneration",
    image: "/pep1.jpg", 
    description: "Utilising GHK-Cu (Copper Peptide) from the Cellgenic range to stimulate collagen and elastin while reducing chronic inflammation.",
    benefits: [
      "Stimulate Collagen & Elastin",
      "Support Skin Repair & Healing",
      "Reduce Inflammation",
      "Improve Firmness & Quality"
    ],
    approach: "Small molecular signals from the Cellgenic system create powerful biological changes."
  },
  {
    id: "standalone",
    title: "Natural Approach",
    subtitle: "Standalone Peptide Care",
    image: "/pep2.jpg",
    description: "For patients seeking a purely natural approach without altering natural facial expressions.",
    benefits: [
      "Natural Texture Improvement",
      "Cellular Hydration",
      "Biological Elasticity",
      "Expression-Safe Results"
    ],
    approach: "Biological messengers communicating directly with your cells for a 100% natural look."
  },
  {
    id: "synergy",
    title: "The Evolution",
    subtitle: "Prep & Synergy",
    image: "/pep3.webp",
    description: "Using peptides before or alongside Botox and fillers to prime the skin and prolong injectable results.",
    benefits: [
      "Prime Skin Quality",
      "Prolong Injectable Results",
      "Support Tissue Recovery",
      "Optimise Long-Term Health"
    ],
    approach: "A balanced approach: Botox for dynamic lines, Peptides for skin quality."
  }
]

export default function NaturalRegenerativePage() {
  const [activeTab, setActiveTab] = useState(regenerativeModalities[0])

  return (
    <main className="bg-white">
      <PeptideHeroBanner />

      {/* SECTION 1: INTRODUCTION - The Philosophy */}
      <section className="relative py-16 md:py-24 lg:pt-48 lg:pb-32 bg-[#FAF9F6] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:col-span-7 space-y-6 md:space-y-8 text-center lg:text-left"
            >
              <div className="inline-flex items-center rounded-full px-4 py-1.5 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500 bg-white border border-zinc-200 shadow-sm">
                Advanced Skin Science
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-zinc-900 tracking-tight leading-[1.1]">
                Peptide Skin <br className="hidden sm:block" />
                <span className="italic font-serif text-zinc-500">Regeneration Therapy™</span>
              </h2>
              <div className="space-y-6 text-base md:text-xl text-zinc-500 font-light leading-relaxed max-w-2xl mx-auto lg:mx-0">
                <p>
                  At Gerka Clinic, we believe that aesthetic medicine is about choosing the right treatment for the right patient, at the right time.
                </p>
                <p>
                  While Botox and fillers remain effective, we offer a science-based, regenerative approach designed to enhance the skin from within at a deeper, cellular level.
                </p>
              </div>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2">
                <div className="flex items-center gap-2 text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-zinc-900 border-b-2 border-zinc-900 pb-1">
                  Science-Based • Autologous • Regenerative
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="lg:col-span-5 relative"
            >
              <div className="aspect-[7/5] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl z-10 relative">
                <img src="/natural.webp" alt="Cellular Regeneration" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-zinc-100 rounded-full blur-3xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE ROLE OF PEPTIDES (GHK-Cu Focus) */}
      <section className="py-20 bg-white border-y border-zinc-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div className="space-y-8">
                <div className="space-y-4">
                  <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-400">Biological Messengers</span>
                  <h2 className="text-3xl md:text-4xl font-light text-zinc-900 leading-tight">The Power of <br /> <span className="italic font-serif">GHK-Cu Peptides.</span></h2>
                </div>
                <p className="text-zinc-500 font-light leading-relaxed text-lg">
                  As reflected in the **Cellgenic concept**, small molecular signals create powerful biological changes. GHK-Cu (Copper Peptide) is the cornerstone of our regenerative treatments.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                   <div className="space-y-2">
                      <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-900">Key Actions</h4>
                      <ul className="space-y-2 text-sm text-zinc-500 font-light">
                        <li className="flex items-center gap-2"><Check size={12}/> Stimulate Collagen & Elastin</li>
                        <li className="flex items-center gap-2"><Check size={12}/> Reduce Inflammation</li>
                        <li className="flex items-center gap-2"><Check size={12}/> Support Repair & Healing</li>
                      </ul>
                   </div>
                   <div className="space-y-2">
                      <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-900">Improvements</h4>
                      <ul className="space-y-2 text-sm text-zinc-500 font-light">
                        <li className="flex items-center gap-2"><Check size={12}/> Texture & Elasticity</li>
                        <li className="flex items-center gap-2"><Check size={12}/> Deep-Level Hydration</li>
                        <li className="flex items-center gap-2"><Check size={12}/> Overall Skin Health</li>
                      </ul>
                   </div>
                </div>
             </div>

             <div className="relative">
                <div className="bg-zinc-50 p-8 md:p-12 rounded-[2.5rem] border border-zinc-100 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 opacity-10"><Microscope size={120}/></div>
                  <h3 className="text-xl font-medium text-zinc-900 mb-6 italic font-serif">Where Therapy Fits:</h3>
                  <div className="space-y-4 relative z-10">
                    {[
                      { t: "Standalone", d: "For patients seeking a purely natural approach." },
                      { t: "Pre-Treatment", d: "Used before Botox/Fillers to improve skin quality." },
                      { t: "Alongside", d: "Enhance and prolong results of injectables." },
                      { t: "Post-Treatment", d: "To support tissue recovery and regeneration." }
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4 items-start">
                        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm text-zinc-900 text-xs font-bold">{i+1}</div>
                        <div>
                          <p className="text-sm font-bold uppercase tracking-widest text-zinc-900">{item.t}</p>
                          <p className="text-xs text-zinc-500 font-light">{item.d}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: PROTOCOLS */}
      <section className="py-16 md:py-24 bg-zinc-900 text-white overflow-hidden sm:rounded-[3rem] md:rounded-[4rem]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div className="space-y-8 md:space-y-12">
              <div className="space-y-4 text-center lg:text-left">
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-500">Advanced Protocols</span>
                <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white">Science <span className="italic font-serif text-zinc-400">In Motion.</span></h2>
                <p className="text-zinc-400 font-light">Personalised combinations from the Cellgenic range.</p>
              </div>

              <div className="flex flex-col space-y-3">
                {regenerativeModalities.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item)}
                    className={`text-left px-5 py-4 md:px-8 md:py-6 rounded-xl md:rounded-2xl transition-all duration-500 border flex justify-between items-center group ${
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
                        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-500">Biological Impact</span>
                        <ul className="grid grid-cols-1 gap-2">
                          {activeTab.benefits.map(b => (
                            <li key={b} className="flex items-start gap-3 text-sm text-zinc-300 font-light">
                              <div className="w-1 h-1 rounded-full bg-zinc-500 mt-1.5 shrink-0" /> 
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="p-5 md:p-6 rounded-2xl md:rounded-3xl bg-zinc-800 border border-white/5">
                        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-500 block mb-3">Therapeutic Philosophy</span>
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

      {/* SECTION 4: BALANCED APPROACH BENTO */}
      <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto bg-[#FAF9F6] rounded-[2.5rem] md:rounded-[4rem] overflow-hidden border border-zinc-100 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">
            <div className="p-8 md:p-16 lg:p-20 space-y-6 md:space-y-8">
              <div className="space-y-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400">Evolutionary Aesthetics</span>
                <h2 className="text-3xl md:text-5xl font-light tracking-tight text-zinc-900">
                  A Balanced <span className="italic font-serif text-zinc-500">Approach.</span>
                </h2>
              </div>
              <p className="text-base md:text-lg text-zinc-600 font-light leading-relaxed italic">
                "It is not about choosing one over another—it is about the right combination. Botox for dynamic lines, Peptides for skin quality."
              </p>
              <div className="grid grid-cols-1 gap-4">
                {[
                  "Standalone natural approach",
                  "Before injectables to improve tissue base",
                  "Alongside injectables to prolong results",
                  "After treatments to support regeneration"
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
            <div className="relative min-h-[400px]">
              <img src="/regen.png" alt="Synergy of Botox and Peptides" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-zinc-900/10" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: WHO & EXPECTATIONS GRID */}
      <section className="py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* COLUMN 1 */}
            <div className="space-y-6">
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-400">Who Is This For?</span>
              <h3 className="text-3xl font-light text-zinc-900">Target Audience</h3>
              <ul className="space-y-4">
                {[
                  "Patients who prefer natural results",
                  "Individuals already having Botox",
                  "Patients new to aesthetic medicine",
                  "Focus on long-term skin health",
                  "Prevention rather than correction"
                ].map(item => (
                  <li key={item} className="flex gap-3 items-center text-sm text-zinc-600">
                    <Sparkle size={12} className="text-zinc-400" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* COLUMN 2 */}
            <div className="space-y-6">
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-400">Clinical Focus</span>
              <h3 className="text-3xl font-light text-zinc-900">What It Improves</h3>
              <ul className="space-y-4">
                {[
                  "Fine lines & early ageing",
                  "Skin texture & dullness",
                  "Biological elasticity",
                  "Structural firmness",
                  "Cellular-level hydration"
                ].map(item => (
                  <li key={item} className="flex gap-3 items-center text-sm text-zinc-600">
                    <Target size={12} className="text-zinc-400" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* COLUMN 3 */}
            <div className="space-y-6">
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-400">Patient Experience</span>
              <h3 className="text-3xl font-light text-zinc-900">The Journey</h3>
              <ul className="space-y-4">
                {[
                  "Minimal discomfort",
                  "No aggressive procedures",
                  "Zero downtime or recovery",
                  "Personalised protocols",
                  "Gradual improvement over weeks"
                ].map(item => (
                  <li key={item} className="flex gap-3 items-center text-sm text-zinc-600">
                    <Clock size={12} className="text-zinc-400" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: WHY GERKA CLINIC & CTA */}
      <section className="py-16 md:py-32 px-4 sm:px-6 max-w-5xl mx-auto text-center border-t border-zinc-100">
        <div className="space-y-12">
          <div className="space-y-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-400">The Gerka Difference</span>
            <h2 className="text-3xl md:text-5xl font-light text-zinc-900 leading-tight">Evidence-Based Medicine. <br />Balance & <span className="italic font-serif text-zinc-500">Precision.</span></h2>
            <p className="text-base md:text-xl text-zinc-500 font-light leading-relaxed max-w-3xl mx-auto">
              Aesthetic medicine is not about trends—it is about balance, precision and long-term results. We combine advanced regenerative technology with a personalised and ethical approach.
            </p>
          </div>
          
          <div className="pt-6">
            <Link href="/#contact" className="inline-block w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-zinc-900 text-white px-10 py-5 rounded-full text-[10px] md:text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-zinc-800 transition-all active:scale-95 shadow-xl shadow-zinc-200">
                Book Your Consultation
              </button>
            </Link>
          </div>

          <div className="pt-12 flex justify-center gap-8">
            <div className="flex items-center gap-2">
              <ShieldCheck size={14} className="text-zinc-300" />
              <span className="text-[9px] font-black uppercase tracking-widest text-zinc-400">Ethical Standards</span>
            </div>
            <div className="flex items-center gap-2">
              <Microscope size={14} className="text-zinc-300" />
              <span className="text-[9px] font-black uppercase tracking-widest text-zinc-400">Science-Led</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}