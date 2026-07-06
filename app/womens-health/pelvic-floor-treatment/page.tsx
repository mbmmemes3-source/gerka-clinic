"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ShieldCheck, Zap, Heart, Activity, Sparkles, ArrowRight, Check, Star, Lock,
  Stethoscope, Phone, Mail, User, Clock, ChevronDown, Award, Users, Send, Loader2,
  Target, Trophy, Calendar, Droplets, Info, CheckCircle2
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import emailjs from "@emailjs/browser"
import { useRouter } from "next/navigation"

// Reusable Components
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

const Benefit = ({ icon: Icon, title, desc }: { icon: any; title: string; desc: string }) => (
  <div className="flex gap-5 p-6 bg-white border border-zinc-100 rounded-3xl hover:shadow transition-all">
    <div className="w-12 h-12 bg-zinc-100 rounded-2xl flex items-center justify-center flex-shrink-0">
      <Icon size={28} className="text-zinc-900" />
    </div>
    <div>
      <h4 className="font-semibold text-lg mb-1">{title}</h4>
      <p className="text-zinc-500 text-sm leading-relaxed">{desc}</p>
    </div>
  </div>
)

export default function PelvicFloorTreatmentDublin() {
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
          treatment: "Pelvic Floor Treatment Dublin - Emsella",
          contact_method: formData.contact_method,
          language: formData.language,
          message: formData.message || "Requesting pelvic floor treatment consultation.",
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
    { name: "Laura P.", text: "After my second child I had terrible leaks when laughing or sneezing. After 6 Emsella sessions it's almost completely gone. Life-changing!", location: "Dublin 6" },
    { name: "Michelle T.", text: "I avoided the gym for years due to incontinence. Now I can exercise confidently again. The treatment was so easy.", location: "Rathmines" },
    { name: "Aoife N.", text: "Post-menopause weakness was affecting my intimacy. Emsella restored strength and sensation. I feel 10 years younger.", location: "Malahide" },
     ]

  const faqs = [
    { q: "Does it hurt?", a: "No. You sit fully clothed on the Emsella chair. Most women find the sensation pleasant — like a strong pelvic floor workout." },
    { q: "How many sessions until I see results?", a: "Many women notice improvement after the first or second session. A full course is usually 6 sessions." },
    { q: "Is it suitable after a C-section?", a: "Yes. Emsella is safe and highly effective for women who have had caesarean or vaginal births." },
    { q: "Can I do this while menstruating?", a: "Yes. The treatment can be performed at any time in your cycle." },
    { q: "How long do results last?", a: "Results typically last 6–12 months. Many patients return for maintenance sessions once or twice a year." },
    { q: "What's the cost?", a: "The initial consultation is €100 (fully deductible). A 6-session package is the most popular option." },
    { q: "Is it covered by insurance?", a: "Some health insurance plans offer partial reimbursement. We provide receipts for claims." },
    { q: "How does Emsella work?", a: "It uses High-Intensity Focused Electromagnetic energy to cause thousands of powerful pelvic floor muscle contractions in one session." }
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
      <section className="relative pt-28 lg:pt-30 pb-20 bg-gradient-to-br from-blue-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
              <Badge><Zap size={16} /> Clinically Proven Emsella Technology</Badge>
              
              <h1 className="text-4xl md:text-6xl font-light tracking-tighter leading-[1.05]">
                Pelvic Floor Treatment in Dublin <span className="italic font-serif text-zinc-500">Regain Control &amp; Confidence</span>
              </h1>
              <p className="text-2xl md:text-3xl text-zinc-600 font-light max-w-2xl mx-auto lg:mx-0">
                Clinically proven Emsella treatment for incontinence, weakness &amp; prolapse support. No surgery, no downtime.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="#booking">
                  <button className="bg-zinc-900 text-white px-12 py-6 rounded-2xl text-lg font-semibold hover:bg-black transition-all">
                    Book Free Consultation
                  </button>
                </Link>
              </div>

              <div className="flex justify-center lg:justify-start gap-8 text-sm pt-4">
                <div className="flex items-center gap-2">
                  <div className="flex text-amber-400">★★★★★</div>
                  <span>Google Reviews</span>
                </div>
                <div>Certified Clinicians</div>
                <div>Dublin Clinic</div>
              </div>
            </div>

            <div className="lg:col-span-5 relative hidden lg:block">
              <div className="aspect-square rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl">
                <Image src="/emsella2.webp" fill alt="Emsella Pelvic Floor Treatment" className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM AGITATION */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-12">Leaks, Urgency, Weakness — It Affects More Women Than You Think</h2>
          <div className="grid md:grid-cols-2 gap-8 text-left text-lg text-zinc-600">
            <ul className="space-y-4">
              <li className="flex gap-3">• Leaking when sneezing, laughing, or exercising</li>
              <li className="flex gap-3">• Constant urgency to use the bathroom</li>
              <li className="flex gap-3">• Feeling “loose” or reduced sensation during intimacy</li>
            </ul>
            <ul className="space-y-4">
              <li className="flex gap-3">• Avoiding activities you love (gym, running, sports)</li>
              <li className="flex gap-3">• Postpartum pelvic floor weakness</li>
              <li className="flex gap-3">• Post-menopausal changes</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="py-24 bg-zinc-950 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-light mb-6">Emsella: The Chair That Does 11,000 Kegels in 28 Minutes</h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">Sit fully clothed. Revolutionary HIFEM technology strengthens your pelvic floor with thousands of supramaximal contractions per session.</p>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            <StepCard number="01" title="Consultation" desc="Private assessment of your pelvic floor health" />
            <StepCard number="02" title="Emsella Session" desc="Fully clothed, 28-minute treatment" />
            <StepCard number="03" title="Results" desc="Stronger pelvic floor and better control" />
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-center text-4xl font-light mb-16">Proven Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Benefit icon={Zap} title="11,000 Kegels per Session" desc="Equivalent to months of manual exercises" />
            <Benefit icon={ShieldCheck} title="Fully Clothed" desc="No undressing required" />
            <Benefit icon={Target} title="Treats Multiple Issues" desc="Stress, urge & mixed incontinence" />
            <Benefit icon={Heart} title="Improved Intimacy" desc="Better sensation and confidence" />
            <Benefit icon={Users} title="Postpartum & Menopause" desc="Safe for all life stages" />
            <Benefit icon={Calendar} title="No Downtime" desc="Back to work or activities immediately" />
          </div>
        </div>
      </section>

      {/* WHO IS IT FOR */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-center text-4xl font-light mb-12">This Treatment Is Ideal If You...</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Have experienced incontinence after childbirth",
              "Are going through or post menopause",
              "Have tried Kegel exercises without success",
              "Want to avoid surgery",
              "Experience reduced sensation during intimacy",
              "Leak when coughing, sneezing or exercising",
              "Feel constant urgency to use the bathroom",
              "Avoid certain activities due to fear of leaks"
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-6 bg-white rounded-3xl">
                <Check className="text-emerald-500 mt-1" size={24} />
                <span className="text-zinc-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-center text-4xl font-light mb-16">Real Women, Real Results</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-zinc-50 p-8 rounded-3xl">
                <div className="text-amber-400 mb-6">★★★★★</div>
                <p className="italic text-lg leading-relaxed">“{t.text}”</p>
                <p className="mt-8 text-sm font-medium">— {t.name} • {t.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT CLINIC */}
      <section className="py-24 bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-light">Gerka Clinic — Leading Women’s Health in Dublin</h2>
            <p className="text-zinc-400 text-lg">We are proud to offer the most advanced pelvic floor treatments in Ireland. Our Emsella chair and experienced team have helped hundreds of women regain control and confidence.</p>
            <div className="flex gap-8">
              <div><Trophy size={48} /></div>
              <div><Award size={48} /></div>
            </div>
          </div>
          <div>
            <Image src="/emsella.jpeg" alt="Emsella Chair" width={700} height={500} className="rounded-3xl" />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-light text-center mb-16">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-zinc-200 rounded-3xl overflow-hidden">
                <button onClick={() => setActiveFaq(activeFaq === i ? null : i)} className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-zinc-50">
                  <span className="font-medium">{faq.q}</span>
                  <ChevronDown className={`transition-transform ${activeFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {activeFaq === i && (
                    <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden px-8 pb-8 text-zinc-600">
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA + FORM */}
      <section id="booking" className="py-28 bg-zinc-950 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-light mb-8">You Deserve to Feel Like Yourself Again</h2>
          <p className="text-xl text-zinc-400 mb-12">Start your journey to better pelvic health today</p>

          <div className="bg-white text-zinc-900 p-10 md:p-16 rounded-3xl max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="text" className="hidden" value={honeypot} onChange={e => setHoneypot(e.target.value)} />

              <input required placeholder="Full Name" className="clinical-input" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input required type="email" placeholder="Email" className="clinical-input" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                <input required placeholder="Phone Number" className="clinical-input" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <select className="clinical-input" value={formData.contact_method} onChange={e => setFormData({...formData, contact_method: e.target.value})}>
                  <option value="Phone">Prefer Phone</option>
                  <option value="Email">Prefer Email</option>
                </select>
                <select className="clinical-input" value={formData.language} onChange={e => setFormData({...formData, language: e.target.value})}>
                  <option value="English">English</option>
                  <option value="Polish">Polish</option>
                </select>
              </div>

              <button disabled={status === "loading"} className="w-full bg-zinc-900 text-white py-7 rounded-2xl font-bold text-xl hover:bg-black transition-all">
                {status === "loading" ? "Sending..." : "Book Free Consultation"}
              </button>
            </form>
          </div>

          <p className="mt-10 text-sm flex items-center justify-center gap-3">
            <Phone size={20} /> 087 888 8087 • Confidential Care
          </p>
        </div>
      </section>
    </main>
  )
}