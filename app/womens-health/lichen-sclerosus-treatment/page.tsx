"use client"
import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Check, Star, Lock, Phone, Mail, User, Clock,
  ChevronDown, Loader2, ShieldCheck, MapPin,
  Sparkles, MessageCircle, Stethoscope, Send, ArrowRight,
  AlertCircle, Calendar, Users, Award
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
    duration: "Under 1 year",
    contact_time: "Morning",
    contact_method: "WhatsApp"
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
          treatment: `Lichen Sclerosus Treatment (Symptoms: ${formData.duration})`,
          language: "English",
          message: `Preferred Contact Time: ${formData.contact_time}. Duration of symptoms: ${formData.duration}`,
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
              <h3 className="text-2xl font-light tracking-tight text-zinc-900 uppercase mt-1">Book A Free Consultation</h3>
              <p className="mt-2 text-zinc-500 text-sm font-light">No GP referral required. Complete medical privacy.</p>
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
                <Clock className="input-icon" size={16} />
                <select
                  value={formData.duration}
                  onChange={e => setFormData({ ...formData, duration: e.target.value })}
                  className="landing-input landing-select"
                >
                  <option value="Under 1 year">Symptom Duration: Under 1 year</option>
                  <option value="1–3 years">Symptom Duration: 1–3 years</option>
                  <option value="3–5 years">Symptom Duration: 3–5 years</option>
                  <option value="Over 5 years">Symptom Duration: Over 5 years</option>
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
                {status === "loading" ? <><Loader2 size={15} className="animate-spin" /> Submitting…</> : <><Send size={14} /> Book My Free Consultation</>}
              </button>
              
              <div className="text-center space-y-1.5 pt-2">
                <p className="text-[10px] text-zinc-400 flex items-center justify-center gap-1">
                  <Lock size={10} className="text-zinc-500" /> 100% confidential — GDPR secure
                </p>
                <p className="text-[10px] text-zinc-400">
                  No GP referral needed · Your privacy is guaranteed.
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

export default function LichenSclerosusLandingPage() {
  const [showSticky, setShowSticky] = useState(false)
  
  useEffect(() => {
    document.title = "Lichen Sclerosus Treatment Dublin | Advanced Care | Gerka Clinic"
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) {
      metaDesc.setAttribute("content", "Specialist gynaecologist-led treatment for Lichen Sclerosus at Gerka Clinic Dublin. Advanced CO2 laser and PRP therapies for long-term symptom control.")
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
              Book Free Consultation →
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

      {/* HEADER SECTION */}
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
                <Stethoscope size={12} className="text-zinc-900" /> Specialist Gynaecologist Care — No GP Referral Needed
              </Badge>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-zinc-900 tracking-tight leading-[1.1]">
                Lichen Sclerosus Treatment Dublin<br />
                <span className="italic font-serif text-zinc-500 font-light block mt-1">Advanced Care Beyond Steroid Creams</span>
              </h1>

              <p className="text-lg md:text-xl text-zinc-600 font-light max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Specialist gynaecologist-led treatment for Lichen Sclerosus at Gerka Clinic Dublin. Clinically proven therapies for long-term symptom control and quality of life.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2 justify-center lg:justify-start">
                <a
                  href="#consultation-form"
                  className="inline-flex items-center justify-center gap-2 bg-zinc-950 text-white px-8 py-4 rounded-2xl text-xs font-bold uppercase tracking-widest hover:bg-black transition-all shadow-xl shadow-zinc-950/10"
                >
                  Book a Free Confidential Consultation <ArrowRight size={14} />
                </a>
              </div>

              {/* Trust Bar */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 px-6 py-4 bg-white border border-zinc-200 rounded-2xl mx-auto lg:mx-0 w-fit text-[10px] font-bold uppercase tracking-widest text-zinc-500 shadow-sm">
                <span className="flex items-center gap-1"><span className="text-amber-400">★★★★★</span></span>
                <span className="text-zinc-200">|</span>
                <span>SEGERF Registered</span>
                <span className="text-zinc-200">|</span>
                <span>No GP Referral Required</span>
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
          <Badge className="bg-white">They Feel Understood</Badge>
          <h2 className="text-3xl md:text-5xl font-light text-zinc-900 tracking-tight leading-tight">
            "You've Been Told To Just Use Steroid Cream <br className="hidden sm:inline" />
            <span className="italic font-serif text-zinc-500 font-light">— But It's Not Enough"</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-3xl mx-auto pt-4">
            <div className="space-y-4">
              <div className="flex gap-3">
                <span className="text-red-500 text-lg">✦</span>
                <p className="text-zinc-600 font-light leading-relaxed">Constant itching, burning and physical discomfort.</p>
              </div>
              <div className="flex gap-3">
                <span className="text-red-500 text-lg">✦</span>
                <p className="text-zinc-600 font-light leading-relaxed">White patches that won't go away.</p>
              </div>
              <div className="flex gap-3">
                <span className="text-red-500 text-lg">✦</span>
                <p className="text-zinc-600 font-light leading-relaxed">Pain during intercourse or skin that tears and bleeds.</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex gap-3">
                <span className="text-zinc-400 text-lg">✦</span>
                <p className="text-zinc-600 font-light leading-relaxed">You've been prescribed steroid creams that only help temporarily.</p>
              </div>
              <div className="flex gap-3">
                <span className="text-zinc-400 text-lg">✦</span>
                <p className="text-zinc-600 font-light leading-relaxed">You've Googled in frustration, wondering if anyone truly specialises in this.</p>
              </div>
              <div className="flex gap-3">
                <span className="text-zinc-900 text-lg">✦</span>
                <p className="text-zinc-800 font-medium leading-relaxed">At Gerka Clinic, we do.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: WHAT IS LICHEN SCLEROSUS */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <Badge>Medical Overview</Badge>
            <h2 className="text-3xl md:text-5xl font-light text-zinc-900 tracking-tight leading-tight">
              Understanding <br className="hidden sm:inline" />
              <span className="italic font-serif text-zinc-500">Lichen Sclerosus</span>
            </h2>
            <p className="text-zinc-600 font-light leading-relaxed">
              A chronic autoimmune inflammatory condition affecting the vulva and anal area. Characterised by thin, fragile skin that is highly susceptible to discomfort and structural changes.
            </p>
            <div className="space-y-3 pt-2">
              <p className="text-zinc-700 font-medium">Common Symptoms & Indicators:</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-zinc-600">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-900" /> White, thin, fragile skin patches
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-900" /> Intense itching and burning
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-900" /> Pain or tearing during intercourse
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-900" /> Scarring if left untreated
                </li>
                <li className="flex items-center gap-2 col-span-1 sm:col-span-2 text-red-600 font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-600 inline-block mr-1" /> Increased risk of vulvar cancer without monitoring
                </li>
              </ul>
            </div>
            <p className="text-zinc-500 font-light text-sm italic pt-4">
              Most common in postmenopausal women — but can affect women of any age. Frequently misdiagnosed as thrush or eczema, and often undertreated with steroids alone.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-[#FAF9F6] p-8 rounded-3xl border border-zinc-200 space-y-4 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-amber-500" />
              <div className="flex items-center gap-3 text-amber-600">
                <AlertCircle size={24} />
                <h3 className="text-lg font-medium text-zinc-900">Important Box</h3>
              </div>
              <p className="text-sm text-zinc-700 font-light leading-relaxed">
                "Lichen Sclerosus requires specialist monitoring. Long-term steroid use without specialist oversight can thin tissue further. Advanced treatment options exist beyond standard steroid protocols."
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 4: OUR TREATMENT APPROACH */}
      <section className="py-20 md:py-28 bg-[#FAF9F6]/50 border-t border-zinc-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <Badge>Advanced Treatment</Badge>
            <h2 className="text-3xl md:text-5xl font-light text-zinc-900 tracking-tight">
              Advanced LS Treatment <br />
              <span className="italic font-serif text-zinc-500">at Gerka Clinic</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Stethoscope,
                title: "Specialist Assessment & Diagnosis",
                desc: "Full gynaecological examination and personalised treatment plan. We assess severity, symptoms and history before recommending any treatment."
              },
              {
                icon: ShieldCheck,
                title: "Optimised Medical Management",
                desc: "Expert steroid protocol management — correct application technique, dosing and frequency that many GPs don't have time to teach."
              },
              {
                icon: Sparkles,
                title: "Laser Therapy for LS",
                desc: "CO2 fractional laser — stimulates collagen, removes damaged tissue, promotes healthy skin regeneration. Proven effective for treatment-resistant LS."
              },
              {
                icon: MessageCircle,
                title: "Regenerative PRP Therapy",
                desc: "PRP accelerates healing, reduces inflammation and enhances tissue regeneration — used alongside laser for comprehensive results."
              },
              {
                icon: Calendar,
                title: "Long-Term Monitoring Plan",
                desc: "LS requires ongoing surveillance due to skin cancer risk. We provide structured follow-up to protect your long-term health."
              }
            ].map((card, idx) => {
              const Icon = card.icon
              return (
                <div key={idx} className="bg-white border border-zinc-200 p-8 rounded-3xl space-y-4 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-900">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-lg font-semibold text-zinc-900">{card.title}</h3>
                    <p className="text-zinc-600 font-light text-sm leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* SECTION 5: BENEFITS */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-5 space-y-6">
            <Badge>Why Choose Us</Badge>
            <h2 className="text-3xl md:text-5xl font-light text-zinc-900 tracking-tight leading-tight">
              Our Core <br />
              <span className="italic font-serif text-zinc-500 font-light">Benefits</span>
            </h2>
            <p className="text-zinc-600 font-light leading-relaxed">
              We provide specialised, clinical care specifically tailored for Lichen Sclerosus to restore comfort, confidence, and peace of mind.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Specialist gynaecologist — not a GP or beauty clinic",
                "Advanced treatments beyond steroid creams",
                "Clinically proven laser & regenerative therapies",
                "No GP referral required",
                "Long-term monitoring for cancer risk",
                "Judgement-free confidential care",
                "SEGERF board registered clinicians",
                "Serving Dublin, Kildare & Wicklow"
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

      {/* SECTION 6: WHO THIS IS FOR */}
      <section className="py-20 md:py-28 bg-[#FAF9F6]/50 border-t border-zinc-200">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <Badge>Is This For You?</Badge>
            <h2 className="text-3xl md:text-5xl font-light text-zinc-900 tracking-tight">
              "This Treatment Is For You If..."
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "You've been diagnosed with Lichen Sclerosus",
              "Steroid creams are not giving lasting relief",
              "Your symptoms are significantly affecting your quality of life or intimacy",
              "You want specialist monitoring, not just repeat prescriptions",
              "You've been struggling for months or years without real answers",
              "You want to explore laser or regenerative treatment options"
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-white p-5 rounded-2xl border border-zinc-200 shadow-sm">
                <div className="w-6 h-6 rounded-full bg-zinc-900 text-white flex items-center justify-center shrink-0 mt-0.5">
                  <Check size={14} />
                </div>
                <span className="text-sm font-medium text-zinc-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: SOCIAL PROOF */}
      <section className="py-20 md:py-28 max-w-5xl mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <Badge>Real Experiences</Badge>
          <h2 className="text-3xl md:text-5xl font-light text-zinc-900 tracking-tight">
            What Our Patients Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              text: "I had suffered with LS for 6 years using only steroid creams. Gerka Clinic was the first place that gave me a proper treatment plan and real improvement in symptoms. Life-changing.",
              author: "Anonymous, Dublin"
            },
            {
              text: "After years of misdiagnosis I finally got confirmed LS diagnosis and specialist treatment at Gerka. The laser treatment has made an enormous difference.",
              author: "Anonymous, Kildare"
            },
            {
              text: "Professional, compassionate and genuinely expert care. The monitoring programme gives me real peace of mind.",
              author: "Anonymous, Wicklow"
            }
          ].map((t, i) => (
            <div key={i} className="bg-white border border-zinc-200 p-8 rounded-3xl space-y-4 shadow-sm">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, idx) => <Star key={idx} size={16} className="fill-current" />)}
              </div>
              <p className="text-sm font-light leading-relaxed text-zinc-700 italic">"{t.text}"</p>
              <div className="text-xs font-semibold text-zinc-500 pt-2 border-t border-zinc-100">
                — {t.author}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 8: FAQ */}
      <section className="py-20 md:py-28 bg-[#FAF9F6]/50 border-t border-zinc-200">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge>FAQ</Badge>
            <h2 className="text-3xl md:text-5xl font-light text-zinc-900 tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-1">
            {[
              {
                q: "Do I need a GP referral?",
                a: "No. You can book directly and confidentially."
              },
              {
                q: "How is this different from GP treatment?",
                a: "GPs typically prescribe steroid creams. Our specialist gynaecologists offer full assessment, advanced laser therapy, regenerative treatments and structured long-term monitoring."
              },
              {
                q: "Is laser treatment safe for LS?",
                a: "Yes. CO2 fractional laser is clinically proven for LS treatment, stimulating collagen and healthy tissue regeneration."
              },
              {
                q: "How many sessions will I need?",
                a: "Typically 3–4 sessions spaced 4 weeks apart, followed by a monitoring plan. We'll advise at your free consultation."
              },
              {
                q: "Does it hurt?",
                a: "Topical anaesthetic is applied before treatment. Most patients report minimal discomfort."
              },
              {
                q: "Can LS lead to cancer?",
                a: "LS increases the risk of vulvar squamous cell carcinoma. This is why specialist long-term monitoring is essential — not just symptom management."
              },
              {
                q: "How much does treatment cost?",
                a: "Discussed transparently at your free consultation. No obligation to proceed."
              }
            ].map((faq, index) => (
              <FAQItem key={index} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: FINAL CTA & FORM */}
      <section id="consultation-form" className="py-20 md:py-28 bg-[#FAF9F6]/50 border-t border-zinc-200 scroll-mt-10">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-12">
          <div className="space-y-4">
            <Badge>Your First Step</Badge>
            <h2 className="text-3xl md:text-5xl font-light text-zinc-900 tracking-tight leading-tight">
              Take Back Control of Your Health
            </h2>
            <p className="text-zinc-600 font-light max-w-lg mx-auto">
              You deserve specialist care, not just repeat prescriptions. Book a free consultation today.
            </p>
          </div>

          <div className="max-w-md mx-auto text-left">
            <ConsultationForm id="bottom-consultation-form" />
          </div>

          <div className="space-y-4 text-zinc-500 text-xs font-light pt-6">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-sm font-medium">
              <a href="tel:+353878888087" className="hover:text-zinc-950 flex items-center gap-1 bg-white px-4 py-2 rounded-full border border-zinc-200 shadow-sm">
                📞 Call: +353 87 888 8087
              </a>
              <a href="https://wa.me/353878888087" className="hover:text-zinc-950 flex items-center gap-1 bg-white px-4 py-2 rounded-full border border-zinc-200 shadow-sm">
                💬 WhatsApp: +353 87 888 8087
              </a>
            </div>
            <p className="text-[11px] text-zinc-400">
              🔒 100% Confidential — GDPR Secure · No GP referral needed · We respond within 2 hours Mon–Sat
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-200 bg-[#FAF9F6] py-8 text-center text-xs text-zinc-400">
        <div className="max-w-7xl mx-auto px-6 space-y-2">
          <p>© {new Date().getFullYear()} Gerka Clinic Dublin. All Rights Reserved.</p>
          <p>Confidential women's health medical services. GDPR Compliant.</p>
        </div>
      </footer>
    </main>
  )
}
