"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Phone, Mail, MapPin, Loader2, ChevronDown, Upload, X } from "lucide-react"
import emailjs from "emailjs-com"
import { CldUploadWidget } from 'next-cloudinary'

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [uploadedImageUrl, setUploadedImageUrl] = useState<string>("")
  const formRef = useState<HTMLFormElement>(null)

  // Restore scroll (Cloudinary widget sometimes breaks it)
  const restoreScroll = () => {
    document.body.style.overflow = 'auto'
    document.body.style.paddingRight = '0px'
  }

  const handleUploadSuccess = (result: any) => {
    if (result.event === "success") {
      setUploadedImageUrl(result.info.secure_url)
      restoreScroll()
    }
  }

  const removeImage = () => {
    setUploadedImageUrl("")
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (status === "loading") return

    setStatus("loading")

    const form = event.currentTarget
    const formData = new FormData(form)

    // Honeypot
    if (formData.get("company")) {
      setTimeout(() => {
        setStatus("success")
        form.reset()
        setUploadedImageUrl("")
      }, 1000)
      return
    }

    try {
      const templateParams = {
        name: formData.get("name") || "",
        email: formData.get("email") || "",
        phone: formData.get("phone") || "",
        contact_method: formData.get("contact_method") || "",
        treatment: formData.get("treatment") || "",
        language: formData.get("language") || "",
        message: formData.get("message") || "",
        file_url: uploadedImageUrl || "",
        time: new Date().toLocaleString(),
      }

      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )

      if (result.text === "OK") {
        setStatus("success")
        form.reset()
        setUploadedImageUrl("")

        setTimeout(() => setStatus("idle"), 3000)
      } else {
        throw new Error("EmailJS failed")
      }
    } catch (err) {
      console.error("Submission error:", err)
      setStatus("error")
    }
  }

  return (
    <section id="contact" className="py-16 md:py-14 lg:py-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        
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
          
          {/* LEFT SIDE: INFO */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative aspect-[4/5] sm:aspect-[16/9] lg:aspect-[4/3] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl group order-2 lg:order-1"
          >
            <img src="/b2.webp" alt="Clinic Office" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 space-y-3 text-white">
              <div className="flex items-center gap-3"><Phone size={14} /> <span className="text-[11px] md:text-[13px] tracking-[0.2em] font-light">0878888087</span></div>
              <div className="flex items-center gap-3"><Mail size={14} /> <span className="text-[11px] md:text-[13px] tracking-[0.2em] font-light truncate">info@gerkaclinic.com</span></div>
              <div className="flex items-center gap-3"><MapPin size={14} /> <span className="text-[11px] md:text-[13px] tracking-[0.2em] font-light uppercase">STILLORGAN RD, A94NH31</span></div>
            </div>
          </motion.div>

          {/* RIGHT SIDE: FORM */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col order-1 lg:order-2"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-8 md:space-y-10">
              <input type="text" name="company" className="hidden" tabIndex={-1} />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div className="flex flex-col space-y-2">
                  <label className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-400">Full Name</label>
                  <input required name="name" type="text" placeholder="Sophie" className="bg-transparent border-b border-zinc-200 py-2 focus:outline-none focus:border-zinc-900 transition-colors text-zinc-800 placeholder:text-zinc-300 font-light text-sm md:text-base" />
                </div>
                
                <div className="flex flex-col space-y-2">
                  <label className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-400">Email Address</label>
                  <input required name="email" type="email" placeholder="sophie@example.com" className="bg-transparent border-b border-zinc-200 py-2 focus:outline-none focus:border-zinc-900 transition-colors text-zinc-800 placeholder:text-zinc-300 font-light text-sm md:text-base" />
                </div>

                <div className="flex flex-col space-y-2">
                  <label className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-400">Phone Number</label>
                  <input required name="phone" type="tel" placeholder="+353..." className="bg-transparent border-b border-zinc-200 py-2 focus:outline-none focus:border-zinc-900 transition-colors text-zinc-800 placeholder:text-zinc-300 font-light text-sm md:text-base" />
                </div>

                {/* === MODERN CLOUDINARY UPLOAD === */}
                <div className="flex flex-col space-y-2">
                  <label className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-400">Upload Photo (Optional)</label>
                  
                  {uploadedImageUrl ? (
                    <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-zinc-200 bg-zinc-50">
                      <button
                        type="button"
                        onClick={removeImage}
                        className="absolute top-3 right-3 z-10 p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                      >
                        <X size={16} />
                      </button>
                      <img 
                        src={uploadedImageUrl} 
                        alt="Uploaded" 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                  ) : (
                    <CldUploadWidget 
                      uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
                      onSuccess={handleUploadSuccess}
                      onClose={restoreScroll}
                    >
                      {({ open }) => (
                        <div 
                          onClick={() => open?.()}
                          className="w-full aspect-[4/3] bg-[#FAF9F6] border-2 border-dashed border-zinc-200 rounded-2xl flex flex-col items-center justify-center space-y-4 group cursor-pointer hover:border-zinc-400 transition-all active:scale-[0.985]"
                        >
                          <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                            <Upload size={20} className="text-zinc-400" />
                          </div>
                          <div className="text-center">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Click to Upload Image</p>
                            <p className="text-[9px] text-zinc-300">Photo of concern area</p>
                          </div>
                        </div>
                      )}
                    </CldUploadWidget>
                  )}
                </div>

                <div className="flex flex-col space-y-2">
                  <label className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-400">Desired Treatment</label>
                  <div className="relative">
                    <select name="treatment" className="w-full bg-transparent border-b border-zinc-200 py-2 focus:outline-none focus:border-zinc-900 transition-colors text-zinc-800 font-light appearance-none text-sm md:text-base cursor-pointer">
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="BTL Emsella">BTL Emsella</option>
                      <option value="BTL Vanquish">BTL Vanquish ME</option>
                      <option value="Skin Lesion Removal">Skin Lesion Removal</option>
                    </select>
                    <ChevronDown size={14} className="absolute right-0 bottom-3 pointer-events-none opacity-40" />
                  </div>
                </div>

                <div className="flex flex-col space-y-2">
                  <label className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-400">Reach you via?</label>
                  <div className="relative">
                    <select name="contact_method" className="w-full bg-transparent border-b border-zinc-200 py-2 focus:outline-none focus:border-zinc-900 transition-colors text-zinc-800 font-light appearance-none text-sm md:text-base cursor-pointer">
                      <option value="Email">Email</option>
                      <option value="Phone Call">Phone Call</option>
                      <option value="WhatsApp">WhatsApp</option>
                    </select>
                    <ChevronDown size={14} className="absolute right-0 bottom-3 pointer-events-none opacity-40" />
                  </div>
                </div>
              </div>

              <div className="flex flex-col space-y-2">
                <label className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-400">Message</label>
                <textarea required name="message" rows={3} placeholder="How can we help you?" className="bg-transparent border-b border-zinc-200 py-2 focus:outline-none focus:border-zinc-900 transition-colors text-zinc-800 font-light resize-none text-sm md:text-base" />
              </div>

              <div className="pt-2">
                <button 
                  disabled={status === "loading"}
                  type="submit"
                  className="w-full md:w-auto group relative bg-zinc-900 text-white px-10 py-5 rounded-full flex items-center justify-center gap-4 transition-all hover:bg-zinc-800 active:scale-95 disabled:opacity-70"
                >
                  <span className="text-[10px] md:text-[11px] tracking-[0.3em] uppercase font-bold">
                    {status === "loading" ? "Processing..." : "Send Inquiry"}
                  </span>
                  {status === "loading" ? <Loader2 size={14} className="animate-spin" /> : <Send size={14} />}
                </button>

                {status === "success" && (
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4 text-green-600 text-[12px] font-medium tracking-wide">
                    Thank you! Your inquiry has been sent.
                  </motion.p>
                )}
                {status === "error" && (
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4 text-red-500 text-[12px] font-medium tracking-wide">
                    Something went wrong. Please try again.
                  </motion.p>
                )}
                
                <p className="text-[9px] md:text-[10px] text-zinc-400 mt-8 tracking-widest leading-relaxed max-w-[280px]">
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