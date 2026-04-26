"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ShieldAlert, Eye, EyeOff, Lock, CheckCircle2 } from "lucide-react"

// 1. DATA STRUCTURE: Divided into Sections with customizable Aspect Ratios
const treatmentSections = [
  {
    title: "Perineal Reconstruction (Perineoplasty)",
    description: "Clinical results focusing on surgical restoration of the perineal area.",
    aspectRatio: "aspect-[4/4]", // Square-ish
    items: [
      { image: "/vaginal-treatment1.jpeg", label: "Case Study A" },
      { image: "/vaginal-treatment2.jpeg", label: "Case Study B" },
      { image: "/vaginal-treatment3.jpeg", label: "Case Study C" },
    ]
  },
  {
    title: "Labiaplasty",
    description: "Surgical refinement and correction of the labia minora.",
    aspectRatio: "aspect-[4/4]", 
    items: [
      { image: "/labiaplastly1.jpeg", label: "Pre/Post View 1" },
      { image: "/labiaplasty2.jpeg", label: "Pre/Post View 2" },
    ]
  },
  {
    title: "Skin Lesion Removal",
    description: "Medical skin resurfacing and precise lesion excision.",
    aspectRatio: "aspect-[3/4]", // Portrait
    items: [
      { image: "/skin-lesion1.jpeg", label: "Lesion Case 1" },
      { image: "/skin-lesion2.jpeg", label: "Lesion Case 2" },
      { image: "/skin-lesion3.jpeg", label: "Lesion Case 3" },
      { image: "/skin-lesion4.jpeg", label: "Lesion Case 4" },
      { image: "/skin-lesson-treatment3.jpeg", label: "Lesion Case 5" },
    ]
  },
  {
    title: "Body Pigmentation & Skin Quality",
    description: "Advanced treatments for dermal pigmentation and perioral elastosis.",
    aspectRatio: "aspect-[3/4]", 
    items: [
      { image: "/body-pigmentation2.jpeg", label: "Body Pigmentation" },
      { image: "/perioral-skin-elastosis.jpeg", label: "Perioral Elastosis" },
    ]
  },
  {
    title: "Vanquish Fat Reduction",
    description: "Non-invasive body contouring results after 3 sessions.",
    aspectRatio: "aspect-[3/4]", 
    items: [
      { image: "/vanquish1.jpeg", label: "Abdominal Contouring after 3 sessions." },
      { image: "/vanquish2.jpeg", label: "9cm Reduction in 3 sessions." },
    ]
  }
]

export default function TreatmentResultsPage() {
  const [hasConsented, setHasConsented] = useState(false)
  const [revealedImages, setRevealedImages] = useState<string[]>([])

  const toggleImage = (path: string) => {
    if (revealedImages.includes(path)) {
      setRevealedImages(revealedImages.filter(p => p !== path))
    } else {
      setRevealedImages([...revealedImages, path])
    }
  }

  return (
    <main className="min-h-screen bg-[#F8F8F6] pt-10 pb-20 md:pb-32">
      {/* SECTION: DISCLAIMER HEADER */}
      <section className="pt-12 md:pt-20 pb-8 md:pb-12">
        <div className="max-w-6xl mx-auto px-5 md:px-6">
          <div className="bg-white border border-zinc-200 rounded-[2rem] p-6 md:p-12 shadow-sm">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-amber-50 flex items-center justify-center shrink-0">
                <ShieldAlert className="text-amber-600" size={28} />
              </div>
              <div className="space-y-6 w-full">
                <div>
                  <h1 className="text-[10px] font-bold tracking-[0.3em] uppercase text-zinc-400 mb-2">Clinical Archive</h1>
                  <h2 className="text-xl md:text-3xl font-light text-zinc-900 leading-tight">
                    Confidential Medical Content <br />
                    <span className="italic font-serif text-zinc-500">Restricted Viewing Only</span>
                  </h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-zinc-600 font-light leading-relaxed">
                  <p>
                    These images show intimate surgical procedures carried out by <strong>Dr Evelyn Alba</strong>. 
                    They are intended exclusively for medical, educational, and informational purposes.
                  </p>
                  <p>
                    Unauthorised use or distribution is strictly prohibited. All patients have given 
                    explicit written consent. Viewer discretion is strongly advised.
                  </p>
                </div>
                
                {!hasConsented && (
                  <motion.button 
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setHasConsented(true)}
                    className="w-full md:w-auto px-8 py-4 bg-zinc-900 text-white text-[10px] tracking-[0.25em] uppercase hover:bg-zinc-800 transition-all rounded-full shadow-lg shadow-zinc-200"
                  >
                    I Confirm & Wish to View Results
                  </motion.button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: TREATMENT GALLERIES */}
      <div className="max-w-6xl mx-auto px-5 md:px-6 space-y-20 md:space-y-32">
        {treatmentSections.map((section, sIdx) => (
          <div key={sIdx} className="space-y-8 md:space-y-10">
            {/* Header for each treatment type */}
            <div className="max-w-2xl border-l border-zinc-300 pl-5 md:pl-6">
              <h3 className="text-lg md:text-xl font-light tracking-widest uppercase text-zinc-900">
                {section.title}
              </h3>
              <p className="text-zinc-500 text-xs md:text-sm mt-2 font-light italic leading-relaxed">
                {section.description}
              </p>
            </div>

            {/* Responsive Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {section.items.map((item, iIdx) => {
                const isRevealed = revealedImages.includes(item.image)
                
                return (
                  <div key={iIdx} className="space-y-4">
                    <div className={`group relative overflow-hidden rounded-2xl md:rounded-[1.5rem] bg-zinc-200 ${section.aspectRatio} shadow-inner`}>
                      {/* Image Component */}
                      <img 
                        src={item.image} 
                        alt={item.label}
                        className={`w-full h-full object-cover object-center transition-all duration-1000 ease-in-out ${
                          hasConsented && isRevealed ? "blur-0 scale-100" : "blur-3xl scale-110"
                        }`}
                      />

                      {/* Overlay Mask */}
                      <AnimatePresence>
                        {(!hasConsented || !isRevealed) && (
                          <motion.div 
                            initial={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-zinc-900/40 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center"
                          >
                            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/30 flex items-center justify-center mb-4 text-white/80">
                              {!hasConsented ? <Lock size={18} /> : <EyeOff size={18} />}
                            </div>
                            <p className="text-white text-[9px] md:text-[10px] tracking-[0.2em] font-bold uppercase mb-6 px-4">
                              {item.label}
                            </p>
                            
                            {hasConsented && (
                              <button 
                                onClick={() => toggleImage(item.image)}
                                className="px-6 py-2.5 bg-white text-zinc-900 text-[9px] font-bold tracking-[0.2em] uppercase rounded-full hover:bg-zinc-100 transition-colors shadow-xl"
                              >
                                Reveal Image
                              </button>
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Hide Button (Visible when revealed) */}
                      {hasConsented && isRevealed && (
                        <button 
                          onClick={() => toggleImage(item.image)}
                          className="absolute bottom-4 right-4 p-2.5 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-black transition-all z-20"
                        >
                          <EyeOff size={14} />
                        </button>
                      )}
                    </div>
                    {/* Caption area */}
                    <div className="flex items-start gap-2.5 px-1">
                       <CheckCircle2 size={12} className="text-zinc-400 mt-0.5 shrink-0" />
                       <span className="text-[9px] md:text-[10px] tracking-widest text-zinc-500 uppercase leading-relaxed">
                         {item.label}
                       </span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>
      
      {/* FINAL FOOTER FOOTNOTE */}
      <div className="max-w-6xl mx-auto px-6 mt-20 md:mt-32 border-t border-zinc-200 pt-10 md:pt-12 text-center">
        <p className="text-[8px] md:text-[9px] tracking-[0.3em] md:tracking-[0.4em] text-zinc-400 uppercase">
           Confidential Clinical Records — Gerka Clinic 
        </p>
      </div>
    </main>
  )
}