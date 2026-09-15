"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ShieldCheck, Microscope, Heart, Activity,
  ArrowRight, Check, Star, Lock, Stethoscope,
  Phone, Mail, User, Clock, ChevronRight,
  Award, Users, Send, Loader2, ChevronDown, MapPin, CheckCircle2, Shield
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import emailjs from "emailjs-com"
import { useRouter } from "next/navigation"
import { sendGerkaInquiry } from "@/app/actions/sendEmail"

const specialistCareList = [
  {
    title: "Lichen Sclerosus",
    desc: "Comprehensive clinical assessment, diagnosis, symptom management, and long-term monitoring of vulvar skin changes associated with lichen sclerosus.",
    image: "/vulvar.jpg",
    tags: ["Assessment & Diagnosis", "Symptom Management", "Long-term Monitoring"]
  },
  {
    title: "Recurrent Vaginal & Vulvar Infections",
    desc: "Investigation of persistent or recurring itching, burning, irritation, discharge, and discomfort, identifying root causes to create an effective treatment plan.",
    image: "/infection1.jpg",
    tags: ["Persistent Itching", "Recurrent Thrush/BV", "Root-Cause Investigation"]
  },
  {
    title: "HPV & Vulvar Lesions",
    desc: "Confidential clinical assessment of HPV-related concerns, genital lesions, skin tags, and structural changes, with appropriate treatment or specialist referral.",
    image: "/fraxx.jpg",
    tags: ["Confidential Assessment", "Lesion Removal Options", "Professional Care"]
  },
  {
    title: "Vulvar Skin Conditions",
    desc: "Specialist assessment of persistent itching, burning, dryness, pigmentation, tissue thinning, and changes in the appearance or texture of intimate skin.",
    image: "/private.jpg",
    tags: ["Vulvar Dermatology", "Dryness & Atrophy", "Regenerative Care"]
  }
]

const journeySteps = [
  {
    num: "1",
    title: "Tell Us Briefly What You Need Help With",
    desc: "Submit a simple, confidential consultation request without sharing sensitive medical history in the online form."
  },
  {
    num: "2",
    title: "Arrange a Confidential Consultation",
    desc: "Our clinical team contacts you discreetly via your preferred contact method to arrange a private appointment."
  },
  {
    num: "3",
    title: "Clinical Assessment & Personalised Plan",
    desc: "Receive a thorough medical examination and tailored plan combining conventional medical care, specialist skin protocols, or supportive options."
  },
  {
    num: "4",
    title: "Follow-Up & Ongoing Monitoring",
    desc: "Structured follow-up care and long-term monitoring are discussed and arranged where clinically appropriate."
  }
]

const faqs = [
  {
    q: "Do I need a GP referral to book a gynaecology consultation at Gerka Clinic?",
    a: "No, a GP referral is not required. You can book a direct, private consultation with our medical specialists for vulvar skin concerns, Lichen Sclerosus, recurrent infections, or general intimate health assessment."
  },
  {
    q: "How confidential is the consultation process?",
    a: "Your privacy and peace of mind are paramount. All consultations, records, and communications are held in strict medical confidence. Our clinic environment in Dublin is discreet and non-judgmental."
  },
  {
    q: "What should I expect during my initial intimate health consultation?",
    a: "Your consultation includes a compassionate medical history discussion, symptom evaluation, and a gentle physical examination when appropriate and agreed. Our doctors explain potential causes clearly and outline personalised management options."
  },
  {
    q: "What treatment options are available for Lichen Sclerosus?",
    a: "Management for Lichen Sclerosus is tailored to each individual. Depending on symptoms and clinical severity, care may involve prescription anti-inflammatory ointments, barrier repair regimes, supportive regenerative treatments, and structured monitoring to maintain comfort."
  }
]

const symptomMatrixData = [
  {
    id: "lichen",
    label: "Lichen Sclerosus & Vulvar Dermatitis",
    title: "Specialist Care for Lichen Sclerosus & Vulvar Dermatitis",
    symptoms: "Persistent itching, white skin patches, vulvar skin tightness, tearing & painful intimacy.",
    approach: "Doctor-led clinical assessment, topical anti-inflammatory barrier management, PRP autologous cellular tissue repair, and structured long-term monitoring.",
    outcomes: [
      "Relief from chronic itching, burning & inflammation",
      "Support for skin elasticity & reduction in tearing",
      "Long-term clinical monitoring to prevent disease progression"
    ]
  },
  {
    id: "infections",
    label: "Recurrent Vaginal Infections (Thrush & BV)",
    title: "Investigation & Management of Recurrent Infections",
    symptoms: "Recurring burning sensation, abnormal discharge, persistent irritation, and microbiome imbalances resistant to OTC creams.",
    approach: "Root-cause diagnostic investigation, microbiome & pH balance assessment, targeted anti-microbial protocols, and regenerative tissue support.",
    outcomes: [
      "Identification of root causes behind recurrent infections",
      "Restoration of vaginal microbiome & healthy mucosal barrier",
      "Long-term reduction in recurrence frequency"
    ]
  },
  {
    id: "menopause",
    label: "Menopause & GSM (Genitourinary Syndrome)",
    title: "Non-Surgical Care for Menopausal & GSM Symptoms",
    symptoms: "Vulvovaginal dryness, loss of tissue elasticity, burning during daily activities, and post-menopausal mucosal thinning.",
    approach: "Comprehensive evaluation, non-hormonal and supportive tissue hydration, autologous cellular restoration (PRP), and collagen bio-stimulation.",
    outcomes: [
      "Restored mucosal moisture & natural lubrication",
      "Improved tissue thickness, elasticity & comfort",
      "Relief from intimacy discomfort without sole reliance on synthetic hormones"
    ]
  },
  {
    id: "rejuvenation",
    label: "Intimate Discomfort & Tissue Renewal",
    title: "Genitourinary Rejuvenation & Structural Comfort",
    symptoms: "Post-childbirth tissue changes, localized skin crepiness, friction irritation, and structural laxity.",
    approach: "Non-surgical bio-stimulation, intimate dermal rejuvenation protocols, and personalized pelvic floor & tissue strengthening guidance.",
    outcomes: [
      "Enhanced tissue tone, firmness & natural resilience",
      "Reduction in friction, irritation & intimacy discomfort",
      "Increased personal confidence in intimate health"
    ]
  }
]

export default function RegenerativeGynaecologyDublinLandingPage() {
  const router = useRouter()

  useEffect(() => {
    document.title = "Regenerative Gynaecology Dublin | Women’s Intimate Health | Gerka"
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Specialist women’s intimate health care in Dublin for persistent symptoms, lichen sclerosus, recurrent infections, HPV concerns and vulvar skin conditions."
      )
    }
  }, [])

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    concern: "General Intimate Health Consultation",
    contact_method: "Phone",
    message: ""
  })

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const [activeSymptomTab, setActiveSymptomTab] = useState("lichen")

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
        fd.append("treatment", `[Regenerative Gynaecology] ${formData.concern}`)
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
        treatment: `[Regenerative Gynaecology] ${formData.concern}`,
        message: formData.message || "Regenerative Gynaecology Dublin Consultation Request",
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
    "name": "Gerka Clinic - Regenerative Gynaecology Dublin",
    "url": "https://www.gerkaclinic.com/regenerative-gynaecology-dublin/",
    "logo": "https://www.gerkaclinic.com/icon2.png",
    "description": "Specialist women’s intimate health care in Dublin for persistent symptoms, lichen sclerosus, recurrent infections, HPV concerns and vulvar skin conditions.",
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

      {/* HERO SECTION WITH CONFIDENTIAL LEAD FORM */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-6 md:pt-12 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* LEFT HERO COLUMN */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-200 text-rose-900 text-xs font-semibold uppercase tracking-widest shadow-xs">
              <Shield size={14} className="text-rose-700" />
              <span>Specialist Women’s Intimate Health • Dublin Since 2018</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-zinc-900 leading-[1.15]">
              YOU DON’T HAVE TO NORMALISE INTIMATE DISCOMFORT.
            </h1>

            <p className="text-lg md:text-xl font-light text-zinc-700 leading-relaxed">
              Specialist women’s intimate health care in Dublin, with careful assessment and personalised treatment planning.
            </p>

            <p className="text-sm md:text-base font-light text-zinc-600 leading-relaxed">
              Persistent itching, burning, recurrent infections or changes in intimate skin deserve proper assessment. Gerka Clinic’s Regenerative Gynaecology service offers doctor-led care provided in a calm, discreet environment since 2018.
            </p>

            {/* TRUST POINTS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                "100% Confidential Medical Care",
                "Lichen Sclerosus Assessment",
                "Recurrent Infection Investigation",
                "Doctor-Led Dublin Clinic"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 bg-white/80 p-3 rounded-xl border border-zinc-100 shadow-sm">
                  <CheckCircle2 size={18} className="text-rose-700 shrink-0" />
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
                <span>BOOK YOUR WOMEN’S HEALTH CONSULTATION</span>
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
              <span>1 Priory Office Park, Stillorgan Rd, Dublin • Confidential & Discreet</span>
            </div>
          </div>

          {/* RIGHT CONFIDENTIAL LEAD FORM */}
          <div id="lp-booking-form" className="lg:col-span-5 scroll-mt-28">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-zinc-200 shadow-xl shadow-zinc-200/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-rose-50 rounded-full blur-2xl pointer-events-none opacity-60" />

              <div className="mb-6">
                <span className="text-[10px] font-bold uppercase tracking-widest text-rose-900 bg-rose-50 px-3 py-1 rounded-full border border-rose-100">
                  Confidential Enquiry
                </span>
                <h2 className="text-xl sm:text-2xl font-light tracking-tight text-zinc-900 mt-2">
                  Request a Confidential Consultation
                </h2>
                <p className="text-xs text-zinc-500 mt-1 font-light">
                  Speak with our specialist women’s health team in total privacy.
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
                      placeholder="e.g. Mary Kelly"
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
                        placeholder="mary@example.com"
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
                    Primary Concern Area *
                  </label>
                  <select
                    value={formData.concern}
                    onChange={(e) => setFormData({ ...formData, concern: e.target.value })}
                    className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl text-xs md:text-sm text-zinc-900 focus:outline-none focus:border-zinc-900 transition-colors"
                  >
                    <option value="General Intimate Health Consultation">General Intimate Health Consultation</option>
                    <option value="Lichen Sclerosus Assessment">Lichen Sclerosus Assessment</option>
                    <option value="Recurrent Intimate Infections">Recurrent Vaginal & Vulvar Infections</option>
                    <option value="HPV & Vulvar Lesions">HPV & Vulvar Lesions Assessment</option>
                    <option value="Vulvar Skin Conditions">Vulvar Skin Conditions & Itching</option>
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
                    placeholder="Briefly state your preferred timing or questions..."
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
                      <span>REQUEST A CONFIDENTIAL CONSULTATION</span>
                    </>
                  )}
                </button>

                {status === "success" && (
                  <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs rounded-xl flex items-center gap-2">
                    <CheckCircle2 size={16} className="shrink-0 text-emerald-600" />
                    <span>Confidential request received. We will contact you discreetly.</span>
                  </div>
                )}

                <div className="p-3 bg-zinc-50 rounded-xl border border-zinc-200 flex items-start gap-2">
                  <Lock size={14} className="text-zinc-500 shrink-0 mt-0.5" />
                  <p className="text-[10px] text-zinc-500 leading-relaxed font-light">
                    <strong>Strict Privacy Guarantee:</strong> You are not required to submit detailed sensitive medical information in this form. Clinical history and assessment are conducted during your consultation.
                  </p>
                </div>
              </form>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION: SPECIALIST CARE FOR */}
      <section className="py-16 bg-white border-y border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">
              Clinical Specialisms
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-tight text-zinc-900 mt-2">
              Specialist Women’s Intimate Health Care
            </h2>
            <p className="text-sm md:text-base text-zinc-600 font-light mt-3">
              We provide expert clinical evaluation and personalised management for persistent vulvar and vaginal conditions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {specialistCareList.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -4 }}
                className="bg-[#FAF9F6] rounded-3xl border border-zinc-200 overflow-hidden shadow-sm flex flex-col justify-between"
              >
                <div className="relative h-56 sm:h-64 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title + " Dublin Gerka Clinic"}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/20 to-transparent" />
                  <div className="absolute bottom-4 left-6 right-6">
                    <h3 className="text-2xl font-light text-white tracking-tight">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
                  <p className="text-xs sm:text-sm text-zinc-600 font-light leading-relaxed">
                    {item.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2 border-t border-zinc-200">
                    {item.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-[10px] font-semibold uppercase tracking-wider text-zinc-700 bg-white px-3 py-1 rounded-full border border-zinc-200">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#lp-booking-form"
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-900 hover:text-black pt-2 group"
                  >
                    <span>Request {item.title} assessment</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: INTERACTIVE SYMPTOM & SOLUTION MATRIX */}
      <section className="py-16 bg-gradient-to-b from-white to-[#FAF9F6] border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-[10px] font-bold uppercase tracking-widest text-rose-900 bg-rose-50 px-3.5 py-1.5 rounded-full border border-rose-100 inline-block mb-3">
              Interactive Symptom & Solution Finder
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-tight text-zinc-900">
              Is Regenerative Gynaecology Right for You?
            </h2>
            <p className="text-sm md:text-base text-zinc-600 font-light mt-2">
              Select your primary symptom concern below to see our clinical evaluation focus, root-cause investigation, and regenerative care options.
            </p>
          </div>

          {/* TAB BUTTONS */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {symptomMatrixData.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveSymptomTab(tab.id)}
                className={`px-5 py-3 rounded-2xl text-xs md:text-sm font-medium transition-all duration-200 border ${
                  activeSymptomTab === tab.id
                    ? "bg-zinc-900 text-white border-zinc-900 shadow-md transform -translate-y-0.5"
                    : "bg-white text-zinc-700 border-zinc-200 hover:border-zinc-400 hover:bg-zinc-50"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* TAB CONTENT DISPLAY */}
          {(() => {
            const currentTab = symptomMatrixData.find((t) => t.id === activeSymptomTab) || symptomMatrixData[0]
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
                    <span className="text-[10px] font-bold uppercase tracking-widest text-rose-800 bg-rose-50 px-3 py-1 rounded-full border border-rose-100">
                      Confidential Clinical Care
                    </span>
                    <h3 className="text-xl sm:text-2xl font-light text-zinc-900 mt-2">
                      {currentTab.title}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-rose-50/50 p-4 rounded-2xl border border-rose-100">
                      <div className="text-xs font-semibold uppercase tracking-wider text-rose-900 mb-1 flex items-center gap-1.5">
                        <Activity size={15} className="text-rose-700 shrink-0" />
                        <span>Common Symptoms & Experiences</span>
                      </div>
                      <div className="text-xs text-zinc-800 font-light leading-relaxed">
                        {currentTab.symptoms}
                      </div>
                    </div>

                    <div className="bg-[#FAF9F6] p-4 rounded-2xl border border-zinc-200">
                      <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-1 flex items-center gap-1.5">
                        <Stethoscope size={15} className="text-zinc-700 shrink-0" />
                        <span>Our Clinical & Diagnostic Approach</span>
                      </div>
                      <div className="text-xs text-zinc-800 font-light leading-relaxed">
                        {currentTab.approach}
                      </div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <a
                      href="#lp-booking-form"
                      className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-white bg-zinc-900 hover:bg-black px-6 py-3.5 rounded-xl transition-all shadow-sm"
                    >
                      <span>BOOK CONFIDENTIAL CONSULTATION</span>
                      <ArrowRight size={14} />
                    </a>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-[#FAF9F6] p-6 rounded-2xl border border-zinc-200 space-y-4">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-900 flex items-center gap-2">
                    <ShieldCheck size={18} className="text-rose-700" />
                    <span>Expected Clinical Outcomes</span>
                  </h4>
                  <ul className="space-y-3">
                    {currentTab.outcomes.map((out, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-zinc-700 font-light leading-relaxed">
                        <CheckCircle2 size={16} className="text-rose-700 shrink-0 mt-0.5" />
                        <span>{out}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 border-t border-zinc-200/80 text-[11px] text-zinc-500 font-light italic">
                    All treatments are doctor-led, evidence-based, and personalized following a comprehensive, unhurried consultation.
                  </div>
                </div>
              </motion.div>
            )
          })()}
        </div>
      </section>

      {/* SECTION: MORE THAN TREATING SYMPTOMS */}
      <section className="py-16 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl border border-zinc-200 p-8 sm:p-12 shadow-md grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-rose-900 bg-rose-50 px-3 py-1 rounded-full border border-rose-100">
                Root-Cause Medical Approach
              </span>
              <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-zinc-900">
                More Than Treating Symptoms
              </h2>
              <p className="text-xs sm:text-sm text-zinc-600 font-light leading-relaxed">
                Persistent intimate symptoms often stems from complex underlying causes. We emphasize a comprehensive, assessment-led approach: understand why symptoms are occurring, identify an appropriate clinical plan, and monitor long-term progress.
              </p>
              <p className="text-xs sm:text-sm text-zinc-600 font-light leading-relaxed">
                Depending on your diagnosis, symptoms, and individual needs, care at Gerka Clinic may combine conventional medical management, specialist intimate dermatological care, and selected regenerative or supportive options when clinically indicated.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-zinc-50 rounded-2xl border border-zinc-200">
                  <div className="flex items-center gap-2 text-zinc-900 font-medium text-sm mb-1">
                    <Stethoscope size={16} className="text-rose-700" />
                    <span>Evidence-Based Diagnostics</span>
                  </div>
                  <span className="text-xs text-zinc-500 font-light">Accurate identification of vulvar and mucosal conditions.</span>
                </div>
                <div className="p-4 bg-zinc-50 rounded-2xl border border-zinc-200">
                  <div className="flex items-center gap-2 text-zinc-900 font-medium text-sm mb-1">
                    <Heart size={16} className="text-rose-700" />
                    <span>Supportive & Regenerative</span>
                  </div>
                  <span className="text-xs text-zinc-500 font-light">Combining medical therapy with tissue repair protocols.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="bg-zinc-900 text-white p-8 rounded-3xl space-y-4 text-center max-w-sm w-full shadow-xl">
                <Shield size={36} className="mx-auto text-rose-400" />
                <h3 className="text-xl font-light tracking-tight">Confidential Consultation</h3>
                <p className="text-xs text-zinc-400 font-light leading-relaxed">
                  Book a private appointment with our experienced clinical team in Dublin.
                </p>
                <a
                  href="#lp-booking-form"
                  className="block w-full py-3 bg-white hover:bg-zinc-100 text-zinc-950 text-xs font-semibold uppercase tracking-wider rounded-xl transition-all"
                >
                  Request Consultation
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION: A CLEAR, CONFIDENTIAL CONSULTATION JOURNEY */}
      <section className="py-16 bg-white border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">
              Simple & Discreet
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-tight text-zinc-900 mt-2">
              A Clear, Confidential Consultation Journey
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {journeySteps.map((step, idx) => (
              <div key={idx} className="bg-[#FAF9F6] p-6 rounded-2xl border border-zinc-200 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-full bg-rose-100 text-rose-900 border border-rose-200 text-sm font-bold flex items-center justify-center mb-4">
                    {step.num}
                  </div>
                  <h3 className="text-base font-semibold text-zinc-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-zinc-600 font-light leading-relaxed">
                    {step.desc}
                  </p>
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
              Patient Guidance
            </span>
            <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-zinc-900 mt-2">
              Frequently Asked Questions About Women’s Intimate Health
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
          <span className="text-[10px] font-bold uppercase tracking-widest text-rose-400 bg-zinc-800 px-4 py-1.5 rounded-full border border-zinc-700">
            Confidential Consultation
          </span>
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight">
            Take the First Step Towards Intimate Comfort & Health
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
            Our medical team provides gentle, expert assessment for Lichen Sclerosus, recurrent infections, and vulvar skin concerns.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <a
              href="#lp-booking-form"
              className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold uppercase tracking-widest text-zinc-900 bg-white hover:bg-zinc-100 px-8 py-4 rounded-2xl shadow-xl transition-all"
            >
              <span>REQUEST CONFIDENTIAL CONSULTATION</span>
              <ArrowRight size={16} />
            </a>
            <a
              href="tel:+353878888087"
              className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold uppercase tracking-widest text-white border border-zinc-700 hover:border-zinc-500 bg-zinc-800 px-7 py-4 rounded-2xl transition-all"
            >
              <Phone size={16} className="text-rose-400" />
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
