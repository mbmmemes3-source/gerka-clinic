"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  ShieldCheck, Zap, Heart, Activity, Sparkles, 
  ArrowRight, Check, Star, Lock, Stethoscope, 
  Phone, Mail, User, Clock, ChevronRight, 
  Users, Target, Info, Euro, MousePointer2, CheckCircle2, X, ChevronDown, Loader2, Send
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import emailjs from "@emailjs/browser"
import { useRouter } from "next/navigation"

// ─── Shared Components ──────────────────────────────────────────────────────
const Badge = ({ children }: { children: React.ReactNode }) => (
  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-500 text-[10px] font-bold uppercase tracking-widest shadow-sm">
    {children}
  </div>
)

const SectionHeading = ({ tag, title, sub }: { tag?: string, title: string, sub?: string }) => (
  <div className="space-y-4 mb-12">
    {tag && <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-400 block">{tag}</span>}
    <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-zinc-900 tracking-tight leading-[1.1]">
      {title} <br />
      {sub && <span className="italic font-serif text-zinc-500">{sub}</span>}
    </h2>
  </div>
)

// ─── Main Page ──────────────────────────────────────────────────────────────
export default function FatReductionLanding() {
  const router = useRouter()

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [honeypot, setHoneypot] = useState("")

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    area: "Not Specified",
    message: "",
    contact_method: "Phone",     // New
  language: "English"
  })

    const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  if (honeypot || status === "loading") return

  setStatus("loading")

  try {
    const result = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      {
        name: formData.name || "No Name Provided",
        email: formData.email || "No Email Provided",
        phone: formData.phone || "No Phone Provided",
        treatment: "Fat Reduction (Landing Page)",
        contact_method: formData.contact_method,
        language: formData.language,
        message: `Area of Concern: ${formData.area}\n\nRequesting fat reduction consultation.`,
        file_url: "",
        time: new Date().toLocaleString(),
      },
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
    )

    if (result.text === "OK") {
      setStatus("success")
      setTimeout(() => router.push("/body-contouring/thank-you"), 2000)
    }
  } catch (error) {
    console.error("EmailJS Error:", error)
    setStatus("error")
    setTimeout(() => setStatus("idle"), 4000)
  }
}

  const [activeFaq, setActiveFaq] = useState<number | null>(null)

  const faqs = [
    { q: "How many sessions do I need?", a: "Typically, a course of 4 to 6 sessions is recommended, spaced 7-10 days apart for optimal biological response." },
    { q: "How much fat can I lose?", a: "Clinical studies show an average of 2-4 inches lost around the waistline, though results vary by individual biology and lifestyle." },
    { q: "Is it the same as fat freezing?", a: "No. Unlike fat freezing (Cryolipolysis), which can sometimes cause uneven results, Vanquish ME uses heat to treat a much larger area uniformly without touching the skin." },
    { q: "Does it hurt?", a: "Not at all. Most patients describe the sensation as a 'warm heating pad' or a hot stone massage. It is very relaxing." },
    { q: "Am I a good candidate?", a: "If you are generally healthy but have stubborn pockets of fat that diet and exercise won't shift, you are likely an ideal candidate." }
  ]

  return (
    <main className="bg-white min-h-screen">
      {/* ── SECTION 1: ABOVE THE FOLD ──────────────────────────────────────── */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-32 bg-[#FAF9F6] overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
              <Badge><Sparkles size={12}/> FDA-Cleared Technology</Badge>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-zinc-900 tracking-tighter leading-[1.05]">
                Non-Surgical <br />
                Fat Reduction <br />
                <span className="italic font-serif text-zinc-500 text-4xl sm:text-5xl lg:text-6xl">Real Results, Zero Downtime.</span>
              </h1>

              <p className="text-zinc-500 font-light text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Target stubborn fat that diet and exercise can't shift. Experience Dublin's leading contactless body contouring at Gerka Clinic.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4">
                <Link href="#consultation" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto bg-zinc-900 text-white px-10 py-5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-black transition-all shadow-xl shadow-zinc-200 active:scale-95">
                    Book Free Consultation
                  </button>
                </Link>
                <div className="flex flex-col items-center lg:items-start gap-1 px-4">
                  <div className="flex gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">5.0 Google Reviews | Dublin</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative hidden lg:block">
              <div className="aspect-[4/5] rounded-[4rem] overflow-hidden border-8 border-white shadow-2xl">
                <Image src="/fat.png" fill className="object-cover" alt="Fat Reduction Dublin" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: PROBLEM AGITATION ───────────────────────────────────── */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative aspect-square lg:aspect-[5/5] rounded-[3rem] overflow-hidden shadow-inner bg-zinc-100">
              <Image src="/fat2.jpg" fill className="object-cover" alt="Stubborn Fat Areas" />
            </div>
            <div className="space-y-8">
              <SectionHeading 
                tag="The Struggle"
                title="Eating Well, Exercising —"
                sub="But still struggling with stubborn fat?"
              />
              <div className="grid grid-cols-1 gap-4">
                {[
                  "Belly fat that won't budge no matter the diet",
                  "Love handles, thighs, and stubborn back fat",
                  "Feeling self-conscious in fitted clothes or swimwear",
                  "Tried everything but nothing works on specific areas",
                  "Seeking results without surgery or long recovery"
                ].map(text => (
                  <div key={text} className="flex items-start gap-4 p-4 rounded-2xl hover:bg-zinc-50 transition-colors group">
                    <div className="mt-1 w-5 h-5 rounded-full border border-zinc-200 flex items-center justify-center group-hover:bg-zinc-900 group-hover:text-white transition-all">
                      <X className="w-3 h-3" />
                    </div>
                    <span className="text-zinc-600 font-light">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Continue with other sections... (I kept them responsive) */}
            {/* ── SECTION 3: THE SOLUTION ────────────────────────────────────────── */}
      <section className="py-24 bg-zinc-900 text-white md:rounded-[4rem] mx-2 md:mx-4 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <SectionHeading 
                tag="Clinical Innovation"
                title="Advanced Technology —"
                sub="No Needles, No Surgery."
              />
              <p className="text-zinc-400 font-light text-lg leading-relaxed">
                We use world-class radiofrequency systems (Vanquish ME) that target fat cells at a biological level. The energy heats the fat to a temperature that triggers <strong>Apoptosis</strong> (permanent fat cell death) while keeping your skin perfectly cool and comfortable.
              </p>
              <div className="flex gap-8 pt-6 border-t border-white/10">
                <div className="space-y-1">
                  <p className="text-2xl font-bold text-white">45 min</p>
                  <p className="text-[10px] uppercase tracking-widest text-zinc-500">Avg. Session</p>
                </div>
                <div className="space-y-1">
                  <p className="text-2xl font-bold text-white">100%</p>
                  <p className="text-[10px] uppercase tracking-widest text-zinc-500">Non-Invasive</p>
                </div>
                <div className="space-y-1">
                  <p className="text-2xl font-bold text-white">Permanent</p>
                  <p className="text-[10px] uppercase tracking-widest text-zinc-500">Fat Destruction</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 border border-white/10 p-10 rounded-[3rem] backdrop-blur-md">
               <h4 className="text-sm font-bold uppercase tracking-widest mb-8 text-zinc-400">The Journey</h4>
               <div className="space-y-12">
                  {[
                    { step: "01", t: "Clinical Consultation", d: "Personalised assessment and measurement." },
                    { step: "02", t: "Relaxed Treatment", d: "Lie back as the energy works its magic." },
                    { step: "03", t: "Evolved Results", d: "Your body flushes fat naturally over 4-8 weeks." }
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-6 relative">
                       <span className="text-4xl font-serif italic text-zinc-700">{item.step}</span>
                       <div>
                          <h5 className="font-bold uppercase tracking-widest text-xs mb-1">{item.t}</h5>
                          <p className="text-zinc-400 text-sm font-light">{item.d}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: TREATMENT OPTIONS ───────────────────────────────────── */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <SectionHeading title="Precision Options" sub="Tailored to your body." />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           {/* Vanquish ME */}
           <div className="group bg-[#FAF9F6] border border-zinc-200 rounded-[3rem] p-8 md:p-12 transition-all hover:shadow-2xl">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-zinc-900 group-hover:text-white transition-colors">
                <Zap size={24} />
              </div>
              <h3 className="text-3xl font-light text-zinc-900 mb-4 tracking-tight">Vanquish ME®</h3>
              <p className="text-zinc-500 font-light mb-8 leading-relaxed">The only contactless fat reduction system. Ideal for treating the entire abdominal area or both thighs simultaneously.</p>
              <ul className="space-y-4">
                 {["Contactless radiofrequency", "Treats large areas (Belly, Thighs)", "45-minute sessions", "Permanent cell destruction"].map(i => (
                   <li key={i} className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-zinc-400"><CheckCircle2 size={16} className="text-zinc-900"/> {i}</li>
                 ))}
              </ul>
           </div>

           {/* Exilis Ultra */}
           <div className="group bg-white border border-zinc-200 rounded-[3rem] p-8 md:p-12 transition-all hover:shadow-2xl">
              <div className="w-14 h-14 bg-[#FAF9F6] rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-zinc-900 group-hover:text-white transition-colors">
                <Activity size={24} />
              </div>
              <h3 className="text-3xl font-light text-zinc-900 mb-4 tracking-tight">Exilis Ultra 360™</h3>
              <p className="text-zinc-500 font-light mb-8 leading-relaxed">Combining RF + Ultrasound for precision contouring. Simultaneously tightens skin while melting fat in smaller, targeted zones.</p>
              <ul className="space-y-4">
                 {["RF + Ultrasound Synergy", "Precise contouring & sculpting", "Simultaneous skin tightening", "Ideal for arms, knees, or chin"].map(i => (
                   <li key={i} className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-zinc-400"><CheckCircle2 size={16} className="text-zinc-900"/> {i}</li>
                 ))}
              </ul>
           </div>
        </div>
      </section>

      {/* ── SECTION 5 & 6: BENEFITS & WHO IS IT FOR ────────────────────────── */}
      <section className="py-24 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="bg-white p-10 md:p-16 rounded-[3rem] shadow-sm border border-zinc-100">
             <h3 className="text-2xl font-light text-zinc-900 mb-8 border-l-4 border-zinc-900 pl-6 uppercase tracking-widest">The Clinical Benefits</h3>
             <div className="grid grid-cols-1 gap-6">
                {[
                  "Permanent fat cell destruction",
                  "No surgery, no anaesthesia",
                  "No recovery time — back to work same day",
                  "Visible results from session 3–4",
                  "Treats belly, thighs, arms, and back",
                  "Safe for all skin types and phototypes"
                ].map(item => (
                  <div key={item} className="flex items-center gap-4">
                    <Check className="text-emerald-500 shrink-0" size={20} />
                    <span className="text-sm md:text-base text-zinc-600 font-light">{item}</span>
                  </div>
                ))}
             </div>
          </div>

          <div className="flex flex-col justify-center space-y-8">
             <SectionHeading title="Is it right for you?" tag="Eligibility" />
             <p className="text-zinc-500 text-lg font-light leading-relaxed">
               This is a high-performance clinical alternative to liposuction for those who maintain a healthy lifestyle but face genetic fat distribution.
             </p>
             <div className="space-y-4">
                {[
                  "Within 2–3 stone of your goal weight",
                  "Stubborn areas that won't respond to exercise",
                  "Wishing to avoid the risks of surgery",
                  "Post-pregnancy seeking silhouette restoration",
                  "Wanting to feel more confident in tailored clothing"
                ].map(text => (
                  <div key={text} className="flex items-center gap-4 p-4 bg-white border border-zinc-100 rounded-2xl">
                     <Target className="text-zinc-300" size={18} />
                     <span className="text-xs font-bold uppercase tracking-widest text-zinc-600">{text}</span>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: SOCIAL PROOF ────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
           <div className="text-center mb-16 space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-400">Success Stories</span>
              <h2 className="text-3xl md:text-5xl font-light text-zinc-900 tracking-tight leading-tight">What our patients <br/><span className="italic font-serif text-zinc-500 text-2xl md:text-4xl">actually say.</span></h2>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "Sarah K.", loc: "Dublin 4", text: "After 6 sessions of Vanquish I lost 2 inches off my waist. I finally feel comfortable in my high-waisted jeans again." },
                { name: "Michelle P.", loc: "Wicklow", text: "The team at Gerka is so professional. The treatment was actually quite relaxing, like a warm blanket over my stomach." },
                { name: "David R.", loc: "Stillorgan", text: "Great results on my love handles with Exilis. No downtime at all, I went back to the office straight after my sessions." }
              ].map((t, i) => (
                <div key={i} className="p-8 bg-zinc-50 rounded-[2.5rem] border border-zinc-100 space-y-6 flex flex-col justify-between">
                   <p className="text-zinc-600 font-light italic leading-relaxed text-sm">"{t.text}"</p>
                   <div className="flex items-center gap-3 pt-6 border-t border-zinc-200">
                      <div className="w-10 h-10 rounded-full bg-zinc-200 flex items-center justify-center text-[10px] font-bold">{t.name[0]}</div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-zinc-900">{t.name}</p>
                        <p className="text-[10px] text-zinc-400 uppercase">{t.loc}</p>
                      </div>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* ── SECTION 8: PRICING ─────────────────────────────────────────────── */}
      <section className="py-24 bg-[#FAF9F6]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <Badge>Transparent Pricing</Badge>
            <h2 className="text-3xl md:text-4xl font-light text-zinc-900">Clinical Courses</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <div className="bg-white p-8 md:p-12 rounded-[3rem] border border-zinc-200 flex flex-col justify-between items-center text-center space-y-6">
                <div className="space-y-2">
                  <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-400">Vanquish ME Course</h4>
                  <p className="text-4xl font-bold text-zinc-900">€600</p>
                  <p className="text-xs text-zinc-500 uppercase tracking-widest">Package of 4 Sessions</p>
                </div>
                <ul className="space-y-2 text-xs text-zinc-400">
                   <li>Individual Session: €200</li>
                   <li>Recommended for Abdomen/Thighs</li>
                </ul>
                <Link href="#consultation" className="w-full">
                  <button className="w-full py-4 border border-zinc-900 text-zinc-900 rounded-full font-bold text-[10px] uppercase tracking-widest hover:bg-zinc-900 hover:text-white transition-all">Book Package</button>
                </Link>
             </div>

             <div className="bg-zinc-900 p-8 md:p-12 rounded-[3rem] flex flex-col justify-between items-center text-center space-y-6 text-white shadow-2xl">
                <div className="space-y-2">
                  <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-500">Exilis Ultra 360</h4>
                  <p className="text-4xl font-bold">€450</p>
                  <p className="text-xs text-zinc-500 uppercase tracking-widest">Package of 3 Sessions</p>
                </div>
                <ul className="space-y-2 text-xs text-zinc-600">
                   <li>Individual Session: €190</li>
                   <li>Recommended for Skin Tightening</li>
                </ul>
                <Link href="#consultation" className="w-full">
                  <button className="w-full py-4 bg-white text-zinc-900 rounded-full font-bold text-[10px] uppercase tracking-widest hover:bg-zinc-200 transition-all">Book Package</button>
                </Link>
             </div>
          </div>
          <div className="mt-12 text-center">
             <p className="text-sm text-zinc-400 font-light italic leading-relaxed">
               *Consultation required to confirm suitability. Deposits are fully deductible from treatment cost.
             </p>
          </div>
        </div>
      </section>

  

      {/* ── SECTION 9: FAQ ─────────────────────────────────────────────────── */}
      <section className="py-24 max-w-3xl mx-auto px-6">
        <SectionHeading title="Common Questions" sub="Everything you need to know." />
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-zinc-100">
              <button
                onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                className="w-full flex justify-between items-center py-6 text-left group"
              >
                <span className="text-sm font-bold uppercase tracking-widest text-zinc-900 group-hover:text-zinc-500 transition-colors">
                  {faq.q}
                </span>
                <ChevronDown 
                  className={`text-zinc-300 transition-transform duration-300 ${activeFaq === i ? 'rotate-180' : ''}`} 
                  size={18} 
                />
              </button>
              <AnimatePresence>
                {activeFaq === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-zinc-500 font-light text-sm leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* ── SECTION 10: FINAL CTA & FORM ────────────────────────────────── */}
      <section id="consultation" className="py-20 md:py-32 bg-zinc-950 text-white md:rounded-t-[5rem] overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-8 text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-tight uppercase">
                Start Your Body <br/><span className="italic font-serif text-zinc-500">Transformation.</span>
              </h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-zinc-400 justify-center lg:justify-start">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 flex-shrink-0">
                    <Phone size={18}/>
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest">Dublin Clinic</p>
                    <p className="text-lg font-bold text-white">087 888 8087</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 md:p-10 lg:p-12 rounded-[3rem] shadow-2xl">
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="py-12 text-center space-y-4">
                    <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto">
                      <Check className="text-emerald-500" size={32} />
                    </div>
                    <h3 className="text-2xl font-light text-zinc-900">Request Sent</h3>
                    <p className="text-zinc-500 text-sm">We will contact you within 2 clinical hours.</p>
                  </motion.div>
                ) : (
                  <div className="space-y-8">
                    <h4 className="text-2xl font-medium text-zinc-900 tracking-tight text-center">Request Free Clinical Assessment</h4>
                    <form onSubmit={handleSubmit} className="space-y-5">
  {/* Honeypot */}
  <input type="text" className="hidden" value={honeypot} onChange={e => setHoneypot(e.target.value)} />

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <input
      required
      placeholder="Full Name"
      className="landing-input"
      value={formData.name}
      onChange={e => setFormData({ ...formData, name: e.target.value })}
    />
    <input
      required
      placeholder="Phone Number"
      className="landing-input"
      value={formData.phone}
      onChange={e => setFormData({ ...formData, phone: e.target.value })}
    />
  </div>

  <input
    required
    placeholder="Email Address"
    type="email"
    className="landing-input"
    value={formData.email}
    onChange={e => setFormData({ ...formData, email: e.target.value })}
  />

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <div className="relative">
      <select
        className="landing-input appearance-none cursor-pointer"
        value={formData.contact_method}
        onChange={e => setFormData({ ...formData, contact_method: e.target.value })}
      >
        <option value="Phone">Phone</option>
        <option value="Email">Email</option>
        <option value="WhatsApp">WhatsApp</option>
      </select>
      <ChevronDown size={14} className="absolute right-5 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none" />
    </div>

    <div className="relative">
      <select
        className="landing-input appearance-none cursor-pointer"
        value={formData.language}
        onChange={e => setFormData({ ...formData, language: e.target.value })}
      >
        <option value="English">English</option>
                      <option value="Spanish">Spanish</option>
                      <option value="Persian">Persian (فارسی)</option>
        <option value="Other">Other</option>
      </select>
      <ChevronDown size={14} className="absolute right-5 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none" />
    </div>
  </div>

  <div className="relative">
    <select
      className="landing-input appearance-none cursor-pointer"
      value={formData.area}
      onChange={e => setFormData({ ...formData, area: e.target.value })}
    >
      <option value="Not Specified">Area of Concern</option>
      <option value="Abdomen / Tummy">Abdomen / Tummy</option>
      <option value="Love Handles / Flanks">Love Handles / Flanks</option>
      <option value="Thighs">Thighs</option>
      <option value="Arms / Back">Arms / Back</option>
    </select>
    <ChevronDown size={14} className="absolute right-5 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none" />
  </div>

  {status === "error" && (
    <p className="text-red-500 text-center text-sm">Failed to send. Please try again.</p>
  )}

  <button
    disabled={status === "loading"}
    className="w-full bg-zinc-900 text-white py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-black disabled:bg-zinc-400 transition-all"
  >
    {status === "loading" ? (
      <><Loader2 className="animate-spin inline mr-2" size={18} /> Sending...</>
    ) : (
      <><Send size={18} className="inline mr-2" /> Request Free Consultation</>
    )}
  </button>
</form>
                  </div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Global Input Styles */}
      <style jsx>{`
        .landing-input {
          width: 100%;
          padding: 1rem 1.25rem;
          background: #FAF9F6;
          border: 1px solid #e4e4e7;
          border-radius: 1.25rem;
          outline: none;
          font-size: 15px;
          color: #18181b;
          font-weight: 300;
          transition: all 0.3s ease;
        }
        .landing-input:focus {
          border-color: #18181b;
          box-shadow: 0 4px 12px rgba(0,0,0,0.03);
          background: white;
        }
      `}</style>
    </main>
  )
}