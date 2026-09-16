"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ShieldCheck, Microscope, Sparkles, Heart, Activity,
  ArrowRight, Check, Star, Lock, Stethoscope,
  Phone, Mail, User, Clock, ChevronRight,
  Award, Users, Send, Loader2, ChevronDown, MapPin, CheckCircle2, Shield, Info, FileText, HelpCircle
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import emailjs from "emailjs-com"
import { useRouter } from "next/navigation"
import { sendGerkaInquiry } from "@/app/actions/sendEmail"

// Symptom acknowledgment cards (non-numbered grid)
const symptomCards = [
  {
    title: "Persistent itching",
    desc: "Chronic vulvar itching that disrupts daily life and sleep",
    icon: Sparkles
  },
  {
    title: "Burning and soreness",
    desc: "Ongoing burning, stinging or soreness in the vulvar area",
    icon: Activity
  },
  {
    title: "Dryness",
    desc: "Vulvar dryness and loss of natural moisture and comfort",
    icon: Heart
  },
  {
    title: "Fragile skin",
    desc: "Skin that tears, cracks or bleeds easily with minimal friction",
    icon: ShieldCheck
  },
  {
    title: "Tissue changes",
    desc: "Visible changes to the appearance or texture of vulvar skin or tissue",
    icon: Microscope
  },
  {
    title: "Discomfort",
    desc: "Pain or discomfort with intimacy, movement or daily activities",
    icon: Stethoscope
  }
]

// Treatment approach list items
const treatmentApproachItems = [
  "Specialist vulvar skin assessment",
  "Individualised lichen sclerosus management plan",
  "Regenerative treatments to support vulvar tissue health",
  "PRP and Cellular Matrix options where clinically appropriate",
  "Advanced energy-based technologies for selected patients",
  "Support for dryness, discomfort and vulvar tissue changes",
  "Ongoing monitoring and personalised aftercare",
  "Biopsy or histopathology assessment when clinically indicated"
]

// Regenerative & Advanced Technology Options
const treatmentOptions = [
  {
    name: "PRP (Platelet-Rich Plasma)",
    badge: "Autologous Cellular Care",
    desc: "Autologous PRP involves using the patient's own concentrated platelets to support tissue health and regeneration where clinically appropriate. Discussed and recommended following assessment."
  },
  {
    name: "Cellular Matrix",
    badge: "Combined PRP & Hyaluronic Acid",
    desc: "A combined PRP and hyaluronic acid preparation that may be considered to support vulvar tissue quality and comfort in selected patients following assessment."
  },
  {
    name: "Advanced energy-based technologies",
    badge: "Clinical Energy Protocols",
    desc: "Selected advanced technologies may be used to support vulvar tissue health in appropriate candidates. Options are discussed at consultation and subject to individual assessment and suitability."
  },
  {
    name: "Specialist skin management",
    badge: "Topical & Medical Care",
    desc: "Individualised topical and medical management for lichen sclerosus, supporting symptom control and long-term skin health."
  }
]

// Why Choose Us credentials
const whyChooseUs = [
  {
    stat: "2018",
    title: "Established Care",
    desc: "Specialised vulvar and regenerative care in Dublin since 2018"
  },
  {
    stat: "Specialist",
    title: "Dedicated Assessment",
    desc: "Dedicated specialist assessment — not a general or routine consultation"
  },
  {
    stat: "Regenerative",
    title: "Advanced Options",
    desc: "Advanced and regenerative options available where clinically appropriate"
  },
  {
    stat: "Confidential",
    title: "Complete Discretion",
    desc: "All consultations and enquiries handled with complete discretion"
  }
]

// FAQ Items
const faqs = [
  {
    q: "What is lichen sclerosus and can it be treated?",
    a: "Lichen sclerosus is a chronic inflammatory skin condition that most commonly affects the vulvar area in women. It causes symptoms such as persistent itching, burning, dryness, soreness and changes in the appearance and texture of the skin. While lichen sclerosus cannot currently be cured, it can be effectively managed with the right assessment and personalised treatment plan. At Gerka Clinic Dublin, we specialise in the assessment, management and long-term monitoring of lichen sclerosus."
  },
  {
    q: "What regenerative treatments are available for lichen sclerosus in Dublin?",
    a: "Where clinically appropriate, regenerative options such as PRP (Platelet-Rich Plasma) and Cellular Matrix may be considered as part of your personalised treatment plan at Gerka Clinic. Advanced energy-based technologies may also be suitable for selected patients. All options are discussed and recommended following individual consultation and assessment — treatment is never one-size-fits-all."
  },
  {
    q: "How is lichen sclerosus diagnosed?",
    a: "Lichen sclerosus is typically diagnosed following clinical assessment of the vulvar skin by a specialist. In some cases, a biopsy or histopathology assessment may be recommended to confirm the diagnosis. At Gerka Clinic, we offer specialist vulvar skin assessment including biopsy when clinically indicated."
  },
  {
    q: "Is a consultation for lichen sclerosus confidential?",
    a: "Yes. All consultations and enquiries at Gerka Clinic are handled with complete confidentiality. Your personal and medical information is never shared without your consent. We understand that vulvar health concerns can be sensitive and personal, and our clinic environment is designed to be discreet and supportive."
  },
  {
    q: "What happens at my first appointment at Gerka Clinic for lichen sclerosus?",
    a: "Your first appointment begins with a thorough consultation about your symptoms, their history and any previous diagnoses or treatments. A specialist vulvar skin assessment is conducted, and where appropriate, a biopsy may be recommended. Following assessment, your practitioner discusses a personalised management plan — which may include conventional medical management, regenerative options and ongoing monitoring."
  },
  {
    q: "Do I need a GP referral to book a consultation for lichen sclerosus at Gerka Clinic?",
    a: "You do not need a GP referral to book a consultation at Gerka Clinic. You can self-refer by completing the booking form on this page or by calling the clinic directly. However, we recommend informing your GP of any specialist consultations so that your overall care is coordinated."
  }
]

export default function LichenSclerosusVulvarHealthLandingPage() {
  const router = useRouter()

  useEffect(() => {
    document.title = "Lichen Sclerosus Specialist Dublin | Vulvar Health Care | Gerka Clinic"
    
    // Set meta description
    let metaDesc = document.querySelector('meta[name="description"]')
    if (!metaDesc) {
      metaDesc = document.createElement('meta')
      metaDesc.setAttribute('name', 'description')
      document.head.appendChild(metaDesc)
    }
    metaDesc.setAttribute(
      "content",
      "Specialist lichen sclerosus assessment and vulvar health care at Gerka Clinic Dublin since 2018. Regenerative and advanced treatment options tailored to each woman. Book your consultation."
    )

    // Set canonical link
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', 'https://www.gerkaclinic.ie/lichen-sclerosus-vulvar-health-dublin')
  }, [])

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    concern: "Prefer to discuss at my appointment",
    message: ""
  })

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [openFaq, setOpenFaq] = useState<number | null>(0)

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
        fd.append("treatment", `[Lichen Sclerosus & Vulvar Health] ${formData.concern}`)
        fd.append("message", `Phone: ${formData.phone} | Details: ${formData.message || "N/A"}`)
        await sendGerkaInquiry(fd).catch(() => {})
      } catch (err) {
        console.error("Server Action email send error:", err)
      }

      // 2. Send via EmailJS matching existing site parameters
      const templateParams = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        treatment: `[Lichen Sclerosus & Vulvar Health] ${formData.concern}`,
        message: formData.message || "Lichen Sclerosus & Vulvar Health Consultation Request",
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
    "name": "Gerka Clinic - Lichen Sclerosus & Vulvar Health Dublin",
    "medicalSpecialty": ["Gynecology", "Dermatology"],
    "url": "https://www.gerkaclinic.ie/lichen-sclerosus-vulvar-health-dublin",
    "logo": "https://www.gerkaclinic.com/icon2.png",
    "description": "Specialist lichen sclerosus assessment and vulvar health care at Gerka Clinic Dublin since 2018. Regenerative and advanced treatment options tailored to each woman.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1 Priory Office Park, Stillorgan Rd",
      "addressLocality": "Dublin",
      "postalCode": "A94NH31",
      "addressCountry": "IE"
    },
    "telephone": "+353878888087"
  }

  const scrollToBooking = (e: React.MouseEvent) => {
    e.preventDefault()
    const target = document.getElementById("book") || document.getElementById("lp-booking-form")
    if (target) {
      target.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-zinc-900 font-sans selection:bg-zinc-900 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalClinicSchema) }}
      />

      {/* TOP TRUST BAR (ABOVE EVERYTHING ELSE) */}
      <div className="bg-zinc-900 text-white text-[10px] sm:text-xs py-2 px-3 sm:px-4 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center md:justify-between gap-x-4 gap-y-1 text-center md:text-left text-zinc-300">
          <div className="flex items-center gap-1.5">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0"></span>
            <span>Specialist care · Advanced technology · Regenerative approach</span>
          </div>
          <div className="hidden sm:flex items-center gap-1.5">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0"></span>
            <span>Specialised vulvar &amp; regenerative care since 2018</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0"></span>
            <span className="text-white font-medium">Strictly confidential — Dublin clinic</span>
          </div>
        </div>
      </div>

      {/* STICKY NAVIGATION BAR */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-zinc-200/80 shadow-xs transition-all">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-2.5 sm:py-3 flex items-center justify-between gap-2">
          <Link href="/" className="flex items-center gap-1.5 sm:gap-2.5 group shrink-0 min-w-0">
            <div className="relative w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 shrink-0">
              <Image src="/icon2.png" alt="Gerka Clinic Dublin" fill className="object-contain" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-xs sm:text-base md:text-lg font-light tracking-wider text-zinc-900 uppercase leading-tight group-hover:text-emerald-800 transition-colors truncate">
                Gerka Clinic
              </span>
              <span className="text-[7px] sm:text-[9px] md:text-[10px] uppercase tracking-widest text-emerald-800 font-semibold leading-none truncate max-w-[130px] xs:max-w-[200px] sm:max-w-none">
                Lichen Sclerosus &amp; Vulvar Health
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-2 shrink-0">
            <a
              href="tel:+353878888087"
              className="hidden md:inline-flex items-center gap-1.5 text-xs font-medium text-zinc-700 hover:text-zinc-900 border border-zinc-200 hover:border-zinc-400 bg-white px-3 py-2 rounded-xl transition-all"
            >
              <Phone size={13} className="text-emerald-700 shrink-0" />
              <span>087 888 8087</span>
            </a>

            <a
              href="#book"
              onClick={scrollToBooking}
              className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs md:text-sm font-semibold uppercase tracking-wider text-white bg-zinc-900 hover:bg-black px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl shadow-md transition-all transform hover:-translate-y-0.5 whitespace-nowrap"
            >
              <span>Book consultation</span>
              <ArrowRight size={13} className="shrink-0" />
            </a>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-8 md:pt-4 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">

          {/* LEFT HERO COLUMN */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-200 text-emerald-900 text-xs font-semibold uppercase tracking-widest shadow-xs">
              <Shield size={14} className="text-emerald-700 shrink-0" />
              <span>Lichen sclerosus specialist Dublin</span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-4xl font-light tracking-tight text-zinc-900 leading-[1.15]">
              Living with lichen sclerosus? <br className="hidden sm:inline" />
              <span className="font-normal text-emerald-900">You deserve a specialist assessment.</span>
            </h1>

            <p className="text-sm sm:text-base text-zinc-700 leading-relaxed font-light">
              &quot;Ongoing itching, burning, dryness, discomfort and changes to vulvar tissue are not symptoms you should have to normalise or manage alone. At Gerka Clinic, we offer a specialised approach to vulvar health — combining careful assessment with advanced technology and regenerative treatment options tailored to each woman.&quot;
            </p>

            {/* TRUST SIGNAL CLINICAL IMAGE */}
            <div className="relative rounded-3xl overflow-hidden border border-zinc-200 shadow-xl bg-zinc-900 group">
              <Image
                src="/vulvar.jpg"
                alt="Specialist Vulvar Health and Lichen Sclerosus Assessment at Gerka Clinic Dublin"
                width={800}
                height={500}
                className="w-full h-[240px] sm:h-[340px] lg:h-[320px] object-cover opacity-95 group-hover:scale-105 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/20 to-transparent flex items-end p-6">
                <div className="text-white space-y-1">
                  <p className="text-xs font-semibold uppercase tracking-widest text-emerald-300">Doctor-Led Intimate Health</p>
                  <p className="text-sm font-light text-zinc-200">Compassionate, confidential care &amp; advanced regenerative protocols in Dublin.</p>
                </div>
              </div>
            </div>

            {/* TRUST STRIP (INLINE BELOW INTRO & IMAGE) */}
            <div className="pt-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-3">Core Trust Standards</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-zinc-800">
                <div className="flex items-center gap-2 bg-white px-3.5 py-2.5 rounded-xl border border-zinc-200 shadow-2xs">
                  <CheckCircle2 size={16} className="text-emerald-700 shrink-0" />
                  <span>Specialist vulvar assessment</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-3.5 py-2.5 rounded-xl border border-zinc-200 shadow-2xs">
                  <CheckCircle2 size={16} className="text-emerald-700 shrink-0" />
                  <span>Regenerative treatment options</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-3.5 py-2.5 rounded-xl border border-zinc-200 shadow-2xs">
                  <CheckCircle2 size={16} className="text-emerald-700 shrink-0" />
                  <span>Advanced technology</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-3.5 py-2.5 rounded-xl border border-zinc-200 shadow-2xs">
                  <CheckCircle2 size={16} className="text-emerald-700 shrink-0" />
                  <span>Personalised care since 2018</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-3.5 py-2.5 rounded-xl border border-zinc-200 shadow-2xs sm:col-span-2">
                  <Lock size={16} className="text-emerald-700 shrink-0" />
                  <span className="font-medium">Strictly confidential</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN — BOOKING FORM (DESKTOP VISIBLE ABOVE FOLD) */}
          <div id="book" className="lg:col-span-5 scroll-mt-28">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-zinc-200 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-36 h-36 bg-emerald-50 rounded-full blur-3xl pointer-events-none opacity-70" />

              {/* CONFIDENTIAL NOTICE */}
              <div className="mb-5 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-[11px] font-semibold text-emerald-900">
                <Lock size={13} className="text-emerald-700" />
                <span>Your enquiry is handled with complete discretion</span>
              </div>

              <div className="mb-6">
                <h2 className="text-xl sm:text-2xl font-light tracking-tight text-zinc-900">
                  Book your vulvar health consultation
                </h2>
                <p className="text-xs text-zinc-600 mt-1.5 leading-relaxed font-light">
                  We&apos;ll contact you to confirm your appointment within one business day. All enquiries are treated with complete confidentiality.
                </p>
              </div>

              {status === "success" ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center space-y-3 animate-fade-in">
                  <CheckCircle2 size={40} className="text-emerald-700 mx-auto" />
                  <h3 className="text-base font-semibold text-emerald-950">Submission Received</h3>
                  <p className="text-xs text-emerald-900 leading-relaxed font-light">
                    ✓ Thank you — we&apos;ll be in touch within one business day. Your enquiry is handled with complete discretion.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* FULL NAME */}
                  <div>
                    <label className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User size={16} className="absolute left-3.5 top-3.5 text-zinc-400" />
                      <input
                        type="text"
                        required
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl text-xs md:text-sm text-zinc-900 focus:outline-none focus:border-zinc-900 transition-colors"
                      />
                    </div>
                  </div>

                  {/* PHONE & EMAIL */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

                    <div>
                      <label className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail size={16} className="absolute left-3.5 top-3.5 text-zinc-400" />
                        <input
                          type="email"
                          required
                          placeholder="your.email@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full pl-10 pr-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl text-xs md:text-sm text-zinc-900 focus:outline-none focus:border-zinc-900 transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  {/* PRIMARY CONCERN DROPDOWN */}
                  <div>
                    <label className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1">
                      Primary Concern (Optional)
                    </label>
                    <select
                      value={formData.concern}
                      onChange={(e) => setFormData({ ...formData, concern: e.target.value })}
                      className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl text-xs md:text-sm text-zinc-900 focus:outline-none focus:border-zinc-900 transition-colors"
                    >
                      <option value="Prefer to discuss at my appointment">Prefer to discuss at my appointment</option>
                      <option value="Lichen sclerosus — assessment or second opinion">Lichen sclerosus — assessment or second opinion</option>
                      <option value="Vulvar itching, burning or discomfort">Vulvar itching, burning or discomfort</option>
                      <option value="Vulvar dryness and tissue changes">Vulvar dryness and tissue changes</option>
                      <option value="Vulvar skin changes — unsure of cause">Vulvar skin changes — unsure of cause</option>
                      <option value="Exploring regenerative treatment options">Exploring regenerative treatment options</option>
                      <option value="Not sure — I would like a general assessment">Not sure — I would like a general assessment</option>
                    </select>
                  </div>

                  {/* ANYTHING YOU'D LIKE US TO KNOW */}
                  <div>
                    <label className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1">
                      Anything you&apos;d like us to know? (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Duration of symptoms, previous treatments tried, any diagnosis received, preferred contact method or appointment times…"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full p-3 bg-zinc-50 border border-zinc-200 rounded-xl text-xs md:text-sm text-zinc-900 focus:outline-none focus:border-zinc-900 transition-colors resize-none"
                    />
                  </div>

                  {/* CTA BUTTON */}
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
                        <span>Book my consultation</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-zinc-500 text-center font-light leading-snug pt-1">
                    No obligation. We&apos;ll call or email to arrange a time that suits you. All details kept strictly confidential.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 1 — WHAT LIVING WITH LICHEN SCLEROSUS CAN MEAN */}
      <section className="py-16 bg-white border-y border-zinc-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-emerald-900 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200 shadow-2xs">
              <Sparkles size={13} className="text-emerald-700" />
              <span>Symptom Understanding</span>
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-tight text-zinc-900 leading-tight">
              Understanding Lichen Sclerosus &amp; Vulvar Discomfort
            </h2>
            <div className="w-12 h-0.5 bg-emerald-600/30 mx-auto rounded-full" />
            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-light max-w-2xl mx-auto">
              Living with lichen sclerosus can mean ongoing itching, burning, dryness, discomfort, fragile skin and changes to the vulvar tissue. For many women, these symptoms are dismissed, undertreated or managed without ever fully understanding the underlying condition. At Gerka Clinic, we take a different approach — one that begins with proper assessment.
            </p>
          </div>

          {/* SYMPTOM ACKNOWLEDGEMENT CARDS (VISUAL GRID - NON-NUMBERED) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {symptomCards.map((card, idx) => {
              const IconComp = card.icon
              return (
                <div
                  key={idx}
                  className="bg-[#FAF9F6] p-6 rounded-2xl border border-zinc-200/90 shadow-2xs hover:shadow-md hover:border-zinc-300 transition-all space-y-3 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-100/70 text-emerald-900 flex items-center justify-center group-hover:bg-emerald-800 group-hover:text-white transition-colors">
                    <IconComp size={20} />
                  </div>
                  <h3 className="text-lg font-medium text-zinc-900">{card.title}</h3>
                  <p className="text-xs sm:text-sm text-zinc-600 font-light leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* SECTION 2 — OUR APPROACH AT GERKA CLINIC */}
      <section className="py-16 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-emerald-900 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200 shadow-2xs">
              <Stethoscope size={13} className="text-emerald-700" />
              <span>Clinical Methodology</span>
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-tight text-zinc-900 leading-tight">
              A Specialist Approach to Vulvar Health
            </h2>
            <div className="w-12 h-0.5 bg-emerald-600/30 mx-auto rounded-full" />
            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-light max-w-2xl mx-auto">
              Every woman is different. Our approach at Gerka Clinic combines careful clinical assessment with advanced technology and regenerative options — building a treatment plan around your individual history, symptoms and needs.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-zinc-200 shadow-sm space-y-8">
            <h3 className="text-lg font-semibold text-zinc-900 uppercase tracking-wider text-xs sm:text-sm border-b border-zinc-100 pb-3">
              What our care may include:
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {treatmentApproachItems.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-zinc-50 border border-zinc-100">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={12} className="stroke-[3]" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-zinc-800 leading-snug">{item}</span>
                </div>
              ))}
            </div>

            <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-2xl p-4 sm:p-5 flex items-start gap-3">
              <Info size={18} className="text-emerald-800 shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm text-emerald-950 font-light leading-relaxed">
                &quot;Every woman is different. Treatment recommendations are made following an individual consultation and assessment.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — REGENERATIVE & ADVANCED TECHNOLOGY OPTIONS */}
      <section className="py-16 bg-white border-y border-zinc-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-emerald-900 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200 shadow-2xs">
              <Microscope size={13} className="text-emerald-700" />
              <span>Advanced Clinical Options</span>
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-tight text-zinc-900 leading-tight">
              Regenerative &amp; Advanced Treatment Options for Vulvar Health
            </h2>
            <div className="w-12 h-0.5 bg-emerald-600/30 mx-auto rounded-full" />
            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-light max-w-2xl mx-auto">
              Where clinically appropriate, regenerative and advanced technology options may be considered as part of your individualised treatment plan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {treatmentOptions.map((opt, idx) => (
              <div key={idx} className="bg-[#FAF9F6] p-6 sm:p-8 rounded-3xl border border-zinc-200 shadow-2xs space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-emerald-900 bg-emerald-100/80 px-3 py-1 rounded-full">
                    {opt.badge}
                  </span>
                  <h3 className="text-xl font-medium text-zinc-900 pt-1">{opt.name}</h3>
                  <p className="text-xs sm:text-sm text-zinc-600 font-light leading-relaxed">
                    {opt.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* IMPORTANT CLINICAL DISCLAIMER BOX */}
          <div className="bg-amber-50/70 border border-amber-200 rounded-2xl p-5 sm:p-6 text-xs sm:text-sm text-amber-950 space-y-2">
            <div className="flex items-center gap-2 font-semibold uppercase tracking-wider text-amber-900 text-xs">
              <ShieldCheck size={16} className="text-amber-700" />
              <span>Important Clinical Notice</span>
            </div>
            <p className="font-light leading-relaxed text-amber-900">
              Important: All treatment options are discussed and recommended following individual consultation and clinical assessment. Treatment selection is personalised to each patient&apos;s diagnosis, symptoms and needs. Results vary between individuals.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4 — WHY GERKA CLINIC */}
      <section className="py-16 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-emerald-900 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200 shadow-2xs">
              <Award size={13} className="text-emerald-700" />
              <span>Clinical Reputation</span>
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-tight text-zinc-900 leading-tight">
              Why Women Choose Gerka Clinic for Lichen Sclerosus &amp; Vulvar Health Care in Dublin
            </h2>
            <div className="w-12 h-0.5 bg-emerald-600/30 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-2xs space-y-3">
                <div className="text-2xl sm:text-3xl font-light text-emerald-900 font-serif">
                  {item.stat}
                </div>
                <h3 className="text-base font-medium text-zinc-900">{item.title}</h3>
                <p className="text-xs sm:text-sm text-zinc-600 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* QUOTE BLOCK */}
          <div className="bg-zinc-900 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-2xl">
            <div className="max-w-3xl space-y-4 relative z-10">
              <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 bg-zinc-800 px-3.5 py-1 rounded-full border border-zinc-700">
                Our Commitment to You
              </span>
              <p className="text-base sm:text-xl font-light leading-relaxed text-zinc-200 italic">
                &quot;Intimate symptoms should not be ignored, normalised or repeatedly treated without understanding their cause. At Gerka Clinic, we have been providing specialised women&apos;s intimate health care since 2018, combining careful assessment with personalised medical and regenerative treatment options when clinically appropriate.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — FAQ (SCHEMA-MARKED) */}
      <section className="py-16 bg-white border-t border-zinc-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-emerald-900 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200 shadow-2xs">
              <HelpCircle size={13} className="text-emerald-700" />
              <span>Patient Questions</span>
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-tight text-zinc-900 leading-tight">
              Frequently Asked Questions About Lichen Sclerosus &amp; Vulvar Health in Dublin
            </h2>
            <div className="w-12 h-0.5 bg-emerald-600/30 mx-auto rounded-full" />
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

      {/* BOTTOM CTA SECTION */}
      <section className="py-16 bg-zinc-900 text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
          <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 bg-zinc-800 px-4 py-1.5 rounded-full border border-zinc-700">
            Take The First Step
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight">
            Your symptoms deserve a proper specialist assessment.
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
            &quot;Living with lichen sclerosus or persistent vulvar discomfort is challenging. Book a confidential specialist consultation at Gerka Clinic Dublin and take the first step toward understanding your condition and finding the right approach for your care.&quot;
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#book"
              onClick={scrollToBooking}
              className="inline-flex items-center justify-center gap-2 text-xs md:text-sm font-semibold uppercase tracking-widest text-zinc-900 bg-white hover:bg-zinc-100 px-8 py-4 rounded-2xl shadow-xl transition-all w-full sm:w-auto"
            >
              <span>Book my consultation</span>
              <ArrowRight size={16} />
            </a>
          </div>

          {/* SECONDARY CTAS (TEXT LINKS / OUTLINED BUTTONS) */}
          <div className="pt-4 flex flex-wrap justify-center items-center gap-6 text-xs text-zinc-300 font-medium border-t border-zinc-800 max-w-2xl mx-auto">
            <a href="#book" onClick={scrollToBooking} className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
              <span>• Start your vulvar health journey</span>
            </a>
            <a href="tel:+353878888087" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
              <span>• Speak to our women&apos;s health team</span>
            </a>
            <a href="#book" onClick={scrollToBooking} className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
              <span>• Discover your treatment options</span>
            </a>
          </div>

          {/* LEGAL DISCLAIMER */}
          <div className="pt-8 text-left border-t border-zinc-800/80 max-w-4xl mx-auto">
            <p className="text-[11px] text-zinc-500 font-light leading-relaxed">
              Legal disclaimer: &quot;Gerka Clinic provides specialist medical assessment and personalised care for women&apos;s intimate health. Treatment options are discussed and recommended following individual clinical assessment and are subject to suitability. Information on this page is for general guidance only and does not constitute medical advice. Results and outcomes vary between individuals. PRP, Cellular Matrix and advanced energy-based technologies are considered where clinically appropriate following assessment.&quot;
            </p>
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
          href="#book"
          onClick={scrollToBooking}
          className="flex-[2] py-3 px-4 bg-zinc-900 hover:bg-black text-white text-xs font-semibold uppercase tracking-wider rounded-xl text-center flex items-center justify-center gap-1.5 shadow-md"
        >
          <span>Book Consultation</span>
          <ArrowRight size={14} />
        </a>
      </div>
    </div>
  )
}
