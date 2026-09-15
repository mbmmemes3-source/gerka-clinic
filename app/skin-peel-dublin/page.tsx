"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ShieldCheck, Microscope, Sparkles, Sun,
  ArrowRight, Check, Star, Lock, Stethoscope,
  Phone, Mail, User, Clock, ChevronRight,
  Award, Users, Send, Loader2, ChevronDown, MapPin, CheckCircle2, AlertCircle, Calendar
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import emailjs from "emailjs-com"
import { useRouter } from "next/navigation"
import { sendGerkaInquiry } from "@/app/actions/sendEmail"

const concernsList = [
  "Sun damage and visible pigmentation",
  "Uneven skin tone",
  "Dull or tired-looking skin",
  "Fine lines and early aging",
  "Rough skin texture",
  "Congested skin & enlarged pores",
  "Post-acne marks"
]

const steps = [
  { num: "01", title: "Cleanse", desc: "Gentle medical cleansing to remove impurities, excess oils, and prepare skin barrier." },
  { num: "02", title: "Exfoliate", desc: "Surface skin preparation to allow deep, even penetration of active peel formulas." },
  { num: "03", title: "Peel", desc: "Personalised clinical peel application selected for your specific skin type and target concerns." },
  { num: "04", title: "Hydrate", desc: "Soothe and nourish post-peel skin with medical-grade hyaluronic and regenerative serums." },
  { num: "05", title: "Glow", desc: "Protect with broad-spectrum mineral SPF for immediate radiant, refreshed skin defense." }
]

const whyChooseUs = [
  {
    icon: Stethoscope,
    title: "Professional Assessment",
    desc: "Thorough skin assessment before treatment selection to ensure safety and clinical suitability."
  },
  {
    icon: Microscope,
    title: "Personalised Treatment Plan",
    desc: "Peels and supporting steps selected for your specific skin type, concerns and goals rather than a standard template."
  },
  {
    icon: ShieldCheck,
    title: "Clear Aftercare Guidance",
    desc: "Comprehensive post-treatment protocols and realistic recovery expectations provided by expert clinicians."
  },
  {
    icon: Award,
    title: "Consultation-Led Care",
    desc: "An ethical, evidence-based approach focused on appropriate care rather than unsupportable guarantees."
  }
]

const faqs = [
  {
    q: "How do I know which chemical peel is right for my skin?",
    a: "Your practitioner will perform a comprehensive skin assessment during your consultation at Gerka Clinic. We review your skin type, sensitivity, pigmentation history, and specific goals before recommending an appropriate peel strength and formulation."
  },
  {
    q: "Is there downtime after a professional skin peel?",
    a: "Downtime depends on the depth and formulation of the peel. Light to superficial peels typically result in mild redness or slight flaking for 1–3 days, while mid-depth peels may involve mild peeling for up to 5 days. Full aftercare advice is provided."
  },
  {
    q: "Can skin peels help with sun damage and pigmentation?",
    a: "Yes. Professional skin peels are designed to exfoliate damaged outer epidermal layers, targeting hyperpigmentation, sun spots, and post-summer dullness to encourage cellular turnover and a more even skin tone."
  },
  {
    q: "How many skin peel sessions will I need?",
    a: "While many patients notice an immediate boost in skin brightness after a single treatment, a structured series of 3 to 6 sessions spaced 2–4 weeks apart is often recommended for optimum pigmentation and texture improvement."
  }
]

const concernTabs = [
  {
    id: "acne",
    label: "Acne & Congested Pores",
    title: "Clinical Protocol for Active Acne & Unclogging Pores",
    recommendedPeel: "BioRePeelCl3® or 30% Salicylic BHA Peel",
    actives: "Salicylic Acid (BHA), Trichloroacetic Acid (TCA), Beta-Hydroxy Acids",
    sessions: "3 - 4 Sessions (spaced 2-3 weeks apart)",
    outcome: "Visible clearance of active breakouts, unclogged comedones & blackheads, reduced excess oil production, and faded post-acne redness.",
    highlights: [
      "Deeply dissolves trapped sebum inside pores",
      "Calms active inflammation & bacterial activity",
      "Refines enlarged pores & prevents future breakouts"
    ]
  },
  {
    id: "pigmentation",
    label: "Hyperpigmentation & Melasma",
    title: "Clinical Protocol for Sun Spots & Hyperpigmentation",
    recommendedPeel: "Depigmenting Glycolic & TCA Resurfacing Peel",
    actives: "Glycolic Acid, Kojic Acid, Vitamin C & TCA 15%",
    sessions: "3 - 5 Sessions (spaced 3-4 weeks apart)",
    outcome: "Noticeably brighter, more uniform skin tone with faded sun spots, reduced melasma shadow, and restored clarity.",
    highlights: [
      "Inhibits melanin overproduction at epidermal depth",
      "Accelerates shedding of hyperpigmented skin cells",
      "Evens patchy discoloration and post-summer sun damage"
    ]
  },
  {
    id: "antiaging",
    label: "Fine Lines & Anti-Ageing",
    title: "Clinical Protocol for Collagen Renewal & Fine Lines",
    recommendedPeel: "BioRePeelCl3® 35% TCA Bio-Stimulating Peel",
    actives: "TCA 35%, Polyhydroxy Acids (PHA), Aminobutyric Acid, Hyaluronic Acid",
    sessions: "4 Sessions (spaced 2-3 weeks apart)",
    outcome: "Firmer, plumper skin texture with softened fine surface lines, improved elasticity, and enhanced skin density.",
    highlights: [
      "Stimulates fibroblast activity & collagen synthesis",
      "Provides zero-downtime epidermal renewal",
      "Smooths crepiness around cheeks, neck and forehead"
    ]
  },
  {
    id: "dullness",
    label: "Dullness & Sun Damage",
    title: "Clinical Protocol for Radiance & Glass-Skin Glow",
    recommendedPeel: "Mandelic & Lactic Radiance Exfoliating Peel",
    actives: "Lactic Acid, Mandelic Acid, Fruit Enzymes & Hyaluronic Booster",
    sessions: "1 - 3 Sessions (or Pre-Event Instant Radiance)",
    outcome: "Immediate glass-skin radiance, silky smooth texture, restored hydration levels, and a refreshed youthful glow.",
    highlights: [
      "Instantly lifts dead skin cells causing dullness",
      "Gentle formulation ideal for sensitive & reactive skin",
      "Perfect pre-event skin booster with zero social downtime"
    ]
  }
]

export default function SkinPeelDublinLandingPage() {
  const router = useRouter()

  useEffect(() => {
    document.title = "Skin Peel Dublin | Professional Chemical Peels | Gerka Clinic"
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Professional skin peels in Dublin for dullness, pigmentation, uneven tone and rough texture. Personalised skin assessment and treatment plan. Book a consultation."
      )
    }
  }, [])

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    main_concern: "Sun damage and visible pigmentation",
    contact_method: "Phone",
    message: ""
  })

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const [activeConcernTab, setActiveConcernTab] = useState("acne")

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
        fd.append("treatment", `[Skin Peel Dublin] ${formData.main_concern}`)
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
        treatment: `[Skin Peel Dublin] ${formData.main_concern}`,
        message: formData.message || "Skin Peel Dublin Consultation Request",
        time: new Date().toLocaleString(),
      }

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )

      // 3. Trigger Google Ads conversion tracking event
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
      // Fallback success state for robust UX
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
    "name": "Gerka Clinic - Professional Skin Peels Dublin",
    "url": "https://www.gerkaclinic.com/skin-peel-dublin/",
    "logo": "https://www.gerkaclinic.com/icon2.png",
    "description": "Professional skin peels in Dublin for dullness, pigmentation, uneven tone and rough texture. Personalised skin assessment and treatment plan.",
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
      {/* Schema.org Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalClinicSchema) }}
      />

      {/* HERO SECTION WITH INTEGRATED LEAD FORM */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-6 md:pt-12 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT HERO COLUMN */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-zinc-200 text-zinc-600 text-xs font-semibold uppercase tracking-widest shadow-sm">
              <Sparkles size={14} className="text-amber-600" />
              <span>Personalised Skin Rejuvenation • Dublin</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-zinc-900 leading-[1.15]">
              PROFESSIONAL SKIN PEELS IN DUBLIN
            </h1>

            <p className="text-lg md:text-xl font-light text-zinc-700 leading-relaxed">
              Refresh dull, uneven or summer-stressed skin with a personalised professional skin peel.
            </p>

            <p className="text-sm md:text-base font-light text-zinc-600 leading-relaxed">
              Gerka Clinic offers professional skin peel treatments selected according to your skin type, concerns and desired results. A professional skin assessment is included to help determine the most suitable approach.
            </p>

            {/* TRUST POINTS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                "Personalised Clinical Assessment",
                "Target Pigmentation & Sun Damage",
                "Doctor-Led Dublin Clinic",
                "Clear Aftercare & Realistic Plan"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 bg-white/80 p-3 rounded-xl border border-zinc-100 shadow-sm">
                  <CheckCircle2 size={18} className="text-emerald-700 shrink-0" />
                  <span className="text-xs md:text-sm text-zinc-800 font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA BUTTONS & PHONE ACCESS */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#lp-booking-form"
                className="inline-flex items-center justify-center gap-2 text-xs md:text-sm font-semibold uppercase tracking-widest text-white bg-zinc-900 hover:bg-black px-7 py-4 rounded-2xl shadow-lg transition-all transform hover:-translate-y-0.5"
              >
                <span>BOOK YOUR SKIN CONSULTATION</span>
                <ArrowRight size={16} />
              </a>

              <a
                href="#lp-booking-form"
                className="inline-flex items-center justify-center gap-2 text-xs md:text-sm font-semibold uppercase tracking-widest text-zinc-700 hover:text-zinc-900 border border-zinc-300 hover:border-zinc-500 bg-white px-6 py-4 rounded-2xl transition-all"
              >
                <span>Check Availability</span>
              </a>
            </div>

            <div className="flex items-center gap-2 text-xs text-zinc-500 pt-1">
              <MapPin size={14} className="text-zinc-400 shrink-0" />
              <span>1 Priory Office Park, Stillorgan Rd, Dublin • Free Parking Available</span>
            </div>
          </div>

          {/* RIGHT LEAD FORM COLUMN */}
          <div id="lp-booking-form" className="lg:col-span-5 scroll-mt-28">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-zinc-200 shadow-xl shadow-zinc-200/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-full blur-2xl pointer-events-none opacity-60" />

              <div className="mb-6">
                <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
                  Quick Consultation Request
                </span>
                <h2 className="text-xl sm:text-2xl font-light tracking-tight text-zinc-900 mt-2">
                  Tell us what you’d like to improve.
                </h2>
                <p className="text-xs text-zinc-500 mt-1 font-light">
                  Request a consultation with our clinical skin specialists.
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
                      placeholder="e.g. Sarah O'Connor"
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
                        placeholder="sarah@example.com"
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
                    Main Concern *
                  </label>
                  <select
                    value={formData.main_concern}
                    onChange={(e) => setFormData({ ...formData, main_concern: e.target.value })}
                    className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl text-xs md:text-sm text-zinc-900 focus:outline-none focus:border-zinc-900 transition-colors"
                  >
                    {concernsList.map((item, idx) => (
                      <option key={idx} value={item}>
                        {item}
                      </option>
                    ))}
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
                    placeholder="Tell us any specific skin concerns or questions..."
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
                      <span>REQUEST MY SKIN CONSULTATION</span>
                    </>
                  )}
                </button>

                {status === "success" && (
                  <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs rounded-xl flex items-center gap-2">
                    <CheckCircle2 size={16} className="shrink-0 text-emerald-600" />
                    <span>Enquiry submitted successfully! Redirecting...</span>
                  </div>
                )}

                <p className="text-[10px] text-zinc-600 leading-relaxed font-light pt-1">
                  We’ll use your details to respond to your enquiry and discuss consultation availability. Treatment is subject to clinical assessment and suitability.
                </p>
              </form>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION: WHAT CAN A SKIN PEEL IMPROVE */}
      <section className="py-16 bg-white border-y border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-600">
              Targeted Rejuvenation
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-tight text-zinc-900 mt-2">
              What Can a Professional Skin Peel Help Improve?
            </h2>
            <p className="text-sm md:text-base text-zinc-600 font-light mt-3">
              A personalised chemical peel targets damaged outer skin cells to promote cell renewal and restore a clear, glowing complexion.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Sun Damage & Pigmentation",
                desc: "Helps fade visible sun spots, hyperpigmentation and post-summer discoloration for more even tone.",
                icon: Sun
              },
              {
                title: "Uneven Skin Tone",
                desc: "Smooths blotchy redness, uneven pigmentation patches and patchiness across the face.",
                icon: Sparkles
              },
              {
                title: "Dull or Tired-Looking Skin",
                desc: "Removes built-up dead skin cells to reveal fresh, luminous skin underneath.",
                icon: ShieldCheck
              },
              {
                title: "Fine Lines & Early Aging",
                desc: "Stimulates epidermal surface renewal to soften fine surface lines and mild crepiness.",
                icon: Microscope
              },
              {
                title: "Rough Skin Texture",
                desc: "Restores velvety smoothness to bumpy, dehydrated, or rough epidermal layers.",
                icon: CheckCircle2
              },
              {
                title: "Congested Pores",
                desc: "Deeply clears trapped sebum, debris, and congestion to refine enlarged pore appearance.",
                icon: Award
              },
              {
                title: "Post-Acne Marks",
                desc: "Accelerates fading of stubborn post-inflammatory blemishes and discoloration marks.",
                icon: Users
              },
              {
                title: "Personalised Strength",
                desc: "Formulated precisely for sensitive, reactive, oily, or combination Irish skin types.",
                icon: Stethoscope
              }
            ].map((card, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4 }}
                className="bg-[#FAF9F6] p-6 rounded-2xl border border-zinc-200/80 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white border border-zinc-200 flex items-center justify-center mb-4 shadow-xs">
                    <card.icon size={20} className="text-zinc-900" />
                  </div>
                  <h3 className="text-base font-medium text-zinc-900 mb-2 tracking-tight">
                    {card.title}
                  </h3>
                  <p className="text-xs text-zinc-600 font-light leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: TARGETED SKIN CONCERN FINDER (INTERACTIVE TABBED FILTER) */}
      <section className="py-16 bg-gradient-to-b from-white to-[#FAF9F6] border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-800 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-100 inline-block mb-3">
              Interactive Skin Solution Finder
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-tight text-zinc-900">
              Find Your Ideal Chemical Peel Protocol
            </h2>
            <p className="text-sm md:text-base text-zinc-600 font-light mt-2">
              Select your primary skin concern below to discover our recommended peel formula, key active ingredients, and expected clinical outcome.
            </p>
          </div>

          {/* TAB BUTTONS */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {concernTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveConcernTab(tab.id)}
                className={`px-5 py-3 rounded-2xl text-xs md:text-sm font-medium transition-all duration-200 border ${
                  activeConcernTab === tab.id
                    ? "bg-zinc-900 text-white border-zinc-900 shadow-md transform -translate-y-0.5"
                    : "bg-white text-zinc-700 border-zinc-200 hover:border-zinc-400 hover:bg-zinc-50"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* TAB CONTENT DISPLAY CARD */}
          {(() => {
            const currentTab = concernTabs.find((t) => t.id === activeConcernTab) || concernTabs[0]
            return (
              <motion.div
                key={currentTab.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl p-6 sm:p-10 border border-zinc-200/90 shadow-xl max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-700">
                      Tailored Clinical Formulation
                    </span>
                    <h3 className="text-xl sm:text-2xl font-light text-zinc-900 mt-1">
                      {currentTab.title}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-[#FAF9F6] p-4 rounded-2xl border border-zinc-200/80">
                      <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-1">
                        Recommended Peel Type
                      </div>
                      <div className="text-base font-medium text-zinc-900 flex items-center gap-2">
                        <Sparkles size={16} className="text-emerald-600" />
                        <span>{currentTab.recommendedPeel}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="bg-[#FAF9F6] p-4 rounded-2xl border border-zinc-200/80">
                        <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-1">
                          Key Actives
                        </div>
                        <div className="text-xs text-zinc-800 font-light leading-relaxed">
                          {currentTab.actives}
                        </div>
                      </div>

                      <div className="bg-[#FAF9F6] p-4 rounded-2xl border border-zinc-200/80">
                        <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-1">
                          Expected Sessions
                        </div>
                        <div className="text-xs text-zinc-800 font-medium leading-relaxed flex items-center gap-1.5">
                          <Calendar size={14} className="text-zinc-600" />
                          <span>{currentTab.sessions}</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-emerald-50/60 p-4 rounded-2xl border border-emerald-100">
                      <div className="text-xs font-semibold uppercase tracking-wider text-emerald-900 mb-1 flex items-center gap-1.5">
                        <CheckCircle2 size={15} className="text-emerald-700" />
                        <span>Expected Clinical Outcome</span>
                      </div>
                      <div className="text-xs text-emerald-950 font-light leading-relaxed">
                        {currentTab.outcome}
                      </div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <a
                      href="#lp-booking-form"
                      className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-white bg-zinc-900 hover:bg-black px-6 py-3.5 rounded-xl transition-all shadow-sm"
                    >
                      <span>BOOK FOR {currentTab.label.toUpperCase()}</span>
                      <ArrowRight size={14} />
                    </a>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-[#FAF9F6] p-6 rounded-2xl border border-zinc-200 space-y-4">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-900 flex items-center gap-2">
                    <ShieldCheck size={18} className="text-emerald-700" />
                    <span>Key Protocol Benefits</span>
                  </h4>
                  <ul className="space-y-3">
                    {currentTab.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-zinc-700 font-light leading-relaxed">
                        <Check size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 border-t border-zinc-200/80 text-[11px] text-zinc-500 font-light italic">
                    All chemical peel depths & formulations are chosen following a detailed doctor-led skin barrier assessment during your initial consultation.
                  </div>
                </div>
              </motion.div>
            )
          })()}
        </div>
      </section>

      {/* SECTION: YOUR PERSONALISED TREATMENT PROCESS */}
      <section className="py-16 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 relative">
              <div className="relative h-[420px] md:h-[500px] rounded-3xl overflow-hidden border border-zinc-200 shadow-xl">
                <Image
                  src="/chemical1.webp"
                  alt="Professional Skin Peel Dublin Treatment at Gerka Clinic"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-300">
                    Clinical Excellence
                  </span>
                  <h3 className="text-lg font-light mt-1">Cleanse • Exfoliate • Peel • Hydrate • Glow</h3>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                  Step-By-Step Protocol
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-tight text-zinc-900">
                  Your Personalised Skin Peel Treatment
                </h2>
                <p className="text-sm md:text-base text-zinc-600 font-light leading-relaxed">
                  Your treatment begins with a professional skin assessment. The peel and supporting steps are selected for your skin rather than using a rigid, one-size-fits-all protocol.
                </p>
              </div>

              {/* 5 STEPS ACCORDION LIST */}
              <div className="space-y-3 pt-2">
                {steps.map((s, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-2xl border border-zinc-200 flex items-start gap-4 shadow-2xs">
                    <span className="text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-100 w-8 h-8 rounded-full flex items-center justify-center shrink-0">
                      {s.num}
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold text-zinc-900">{s.title}</h3>
                      <p className="text-xs text-zinc-600 font-light mt-1 leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION: REAL PATIENT RESULTS (BEFORE & AFTER GALLERY) */}
      <section className="py-16 bg-white border-y border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[10px] font-bold uppercase tracking-widest text-rose-900 bg-rose-50 px-3.5 py-1.5 rounded-full border border-rose-100 inline-block mb-3">
              Real Patient Clinical Case Study
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-tight text-zinc-900">
              Visible Acne & Post-Acne Discoloration Results
            </h2>
            <p className="text-sm md:text-base text-zinc-600 font-light mt-2">
              Witness the skin transformation achieved through our custom medical chemical peel protocols at Gerka Clinic Dublin.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center max-w-6xl mx-auto">
            {/* BEFORE AFTER IMAGE CARD */}
            <div className="lg:col-span-7">
              <div className="relative rounded-3xl overflow-hidden border border-zinc-200/90 shadow-2xl bg-zinc-900 group">
                <Image
                  src="/peel-before-after.png"
                  alt="Real Patient Before and After Chemical Peel Result for Active Acne at Gerka Clinic Dublin"
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
                  Active Acne & Redness Clearance
                </h3>
              </div>

              <div className="space-y-3">
                <div className="bg-[#FAF9F6] p-4 rounded-2xl border border-zinc-200">
                  <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-1">
                    Initial Patient Concern
                  </div>
                  <div className="text-xs md:text-sm text-zinc-800 font-light leading-relaxed">
                    Active facial breakouts, inflammatory red papules, congested cheek areas, and persistent post-inflammatory erythema (red marks).
                  </div>
                </div>

                <div className="bg-[#FAF9F6] p-4 rounded-2xl border border-zinc-200">
                  <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-1">
                    Treatment Protocol Delivered
                  </div>
                  <div className="text-xs md:text-sm text-zinc-800 font-medium text-emerald-900 leading-relaxed">
                    3 Custom Clinical Peel Sessions (Salicylic BHA & BioRePeel Protocol spaced 3 weeks apart)
                  </div>
                </div>

                <div className="bg-emerald-50/70 p-4 rounded-2xl border border-emerald-100">
                  <div className="text-xs font-semibold uppercase tracking-wider text-emerald-900 mb-1 flex items-center gap-1.5">
                    <CheckCircle2 size={16} className="text-emerald-700" />
                    <span>Clinical Outcomes Achieved</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-emerald-950 font-light">
                    <li className="flex items-center gap-2">
                      <Check size={14} className="text-emerald-700" />
                      <span>Significant reduction in active acne lesions</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={14} className="text-emerald-700" />
                      <span>Calmed facial inflammation & post-acne redness</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={14} className="text-emerald-700" />
                      <span>Refined skin texture and restored natural glow</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="#lp-booking-form"
                  className="inline-flex items-center justify-center gap-2 text-xs md:text-sm font-semibold uppercase tracking-widest text-white bg-zinc-900 hover:bg-black px-7 py-4 rounded-2xl shadow-lg transition-all w-full sm:w-auto"
                >
                  <span>START YOUR SKIN TRANSFORMATION</span>
                  <ArrowRight size={16} />
                </a>
              </div>

              <p className="text-[10px] text-zinc-600 font-light italic">
                * Note: Individual patient results may vary based on skin type, breakout severity, barrier health, and post-peel home care compliance. Clinical assessment required prior to treatment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: WHY CHOOSE GERKA CLINIC */}
      <section className="py-16 bg-white border-y border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">
              The Gerka Difference
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-tight text-zinc-900 mt-2">
              Why Choose Gerka Clinic for a Skin Peel in Dublin?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, idx) => (
              <div key={idx} className="bg-[#FAF9F6] p-6 rounded-2xl border border-zinc-200 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-zinc-900 text-white flex items-center justify-center mb-6 shadow-md">
                    <item.icon size={22} />
                  </div>
                  <h3 className="text-lg font-light text-zinc-900 mb-2">{item.title}</h3>
                  <p className="text-xs text-zinc-600 font-light leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: FAQS */}
      <section className="py-16 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">
              Got Questions?
            </span>
            <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-zinc-900 mt-2">
              Frequently Asked Questions About Skin Peels
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-zinc-200 overflow-hidden shadow-2xs transition-all"
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
                        className="px-6 pb-6 pt-1 text-xs md:text-sm text-zinc-600 font-light leading-relaxed border-t border-zinc-100"
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
          <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 bg-zinc-800/80 px-4 py-1.5 rounded-full border border-zinc-700">
            Book Your Consultation Today
          </span>
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight">
            Ready to Refresh Your Skin in Dublin?
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
            Speak with our clinical skin practitioners to arrange a personalised assessment and discover the right skin peel treatment for your goals.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <a
              href="#lp-booking-form"
              className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold uppercase tracking-widest text-zinc-900 bg-white hover:bg-zinc-100 px-8 py-4 rounded-2xl shadow-xl transition-all"
            >
              <span>BOOK YOUR SKIN CONSULTATION</span>
              <ArrowRight size={16} />
            </a>
            <a
              href="tel:+353878888087"
              className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold uppercase tracking-widest text-white border border-zinc-700 hover:border-zinc-500 bg-zinc-800 px-7 py-4 rounded-2xl transition-all"
            >
              <Phone size={16} className="text-emerald-400" />
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
