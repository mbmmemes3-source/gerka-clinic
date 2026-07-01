"use client"
import React, { useState, useEffect } from "react"
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
    { name: "Ajoke Nurudeen", review: "Gerka clinic has made such a huge difference in my life! They were so sensitive and empathetic towards my issue! Made me feel comfortable all the way through.", date: "4 months ago", stars: 5, role: "Patient" },
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
              <div className="text-[10px] text-zinc-400 mt-0.5 tracking-wider uppercase">Dermatology Dublin</div>
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
      <section className="relative pt-28 lg:pt-30 pb-20 lg:pb-32 bg-[#FAF9F6] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e5e5_1px,transparent_1px)] [background-size:40px_40px] opacity-40" />

        <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

            {/* Left */}
            <div className="lg:col-span-7 space-y-8">
              <Badge><Sparkles size={14} /> Dublin Laser & Skin Clinic</Badge>

              {/* H1 With Keywords */}
              <h1 className="hero-h1 text-[54px] md:text-[55px] font-light text-zinc-900 tracking-tighter leading-[1.05] text-center lg:text-left">
                Dublin Laser & Skin Clinic: <br />
                Specialist{" "}
                <span className="italic font-serif text-zinc-400">Dermatology Dublin</span>
              </h1>

              <p className="text-xl md:text-2xl text-zinc-500 font-light max-w-2xl mx-auto lg:mx-0 leading-snug text-center lg:text-left">
                Advanced clinical treatments for pigmentation, rosacea, and skin rejuvenation at Gerka Clinic's premier Dublin laser and skin clinic.
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
                    <div className="text-[11px] text-zinc-400">Dermatology Excellence</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — Form */}
            <div id="consultation" className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white border border-zinc-100 rounded-3xl p-6 md:p-10 shadow-2xl shadow-zinc-200/80"
              >
                <AnimatePresence mode="wait">
                  {status === "success" ? (
                    <motion.div key="success" className="py-12 text-center">
                      <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-5">
                        <Check size={28} className="text-emerald-600" />
                      </div>
                      <h3 className="text-2xl font-light text-zinc-900 tracking-tight">Inquiry received!</h3>
                      <p className="mt-2 text-zinc-500 text-sm">Response within 24 hours.</p>
                    </motion.div>
                  ) : (
                    <motion.div key="form">
                      <div className="mb-8 text-center">
                        <h3 className="text-2xl font-light tracking-tight text-zinc-900 uppercase">Consultation Request</h3>
                        <p className="mt-2 text-zinc-500 text-sm font-light">Leading Dermatology Dublin Specialist Clinic.</p>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-4">
                        <input type="text" name="company" className="hidden" value={honeypot} onChange={e => setHoneypot(e.target.value)} tabIndex={-1} />
                        <div className="input-wrap relative">
                          <User className="input-icon" size={16} />
                          <input required type="text" placeholder="Full Name" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} className="landing-input" />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div className="input-wrap relative">
                            <Phone className="input-icon" size={16} />
                            <input required type="tel" placeholder="Phone" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} className="landing-input" />
                          </div>
                          <div className="input-wrap relative">
                            <Mail className="input-icon" size={16} />
                            <input required type="email" placeholder="Email" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} className="landing-input" />
                          </div>
                        </div>
                        <div className="input-wrap relative">
                          <Stethoscope className="input-icon" size={16} />
                          <select value={formData.treatment} onChange={e => setFormData({ ...formData, treatment: e.target.value })} className={selectClass}>
                            <option value="General Inquiry">General Inquiry</option>
                            <option value="Mole / Skin Tag Removal">Mole / Skin Tag Removal</option>
                            <option value="Rosacea & Redness">Rosacea &amp; Redness</option>
                            <option value="Melasma & Pigmentation">Melasma &amp; Pigmentation</option>
                          </select>
                          <ChevronDown className="select-chevron" size={15} />
                        </div>
                        <button type="submit" disabled={status === "loading"} className="w-full flex items-center justify-center gap-2.5 py-4 bg-zinc-900 text-white rounded-2xl text-xs font-bold uppercase tracking-widest hover:bg-black transition-all">
                          {status === "loading" ? <><Loader2 size={15} className="animate-spin" /> Sending…</> : <><Send size={14} /> Request Free Consultation</>}
                        </button>
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
          <Badge className="mb-4">Specialist Dermatology Dublin</Badge>
          {/* H2 Keyword 1 */}
          <h2 className="section-h2 font-light tracking-tighter text-zinc-900 text-center">
            Targeted <span className="italic font-serif text-zinc-500">Dermatology Dublin</span> Solutions
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {treatments.map((t, i) => <TreatmentCard key={i} {...t} />)}
        </div>
      </section>

      {/* ── DETAILED PROGRAMMES ─────────────────────────────────────────── */}
      <section id="programmes" className="py-20 md:py-24 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-6 space-y-20 md:space-y-28">
          <div className="max-w-2xl mx-auto text-center">
            <Badge>Dublin Laser & Skin Clinic Protocols</Badge>
            {/* H2 Keyword 2 */}
            <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-[3rem] font-light tracking-tight leading-[1.05] text-zinc-900 text-center uppercase">
  Proven Results at our <br className="hidden sm:block" />
  Dublin Laser & Skin Clinic
</h2>
          </div>

          {/* Cosmelan */}
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="space-y-8">
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center gap-3 text-orange-500 mb-4 justify-center lg:justify-start">
                  <Sun size={26} />
                  <span className="font-mono text-xs tracking-[2px] uppercase">Dermatology Dublin Specialist</span>
                </div>
                <h3 className="text-4xl md:text-5xl font-light tracking-tight text-zinc-900">Advanced Depigmentation</h3>
              </div>
              <p className="text-lg text-zinc-500 font-light leading-relaxed text-center lg:text-left italic">Achieving flawless results at our Dublin Laser & Skin Clinic through clinical innovation.</p>
              <div className="flex justify-center lg:justify-start">
                <a href="#consultation" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest border border-zinc-900 text-zinc-900 px-7 py-3.5 rounded-2xl hover:bg-zinc-900 hover:text-white transition-all duration-300">
                  Book Clinical Assessment <ArrowRight size={14} />
                </a>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl shadow-zinc-300/60">
              <Image src="/skin.png" alt="Dublin Laser & Skin Clinic Results" width={800} height={900} className="w-full h-auto object-cover" />
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
              {/* H2 Keyword 2 Repetition */}
              <h2 className="section-h2 font-light tracking-tighter mt-8 leading-none text-center lg:text-left">
                Dublin Laser & Skin Clinic: <br />
                <span className="italic font-serif text-zinc-500">Medical Precision.</span>
              </h2>
              <div className="mt-16 grid grid-cols-2 gap-12">
                {[["98%", "Dermatology Dublin Success"], ["4+", "Years Expertise"]].map(([val, label]) => (
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
                <p className="text-2xl font-light leading-snug italic">"Gerka Clinic is the leading Dublin laser and skin clinic for those seeking medical-grade Dermatology Dublin services."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ───────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 text-center bg-[#FAF9F6]">
        <div className="max-w-3xl mx-auto px-6">
          {/* H2 Keyword 1 Repetition */}
          <h2 className="section-h2 font-light tracking-tighter text-zinc-900 uppercase">
            Experience Premium <br /> Dermatology Dublin
          </h2>
          <motion.a
            href="#consultation"
            whileHover={{ scale: 1.02 }}
            className="mt-10 inline-flex items-center gap-3 bg-zinc-900 text-white px-14 py-5 rounded-2xl text-xs font-bold uppercase tracking-widest hover:bg-black transition-colors shadow-2xl shadow-zinc-900/20"
          >
            Secure My Consultation <ArrowRight size={15} />
          </motion.a>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────────────── */}
      <footer id="contact" className="py-8 bg-zinc-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div>© {new Date().getFullYear()} Gerka Clinic · Dermatology Dublin Specialist</div>
          <div className="flex flex-wrap items-center gap-6 justify-center md:justify-end">
            <span className="flex items-center gap-1.5 font-bold uppercase tracking-widest text-zinc-300">Dublin Laser & Skin Clinic</span>
          </div>
        </div>
      </footer>

    </main>
  )
}