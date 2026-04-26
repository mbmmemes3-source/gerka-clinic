"use client"

import { motion } from "framer-motion"

export function MissionSection() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        
        {/* CENTERED HEADER & PILL */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-20 lg:mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center rounded-full px-3 py-1 md:px-4 md:py-1.5 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-zinc-500 bg-white border border-zinc-200 shadow-sm mb-4 md:mb-6"
          >
            The Heart of Gerka
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-semibold text-zinc-900 tracking-tight"
          >
            Our Mission
          </motion.h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-20 lg:gap-32">
          
          {/* LEFT SIDE: THE LAYERED IMAGE COMPOSITION */}
          <div className="w-full lg:w-1/2 relative h-[350px] sm:h-[450px] md:h-[550px] flex items-center justify-center">
            
            {/* Background Image 1: Top Left (Grayscale Floral) */}
            <motion.div 
              initial={{ opacity: 0, x: -30, y: -30 }}
              whileInView={{ opacity: 0.4, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="absolute top-0 left-4 sm:left-0 w-40 h-40 sm:w-64 sm:h-64 md:w-80 md:h-80 grayscale opacity-80 z-0"
            >
              <img src="/floral.jpeg" alt="" className="w-full h-full object-cover rounded-2xl" />
            </motion.div>

            {/* Background Image 2: Middle Left (Grayscale Floral) - Hidden on smallest phones to keep it clean */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 0.3, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="absolute bottom-10 -left-6 w-36 h-56 grayscale opacity-30 z-0 hidden sm:block md:w-48 md:h-72"
            >
              <img src="/floral.jpeg" alt="" className="w-full h-full object-cover rounded-2xl" />
            </motion.div>

            {/* MAIN IMAGE: The Staff (Colored, Centered) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              /* Responsive sizing for the main card */
              className="relative z-10 w-[90%] sm:w-full max-w-[550px] aspect-[3/2] rounded-lg md:rounded-xl overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.12)] md:shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-[6px] md:border-[12px] border-white"
            >
              <img 
                src="/gerka.avif" 
                alt="Gerka Clinic Team" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            {/* Background Decoration: Bottom Right circle */}
            <div className="absolute -bottom-4 -right-2 sm:-bottom-6 sm:-right-6 w-20 h-20 sm:w-32 sm:h-32 bg-[#F9F9F7] rounded-full -z-10" />
          </div>

          {/* RIGHT SIDE: TEXT SECTION */}
          <div className="w-full lg:w-1/2 flex flex-col space-y-6 md:space-y-8 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6 md:space-y-8"
            >
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-zinc-900 leading-[1.4] md:leading-[1.3] tracking-tight">
                Our mission at <span className="font-semibold text-black">Gerka Clinic</span> is to restore <span className="italic font-serif text-zinc-500">confidence</span> and wellbeing in areas of health that have too often been ignored.
              </p>

              <div className="h-[1px] w-16 md:w-20 bg-zinc-900 mx-auto lg:mx-0" />

              <p className="text-base md:text-lg lg:text-xl text-zinc-500 font-light leading-relaxed max-w-2xl mx-auto lg:mx-0">
                We unite <span className="text-zinc-900 font-medium">cutting-edge</span> medical technology with thoughtful <span className="italic font-serif text-zinc-400">personalised</span> care.
              </p>
              
              <div className="pt-4 md:pt-6">
                <button className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-zinc-900 border-b-2 border-zinc-900 pb-2 hover:text-zinc-500 hover:border-zinc-300 transition-all">
                  Our Specialists
                </button>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}