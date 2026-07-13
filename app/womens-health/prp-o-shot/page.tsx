"use client"
import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Check, Star, Lock, Phone, Mail, User, Clock,
  ChevronDown, Loader2, ShieldCheck, MapPin,
  Sparkles, MessageCircle, Stethoscope, X, Send, ArrowRight,
  Activity, Droplets, Info
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
    concern: "General intimate wellness",
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
          treatment: `PRP / O-Shot - Concern: ${formData.concern}`,
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
              <p className="mt-2 text-zinc-500 text-sm font-light">No obligation. Complete medical privacy guaranteed.</p>
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

              <div className="input-wrap relative">
                <Activity className="input-icon" size={16} />
                <select
                  value={formData.concern}
                  onChange={e => setFormData({ ...formData, concern: e.target.value })}
                  className="landing-input landing-select"
                >
                  <option value="Reduced sensation">Main Concern: Reduced sensation</option>
                  <option value="Vaginal dryness">Main Concern: Vaginal dryness</option>
                  <option value="Difficulty with orgasm">Main Concern: Difficulty with orgasm</option>
                  <option value="Post-menopausal changes">Main Concern: Post-menopausal changes</option>
                  <option value="Post-pregnancy changes">Main Concern: Post-pregnancy changes</option>
                  <option value="General intimate wellness">Main Concern: General intimate wellness</option>
                  <option value="Other">Main Concern: Other</option>
                </select>
                <ChevronDown className="select-chevron" size={15} />
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

export default function OShotLandingPage() {
  const [showSticky, setShowSticky] = useState(false)
  
  useEffect(() => {
    document.title = "O-Shot / PRP Treatment Dublin | Intimate Wellness | Gerka Clinic"
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) {
      metaDesc.setAttribute("content", "Restore sensitivity, pleasure, and treat vaginal dryness naturally with the O-Shot PRP treatment. Non-surgical, confidential medical clinic in Dublin.")
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
      <section className="relative pt-8 md:pt-10 pb-20 bg-gradient-to-b from-[#FAF9F6] to-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#18181b_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03]" />
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
              <Badge>
                Advanced Regenerative Women's Health
              </Badge>

              <h1 className="text-3xl sm:text-5xl md:text-5xl font-light text-zinc-900 tracking-tight leading-[1.1]">
                O-Shot / PRP Treatment Dublin<br />
                <span className="italic font-serif text-zinc-500 font-light block mt-1">Restore Sensitivity, Pleasure & Intimate Wellness</span>
              </h1>

              <p className="text-lg md:text-xl text-zinc-600 font-light max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Platelet-rich plasma therapy to naturally restore intimate sensitivity, treat dryness and enhance sexual wellness. Medically administered at Gerka Clinic.
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
                <span>SEGERF Board Registered</span>
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

      {/* SECTION 2: PROBLEM */}
      <section className="py-20 md:py-28 bg-[#FAF9F6] relative border-y border-zinc-200/50">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
          <Badge className="bg-white">Restoring Vitality</Badge>
          <h2 className="text-3xl md:text-5xl font-light text-zinc-900 tracking-tight leading-tight">
            When Intimacy No Longer <br className="hidden sm:inline" />
            <span className="italic font-serif text-zinc-500 font-light">Feels Like It Used To</span>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-left max-w-4xl mx-auto pt-4">
            {[
              { label: "Dryness & Discomfort", desc: "Constant dryness and discomfort that will not resolve with temporary moisturisers." },
              { label: "Reduced Sensation", desc: "Decreased sensitivity and tactile response during personal intimate moments." },
              { label: "Difficulty with Orgasm", desc: "Finding it increasingly difficult or impossible to reach climax." },
              { label: "Loss of Confidence", desc: "Feeling disconnected from your body and your intimate relationship." }
            ].map((p, idx) => (
              <div key={idx} className="bg-white border border-zinc-200 p-6 rounded-2xl shadow-sm space-y-3">
                <span className="text-2xl">✨</span>
                <h3 className="font-semibold text-sm text-zinc-900">{p.label}</h3>
                <p className="text-xs text-zinc-500 font-light leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="max-w-2xl mx-auto pt-6 space-y-6 text-zinc-600 font-light leading-relaxed">
            <p>
              These changes are more common than you think — and more treatable than most women realise.
            </p>
            <p>
              Whether you're experiencing post-pregnancy changes, menopausal shifts, or simply want to restore how things felt before — the O-Shot offers a clinically proven, natural solution.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: WHAT IS THE O-SHOT */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-5 space-y-6">
            <Badge>Scientific Innovation</Badge>
            <h2 className="text-3xl md:text-5xl font-light text-zinc-900 tracking-tight leading-tight">
              What Is <br className="hidden sm:inline" />
              <span className="italic font-serif text-zinc-500">The O-Shot?</span>
            </h2>
            <p className="text-zinc-600 font-light leading-relaxed">
              The O-Shot (Orgasm Shot) is an advanced PRP (Platelet-Rich Plasma) treatment that uses your own blood's growth factors to regenerate and rejuvenate intimate tissue.
            </p>
            <div className="bg-white border border-zinc-200 p-6 rounded-2xl text-sm font-light text-zinc-700 italic shadow-sm">
              "Restored sensitivity, improved lubrication, enhanced pleasure and stronger sensation — using nothing but your own biology."
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="grid grid-cols-1 gap-4">
              {[
                { step: "Step 1 — Blood Draw", desc: "A small amount of blood is drawn — similar to a routine blood test.", icon: "🩸" },
                { step: "Step 2 — PRP Preparation", desc: "Your blood is spun in a centrifuge to concentrate the platelet-rich plasma — your body's own natural growth factors.", icon: "⚗️" },
                { step: "Step 3 — Precise Injection", desc: "PRP is carefully injected into specific intimate areas to stimulate tissue regeneration, nerve growth and natural lubrication.", icon: "💉" }
              ].map((s, idx) => (
                <div key={idx} className="flex items-center gap-5 bg-[#FAF9F6] border border-zinc-200 p-6 rounded-2xl">
                  <div className="w-12 h-12 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-xl shrink-0 shadow-sm">
                    {s.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-zinc-900 text-sm">{s.step}</h3>
                    <p className="text-xs text-zinc-500 font-light leading-relaxed mt-1">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 4: WHAT IT TREATS */}
      <section className="py-20 md:py-28 bg-[#FAF9F6]/50 border-t border-zinc-200">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <Badge>Indication List</Badge>
            <h2 className="text-3xl md:text-5xl font-light text-zinc-900 tracking-tight">
              What the O-Shot <span className="italic font-serif text-zinc-500">Can Help With</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="space-y-4 bg-white p-8 rounded-3xl border border-zinc-200 shadow-sm">
              {[
                "Reduced sexual sensitivity",
                "Difficulty reaching orgasm",
                "Vaginal dryness & atrophy",
                "Stress urinary incontinence",
                "Lichen sclerosus support"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-900 shrink-0">
                    <Check size={12} />
                  </div>
                  <span className="text-sm font-light text-zinc-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="space-y-4 bg-white p-8 rounded-3xl border border-zinc-200 shadow-sm">
              {[
                "Post-menopausal changes",
                "Post-pregnancy intimate changes",
                "Reduced arousal",
                "Painful intercourse (dyspareunia)",
                "Overall intimate wellness"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-900 shrink-0">
                    <Check size={12} />
                  </div>
                  <span className="text-sm font-light text-zinc-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: BENEFITS */}
      <section className="py-20 md:py-28 max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <Badge>Treatment Advantages</Badge>
            <h2 className="text-3xl md:text-5xl font-light text-zinc-900 tracking-tight leading-tight">
              Why Women Choose <br />
              <span className="italic font-serif text-zinc-500">the O-Shot</span>
            </h2>
            <p className="text-zinc-600 font-light leading-relaxed">
              We leverage your body's innate healing mechanisms. A completely natural alternative to surgical procedures and synthetic hormone supplements.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Uses your own PRP — no foreign substances",
                "Natural regenerative process",
                "Minimal discomfort — topical numbing used",
                "No downtime — resume activities same day",
                "Results improve progressively over 3 months",
                "Single session with long-lasting results",
                "Medically administered by specialists",
                "Completely confidential"
              ].map((b, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-[#FAF9F6] p-4 rounded-2xl border border-zinc-200">
                  <div className="w-5 h-5 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-900 shrink-0">
                    <Check size={12} />
                  </div>
                  <span className="text-xs font-medium text-zinc-700">{b}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: RESULTS TIMELINE */}
      <section className="py-20 md:py-28 bg-[#FAF9F6]/50 border-t border-zinc-200">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <Badge>Expected Milestones</Badge>
            <h2 className="text-3xl md:text-5xl font-light text-zinc-900 tracking-tight">
              What to Expect — <span className="italic font-serif text-zinc-500">Your O-Shot Journey</span>
            </h2>
          </div>

          <div className="relative border-l border-zinc-200 ml-4 md:ml-32 space-y-8">
            {[
              { time: "Day 1", desc: "Treatment session. Minimal discomfort. Resume normal activities same day." },
              { time: "Week 1–2", desc: "Initial tissue response begins." },
              { time: "Week 4–6", desc: "Noticeable improvement in sensitivity." },
              { time: "Month 2–3", desc: "Progressive regeneration continues." },
              { time: "Month 3", desc: "Full results — enhanced sensation, improved lubrication, stronger response." },
              { time: "Longevity", desc: "Results typically last 12–18 months. Maintenance session recommended annually." }
            ].map((milestone, idx) => (
              <div key={idx} className="relative pl-8">
                <div className="absolute -left-2.5 top-1.5 w-5 h-5 rounded-full bg-white border-2 border-zinc-500 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-500" />
                </div>
                <div className="md:absolute md:-left-32 md:top-1 md:w-24 text-left md:text-right text-xs font-bold uppercase tracking-wider text-zinc-800">
                  {milestone.time}
                </div>
                <p className="text-sm font-light text-zinc-700 leading-relaxed">
                  {milestone.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: O-SHOT VS ALTERNATIVES */}
      <section className="py-20 md:py-28 max-w-5xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <Badge>Comparison Guide</Badge>
          <h2 className="text-3xl md:text-5xl font-light text-zinc-900 tracking-tight">
            How Does the O-Shot <span className="italic font-serif text-zinc-500">Compare?</span>
          </h2>
        </div>

        <div className="overflow-x-auto rounded-3xl border border-zinc-200 shadow-sm bg-white">
          <table className="w-full text-left border-collapse text-xs md:text-sm">
            <thead>
              <tr className="bg-[#FAF9F6] border-b border-zinc-200">
                <th className="p-4 md:p-6 font-semibold text-zinc-900">Feature</th>
                <th className="p-4 md:p-6 font-bold text-zinc-900 bg-zinc-50">O-Shot</th>
                <th className="p-4 md:p-6 font-semibold text-zinc-700">HRT</th>
                <th className="p-4 md:p-6 font-semibold text-zinc-700">Lubricants</th>
                <th className="p-4 md:p-6 font-semibold text-zinc-700">Surgery</th>
              </tr>
            </thead>
            <tbody>
              {[
                { label: "Uses own biology", oshot: "✅", hrt: "❌", lubes: "❌", surg: "❌" },
                { label: "No hormones", oshot: "✅", hrt: "❌", lubes: "✅", surg: "✅" },
                { label: "Treats root cause", oshot: "✅", hrt: "⚠️", lubes: "❌", surg: "⚠️" },
                { label: "No downtime", oshot: "✅", hrt: "✅", lubes: "✅", surg: "❌" },
                { label: "Long-lasting", oshot: "✅", hrt: "✅", lubes: "❌", surg: "✅" },
                { label: "Improves sensitivity", oshot: "✅", hrt: "⚠️", lubes: "❌", surg: "❌" },
                { label: "Available Dublin", oshot: "✅", hrt: "✅", lubes: "✅", surg: "✅" }
              ].map((row, idx) => (
                <tr key={idx} className="border-b border-zinc-100 hover:bg-zinc-50/50">
                  <td className="p-4 md:p-6 font-medium text-zinc-800">{row.label}</td>
                  <td className="p-4 md:p-6 text-center font-bold text-lg bg-zinc-50/50">{row.oshot}</td>
                  <td className="p-4 md:p-6 text-center font-medium text-zinc-500">{row.hrt}</td>
                  <td className="p-4 md:p-6 text-center font-medium text-zinc-500">{row.lubes}</td>
                  <td className="p-4 md:p-6 text-center font-medium text-zinc-500">{row.surg}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* SECTION 8: SOCIAL PROOF */}
      <section className="py-20 md:py-28 bg-[#FAF9F6]/50 border-t border-zinc-200">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge>Real Patient Stories</Badge>
            <h2 className="text-3xl md:text-5xl font-light text-zinc-900 tracking-tight">
              Real Women, <span className="italic font-serif text-zinc-500">Real Results</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                text: "After menopause intimacy became uncomfortable and sensation was almost gone. The O-Shot restored things I thought were lost forever. I wish I'd known about this sooner.",
                location: "Anonymous, Dublin"
              },
              {
                text: "Post-pregnancy my body felt completely different in intimacy. The O-Shot gave me back confidence and sensation I hadn't felt in years.",
                location: "Anonymous, Wicklow"
              },
              {
                text: "Professional, discreet and genuinely effective. The team at Gerka Clinic made me feel completely at ease throughout. Results exceeded my expectations.",
                location: "Anonymous, Kildare"
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
            All testimonials shared with full patient consent. Names withheld to protect patient privacy.
          </p>
        </div>
      </section>

      {/* SECTION 9: FAQ */}
      <section className="py-20 md:py-28 max-w-3xl mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <Badge>Common Questions</Badge>
          <h2 className="text-3xl md:text-5xl font-light text-zinc-900 tracking-tight">
            Frequently Asked <span className="italic font-serif text-zinc-500">Questions</span>
          </h2>
        </div>

        <div className="space-y-1">
          {[
            {
              q: "Is the O-Shot painful?",
              a: "Topical numbing cream is applied before treatment. Most patients report minimal discomfort. The procedure takes approximately 30 minutes."
            },
            {
              q: "How quickly will I see results?",
              a: "Some women notice improvement within weeks. Full results develop progressively over 3 months as tissue regeneration occurs."
            },
            {
              q: "How long do results last?",
              a: "Typically 12–18 months. An annual maintenance session helps sustain results long-term."
            },
            {
              q: "Is it safe?",
              a: "Yes. PRP uses your own blood — there is no risk of allergic reaction or rejection. It is a well-established regenerative medicine technique."
            },
            {
              q: "Do I need a GP referral?",
              a: "No. You can book directly and confidentially. Your GP is never contacted without your consent."
            },
            {
              q: "Can it be combined with other treatments?",
              a: "Yes. The O-Shot is often combined with Emsella for pelvic floor strengthening or with treatment for vaginismus for comprehensive intimate wellness."
            },
            {
              q: "How much does it cost?",
              a: "Pricing is discussed at your free consultation. There is no obligation to proceed."
            }
          ].map((faq, index) => (
            <FAQItem key={index} q={faq.q} a={faq.a} />
          ))}
        </div>
      </section>

      {/* SECTION 10: FINAL CTA & FORM */}
      <section id="consultation-form" className="py-20 md:py-28 bg-[#FAF9F6]/50 border-t border-zinc-200 scroll-mt-10">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-12">
          <div className="space-y-4">
            <Badge>Your First Step</Badge>
            <h2 className="text-3xl md:text-5xl font-light text-zinc-900 tracking-tight leading-tight">
              Reclaim Your Intimate Wellness — <br />
              <span className="italic font-serif text-zinc-500">In Complete Confidence</span>
            </h2>
            <p className="text-zinc-600 font-light max-w-lg mx-auto">
              Book a free, no-obligation consultation with our specialist team today.
            </p>
          </div>

          <div className="max-w-md mx-auto text-left">
            <ConsultationForm id="bottom-consultation-form" />
          </div>

          <div className="space-y-4 text-zinc-500 text-xs font-light pt-6">
            <p className="text-sm font-medium text-zinc-800">
              Prefer to reach out directly?
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-sm font-medium">
              <a href="tel:+353878888087" className="hover:text-zinc-950 flex items-center gap-1 bg-white px-4 py-2 rounded-full border border-zinc-200 shadow-sm">
                📞 Call: +353 87 888 8087
              </a>
              <a href="https://wa.me/353878888087" className="hover:text-zinc-950 flex items-center gap-1 bg-white px-4 py-2 rounded-full border border-zinc-200 shadow-sm">
                💬 WhatsApp: +353 87 888 8087
              </a>
            </div>
            <p className="text-[11px] text-zinc-400">
              We respond within 2 hours · Monday–Saturday by appointment
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
