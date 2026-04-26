"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, CreditCard, CheckCircle2, ShieldCheck } from "lucide-react"
import Link from "next/link"

export function PaymentPlan() {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative">
          
          {/* GHOST BACKGROUND DECAL - Hidden on mobile for cleaner look */}
          <div className="hidden md:block absolute -top-12 -left-8 text-[120px] font-serif italic text-zinc-50 opacity-[0.05] select-none pointer-events-none">
            Financial Ease
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* LEFT SIDE: EDITORIAL CONTENT */}
            <div className="space-y-6 md:space-y-8 text-left">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center rounded-full px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500 bg-zinc-50 border border-zinc-100 shadow-sm"
              >
                Flexible Care
              </motion.div>

              <motion.h2 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl sm:text-4xl md:text-5xl font-semibold text-zinc-900 tracking-tight leading-tight"
              >
                Exceptional Care <br className="hidden sm:block" />
                <span className="italic font-serif font-light text-zinc-500">With Humm Finance</span>
              </motion.h2>

              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-zinc-500 text-base md:text-lg leading-relaxed max-w-xl font-light"
              >
                At Gerka Clinic, we believe excellence in care should be accessible to everyone. 
                For all treatments <span className="text-zinc-900 font-medium">over €1,000</span>, 
                we offer flexible payment plans through Humm.
              </motion.p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 pt-2">
                {[
                  "Quick online application",
                  "Approval in minutes",
                  "Plans for €1,000 to €30,000",
                  "Spread the cost over months"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-zinc-900 shrink-0" strokeWidth={1.5} />
                    <span className="text-sm text-zinc-600 font-light">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT SIDE: FINANCE CARD ACTION */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative group w-full max-w-xl mx-auto lg:mx-0"
            >
              {/* Decorative background shape - adjusted for mobile */}
              <div className="absolute inset-0 bg-zinc-900 rounded-[2rem] md:rounded-[2.5rem] translate-x-2 translate-y-2 md:translate-x-4 md:translate-y-4 -z-10 opacity-[0.03]" />
              
              <div className="bg-white border border-zinc-100 p-8 md:p-12 rounded-[2rem] md:rounded-[2.5rem] shadow-xl relative overflow-hidden">
                <div className="flex justify-between items-start mb-8 md:mb-12">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-zinc-900 rounded-2xl flex items-center justify-center shadow-lg">
                    <CreditCard className="text-white w-7 h-7 md:w-8 md:h-8" strokeWidth={1.5} />
                  </div>
                  <ShieldCheck className="text-green-500 w-7 h-7 md:w-8 md:h-8" strokeWidth={1} />
                </div>

                <div className="space-y-6">
                  <h3 className="text-xl md:text-2xl font-semibold text-zinc-900">Get Pre-Approved</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed font-light">
                    Start your journey today. Apply through Humm Ireland for a simple, 
                    low-interest payment plan tailored to your treatment requirements.
                  </p>
                  
                  <Link 
                    href="https://www.shophumm.com/ie/" 
                    target="_blank"
                    className="flex items-center justify-between w-full bg-zinc-900 hover:bg-zinc-800 text-white px-6 md:px-8 py-4 md:py-5 rounded-2xl transition-all duration-300 group shadow-lg shadow-zinc-200"
                  >
                    <span className="text-[11px] md:text-[12px] font-bold tracking-widest uppercase text-center w-full sm:w-auto">Visit Shophumm.com</span>
                    <ArrowUpRight className="hidden sm:block w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Link>
                  
                  <p className="text-[9px] md:text-[10px] text-center text-zinc-400 uppercase tracking-widest">
                    Subject to terms & conditions • Irish residents only
                  </p>
                </div>

                {/* Decorative Detail */}
                <div className="absolute -bottom-6 -right-6 w-24 h-24 md:w-32 md:h-32 bg-zinc-50 rounded-full -z-10" />
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}