"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Clock, Euro, CheckCircle2, ShieldCheck, Zap, Target, Info, ChevronRight, Beaker } from "lucide-react"
import Link from "next/link"
import { ServiceSidebar } from "@/components/ServiceSidebar"

const treatmentAreas = [
  "Abdomen (upper or lower belly fat)",
  "Waist and flanks",
  "Back rolls",
  "Arms (bat wings)",
  "Inner thighs",
  "Outer thighs",
  "Hips",
  "Bra line fat",
  "Knees",
  "Chin and jawline (DesoFace)"
]

const steps = [
  { title: "Assessment", desc: "A thorough medical assessment of the localised fat pockets." },
  { title: "Mapping", desc: "Precise mapping of the treatment area for symmetrical results." },
  { title: "Application", desc: "A series of precise injections into the fat layer." },
  { title: "Reaction", desc: "Mild swelling is expected for 24–72 hours." },
  { title: "Reduction", desc: "Progressive fat reduction occurs over 4–6 weeks." }
]

const desoFaqs = [
  {
    q: "Does the treatment hurt?",
    a: "Mild discomfort or heat sensation may occur. Numbing can be used to ensure patient comfort."
  },
  {
    q: "When will I see results?",
    a: "Visible improvement appears after 4–6 weeks, continuing as the body clears fat cells."
  },
  {
    q: "What side effects should I expect?",
    a: "Swelling, redness and tenderness for 1–3 days are normal and expected."
  },
  {
    q: "Can fat return?",
    a: "Destroyed fat cells do not return, but weight gain can enlarge remaining cells."
  }
]

export default function DesoBodyServicePage() {
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
            activeService="Fat Reduction – DesoBody Injectables" 
            categoryTitle="Body Treatments" 
          />

          {/* 3. MAIN CONTENT */}
          <div className="lg:col-span-9 space-y-16 md:space-y-24">
            
            {/* HERO SECTION */}
            <section className="space-y-12">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-light text-zinc-900 tracking-tight leading-tight">
                  Fat Reduction – <br />
                  <span className="italic font-serif text-zinc-500">DesoBody Injectables</span>
                </h1>
                <div className="flex flex-wrap gap-4 border-b border-zinc-200 pb-8">
                  <span className="text-xs font-bold text-zinc-900 uppercase tracking-widest flex items-center gap-2">
                    <Euro size={14} className="text-zinc-400" /> Clinical Assessment Required
                  </span>
                  <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest italic">
                    Medical Fat-Dissolving Treatment
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                <div className="space-y-6 text-zinc-600 font-light leading-relaxed text-[16px]">
                  <h3 className="text-2xl font-light text-zinc-900">What Are DesoBody Injectables?</h3>
                  <p>
                    DesoBody is a medical fat-dissolving injectable designed to reduce stubborn pockets of fat that do not respond to diet or exercise. It works by breaking down fat cell membranes, allowing the body to naturally eliminate them over time.
                  </p>
                  <p>
                    This treatment is ideal for clients seeking non-surgical body contouring with minimal downtime and gradual, natural-looking results.
                  </p>
                  <div className="bg-[#EAEAE6]/50 p-6 rounded-2xl border border-zinc-200">
                    <p className="text-sm italic text-zinc-600">
                      Note: It is not a solution for weight loss. It is a contouring treatment.
                    </p>
                  </div>
                </div>
                <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
                  {/* Image showing the grid mapping and injection from your screenshot */}
                  <img src="/body1.webp" alt="DesoBody Mapping and Injection" className="w-full h-full object-cover" />
                </div>
              </div>
            </section>

            {/* TECHNOLOGY SECTION: HOW IT WORKS */}
            <section className="bg-white rounded-[3rem] p-10 md:p-16 border border-zinc-100 shadow-sm">
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-8">
                     <h2 className="text-3xl font-light text-zinc-900">How Does <span className="italic font-serif text-zinc-500">DesoBody Work?</span></h2>
                     <p className="text-zinc-500 font-light leading-relaxed">
                        DesoBody contains a compound that disrupts the membrane of fat cells through a process called <span className="text-zinc-900 font-medium">adipocytolysis</span>. After the fat cells break down, the body metabolises them naturally over several weeks.
                     </p>
                     <div className="flex items-center gap-4 p-4 bg-zinc-50 rounded-2xl border border-zinc-100 w-fit">
                        <Beaker className="text-zinc-400" size={24} />
                        <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Scientifically Formulated Compound</span>
                     </div>
                  </div>
                  <div className="relative aspect-video rounded-[2rem] overflow-hidden shadow-lg">
                     {/* Visual representation of the treatment area from your screenshot */}
                     <img src="/body2.webp" alt="DesoBody Adipocytolysis Process" className="w-full h-full object-cover" />
                  </div>
               </div>
            </section>

            {/* AREAS TREATED LIST */}
            <section className="space-y-12">
               <div className="space-y-4">
                  <h3 className="text-3xl font-light text-zinc-900">Areas That <span className="italic font-serif text-zinc-500">Can Be Treated</span></h3>
                  <p className="text-zinc-500 font-light">DesoBody is suitable for most localised fat pockets:</p>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-12">
                  {treatmentAreas.map(area => (
                    <div key={area} className="flex items-center gap-3 py-3 border-b border-zinc-100">
                       <Target size={16} className="text-zinc-300" />
                       <span className="text-[13px] text-zinc-700 font-light uppercase tracking-wide">{area}</span>
                    </div>
                  ))}
               </div>
            </section>

            {/* THE PROCESS (1-5) */}
            <section className="space-y-12">
               <h3 className="text-3xl font-light text-zinc-900">The Clinical <span className="italic font-serif text-zinc-500">Journey</span></h3>
               <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                  {steps.map((step, i) => (
                    <div key={i} className="space-y-4 p-6 bg-white border border-zinc-100 rounded-3xl relative">
                       <span className="text-4xl font-serif italic text-zinc-100 absolute top-4 right-4">{i+1}</span>
                       <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-900 relative z-10">{step.title}</h4>
                       <p className="text-xs text-zinc-500 font-light leading-relaxed relative z-10">{step.desc}</p>
                    </div>
                  ))}
               </div>
            </section>

            {/* BENTO GRID: BENEFITS & SUITABILITY */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-zinc-900 text-white p-12 rounded-[3rem] space-y-8">
                <h3 className="text-2xl font-light">Benefits of DesoBody</h3>
                <ul className="space-y-4">
                  {[
                    "Reduces stubborn body fat",
                    "Sculpts and contours key areas",
                    "Minimally invasive",
                    "No surgery, no scars",
                    "Gradual and natural results",
                    "Suitable for multiple body zones",
                    "Safe with minimal downtime"
                  ].map((text) => (
                    <li key={text} className="flex items-start gap-4 text-sm text-zinc-400 font-light">
                      <CheckCircle2 size={18} className="text-zinc-100 shrink-0" /> {text}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#EAEAE6] p-12 rounded-[3rem] space-y-8">
                <div className="space-y-4">
                   <h3 className="text-2xl font-light text-zinc-900">Who Is Suitable?</h3>
                   <p className="text-sm text-zinc-600 font-light leading-relaxed">
                     DesoBody is ideal for clients with localised fat pockets near their ideal weight but needing contouring.
                   </p>
                </div>
                <ul className="space-y-4">
                   {[
                     "Clients with localised fat pockets",
                     "Near ideal weight needing contouring",
                     "Post-pregnancy stubborn areas",
                     "Areas resistant to gym or dieting",
                     "People wanting non-surgical fat reduction"
                   ].map(text => (
                     <li key={text} className="text-sm text-zinc-700 flex gap-3 items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-zinc-400 shrink-0" /> {text}
                     </li>
                   ))}
                </ul>
              </div>
            </section>

            {/* TREATMENT COURSE & FAQs */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 pt-16 border-t border-zinc-200">
               <div className="space-y-8">
                  <div className="space-y-2">
                     <h3 className="text-2xl font-light text-zinc-900 uppercase tracking-tight">Treatment Course</h3>
                     <p className="text-xs text-zinc-400 font-bold uppercase tracking-widest">Typical Clinical Protocol:</p>
                  </div>
                  <div className="space-y-6">
                    {[
                      "2-4 sessions per area",
                      "Spaced 4-6 weeks apart",
                      "Results improving progressively over several weeks"
                    ].map(text => (
                      <div key={text} className="flex items-center gap-4">
                         <div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-900 text-xs font-bold shadow-sm">▪</div>
                         <p className="text-sm text-zinc-600 font-light">{text}</p>
                      </div>
                    ))}
                  </div>
               </div>

               <div className="space-y-10">
                  <h3 className="text-2xl font-light text-zinc-900">FAQs</h3>
                  <div className="space-y-8">
                     {desoFaqs.map((faq, i) => (
                       <div key={i} className="space-y-2">
                          <h4 className="text-[13px] font-bold uppercase tracking-widest text-zinc-900 flex gap-3">
                             <span className="text-zinc-300 font-serif">{i + 1}.</span> {faq.q}
                          </h4>
                          <p className="text-[15px] text-zinc-500 font-light leading-relaxed pl-7">
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
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-500">Contour Your Profile</p>
                <h2 className="text-3xl md:text-4xl font-light text-white leading-tight">Book a consultation</h2>
              </div>
              <Link href="/#contact" className="w-full md:w-auto relative z-10">
                <button className="w-full md:w-auto bg-white text-zinc-900 px-12 py-5 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] hover:scale-105 transition-all active:scale-95 shadow-lg">
                  Book Now
                </button>
              </Link>
            </section>

          </div>
        </div>
      </div>
    </main>
  )
}