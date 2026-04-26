"use client"

import { motion } from "framer-motion"
import { MapPin, Clock, Coffee, ShieldCheck } from "lucide-react"

const visitSteps = [
  {
    icon: <MapPin size={20} />,
    title: "Arrival & Parking",
    desc: "Located in the quiet Priory Office Park. Parking is available in the surrounding area, and clients may also use parking at the Talbot Hotel with prior permission."
  },
  {
    icon: <Coffee size={20} />,
    title: "The Environment",
    desc: "You are welcome to wait in our private waiting room, where refreshments are available while you prepare for your personalised consultation."
  },
  {
    icon: <ShieldCheck size={20} />,
    title: "Private Care",
    desc: "Your journey is handled with absolute discretion. Our clinical environment is designed for your comfort and total privacy."
  }
]

export function PlanningVisit() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-[#EAEAE6]/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        
        {/* HEADER AREA */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center rounded-full px-3 py-1 md:px-4 md:py-1.5 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-zinc-500 bg-white border border-zinc-200 shadow-sm mb-4 md:mb-6"
          >
            Your Journey
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-semibold text-zinc-900 tracking-tight"
          >
            Planning <span className="italic font-serif font-light text-zinc-500">Your Visit</span>
          </motion.h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 sm:gap-16 lg:gap-24 items-center">
          
          {/* LEFT SIDE: THE CLINIC MOSAIC */}
          <div className="w-full lg:w-1/2 relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px]">
            {/* Image 1: Tall Exterior */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="absolute left-0 top-0 w-[55%] h-[60%] rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl z-20"
            >
              <img src="/b1.webp" alt="Clinic Exterior" className="w-full h-full object-cover" />
            </motion.div>

            {/* Image 2: Square Entrance */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="absolute right-0 top-[10%] sm:top-20 w-[45%] md:w-[50%] aspect-[4/5] rounded-[1rem] md:rounded-[2rem] overflow-hidden shadow-xl z-30 border-[6px] md:border-[10px] border-[#EAEAE6]"
            >
              <img src="/gerka.jpeg" alt="Clinic Entrance" className="w-full h-full object-cover" />
            </motion.div>

            {/* Image 3: Wide Reception */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: true }}
              className="absolute left-[10%] bottom-0 w-[85%] sm:w-[80%] h-[30%] sm:h-[35%] rounded-[1rem] md:rounded-[2rem] overflow-hidden shadow-2xl z-10"
            >
              <img src="/b3.webp" alt="Reception Area" className="w-full h-full object-cover" />
            </motion.div>
          </div>

          {/* RIGHT SIDE: THE VISIT GUIDE */}
          <div className="w-full lg:w-1/2 space-y-8 md:space-y-10">
            <div className="grid grid-cols-1 gap-6 md:gap-8">
              {visitSteps.map((step, index) => (
                <motion.div 
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-4 md:gap-6 group"
                >
                  <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white flex items-center justify-center text-zinc-400 group-hover:bg-zinc-900 group-hover:text-white transition-all duration-500 shadow-sm">
                    {/* Responsive icon sizing */}
                    <div className="scale-90 md:scale-100">
                      {step.icon}
                    </div>
                  </div>
                  <div className="space-y-1 md:space-y-2 pt-1 md:pt-1.5">
                    <h3 className="text-lg md:text-xl font-semibold text-zinc-900 tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-sm md:text-base text-zinc-500 font-light leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA / Quick Info Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
              className="p-6 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] bg-zinc-900 text-white mt-8 md:mt-12 relative overflow-hidden group cursor-pointer"
            >
              <div className="relative z-10 flex items-center justify-between gap-4">
                <div>
                  <p className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-400 mb-1">Location Details</p>
                  <p className="text-xs md:text-sm font-light text-zinc-200">1 Priory Office Park, Stillorgan Rd</p>
                </div>
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-zinc-900 transition-all duration-500 flex-shrink-0">
                  <MapPin size={18} />
                </div>
              </div>
              {/* Background Glow */}
              <div className="absolute -right-10 -bottom-10 w-24 h-24 md:w-32 md:h-32 bg-white/5 blur-3xl rounded-full" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}