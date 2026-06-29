"use client"
import React, { useState, useEffect } from "react" // Added useEffect
import { motion, AnimatePresence } from "framer-motion"
import {
  ShieldCheck, Microscope, Sparkles, Sun, Sprout,
  ArrowRight, Check, Star, Lock, Stethoscope,
  Phone, Mail, User, Clock, ChevronRight,
  Award, Users, Send, Loader2, ChevronDown
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import emailjs from "emailjs-com"
import { useRouter } from "next/navigation"

// ─── Badge ───────────────────────────────────────────────────────────────────
const Badge = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-zinc-200 text-zinc-500 text-[10px] font-bold uppercase tracking-widest shadow-sm ${className}`}>
    {children}
  </div>
)

// ─── TreatmentCard ───────────────────────────────────────────────────────────
const TreatmentCard = ({ icon: Icon, title, desc, image }: { icon: any; title: string; desc: string; image: string }) => (
  <motion.div
    whileHover={{ y: -8 }}
    className="group relative bg-white border border-zinc-100 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-700 h-full flex flex-col"
  >
    <div className="relative h-64 overflow-hidden">
      <Image src={image} alt={title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      <div className="absolute bottom-6 left-6">
        <div className="w-12 h-12 rounded-2xl bg-white/95 backdrop-blur flex items-center justify-center mb-4 shadow-lg">
          <Icon size={26} strokeWidth={1.5} className="text-zinc-900" />
        </div>
      </div>
    </div>
    <div className="p-8 flex-1 flex flex-col">
      <h3 className="text-2xl font-light text-zinc-900 mb-3 tracking-tight">{title}</h3>
      <p className="text-zinc-600 font-light leading-relaxed flex-1">{desc}</p>
      <Link href="#" className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-zinc-900 hover:text-black group-hover:gap-3 transition-all">
        Learn More <ArrowRight size={16} />
      </Link>
    </div>
  </motion.div>
)

// ─── TestimonialCard ─────────────────────────────────────────────────────────
const TestimonialCard = ({ name, review, date, stars, role }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-white p-8 rounded-3xl border border-zinc-100 shadow-sm h-full flex flex-col"
  >
    <div className="flex items-center gap-4 mb-6">
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center text-white font-semibold text-xl flex-shrink-0">
        {name[0]}
      </div>
      <div>
        <div className="font-medium text-zinc-900">{name}</div>
        <div className="text-xs text-zinc-500">{role}</div>
      </div>
    </div>
    <div className="flex mb-4">
      {[...Array(stars)].map((_, i) => (
        <Star key={i} className="text-amber-400 fill-current" size={18} />
      ))}
    </div>
    <p className="text-zinc-600 leading-relaxed font-light flex-1">"{review}"</p>
    <div className="mt-8 pt-6 border-t border-zinc-100 text-[10px] uppercase tracking-widest text-zinc-400 font-medium">
      {date}
    </div>
  </motion.div>
)

// ─── Page ────────────────────────────────────────────────────────────────────
export default function SkinScalpLandingPage() {
  const router = useRouter()

  // 1. Handle SEO inside the Client Component since export const metadata is disallowed here
  useEffect(() => {
    document.title = "Dermatology Dublin | Dublin Laser & Skin Clinic | Gerka Clinic";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Looking for dermatology Dublin services? Gerka Clinic is a trusted Dublin laser and skin clinic offering advanced treatments for pigmentation, rosacea, skin rejuvenation and more.");
    }
  }, []);

  const [formData, setFormData] = useState({
    name: "", phone: "", email: "",
    treatment: "General Inquiry",
    contact_method: "Email",
    language: "English",
    message: "",
  })
  const [honeypot, setHoneypot] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

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
          contact_method: formData.contact_method,
          treatment: formData.treatment,
          language: formData.language,
          message: formData.message,
          file_url: "",
          time: new Date().toLocaleString(),
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )

      if (result.text === "OK") {
        setStatus("success")
        setFormData({ name: "", phone: "", email: "", treatment: "General Inquiry", contact_method: "Email", language: "English", message: "" })
        setTimeout(() => {
          router.push("/skin/thank-you")
        }, 1500)
      } else {
        throw new Error("Failed to send email")
      }
    } catch (error) {
      console.error("Submission Error:", error)
      setStatus("error")
      setTimeout(() => setStatus("idle"), 4000)
    }
  }

  const testimonials = [
    { name: "Carol A.", review: "I went for the first time to the appointment with Dr. Giselle because a friend has recommended her to me. The evaluation was great for both treatments and I started with a mole removal on my face. It wasn't painful and I feel so happy about it. I have another appointment for a second treatment. I appreciate the attention and the good job with professional like Giselle.", date: "7 months ago", stars: 5, role: "Local Guide" },
    { name: "Ajoke Nurudeen", review: "Gerka clinic has made such a huge difference in my life! They were so sensitive and empathetic towards my issue! Made me feel comfortable all the way through. I would recommend them and I wish there were more clinics like that.", date: "4 months ago", stars: 5, role: "Patient" },
    { name: "Liam G", review: "Great, professional service. I attended with bad toenail fungus issues and Giselle and team were excellent. Huge improvement over one year of treatment. I would highly recommend.", date: "3 months ago", stars: 5, role: "Patient" },
  ]

  const treatments = [
    { icon: Microscope, title: "Lesion Removal",         desc: "Precise medical removal of moles, skin tags, cysts and other benign lesions with minimal scarring.",                        image: "/lision1.webp" },
    { icon: Sparkles,   title: "Rosacea Management",     desc: "Advanced protocols to reduce redness, inflammation and visible blood vessels for clearer, calmer skin.",                  image: "/rosacae.webp" },
    { icon: Sun,        title: "Pigmentation & Melasma", desc: "World-leading Cosmelan® depigmentation treatment for stubborn melasma and sun damage.",                                   image: "/pigmentation.jpeg"  },
    { icon: Sprout,     title: "Hair Restoration",       desc: "PRP therapy, mesotherapy and regenerative protocols to combat hair thinning and loss.",                                   image: "/hair.jpeg"  },
  ]

  const selectClass = "landing-input appearance-none w-full pr-10 cursor-pointer"

  return (
    <main className="bg-white min-h-screen overflow-hidden">

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');
        body { font-family: 'Inter', sans-serif; }

        .landing-input {
          width: 100%;
          padding: 16px 20px 16px 50px;
          background: #FAF9F6;
          border: 1px solid #e5e5e5;
          border-radius: 14px;
          font-size: 14px;
          color: #18181b;
          transition: border-color 0.2s, background 0.2s, box-shadow 0.2s;
        }
        .landing-input::placeholder { color: #a1a1aa; }
        .landing-input:focus {
          border-color: #18181b;
          background: white;
          box-shadow: 0 8px 20px -4px rgba(0,0,0,0.07);
          outline: none;
        }
        .landing-input-no-icon {
          padding-left: 20px;
        }
        .input-icon {
          position: absolute;
          left: 16px;
          top: 50%;
          transform: translateY(-50%);
          color: #a1a1aa;
          pointer-events: none;
          transition: color 0.2s;
        }
        .input-wrap:focus-within .input-icon { color: #18181b; }
        .select-chevron {
          position: absolute;
          right: 14px;
          top: 50%;
          transform: translateY(-50%);
          color: #a1a1aa;
          pointer-events: none;
        }

        @media (max-width: 768px) {
          .hero-h1 { 
            font-size: 42px !important; 
            line-height: 1.05 !important; 
          }
          .section-h2 {
            font-size: 2.25rem !important;
            line-height: 1.1 !important;
          }
        }

        .section-h2 {
          font-size: 3rem;
          @media (min-width: 768px) {
            font-size: 3.75rem;
          }
        }
      `}</style>

      {/* ── NAV ─────────────────────────────────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-zinc-900 rounded-xl flex items-center justify-center">
              <Sparkles className="text-white" size={16} />
            </div>
            <div>
              <div className="font-semibold tracking-tight text-zinc-900 leading-none">Gerka Clinic</div>
              <div className="text-[10px] text-zinc-400 mt-0.5 tracking-wider uppercase">Dublin</div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-light text-zinc-500">
            <a href="#programmes" className="hover:text-zinc-900 transition-colors">Treatments</a>
            <a href="#reviews"    className="hover:text-zinc-900 transition-colors">Reviews</a>
            <a href="#contact"    className="hover:text-zinc-900 transition-colors">Contact</a>
          </div>
          <a
            href="#consultation"
            className="text-xs font-semibold uppercase tracking-widest px-6 py-2.5 bg-zinc-900 text-white rounded-full hover:bg-black transition-colors"
          >
            Book Consultation
          </a>
        </div>
      </nav>

      {/* ── HERO + FORM ─────────────────────────────────────────────────── */}
      <section className="relative pt-28 lg:pt-20 pb-20 lg:pb-32 bg-[#FAF9F6] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e5e5_1px,transparent_1px)] [background-size:40px_40px] opacity-40" />

        <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

            {/* Left */}
            <div className="lg:col-span-7 space-y-8">
              <Badge><Sparkles size={14} /> Dublin • Medical Dermatology</Badge>

              <h1 className="hero-h1 text-[54px] md:text-[72px] font-light text-zinc-900 tracking-tighter leading-[1.05] text-center lg:text-left">
                Expert Skin &amp;<br />
                Scalp Care in{" "}
                <span className="italic font-serif text-zinc-400">Dublin</span>
              </h1>

              <p className="text-xl md:text-2xl text-zinc-500 font-light max-w-2xl mx-auto lg:mx-0 leading-snug text-center lg:text-left">
                Specialised clinical treatments by Dr. Giselle. Medical mole removal, rosacea, pigmentation, and hair restoration.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-2 justify-center lg:justify-start">
                <motion.a
                  href="#consultation"
                  whileHover={{ scale: 1.02 }}
                  className="inline-flex items-center gap-2 bg-zinc-900 text-white px-10 py-4 rounded-2xl text-xs font-bold uppercase tracking-widest hover:bg-black transition-all shadow-xl shadow-zinc-900/20"
                >
                  Start Your Journey <ArrowRight size={15} />
                </motion.a>
                <div className="flex items-center gap-3 px-6 py-4 bg-white border border-zinc-200 rounded-2xl mx-auto lg:mx-0">
                  <ShieldCheck size={20} className="text-emerald-500 flex-shrink-0" />
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-900">98% Satisfaction</div>
                    <div className="text-[11px] text-zinc-400">Real Patient Results</div>
                  </div>
                </div>
              </div>

              {/* Quick trust indicators */}
              <div className="flex flex-wrap gap-6 pt-2 justify-center lg:justify-start">
                {[
                  { icon: Users, label: "200+ Patients" },
                  { icon: Clock, label: "4+ Years Experience" },
                  { icon: Star,  label: "5★ Google Rating" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-2 text-zinc-400 text-xs">
                    <Icon size={14} className="text-zinc-500" /> {label}
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Form */}
            <div id="consultation" className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white border border-zinc-100 rounded-3xl p-6 md:p-10 shadow-2xl shadow-zinc-200/80"
              >
                <AnimatePresence mode="wait">
                  {status === "success" ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="py-12 text-center"
                    >
                      <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-5">
                        <Check size={28} className="text-emerald-600" />
                      </div>
                      <h3 className="text-2xl font-light text-zinc-900 tracking-tight">Inquiry received!</h3>
                      <p className="mt-2 text-zinc-500 text-sm">Our clinical team will be in touch within 24 hours.</p>
                    </motion.div>
                  ) : (
                    <motion.div key="form" initial={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      <div className="mb-8 text-center">
                        <h3 className="text-2xl font-light tracking-tight text-zinc-900">Begin Your Transformation</h3>
                        <p className="mt-2 text-zinc-500 text-sm font-light">Speak directly with our clinical team. Response within 24 hours.</p>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Honeypot */}
                        <input type="text" name="company" className="hidden" value={honeypot} onChange={e => setHoneypot(e.target.value)} tabIndex={-1} aria-hidden="true" />

                        {/* Name */}
                        <div className="input-wrap relative">
                          <User className="input-icon" size={16} />
                          <input
                            required type="text" placeholder="Full Name"
                            value={formData.name}
                            onChange={e => setFormData({ ...formData, name: e.target.value })}
                            className="landing-input"
                          />
                        </div>

                        {/* Phone + Email */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div className="input-wrap relative">
                            <Phone className="input-icon" size={16} />
                            <input
                              required type="tel" placeholder="Phone"
                              value={formData.phone}
                              onChange={e => setFormData({ ...formData, phone: e.target.value })}
                              className="landing-input"
                            />
                          </div>
                          <div className="input-wrap relative">
                            <Mail className="input-icon" size={16} />
                            <input
                              required type="email" placeholder="Email"
                              value={formData.email}
                              onChange={e => setFormData({ ...formData, email: e.target.value })}
                              className="landing-input"
                            />
                          </div>
                        </div>

                        {/* Treatment */}
                        <div className="input-wrap relative">
                          <Stethoscope className="input-icon" size={16} />
                          <select
                            value={formData.treatment}
                            onChange={e => setFormData({ ...formData, treatment: e.target.value })}
                            className={selectClass}
                          >
                            <option value="General Inquiry">General Inquiry</option>
                            <option value="Mole / Skin Tag Removal">Mole / Skin Tag Removal</option>
                            <option value="Rosacea & Redness">Rosacea &amp; Redness</option>
                            <option value="Melasma & Pigmentation">Melasma &amp; Pigmentation</option>
                            <option value="Toenail Fungus">Toenail Fungus</option>
                            <option value="Hair Thinning / Loss">Hair Thinning / Loss</option>
                            <option value="BTL Emsella">BTL Emsella</option>
                            <option value="BTL Vanquish ME">BTL Vanquish ME</option>
                          </select>
                          <ChevronDown className="select-chevron" size={15} />
                        </div>

                        {/* Language + Contact method */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div className="input-wrap relative">
                            <select
                              value={formData.language}
                              onChange={e => setFormData({ ...formData, language: e.target.value })}
                              className={`landing-input landing-input-no-icon appearance-none cursor-pointer pr-8`}
                            >
                              <option value="English">English</option>
                              <option value="Spanish">Spanish</option>
                              <option value="Persian">Persian (فارسی)</option>
                            </select>
                            <ChevronDown className="select-chevron" size={15} />
                          </div>
                          <div className="input-wrap relative">
                            <select
                              value={formData.contact_method}
                              onChange={e => setFormData({ ...formData, contact_method: e.target.value })}
                              className={`landing-input landing-input-no-icon appearance-none cursor-pointer pr-8`}
                            >
                              <option value="Email">Email</option>
                              <option value="Phone Call">Phone Call</option>
                              <option value="WhatsApp">WhatsApp</option>
                            </select>
                            <ChevronDown className="select-chevron" size={15} />
                          </div>
                        </div>

                        {/* Message */}
                        <div className="input-wrap relative">
                          <textarea
                            rows={3}
                            placeholder="Tell us about your concern (optional)"
                            value={formData.message}
                            onChange={e => setFormData({ ...formData, message: e.target.value })}
                            className="landing-input landing-input-no-icon resize-none"
                          />
                        </div>

                        {/* Error */}
                        <AnimatePresence>
                          {status === "error" && (
                            <motion.p
                              initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                              className="text-sm text-red-500 text-center"
                            >
                              Something went wrong. Please try again or email us directly.
                            </motion.p>
                          )}
                        </AnimatePresence>

                        <button
                          type="submit"
                          disabled={status === "loading"}
                          className="w-full flex items-center justify-center gap-2.5 py-4 bg-zinc-900 text-white rounded-2xl text-xs font-bold uppercase tracking-widest hover:bg-black transition-all active:scale-[0.985] disabled:opacity-60 mt-2"
                        >
                          {status === "loading"
                            ? <><Loader2 size={15} className="animate-spin" /> Processing…</>
                            : <><Send size={14} /> Request Free Consultation</>
                          }
                        </button>

                        <div className="flex justify-center items-center gap-2 text-[11px] text-zinc-400 pt-1">
                          <Lock size={12} /> Your information is 100% protected
                        </div>
                      </form>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* ── TREATMENTS GRID ─────────────────────────────────────────────── */}
      <section className="py-20 md:py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <Badge className="mb-4">Our Expertise</Badge>
          <h2 className="section-h2 font-light tracking-tighter text-zinc-900 text-center">Targeted Clinical Solutions</h2>
          <p className="mt-4 text-xl text-zinc-500 font-light max-w-md mx-auto">Four pillars of medical dermatology excellence</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {treatments.map((t, i) => <TreatmentCard key={i} {...t} />)}
        </div>
      </section>

      {/* ── DETAILED PROGRAMMES ─────────────────────────────────────────── */}
      <section id="programmes" className="py-20 md:py-24 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-6 space-y-20 md:space-y-28">
          <div className="max-w-2xl mx-auto text-center">
            <Badge>Cosmelan® • PRP • Medical Dermatology</Badge>
            <h2 className="section-h2 font-light tracking-tighter mt-6 leading-none text-zinc-900 text-center">
              Proven Protocols.<br />Visible Results.
            </h2>
          </div>

          {/* Cosmelan */}
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="space-y-8">
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center gap-3 text-orange-500 mb-4 justify-center lg:justify-start">
                  <Sun size={26} />
                  <span className="font-mono text-xs tracking-[2px] uppercase">Mesoestetic Certified</span>
                </div>
                <h3 className="text-4xl md:text-5xl font-light tracking-tight text-zinc-900">Cosmelan Depigmentation</h3>
              </div>
              <p className="text-lg text-zinc-500 font-light leading-relaxed text-center lg:text-left">The gold standard treatment for melasma and stubborn hyperpigmentation. Clinically proven results in as little as 4 weeks.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-5">
                {["Dramatic lightening in 30 days", "Prevents future pigmentation", "In-clinic + home maintenance", "Suitable for all skin types"].map((item) => (
                  <div key={item} className="flex gap-3">
                    <div className="mt-0.5 w-5 h-5 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0">
                      <Check className="text-emerald-600" size={13} />
                    </div>
                    <p className="text-sm text-zinc-600 font-light">{item}</p>
                  </div>
                ))}
              </div>
              <div className="flex justify-center lg:justify-start">
                <a href="#consultation" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest border border-zinc-900 text-zinc-900 px-7 py-3.5 rounded-2xl hover:bg-zinc-900 hover:text-white transition-all duration-300">
                  Book Cosmelan Consult <ArrowRight size={14} />
                </a>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl shadow-zinc-300/60">
              <Image src="/skin.png" alt="Cosmelan Before & After" width={800} height={900} className="w-full h-auto object-cover" />
            </div>
          </div>

          {/* Hair Restoration */}
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="rounded-3xl overflow-hidden shadow-2xl shadow-zinc-300/60 order-2 lg:order-1">
              <Image src="/hair.png" alt="Hair Restoration" width={800} height={900} className="w-full h-auto object-cover" />
            </div>
            <div className="space-y-8 order-1 lg:order-2">
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center gap-3 text-emerald-600 mb-4 justify-center lg:justify-start">
                  <Sprout size={26} />
                  <span className="font-mono text-xs tracking-[2px] uppercase">Regenerative Medicine</span>
                </div>
                <h3 className="text-4xl md:text-5xl font-light tracking-tight text-zinc-900">Medical Hair Restoration</h3>
              </div>
              <p className="text-lg text-zinc-500 font-light leading-relaxed text-center lg:text-left">Advanced PRP with growth factors and peptide therapy. Clinically backed approach to androgenetic alopecia and stress-related shedding.</p>
              <div className="flex justify-center lg:justify-start">
                <a href="#consultation" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest border border-zinc-900 text-zinc-900 px-7 py-3.5 rounded-2xl hover:bg-zinc-900 hover:text-white transition-all duration-300">
                  Schedule Hair Assessment <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ────────────────────────────────────────────────── */}
      <section id="reviews" className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
            <div className="text-center md:text-left mx-auto md:mx-0">
              <Badge>Patient Voices</Badge>
              <h2 className="section-h2 font-light tracking-tighter mt-4 text-zinc-900 text-center md:text-left">Real Stories.<br />Real Results.</h2>
            </div>
            <p className="text-zinc-500 font-light max-w-xs text-sm leading-relaxed text-center md:text-left mx-auto md:mx-0">
              Don't just take our word for it. Here's what our patients say about their experience with Dr. Giselle.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => <TestimonialCard key={i} {...t} />)}
          </div>
          <div className="text-center mt-14">
            <div className="inline-flex items-center gap-6 text-sm text-zinc-400">
              <div className="flex items-center gap-2">
                <Users size={15} className="text-emerald-500" /> 200+ Patients Helped
              </div>
              <div className="w-px h-4 bg-zinc-200" />
              <div>⭐⭐⭐⭐⭐ Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CLINICAL STANDARDS ──────────────────────────────────────────── */}
      <section className="py-20 md:py-24 bg-zinc-950 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 text-center lg:text-left">
              <Badge className="bg-white/10 text-white/70 border-white/20">The Gerka Standard</Badge>
              <h2 className="section-h2 font-light tracking-tighter mt-8 leading-none text-center lg:text-left">
                Medical Precision.<br />Human Compassion.
              </h2>
              <div className="mt-16 grid grid-cols-2 gap-12">
                {[["98%", "Satisfaction Rate"], ["4+", "Years Experience"]].map(([val, label]) => (
                  <div key={label} className="text-center lg:text-left">
                    <div className="text-[80px] font-light text-white/90 tracking-tighter leading-none">{val}</div>
                    <p className="uppercase text-xs tracking-[2px] text-zinc-400 mt-2">{label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="bg-white/5 border border-white/10 p-10 rounded-3xl">
                <Award className="text-amber-400 mb-7" size={36} />
                <p className="text-2xl font-light leading-snug">"Dr. Giselle transformed my skin and my confidence. The care here is truly exceptional."</p>
                <p className="mt-7 text-xs tracking-widest text-white/40">— CAROL A.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ───────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 text-center bg-[#FAF9F6]">
        <div className="max-w-3xl mx-auto px-6">
          <Badge className="mb-8">Consultations Available</Badge>
          <h2 className="section-h2 font-light tracking-tighter text-zinc-900">Ready for clearer skin?</h2>
          <p className="mt-5 text-xl text-zinc-500 font-light">Book your no-obligation consultation today.</p>
          <motion.a
            href="#consultation"
            whileHover={{ scale: 1.02 }}
            className="mt-10 inline-flex items-center gap-3 bg-zinc-900 text-white px-14 py-5 rounded-2xl text-xs font-bold uppercase tracking-widest hover:bg-black transition-colors shadow-2xl shadow-zinc-900/20"
          >
            Secure My Consultation Slot <ArrowRight size={15} />
          </motion.a>
          <p className="mt-6 text-xs text-zinc-400">Free · No obligation · Response within 24 hours</p>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────────────── */}
      <footer id="contact" className="py-8 bg-zinc-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div>© {new Date().getFullYear()} Gerka Clinic Dublin · All rights reserved</div>
          <div className="flex flex-wrap items-center gap-6 justify-center md:justify-end">
            <a href="tel:0878888087"           className="hover:text-zinc-300 transition-colors flex items-center gap-1.5"><Phone size={12} /> 087 888 8087</a>
            <a href="mailto:info@gerkaclinic.com" className="hover:text-zinc-300 transition-colors flex items-center gap-1.5"><Mail size={12} /> info@gerkaclinic.com</a>
            <span className="flex items-center gap-1.5"><Clock size={12} /> Stillorgan Rd, A94NH31</span>
          </div>
        </div>
      </footer>

    </main>
  )
}