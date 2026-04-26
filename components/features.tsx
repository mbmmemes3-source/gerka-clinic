"use client"

import React from "react"
import { motion } from "framer-motion"
import { Award, Zap, ShieldCheck, Activity, CheckCircle2 } from "lucide-react"

const clinicFeatures = [
  {
    icon: <Activity className="text-zinc-400" size={20} />,
    title: "Established Excellence",
    text: "At the forefront of pelvic floor and intimate health since 2018, originally pioneering treatments in Barcelona."
  },
  {
    icon: <Award className="text-zinc-400" size={20} />,
    title: "Exclusive Certification",
    text: "The only clinic in Ireland certified by Dr. Charles Runnels, inventor of the O-Shot® and P-Shot®."
  },
  {
    icon: <Zap className="text-zinc-400" size={20} />,
    title: "Innovative Solutions",
    text: "First clinic to introduce neurotoxin therapy for vaginismus and advanced PRP gynaecology in Dublin."
  }
]

const servicesList = [
  "O-Shot® (Orgasm Shot) Dublin",
  "P-Shot® (PRP for men) Dublin",
  "PRP for vaginal rejuvenation",
  "Vaginismus treatment with neurotoxins",
  "Pelvic floor strengthening (Emsella)",
  "Regenerative gynaecology treatments"
]

export default function ClinicIntro() {
  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* TOP SECTION: MAIN HEADING */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.4em] text-zinc-400 mb-6">
                Gerka Clinic Dublin
              </h2>
              <h1 className="text-2xl md:text-4xl font-light tracking-tight text-zinc-900 leading-[1.1] mb-8">
                Leading Clinic in Regenerative & <br />
                <span className="italic font-serif text-zinc-500">Functional Gynaecology.</span>
              </h1>
              <p className="text-lg md:text-xl text-zinc-600 font-light leading-relaxed mb-8">
                Gerka Clinic is a leading provider of regenerative medicine, aesthetic gynaecology, and women’s intimate health treatments in Dublin, recognised for its innovation and advanced clinical approach.
              </p>
              <div className="space-y-6 text-zinc-500 font-light leading-relaxed text-sm md:text-base">
                <p>
                  Since 2018, the clinic has been at the forefront of pelvic floor treatment and intimate rejuvenation, introducing the first Emsella chair in Catalonia and offering cutting-edge solutions for women’s health.
                </p>
                <p>
                  We specialise in Platelet-Rich Plasma (PRP) treatments, supporting conditions such as vaginal atrophy, lichen sclerosus, and sexual dysfunction through evidence-based regenerative medicine.
                </p>
              </div>
            </motion.div>
          </div>

          {/* SERVICES SIDEBAR */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-[#F8F8F6] p-8 md:p-12 rounded-[2rem] border border-zinc-100"
            >
              <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-zinc-900 mb-8 border-b border-zinc-200 pb-4">
                Core Specialisms
              </h3>
              <ul className="space-y-5">
                {servicesList.map((service, idx) => (
                  <li key={idx} className="flex items-start gap-3 group">
                    <CheckCircle2 size={18} className="text-zinc-300 mt-0.5 group-hover:text-zinc-900 transition-colors" />
                    <span className="text-sm md:text-[15px] text-zinc-600 font-light tracking-wide group-hover:text-zinc-900 transition-colors">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 pt-8 border-t border-zinc-200">
                <p className="text-[11px] leading-relaxed text-zinc-400 italic">
                  Gerka Clinic Dublin combines medical excellence and personalised care in a discreet, professional environment.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* BOTTOM SECTION: KEY HIGHLIGHTS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-24 pt-16 border-t border-zinc-100">
          {clinicFeatures.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="space-y-4"
            >
              <div className="w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-900">
                {feature.title}
              </h4>
              <p className="text-sm text-zinc-500 font-light leading-relaxed">
                {feature.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CERTIFICATION BADGE (Optional Authority Builder) */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 flex flex-col items-center justify-center p-8 border border-dashed border-zinc-200 rounded-3xl"
        >
          <ShieldCheck className="text-zinc-300 mb-4" size={32} />
          <p className="text-center text-[11px] md:text-xs tracking-[0.15em] text-zinc-500 uppercase max-w-2xl leading-relaxed">
            The only clinic in Ireland certified by <span className="text-zinc-900 font-bold">Dr. Charles Runnels</span>, providing trusted expertise in intimate regenerative treatments for both women and men.
          </p>
        </motion.div>

      </div>
    </section>
  )
}