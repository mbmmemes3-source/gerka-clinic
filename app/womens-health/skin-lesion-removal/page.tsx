// "use client"

// import { motion } from "framer-motion"
// import { ArrowLeft, ShieldCheck, Target, Microscope, Zap, CheckCircle2, ChevronRight, Eye, AlertTriangle, Activity, Euro } from "lucide-react"
// import Link from "next/link"
// import { ServiceSidebar } from "@/components/ServiceSidebar"

// const benignLesions = [
//   {
//     title: "Skin Tags (Acrochordons)",
//     desc: "Soft, flesh-coloured or slightly pigmented growths that commonly appear on the neck, eyelids, underarms and groin. Removal is quick and usually leaves minimal marks when performed correctly."
//   },
//   {
//     title: "Sebaceous Hyperplasia",
//     desc: "Small yellowish or skin-coloured papules caused by enlarged sebaceous glands. They are completely benign but may resemble other lesions, so accurate diagnosis is important."
//   },
//   {
//     title: "Dark Papular Lesions (DPN)",
//     desc: "Dermatosis papulosa nigra consists of multiple small dark papules. Removal requires expertise to minimise the risk of pigmentation changes, especially in darker skin types."
//   },
//   {
//     title: "Warts (Verrucae)",
//     desc: "Benign skin growths caused by the human papillomavirus (HPV). They may appear as rough, raised or flat lesions and can occur on various parts of the body."
//   },
//   {
//     title: "Seborrhoeic Keratoses",
//     desc: "Very common benign lesions that appear as brown, black or skin-coloured plaques with a 'stuck-on' appearance. They increase with age and are harmless."
//   }
// ]

// const techniques = [
//   "Medical electrosurgery",
//   "Radiofrequency techniques",
//   "Precision excision",
//   "Other lesion-specific methods"
// ]

// export default function SkinLesionRemovalPage() {
//   return (
//     <main className="bg-[#FAF9F6] min-h-screen pb-20">
      
//       {/* 1. TOP NAVIGATION */}
//       <div className="pt-32 pb-8 px-6 md:px-10 max-w-7xl mx-auto">
//         <Link href="/" className="group inline-flex items-center gap-2 text-zinc-400 hover:text-zinc-900 transition-colors">
//           <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
//           <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Back to services</span>
//         </Link>
//       </div>

//       <div className="max-w-7xl mx-auto px-6 md:px-10">
//         <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 lg:gap-20">
          
//           {/* 2. REUSABLE SIDEBAR */}
//           <ServiceSidebar 
//             activeService="Skin Lesion Removal" 
//             categoryTitle="Women's Health" 
//           />

//           {/* 3. MAIN CONTENT AREA */}
//           <div className="lg:col-span-9 space-y-16 md:space-y-24">
            
//             {/* HERO SECTION */}
//             <section className="space-y-12">
//               <div className="space-y-6">
//                 <h1 className="text-4xl md:text-5xl font-light text-zinc-900 tracking-tight leading-tight">
//                   Cosmetic Skin Lesion <br />
//                   <span className="italic font-serif text-zinc-500 font-light">Removal – Expert Care in Dublin</span>
//                 </h1>
//                 <div className="flex flex-wrap gap-4 border-b border-zinc-200 pb-8">
//                   <span className="text-xs font-bold text-zinc-900 uppercase tracking-widest flex items-center gap-2">
//                     <Euro size={14} className="text-zinc-400" /> Cost: TBC / Consultation Required
//                   </span>
//                   <span className="text-xs font-bold text-zinc-900 uppercase tracking-widest flex items-center gap-2">
//                     <ShieldCheck size={14} className="text-zinc-400" /> Benign Lesions Only
//                   </span>
//                   <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest italic">
//                     Precision & Safety Focus
//                   </span>
//                 </div>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
//                 <div className="space-y-6 text-zinc-600 font-light leading-relaxed text-[16px]">
//                   <p>
//                     At Gerka Clinic, Dublin, we offer cosmetic skin lesion removal for a wide range of benign skin lesions, focusing on safety, precision and optimal aesthetic outcomes.
//                   </p>
//                   <p>
//                     Lesions are removed for <span className="text-zinc-900 font-medium">cosmetic reasons only</span>, following a thorough clinical assessment to confirm their benign nature. When clinically indicated, removed lesions can be sent for histopathological analysis.
//                   </p>
//                   <div className="p-6 bg-white border border-zinc-100 rounded-2xl italic text-sm text-zinc-500 leading-relaxed shadow-sm">
//                     "We are particularly experienced in the removal of lesions on delicate areas, including eyelids and periocular skin, where precision and expertise are essential."
//                   </div>
//                 </div>
//                 <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-white border-8">
//                   {/* Image showing finger pointing to lesions on the neck from your screenshot */}
//                   <img src="/skin.jpeg" alt="Skin Lesion Removal Assessment" className="w-full h-full object-cover" />
//                 </div>
//               </div>
//             </section>

//             {/* EYELID SPECIALIZATION SECTION */}
//             <section className="bg-zinc-900 text-white rounded-[3rem] p-10 md:p-16 overflow-hidden relative shadow-2xl">
//                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
//                   <div className="space-y-8">
//                      <div className="space-y-2">
//                         <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-500">Delicate Area Care</span>
//                         <h2 className="text-3xl font-light">Eyelid & Periocular Lesion Removal</h2>
//                      </div>
//                      <p className="text-zinc-400 font-light leading-relaxed">
//                         These areas require advanced skill and delicate techniques to protect eye structures and achieve the best cosmetic result. We specialise in the removal of:
//                      </p>
//                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-4">
//                         {["Skin tags", "Seborrhoeic keratoses", "Papular lesions", "Sebaceous hyperplasia"].map(item => (
//                           <li key={item} className="flex items-center gap-2 text-xs uppercase tracking-widest text-zinc-200">
//                              <div className="w-1 h-1 rounded-full bg-zinc-500" /> {item}
//                           </li>
//                         ))}
//                      </ul>
//                   </div>
//                   <div className="aspect-[4/3] rounded-[2rem] overflow-hidden border border-white/10 shadow-lg">
//                      {/* Image showing eye with lesions from your screenshot */}
//                      <img src="/lision1.webp" alt="Periocular Lesion Example" className="w-full h-full object-cover" />
//                   </div>
//                </div>
//                <div className="absolute -top-24 -left-24 w-64 h-64 bg-zinc-800/40 blur-[100px] rounded-full" />
//             </section>

//             {/* BENIGN LESIONS WE TREAT */}
//             <section className="space-y-12">
//                <div className="space-y-4">
//                   <h3 className="text-3xl font-light text-zinc-900">Benign Skin Lesions <span className="italic font-serif text-zinc-500">We Treat</span></h3>
//                   <div className="w-16 h-[1px] bg-zinc-300" />
//                </div>
//                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                   {benignLesions.map((lesion) => (
//                     <div key={lesion.title} className="p-8 bg-white border border-zinc-100 rounded-3xl space-y-4 shadow-sm group hover:border-zinc-300 transition-all">
//                        <h4 className="text-xl font-medium text-zinc-900 flex items-center justify-between">
//                           {lesion.title}
//                           <Activity size={18} className="text-zinc-100 group-hover:text-zinc-300 transition-colors" />
//                        </h4>
//                        <p className="text-sm text-zinc-500 font-light leading-relaxed">
//                           {lesion.desc}
//                        </p>
//                     </div>
//                   ))}
//                </div>
//             </section>

//             {/* TECHNIQUES SECTION */}
//             <section className="bg-[#EAEAE6]/50 rounded-[3rem] p-10 md:p-16 space-y-10">
//                <div className="max-w-2xl space-y-4">
//                   <h3 className="text-3xl font-light text-zinc-900">Techniques Used</h3>
//                   <p className="text-zinc-500 font-light leading-relaxed">
//                     Different lesions require different approaches. The chosen technique is always based on <span className="text-zinc-900 font-medium">clinical assessment</span> and aesthetic considerations.
//                   </p>
//                </div>
//                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//                   {techniques.map(t => (
//                     <div key={t} className="p-6 bg-white rounded-2xl border border-zinc-100 flex flex-col items-center text-center space-y-3">
//                        <Zap size={20} className="text-zinc-400" />
//                        <span className="text-[11px] font-bold uppercase tracking-widest text-zinc-900">{t}</span>
//                     </div>
//                   ))}
//                </div>
//             </section>

//             {/* BEFORE & AFTER SHOT */}
//             <section className="space-y-10">
//                <div className="space-y-4 text-center">
//                   <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-400">Clinical Results</span>
//                   <h2 className="text-3xl font-light text-zinc-900 italic font-serif">Aesthetic Outcomes</h2>
//                </div>
//                <div className="max-w-2xl mx-auto aspect-video rounded-[3rem] overflow-hidden shadow-xl border-white border-8">
//                   <img src="/lesion-before-after.webp" alt="Lesion Removal Comparison" className="w-full h-full object-cover" />
//                </div>
//             </section>

//             {/* IMPORTANT MEDICAL INFORMATION */}
//             <section className="p-10 md:p-16 bg-white border border-zinc-100 rounded-[3rem] space-y-10 shadow-sm">
//                <div className="flex items-center gap-4">
//                   <AlertTriangle size={32} strokeWidth={1.5} className="text-zinc-300" />
//                   <h3 className="text-2xl md:text-3xl font-light text-zinc-900 tracking-tight">Important Medical Information</h3>
//                </div>
//                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
//                   {[
//                     "Only clinically benign-appearing lesions are removed for cosmetic reasons",
//                     "A consultation is required prior to treatment",
//                     "Not all lesions are suitable for cosmetic removal",
//                     "Suspicious lesions are referred for further medical evaluation"
//                   ].map((info) => (
//                     <div key={info} className="flex gap-4 items-start">
//                        <div className="w-1.5 h-1.5 rounded-full bg-zinc-900 mt-2 shrink-0" />
//                        <p className="text-[15px] text-zinc-500 font-light leading-relaxed">{info}</p>
//                     </div>
//                   ))}
//                </div>
//                <div className="pt-6 border-t border-zinc-50">
//                   <p className="text-xs text-zinc-400 italic">When clinically indicated, removed lesions can be sent for histopathological analysis.</p>
//                </div>
//             </section>

//             {/* FINAL CTA */}
//             <section className="bg-zinc-900 rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl relative overflow-hidden">
//               <div className="space-y-3 text-center md:text-left relative z-10">
//                 <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-500">Begin Your Clinical Assessment</p>
//                 <h2 className="text-3xl md:text-4xl font-light text-white leading-tight">Book a lesion consultation</h2>
//               </div>
//               <Link href="/#contact" className="w-full md:w-auto relative z-10">
//                 <button className="w-full md:w-auto bg-white text-zinc-900 px-12 py-5 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] hover:scale-105 transition-all active:scale-95 shadow-lg">
//                   Book Now
//                 </button>
//               </Link>
//             </section>

//           </div>
//         </div>
//       </div>
//     </main>
//   )
// }

"use client"

import { motion } from "framer-motion"
import { 
  ArrowLeft, 
  ShieldCheck, 
  Lock, 
  Stethoscope, 
  Search, 
  Microscope, 
  CheckCircle2, 
  AlertTriangle, 
  Info, 
  UserCheck, 
  Heart,
  Target,
  Euro
} from "lucide-react"
import Link from "next/link"
import { ServiceSidebar } from "@/components/ServiceSidebar"

const intimateConditions = [
  {
    title: "Acrochordons (Skin Tags)",
    desc: "Soft, flesh-coloured growths that appear in areas of friction. In intimate areas, they can become irritated by clothing, shaving or movement."
  },
  {
    title: "Genital Warts (HPV)",
    desc: "Small growths caused by HPV strains. They may appear as isolated bumps or clusters and vary in size and texture. Professional diagnosis is essential."
  },
  {
    title: "Molluscum Contagiosum",
    desc: "A viral condition causing small, dome-shaped bumps with a central dimple. They can spread through contact and affect intimate skin in adults."
  }
]

const whyRemove = [
  "Cause friction, irritation or discomfort",
  "Catch during shaving or hygiene",
  "Affect confidence or intimacy",
  "Risk of spreading to nearby skin",
  "Clarification of diagnosis"
]

export default function IntimateLesionRemovalPage() {
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
          
          <ServiceSidebar 
            activeService="Intimate Area Lesion Removal" 
            categoryTitle="Women's Health" 
          />

          <div className="lg:col-span-9 space-y-16 md:space-y-24">
            
            {/* HERO SECTION */}
            <section className="space-y-12">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-500 text-[9px] font-bold uppercase tracking-widest">
                  <Lock size={12} /> Discreet & Confidential
                </div>
                <h1 className="text-4xl md:text-5xl font-light text-zinc-900 tracking-tight leading-tight">
                  Skin Lesion Removal <br />
                  <span className="italic font-serif text-zinc-500 font-light">in Intimate Areas</span>
                </h1>
                <div className="flex flex-wrap gap-4 border-b border-zinc-200 pb-8">
                  <span className="text-xs font-bold text-zinc-900 uppercase tracking-widest flex items-center gap-2">
                    <Euro size={14} className="text-zinc-400" /> TBC / Consultation Required
                  </span>
                  <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest italic border-l border-zinc-200 pl-4">
                    Professional Gynaecological Environment
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                <div className="space-y-6 text-zinc-600 font-light leading-relaxed text-[16px]">
                  <p>
                    At Gerka Clinic, we offer discreet assessment and treatment for selected benign and infectious skin lesions affecting intimate areas. These concerns may cause discomfort, irritation, or anxiety, especially when they affect confidence or intimacy.
                  </p>
                  <p>
                    Our approach is professional, respectful and confidential. Every lesion is assessed carefully before treatment to determine the most appropriate option and to ensure your safety.
                  </p>
                </div>
                <div className="aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl border-white border-8">
                  <img src="/inti.webp" alt="Intimate clinical care" className="w-full h-full object-cover" />
                </div>
              </div>
            </section>

            {/* CLINICAL NOTE: DIAGNOSIS FIRST */}
            <section className="bg-white border border-zinc-100 rounded-[3rem] p-8 md:p-12 shadow-sm">
               <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center shrink-0">
                     <AlertTriangle className="text-amber-600" size={24} />
                  </div>
                  <div className="space-y-4">
                     <h2 className="text-xl font-bold uppercase tracking-widest text-zinc-900">Accurate Diagnosis Comes First</h2>
                     <p className="text-zinc-500 font-light leading-relaxed">
                        Not every lesion in the intimate area should be removed immediately. Some require careful visual examination, dermatoscopic assessment, or medical review before treatment. Every patient must first attend an assessment to confirm suitability for treatment in clinic.
                     </p>
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                        {["Visual Examination", "Dermatoscopic Assessment", "Medical Review", "Potential Referral"].map(item => (
                           <div key={item} className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                              <Search size={14} /> {item}
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </section>

            {/* WHAT WE TREAT */}
            <section className="space-y-12">
               <div className="space-y-4">
                  <h3 className="text-3xl font-light text-zinc-900">Conditions <span className="italic font-serif text-zinc-500">We Commonly Assess</span></h3>
                  <p className="text-zinc-500 font-light">Clinical evaluation for benign and viral lesions.</p>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {intimateConditions.map((item) => (
                    <div key={item.title} className="p-8 bg-white border border-zinc-100 rounded-3xl space-y-4 shadow-sm group hover:border-zinc-300 transition-all">
                       <h4 className="text-lg font-medium text-zinc-900 leading-snug">{item.title}</h4>
                       <p className="text-sm text-zinc-500 font-light leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
               </div>
            </section>

            {/* WHY SEEK TREATMENT */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="bg-zinc-900 text-white p-12 rounded-[3rem] space-y-8 shadow-xl relative overflow-hidden">
                  <div className="relative z-10 space-y-6">
                    <h3 className="text-2xl font-light">Why Remove Intimate Lesions?</h3>
                    <ul className="space-y-4">
                       {whyRemove.map(text => (
                         <li key={text} className="flex items-start gap-4 text-sm text-zinc-400 font-light">
                            <CheckCircle2 size={18} className="text-zinc-500 shrink-0" /> {text}
                         </li>
                       ))}
                    </ul>
                  </div>
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 blur-3xl rounded-full" />
               </div>

               <div className="bg-[#EAEAE6] p-12 rounded-[3rem] space-y-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-light text-zinc-900">Our Treatment Approach</h3>
                  <p className="text-sm text-zinc-600 font-light leading-relaxed">
                    Following assessment, management may include the removal of selected benign lesions or local treatment planning for viral lesions. Because intimate skin is delicate, treatment is always carried out with precision and full respect for the anatomy.
                  </p>
                  <div className="flex gap-4">
                    <div className="p-4 bg-white/50 rounded-2xl border border-white flex items-center gap-3">
                       <Target size={16} className="text-zinc-900" />
                       <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-600">Precision Excision</span>
                    </div>
                  </div>
               </div>
            </section>

            {/* SAFETY & SUITABILITY */}
            <section className="space-y-12">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-6">
                     <h3 className="text-2xl font-light text-zinc-900">Who is it suitable for?</h3>
                     <ul className="space-y-4">
                        {[
                           "Small growths in the genital or groin area",
                           "Lesions that catch, rub or bleed",
                           "Skin tags requested for removal for comfort",
                           "New bumps needing evaluation",
                           "Persistent lesions causing worry"
                        ].map(item => (
                           <li key={item} className="flex items-start gap-3 text-sm text-zinc-500 font-light">
                              <UserCheck size={18} className="text-zinc-300 mt-0.5 shrink-0" /> {item}
                           </li>
                        ))}
                     </ul>
                  </div>
                  <div className="space-y-6 border-l border-zinc-200 pl-12">
                     <h3 className="text-2xl font-light text-zinc-900">Safety First</h3>
                     <p className="text-sm text-zinc-500 font-light leading-relaxed">
                        For your safety, treatment may be postponed or a referral advised if the diagnosis is unclear, the area is inflamed, or if a biopsy is more appropriate.
                     </p>
                     <div className="p-4 bg-zinc-50 rounded-2xl border border-zinc-100 flex items-center gap-3">
                        <ShieldCheck size={18} className="text-zinc-400" />
                        <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Your safety comes before convenience</span>
                     </div>
                  </div>
               </div>
            </section>

            {/* DISCREET SERVICE TONE */}
            <section className="bg-[#1A1A1A] text-white rounded-[3rem] p-10 md:p-16 text-center space-y-6 relative overflow-hidden">
               <div className="relative z-10 max-w-2xl mx-auto space-y-6">
                  <Heart className="mx-auto text-zinc-600" size={32} strokeWidth={1} />
                  <h3 className="text-3xl font-light">A Discreet and Respectful Service</h3>
                  <p className="text-zinc-400 font-light leading-relaxed">
                     We understand that intimate skin concerns can feel sensitive to discuss. Gerka Clinic provides a professional, non-judgemental and confidential environment where you feel safe and respected.
                  </p>
               </div>
               <div className="absolute top-0 right-0 w-64 h-64 bg-zinc-800 rounded-full blur-[100px] opacity-20" />
            </section>

            {/* AFTERCARE */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-16 border-t border-zinc-200">
               <div className="space-y-6">
                  <h4 className="text-xl font-medium text-zinc-900 uppercase tracking-tight">Aftercare & Recovery</h4>
                  <ul className="space-y-4">
                     {[
                       "Keep the area clean and dry",
                       "Avoid friction and shaving until healed",
                       "Avoid swimming, saunas or excessive sweating",
                       "Avoid sexual contact if advised",
                       "Follow all instructions carefully to support healing"
                     ].map(text => (
                       <li key={text} className="flex items-start gap-3 text-sm text-zinc-500 font-light">
                          <div className="w-1.5 h-1.5 rounded-full bg-zinc-300 mt-2 shrink-0" /> {text}
                       </li>
                     ))}
                  </ul>
               </div>
               <div className="flex flex-col justify-end">
                  <div className="p-8 bg-[#EAEAE6]/50 rounded-[2rem] border border-zinc-200">
                     <p className="text-xs italic text-zinc-500 leading-relaxed">
                        A personalised aftercare plan is provided after treatment, tailored to the method used and the type of lesion removed.
                     </p>
                  </div>
               </div>
            </section>

            {/* FINAL CTA */}
            <section className="bg-zinc-900 rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl relative overflow-hidden">
              <div className="space-y-3 text-center md:text-left relative z-10">
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-500">Secure & Private</p>
                <h2 className="text-3xl md:text-4xl font-light text-white leading-tight">Book a consultation</h2>
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