"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { Send, Phone, Mail, MapPin, Loader2, ChevronDown } from "lucide-react"
import emailjs from "emailjs-com"

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const formRef = useRef<HTMLFormElement>(null)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (status === "loading") return
    setStatus("loading")

    const form = event.currentTarget
    const formData = new FormData(form)

    // 🔒 Honeypot check (Spam protection)
    if (formData.get("company")) {
      setTimeout(() => {
        setStatus("success")
        form.reset()
      }, 1000)
      return
    }

    try {
      const result = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )

      if (result.text === "OK") {
        setStatus("success")
        form.reset()
        setTimeout(() => setStatus("idle"), 3000)
      } else {
        setStatus("error")
      }
    } catch (err) {
      console.error("EmailJS Error:", err)
      setStatus("error")
    }
  }

  return (
    <section id="contact" className="py-16 md:py-14 lg:py-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-light text-zinc-900 tracking-tight"
          >
            Get in <span className="italic font-serif text-zinc-500">Touch</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-20 items-start">
          
          {/* LEFT SIDE: HERO IMAGE WITH CONTACT INFO */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative aspect-[4/5] sm:aspect-[16/9] lg:aspect-[4/3] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl group order-2 lg:order-1"
          >
            <img 
              src="/b2.webp" 
              alt="Gerka Clinic Office" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            
            <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 space-y-3 md:space-y-4 w-[calc(100%-48px)]">
              <div className="flex items-center gap-3 md:gap-4 text-white">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-white/30 bg-white/10 backdrop-blur-md flex items-center justify-center flex-shrink-0">
                  <Phone size={14} className="md:w-4 md:h-4" strokeWidth={1.5} />
                </div>
                <span className="text-[11px] md:text-[13px] tracking-[0.2em] font-light">0878888087</span>
              </div>
              <div className="flex items-center gap-3 md:gap-4 text-white">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-white/30 bg-white/10 backdrop-blur-md flex items-center justify-center flex-shrink-0">
                  <Mail size={14} className="md:w-4 md:h-4" strokeWidth={1.5} />
                </div>
                <span className="text-[11px] md:text-[13px] tracking-[0.2em] font-light lowercase truncate">info@gerkaclinic.com</span>
              </div>
              <div className="flex items-center gap-3 md:gap-4 text-white">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-white/30 bg-white/10 backdrop-blur-md flex items-center justify-center flex-shrink-0">
                  <MapPin size={14} className="md:w-4 md:h-4" strokeWidth={1.5} />
                </div>
                <span className="text-[11px] md:text-[13px] tracking-[0.2em] font-light uppercase">STILLORGAN RD, A94NH31</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE: LUXURY FORM */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col order-1 lg:order-2"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-8 md:space-y-10">
              
              {/* 🔒 Honeypot Field */}
              <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {/* NAME */}
                <div className="flex flex-col space-y-2">
                  <label htmlFor="name" className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-400">Full Name</label>
                  <input 
                    required id="name" name="name" type="text" placeholder="Sophie"
                    className="bg-transparent border-b border-zinc-200 py-2 focus:outline-none focus:border-zinc-900 transition-colors text-zinc-800 placeholder:text-zinc-300 font-light text-sm md:text-base"
                  />
                </div>
                {/* EMAIL */}
                <div className="flex flex-col space-y-2">
                  <label htmlFor="email" className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-400">Email Address</label>
                  <input 
                    required id="email" name="email" type="email" placeholder="sophie@example.com"
                    className="bg-transparent border-b border-zinc-200 py-2 focus:outline-none focus:border-zinc-900 transition-colors text-zinc-800 placeholder:text-zinc-300 font-light text-sm md:text-base"
                  />
                </div>
                {/* PHONE */}
                <div className="flex flex-col space-y-2">
                  <label htmlFor="phone" className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-400">Phone Number</label>
                  <input 
                    required id="phone" name="phone" type="tel" placeholder="+353 87 123 4567"
                    className="bg-transparent border-b border-zinc-200 py-2 focus:outline-none focus:border-zinc-900 transition-colors text-zinc-800 placeholder:text-zinc-300 font-light text-sm md:text-base"
                  />
                </div>
                {/* PREFERRED CONTACT METHOD */}
                <div className="flex flex-col space-y-2">
                  <label htmlFor="contact_method" className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-400">How should we reach you?</label>
                  <div className="relative">
                    <select 
                      id="contact_method" name="contact_method" 
                      className="w-full bg-transparent border-b border-zinc-200 py-2 focus:outline-none focus:border-zinc-900 transition-colors text-zinc-800 font-light cursor-pointer appearance-none text-sm md:text-base"
                    >
                      <option value="Email">Contact via Email</option>
                      <option value="Phone Call">Contact via Phone Call</option>
                      <option value="WhatsApp / SMS">Contact via WhatsApp / SMS</option>
                    </select>
                    <div className="absolute right-0 bottom-3 pointer-events-none opacity-40">
                      <ChevronDown size={14} />
                    </div>
                  </div>
                </div>

                {/* TREATMENT SELECTION */}
                <div className="flex flex-col space-y-2">
                  <label htmlFor="treatment" className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-400">Desired Treatment</label>
                  <div className="relative">
                    <select 
                      id="treatment" name="treatment" 
                      className="w-full bg-transparent border-b border-zinc-200 py-2 focus:outline-none focus:border-zinc-900 transition-colors text-zinc-800 font-light cursor-pointer appearance-none text-sm md:text-base"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="BTL Emsella">BTL Emsella</option>
                      <option value="BTL Vanquish">BTL Vanquish ME</option>
                      <option value="Skin Lesion Removal">Skin Lesion Removal</option>
                      <option value="PRP Intimate">PRP Intimate</option>
                      <option value="Exilis Ultra 360">Exilis Ultra 360</option>
                    </select>
                    <div className="absolute right-0 bottom-3 pointer-events-none opacity-40">
                      <ChevronDown size={14} />
                    </div>
                  </div>
                </div>

                {/* PREFERRED LANGUAGE */}
                <div className="flex flex-col space-y-2">
                  <label htmlFor="language" className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-400">Preferred Language</label>
                  <div className="relative">
                    <select 
                      id="language" name="language" 
                      className="w-full bg-transparent border-b border-zinc-200 py-2 focus:outline-none focus:border-zinc-900 transition-colors text-zinc-800 font-light cursor-pointer appearance-none text-sm md:text-base"
                    >
                      <option value="English">English</option>
                      <option value="Spanish">Spanish</option>
                      <option value="Persian">Persian (فارسی)</option>
                    </select>
                    <div className="absolute right-0 bottom-3 pointer-events-none opacity-40">
                      <ChevronDown size={14} />
                    </div>
                  </div>
                </div>
              </div>

              {/* MESSAGE */}
              <div className="flex flex-col space-y-2">
                <label htmlFor="message" className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-400">Message</label>
                <textarea 
                  required id="message" name="message" rows={3} placeholder="How can we help you?"
                  className="bg-transparent border-b border-zinc-200 py-2 focus:outline-none focus:border-zinc-900 transition-colors text-zinc-800 placeholder:text-zinc-300 font-light resize-none text-sm md:text-base"
                />
              </div>

              <div className="pt-2 md:pt-4">
                <button 
                  disabled={status === "loading"}
                  type="submit"
                  className="w-full md:w-auto group relative bg-zinc-900 text-white px-8 md:px-10 py-4 md:py-5 rounded-full flex items-center justify-center gap-4 transition-all hover:bg-zinc-800 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <span className="text-[10px] md:text-[11px] tracking-[0.3em] uppercase font-bold">
                    {status === "loading" ? "Sending..." : "Send Inquiry"}
                  </span>
                  {status === "loading" ? (
                    <Loader2 size={14} className="animate-spin" />
                  ) : (
                    <Send size={14} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  )}
                </button>

                {status === "success" && (
                  <motion.p initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="mt-4 text-green-600 text-[12px] font-medium tracking-wide">
                    Thank you! Your inquiry has been sent successfully.
                  </motion.p>
                )}
                
                {status === "error" && (
                  <motion.p initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="mt-4 text-red-500 text-[12px] font-medium tracking-wide">
                    Something went wrong. Please try again later.
                  </motion.p>
                )}
                
                <p className="text-[9px] md:text-[10px] text-zinc-400 mt-6 md:mt-8 tracking-widest leading-relaxed max-w-[280px] mx-auto md:mx-0 text-center md:text-left">
                  By submitting this form, you agree to our privacy policy and data protection guidelines.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}