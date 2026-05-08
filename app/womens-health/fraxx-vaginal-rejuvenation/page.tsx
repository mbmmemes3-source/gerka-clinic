"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  ArrowLeft, 
  ShieldCheck, 
  Zap, 
  Activity, 
  Droplets, 
  Sparkles, 
  CheckCircle2, 
  ChevronRight, 
  Info, 
  Stethoscope, 
  UserCheck, 
  Target,
  Waves,
  Euro,
  ArrowRight
} from "lucide-react"
import Link from "next/link"
import { ServiceSidebar } from "@/components/ServiceSidebar"

const treatmentPathways = [
  {
    id: "mechanism",
    title: "How it Works",
    subtitle: "Thermal Remodelling",
    image: "/fraxx2.png", // Clinical RF visualization
    description: "Fraxx™ delivers advanced radiofrequency energy into the vaginal canal, creating controlled thermal stimulation to the deeper tissue layers.",
    benefits: [
      "Stimulate new collagen & elastin",
      "Contract and tighten internal tissue",
      "Improve mucosal hydration",
      "Increase localized blood circulation"
    ],
    approach: "A focus on regenerating and strengthening the tissue naturally for progressive functional improvement."
  },
  {
    id: "comparison",
    title: "Fraxx vs CO2",
    subtitle: "The Gentler Choice",
    image: "/fraxx3.jpg",
    description: "While CO2 lasers are ablative and aggressive, many women prefer Fraxx™ RF technology for its comfort and lack of clinical downtime.",
    benefits: [
      "Non-ablative (gentler on tissue)",
      "Minimal to no downtime",
      "Highly comfortable sensation",
      "Safe for delicate intimate skin"
    ],
    approach: "Effective rejuvenation without the discomfort or recovery period associated with traditional lasers."
  },
  {
    id: "experience",
    title: "The Experience",
    subtitle: "In-Clinic Protocol",
    image: "/fraxx4.jpg",
    description: "The procedure is quick, well-tolerated, and performed by our specialists in a calm, professional clinical environment.",
    benefits: [
      "20–40 minute session time",
      "Gentle 'internal warmth' sensation",
      "No anaesthesia required",
      "Immediate return to daily life"
    ],
    approach: "Designed for the modern woman who seeks clinical results without interrupting her lifestyle."
  }
]

const conditions = [
  "Genitourinary Syndrome of Menopause (GSM)",
  "Vaginal dryness & thinning",
  "Discomfort during intimacy",
  "Mild vaginal laxity",
  "Early urinary leakage or urgency",
  "Postpartum vaginal relaxation",
  "Vulvovaginal atrophy"
]

export default function FraxxServicePage() {
  const [activeTab, setActiveTab] = useState(treatmentPathways[0])

  return (
    <main className="bg-white">
      
      {/* 1. TOP NAVIGATION */}
      <div className="pt-32 pb-8 px-6 md:px-10 max-w-7xl mx-auto">
        <Link href="/" className="group inline-flex items-center gap-2 text-zinc-400 hover:text-zinc-900 transition-colors">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Back to women's health</span>
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* 2. REUSABLE SIDEBAR */}
          <ServiceSidebar 
            activeService="Fraxx™ Vaginal Rejuvenation" 
            categoryTitle="Women's Health" 
          />

          {/* 3. MAIN CONTENT AREA */}
          <div className="lg:col-span-9 space-y-16 md:space-y-24 pb-20">
            
            {/* HERO SECTION */}
            <section className="space-y-12">
              <div className="space-y-6">
                <motion.div 
                   initial={{ opacity: 0, y: 10 }}
                   animate={{ opacity: 1, y: 0 }}
                   className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 text-white text-[9px] font-bold uppercase tracking-[0.2em]"
                >
                  <Zap size={12} className="text-zinc-400" /> Advanced Radiofrequency
                </motion.div>
                <h1 className="text-4xl md:text-6xl font-light text-zinc-900 tracking-tight leading-tight">
                  Fraxx™ Rejuvenation <br />
                  <span className="italic font-serif text-zinc-500 font-light text-3xl md:text-5xl">& GSM Treatment</span>
                </h1>
                <div className="flex flex-wrap gap-4 border-b border-zinc-200 pb-8">
                  <span className="text-xs font-bold text-zinc-900 uppercase tracking-widest flex items-center gap-2">
                    <ShieldCheck size={14} className="text-zinc-400" /> Non-Surgical
                  </span>
                  <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest italic border-l border-zinc-200 pl-4">
                    Clinical GSM Restoration
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                <div className="space-y-6 text-zinc-600 font-light leading-relaxed text-[17px]">
                  <p>
                    At Gerka Clinic, we offer advanced non-surgical intimate rejuvenation using innovative radiofrequency technology — an energy-based treatment designed to restore and tighten vaginal tissue without the downtime associated with CO2 lasers.
                  </p>
                  <p>
                    Fraxx™ uses controlled energy to gently heat deeper tissues, stimulating <span className="text-zinc-900 font-medium italic underline decoration-zinc-200 underline-offset-4">natural collagen remodelling</span>. This approach focuses on long-term tissue health and women’s intimate wellbeing across every stage of life.
                  </p>
                </div>
                <div className="aspect-[7/5] rounded-[3.5rem] overflow-hidden shadow-2xl border-white border-8 relative">
                  <img src="/fraxx.jpg" alt="Intimate Wellness Consultation" className="w-full h-full object-cover" />
                </div>
              </div>
            </section>

            {/* WHAT WE TREAT: CONDITIONS GRID */}
            <section className="bg-[#FAF9F6] rounded-[3rem] p-10 md:p-16 border border-zinc-100 shadow-sm space-y-12">
               <div className="max-w-2xl space-y-4">
                  <h2 className="text-3xl font-light text-zinc-900 uppercase tracking-tight">Clinical Indications</h2>
                  <p className="text-zinc-500 font-light">Fraxx™ is designed to improve symptoms related to vaginal ageing and laxity:</p>
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                  {conditions.map(item => (
                    <div key={item} className="flex items-center gap-4 py-2 border-b border-zinc-200/50">
                       <Target size={16} className="text-zinc-300" />
                       <span className="text-sm text-zinc-600 font-light">{item}</span>
                    </div>
                  ))}
               </div>
            </section>

            {/* INTERACTIVE PATHWAYS SECTION */}
            <section className="py-12">
               <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
                  <div className="lg:col-span-4 flex flex-col space-y-3">
                     <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-400 mb-4 ml-1">The Clinical Logic</span>
                     {treatmentPathways.map((path) => (
                        <button
                           key={path.id}
                           onClick={() => setActiveTab(path)}
                           className={`text-left px-6 py-5 rounded-2xl transition-all duration-500 border flex justify-between items-center group ${
                              activeTab.id === path.id 
                              ? "bg-zinc-900 border-zinc-900 text-white shadow-xl translate-x-2" 
                              : "bg-white border-zinc-100 text-zinc-400 hover:border-zinc-300"
                           }`}
                        >
                           <span className="text-base font-medium tracking-tight">{path.title}</span>
                           <ArrowRight className={`w-4 h-4 transition-transform duration-500 ${activeTab.id === path.id ? "translate-x-0" : "-translate-x-4 opacity-0"}`} />
                        </button>
                     ))}
                  </div>

                  <div className="lg:col-span-8">
                     <AnimatePresence mode="wait">
                        <motion.div
                           key={activeTab.id}
                           initial={{ opacity: 0, x: 20 }}
                           animate={{ opacity: 1, x: 0 }}
                           exit={{ opacity: 0, x: -20 }}
                           transition={{ duration: 0.4 }}
                           className="space-y-8"
                        >
                           <div className="aspect-video rounded-[2.5rem] overflow-hidden shadow-xl border border-zinc-100">
                              <img src={activeTab.image} alt={activeTab.title} className="w-full h-full object-cover" />
                           </div>
                           <div className="space-y-6">
                              <h3 className="text-2xl md:text-3xl font-light text-zinc-900">{activeTab.subtitle}</h3>
                              <p className="text-zinc-500 text-lg font-light leading-relaxed">{activeTab.description}</p>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                 <ul className="space-y-3">
                                    {activeTab.benefits.map(b => (
                                       <li key={b} className="flex items-center gap-3 text-sm text-zinc-600 font-light">
                                          <CheckCircle2 size={16} className="text-emerald-500" /> {b}
                                       </li>
                                    ))}
                                 </ul>
                                 <div className="p-6 bg-zinc-50 rounded-2xl border border-zinc-100 italic text-zinc-500 text-sm font-light leading-relaxed">
                                    <span className="font-bold uppercase tracking-widest text-[9px] block mb-2 text-zinc-400">Gerka Strategy</span>
                                    {activeTab.approach}
                                 </div>
                              </div>
                           </div>
                        </motion.div>
                     </AnimatePresence>
                  </div>
               </div>
            </section>

            {/* PERSONALISED APPROACH: BENTO STYLE */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="bg-zinc-900 text-white p-12 rounded-[3.5rem] space-y-8 shadow-xl relative overflow-hidden flex flex-col justify-between">
                  <div className="space-y-6 relative z-10">
                     <h3 className="text-2xl md:text-3xl font-light leading-tight">
                        Tailored <br/><span className="italic font-serif text-zinc-400">Combination Plans</span>
                     </h3>
                     <p className="text-zinc-400 font-light leading-relaxed text-sm">
                        To optimize clinical outcomes, Fraxx™ therapy may be combined with our other regenerative protocols:
                     </p>
                     <ul className="space-y-4 pt-4">
                        {[
                           "PRP (Platelet-Rich Plasma) treatments",
                           "Cellular Matrix (Regen Lab) protocols",
                           "BTL Emsella® Pelvic Floor therapy",
                           "Hormonal support & functional guidance"
                        ].map(text => (
                           <li key={text} className="flex items-center gap-3 text-xs uppercase tracking-widest font-bold text-zinc-200">
                              <div className="w-1.5 h-1.5 rounded-full bg-zinc-500" /> {text}
                           </li>
                        ))}
                     </ul>
                  </div>
                  <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white/5 blur-3xl rounded-full" />
               </div>

               <div className="bg-white border border-zinc-200 p-12 rounded-[3.5rem] space-y-8 flex flex-col justify-center shadow-sm">
                  <div className="space-y-6">
                     <div className="w-12 h-12 rounded-full bg-[#FAF9F6] flex items-center justify-center border border-zinc-100">
                        <UserCheck size={20} className="text-zinc-900" />
                     </div>
                     <h3 className="text-2xl font-light text-zinc-900 tracking-tight leading-tight">Is this treatment right for you?</h3>
                     <p className="text-zinc-500 font-light text-sm leading-relaxed">
                        Fraxx™ is particularly effective for women in menopause or perimenopause, as well as postpartum women seeking to restore internal tissue structure and comfort.
                     </p>
                  </div>
                  <div className="p-5 bg-zinc-50 rounded-2xl border border-zinc-100 flex items-center gap-4">
                     <Info className="text-zinc-400" />
                     <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Medical assessment is mandatory before treatment.</p>
                  </div>
               </div>
            </section>

            {/* FINAL CTA */}
            <section className="bg-zinc-900 rounded-[3rem] p-10 md:p-20 flex flex-col items-center text-center space-y-8 shadow-2xl relative overflow-hidden">
              <div className="space-y-3 relative z-10">
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-500">Intimate Restoration</p>
                <h2 className="text-3xl md:text-5xl font-light text-white leading-tight uppercase tracking-tight">Restore tissue health <br/> naturally</h2>
                <p className="text-zinc-400 text-sm font-light max-w-lg mx-auto leading-relaxed">
                  Book a consultation to assess suitability and discuss your intimate health goals with our specialists.
                </p>
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