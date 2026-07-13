"use client"
import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Check, Star, Lock, Phone, Mail, User, Clock,
  ChevronDown, Loader2, ShieldCheck, MapPin,
  Sparkles, MessageCircle, Stethoscope, X, Send, ArrowRight
} from "lucide-react"
import { useRouter } from "next/navigation"
import emailjs from "emailjs-com"

// ─── Reassurance Badge ────────────────────────────────────────────────────────
const Badge = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-zinc-200 text-zinc-500 text-[10px] font-bold uppercase tracking-widest shadow-sm ${className}`}>
    {children}
  </div>
)

// ─── ConsultationForm ─────────────────────────────────────────────────────────
function ConsultationForm({ id = "form" }: { id?: string }) {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    contact_method: "WhatsApp",
    contact_time: "Morning"
  })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (status === "loading") return
    setStatus("loading")
    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          contact_method: formData.contact_method,
          treatment: "Vaginismus Treatment",
          language: "English",
          message: `Preferred Contact Time: ${formData.contact_time}`,
          file_url: "",
          time: new Date().toLocaleString(),
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      if (result.text === "OK") {
        setStatus("success")
        setTimeout(() => router.push("/thank-you"), 1500)
      } else {
        throw new Error("Submission failed")
      }
    } catch (err) {
      console.error(err)
      setStatus("error")
      setTimeout(() => setStatus("idle"), 4000)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white border border-zinc-100 rounded-3xl p-6 md:p-10 shadow-2xl shadow-zinc-900/5 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-zinc-200 via-zinc-400 to-zinc-200" />
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div key="ok" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-12 text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-5">
              <Check size={28} className="text-emerald-600" />
            </div>
            <h3 className="text-2xl font-light text-zinc-900 tracking-tight">Request Received</h3>
            <p className="mt-2 text-zinc-500 text-sm">We will contact you discreetly within 2 hours.</p>
          </motion.div>
        ) : (
          <motion.div key="form">
            <div className="mb-8 text-center">
              <span className="text-[9px] text-zinc-400 font-bold uppercase tracking-widest">Judgement-Free & Confidential</span>
              <h3 className="text-2xl font-light tracking-tight text-zinc-900 uppercase mt-1">Book A Confidential Consultation</h3>
              <p className="mt-2 text-zinc-500 text-sm font-light">No examination. No pressure. No GP referral needed.</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4" id={id}>
              <div className="input-wrap relative">
                <User className="input-icon" size={16} />
                <input
                  required
                  type="text"
                  placeholder="First Name"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  className="landing-input"
                />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="input-wrap relative">
                  <Phone className="input-icon" size={16} />
                  <input
                    required
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    className="landing-input"
                  />
                </div>
                <div className="input-wrap relative">
                  <Mail className="input-icon" size={16} />
                  <input
                    required
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    className="landing-input"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="input-wrap relative">
                  <MessageCircle className="input-icon" size={16} />
                  <select
                    value={formData.contact_method}
                    onChange={e => setFormData({ ...formData, contact_method: e.target.value })}
                    className="landing-input landing-select"
                  >
                    <option value="WhatsApp">Contact: WhatsApp</option>
                    <option value="Phone">Contact: Phone Call</option>
                    <option value="Email">Contact: Email</option>
                  </select>
                  <ChevronDown className="select-chevron" size={15} />
                </div>
                <div className="input-wrap relative">
                  <Clock className="input-icon" size={16} />
                  <select
                    value={formData.contact_time}
                    onChange={e => setFormData({ ...formData, contact_time: e.target.value })}
                    className="landing-input landing-select"
                  >
                    <option value="Morning">Time: Morning</option>
                    <option value="Afternoon">Time: Afternoon</option>
                    <option value="Evening">Time: Evening</option>
                  </select>
                  <ChevronDown className="select-chevron" size={15} />
                </div>
              </div>

              {status === "error" && <p className="text-red-500 text-xs text-center">Something went wrong. Please try again.</p>}
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full flex items-center justify-center gap-2.5 py-4 bg-zinc-950 text-white rounded-2xl text-xs font-bold uppercase tracking-widest hover:bg-black transition-all disabled:opacity-70 shadow-lg"
              >
                {status === "loading" ? <><Loader2 size={15} className="animate-spin" /> Submitting…</> : <><Send size={14} /> Book My Confidential Consultation</>}
              </button>
              
              <div className="text-center space-y-1.5 pt-2">
                <p className="text-[10px] text-zinc-400 flex items-center justify-center gap-1">
                  <Lock size={10} className="text-zinc-500" /> 100% confidential — GDPR secure
                </p>
                <p className="text-[10px] text-zinc-400">
                  Your GP is never contacted without your consent.
                </p>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

// ─── FAQ Accordion ───────────────────────────────────────────────────────────
function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-zinc-200">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between py-5 text-left gap-4 group">
        <span className="text-sm md:text-base font-medium text-zinc-950 group-hover:text-zinc-600 transition-colors">{q}</span>
        <ChevronDown size={18} className={`text-zinc-400 shrink-0 transition-transform duration-300 ${open ? "rotate-180 text-zinc-900" : ""}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm text-zinc-600 font-light leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function VaginismusLandingPage() {
  const [showSticky, setShowSticky] = useState(false)
  
  useEffect(() => {
    document.title = "Vaginismus Treatment Dublin | Confidential Specialist Care | Gerka Clinic"
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) {
      metaDesc.setAttribute("content", "Struggling with vaginismus? Gerka Clinic offers confidential specialist care in Dublin. Book a private, judgement-free consultation today.")
    }

    const handleScroll = () => setShowSticky(window.scrollY > 500)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="bg-[#FAF9F6] min-h-screen overflow-hidden text-zinc-800">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600&display=swap');
        body { font-family: 'Outfit', sans-serif; }

        .landing-input {
          width: 100%;
          padding: 16px 20px 16px 50px;
          background: #FAF9F6;
          border: 1px solid #e5e5e5;
          border-radius: 14px;
          font-size: 14px;
          color: #18181b;
          transition: all 0.2s ease;
        }
        .landing-input::placeholder { color: #a1a1aa; }
        .landing-input:focus {
          border-color: #18181b;
          background: white;
          box-shadow: 0 8px 20px -4px rgba(0, 0, 0, 0.05);
          outline: none;
        }
        .landing-select {
          appearance: none;
          padding-right: 40px;
          cursor: pointer;
        }
        .input-icon {
          position: absolute;
          left: 18px;
          top: 50%;
          transform: translateY(-50%);
          color: #a1a1aa;
          pointer-events: none;
          z-index: 1;
        }
        .select-chevron {
          position: absolute;
          right: 16px;
          top: 50%;
          transform: translateY(-50%);
          color: #a1a1aa;
          pointer-events: none;
        }
        .input-wrap:focus-within .input-icon {
          color: #18181b;
        }
      `}</style>

      {/* Sticky Mobile CTA */}
      <AnimatePresence>
        {showSticky && (
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/95 backdrop-blur-md border-t border-zinc-200 shadow-2xl p-4 pb-6"
          >
            <a
              href="#consultation-form"
              className="flex items-center justify-center gap-2 w-full bg-zinc-900 text-white py-4 rounded-2xl text-[11px] font-bold uppercase tracking-widest shadow-lg shadow-zinc-950/10"
            >
              Book Confidential Consultation →
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sticky WhatsApp Floating Icon */}
      <a
        href="https://wa.me/353878888087"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 right-4 md:bottom-8 z-50 bg-[#25D366] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
        aria-label="WhatsApp Support"
      >
        <MessageCircle size={26} fill="white" />
      </a>

      {/* HEADER SECTION (Removed Main Nav, Single Logo) */}
      <header className="border-b border-zinc-100 bg-[#FAF9F6]/80 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-zinc-900 rounded-xl flex items-center justify-center shadow-md">
              <Sparkles className="text-white" size={16} />
            </div>
            <div>
              <span className="font-semibold tracking-tight text-zinc-900 leading-none block">Gerka Clinic</span>
              <span className="text-[9px] text-zinc-400 tracking-wider uppercase">Women's Health</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline-flex items-center gap-1.5 text-xs text-zinc-500 font-medium">
              <Lock size={12} className="text-zinc-500" /> 100% Confidential
            </span>
            <a
              href="#consultation-form"
              className="text-[10px] md:text-xs font-bold uppercase tracking-widest px-5 py-2.5 bg-zinc-900 text-white rounded-full hover:bg-black transition-colors"
            >
              Book Consultation
            </a>
          </div>
        </div>
      </header>

      {/* SECTION 1: HERO */}
      <section className="relative pt-12 md:pt-20 pb-20 bg-gradient-to-b from-[#FAF9F6] to-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#18181b_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03]" />
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
              <Badge>
                <Lock size={12} className="text-zinc-900" /> Confidential Specialist Care — Judgement-Free
              </Badge>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-zinc-900 tracking-tight leading-[1.1]">
                Vaginismus Treatment Dublin<br />
                <span className="italic font-serif text-zinc-500 font-light block mt-1">Finally, Pain-Free Intimacy Is Possible</span>
              </h1>

              <p className="text-lg md:text-xl text-zinc-600 font-light max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                You are not broken. Vaginismus is a recognised medical condition — and it is treatable. Specialist care at Gerka Clinic Dublin.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2 justify-center lg:justify-start">
                <a
                  href="#consultation-form"
                  className="inline-flex items-center justify-center gap-2 bg-zinc-950 text-white px-8 py-4 rounded-2xl text-xs font-bold uppercase tracking-widest hover:bg-black transition-all shadow-xl shadow-zinc-950/10"
                >
                  Book a Confidential Consultation <ArrowRight size={14} />
                </a>
              </div>

              {/* Trust Bar */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 px-6 py-4 bg-white border border-zinc-200 rounded-2xl mx-auto lg:mx-0 w-fit text-[10px] font-bold uppercase tracking-widest text-zinc-500 shadow-sm">
                <span className="flex items-center gap-1"><span className="text-amber-400">★★★★★</span> Google Reviews</span>
                <span className="text-zinc-200">|</span>
                <span>SEGERF Board Registered Specialists</span>
                <span className="text-zinc-200">|</span>
                <span className="flex items-center gap-1"><Lock size={10} className="text-zinc-900" /> 100% Confidential</span>
                <span className="text-zinc-200">|</span>
                <span>Dublin Clinic</span>
              </div>
            </div>

            {/* Right Form Card */}
            <div className="lg:col-span-5 w-full max-w-md mx-auto lg:max-w-none">
              <ConsultationForm id="hero-consultation-form" />
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: YOU ARE NOT ALONE */}
      <section className="py-20 md:py-28 bg-[#FAF9F6] relative border-y border-zinc-200/50">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
          <Badge className="bg-white">You Are Not Alone</Badge>
          <h2 className="text-3xl md:text-5xl font-light text-zinc-900 tracking-tight leading-tight">
            You've Probably Never Said This <br className="hidden sm:inline" />
            <span className="italic font-serif text-zinc-500 font-light">Out Loud to Anyone</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-3xl mx-auto pt-4">
            <div className="space-y-4">
              <div className="flex gap-3">
                <span className="text-zinc-400 text-lg">✦</span>
                <p className="text-zinc-600 font-light leading-relaxed">Painful or impossible penetration.</p>
              </div>
              <div className="flex gap-3">
                <span className="text-zinc-400 text-lg">✦</span>
                <p className="text-zinc-600 font-light leading-relaxed">Avoiding intimacy because of fear or pain.</p>
              </div>
              <div className="flex gap-3">
                <span className="text-zinc-400 text-lg">✦</span>
                <p className="text-zinc-600 font-light leading-relaxed">Feeling like your body is working against you.</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex gap-3">
                <span className="text-zinc-400 text-lg">✦</span>
                <p className="text-zinc-600 font-light leading-relaxed">Maybe you've tried before and couldn't go through with it.</p>
              </div>
              <div className="flex gap-3">
                <span className="text-zinc-400 text-lg">✦</span>
                <p className="text-zinc-600 font-light leading-relaxed">Maybe you've never been able to have a smear test.</p>
              </div>
              <div className="flex gap-3">
                <span className="text-zinc-400 text-lg">✦</span>
                <p className="text-zinc-600 font-light leading-relaxed">Maybe you've cancelled intimate moments to avoid the pain.</p>
              </div>
            </div>
          </div>

          <div className="max-w-2xl mx-auto pt-6 space-y-6 text-zinc-600 font-light leading-relaxed">
            <p>
              You've possibly Googled this in secret, late at night, wondering if something is wrong with you.
            </p>
            <p className="text-2xl font-serif italic text-zinc-500">
              There isn't.
            </p>
            <p>
              Vaginismus is an involuntary muscle spasm response — your body's protective reflex, not a character flaw. And it is one of the most treatable conditions we see at Gerka Clinic.
            </p>
            <p className="font-semibold text-zinc-800">
              You don't have to keep living with this.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: WHAT IS VAGINISMUS */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <Badge>Medical Education</Badge>
            <h2 className="text-3xl md:text-5xl font-light text-zinc-900 tracking-tight leading-tight">
              Understanding <br className="hidden sm:inline" />
              <span className="italic font-serif text-zinc-500">Vaginismus</span>
            </h2>
            <p className="text-zinc-600 font-light leading-relaxed">
              Vaginismus is the involuntary contraction of the vaginal muscles, making penetration painful, difficult or impossible.
            </p>
            <div className="space-y-3 pt-2">
              <p className="text-zinc-700 font-medium">It can affect:</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-zinc-600">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-900" /> Sexual intercourse
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-900" /> Gynaecological exams (smears)
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-900" /> Tampon use
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-900" /> Medical procedures
                </li>
              </ul>
            </div>
            <p className="text-zinc-500 font-light text-sm italic pt-4">
              It has nothing to do with desire, attraction or emotional willingness. It is a physical, treatable muscle response.
            </p>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-[#FAF9F6] p-8 rounded-3xl border border-zinc-200 space-y-4">
              <span className="text-3xl">🌸</span>
              <h3 className="text-lg font-medium text-zinc-900">Primary Vaginismus</h3>
              <p className="text-sm text-zinc-600 font-light leading-relaxed">
                Has always been present — penetration has never been possible or comfortable.
              </p>
            </div>
            
            <div className="bg-[#FAF9F6] p-8 rounded-3xl border border-zinc-200 space-y-4">
              <span className="text-3xl">🌱</span>
              <h3 className="text-lg font-medium text-zinc-900">Secondary Vaginismus</h3>
              <p className="text-sm text-zinc-600 font-light leading-relaxed">
                Developed after a period of normal function — often triggered by trauma, childbirth, infection, menopause or surgery.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 4: OUR TREATMENT APPROACH */}
      <section className="py-20 md:py-28 bg-[#FAF9F6]/50 border-t border-zinc-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <Badge>Medical Approach</Badge>
            <h2 className="text-3xl md:text-5xl font-light text-zinc-900 tracking-tight">
              How We Treat Vaginismus <br />
              <span className="italic font-serif text-zinc-500">at Gerka Clinic</span>
            </h2>
            <div className="bg-white border border-zinc-200 p-6 rounded-2xl text-zinc-700 text-sm font-light leading-relaxed mt-6 max-w-2xl mx-auto shadow-sm">
              "We take a holistic, medical approach to vaginismus. Treatment is always personalised and may combine several techniques depending on your individual case."
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white border border-zinc-200 p-8 rounded-3xl space-y-4 shadow-sm flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-900">
                  <Stethoscope size={24} />
                </div>
                <h3 className="text-lg font-semibold text-zinc-900">Botox for Vaginismus</h3>
                <p className="text-zinc-600 font-light text-sm leading-relaxed">
                  The gold standard medical treatment. Botulinum toxin is precisely injected to temporarily relax the vaginal muscles, breaking the spasm cycle and allowing graduated dilation therapy to begin.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-zinc-200 p-8 rounded-3xl space-y-4 shadow-sm flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-900">
                  <Sparkles size={24} />
                </div>
                <h3 className="text-lg font-semibold text-zinc-900">PRP / O-Shot Support</h3>
                <p className="text-zinc-600 font-light text-sm leading-relaxed">
                  Platelet-rich plasma therapy to improve tissue health, sensitivity and healing — often used alongside Botox treatment for comprehensive results.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-zinc-200 p-8 rounded-3xl space-y-4 shadow-sm flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-900">
                  <ShieldCheck size={24} />
                </div>
                <h3 className="text-lg font-semibold text-zinc-900">Personalised Treatment Plan</h3>
                <p className="text-zinc-600 font-light text-sm leading-relaxed">
                  Every patient receives a full assessment and tailored treatment plan. We never use a one-size-fits-all approach.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center text-zinc-500 text-xs font-light max-w-md mx-auto border-t border-zinc-200 pt-6">
            📢 <strong className="text-zinc-800 font-medium">Clinical Note:</strong> All treatments are administered by our specialist gynaecologists. Your comfort and dignity are our absolute priority.
          </div>
        </div>
      </section>

      {/* SECTION 5: BENEFITS */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-5 space-y-6">
            <Badge>Life-Changing Results</Badge>
            <h2 className="text-3xl md:text-5xl font-light text-zinc-900 tracking-tight leading-tight">
              What Treatment Can <br />
              <span className="italic font-serif text-zinc-500 font-light">Mean for You</span>
            </h2>
            <p className="text-zinc-600 font-light leading-relaxed">
              We look beyond clinical numbers. We look at restoring clinical and emotional freedom to your everyday personal life.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Pain-free intimacy for the first time",
                "Ability to complete smear tests comfortably",
                "Freedom from fear and avoidance",
                "Restored confidence and relationship wellbeing",
                "Treated by specialist gynaecologists",
                "Completely confidential — no GP referral needed",
                "Judgement-free environment",
                "Results-focused personalised care"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 bg-[#FAF9F6] p-4 rounded-2xl border border-zinc-200">
                  <div className="w-5 h-5 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-900 shrink-0 mt-0.5">
                    <Check size={12} />
                  </div>
                  <span className="text-sm font-light text-zinc-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 6: WHAT TO EXPECT */}
      <section className="py-20 md:py-28 bg-[#FAF9F6]/50 border-t border-zinc-200">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <Badge>Your Journey</Badge>
            <h2 className="text-3xl md:text-5xl font-light text-zinc-900 tracking-tight">
              Your Journey <span className="italic font-serif text-zinc-500">at Gerka Clinic</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "Step 1",
                title: "Confidential Consultation",
                desc: "A safe, private conversation with our specialist. No examination on first visit unless you wish. We listen first. Always."
              },
              {
                step: "Step 2",
                title: "Assessment & Plan",
                desc: "Full medical assessment and personalised treatment plan created just for you."
              },
              {
                step: "Step 3",
                title: "Treatment",
                desc: "Carried out with complete care for your comfort and dignity. You are in control at every stage."
              },
              {
                step: "Step 4",
                title: "Follow-Up & Support",
                desc: "We monitor your progress and adjust your plan as needed. You are never left to navigate this alone."
              }
            ].map((s, i) => (
              <div key={i} className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">{s.step}</span>
                <h3 className="text-base font-semibold text-zinc-900">{s.title}</h3>
                <p className="text-sm text-zinc-600 font-light leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-white border border-zinc-200 p-8 rounded-3xl text-center max-w-xl mx-auto shadow-sm">
            <p className="text-base font-serif italic text-zinc-500">
              "You will never be rushed. You will never be judged. You are in complete control of your treatment at all times."
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 7: SOCIAL PROOF */}
      <section className="py-20 md:py-28 max-w-5xl mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <Badge>Real Patient Stories</Badge>
          <h2 className="text-3xl md:text-5xl font-light text-zinc-900 tracking-tight">
            You Don't Have to Take <span className="italic font-serif text-zinc-500">Our Word for It</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              text: "I had lived with vaginismus for 8 years and never told anyone. The team at Gerka made me feel so safe and understood from the very first call. Treatment changed my life.",
              location: "Anonymous, Dublin"
            },
            {
              text: "I couldn't complete a smear test for years. After treatment at Gerka Clinic I finally could. I wish I had done this sooner.",
              location: "Anonymous, Kildare"
            },
            {
              text: "The most compassionate medical experience I have ever had. Professional, discreet and genuinely life-changing results.",
              location: "Anonymous, Wicklow"
            }
          ].map((t, i) => (
            <div key={i} className="bg-white border border-zinc-200 p-8 rounded-3xl space-y-4 shadow-sm">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, idx) => <Star key={idx} size={16} className="fill-current" />)}
              </div>
              <p className="text-sm font-light leading-relaxed text-zinc-700 italic">"{t.text}"</p>
              <div className="text-xs font-semibold text-zinc-500 pt-2 border-t border-zinc-100">
                {t.location}
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-[11px] text-zinc-400 font-light mt-8">
          All testimonials shared with full patient consent. Names withheld to protect privacy.
        </p>
      </section>

      {/* SECTION 8: FAQ */}
      <section className="py-20 md:py-28 bg-[#FAF9F6]/50 border-t border-zinc-200">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge>Common Questions</Badge>
            <h2 className="text-3xl md:text-5xl font-light text-zinc-900 tracking-tight">
              Frequently Asked <span className="italic font-serif text-zinc-500">Questions</span>
            </h2>
          </div>

          <div className="space-y-1">
            {[
              {
                q: "Do I need a GP referral?",
                a: "No. You can book directly with us. Your GP does not need to be informed."
              },
              {
                q: "Will anyone else know I came here?",
                a: "No. All consultations and treatments are completely confidential and GDPR secure. We never contact your GP without your consent."
              },
              {
                q: "Is Botox treatment painful?",
                a: "We use topical anaesthetic cream before treatment. Most patients report minimal discomfort. Your comfort is managed throughout."
              },
              {
                q: "How many sessions will I need?",
                a: "This varies by individual. Most patients see significant improvement within 1–3 sessions combined with dilation therapy guidance."
              },
              {
                q: "What if I'm too nervous to come in?",
                a: "We understand. You are welcome to call or WhatsApp us first to ask questions anonymously before booking. No pressure ever."
              },
              {
                q: "Is this treatable if I've had it my whole life?",
                a: "Yes. Primary vaginismus responds very well to treatment. Many of our patients had never experienced pain-free intimacy before treatment."
              },
              {
                q: "How much does it cost?",
                a: "We'll discuss all costs transparently at your free consultation. There is no obligation to proceed."
              }
            ].map((faq, index) => (
              <FAQItem key={index} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: ABOUT THE CLINIC */}
      <section className="py-20 md:py-28 max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <Badge>Medical Excellence</Badge>
            <h2 className="text-3xl md:text-5xl font-light text-zinc-900 tracking-tight">
              Specialist Care <br />
              <span className="italic font-serif text-zinc-500">You Can Trust</span>
            </h2>
            <p className="text-zinc-600 font-light leading-relaxed">
              Gerka Clinic is led by specialist gynaecologists trained at Universitat de Barcelona and registered with the SEGERF board. We combine medical expertise with genuine compassion for women's intimate health.
            </p>
          </div>

          <div className="lg:col-span-6 space-y-3">
            {[
              { text: "Specialist Gynaecologists" },
              { text: "SEGERF Board Registered" },
              { text: "100% Confidential — GDPR Secure" },
              { text: "Dublin Clinic — Stillorgan Road" },
              { text: "Available by Phone, Email & WhatsApp" }
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 bg-[#FAF9F6] p-4 rounded-2xl border border-zinc-200">
                <div className="w-6 h-6 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-900 shrink-0">
                  <Check size={12} />
                </div>
                <span className="text-sm font-medium text-zinc-700">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10: FINAL CTA & FORM */}
      <section id="consultation-form" className="py-20 md:py-28 bg-[#FAF9F6]/50 border-t border-zinc-200 scroll-mt-10">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-12">
          <div className="space-y-4">
            <Badge>Your First Step</Badge>
            <h2 className="text-3xl md:text-5xl font-light text-zinc-900 tracking-tight leading-tight">
              Take the First Step — <br />
              <span className="italic font-serif text-zinc-500">In Complete Confidence</span>
            </h2>
            <p className="text-zinc-600 font-light max-w-lg mx-auto">
              You've carried this long enough. A confidential consultation is the only first step you need to take today.
            </p>
            <p className="text-zinc-900 font-medium text-sm">
              No examination. No pressure. No judgement. Just a conversation with a specialist who understands.
            </p>
          </div>

          <div className="max-w-md mx-auto text-left">
            <ConsultationForm id="bottom-consultation-form" />
          </div>

          <div className="space-y-4 text-zinc-500 text-xs font-light pt-6">
            <p className="text-sm font-medium text-zinc-800">
              Prefer to call or message anonymously first?
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-sm font-medium">
              <a href="tel:+353878888087" className="hover:text-zinc-900 flex items-center gap-1 bg-white px-4 py-2 rounded-full border border-zinc-200 shadow-sm">
                📞 Call: +353 87 888 8087
              </a>
              <a href="https://wa.me/353878888087" className="hover:text-zinc-900 flex items-center gap-1 bg-white px-4 py-2 rounded-full border border-zinc-200 shadow-sm">
                💬 WhatsApp: +353 87 888 8087
              </a>
            </div>
            <p className="text-[11px] text-zinc-400">
              Monday–Saturday by appointment · We respond within 2 hours during clinic hours
            </p>
          </div>
        </div>
      </section>

      {/* SIMPLE DISCREET FOOTER (No nav routes) */}
      <footer className="border-t border-zinc-200 bg-[#FAF9F6] py-8 text-center text-xs text-zinc-400">
        <div className="max-w-7xl mx-auto px-6 space-y-2">
          <p>© {new Date().getFullYear()} Gerka Clinic Dublin. All Rights Reserved.</p>
          <p>Confidential women's health medical services. GDPR Compliant.</p>
        </div>
      </footer>
    </main>
  )
}
