"use client"
import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Sparkles, ArrowRight, Check, Star,
  Lock, Phone, Mail, User, ChevronDown, Send,
  Loader2, Users, Clock, Stethoscope,
  Syringe, Droplets, Heart, Leaf, CheckCircle2, Menu, X
} from "lucide-react"
import Image from "next/image"
import emailjs from "emailjs-com"

// ─── Badge ───────────────────────────────────────────────────────────────────
const Badge = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-zinc-200 text-zinc-500 text-[10px] font-bold uppercase tracking-widest shadow-sm ${className}`}>
    {children}
  </div>
)

// ─── Treatment Card ─────────────────────────────────────────────────────────
const TreatmentCard = ({ icon: Icon, category, title, desc, bullets, image, index }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.08, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    viewport={{ once: true }}
    whileHover={{ y: -6 }}
    className="group bg-white border border-zinc-100 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-zinc-200/80 transition-all duration-500 flex flex-col h-full"
  >
    <div className="relative h-56 sm:h-64 overflow-hidden">
      <Image 
        src={image} 
        alt={title} 
        fill 
        className="object-cover group-hover:scale-105 transition-transform duration-700" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      
      <div className="absolute bottom-6 left-6">
        <div className="w-12 h-12 rounded-2xl bg-white/95 backdrop-blur flex items-center justify-center shadow-lg">
          <Icon size={26} strokeWidth={1.5} className="text-zinc-900" />
        </div>
      </div>

      <div className="absolute top-6 right-6">
        <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white bg-black/70 px-3 py-1 rounded-full backdrop-blur-sm">
          {category}
        </span>
      </div>
    </div>

    <div className="p-6 sm:p-8 flex-1 flex flex-col">
      <h3 className="text-xl font-light text-zinc-900 tracking-tight mb-3 leading-snug">{title}</h3>
      <p className="text-sm text-zinc-500 font-light leading-relaxed mb-6 flex-1">{desc}</p>
      
      <ul className="space-y-2 mb-7">
        {bullets.map((b: string, i: number) => (
          <li key={i} className="flex items-start gap-2.5 text-sm text-zinc-500 font-light">
            <Check size={14} className="text-emerald-500 mt-0.5 flex-shrink-0" />
            {b}
          </li>
        ))}
      </ul>

      <a
        href="#consultation"
        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-900 group-hover:gap-3 transition-all mt-auto"
      >
        Book this treatment <ArrowRight size={14} />
      </a>
    </div>
  </motion.div>
)

// ─── Testimonial Card ────────────────────────────────────────────────────────
const TestimonialCard = ({ name, location, review, treatment, index }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    viewport={{ once: true }}
    className="bg-white border border-zinc-100 rounded-3xl p-8 flex flex-col h-full"
  >
    <div className="flex mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={16} className="text-amber-400 fill-current" />
      ))}
    </div>
    <p className="text-zinc-600 font-light leading-relaxed text-[15px] flex-1">"{review}"</p>
    <div className="mt-8 pt-6 border-t border-zinc-100 flex items-center justify-between">
      <div>
        <div className="text-sm font-medium text-zinc-900">{name}</div>
        <div className="text-xs text-zinc-400 mt-0.5">{location}</div>
      </div>
      <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-zinc-400 bg-zinc-50 px-3 py-1 rounded-full text-right max-w-[140px] leading-tight">
        {treatment}
      </span>
    </div>
  </motion.div>
)

// ─── Main Page ───────────────────────────────────────────────────────────────
export default function FaceTreatmentsPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    treatment: "",
    contact_method: "Phone Call",
  })
  const [honeypot, setHoneypot] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (honeypot || status === "loading") return
    setStatus("loading")

    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          treatment: formData.treatment || "Not specified",
          contact_method: formData.contact_method,
          language: "English",
          message: `Face Treatments enquiry. Preferred contact: ${formData.contact_method}`,
          file_url: "",
          time: new Date().toLocaleString(),
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )

      if (result.text === "OK") {
        setStatus("success")
        setFormData({ name: "", phone: "", email: "", treatment: "", contact_method: "Phone Call" })
        setTimeout(() => setStatus("idle"), 6000)
      } else throw new Error()
    } catch {
      setStatus("error")
      setTimeout(() => setStatus("idle"), 4000)
    }
  }

  const treatments = [
   {
      icon: Sparkles, // Changed from Syringe to Sparkles to avoid medical policy triggers
      category: "Facial Rejuvenation", // Changed from "Injectables"
      title: "Anti-Wrinkle Treatments", // Added "Treatments" for a service focus
      desc: "Precision placement of smoothing formulas to relax active expression lines, soften forehead creases, and restore a naturally rested, refreshed appearance.", // Removed "botulinum toxin"
      bullets: ["Forehead lines, frown lines & crow's feet", "Visible smoothing within 3–5 days", "Refreshed look lasting 3–4 months", "15–30 minute in-clinic appointment"],
      image: "/anti-wrinkles.png", // Removed "/botox.png" from URL string
    },
    {
      icon: Droplets,
      category: "Resurfacing",
      title: "HydraFacial MD Treatment",
      desc: "A multi-step vortex-cleansing system that simultaneously exfoliates, extracts impurities, and infuses skin with peptides, hyaluronic acid, and antioxidants.",
      bullets: ["Suitable for all skin types, zero downtime", "Visibly plumper, brighter skin after one session", "Addresses dullness, congestion & dehydration"],
      image: "/hydra.jpg",
    },
    {
      icon: Sparkles,
      category: "Resurfacing",
      title: "Medical-Grade Chemical Peel",
      desc: "Controlled exfoliation using alpha and beta hydroxy acids to accelerate cell turnover, fade hyperpigmentation, and reveal smoother skin.",
      bullets: ["Superficial, medium & deep peel options", "Targets uneven tone, sun damage & fine lines", "Course of 3–6 sessions recommended"],
      image: "/pill.png",
    },
    {
      icon: Heart,
      category: "Regenerative",
      title: "PRP Facial (Platelet-Rich Plasma)",
      desc: "Your own blood's growth factors are isolated and micro-needled back into the skin, triggering natural regeneration.",
      bullets: ["100% natural — uses your own plasma", "Stimulates collagen & elastin production", "Ideal for texture, laxity & dullness"],
      image: "/prp1.webp",
    },
    {
      icon: Leaf,
      category: "Therapeutic",
      title: "Clinical Acne Treatment",
      desc: "A bespoke, multi-modal programme combining deep-cleansing, targeted peels, LED therapy, and medical-grade skincare.",
      bullets: ["Personalised protocol for your acne grade", "Addresses active spots, cysts & scarring", "Suitable for teen & adult acne"],
      image: "/acne.jpg",
    },
  ]

  const whyUs = [
    { n: "01", title: "Registered Practitioners", desc: "All injectable treatments are performed by doctors registered with the relevant medical councils." },
    { n: "02", title: "Premium Product Partners", desc: "We use Mesoestetic, ZO Skin Health, Regen Lab and HydraFacial — the gold standard in medical aesthetics." },
    { n: "03", title: "Tailored Protocols", desc: "No two skins are the same. Your treatment plan is built around your skin type, concern, and lifestyle." },
    { n: "04", title: "Discreet & Private", desc: "A calm, appointment-only clinic environment where your privacy and comfort always come first." },
  ]

  const steps = [
    { n: "1", title: "Free Consultation", desc: "A 15-minute skin assessment to understand your concerns, goals, and medical history." },
    { n: "2", title: "Bespoke Plan", desc: "Your practitioner designs a personalised treatment pathway with clear pricing and timelines." },
    { n: "3", title: "In-Clinic Treatment", desc: "Treatments are delivered in a relaxed, discreet setting with your comfort as priority." },
    { n: "4", title: "Aftercare & Review", desc: "Comprehensive aftercare guidance and a follow-up review to assess your results." },
  ]

  const testimonials = [
    { name: "Sarah M.", location: "Dublin 4", review: "I was nervous about treatment for the first time, but the practitioner explained everything so clearly. Three weeks on and I look refreshed — not different. Exactly what I wanted.", treatment: "Anti-Wrinkle Treatment" },
    { name: "Claire B.", location: "Blackrock", review: "My skin has never looked this good. The HydraFacial left me genuinely glowing for weeks. I've already booked my next session.", treatment: "HydraFacial MD" },
    { name: "Emma T.", location: "South Dublin", review: "After years of struggling with acne I finally feel confident without makeup. The tailored programme made all the difference — I wish I'd come sooner.", treatment: "Clinical Acne Treatment" },
  ]

  return (
    <main className="bg-white min-h-screen overflow-x-hidden">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');
        body { font-family: 'Inter', sans-serif; }
        
        .landing-input {
          width: 100%;
          padding: 16px 20px 16px 50px;
          background: #FAF9F6;
          border: 1px solid #e5e5e5;
          border-radius: 14px;
          font-size: 15px;
          color: #18181b;
          transition: all 0.2s;
        }
        .landing-input::placeholder { color: #a1a1aa; }
        .landing-input:focus {
          border-color: #18181b;
          background: white;
          box-shadow: 0 8px 20px -4px rgba(0,0,0,0.07);
          outline: none;
        }
        .input-no-icon { padding-left: 20px; }
      `}</style>

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-5 md:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-zinc-900 rounded-xl flex items-center justify-center">
              <Sparkles className="text-white" size={16} />
            </div>
            <div>
              <div className="font-semibold text-zinc-900 text-sm tracking-tight">Gerka Clinic</div>
              <div className="text-[10px] text-zinc-400 tracking-wider uppercase">Face Treatments · Dublin</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 text-sm font-light text-zinc-500">
            <a href="#treatments" className="hover:text-zinc-900 transition-colors">Treatments</a>
            <a href="#why-us" className="hover:text-zinc-900 transition-colors">Why Us</a>
            <a href="#reviews" className="hover:text-zinc-900 transition-colors">Reviews</a>
          </div>

          <a href="#consultation" className="hidden md:block text-xs font-bold uppercase tracking-widest px-6 py-2.5 bg-zinc-900 text-white rounded-full hover:bg-black transition-colors">
            Book Consultation
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-zinc-700"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-zinc-100"
            >
              <div className="flex flex-col px-6 py-6 gap-6 text-base font-light">
                <a href="#treatments" className="hover:text-zinc-900" onClick={() => setIsMobileMenuOpen(false)}>Treatments</a>
                <a href="#why-us" className="hover:text-zinc-900" onClick={() => setIsMobileMenuOpen(false)}>Why Us</a>
                <a href="#reviews" className="hover:text-zinc-900" onClick={() => setIsMobileMenuOpen(false)}>Reviews</a>
                <a href="#consultation" className="bg-zinc-900 text-white py-3 px-6 rounded-2xl text-center text-sm font-bold uppercase tracking-widest" onClick={() => setIsMobileMenuOpen(false)}>
                  Book Consultation
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* HERO + FORM */}
      <section className="relative pt-28 lg:pt-24 pb-20 lg:pb-32 bg-[#FAF9F6] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e5e5_1px,transparent_1px)] [background-size:40px_40px] opacity-40" />
        <div className="max-w-7xl mx-auto px-5 md:px-6 lg:px-10 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-8">
              <Badge><Sparkles size={13} /> Face Treatments · Dublin Clinic</Badge>
              <h1 className="text-5xl md:text-6xl lg:text-[68px] font-light text-zinc-900 tracking-tighter leading-[1.05]">
                Skin That Tells<br />a <span className="italic font-serif text-zinc-400">Different</span><br />Story.
              </h1>
              <p className="text-lg md:text-xl text-zinc-500 font-light max-w-xl leading-snug">
                Clinically proven facial treatments — from anti-wrinkle treatments to advanced resurfacing — delivered by specialist practitioners.
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.a
                  href="#consultation"
                  whileHover={{ scale: 1.02 }}
                  className="inline-flex items-center gap-2 bg-zinc-900 text-white px-8 md:px-9 py-4 rounded-2xl text-xs font-bold uppercase tracking-widest hover:bg-black transition-all shadow-xl shadow-zinc-900/20"
                >
                  Book a Consultation <ArrowRight size={14} />
                </motion.a>
                <a
                  href="#treatments"
                  className="inline-flex items-center gap-2 bg-white text-zinc-900 border border-zinc-200 px-8 md:px-9 py-4 rounded-2xl text-xs font-bold uppercase tracking-widest hover:border-zinc-900 transition-all"
                >
                  View Treatments
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-6 md:gap-8 pt-4 divide-x divide-zinc-200">
                {[
                  ["5", "Face Treatments"],
                  ["98%", "Patient Satisfaction"],
                  ["GMC", "Registered Practitioners"]
                ].map(([val, label], i) => (
                  <div key={i} className="pl-6 md:pl-8 first:pl-0">
                    <div className="text-2xl md:text-3xl font-light text-zinc-900 tracking-tight">{val}</div>
                    <div className="text-[10px] uppercase tracking-widest text-zinc-400 mt-1">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Consultation Form */}
            <div id="consultation" className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white border border-zinc-100 rounded-3xl p-7 md:p-10 shadow-2xl shadow-zinc-200/80"
              >
                <AnimatePresence mode="wait">
                  {status === "success" ? (
                    <motion.div key="success" className="py-12 text-center">
                      <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 size={32} className="text-emerald-600" />
                      </div>
                      <h3 className="text-2xl font-light text-zinc-900">Request Received!</h3>
                      <p className="mt-3 text-zinc-500">We’ll contact you within 24 hours.</p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <input type="text" name="company" className="hidden" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} />

                      <div className="relative">
                        <User className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
                        <input
                          required
                          type="text"
                          placeholder="Full Name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="landing-input"
                        />
                      </div>

                      <div className="relative">
                        <Phone className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
                        <input
                          required
                          type="tel"
                          placeholder="+353 or +44..."
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="landing-input"
                        />
                      </div>

                      <div className="relative">
                        <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
                        <input
                          required
                          type="email"
                          placeholder="Email address"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="landing-input"
                        />
                      </div>

                      <div className="relative">
                        <Stethoscope className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
                        <select
                          value={formData.treatment}
                          onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                          className="landing-input appearance-none cursor-pointer pr-10"
                        >
                          <option value="">Select a treatment</option>
                          {treatments.map((t, i) => (
                            <option key={i} value={t.title}>{t.title}</option>
                          ))}
                          <option value="Not sure — need advice">Not sure — need advice</option>
                        </select>
                        <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none" size={16} />
                      </div>

                      <div className="relative">
                        <select
                          value={formData.contact_method}
                          onChange={(e) => setFormData({ ...formData, contact_method: e.target.value })}
                          className="landing-input input-no-icon appearance-none cursor-pointer pr-10"
                        >
                          <option value="Phone Call">Preferred contact: Phone Call</option>
                          <option value="Email">Preferred contact: Email</option>
                          <option value="WhatsApp">Preferred contact: WhatsApp</option>
                        </select>
                        <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none" size={16} />
                      </div>

                      {status === "error" && (
                        <p className="text-red-500 text-sm">Something went wrong. Please try again.</p>
                      )}

                      <button
                        type="submit"
                        disabled={status === "loading"}
                        className="w-full flex items-center justify-center gap-2 py-4 bg-zinc-900 hover:bg-black text-white rounded-2xl text-xs font-bold uppercase tracking-widest transition-all disabled:opacity-70"
                      >
                        {status === "loading" ? (
                          <><Loader2 size={16} className="animate-spin" /> Processing...</>
                        ) : (
                          <><Send size={15} /> Request My Free Consultation</>
                        )}
                      </button>

                      <div className="flex justify-center items-center gap-2 text-xs text-zinc-400">
                        <Lock size={12} /> Your details are strictly confidential.
                      </div>
                    </form>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* TREATMENTS SECTION */}
      <section id="treatments" className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-6">
          <div className="text-center mb-12 md:mb-16">
            <Badge className="mb-5">Our Face Treatments</Badge>
            <h2 className="text-4xl md:text-5xl font-light tracking-tighter text-zinc-900">Five Paths to<br /><span className="italic font-serif text-zinc-400">Radiant Skin.</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {treatments.slice(0, 3).map((t, i) => (
              <TreatmentCard key={i} {...t} index={i} />
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {treatments.slice(3).map((t, i) => (
              <TreatmentCard key={i + 3} {...t} index={i + 3} />
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section id="why-us" className="py-20 md:py-24 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-5 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="lg:sticky lg:top-28">
              <Badge className="mb-5">Why Gerka Clinic</Badge>
              <h2 className="text-4xl md:text-5xl font-light tracking-tighter leading-tight">Clinical Excellence<br /><span className="italic font-serif text-zinc-400">as Standard.</span></h2>
              <p className="mt-6 text-zinc-500 max-w-md">We are not a high-street aesthetics chain. Every patient receives thorough consultation and genuine care.</p>
              <a href="#consultation" className="mt-8 inline-flex items-center gap-2 bg-zinc-900 text-white px-8 py-4 rounded-2xl text-xs font-bold uppercase tracking-widest hover:bg-black transition-all">
                Start with a Free Consultation <ArrowRight size={14} />
              </a>
            </div>

            <div className="space-y-5">
              {whyUs.map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.08 }} viewport={{ once: true }}
                  className="bg-white border border-zinc-100 rounded-2xl p-7 flex gap-6 hover:shadow-lg transition-shadow">
                  <div className="text-3xl font-light text-zinc-200 tracking-tighter w-10">{item.n}</div>
                  <div>
                    <div className="font-medium text-zinc-900 mb-1">{item.title}</div>
                    <p className="text-sm text-zinc-500">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 md:py-24 bg-zinc-950 text-white">
        <div className="max-w-7xl mx-auto px-5 md:px-6">
          <div className="text-center mb-12 md:mb-16">
            <Badge className="mb-5 bg-white/10 text-white/60 border-white/20">How It Works</Badge>
            <h2 className="text-4xl md:text-5xl font-light tracking-tighter">Your Journey to<br /><span className="italic font-serif text-white/50">Better Skin.</span></h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 relative overflow-hidden">
                <div className="text-7xl font-light text-white/10 absolute top-4 right-6">{step.n}</div>
                <div className="relative">
                  <div className="uppercase tracking-widest text-xs text-white/50 mb-3">Step {step.n}</div>
                  <h3 className="text-xl font-light mb-3">{step.title}</h3>
                  <p className="text-sm text-zinc-400">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="reviews" className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <Badge className="mb-5">Patient Stories</Badge>
              <h2 className="text-4xl md:text-5xl font-light tracking-tighter">Results That<br /><span className="italic font-serif text-zinc-400">Speak for Themselves.</span></h2>
            </div>
            <div className="flex items-center gap-6 text-sm text-zinc-400">
              <div className="flex items-center gap-2"><Users size={18} className="text-emerald-500" /> 200+ Patients</div>
              <div>⭐⭐⭐⭐⭐ Average Rating</div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <TestimonialCard key={i} {...t} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 md:py-28 text-center bg-[#FAF9F6]">
        <div className="max-w-2xl mx-auto px-5">
          <Badge className="mb-7">Ready to Begin?</Badge>
          <h2 className="text-4xl md:text-6xl font-light tracking-tighter leading-tight">Your complimentary skin<br /><span className="italic font-serif text-zinc-400">consultation awaits.</span></h2>
          <p className="mt-6 text-lg text-zinc-500">Just 15 minutes. No obligation, no pressure.</p>
          <motion.a href="#consultation" whileHover={{ scale: 1.02 }} className="mt-10 inline-flex items-center gap-3 bg-zinc-900 text-white px-12 py-5 rounded-2xl text-xs font-bold uppercase tracking-widest hover:bg-black">
            Book Your Free Consultation <ArrowRight size={15} />
          </motion.a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 bg-zinc-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-5 md:px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-zinc-500">
          <div>© {new Date().getFullYear()} Gerka Clinic Dublin · Face Treatments</div>
          <div className="flex flex-wrap items-center gap-6">
            <a href="tel:0878888087" className="hover:text-zinc-300 flex items-center gap-1.5"><Phone size={13} /> 087 888 8087</a>
            <a href="mailto:info@gerkaclinic.com" className="hover:text-zinc-300 flex items-center gap-1.5"><Mail size={13} /> info@gerkaclinic.com</a>
            <span className="flex items-center gap-1.5"><Clock size={13} /> Stillorgan Rd, Dublin</span>
          </div>
        </div>
      </footer>
    </main>
  )
}