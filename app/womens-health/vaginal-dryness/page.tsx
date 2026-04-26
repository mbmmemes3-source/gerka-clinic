"use client"

import { motion } from "framer-motion"
import { 
  ArrowLeft, 
  Droplets, 
  Stethoscope, 
  ShieldCheck, 
  Sparkles, 
  Zap, 
  Waves, 
  Info, 
  Microscope,
  Target,
  Euro,
  CheckCircle2
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { ServiceSidebar } from "@/components/ServiceSidebar"

const symptoms = [
  "Persistent vaginal dryness",
  "Burning and irritation",
  "Discomfort or pain during intimacy",
  "Urinary symptoms (frequency or urgency)",
  "Thinning of the vaginal lining",
  "Loss of tissue elasticity"
]

const treatmentOptions = [
  { 
    title: "Cellular Matrix (Gynaecology)", 
    desc: "A combination of PRP and Hyaluronic Acid for deep hydration and tissue regeneration.",
    icon: <Sparkles size={18} className="text-zinc-900" />,
    price: "€950"
  },
  { 
    title: "Medical Treatment", 
    desc: "Targeted pharmacological therapy to restore vaginal health and relieve symptoms.",
    icon: <ShieldCheck size={18} className="text-zinc-400" />
  },
  { 
    title: "Radiofrequency (Exilis Ultra Femme®)", 
    desc: "Non-invasive treatment to stimulate collagen production and improve tissue quality.",
    icon: <Zap size={18} className="text-zinc-400" />
  },
  { 
    title: "Laser Therapy", 
    desc: "Advanced technologies to enhance hydration, elasticity and overall vaginal health.",
    icon: <Waves size={18} className="text-zinc-400" />
  }
]

const benefits = [
  "Improved hydration and comfort",
  "Reduced irritation and burning",
  "Enhanced tissue quality and elasticity",
  "Improved intimate wellbeing",
  "Personalised long-term management"
]

export default function VaginalDrynessGSMPage() {
  return (
    <main className="bg-[#FAF9F6] min-h-screen pb-20">
      
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
            activeService="Vaginal Dryness & Genitourinary Syndrome Support" 
            categoryTitle="Women's Health" 
          />

          {/* 3. MAIN CONTENT AREA */}
          <div className="lg:col-span-9 space-y-16 md:space-y-24">
            
            {/* HERO SECTION */}
            <section className="space-y-12">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-light text-zinc-900 tracking-tight leading-tight">
                  Vaginal Dryness & <br />
                  <span className="italic font-serif text-zinc-500 font-light text-3xl md:text-4xl">Genitourinary Syndrome (GSM)</span>
                </h1>
                <div className="flex flex-wrap gap-4 border-b border-zinc-200 pb-8">
                  <span className="text-xs font-bold text-zinc-900 uppercase tracking-widest flex items-center gap-2">
                    <Euro size={14} className="text-zinc-400" /> Cellular Matrix (Gynaecology): €950
                  </span>
                  <span className="text-xs font-bold text-zinc-900 uppercase tracking-widest italic">
                    Medical & Regenerative Care
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                <div className="space-y-6 text-zinc-600 font-light leading-relaxed text-[16px]">
                  <p>
                    Advanced care for vaginal dryness, discomfort and genitourinary syndrome of menopause (GSM). We specialize in restoring the physiological balance of intimate tissues.
                  </p>
                  <p>
                    We combine medical treatment with regenerative and energy-based therapies like <strong>Cellular Matrix</strong> to restore hydration, elasticity and intimate wellbeing, ensuring a comprehensive approach to menopausal health.
                  </p>
                  <p className="text-sm border-l-2 border-zinc-200 pl-4 py-1 italic">
                    Our protocols are designed to address both the clinical symptoms and the impact on your quality of life.
                  </p>
                </div>
                <div className="aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl border-white border-8 relative">
                  <Image 
                    src="/vaginal.jpg" 
                    alt="Vaginal Dryness & GSM Care" 
                    fill 
                    className="object-cover"
                  />
                </div>
              </div>
            </section>

            {/* ABOUT THE CONDITION SECTION */}
            <section className="bg-white rounded-[3rem] p-10 md:p-16 border border-zinc-100 shadow-sm space-y-10">
               <div className="max-w-3xl space-y-6">
                  <h2 className="text-3xl font-light text-zinc-900 uppercase tracking-tight">About the <span className="italic font-serif text-zinc-500 font-light">Condition</span></h2>
                  <div className="space-y-4 text-zinc-500 font-light leading-relaxed">
                    <p>
                      Vaginal dryness and GSM are common conditions related to hormonal changes, especially during menopause. These changes can lead to thinning and inflammation of the vaginal walls.
                    </p>
                    <p>
                      Symptoms may include dryness, burning, irritation, discomfort during intimacy and urinary symptoms. If left unmanaged, these can significantly affect daily comfort and intimate health.
                    </p>
                  </div>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-zinc-50">
                  <div className="flex gap-4">
                     <Droplets size={24} className="text-zinc-300 shrink-0" />
                     <p className="text-sm text-zinc-600 font-light">Addressing moisture loss and mucosal thinning.</p>
                  </div>
                  <div className="flex gap-4">
                     <Stethoscope size={24} className="text-zinc-300 shrink-0" />
                     <p className="text-sm text-zinc-600 font-light">Clinical management of genitourinary symptoms.</p>
                  </div>
               </div>
            </section>

            {/* SYMPTOMS WE TREAT LIST */}
            <section className="space-y-12">
               <h3 className="text-3xl font-light text-zinc-900">Symptoms & <span className="italic font-serif text-zinc-500">Clinical Signs</span></h3>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                  {symptoms.map(item => (
                    <div key={item} className="flex items-center gap-4 py-2 border-b border-zinc-100">
                       <Target size={16} className="text-zinc-300" />
                       <span className="text-sm text-zinc-600 font-light">{item}</span>
                    </div>
                  ))}
               </div>
            </section>

            {/* TREATMENT OPTIONS BENTO GRID */}
            <section className="space-y-12">
               <div className="space-y-4">
                  <h3 className="text-3xl font-light text-zinc-900 uppercase tracking-tight">Our Medical Approach</h3>
                  <p className="text-zinc-500 font-light max-w-2xl">We offer a multi-modal approach to restore tissue health through evidence-based options:</p>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {treatmentOptions.map((item, i) => (
                    <div key={i} className="p-8 bg-white border border-zinc-100 rounded-3xl space-y-3 shadow-sm hover:border-zinc-300 transition-colors">
                       {item.icon}
                       <div className="flex justify-between items-start">
                         <h5 className="text-[13px] font-bold uppercase tracking-widest text-zinc-900">{item.title}</h5>
                         {item.price && <span className="text-[11px] font-bold text-zinc-900">{item.price}</span>}
                       </div>
                       <p className="text-xs text-zinc-500 font-light leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
               </div>
            </section>

            {/* DIAGNOSIS & ASSESSMENT */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Diagnosis Card */}
              <div className="bg-zinc-900 text-white p-12 rounded-[3rem] shadow-xl">
                <h3 className="text-2xl font-light mb-6">Clinical Diagnosis</h3>
                <p className="text-zinc-400 font-light leading-relaxed text-sm mb-6">
                  Assessment includes a specialist consultation and clinical evaluation to identify the underlying cause and tailor the most appropriate treatment plan.
                </p>
                <ul className="space-y-5">
                  {[
                    "Medical history review",
                    "Symptom severity assessment",
                    "Hormonal health evaluation",
                    "Tissue quality examination"
                  ].map((text) => (
                    <li key={text} className="flex items-center gap-4 text-sm text-zinc-400 font-light">
                      <div className="w-1.5 h-1.5 rounded-full bg-white shrink-0" /> {text}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits Card */}
              <div className="bg-[#EAEAE6] p-12 rounded-[3rem] space-y-8">
                <h3 className="text-2xl font-light text-zinc-900 uppercase tracking-tight">Expected Benefits</h3>
                <ul className="space-y-5">
                   {benefits.map((benefit, i) => (
                     <li key={i} className="space-y-1">
                        <div className="flex items-center gap-3">
                           <CheckCircle2 size={16} className="text-zinc-900" />
                           <span className="text-sm font-bold text-zinc-800 uppercase tracking-wider">{benefit}</span>
                        </div>
                     </li>
                   ))}
                </ul>
                <div className="pt-4">
                  <p className="text-xs text-zinc-500 italic">Results are progressive and focus on long-term intimate wellbeing.</p>
                </div>
              </div>
            </section>

            {/* SAFETY BOX */}
            <section className="bg-[#EAEAE6]/50 p-10 rounded-[3rem] space-y-8 border border-zinc-200/50">
               <div className="flex flex-col md:flex-row gap-10 items-center">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-light text-zinc-900">Expert Care & Safety</h3>
                    <p className="text-[15px] text-zinc-500 font-light leading-relaxed">
                      All treatments for GSM and vaginal health are conducted by medical professionals in a safe, clinical environment. We prioritise non-surgical, minimally invasive methods to ensure comfort and recovery.
                    </p>
                  </div>
                  <div className="p-6 bg-white rounded-2xl border border-zinc-200 flex items-center gap-4 min-w-[280px]">
                     <Info className="text-zinc-400 shrink-0" />
                     <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Specialist consultation is mandatory prior to treatment</p>
                  </div>
               </div>
            </section>

            {/* FINAL CTA */}
            <section className="bg-zinc-900 rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl relative overflow-hidden">
              <div className="space-y-3 text-center md:text-left relative z-10">
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-500">Menopause Specialist Care</p>
                <h2 className="text-3xl md:text-4xl font-light text-white leading-tight">Start your wellness journey</h2>
              </div>
              <Link href="/#contact" className="w-full md:w-auto relative z-10">
                <button className="w-full md:w-auto bg-white text-zinc-900 px-12 py-5 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] hover:scale-105 transition-all active:scale-95 shadow-lg">
                  Book Assessment
                </button>
              </Link>
            </section>

          </div>
        </div>
      </div>
    </main>
  )
}