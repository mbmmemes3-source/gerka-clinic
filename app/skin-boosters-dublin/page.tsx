"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ShieldCheck, Microscope, Sparkles, Droplets,
  ArrowRight, Check, Star, Lock, Stethoscope,
  Phone, Mail, User, Clock, ChevronRight,
  Award, Users, Send, Loader2, ChevronDown, MapPin, CheckCircle2, Tag, Calendar
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import emailjs from "emailjs-com"
import { useRouter } from "next/navigation"
import { sendGerkaInquiry } from "@/app/actions/sendEmail"

const boosterOptions = [
  {
    name: "PROFHILO®",
    badge: "Hyaluronic Acid Remodelling",
    desc: "An injectable ultra-pure hyaluronic acid treatment designed to stimulate collagen and elastin, improving deep skin hydration, firmness, and overall skin quality.",
    benefits: ["Deep dermal hydration", "Improves skin laxity & firmness", "Face, neck & hands rejuvenation"],
    image: "/profhilo1.webp",
    offer: "20% OFF Until 31 Oct 2026"
  },
  {
    name: "SUNEKOS®",
    badge: "Biorevitalisation & Amino Acids",
    desc: "A specialized combination of hyaluronic acid and a patented cluster of amino acids designed to support skin quality, extracellular matrix, and natural elasticity.",
    benefits: ["Targets dark circles & under-eye thinness", "Restores natural skin elasticity", "Deep cellular stimulation"],
    image: "/sune1.webp",
    offer: "20% OFF Until 31 Oct 2026"
  },
  {
    name: "SKINVIVE™ by Juvéderm",
    badge: "Intradermal Hydration Micro-droplets",
    desc: "Designed to improve skin smoothness and cheek hydration for up to 6 months with smooth micro-injections into the superficial dermis.",
    benefits: ["Smooths fine surface texture", "Long-lasting cheek glow", "Minimal downtime micro-droplets"],
    image: "/skinvive1.webp",
    offer: "20% OFF Until 31 Oct 2026"
  },
  {
    name: "JALUPRO®",
    badge: "Amino Acid Bio-revitaliser",
    desc: "A rich biorevitalising solution combining amino acids with hyaluronic acid to hydrate, nourish, and support tired, sun-damaged, or aging skin.",
    benefits: ["Nourishes skin extracellular matrix", "Brightens dull, dehydrated skin", "Pairs well with skin peel regimens"],
    image: "/meso.jpg",
    offer: "20% OFF Until 31 Oct 2026"
  }
]

const faqs = [
  {
    q: "What is the difference between skin boosters and dermal fillers?",
    a: "Dermal fillers add structure, volume, and contour to specific facial areas (such as cheeks or lips). Skin boosters, like Profhilo, Sunekos, Skinvive, and Jalupro, do not change facial structure or add bulk; instead, they disperse within the skin tissue to intensely hydrate, stimulate collagen, and improve overall skin quality and smoothness."
  },
  {
    q: "How do I know which skin booster is best for me?",
    a: "Every skin type and concern is unique. During your consultation at Gerka Clinic, our clinical practitioner assesses your skin hydration level, elasticity, areas of concern (such as under-eyes, full face, or neck), and medical history to recommend the most suitable skin booster protocol."
  },
  {
    q: "How long do results from skin boosters last?",
    a: "Results vary depending on the product chosen and individual skin metabolism. Typically, initial treatment protocols involve 2 to 3 sessions, with skin hydration and quality improvements lasting between 6 to 9 months. Maintenance treatments are recommended twice a year."
  },
  {
    q: "Is there any downtime following a skin booster treatment?",
    a: "Skin boosters involve precise micro-injections. You may experience minor swelling, small localized bumps at the injection sites, or mild tenderness for 24–48 hours, which naturally subsides as the active solution absorbs into the skin."
  }
]

const boosterComparisonData = [
  {
    id: "profhilo",
    name: "PROFHILO®",
    badge: "HA Bio-Remodelling",
    bestFor: "Overall skin laxity, face/neck tightening & deep dermal hydration",
    activeComp: "Ultra-pure HA (64mg/2ml high & low MW)",
    targetAreas: "Full Face, Neck, Décolletage, Hands",
    sessionsNeeded: "2 Sessions (spaced 4 weeks apart)",
    resultsDuration: "6 - 9 Months",
    downtime: "Mild localized bumps (absorbed in 24-48h)",
    highlights: [
      "Stimulates 4 types of collagen & elastin",
      "Spreads naturally through tissue layers",
      "No artificial volume or change to facial shape"
    ]
  },
  {
    id: "sunekos",
    name: "SUNEKOS®",
    badge: "Amino Acids + HA",
    bestFor: "Delicate under-eye dark circles, tear troughs & fine peri-oral lines",
    activeComp: "HA + 6 Patented Amino Acid Cluster (Glycine, L-Proline, L-Lysine)",
    targetAreas: "Under-Eyes, Forehead, Mouth Area, Full Face",
    sessionsNeeded: "3 - 4 Sessions (spaced 1-2 weeks apart)",
    resultsDuration: "6 - 9 Months",
    downtime: "Minimal redness/swelling (resolves in 24h)",
    highlights: [
      "Targeted repair for thin under-eye skin",
      "Restores extracellular matrix elasticity",
      "Reduces dark circle shadows and hollowness"
    ]
  },
  {
    id: "skinvive",
    name: "SKINVIVE™",
    badge: "Intradermal Micro-droplets",
    bestFor: "Smooth cheek texture & long-lasting glass glow up to 6 months",
    activeComp: "Cross-linked HA micro-droplets + Lidocaine for comfort",
    targetAreas: "Cheeks, Mid-Face, Surface Skin Layer",
    sessionsNeeded: "1 Session (6-month top-up optional)",
    resultsDuration: "Up to 6 Months",
    downtime: "Minimal micro-injection points (absorbs quickly)",
    highlights: [
      "FDA-approved intradermal micro-droplet hydration",
      "Improves cheek smoothness & light reflection",
      "Single-session convenience with lasting results"
    ]
  },
  {
    id: "jalupro",
    name: "JALUPRO®",
    badge: "Rich ECM Bio-Revitaliser",
    bestFor: "Sun-damaged skin, deep cellular nourishment & dullness recovery",
    activeComp: "High-concentration Amino Acids + Hyaluronic Acid",
    targetAreas: "Full Face, Neck, Dehydrated Skin Zones",
    sessionsNeeded: "2 - 3 Sessions (spaced 2-3 weeks apart)",
    resultsDuration: "6 Months",
    downtime: "Superficial papules (absorb in 24-48h)",
    highlights: [
      "Feeds fibroblast cells essential amino acids",
      "Rejuvenates dull, tired or sun-damaged skin",
      "Pairs exceptionally well with skin peels"
    ]
  }
]

export default function SkinBoostersDublinLandingPage() {
  const router = useRouter()

  useEffect(() => {
    document.title = "Skin Boosters Dublin | Profhilo, Sunekos, Skinvive & Jalupro"
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Explore skin boosters in Dublin including Profhilo, Sunekos, Skinvive and Jalupro. Personalised consultation and suitability assessment at Gerka Clinic."
      )
    }
  }, [])

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interested_in: "Not sure",
    contact_method: "Phone",
    message: ""
  })

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const [activeBoosterTab, setActiveBoosterTab] = useState("profhilo")

  // Campaign offer active state control
  const OFFER_EXPIRY = new Date("2026-10-31T23:59:59")
  const isOfferActive = new Date() <= OFFER_EXPIRY

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (status === "loading") return
    setStatus("loading")

    try {
      // 1. Send via Brevo / Nodemailer Server Action
      try {
        const fd = new FormData()
        fd.append("name", formData.name)
        fd.append("email", formData.email)
        fd.append("treatment", `[Skin Boosters Dublin] ${formData.interested_in}`)
        fd.append("message", `Phone: ${formData.phone} | Contact Method: ${formData.contact_method} | Note: ${formData.message || "N/A"}`)
        await sendGerkaInquiry(fd).catch(() => {})
      } catch (err) {
        console.error("Server Action email send error:", err)
      }

      // 2. Send via EmailJS matching existing site parameters
      const templateParams = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        contact_method: formData.contact_method,
        treatment: `[Skin Boosters Dublin] ${formData.interested_in}`,
        message: formData.message || "Skin Boosters Dublin Consultation Request",
        time: new Date().toLocaleString(),
      }

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )

      if (typeof window !== "undefined" && (window as any).gtag) {
        ;(window as any).gtag("event", "conversion", {
          send_to: "AW-18205338617/lead",
          value: 1.0,
          currency: "EUR"
        })
      }

      setStatus("success")
      setTimeout(() => {
        router.push("/thank-you")
      }, 1200)
    } catch (err) {
      console.error("Submission Error:", err)
      setStatus("success")
      setTimeout(() => {
        router.push("/thank-you")
      }, 1200)
    }
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  }

  const medicalClinicSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Gerka Clinic - Skin Boosters Dublin",
    "url": "https://www.gerkaclinic.com/skin-boosters-dublin/",
    "logo": "https://www.gerkaclinic.com/icon2.png",
    "description": "Explore skin boosters in Dublin including Profhilo, Sunekos, Skinvive and Jalupro. Personalised consultation and suitability assessment.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1 Priory Office Park, Stillorgan Rd",
      "addressLocality": "Dublin",
      "postalCode": "A94NH31",
      "addressCountry": "IE"
    },
    "telephone": "+353878888087"
  }

  return (
    <main className="min-h-screen bg-[#FAF9F6] text-zinc-900 pt-20 md:pt-10 pb-20 font-sans selection:bg-zinc-900 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalClinicSchema) }}
      />

      {/* HERO SECTION WITH LEAD FORM */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-6 md:pt-12 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* LEFT HERO COLUMN */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* OFFER BADGE */}
            {isOfferActive && (
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-900 text-xs font-bold uppercase tracking-wider shadow-xs">
                <Tag size={14} className="text-amber-600 animate-pulse" />
                <span>Special Event: 20% Off Selected Skin Boosters until 31 Oct 2026</span>
              </div>
            )}

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-zinc-900 leading-[1.15]">
              SKIN BOOSTERS DUBLIN — <span className="font-normal text-amber-700">HYDRATE • REFRESH • GLOW</span>
            </h1>

            <p className="text-lg md:text-xl font-light text-zinc-700 leading-relaxed">
              A personalised consultation to choose the most suitable skin booster for your skin.
            </p>

            <p className="text-sm md:text-base font-light text-zinc-600 leading-relaxed">
              Explore selected skin booster treatments at Gerka Clinic, including Profhilo, Sunekos, Skinvive and Jalupro. Treatment selection follows consultation and clinical suitability assessment.
            </p>

            {/* TRUST POINTS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                "Profhilo®, Sunekos®, Skinvive™ & Jalupro®",
                "Personalised Clinical Selection",
                "Deep Dermal Hydration & Elasticity",
                "Doctor-Led Dublin Clinic"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 bg-white/80 p-3 rounded-xl border border-zinc-100 shadow-sm">
                  <CheckCircle2 size={18} className="text-emerald-700 shrink-0" />
                  <span className="text-xs md:text-sm text-zinc-800 font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA BUTTONS & PHONE */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#lp-booking-form"
                className="inline-flex items-center justify-center gap-2 text-xs md:text-sm font-semibold uppercase tracking-widest text-white bg-zinc-900 hover:bg-black px-7 py-4 rounded-2xl shadow-lg transition-all transform hover:-translate-y-0.5"
              >
                <span>BOOK A SKIN BOOSTER CONSULTATION</span>
                <ArrowRight size={16} />
              </a>

              <a
                href="tel:+353878888087"
                className="inline-flex items-center justify-center gap-2 text-xs md:text-sm font-semibold uppercase tracking-widest text-zinc-700 hover:text-zinc-900 border border-zinc-300 hover:border-zinc-500 bg-white px-6 py-4 rounded-2xl transition-all"
              >
                <Phone size={16} className="text-emerald-600" />
                <span>087 888 8087</span>
              </a>
            </div>

            <div className="flex items-center gap-2 text-xs text-zinc-500 pt-1">
              <MapPin size={14} className="text-zinc-400 shrink-0" />
              <span>1 Priory Office Park, Stillorgan Rd, Dublin • Doctor-Led Assessment</span>
            </div>
          </div>

          {/* RIGHT LEAD FORM COLUMN */}
          <div id="lp-booking-form" className="lg:col-span-5 scroll-mt-28">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-zinc-200 shadow-xl shadow-zinc-200/50 relative overflow-hidden">
              
              <div className="mb-6">
                <span className="text-[10px] font-bold uppercase tracking-widest text-amber-800 bg-amber-50 px-3 py-1 rounded-full border border-amber-100">
                  Skin Booster Consultation
                </span>
                <h2 className="text-xl sm:text-2xl font-light tracking-tight text-zinc-900 mt-2">
                  Book Your Skin Booster Consultation
                </h2>
                <p className="text-xs text-zinc-500 mt-1 font-light">
                  Tell us which booster interests you or select "Not sure" for expert clinical advice.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User size={16} className="absolute left-3.5 top-3.5 text-zinc-400" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Aoife Murphy"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl text-xs md:text-sm text-zinc-900 focus:outline-none focus:border-zinc-900 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail size={16} className="absolute left-3.5 top-3.5 text-zinc-400" />
                      <input
                        type="email"
                        required
                        placeholder="aoife@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl text-xs md:text-sm text-zinc-900 focus:outline-none focus:border-zinc-900 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone size={16} className="absolute left-3.5 top-3.5 text-zinc-400" />
                      <input
                        type="tel"
                        required
                        placeholder="087 123 4567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl text-xs md:text-sm text-zinc-900 focus:outline-none focus:border-zinc-900 transition-colors"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1">
                    Interested In *
                  </label>
                  <select
                    value={formData.interested_in}
                    onChange={(e) => setFormData({ ...formData, interested_in: e.target.value })}
                    className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl text-xs md:text-sm text-zinc-900 focus:outline-none focus:border-zinc-900 transition-colors"
                  >
                    <option value="Not sure">Not sure (Advise during consultation)</option>
                    <option value="Profhilo">Profhilo®</option>
                    <option value="Sunekos">Sunekos®</option>
                    <option value="Skinvive">Skinvive™</option>
                    <option value="Jalupro">Jalupro®</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1">
                    Preferred Contact Method
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {["Phone", "Email", "WhatsApp"].map((method) => (
                      <button
                        type="button"
                        key={method}
                        onClick={() => setFormData({ ...formData, contact_method: method })}
                        className={`py-2 px-3 text-xs font-medium rounded-xl border transition-all ${
                          formData.contact_method === method
                            ? "bg-zinc-900 text-white border-zinc-900"
                            : "bg-zinc-50 text-zinc-700 border-zinc-200 hover:border-zinc-300"
                        }`}
                      >
                        {method}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1">
                    Message (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Any specific questions about skin boosters..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-3 bg-zinc-50 border border-zinc-200 rounded-xl text-xs md:text-sm text-zinc-900 focus:outline-none focus:border-zinc-900 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full py-4 bg-zinc-900 hover:bg-black text-white text-xs md:text-sm font-semibold uppercase tracking-widest rounded-xl transition-all shadow-md flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      <span>BOOK MY CONSULTATION</span>
                    </>
                  )}
                </button>

                {status === "success" && (
                  <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs rounded-xl flex items-center gap-2">
                    <CheckCircle2 size={16} className="shrink-0 text-emerald-600" />
                    <span>Enquiry submitted! Redirecting...</span>
                  </div>
                )}

                <p className="text-[10px] text-zinc-600 leading-relaxed font-light pt-1">
                  Treatment choice is personalised following consultation and suitability assessment. Results vary between individuals.
                </p>
              </form>
            </div>
          </div>

        </div>
      </section>

      {/* LIMITED-TIME EVENT BANNER */}
      {isOfferActive && (
        <section className="py-8 bg-gradient-to-r from-amber-900 via-zinc-900 to-amber-950 text-white border-y border-amber-800/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-300 shrink-0">
                <Tag size={24} />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400">
                  Limited-Time Skin Booster Event
                </span>
                <h2 className="text-xl sm:text-2xl font-light tracking-tight mt-0.5">
                  20% Off Selected Skin Boosters — Ends 31 October 2026
                </h2>
                <p className="text-xs text-amber-200/80 font-light mt-0.5">
                  Book your consultation before 31 October 2026 to secure special event pricing on eligible booster courses.
                </p>
              </div>
            </div>
            <a
              href="#lp-booking-form"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest bg-amber-400 hover:bg-amber-300 text-zinc-950 px-6 py-3.5 rounded-xl shadow-lg transition-all shrink-0"
            >
              <span>Claim Booster Offer</span>
              <ArrowRight size={14} />
            </a>
          </div>
        </section>
      )}

      {/* SECTION: SKIN BOOSTER OPTIONS */}
      <section className="py-16 bg-white border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">
              Advanced Formulations
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-tight text-zinc-900 mt-2">
              Skin Booster Options at Gerka Clinic
            </h2>
            <p className="text-sm md:text-base text-zinc-600 font-light mt-3">
              We offer leading injectable skin quality treatments tailored to your specific skin hydration, elasticity, and texture goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {boosterOptions.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -4 }}
                className="bg-[#FAF9F6] rounded-3xl border border-zinc-200 overflow-hidden shadow-sm flex flex-col justify-between"
              >
                <div className="relative h-56 sm:h-64 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name + " Dublin"}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/20 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/95 backdrop-blur-md text-zinc-900 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border border-zinc-200 shadow-sm">
                      {item.badge}
                    </span>
                  </div>
                  {isOfferActive && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-amber-500 text-zinc-950 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-md">
                        20% OFF
                      </span>
                    </div>
                  )}
                  <div className="absolute bottom-4 left-6 right-6">
                    <h3 className="text-2xl font-light text-white tracking-tight">
                      {item.name}
                    </h3>
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
                  <p className="text-xs sm:text-sm text-zinc-600 font-light leading-relaxed">
                    {item.desc}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-zinc-200">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Key Benefits:</span>
                    <div className="space-y-1.5">
                      {item.benefits.map((b, bIdx) => (
                        <div key={bIdx} className="flex items-center gap-2 text-xs text-zinc-700">
                          <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <a
                    href="#lp-booking-form"
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-900 hover:text-black pt-3 group"
                  >
                    <span>Discuss {item.name} suitability</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: INTERACTIVE SKIN BOOSTER COMPARISON MATRIX */}
      <section className="py-16 bg-gradient-to-b from-white to-[#FAF9F6] border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-[10px] font-bold uppercase tracking-widest text-amber-800 bg-amber-50 px-3.5 py-1.5 rounded-full border border-amber-200/80 inline-block mb-3">
              Interactive Booster Comparison
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-tight text-zinc-900">
              Skin Booster Comparison Guide
            </h2>
            <p className="text-sm md:text-base text-zinc-600 font-light mt-2">
              Compare formulations, treatment zones, required sessions, and clinical targets to find your ideal skin booster.
            </p>
          </div>

          {/* TAB SWITCHER BUTTONS */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {boosterComparisonData.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveBoosterTab(item.id)}
                className={`px-5 py-3 rounded-2xl text-xs md:text-sm font-medium transition-all duration-200 border ${
                  activeBoosterTab === item.id
                    ? "bg-zinc-900 text-white border-zinc-900 shadow-md transform -translate-y-0.5"
                    : "bg-white text-zinc-700 border-zinc-200 hover:border-zinc-400 hover:bg-zinc-50"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* TAB CONTENT DISPLAY */}
          {(() => {
            const currentBooster = boosterComparisonData.find((b) => b.id === activeBoosterTab) || boosterComparisonData[0]
            return (
              <motion.div
                key={currentBooster.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl p-6 sm:p-10 border border-zinc-200 shadow-xl max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-100">
                      {currentBooster.badge}
                    </span>
                    <h3 className="text-2xl font-light text-zinc-900 mt-2">
                      {currentBooster.name} Protocol Details
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-600 font-light mt-1">
                      {currentBooster.bestFor}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="bg-[#FAF9F6] p-4 rounded-2xl border border-zinc-200">
                      <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-1">
                        Active Formulation & Ingredients
                      </div>
                      <div className="text-xs text-zinc-900 font-medium leading-relaxed">
                        {currentBooster.activeComp}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="bg-[#FAF9F6] p-4 rounded-2xl border border-zinc-200">
                        <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-1">
                          Ideal Treatment Zones
                        </div>
                        <div className="text-xs text-zinc-800 font-light leading-relaxed">
                          {currentBooster.targetAreas}
                        </div>
                      </div>

                      <div className="bg-[#FAF9F6] p-4 rounded-2xl border border-zinc-200">
                        <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-1">
                          Recommended Course
                        </div>
                        <div className="text-xs text-zinc-800 font-medium leading-relaxed flex items-center gap-1.5">
                          <Calendar size={14} className="text-zinc-600" />
                          <span>{currentBooster.sessionsNeeded}</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="bg-[#FAF9F6] p-4 rounded-2xl border border-zinc-200">
                        <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-1">
                          Result Longevity
                        </div>
                        <div className="text-xs text-zinc-900 font-medium leading-relaxed">
                          {currentBooster.resultsDuration}
                        </div>
                      </div>

                      <div className="bg-[#FAF9F6] p-4 rounded-2xl border border-zinc-200">
                        <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-1">
                          Post-Treatment Recovery
                        </div>
                        <div className="text-xs text-zinc-700 font-light leading-relaxed">
                          {currentBooster.downtime}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <a
                      href="#lp-booking-form"
                      className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-white bg-zinc-900 hover:bg-black px-6 py-3.5 rounded-xl transition-all shadow-sm"
                    >
                      <span>BOOK CONSULTATION FOR {currentBooster.name}</span>
                      <ArrowRight size={14} />
                    </a>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-[#FAF9F6] p-6 rounded-2xl border border-zinc-200 space-y-4">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-900 flex items-center gap-2">
                    <Sparkles size={18} className="text-amber-600" />
                    <span>Key Clinical Benefits</span>
                  </h4>
                  <ul className="space-y-3">
                    {currentBooster.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-zinc-700 font-light leading-relaxed">
                        <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 border-t border-zinc-200/80 text-[11px] text-zinc-500 font-light italic">
                    Clinical suitability and precise injection protocol determined by qualified practitioners during your consultation.
                  </div>
                </div>
              </motion.div>
            )
          })()}
        </div>
      </section>

      {/* SECTION: WHICH SKIN BOOSTER IS RIGHT FOR ME */}
      <section className="py-16 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl border border-zinc-200 p-8 sm:p-12 shadow-md grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-100">
                Consultation-Led Approach
              </span>
              <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-zinc-900">
                Which Skin Booster Is Right for Me?
              </h2>
              <p className="text-xs sm:text-sm text-zinc-600 font-light leading-relaxed">
                Different skin has different needs. Rather than forcing visitors to choose a product before understanding clinical suitability, we sell the consultation: discuss your concern, assess your skin structure and hydration levels, and recommend an appropriate option when clinically suitable.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 bg-zinc-50 rounded-2xl border border-zinc-200">
                  <span className="text-base font-semibold text-zinc-900 block">1. Assess</span>
                  <span className="text-xs text-zinc-500 font-light">Evaluate skin density & hydration deficit.</span>
                </div>
                <div className="p-4 bg-zinc-50 rounded-2xl border border-zinc-200">
                  <span className="text-base font-semibold text-zinc-900 block">2. Select</span>
                  <span className="text-xs text-zinc-500 font-light">Recommend Profhilo, Sunekos, Skinvive or Jalupro.</span>
                </div>
                <div className="p-4 bg-zinc-50 rounded-2xl border border-zinc-200">
                  <span className="text-base font-semibold text-zinc-900 block">3. Treat</span>
                  <span className="text-xs text-zinc-500 font-light">Tailored micro-injection protocol with aftercare.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="bg-zinc-900 text-white p-8 rounded-3xl space-y-4 text-center max-w-sm w-full shadow-xl">
                <Stethoscope size={36} className="mx-auto text-amber-400" />
                <h3 className="text-xl font-light tracking-tight">Personalised Skin Assessment</h3>
                <p className="text-xs text-zinc-400 font-light leading-relaxed">
                  Book a consultation to evaluate your skin quality with our qualified clinicians.
                </p>
                <a
                  href="#lp-booking-form"
                  className="block w-full py-3 bg-white hover:bg-zinc-100 text-zinc-950 text-xs font-semibold uppercase tracking-wider rounded-xl transition-all"
                >
                  Book My Consultation
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION: REAL PATIENT RESULTS (SKIN BOOSTERS BEFORE & AFTER) */}
      <section className="py-16 bg-white border-y border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[10px] font-bold uppercase tracking-widest text-amber-900 bg-amber-50 px-3.5 py-1.5 rounded-full border border-amber-200/80 inline-block mb-3">
              Real Patient Clinical Case Study
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-tight text-zinc-900">
              Visible Skin Hydration & Bio-Remodelling Results
            </h2>
            <p className="text-sm md:text-base text-zinc-600 font-light mt-2">
              Transformative improvements in dermal hydration, skin elasticity, redness reduction, and natural glow after a skin booster course at Gerka Clinic Dublin.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center max-w-6xl mx-auto">
            {/* BEFORE AFTER IMAGE CARD */}
            <div className="lg:col-span-7">
              <div className="relative rounded-3xl overflow-hidden border border-zinc-200/90 shadow-2xl bg-zinc-900 group">
                <Image
                  src="/skin-booster-before-after.png"
                  alt="Real Patient Before and After Skin Booster Treatment Result at Gerka Clinic Dublin"
                  width={800}
                  height={800}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>

            {/* CASE STUDY DETAILS */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                  Case Study Breakdown
                </span>
                <h3 className="text-xl sm:text-2xl font-light text-zinc-900">
                  Full Face Bio-Remodelling & Glow
                </h3>
              </div>

              <div className="space-y-3">
                <div className="bg-[#FAF9F6] p-4 rounded-2xl border border-zinc-200">
                  <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-1">
                    Initial Patient Concern
                  </div>
                  <div className="text-xs md:text-sm text-zinc-800 font-light leading-relaxed">
                    Dehydrated skin barrier, facial dullness, persistent redness across cheeks and forehead, and early loss of skin elasticity.
                  </div>
                </div>

                <div className="bg-[#FAF9F6] p-4 rounded-2xl border border-zinc-200">
                  <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-1">
                    Treatment Protocol Delivered
                  </div>
                  <div className="text-xs md:text-sm text-zinc-800 font-medium text-amber-900 leading-relaxed">
                    2 Sessions of PROFHILO® Hyaluronic Acid Bio-Remodelling (spaced 4 weeks apart)
                  </div>
                </div>

                <div className="bg-amber-50/70 p-4 rounded-2xl border border-amber-200/60">
                  <div className="text-xs font-semibold uppercase tracking-wider text-amber-950 mb-1 flex items-center gap-1.5">
                    <CheckCircle2 size={16} className="text-emerald-700" />
                    <span>Clinical Outcomes Achieved</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-zinc-800 font-light">
                    <li className="flex items-center gap-2">
                      <Check size={14} className="text-emerald-700" />
                      <span>Noticeable increase in deep dermal hydration & tissue firmness</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={14} className="text-emerald-700" />
                      <span>Calmed facial redness and significantly more uniform skin tone</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={14} className="text-emerald-700" />
                      <span>Softened fine surface lines with a radiant, natural glow</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="#lp-booking-form"
                  className="inline-flex items-center justify-center gap-2 text-xs md:text-sm font-semibold uppercase tracking-widest text-white bg-zinc-900 hover:bg-black px-7 py-4 rounded-2xl shadow-lg transition-all w-full sm:w-auto"
                >
                  <span>START YOUR SKIN BOOSTER JOURNEY</span>
                  <ArrowRight size={16} />
                </a>
              </div>

              <p className="text-[10px] text-zinc-600 font-light italic">
                * Note: Individual patient results vary based on age, skin metabolism, baseline hydration levels, and post-treatment aftercare compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: FAQS */}
      <section className="py-16 bg-white border-t border-zinc-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">
              Clear Advice
            </span>
            <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-zinc-900 mt-2">
              Frequently Asked Questions About Skin Boosters
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx
              return (
                <div
                  key={idx}
                  className="bg-[#FAF9F6] rounded-2xl border border-zinc-200 overflow-hidden shadow-2xs transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className="text-sm md:text-base font-medium text-zinc-900">
                      {faq.q}
                    </span>
                    <ChevronDown
                      size={18}
                      className={`text-zinc-500 shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-zinc-900" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="px-6 pb-6 pt-1 text-xs md:text-sm text-zinc-600 font-light leading-relaxed border-t border-zinc-200/60"
                      >
                        {faq.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA BANNER */}
      <section className="py-16 bg-zinc-900 text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400 bg-zinc-800 px-4 py-1.5 rounded-full border border-zinc-700">
            Book Your Consultation
          </span>
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight">
            Elevate Your Skin Quality & Hydration
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
            Discover whether Profhilo, Sunekos, Skinvive or Jalupro is best suited to restore your skin's natural glow and firmness.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <a
              href="#lp-booking-form"
              className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold uppercase tracking-widest text-zinc-900 bg-white hover:bg-zinc-100 px-8 py-4 rounded-2xl shadow-xl transition-all"
            >
              <span>BOOK A CONSULTATION</span>
              <ArrowRight size={16} />
            </a>
            <a
              href="tel:+353878888087"
              className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold uppercase tracking-widest text-white border border-zinc-700 hover:border-zinc-500 bg-zinc-800 px-7 py-4 rounded-2xl transition-all"
            >
              <Phone size={16} className="text-amber-400" />
              <span>Call 087 888 8087</span>
            </a>
          </div>
        </div>
      </section>

      {/* STICKY MOBILE BOTTOM BAR */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-[90] bg-white border-t border-zinc-200 p-3 shadow-2xl flex items-center gap-2">
        <a
          href="tel:+353878888087"
          className="flex-1 py-3 px-3 bg-zinc-100 hover:bg-zinc-200 text-zinc-900 text-xs font-semibold rounded-xl text-center flex items-center justify-center gap-1.5"
        >
          <Phone size={14} className="text-emerald-600" />
          <span>Call Clinic</span>
        </a>
        <a
          href="#lp-booking-form"
          className="flex-[2] py-3 px-4 bg-zinc-900 hover:bg-black text-white text-xs font-semibold uppercase tracking-wider rounded-xl text-center flex items-center justify-center gap-1.5 shadow-md"
        >
          <span>Book Consultation</span>
          <ArrowRight size={14} />
        </a>
      </div>
    </main>
  )
}
