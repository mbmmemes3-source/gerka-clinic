"use client"

import { motion } from "framer-motion"

export function AboutIntro() {
  return (
    <section className="relative py-16 md:py-24 lg:pt-48 lg:pb-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        
        {/* TOP HEADING AREA - Now Centered */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center rounded-full px-3 py-1 md:px-4 md:py-1.5 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-zinc-400 bg-zinc-50 border border-zinc-100 mb-4 md:mb-6"
          >
            Since 2018
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-3xl md:text-6xl lg:text-5xl font-light text-zinc-900 tracking-tight leading-[1.1] max-w-4xl"
          >
            A legacy of <br />
            <span className="italic font-serif text-zinc-500">regenerative</span> excellence.
          </motion.h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 sm:gap-16 lg:gap-24 items-start">
          
          {/* LEFT SIDE: STAGGERED IMAGE COLLAGE */}
          <div className="w-full lg:w-1/2 relative min-h-[380px] sm:min-h-[500px] md:min-h-[650px] mb-8 lg:mb-0">
            {/* Main Image: The Clinic/Barcelona Vibe */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              className="absolute left-0 top-0 w-[70%] sm:w-[75%] aspect-[3/4] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl z-20"
            >
              <img 
                src="/b1.webp" 
                alt="Barcelona Roots" 
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Second Image: Medical Detail/Research */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: true }}
              className="absolute right-0 top-8 sm:top-12 w-[45%] sm:w-[50%] aspect-square rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-xl z-30 border-[6px] md:border-[12px] border-white"
            >
              <img 
                src="/gerka.avif" 
                alt="Scientific Foundation" 
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Third Image: Soft Interior/Wellness */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              viewport={{ once: true }}
              className="absolute right-4 bottom-0 w-[50%] sm:w-[55%] h-[30%] sm:h-[35%] rounded-[1rem] md:rounded-[2rem] overflow-hidden shadow-2xl z-10"
            >
              <img 
                src="/b3.webp" 
                alt="Dublin Clinic" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* RIGHT SIDE: CONTENT */}
          <div className="w-full lg:w-1/2 space-y-8 md:space-y-12 lg:pt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6 md:space-y-8"
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl font-light text-zinc-900 leading-relaxed">
                Gerka Clinic is a leading aesthetic and regenerative medicine clinic in Dublin, 
                founded in 2018 with the opening of our first centre in <span className="font-medium">Barcelona</span>.
              </h3>
              
              <div className="space-y-4 md:space-y-6">
                <p className="text-base md:text-lg text-zinc-500 font-light leading-relaxed">
                  Built on a strong scientific and medical foundation, we pioneered 
                  <span className="text-zinc-800 font-normal"> regenerative aesthetic gynaecology</span> and today 
                  continue to set new standards in Ireland.
                </p>

                <div className="h-[1px] w-16 md:w-20 bg-zinc-200" />

                <p className="text-base md:text-lg text-zinc-500 font-light leading-relaxed">
                  We specialise in advanced aesthetic medicine, intimate health and wellness, using exclusively 
                  <span className="italic font-serif text-zinc-800"> FDA-approved</span> medical technology and 
                  evidence-based protocols.
                </p>

                <p className="text-base md:text-lg text-zinc-500 font-light leading-relaxed">
                  At Gerka Clinic, we combine <span className="text-zinc-900 font-medium">innovation, safety and compassion</span> {" "}
                  to enhance natural beauty, restore intimate health and support overall wellbeing.
                </p>
              </div>

              {/* Footer Section */}
              <div className="pt-6 md:pt-8 border-t border-zinc-50 flex items-center gap-6">
                <div className="flex flex-col">
                  <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">Dublin | Barcelona</span>
                  <span className="text-xs md:text-sm font-medium text-zinc-900">Excellence in Regenerative Care</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Background Decorative Text */}
      <div className="hidden lg:block absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 pointer-events-none -z-10 select-none">
        <span className="text-[25vw] font-light text-zinc-50 opacity-[0.03] uppercase whitespace-nowrap">
          Barcelona 2018
        </span>
      </div>
    </section>
  )
}