"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Clock, Euro, CheckCircle2, ShieldCheck, Zap, Target, Info, ChevronRight, Calendar, Activity } from "lucide-react"
import Link from "next/link"
import { ServiceSidebar } from "@/components/ServiceSidebar"

const treatableAreas = [
  "Abdomen",
  "Arms",
  "Inner thighs",
  "Outer thighs",
  "Knees",
  "Buttocks",
  "Back of arms (bat wings)",
  "Flanks",
  "Post-baby tummy"
]

const exilisFaqs = [
  {
    q: "Does Exilis hurt?",
    a: "No — it feels warm and comfortable. Most clients describe it as a relaxing massage."
  },
  {
    q: "How soon will I see results?",
    a: "Some improvement is visible after the first 2-3 sessions. Full results develop over several weeks."
  },
  {
    q: "Can I combine Exilis with fat reduction?",
    a: "Yes — it pairs extremely well with Vanquish or fat dissolving injections for enhanced contouring."
  },
  {
    q: "Is there downtime?",
    a: "None. You can return to normal activities immediately."
  }
]

export default function ExilisBodyPage() {
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
            activeService="Exilis Body Skin Tightening" 
            categoryTitle="Body Treatments" 
          />

          {/* 3. MAIN CONTENT */}
          <div className="lg:col-span-9 space-y-16 md:space-y-24">
            
            {/* HERO SECTION */}
            <section className="space-y-12">
              <div className="space-y-8">
                <h1 className="text-4xl md:text-5xl font-light text-zinc-900 tracking-tight leading-tight">
                  Exilis Body <br />
                  <span className="italic font-serif text-zinc-500 font-light">Skin Tightening</span>
                </h1>
                
                {/* DYNAMIC PRICING BANNER */}
                <div className="flex flex-wrap gap-y-6 gap-x-8 border-b border-zinc-200 pb-10">
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest text-nowrap">Abdomen Session</span>
                    <span className="text-sm font-bold text-zinc-900 flex items-center gap-2">
                      <Euro size={14} className="text-zinc-400" /> €190
                    </span>
                    <span className="text-xs font-medium text-zinc-500 italic">Package of 3: €450</span>
                  </div>

                  <div className="flex flex-col gap-1 border-l border-zinc-200 pl-8">
                    <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest text-nowrap">Legs & Other Areas</span>
                    <span className="text-sm font-bold text-zinc-900 flex items-center gap-2">
                      <Calendar size={14} className="text-zinc-400" /> Consultation Required
                    </span>
                    <span className="text-xs font-medium text-zinc-500 italic">Price TBC upon assessment</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                <div className="space-y-6 text-zinc-600 font-light leading-relaxed text-[16px]">
                  <h3 className="text-2xl font-light text-zinc-900">What Is Exilis Body Skin Tightening?</h3>
                  <p>
                    Exilis Body Skin Tightening is an advanced non-invasive radiofrequency treatment designed to firm, lift and smooth loose or crepey skin on the body. It works by delivering controlled heat deep into the dermis, stimulating collagen and elastin production for a visibly tighter and more youthful appearance.
                  </p>
                  <p>
                    Ideal for areas affected by ageing, weight changes or postpartum laxity, Exilis offers a comfortable treatment with effective results and no downtime. At Gerka Clinic Dublin, we tailor the depth of energy delivery to match the specific needs of your skin.
                  </p>
                </div>
                <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-white border-8">
                  <img src="/exilis.webp" alt="Exilis Body Treatment" className="w-full h-full object-cover" />
                </div>
              </div>
            </section>

            {/* MECHANISM SECTION */}
            <section className="bg-white rounded-[3rem] p-10 md:p-16 border border-zinc-100 shadow-sm space-y-12">
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-8">
                     <h2 className="text-3xl font-light text-zinc-900">How Does <span className="italic font-serif text-zinc-500">Exilis Work?</span></h2>
                     <p className="text-zinc-500 font-light leading-relaxed">
                        Exilis uses monopolar radiofrequency combined with precise temperature control to heat the deeper layers of the skin. This thermal energy triggers <span className="text-zinc-900 font-medium">immediate collagen contraction</span> while signalling the body to produce high-quality new elastin.
                     </p>
                     <div className="space-y-4 pt-4 border-t border-zinc-50">
                        <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">Clinical results include:</p>
                        <ul className="space-y-3">
                           {["Smoother skin texture", "Improved tissue firmness", "Reduced skin crepiness", "Refined body contours"].map(item => (
                             <li key={item} className="text-sm text-zinc-600 flex gap-3 font-light">
                                <span className="text-zinc-900">▪</span> {item}
                             </li>
                           ))}
                        </ul>
                     </div>
                  </div>
                  <div className="p-8 bg-zinc-50 rounded-[2.5rem] border border-zinc-100 space-y-6">
                     <div className="flex flex-col gap-2">
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400">Patient Experience</span>
                        <h4 className="text-xl font-medium text-zinc-900">Therapeutic Comfort</h4>
                     </div>
                     <p className="text-sm text-zinc-500 font-light leading-relaxed">
                        Treatments are completely non-invasive and feel like a warm, relaxing massage with constant clinical monitoring for safety.
                     </p>
                     <Zap size={32} className="text-zinc-200" />
                  </div>
               </div>
            </section>

            {/* AREAS TREATED SECTION */}
            <section className="space-y-12">
               <div className="space-y-4">
                  <h3 className="text-3xl font-light text-zinc-900 uppercase tracking-tight">Areas of Focus</h3>
                  <p className="text-zinc-500 font-light">Exilis Body is suitable for clinical tightening on:</p>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-12">
                  {treatableAreas.map(area => (
                    <div key={area} className="flex items-center gap-3 py-3 border-b border-zinc-100">
                       <Target size={16} className="text-zinc-300" />
                       <span className="text-[13px] text-zinc-700 font-light uppercase tracking-wide">{area}</span>
                    </div>
                  ))}
               </div>
            </section>

            {/* BENTO GRID: BENEFITS & SUITABILITY */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-zinc-900 text-white p-12 rounded-[3rem] space-y-8 shadow-xl">
                <h3 className="text-2xl font-light">Clinical Benefits</h3>
                <ul className="space-y-4">
                  {[
                    "Visible skin lifting and firming",
                    "Reduction in abdominal laxity",
                    "Improved elasticity after weight shifts",
                    "Enhanced post-childbirth recovery",
                    "Comfortable treatment environment",
                    "No surgery or downtime required",
                    "Progressive improvement over months"
                  ].map((text) => (
                    <li key={text} className="flex items-start gap-4 text-sm text-zinc-400 font-light leading-relaxed">
                      <CheckCircle2 size={18} className="text-zinc-100 shrink-0" /> {text}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#EAEAE6] p-12 rounded-[3rem] space-y-8">
                <div className="space-y-4">
                   <h3 className="text-2xl font-light text-zinc-900">Who is it for?</h3>
                   <p className="text-sm text-zinc-600 font-light italic">Ideal candidates include those with:</p>
                </div>
                <ul className="space-y-4">
                   {[
                     "Mild to moderate skin laxity",
                     "Postpartum abdominal skin concerns",
                     "Loose skin following weight loss",
                     "Crepey or thin skin on arms or knees",
                     "Preference for non-surgical rejuvenation"
                   ].map(text => (
                     <li key={text} className="text-sm text-zinc-700 flex gap-3 items-start">
                        <div className="w-1.5 h-1.5 rounded-full bg-zinc-400 shrink-0 mt-1.5" /> 
                        <span className="font-light">{text}</span>
                     </li>
                   ))}
                </ul>
                <div className="pt-6 border-t border-zinc-200">
                   <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Treatment Interval</p>
                   <p className="text-sm text-zinc-800 font-medium mt-1">Optimal results with 4–6 sessions.</p>
                </div>
              </div>
            </section>

            {/* FAQs */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 pt-16 border-t border-zinc-200">
               <div className="space-y-8">
                  <div className="space-y-2">
                     <h3 className="text-2xl font-light text-zinc-900 uppercase tracking-tight">Clinical Protocol</h3>
                     <p className="text-xs text-zinc-400 font-bold uppercase tracking-widest">Protocol Details:</p>
                  </div>
                  <p className="text-[17px] text-zinc-500 font-light leading-relaxed">
                    A standard clinical course consists of <span className="font-semibold text-zinc-900">4–6 sessions</span>, spaced roughly 1 week apart. While we offer a 3-session starter package for the abdomen (€450), full results are best evaluated 8–12 weeks after the final session.
                  </p>
                  <div className="flex items-center gap-3 p-4 bg-white border border-zinc-100 rounded-2xl w-fit">
                    <Clock size={18} className="text-zinc-400" />
                    <span className="text-xs font-bold uppercase tracking-widest text-zinc-900">Sessions Every 7 Days</span>
                  </div>
               </div>

               <div className="space-y-10">
                  <h3 className="text-2xl font-light text-zinc-900">Patient FAQs</h3>
                  <div className="space-y-8">
                     {exilisFaqs.map((faq, i) => (
                       <div key={i} className="space-y-2">
                          <h4 className="text-[13px] font-bold uppercase tracking-widest text-zinc-900 flex gap-3">
                             <span className="text-zinc-300 font-serif">{i + 1}.</span> {faq.q}
                          </h4>
                          <p className="text-[15px] text-zinc-500 font-light leading-relaxed pl-7 italic">
                             {faq.a}
                          </p>
                       </div>
                     ))}
                  </div>
               </div>
            </section>

            {/* FINAL CTA */}
            <section className="bg-zinc-900 rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl relative overflow-hidden">
              <div className="space-y-3 text-center md:text-left relative z-10">
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-500">Restore Your Radiance</p>
                <h2 className="text-3xl md:text-4xl font-light text-white leading-tight">Book your body assessment</h2>
              </div>
              <Link href="/#contact" className="w-full md:w-auto relative z-10">
                <button className="w-full md:w-auto bg-white text-zinc-900 px-12 py-5 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] hover:scale-105 transition-all active:scale-95 shadow-lg">
                  Check Availability
                </button>
              </Link>
            </section>

          </div>
        </div>
      </div>
    </main>
  )
}