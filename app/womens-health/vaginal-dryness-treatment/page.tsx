"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ShieldCheck, Heart, Droplets, ArrowRight, Check, Star, Lock,
  Stethoscope, Phone, Mail, User, Clock, ChevronDown, Award,
  Users, Send, Loader2, MessageSquare, Info, Activity, Target, Zap, Euro,Sparkles,
  Calendar, Award as Trophy
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import emailjs from "@emailjs/browser"
import { useRouter } from "next/navigation"

const Badge = ({ children }: { children: React.ReactNode }) => (
  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-zinc-200 text-zinc-500 text-[10px] font-bold uppercase tracking-widest shadow-sm">
    {children}
  </div>
)

const StepCard = ({ number, title, desc }: { number: string; title: string; desc: string }) => (
  <div className="bg-white p-8 rounded-3xl shadow-sm border border-zinc-100 text-center hover:shadow-md transition-all">
    <div className="mx-auto w-16 h-16 bg-zinc-900 text-white rounded-2xl flex items-center justify-center text-3xl font-serif mb-6">
      {number}
    </div>
    <h4 className="font-semibold text-xl mb-3 text-zinc-900">{title}</h4>
    <p className="text-zinc-500 text-sm leading-relaxed">{desc}</p>
  </div>
)

const BenefitCard = ({ icon: Icon, title, desc }: { icon: any; title: string; desc: string }) => (
  <div className="p-8 bg-zinc-50 rounded-3xl border border-zinc-100 hover:border-zinc-200 transition-all">
    <div className="mb-6 w-12 h-12 bg-white rounded-2xl flex items-center justify-center border border-zinc-100">
      <Icon size={28} className="text-zinc-900" />
    </div>
    <h4 className="font-semibold text-zinc-900 mb-2">{title}</h4>
    <p className="text-sm text-zinc-600 leading-relaxed">{desc}</p>
  </div>
)

export default function VaginalDrynessLanding() {
  const router = useRouter()
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [honeypot, setHoneypot] = useState("")
  const [activeFaq, setActiveFaq] = useState<number | null>(null)

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    contact_method: "Phone",
    language: "English",
    message: ""
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
          treatment: "Vaginal Dryness Treatment Dublin",
          contact_method: formData.contact_method,
          language: formData.language,
          message: formData.message || "Interested in vaginal dryness treatment. Please contact me for a confidential consultation.",
          time: new Date().toLocaleString(),
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )

      if (result.text === "OK") {
        setStatus("success")
        setTimeout(() => router.push("/womens-health/thank-you"), 2000)
      }
    } catch (error) {
      console.error("EmailJS Error:", error)
      setStatus("error")
      setTimeout(() => setStatus("idle"), 4000)
    }
  }

  const testimonials = [
    {
      name: "Claire R.",
      age: "54",
      text: "I was struggling with dryness and discomfort for years. After 4 sessions I feel like a completely different woman. The team at Gerka was incredibly supportive and professional.",
      location: "Dublin 4"
    },
    {
      name: "Niamh K.",
      age: "48",
      text: "The treatment was painless and the results were noticeable after the second session. I can finally enjoy intimacy again without pain or embarrassment.",
      location: "Wicklow"
    },
    {
      name: "Sarah M.",
      age: "61",
      text: "I thought this was just something I had to live with after menopause. Gerka Clinic changed my life. Highly recommend their discreet and caring approach.",
      location: "Stillorgan"
    }
  ]

  const faqs = [
    { q: "Is the treatment painful?", a: "No. Most patients describe it as completely painless — some even find it relaxing." },
    { q: "How many sessions do I need?", a: "Most women achieve excellent results with 3 to 6 sessions, spaced 1–2 weeks apart." },
    { q: "Is it suitable after menopause?", a: "Yes. This treatment is particularly effective for postmenopausal women experiencing tissue thinning and dryness." },
    { q: "Will my GP be informed?", a: "No. All consultations and treatments are strictly confidential unless you request otherwise." },
    { q: "How long do results last?", a: "Results typically last 12–24 months. Many patients choose annual maintenance sessions." },
    { q: "Can I combine it with HRT?", a: "Yes. Our treatment works very well alongside hormone replacement therapy." },
    { q: "How much does it cost?", a: "The initial consultation is €100 (fully deductible from treatment). Full treatment plans are discussed during your assessment." }
  ]

  return (
    <main className="bg-white min-h-screen">
      <style jsx global>{`
        .clinical-input {
          width: 100%;
          padding: 16px 20px;
          background: #FAF9F6;
          border: 1px solid #e5e5e5;
          border-radius: 14px;
          font-size: 15px;
          transition: all 0.3s ease;
        }
        .clinical-input:focus {
          border-color: #18181b;
          background: white;
          outline: none;
        }
      `}</style>

      {/* HERO SECTION */}
      <section className="relative pt-28 lg:pt-30 pb-20 bg-gradient-to-br from-rose-50 via-white to-pink-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
              <Badge><Sparkles size={16} className="text-pink-500" /> Women’s Intimate Health Clinic</Badge>
              
              <h1 className="text-4xl md:text-6xl lg:text-[4rem] font-light tracking-tighter leading-[1.05] text-zinc-900">
                Vaginal Dryness Treatment<br />
                <span className="italic font-serif text-zinc-500">Dublin</span>
              </h1>

              <p className="text-xl md:text-2xl text-zinc-600 font-light max-w-2xl mx-auto lg:mx-0">
                Non-hormonal, clinically proven relief. Restore comfort, confidence and intimacy — discreetly and effectively.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-6">
                <Link href="#booking">
                  <button className="bg-zinc-900 hover:bg-black text-white px-12 py-6 rounded-2xl text-lg font-semibold shadow-xl transition-all active:scale-95">
                    Book Free Consultation
                  </button>
                </Link>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-8 text-sm pt-4">
                <div className="flex items-center gap-2">
                  <div className="flex text-amber-400">★★★★★</div>
                  <span className="font-medium">5.0 Google Reviews</span>
                </div>
                <div className="text-zinc-500">• Female Clinicians</div>
                <div className="text-zinc-500">• 100% Confidential</div>
              </div>
            </div>

            <div className="lg:col-span-5 relative hidden lg:block">
              <div className="aspect-[6/5] rounded-[3.5rem] overflow-hidden border-8 border-white shadow-2xl relative z-10">
                <Image src="/vaginal.jpg" fill alt="Vaginal Dryness Treatment Dublin" className="object-cover" />
              </div>
              <div className="absolute -bottom-12 -right-12 w-72 h-72 bg-pink-200/30 blur-[120px] rounded-full -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM AGITATION */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-10">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight">You’re Not Alone</h2>
          <div className="space-y-6 text-xl text-zinc-600 font-light max-w-3xl mx-auto leading-relaxed">
            <p>Discomfort during intimacy, persistent dryness, itching, burning, and irritation affect thousands of Irish women.</p>
            <p>Many suffer in silence, believing it’s simply “part of getting older” or an unavoidable part of menopause.</p>
            <p className="text-zinc-900 font-medium">It doesn’t have to be this way.</p>
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="py-24 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light">Advanced Non-Hormonal Treatment</h2>
            <p className="mt-4 text-xl text-zinc-600">Science-backed regenerative care</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <Image src="/oshot.jpg" alt="Treatment Technology" width={700} height={500} className="rounded-3xl shadow-xl" />
            </div>
            <div className="space-y-10">
              <div>
                <h3 className="text-3xl font-light mb-4">Emsella + Biostimulation</h3>
                <p className="text-zinc-600 leading-relaxed text-lg">
                  We combine High-Intensity Focused Electromagnetic (HIFEM) technology with advanced biostimulators to restore natural tissue health, hydration, and elasticity.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6">
                <StepCard number="01" title="Consultation" desc="Private &amp; empathetic assessment" />
                <StepCard number="02" title="Treatment" desc="Painless 30-minute sessions" />
                <StepCard number="03" title="Results" desc="Natural, long-lasting relief" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-4xl font-light mb-16">Why Choose Gerka Clinic?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <BenefitCard icon={ShieldCheck} title="Non-Hormonal" desc="Safe for women who cannot or prefer not to use HRT" />
            <BenefitCard icon={Target} title="No Downtime" desc="Return to your normal activities immediately after treatment" />
            <BenefitCard icon={Heart} title="Pain-Free" desc="Most patients describe sessions as relaxing" />
            <BenefitCard icon={Users} title="Female Clinicians" desc="Caring, experienced, and understanding team" />
            <BenefitCard icon={Lock} title="100% Confidential" desc="Your privacy is our top priority" />
            <BenefitCard icon={Euro} title="Transparent Pricing" desc="€100 consultation fully deductible from treatment" />
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-center text-4xl font-light mb-16">What Our Patients Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl shadow">
                <div className="flex text-amber-400 mb-6">★★★★★</div>
                <p className="italic text-lg leading-relaxed text-zinc-700">“{t.text}”</p>
                <p className="mt-8 text-sm font-medium">— {t.name}, {t.age} • {t.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT CLINIC */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <Image src="/b3.webp" alt="Gerka Clinic" width={800} height={500} className="rounded-3xl" />
          </div>
          <div className="space-y-8">
            <h2 className="text-4xl font-light">Gerka Clinic — Dublin’s Leading Women’s Health Centre</h2>
            <p className="text-zinc-600 text-lg leading-relaxed">
              We specialise in regenerative gynaecology and intimate wellness. Our mission is to help women reclaim comfort, confidence, and quality of life through advanced, evidence-based treatments delivered with compassion and discretion.
            </p>
            <div className="flex gap-8 text-sm uppercase tracking-widest font-medium text-zinc-500">
              <div>Certified Clinicians</div>
              <div>International Standards</div>
              <div>Patient-First Care</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-[#FAF9F6]">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-light text-center mb-16">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-zinc-200 rounded-3xl overflow-hidden bg-white">
                <button
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-zinc-50"
                >
                  <span className="font-medium text-zinc-900">{faq.q}</span>
                  <ChevronDown className={`transition-transform ${activeFaq === i ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {activeFaq === i && (
                    <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden">
                      <p className="px-8 pb-8 text-zinc-600">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="booking" className="py-28 bg-zinc-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-light mb-8">Take Back Control of Your Comfort</h2>
          <p className="text-xl text-zinc-400 mb-12">Your privacy and comfort are our priority</p>

          <div className="bg-white text-zinc-900 p-10 md:p-16 rounded-3xl max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="text" className="hidden" value={honeypot} onChange={e => setHoneypot(e.target.value)} />

              <input required placeholder="Full Name" className="clinical-input" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input required type="email" placeholder="Email" className="clinical-input" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                <input required placeholder="Phone" className="clinical-input" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <select className="clinical-input" value={formData.contact_method} onChange={e => setFormData({...formData, contact_method: e.target.value})}>
                  <option value="Phone">Prefer Phone Call</option>
                  <option value="Email">Prefer Email</option>
                  <option value="Whatsapp">Prefer WhatsApp</option>
                </select>
                <select className="clinical-input" value={formData.language} onChange={e => setFormData({...formData, language: e.target.value})}>
                  <option value="English">English</option>
                      <option value="Spanish">Spanish</option>
                      <option value="Persian">Persian (فارسی)</option>
                </select>
              </div>

              <button disabled={status === "loading"} className="w-full bg-zinc-900 text-white py-6 rounded-2xl font-semibold text-xl hover:bg-black transition-all">
                {status === "loading" ? "Sending Request..." : "Request Free Confidential Consultation"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}