"use client"

import { ServiceSidebar } from "@/components/ServiceSidebar"
import { ArrowLeft, Clock, Euro, CheckCircle2, Calendar, Info } from "lucide-react"
import Link from "next/link"
const faceAreas = [
  "Jawline tightening", 
  "Lower-face contouring", 
  "Cheek lifting and firming", 
  "Fine lines and superficial wrinkles", 
  "Mid-face rejuvenation"
]

const neckAreas = [
  "Skin laxity", 
  "Horizontal lines", 
  "Crepey texture"
]
export default function ExilisServicePage() {
  return (
    <main className="bg-[#FAF9F6] min-h-screen pb-20">
      <div className="pt-32 pb-8 px-6 md:px-10 max-w-7xl mx-auto">
        <Link href="/" className="group inline-flex items-center gap-2 text-zinc-400 hover:text-zinc-900 transition-colors">
          <ArrowLeft size={16} />
          <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Back to services</span>
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* REUSABLE SIDEBAR HERE */}
          <ServiceSidebar 
            activeService="Exilis® Radiofrequency Facial Tightening" 
            categoryTitle="Face Treatments" 
          />

          {/* MAIN CONTENT AREA */}
          <div className="lg:col-span-9 space-y-16 md:space-y-24">
            
            {/* HERO SECTION - Intro Text */}
            <section className="space-y-12">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-light text-zinc-900 tracking-tight leading-tight">
                  Exilis® Radiofrequency <br />
                  <span className="italic font-serif text-zinc-500">Facial Tightening</span>
                </h1>
                <div className="flex flex-wrap gap-4 border-b border-zinc-200 pb-8">
                  <span className="bg-white border border-zinc-100 px-4 py-2 rounded-full text-[11px] font-bold text-zinc-600 uppercase tracking-widest flex items-center gap-2">
                    <Euro size={14} /> Full face & neck: €220 | Full Face: €150
                  </span>
                  <span className="bg-white border border-zinc-100 px-4 py-2 rounded-full text-[11px] font-bold text-zinc-600 uppercase tracking-widest flex items-center gap-2">
                    <Clock size={14} /> 45 min
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                <div className="space-y-6 text-zinc-600 font-light leading-relaxed text-[16px]">
                  <p>
                    At Gerka Clinic, we offer Exilis®, a non-invasive radiofrequency and ultrasound treatment designed to tighten skin, enhance facial contours, and improve overall texture. Exilis® gently heats the deeper layers of the skin, stimulating collagen and elastin for smoother, firmer, and more lifted results.
                  </p>
                  <p>
                    This treatment is ideal for patients experiencing mild to moderate skin laxity, early signs of ageing, or loss of definition in the lower face. It provides noticeable rejuvenation without injections, downtime, or discomfort. The sensation is warm and controlled, making it a comfortable experience for most patients.
                  </p>
                  <p>
                    During your consultation, our practitioner will assess your skin and recommend a tailored treatment plan usually a course of 3–6 sessions spaced 10–15 days. Results continue to improve over several weeks as new collagen forms and the skin remodels.
                  </p>
                </div>
                <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
                  <img src="/exilis1.webp" alt="Exilis Treatment Application" className="w-full h-full object-cover" />
                </div>
              </div>
            </section>

            {/* DIAGRAM SECTION - Areas We Treat */}
            <section className="bg-white rounded-[3rem] p-8 md:p-16 shadow-sm border border-zinc-100">
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-8">
                     <h2 className="text-3xl font-light text-zinc-900 leading-tight">Areas We Treat <br/><span className="italic font-serif text-zinc-500">with Exilis® Radiofrequency</span></h2>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="space-y-4">
                           <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-400">Face</h4>
                           <ul className="space-y-3">
                              {faceAreas.map(item => (
                                 <li key={item} className="text-sm text-zinc-600 flex items-center gap-2 font-light">
                                    <div className="w-1 h-1 rounded-full bg-zinc-300" /> {item}
                                 </li>
                              ))}
                           </ul>
                        </div>
                        <div className="space-y-4">
                           <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-400">Neck</h4>
                           <ul className="space-y-3">
                              {neckAreas.map(item => (
                                 <li key={item} className="text-sm text-zinc-600 flex items-center gap-2 font-light">
                                    <div className="w-1 h-1 rounded-full bg-zinc-300" /> {item}
                                 </li>
                              ))}
                           </ul>
                        </div>
                     </div>
                  </div>
                  <div className="relative aspect-square">
                     <img src="/exilis2.webp" alt="Facial Areas Diagram" className="w-full h-full object-contain" />
                  </div>
               </div>
            </section>

            {/* RESULTS GALLERY - Before & After */}
            <section className="space-y-10">
               <div className="space-y-4">
                  <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-400">Clinical Case Studies</span>
                  <h2 className="text-3xl font-light text-zinc-900 italic font-serif">Visible Transformation</h2>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative rounded-[2.5rem] overflow-hidden shadow-lg aspect-square">
                     <img src="/exilis3.webp" alt="Before treatment" className="w-full h-full object-cover" />
                     <div className="absolute top-6 left-6 bg-black/40 backdrop-blur-md px-4 py-1 rounded-full text-[10px] text-white uppercase tracking-widest">Before</div>
                  </div>
                  <div className="relative rounded-[2.5rem] overflow-hidden shadow-lg aspect-square">
                     <img src="/exilis4.webp" alt="After treatment" className="w-full h-full object-cover" />
                     <div className="absolute top-6 left-6 bg-zinc-900/80 backdrop-blur-md px-4 py-1 rounded-full text-[10px] text-white uppercase tracking-widest">After 6 Sessions</div>
                  </div>
               </div>
            </section>

            {/* BENTO GRID - Why Choose Us & Results List */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-zinc-900 text-white p-10 rounded-[3rem] space-y-8">
                <h3 className="text-2xl font-light">Why Choose <br /> Gerka Clinic?</h3>
                <ul className="space-y-4">
                  {[
                    "Advanced practitioners experienced in non-invasive skin tightening",
                    "Personalised treatment plans for natural, progressive improvement",
                    "FDA-approved radiofrequency technology",
                    "Zero downtime and comfortable sessions",
                    "Comprehensive aftercare and skin maintenance advice"
                  ].map((text) => (
                    <li key={text} className="flex items-start gap-4 text-sm text-zinc-400 font-light leading-relaxed">
                      <CheckCircle2 size={18} className="text-zinc-100 shrink-0" /> {text}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white border border-zinc-100 p-10 rounded-[3rem] space-y-8 shadow-sm">
                <h3 className="text-2xl font-light text-zinc-900">Clinical Results</h3>
                <ul className="space-y-3">
                  {[
                    "Gradual skin improvement",
                    "Increased hydration",
                    "Smoother skin texture",
                    "Healthy, natural glow",
                    "Results visible within week",
                    "Maintenance treatments may be advised"
                  ].map((text) => (
                    <li key={text} className="flex items-center gap-3 text-sm text-zinc-500 font-light">
                      <div className="w-1 h-1 rounded-full bg-zinc-300" /> {text}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* AFTERCARE & PROTOCOL */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="bg-[#EAEAE6] p-10 rounded-[2.5rem] space-y-4">
                  <h4 className="text-xl font-medium text-zinc-900">Protocol</h4>
                  <p className="text-sm text-zinc-600 font-light leading-relaxed">
                    A typical course consists of 3–6 sessions spaced 10–15 days apart. Results continue to improve over several weeks as new collagen forms.
                  </p>
               </div>
               <div className="bg-[#EAEAE6] p-10 rounded-[2.5rem] space-y-4">
                  <h4 className="text-xl font-medium text-zinc-900 flex items-center gap-2">
                    Aftercare <Info size={16} className="text-zinc-400" />
                  </h4>
                  <ul className="space-y-3">
                    <li className="text-sm text-zinc-600 font-light flex gap-2">
                       <span className="font-bold">•</span> Avoid exercise for 24 hours
                    </li>
                    <li className="text-sm text-zinc-600 font-light flex gap-2">
                       <span className="font-bold">•</span> Avoid heat and sun exposure
                    </li>
                  </ul>
               </div>
            </section>

            {/* FINAL CTA */}
            <section className="bg-white border border-zinc-100 rounded-[3rem] p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
              <div className="text-center md:text-left space-y-2">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400">Ready For The Experience?</p>
                <h2 className="text-3xl font-light text-zinc-900 leading-tight">Book your consultation</h2>
              </div>
              <Link href="/#contact" className="w-full md:w-auto">
                <button className="w-full md:w-auto bg-zinc-900 text-white px-10 py-5 rounded-full flex items-center justify-center gap-3 hover:bg-zinc-800 transition-all active:scale-95 shadow-xl shadow-zinc-200 group">
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em]">Check Availability</span>
                  <Calendar size={16} className="group-hover:rotate-12 transition-transform" />
                </button>
              </Link>
            </section>

          </div>
        </div>
      </div>
    </main>
  )
}