"use client"
import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Check, Star, Lock, Phone, Mail, User, Clock,
  ChevronDown, Loader2, ShieldCheck, MapPin,
  Target, Sparkles, MessageCircle, Stethoscope, Send, ArrowRight
} from "lucide-react"
import { useRouter } from "next/navigation"
import emailjs from "emailjs-com"

// ─── Badge ───────────────────────────────────────────────────────────────────
const Badge = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-zinc-200 text-zinc-500 text-[10px] font-bold uppercase tracking-widest shadow-sm ${className}`}>
    {children}
  </div>
)

// ─── ConsultationForm ─────────────────────────────────────────────────────────
// Always wrapped in its own solid white card, so it stays fully legible
// regardless of what section (light or dark) it's dropped into.
function ConsultationForm({ id = "form" }: { id?: string }) {
  const router = useRouter()
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", concern: "Belly", contact_time: "Morning" })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (status === "loading") return
    setStatus("loading")
    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        { ...formData, subject: `DesoBody Body: ${formData.concern}`, time: new Date().toLocaleString(), message: `Area: ${formData.concern} | Time: ${formData.contact_time}` },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      if (result.text === "OK") { setStatus("success"); setTimeout(() => router.push("/thank-you"), 1500) }
    } catch { setStatus("error"); setTimeout(() => setStatus("idle"), 4000) }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white border border-zinc-100 rounded-3xl p-6 md:p-10 shadow-2xl shadow-zinc-900/10"
    >
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div key="ok" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-12 text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-5">
              <Check size={28} className="text-emerald-600" />
            </div>
            <h3 className="text-2xl font-light text-zinc-900 tracking-tight">Enquiry received!</h3>
            <p className="mt-2 text-zinc-500 text-sm">We'll be in touch within 2 hours.</p>
          </motion.div>
        ) : (
          <motion.div key="form">
            <div className="mb-8 text-center">
              <h3 className="text-2xl font-light tracking-tight text-zinc-900 uppercase">Book Your Free Consultation</h3>
              <p className="mt-2 text-zinc-500 text-sm font-light">No obligation. Fully confidential.</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4" id={id}>
              <div className="input-wrap relative">
                <User className="input-icon" size={16} />
                <input required type="text" placeholder="First Name" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} className="landing-input" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="input-wrap relative">
                  <Phone className="input-icon" size={16} />
                  <input required type="tel" placeholder="Phone Number" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} className="landing-input" />
                </div>
                <div className="input-wrap relative">
                  <Mail className="input-icon" size={16} />
                  <input required type="email" placeholder="Email Address" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} className="landing-input" />
                </div>
              </div>
              <div className="input-wrap relative">
                <Target className="input-icon" size={16} />
                <select value={formData.concern} onChange={e => setFormData({ ...formData, concern: e.target.value })} className="landing-input landing-select">
                  <option value="Belly">Belly / Abdomen</option>
                  <option value="Arms">Arms (Bat Wings)</option>
                  <option value="Thighs">Thighs</option>
                  <option value="Back">Back / Bra Line</option>
                  <option value="Hips">Hips / Flanks</option>
                  <option value="Other">Other</option>
                </select>
                <ChevronDown className="select-chevron" size={15} />
              </div>
              <div className="input-wrap relative">
                <Clock className="input-icon" size={16} />
                <select value={formData.contact_time} onChange={e => setFormData({ ...formData, contact_time: e.target.value })} className="landing-input landing-select">
                  <option value="Morning">Morning (9am–12pm)</option>
                  <option value="Afternoon">Afternoon (12pm–5pm)</option>
                  <option value="Evening">Evening (5pm–7pm)</option>
                </select>
                <ChevronDown className="select-chevron" size={15} />
              </div>
              {status === "error" && <p className="text-red-500 text-xs text-center">Something went wrong. Please try again.</p>}
              <button type="submit" disabled={status === "loading"} className="w-full flex items-center justify-center gap-2.5 py-4 bg-zinc-900 text-white rounded-2xl text-xs font-bold uppercase tracking-widest hover:bg-black transition-all disabled:opacity-70">
                {status === "loading" ? <><Loader2 size={15} className="animate-spin" /> Sending…</> : <><Send size={14} /> Book My Free Consultation</>}
              </button>
              <div className="text-center space-y-1.5 pt-1">
                <p className="text-[10px] text-zinc-400 flex items-center justify-center gap-1"><Lock size={10} /> 100% confidential — never shared.</p>
                <p className="text-[10px] text-zinc-400">📞 <a href="tel:+353878888087" className="hover:text-zinc-700">+353 87 888 8087</a> &nbsp; 💬 <a href="https://wa.me/353878888087" className="hover:text-zinc-700">WhatsApp</a></p>
                <p className="text-[10px] text-zinc-400">We respond within 2 hours · Mon–Sat 9am–7pm</p>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-zinc-100">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between py-5 text-left gap-4 group">
        <span className="text-sm md:text-base font-medium text-zinc-900 group-hover:text-zinc-600 transition-colors">{q}</span>
        <ChevronDown size={18} className={`text-zinc-400 shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden">
            <p className="pb-5 text-sm text-zinc-500 font-light leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const faqs = [
  { q: "Does DesoBody hurt?", a: "Most clients describe a mild stinging sensation during injection which passes quickly. Topical numbing cream is available on request." },
  { q: "How many sessions will I need?", a: "Most clients need 2–4 sessions depending on the area and amount of fat. We'll advise at your free consultation." },
  { q: "How long until I see results?", a: "Results begin appearing at 4–6 weeks as your body naturally flushes the dissolved fat cells." },
  { q: "Is there downtime?", a: "Minimal. Expect mild swelling and redness for 1–3 days. Most clients return to work the next day." },
  { q: "Are results permanent?", a: "Yes. DesoBody permanently destroys fat cells in the treated area. Maintaining a stable weight helps preserve results." },
  { q: "Am I a suitable candidate?", a: "DesoBody is ideal for people close to their target weight with stubborn localised fat deposits. A free consultation will confirm suitability." },
]

export default function DesoBodyBodyLandingPage() {
  const [showSticky, setShowSticky] = useState(false)
  useEffect(() => {
    const fn = () => setShowSticky(window.scrollY > 400)
    window.addEventListener("scroll", fn)
    return () => window.removeEventListener("scroll", fn)
  }, [])

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
        .landing-select {
          appearance: none;
          padding-right: 40px;
          cursor: pointer;
        }
        .input-icon {
          position: absolute;
          left: 16px;
          top: 50%;
          transform: translateY(-50%);
          color: #a1a1aa;
          pointer-events: none;
          transition: color 0.2s;
          z-index: 1;
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
          .hero-h1 { font-size: 42px !important; line-height: 1.05 !important; }
          .section-h2 { font-size: 2.25rem !important; line-height: 1.1 !important; }
        }
        .section-h2 { font-size: 3rem; }
        @media (min-width: 768px) {
          .section-h2 { font-size: 3.75rem; }
        }
      `}</style>

      {/* Sticky mobile CTA */}
      <AnimatePresence>
        {showSticky && (
          <motion.div initial={{ y: 100 }} animate={{ y: 0 }} exit={{ y: 100 }} className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white border-t border-zinc-100 shadow-2xl p-4 pb-6">
            <a href="#consultation" className="flex items-center justify-center gap-2 w-full bg-zinc-900 text-white py-4 rounded-2xl text-[11px] font-bold uppercase tracking-widest shadow-lg shadow-zinc-900/20">
              Book Free Consultation →
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp */}
      <a href="https://wa.me/353878888087" target="_blank" rel="noopener noreferrer" className="fixed bottom-24 right-4 md:bottom-8 z-50 bg-[#25D366] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform" aria-label="WhatsApp">
        <MessageCircle size={26} fill="white" />
      </a>

      {/* ── NAV ─────────────────────────────────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-zinc-900 rounded-xl flex items-center justify-center">
              <Sparkles className="text-white" size={16} />
            </div>
            <div>
              <div className="font-semibold tracking-tight text-zinc-900 leading-none">Gerka Clinic</div>
              <div className="text-[10px] text-zinc-400 mt-0.5 tracking-wider uppercase">Medical Fat Dissolving</div>
            </div>
          </div>
          <a href="tel:+353878888087" className="hidden sm:flex items-center gap-2 text-xs font-semibold text-zinc-500 hover:text-zinc-900 transition-colors">
            <Phone size={14} className="text-zinc-900" /> +353 87 888 8087
          </a>
          <a href="#consultation" className="text-xs font-semibold uppercase tracking-widest px-6 py-2.5 bg-zinc-900 text-white rounded-full hover:bg-black transition-colors">
            Book Consultation
          </a>
        </div>
      </nav>

      {/* ── HERO + FORM ─────────────────────────────────────────────────── */}
      <section className="relative pt-28 lg:pt-30 pb-20 lg:pb-32 bg-[#FAF9F6] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e5e5_1px,transparent_1px)] [background-size:40px_40px] opacity-40" />

        <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

            <div className="lg:col-span-7 space-y-8">
              <Badge><Stethoscope size={14} /> Medical Fat Dissolving · Dublin</Badge>

              <h1 className="hero-h1 text-[54px] md:text-[55px] font-light text-zinc-900 tracking-tighter leading-[1.05] text-center lg:text-left">
                Dissolve Stubborn Body Fat —{" "}
                <span className="italic font-serif text-zinc-400">No Surgery Required</span>
              </h1>

              <p className="text-xl md:text-2xl text-zinc-500 font-light max-w-2xl mx-auto lg:mx-0 leading-snug text-center lg:text-left">
                DesoBody fat-dissolving injections at Gerka Clinic Dublin. Clinically administered. Natural results over 4–6 weeks.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-2 justify-center lg:justify-start">
                <motion.a
                  href="#consultation"
                  whileHover={{ scale: 1.02 }}
                  className="inline-flex items-center gap-2 bg-zinc-900 text-white px-10 py-4 rounded-2xl text-xs font-bold uppercase tracking-widest hover:bg-black transition-all shadow-xl shadow-zinc-900/20"
                >
                  Book Your Free Consultation <ArrowRight size={15} />
                </motion.a>
                <a href="tel:+353878888087" className="inline-flex items-center justify-center gap-2 border border-zinc-200 bg-white text-zinc-700 px-10 py-4 rounded-2xl text-xs font-bold uppercase tracking-widest hover:border-zinc-400 transition-all">
                  Call Us Now
                </a>
              </div>

              <div className="flex items-center gap-3 px-6 py-4 bg-white border border-zinc-200 rounded-2xl mx-auto lg:mx-0 w-fit">
                <ShieldCheck size={20} className="text-emerald-500 flex-shrink-0" />
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-900">Free, No-Obligation Consultation</div>
                  <div className="text-[11px] text-zinc-400">★★★★★ Google Reviews · Dublin Based</div>
                </div>
              </div>
            </div>

            <div id="consultation" className="lg:col-span-5 scroll-mt-20">
              <ConsultationForm id="hero-form" />
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="py-20 md:py-24 max-w-5xl mx-auto px-6 text-center">
        <Badge className="mb-6">You're Not Alone</Badge>
        <h2 className="section-h2 font-light tracking-tighter text-zinc-900">
          Struggling With Fat That Won't Budge{" "}
          <span className="italic font-serif text-zinc-500">No Matter What You Do?</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mt-14">
          {[
            { icon: "🏋️", title: "You exercise regularly", desc: "But certain areas just refuse to respond, no matter how consistent you are." },
            { icon: "🥗", title: "You eat well", desc: "Belly rolls, arm fat, inner thighs — notoriously resistant to diet alone." },
            { icon: "💡", title: "There's a solution", desc: "Clinically proven. No surgery. No scarring. No weeks of recovery." },
          ].map((c, i) => (
            <div key={i} className="bg-[#FAF9F6] rounded-3xl p-8 border border-zinc-100 space-y-3">
              <div className="text-3xl">{c.icon}</div>
              <h3 className="font-semibold text-zinc-900 text-sm uppercase tracking-wide">{c.title}</h3>
              <p className="text-zinc-500 text-sm font-light leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
        <div className="bg-zinc-950 text-zinc-300 rounded-3xl p-8 text-sm font-light leading-relaxed max-w-2xl mx-auto mt-8">
          You're not alone. And it's not your fault. The good news? There's a clinically proven solution that doesn't involve surgery, scarring or weeks of recovery.
        </div>
      </section>

      {/* SOLUTION */}
      <section className="py-20 md:py-24 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <Badge className="mb-6">The Treatment</Badge>
            <h2 className="section-h2 font-light tracking-tighter text-zinc-900">
              Introducing DesoBody —{" "}
              <span className="italic font-serif text-zinc-500">Medical Fat Dissolving Injections</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: "💉", step: "01", title: "Consultation", desc: "We assess your areas of concern and create a personalised treatment plan tailored to your body." },
              { icon: "🎯", step: "02", title: "Treatment", desc: "DesoBody solution is precisely injected into targeted fat deposits. Sessions take 30–45 minutes." },
              { icon: "✨", step: "03", title: "Results", desc: "Fat cells break down naturally and are flushed from your body over 4–6 weeks. Results are permanent." },
            ].map((s, i) => (
              <motion.div key={i} whileHover={{ y: -8 }} className="bg-white rounded-3xl p-8 border border-zinc-100 shadow-sm hover:shadow-2xl transition-all duration-700 space-y-4 relative overflow-hidden">
                <span className="absolute top-4 right-6 text-6xl font-serif italic text-zinc-50 select-none">{s.step}</span>
                <div className="w-12 h-12 rounded-2xl bg-zinc-900 flex items-center justify-center text-2xl">
                  <span>{s.icon}</span>
                </div>
                <h3 className="font-bold text-zinc-900 uppercase tracking-widest text-xs">Step {s.step} — {s.title}</h3>
                <p className="text-zinc-500 text-sm font-light leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TREATMENT AREAS */}
      <section className="py-20 md:py-24 max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <Badge className="mb-6"><Target size={12} /> Treatment Areas</Badge>
          <h2 className="section-h2 font-light tracking-tighter text-zinc-900">
            Areas We Treat <span className="italic font-serif text-zinc-500">With DesoBody</span>
          </h2>
          <p className="text-zinc-500 font-light mt-4">Find your problem area and book a free consultation today.</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {[
            { icon: "🫃", label: "Abdomen & Belly" },
            { icon: "💪", label: "Waist & Love Handles" },
            { icon: "🦾", label: "Arms (Bat Wings)" },
            { icon: "🦵", label: "Inner & Outer Thighs" },
            { icon: "🔙", label: "Back Rolls & Bra Line" },
            { icon: "⚡", label: "Hips" },
            { icon: "🦿", label: "Knees" },
            { icon: "✨", label: "Multiple Areas" },
          ].map((a, i) => (
            <motion.div key={i} whileHover={{ scale: 1.03, y: -3 }} className="bg-[#FAF9F6] hover:bg-zinc-900 hover:text-white border border-zinc-100 rounded-2xl p-5 text-center transition-all duration-300 space-y-2 group">
              <div className="text-2xl">{a.icon}</div>
              <p className="text-[11px] font-bold uppercase tracking-wide text-zinc-700 group-hover:text-white">{a.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* BENEFITS / CLINICAL STANDARDS */}
      <section className="py-20 md:py-24 bg-zinc-950 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <Badge className="bg-white/10 text-white/70 border-white/20 mb-6"><ShieldCheck size={12} /> Why Gerka Clinic</Badge>
            <h2 className="section-h2 font-light tracking-tighter">
              Why Choose DesoBody <span className="italic font-serif text-zinc-500">at Gerka Clinic?</span>
            </h2>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {["No surgery, no scalpel, no scarring", "Permanent fat cell destruction", "Minimal downtime — back to work next day", "Natural-looking gradual results", "Medically administered by trained clinicians", "Personalised treatment plan for your body", "Discreet, private Dublin clinic", "Serving Dublin, Kildare & Wicklow"].map((b, i) => (
              <li key={i} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl p-4">
                <div className="w-6 h-6 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
                  <Check size={12} className="text-white" />
                </div>
                <span className="text-sm text-zinc-300 font-light">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-20 md:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <Badge className="mb-6"><Clock size={12} /> Timeline</Badge>
            <h2 className="section-h2 font-light tracking-tighter text-zinc-900">
              What to Expect — <span className="italic font-serif text-zinc-500">Your DesoBody Journey</span>
            </h2>
          </div>
          <div className="space-y-3">
            {[
              { time: "Day 1", desc: "Treatment session. Mild swelling & redness are completely normal." },
              { time: "Days 2–5", desc: "Swelling settles. Area may feel tender to touch." },
              { time: "Weeks 2–3", desc: "Body begins flushing destroyed fat cells naturally." },
              { time: "Weeks 4–6", desc: "First visible results appear. Contour begins to change." },
              { time: "Sessions 2–3", desc: "Progressive improvement in shape and contour definition." },
              { time: "Final Result", desc: "Permanent reduction in targeted fat area with natural appearance." },
            ].map((r, i) => (
              <div key={i} className="flex items-start gap-4 bg-white border border-zinc-100 rounded-2xl p-5 shadow-sm">
                <div className="shrink-0 w-28 text-[10px] font-bold uppercase tracking-widest text-zinc-900 bg-zinc-100 rounded-xl px-3 py-2 text-center">{r.time}</div>
                <p className="text-sm text-zinc-600 font-light leading-relaxed pt-1">{r.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 bg-white border border-zinc-100 rounded-2xl p-5 text-center shadow-sm">
            <p className="text-sm text-zinc-600 font-light italic">"Most clients need 2–4 sessions for optimal results. We'll advise at your free consultation."</p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 md:py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <Badge className="mb-6"><Star size={12} /> Real Results</Badge>
          <h2 className="section-h2 font-light tracking-tighter text-zinc-900">
            Real Results From <span className="italic font-serif text-zinc-500">Real Clients</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { quote: "I'd tried everything for my belly fat. After 3 DesoBody sessions I lost inches off my waist without any surgery. The team were so professional and discreet.", name: "Sarah", loc: "Dublin" },
            { quote: "The treatment was much more comfortable than I expected. Mild swelling for 2 days then nothing. Results started showing at week 5 and I'm thrilled.", name: "Emma", loc: "Kildare" },
            { quote: "I was nervous about injections but the consultation put me completely at ease. Results are exactly what I wanted.", name: "Michelle", loc: "Dublin" },
          ].map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#FAF9F6] rounded-3xl p-8 border border-zinc-100 hover:shadow-xl transition-all space-y-4"
            >
              <div className="flex gap-0.5">{[...Array(5)].map((_, j) => <Star key={j} size={14} className="text-amber-400 fill-amber-400" />)}</div>
              <p className="text-zinc-600 text-sm font-light leading-relaxed italic">"{t.quote}"</p>
              <div className="pt-4 border-t border-zinc-200 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
                  {t.name[0]}
                </div>
                <p className="text-xs font-bold text-zinc-900">{t.name} <span className="text-zinc-400 font-light">· {t.loc}</span></p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-10 flex items-center justify-center gap-2">
          {[...Array(5)].map((_, j) => <Star key={j} size={20} className="text-amber-400 fill-amber-400" />)}
          <span className="text-sm font-light text-zinc-500 ml-2">5-star reviews on Google</span>
        </div>
      </section>

      {/* ABOUT CLINIC */}
      <section className="py-20 md:py-24 bg-[#FAF9F6]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge><ShieldCheck size={12} /> About Us</Badge>
              <h2 className="text-3xl md:text-5xl font-light tracking-tighter text-zinc-900">
                Why <span className="italic font-serif text-zinc-500">Gerka Clinic?</span>
              </h2>
              <p className="text-zinc-500 font-light leading-relaxed text-sm md:text-base">
                Gerka Clinic is Dublin's specialist aesthetic medical clinic serving clients across Dublin, Kildare and Wicklow. Our clinicians are fully trained and medically qualified to administer DesoBody treatments safely and effectively.
              </p>
              <ul className="space-y-3">
                {[
                  { icon: "🏥", text: "Medical clinic — not a beauty salon" },
                  { icon: "👩‍⚕️", text: "Qualified medical clinicians" },
                  { icon: "📍", text: "Conveniently located in Dublin" },
                  { icon: "🔒", text: "Fully confidential consultations" },
                  { icon: "✅", text: "Hundreds of satisfied clients" },
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-zinc-700 font-light">
                    <span className="text-lg">{item.icon}</span>{item.text}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl overflow-hidden aspect-[4/3] relative shadow-2xl shadow-zinc-300/60">
              <img src="/body1.webp" alt="Gerka Clinic Treatment Room" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-24 max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <Badge className="mb-6">Common Questions</Badge>
          <h2 className="section-h2 font-light tracking-tighter text-zinc-900">
            Frequently Asked <span className="italic font-serif text-zinc-500">Questions</span>
          </h2>
        </div>
        <div className="divide-y divide-zinc-100 border border-zinc-100 rounded-3xl px-6 overflow-hidden bg-white">
          {faqs.map((f, i) => <FAQItem key={i} {...f} />)}
        </div>
      </section>

      {/* FINAL CTA + FORM */}
      <section className="py-20 md:py-28 bg-zinc-950 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
              <Badge className="bg-white/10 text-white/70 border-white/20"><Sparkles size={12} /> Start Today</Badge>
              <h2 className="section-h2 font-light tracking-tighter leading-none">
                Book Your Free DesoBody <span className="italic font-serif text-zinc-500">Consultation Today</span>
              </h2>
              <p className="text-zinc-400 font-light text-sm md:text-base">No obligation. Fully confidential. We respond within 2 hours.</p>
              <div className="space-y-3 text-sm text-zinc-400 font-light">
                <p className="flex items-center gap-2 justify-center lg:justify-start"><Lock size={14} className="text-white" /> 100% confidential — your privacy is protected</p>
                <p className="flex items-center gap-2 justify-center lg:justify-start"><Phone size={14} className="text-white" /><a href="tel:+353878888087" className="hover:text-white transition-colors">+353 87 888 8087</a></p>
                <p className="flex items-center gap-2 justify-center lg:justify-start"><MessageCircle size={14} className="text-white" /><a href="https://wa.me/353878888087" className="hover:text-white transition-colors">WhatsApp: +353 87 888 8087</a></p>
                <p className="text-zinc-500 text-xs">Mon–Sat 9am–7pm · Responding within 2 hours</p>
              </div>
            </div>
            <div className="lg:col-span-6">
              <ConsultationForm id="bottom-form" />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 bg-zinc-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div>© {new Date().getFullYear()} Gerka Clinic · Dublin Aesthetic Medicine</div>
          <div className="flex flex-wrap items-center gap-6 justify-center md:justify-end">
            <span className="flex items-center gap-1.5 font-bold uppercase tracking-widest text-zinc-300"><Lock size={10} /> GDPR Secure</span>
            <span className="flex items-center gap-1.5 font-bold uppercase tracking-widest text-zinc-300"><ShieldCheck size={10} /> Medically Certified</span>
            <a href="/privacy" className="hover:text-zinc-300 transition-colors">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </main>
  )
}