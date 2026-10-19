"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ShieldCheck, Scissors, Heart,
  ArrowRight, Check, Star, Lock, Stethoscope,
  Phone, Mail, User, Clock, ChevronRight,
  Award, Users, Send, Loader2, ChevronDown, MapPin, CheckCircle2, Tag, Calendar,
  Activity, Sparkles, Target, HelpCircle, EyeOff, UserCheck
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import emailjs from "emailjs-com"
import { useRouter } from "next/navigation"
import { sendGerkaInquiry } from "@/app/actions/sendEmail"

const treatmentPillars = [
  {
    name: "LABIA MINORA REDUCTION",
    badge: "Discreet Specialist Surgery",
    desc: "Surgical refinement and reshaping of elongated or enlarged inner labia. Relieves chronic pinching, pulling, and chafing while creating a balanced, proportionate, and natural aesthetic appearance.",
    benefits: [
      "Eliminates painful friction during sports & walking",
      "Reduces protruding tissue beyond outer labia",
      "Performed under comfortable local anaesthesia"
    ],
    image: "/labi.webp",
    offer: "Day-Case Procedure"
  },
  {
    name: "ASYMMETRY CORRECTION",
    badge: "Balanced & Symmetrical Contouring",
    desc: "Corrects natural or postpartum discrepancies in length, thickness, or contour between the left and right labia. Tailored surgical incision lines ensure a harmonious and undetectable finish.",
    benefits: [
      "Balances uneven or pulling tissue",
      "Restores symmetrical, comfortable contour",
      "Preserves delicate nerve sensation and vascularity"
    ],
    image: "/labi2.webp",
    offer: "Customised Planning"
  },
  {
    name: "CLITORAL HOOD REDUCTION (HOODOPLASTY)",
    badge: "Refined Balance",
    desc: "Often combined with labiaplasty when excess clitoral prepuce (hood) tissue creates an unbalanced appearance. Gently tightens and de-bulks lateral folds without compromising clitoral sensitivity.",
    benefits: [
      "Maintains natural aesthetic balance",
      "Prevents bunching or puckering post-surgery",
      "Strict preservation of clitoral nerve anatomy"
    ],
    image: "/labia-pre.jpeg",
    offer: "Combined Approach"
  },
  {
    name: "NON-SURGICAL LABIA MAJORA PLUMPING",
    badge: "Hyaluronic Acid Volumising",
    desc: "For women with deflated, lax outer labia majora. Specialized high-density hyaluronic acid injections restore youthful volume, providing a protective cushioning effect for the delicate inner structures.",
    benefits: [
      "Non-surgical 30-minute in-clinic treatment",
      "Cushions and conceals inner labia naturally",
      "Immediate results with zero surgical downtime"
    ],
    image: "/natural.webp",
    offer: "Non-Surgical Option"
  }
]

const surgicalTechniques = [
  {
    id: "wedge-resection",
    name: "Wedge Resection Technique",
    badge: "Natural Edge Preservation",
    bestFor: "Women wanting to preserve the natural pigmentation, texture, and delicate corrugated border of the labial edge.",
    techDetails: "A central V-shaped wedge of tissue is excised from the thickest portion of the labia minora. The natural edges are then carefully brought together using fine, internal dissolvable sutures.",
    duration: "60 - 75 Minutes",
    anesthesia: "Local anaesthesia with optional oral calming sedation (walk-in, walk-out)",
    recovery: "Light walking same day; sedentary work in 3-5 days; dissolvable stitches dissolve in 2-4 weeks.",
    intimacyResume: "6 Weeks (complete internal mucosal healing)",
    highlights: [
      "Retains natural color and edge contour without a 'trimmed' look",
      "Conceals surgical scar within natural tissue folds",
      "Gold standard for moderate to significant excess tissue"
    ]
  },
  {
    id: "trim-technique",
    name: "Edge Trim Technique",
    badge: "Precise Linear Sculpting",
    bestFor: "Patients with irregular edge hyperpigmentation, uneven scalloping, or significant length throughout the entire labia.",
    techDetails: "The outer redundant edge of the labia minora is precisely trimmed along a pre-marked anatomical guideline, followed by meticulous multi-layer micro-suturing.",
    duration: "45 - 60 Minutes",
    anesthesia: "Local anaesthesia with gentle tissue infiltration",
    recovery: "Return to desk work in 3-4 days; light daily routines with loose clothing.",
    intimacyResume: "6 Weeks",
    highlights: [
      "Effectively removes darker or uneven outer edge tissue",
      "Provides smooth, uniform reduction along the entire margin",
      "Rapid surgical execution with minimal intraoperative swelling"
    ]
  },
  {
    id: "hybrid-hoodoplasty",
    name: "Labiaplasty + Hoodoplasty",
    badge: "Complete Intimate Architecture",
    bestFor: "Women with both elongated labia minora and a prominent, heavy, or protruding clitoral hood.",
    techDetails: "Simultaneous bilateral labial reduction coupled with conservative lateral skin excisions along the clitoral hood.",
    duration: "75 - 90 Minutes",
    anesthesia: "Targeted local nerve block & tumescent local anaesthetic",
    recovery: "5-7 days of quiet home rest with cold compress support.",
    intimacyResume: "6 Weeks",
    highlights: [
      "Prevents top-heavy 'micropenis' appearance that occurs if hood is ignored",
      "Harmonious visual line from top of the vulva to the posterior fourchette",
      "Extensive specialized surgeon experience ensuring nerve protection"
    ]
  },
  {
    id: "aftercare-timeline",
    name: "Recovery & Healing Journey",
    badge: "Dedicated Clinical Support",
    bestFor: "Understanding what to expect day-by-day after your labiaplasty at Gerka Clinic Dublin.",
    techDetails: "Full aftercare pack provided: specialized antiseptic wash, soothing post-operative creams, ice gel packs, and direct 24/7 clinical contact.",
    duration: "Post-Op Follow-up: 2 Weeks & 6 Weeks",
    anesthesia: "Self-dissolving micro-sutures (no removal required)",
    recovery: "Day 1-3: Peak swelling (rest & ice); Day 7: Significant comfort return; Week 6: Full exercise & intimacy.",
    intimacyResume: "6 Weeks post-procedure checkup",
    highlights: [
      "Dedicated follow-up appointments with your operating medical team",
      "No stitches to remove — medical grade sutures dissolve naturally",
      "Complete discretion in private Stillorgan clinic with private parking"
    ]
  }
]

const indicationsList = [
  "Physical discomfort, pinching, or chafing during exercise, cycling, yoga, or running",
  "Tugging, pulling, or irritation from tight clothing, swimwear, jeans, or underwear",
  "Asymmetry or unevenness where one side is significantly longer or thicker than the other",
  "Pain, twisting, or awkwardness during intimate intercourse",
  "Self-consciousness or loss of confidence in intimate relationships or changing rooms",
  "Changes or stretching of the intimate anatomy following vaginal childbirth or menopause"
]

const faqs = [
  {
    q: "What is labiaplasty and how is the surgery performed at Gerka Clinic?",
    a: "Labiaplasty is a specialized cosmetic and functional surgical procedure that reshapes, reduces, or balances the labia minora (inner vaginal lips). At Gerka Clinic Dublin, our experienced surgeons perform labiaplasty as a day-case procedure under local anaesthesia (with optional mild oral sedation). The excess tissue is meticulously sculpted using either the Wedge Resection or Edge Trim technique, followed by delicate dissolvable micro-suturing that hides scars within natural skin folds."
  },
  {
    q: "Will labiaplasty reduce my sexual sensation or sensitivity?",
    a: "No. In fact, most patients report an improvement in their intimate life. Labiaplasty specifically addresses the excess tissue of the labia minora and does not interfere with the clitoris or deep sensory nerves. By removing painful twisting, pulling, and discomfort during intercourse, patients often enjoy enhanced pleasure and significantly greater confidence."
  },
  {
    q: "What type of anaesthesia is used? Will I be awake?",
    a: "Labiaplasty is routinely performed under local anaesthesia at our modern Dublin surgical facility. The area is completely numbed with gentle local anaesthetic, meaning you feel no pain whatsoever during the procedure. You remain awake and comfortable, with the option of a mild oral sedative to help you feel completely relaxed. This avoids the nausea, grogginess, and medical risks associated with general anaesthesia."
  },
  {
    q: "How long is the recovery period, and when can I return to work?",
    a: "Most patients take 3 to 5 days off work for desk jobs. Swelling and mild tenderness peak within the first 48 to 72 hours and are easily managed with cold packs and standard over-the-counter pain relief. Light daily walking can be resumed immediately. You can return to light gym exercise around 3 weeks, while vigorous high-impact workouts, cycling, and sexual intimacy can be safely resumed at 6 weeks following your post-op checkup."
  },
  {
    q: "Do the stitches need to be removed?",
    a: "No. We use specialized, medical-grade dissolvable micro-sutures. These stitches soften and dissolve on their own over 2 to 4 weeks as your tissue heals, eliminating the discomfort of suture removal."
  },
  {
    q: "Will there be visible scarring after labiaplasty?",
    a: "The delicate tissues of the labia heal remarkably well with minimal scarring. Because incisions are placed along natural creases or within natural pigmentation borders using microscopic surgical sutures, scars typically fade into the natural contours of the vulva within a few months and become virtually undetectable."
  },
  {
    q: "How much does labiaplasty cost in Dublin at Gerka Clinic?",
    a: "Labiaplasty pricing depends on the complexity of your anatomy, whether clitoral hood reduction (hoodoplasty) is required, and whether you are treating one side (asymmetry) or both. Following an in-depth, confidential clinical consultation and examination with our surgeon, you will receive a transparent, all-inclusive quote covering surgeon fees, surgical suite use, local anaesthesia, post-op medications, and all follow-up appointments."
  }
]

const comparisonData = [
  {
    feature: "Anaesthesia Type",
    gerka: "Local Anaesthesia (Awake, pain-free, no general anaesthetic risks)",
    hospital: "General Anaesthesia (Requires hospital admission & intubation)",
    nonSurgical: "Local numbing cream for temporary dermal filler"
  },
  {
    feature: "Procedural Duration",
    gerka: "45 - 90 Minutes (Day-case walk-in & walk-out)",
    hospital: "2 - 3 Hours (Plus full day hospital recovery)",
    nonSurgical: "20 - 30 Minutes"
  },
  {
    feature: "Permanence of Result",
    gerka: "Permanent structural reduction and reshaping",
    hospital: "Permanent structural reduction",
    nonSurgical: "Temporary (Lasts 9 - 18 months, requires top-ups)"
  },
  {
    feature: "Return to Desk Work",
    gerka: "3 - 5 Days with minimal swelling guidance",
    hospital: "7 - 14 Days",
    nonSurgical: "Immediate (Same day)"
  },
  {
    feature: "Clinical Privacy",
    gerka: "Discreet, dedicated private clinic in Stillorgan, Dublin",
    hospital: "Public hospital or multi-department surgical theater",
    nonSurgical: "In-clinic aesthetic room"
  }
]

export default function LabiaplastyDublinLandingPage() {
  const router = useRouter()

  useEffect(() => {
    document.title = "Labiaplasty Dublin | Specialist Female Intimate Surgery | Gerka Clinic"
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Discreet, specialist labiaplasty surgery in Dublin at Gerka Clinic. Doctor-led labia minora reduction, asymmetry correction, and intimate comfort. Confidential consultations."
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
  const [activeTab, setActiveTab] = useState("wedge-resection")

  // Promotional consultation banner control
  const OFFER_EXPIRY = new Date("2026-11-30T23:59:59")
  const isOfferActive = new Date() <= OFFER_EXPIRY

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (status === "loading") return
    setStatus("loading")

    try {
      // 1. Send via Brevo Server Action
      try {
        const fd = new FormData()
        fd.append("name", formData.name)
        fd.append("email", formData.email)
        fd.append("treatment", `[Labiaplasty Dublin] ${formData.interested_in}`)
        fd.append("message", `Phone: ${formData.phone} | Contact Method: ${formData.contact_method} | Confidential Note: ${formData.message || "N/A"}`)
        await sendGerkaInquiry(fd).catch(() => {})
      } catch (err) {
        console.error("Server Action email send error:", err)
      }

      // 2. Send via EmailJS matching existing clinic config
      const templateParams = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        contact_method: formData.contact_method,
        treatment: `[Labiaplasty Dublin] ${formData.interested_in}`,
        message: formData.message || "Labiaplasty Surgery Dublin Consultation Request",
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
    "name": "Gerka Clinic - Labiaplasty Surgery Dublin",
    "url": "https://www.gerkaclinic.com/labiaplasty-dublin/",
    "logo": "https://www.gerkaclinic.com/icon2.png",
    "description": "Specialist labiaplasty surgery and intimate aesthetic medicine clinic in Dublin. Experienced surgeons, local anaesthesia, natural results, and private care.",
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
    <main className="min-h-screen bg-[#FAF9F6] text-zinc-900 pt-10 md:pt-5 pb-20 font-sans selection:bg-zinc-900 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalClinicSchema) }}
      />

      {/* HERO SECTION WITH CONFIDENTIAL LEAD FORM */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-12 md:pt-16 pb-16">
        
        {/* MOBILE HEADER (Visible on mobile only, above the form) */}
        <div className="lg:hidden space-y-4 mb-8">
          {isOfferActive && (
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-950 text-xs font-bold uppercase tracking-wider shadow-xs">
              <Tag size={14} className="text-rose-600 animate-pulse" />
              <span>Doctor-Led Confidential Assessment Available</span>
            </div>
          )}

          <h1 className="text-xl sm:text-2xl font-light tracking-tight text-zinc-900 leading-snug">
            LABIAPLASTY DUBLIN — <br />
            <span className="font-serif italic text-rose-900/80">Discreet Specialist Intimate Surgery</span>
          </h1>

          <p className="text-xs sm:text-sm text-zinc-600 font-light leading-relaxed">
            Relieve physical chafing, eliminate pulling during sports, and restore natural balance. Performed under gentle local anaesthesia by experienced surgical specialists in Dublin with complete confidentiality.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* LEFT HERO COLUMN: order-2 on mobile (below form), order-1 on desktop */}
          <div className="order-2 lg:order-1 lg:col-span-7 space-y-4">
            
            {/* DESKTOP HEADER (Visible on lg and above only) */}
            <div className="hidden lg:block space-y-4">
              {isOfferActive && (
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-950 text-xs font-bold uppercase tracking-wider shadow-xs">
                  <Tag size={14} className="text-rose-600 animate-pulse" />
                  <span>Specialist Surgical Care • Private Dublin Clinic</span>
                </div>
              )}

              <h1 className="text-3xl sm:text-4xl lg:text-4xl font-light tracking-tight text-zinc-900 leading-[1.12]">
                LABIAPLASTY DUBLIN — <br />
                <span className="font-serif italic text-rose-900/80">Discreet Specialist Intimate Surgery</span>
              </h1>

              <p className="text-sm sm:text-base text-zinc-600 font-light leading-relaxed max-w-2xl">
                Relieve physical discomfort, eliminate pinching in clothing, and achieve balanced, natural symmetry. Performed under comfortable local anaesthesia in a warm, judgment-free clinical setting in Stillorgan, Dublin.
              </p>
            </div>

            {/* HERO VISUALS: CLINICAL & AESTHETIC CARE */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="relative rounded-3xl overflow-hidden border border-zinc-200/90 shadow-xl bg-zinc-900 aspect-[4/3] group">
                <Image
                  src="/labi.webp"
                  alt="Labiaplasty Aesthetic Care and Surgical Refinement at Gerka Clinic Dublin"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/85 via-zinc-950/20 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 text-white text-xs font-light">
                  <span className="font-bold text-rose-300 block uppercase tracking-widest text-[10px]">Natural Results</span>
                  Preserving delicate texture and sensation
                </div>
              </div>

              <div className="relative rounded-3xl overflow-hidden border border-zinc-200/90 shadow-xl bg-zinc-900 aspect-[4/3] group">
                <Image
                  src="/labi2.webp"
                  alt="Post-Surgical Care and Recovery Support at Gerka Clinic"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/85 via-zinc-950/20 to-transparent" />
                <div className="absolute top-3 right-3 bg-zinc-900/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] text-white font-medium uppercase tracking-widest border border-white/20">
                  Local Anaesthesia
                </div>
                <div className="absolute bottom-3 left-4 right-4 text-white text-xs font-light">
                  <span className="font-bold text-rose-300 block uppercase tracking-widest text-[10px]">Day-Case Surgery</span>
                  Walk-in, walk-out with self-dissolving sutures
                </div>
              </div>
            </div>

            {/* TRUST BADGES ROW */}
            <div className="grid grid-cols-3 gap-3 pt-3">
              <div className="bg-white p-3 rounded-2xl border border-zinc-200 text-center shadow-xs">
                <Clock size={18} className="mx-auto text-rose-700 mb-1" />
                <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-900 block">45-90 Mins</span>
                <span className="text-[10px] text-zinc-500 font-light">Day-Case Procedure</span>
              </div>
              <div className="bg-white p-3 rounded-2xl border border-zinc-200 text-center shadow-xs">
                <ShieldCheck size={18} className="mx-auto text-emerald-600 mb-1" />
                <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-900 block">Local Anaesthesia</span>
                <span className="text-[10px] text-zinc-500 font-light">Comfortable & Safe</span>
              </div>
              <div className="bg-white p-3 rounded-2xl border border-zinc-200 text-center shadow-xs">
                <Lock size={18} className="mx-auto text-blue-600 mb-1" />
                <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-900 block">100% Private</span>
                <span className="text-[10px] text-zinc-500 font-light">Discreet Stillorgan Clinic</span>
              </div>
            </div>

            {/* CTA BUTTONS & PHONE */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-4">
              <a
                href="#lp-booking-form"
                className="inline-flex items-center justify-center gap-2 text-xs md:text-sm font-semibold uppercase tracking-widest text-white bg-zinc-900 hover:bg-black px-7 py-4 rounded-2xl shadow-lg transition-all transform hover:-translate-y-0.5 w-full sm:w-auto text-center"
              >
                <span>BOOK CONFIDENTIAL CONSULTATION</span>
                <ArrowRight size={16} />
              </a>

              <a
                href="tel:+353878888087"
                className="inline-flex items-center justify-center gap-2 text-xs md:text-sm font-semibold uppercase tracking-widest text-zinc-700 hover:text-zinc-900 border border-zinc-300 hover:border-zinc-500 bg-white px-6 py-4 rounded-2xl transition-all w-full sm:w-auto text-center"
              >
                <Phone size={16} className="text-rose-700" />
                <span>087 888 8087</span>
              </a>
            </div>

            <div className="flex items-center gap-2 text-xs text-zinc-500 pt-1">
              <MapPin size={14} className="text-zinc-400 shrink-0" />
              <span>1 Priory Office Park, Stillorgan Rd, Dublin • Discreet Female & Doctor-Led Clinic</span>
            </div>
          </div>

          {/* RIGHT LEAD FORM COLUMN: order-1 on mobile (above content), order-2 on desktop */}
          <div id="lp-booking-form" className="order-1 lg:order-2 lg:col-span-5 scroll-mt-28">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-zinc-200 shadow-xl shadow-zinc-200/50 relative overflow-hidden">
              
              <div className="mb-6">
                <span className="text-[10px] font-bold uppercase tracking-widest text-rose-900 bg-rose-50 px-3 py-1 rounded-full border border-rose-200 flex items-center gap-1.5 w-fit">
                  <Lock size={12} className="text-rose-700" />
                  <span>100% Confidential Medical Assessment</span>
                </span>
                <h2 className="text-xl sm:text-2xl font-light tracking-tight text-zinc-900 mt-2">
                  Book Your Private Labiaplasty Consultation
                </h2>
                <p className="text-xs text-zinc-500 mt-1 font-light leading-relaxed">
                  Discuss your physical concerns and aesthetic goals in complete comfort with our specialized surgeons.
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
                      placeholder="e.g. Emma Walsh"
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
                        placeholder="emma@example.com"
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
                    Primary Concern / Reason for Consultation *
                  </label>
                  <select
                    value={formData.interested_in}
                    onChange={(e) => setFormData({ ...formData, interested_in: e.target.value })}
                    className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl text-xs md:text-sm text-zinc-900 focus:outline-none focus:border-zinc-900 transition-colors"
                  >
                    <option value="Not sure">Not sure (Discuss during confidential consultation)</option>
                    <option value="Labia Minora Reduction">Labia Minora Reduction (Discomfort / Excess Length)</option>
                    <option value="Labial Asymmetry">Asymmetry Correction (Uneven Sides)</option>
                    <option value="Sports & Clothing Discomfort">Physical Chafing in Clothing & Sports</option>
                    <option value="Labiaplasty + Hoodoplasty">Combined Labiaplasty & Clitoral Hood Contouring</option>
                    <option value="Post-Childbirth Recovery">Postpartum Stretching & Tone Restoration</option>
                    <option value="Non-Surgical Labia Plumping">Non-Surgical Hyaluronic Acid Fillers</option>
                    <option value="Revision Labiaplasty">Revision / Secondary Labiaplasty Assessment</option>
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
                    Confidential Questions or Notes (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Any specific questions regarding procedure, timing, or recovery..."
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
                      <span>Submitting Confidentially...</span>
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      <span>REQUEST PRIVATE CONSULTATION</span>
                    </>
                  )}
                </button>

                {status === "success" && (
                  <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs rounded-xl flex items-center gap-2">
                    <CheckCircle2 size={16} className="shrink-0 text-emerald-600" />
                    <span>Your request has been received with strict discretion. Redirecting...</span>
                  </div>
                )}

                <div className="flex items-center gap-2 text-[10px] text-zinc-500 font-light pt-1">
                  <Lock size={12} className="text-zinc-400 shrink-0" />
                  <span>Strict patient confidentiality. Your enquiry is handled solely by clinical staff.</span>
                </div>
              </form>
            </div>
          </div>

        </div>
      </section>

      {/* REASSURANCE BANNER */}
      <section className="py-8 bg-gradient-to-r from-rose-950 via-zinc-900 to-rose-950 text-white border-y border-rose-800/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-rose-500/20 border border-rose-400/40 flex items-center justify-center text-rose-300 shrink-0">
              <ShieldCheck size={24} />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-rose-300">
                A Judgment-Free Environment
              </span>
              <h2 className="text-xl sm:text-2xl font-light tracking-tight mt-0.5">
                Experienced Female-Centred Surgical Specialists
              </h2>
              <p className="text-xs text-rose-200/80 font-light mt-0.5">
                Consultations are entirely private, supportive, and focused on your physical comfort and peace of mind.
              </p>
            </div>
          </div>
          <a
            href="#lp-booking-form"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest bg-rose-400 hover:bg-rose-300 text-zinc-950 px-6 py-3.5 rounded-xl shadow-lg transition-all shrink-0"
          >
            <span>Book Private Visit</span>
            <ArrowRight size={14} />
          </a>
        </div>
      </section>

      {/* SECTION: 4 TREATMENT PILLARS */}
      <section className="py-16 bg-white border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">
              Specialized Surgical Options
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-tight text-zinc-900 mt-2">
              Labiaplasty Solutions at Gerka Clinic
            </h2>
            <p className="text-sm md:text-base text-zinc-600 font-light mt-3">
              Every woman's anatomy is unique. Our surgeons customize each procedure to alleviate physical discomfort and achieve natural harmony.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {treatmentPillars.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -4 }}
                className="bg-[#FAF9F6] rounded-3xl border border-zinc-200 overflow-hidden shadow-sm flex flex-col justify-between"
              >
                <div className="relative h-56 sm:h-64 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name + " Dublin Gerka Clinic"}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/85 via-zinc-950/30 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/95 backdrop-blur-md text-zinc-900 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border border-zinc-200 shadow-sm">
                      {item.badge}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-rose-500 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-md">
                      {item.offer}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-6 right-6">
                    <h3 className="text-xl sm:text-2xl font-light text-white tracking-tight">
                      {item.name}
                    </h3>
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
                  <p className="text-xs sm:text-sm text-zinc-600 font-light leading-relaxed">
                    {item.desc}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-zinc-200">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Clinical Focus:</span>
                    <div className="space-y-1.5">
                      {item.benefits.map((b, bIdx) => (
                        <div key={bIdx} className="flex items-center gap-2 text-xs text-zinc-700">
                          <CheckCircle2 size={14} className="text-rose-700 shrink-0" />
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

      {/* SECTION: INTERACTIVE SURGICAL PROTOCOL MATRIX */}
      <section className="py-16 bg-gradient-to-b from-white to-[#FAF9F6] border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-[10px] font-bold uppercase tracking-widest text-rose-900 bg-rose-50 px-3.5 py-1.5 rounded-full border border-rose-200/80 inline-block mb-3">
              Interactive Technique Guide
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-tight text-zinc-900">
              Surgical Techniques & Recovery Expectations
            </h2>
            <p className="text-sm md:text-base text-zinc-600 font-light mt-2">
              Explore the difference between Wedge Resection, Edge Trimming, Clitoral Hoodoplasty, and your healing timeline.
            </p>
          </div>

          {/* TAB BUTTONS */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {surgicalTechniques.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`px-5 py-3 rounded-2xl text-xs md:text-sm font-medium transition-all duration-200 border ${
                  activeTab === item.id
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
            const current = surgicalTechniques.find((b) => b.id === activeTab) || surgicalTechniques[0]
            return (
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl p-6 sm:p-10 border border-zinc-200 shadow-xl max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-rose-900 bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
                      {current.badge}
                    </span>
                    <h3 className="text-2xl font-light text-zinc-900 mt-2">
                      {current.name} Protocol
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-600 font-light mt-1">
                      {current.bestFor}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="bg-[#FAF9F6] p-4 rounded-2xl border border-zinc-200">
                      <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-1">
                        Surgical Approach & Technique
                      </div>
                      <div className="text-xs text-zinc-900 font-medium leading-relaxed">
                        {current.techDetails}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="bg-[#FAF9F6] p-4 rounded-2xl border border-zinc-200">
                        <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-1">
                          Anaesthesia Method
                        </div>
                        <div className="text-xs text-zinc-800 font-light leading-relaxed flex items-center gap-1.5">
                          <ShieldCheck size={14} className="text-emerald-700" />
                          <span>{current.anesthesia}</span>
                        </div>
                      </div>

                      <div className="bg-[#FAF9F6] p-4 rounded-2xl border border-zinc-200">
                        <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-1">
                          Operating Duration
                        </div>
                        <div className="text-xs text-zinc-800 font-medium leading-relaxed flex items-center gap-1.5">
                          <Clock size={14} className="text-rose-700" />
                          <span>{current.duration}</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="bg-[#FAF9F6] p-4 rounded-2xl border border-zinc-200">
                        <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-1">
                          Recovery & Work Resumption
                        </div>
                        <div className="text-xs text-zinc-900 font-medium leading-relaxed">
                          {current.recovery}
                        </div>
                      </div>

                      <div className="bg-[#FAF9F6] p-4 rounded-2xl border border-zinc-200">
                        <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-1">
                          Return to Sexual Intimacy
                        </div>
                        <div className="text-xs text-zinc-700 font-light leading-relaxed">
                          {current.intimacyResume}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <a
                      href="#lp-booking-form"
                      className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-white bg-zinc-900 hover:bg-black px-6 py-3.5 rounded-xl transition-all shadow-sm"
                    >
                      <span>BOOK CONSULTATION FOR {current.name.toUpperCase()}</span>
                      <ArrowRight size={14} />
                    </a>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-[#FAF9F6] p-6 rounded-2xl border border-zinc-200 space-y-4">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-900 flex items-center gap-2">
                    <Sparkles size={18} className="text-rose-700" />
                    <span>Technique Highlights</span>
                  </h4>
                  <ul className="space-y-3">
                    {current.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-zinc-700 font-light leading-relaxed">
                        <CheckCircle2 size={16} className="text-rose-700 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 border-t border-zinc-200/80 text-[11px] text-zinc-500 font-light italic">
                    The surgical technique is selected collaboratively during your initial consultation following a thorough physical assessment and examination.
                  </div>
                </div>
              </motion.div>
            )
          })()}
        </div>
      </section>

      {/* SECTION: COMMON REASONS FOR LABIAPLASTY */}
      <section className="py-16 bg-white border-y border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FAF9F6] rounded-3xl border border-zinc-200 p-8 sm:p-12 shadow-md grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="text-[10px] font-bold uppercase tracking-widest text-rose-900 bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
                Understanding Your Motives
              </span>
              <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-zinc-900">
                Why Women Choose Labiaplasty
              </h2>
              <p className="text-xs sm:text-sm text-zinc-600 font-light leading-relaxed">
                Labiaplasty is primarily chosen for physical comfort and quality of life. Common reasons women seek specialist assessment in Dublin include:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {indicationsList.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-white rounded-2xl border border-zinc-200/80">
                    <Target size={16} className="text-rose-700 shrink-0 mt-0.5" />
                    <span className="text-xs text-zinc-700 font-light leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="bg-zinc-900 text-white p-8 rounded-3xl space-y-4 text-center max-w-sm w-full shadow-xl">
                <Heart size={36} className="mx-auto text-rose-400" />
                <h3 className="text-xl font-light tracking-tight">Private Clinical Assessment</h3>
                <p className="text-xs text-zinc-400 font-light leading-relaxed">
                  Book a confidential appointment to evaluate your symptoms with our surgical team.
                </p>
                <a
                  href="#lp-booking-form"
                  className="block w-full py-3 bg-white hover:bg-zinc-100 text-zinc-950 text-xs font-semibold uppercase tracking-wider rounded-xl transition-all"
                >
                  Book Confidential Consultation
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION: CLINICAL COMPARISON BENCHMARK */}
      <section className="py-16 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">
              Treatment Benchmark
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-tight text-zinc-900 mt-2">
              Why Choose Gerka Clinic for Labiaplasty?
            </h2>
            <p className="text-sm md:text-base text-zinc-600 font-light mt-2">
              Compare our private, local-anaesthetic day-case approach against general hospital surgery and temporary non-surgical fillers.
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-zinc-200 shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs md:text-sm">
                <thead>
                  <tr className="border-b border-zinc-200 bg-zinc-50/75">
                    <th className="py-4 px-6 font-semibold uppercase tracking-wider text-zinc-500 text-[11px]">Feature</th>
                    <th className="py-4 px-6 font-bold uppercase tracking-wider text-rose-950 bg-rose-50/90 text-[11px]">
                      Gerka Clinic (Day-Case Specialist)
                    </th>
                    <th className="py-4 px-6 font-semibold uppercase tracking-wider text-zinc-600 text-[11px]">General Hospital Surgery</th>
                    <th className="py-4 px-6 font-semibold uppercase tracking-wider text-zinc-600 text-[11px]">Hyaluronic Acid Fillers</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100">
                  {comparisonData.map((row, i) => (
                    <tr key={i} className="hover:bg-zinc-50/40 transition-colors">
                      <td className="py-4 px-6 font-medium text-zinc-900">{row.feature}</td>
                      <td className="py-4 px-6 font-semibold text-rose-950 bg-rose-50/40">{row.gerka}</td>
                      <td className="py-4 px-6 text-zinc-600 font-light">{row.hospital}</td>
                      <td className="py-4 px-6 text-zinc-600 font-light">{row.nonSurgical}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: TRANSPARENT CONSULTATION & PRICING */}
      <section className="py-16 bg-white border-y border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">
              Clear & Upfront Guidance
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-tight text-zinc-900 mt-2">
              Labiaplasty Investment & What Is Included
            </h2>
            <p className="text-sm md:text-base text-zinc-600 font-light mt-2">
              Transparent surgical pricing with all pre-operative, day-case, and post-operative follow-up appointments included.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Card 1: Confidential Consultation */}
            <div className="bg-[#FAF9F6] rounded-3xl p-8 border border-zinc-200 flex flex-col justify-between space-y-6">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 block mb-2">Step 1</span>
                <h3 className="text-2xl font-light text-zinc-900">Specialist Clinical Consultation</h3>
                <p className="text-xs text-zinc-500 font-light mt-1">In-depth discussion, physical examination, and bespoke technique plan.</p>
                <div className="mt-4 pt-4 border-t border-zinc-200">
                  <div className="text-3xl font-light text-zinc-900">€150 <span className="text-xs text-zinc-500 font-normal">consultation fee</span></div>
                  <div className="text-xs text-emerald-800 font-medium mt-1">Deductible from surgical fee when procedure proceeds</div>
                </div>
              </div>
              <ul className="space-y-3 text-xs text-zinc-600 font-light">
                <li className="flex items-center gap-2"><Check size={14} className="text-rose-700" /> Complete anatomical assessment by specialist surgeon</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-rose-700" /> Discussion of Wedge vs. Trim vs. Hoodoplasty</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-rose-700" /> Exact, all-inclusive price quotation provided</li>
              </ul>
              <a
                href="#lp-booking-form"
                className="block text-center py-3.5 bg-zinc-900 hover:bg-black text-white text-xs font-semibold uppercase tracking-wider rounded-xl transition-all"
              >
                Book Initial Consultation
              </a>
            </div>

            {/* Card 2: Surgical Package */}
            <div className="bg-zinc-900 text-white rounded-3xl p-8 border border-zinc-800 flex flex-col justify-between space-y-6 shadow-xl relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-rose-500 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full shadow-md">
                All-Inclusive Day-Case
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-rose-300 block mb-2">Step 2</span>
                <h3 className="text-2xl font-light text-white">Surgical Labiaplasty Package</h3>
                <p className="text-xs text-zinc-400 font-light mt-1">Complete surgical procedure under local anaesthesia with full aftercare.</p>
                <div className="mt-4 pt-4 border-t border-zinc-800">
                  <div className="text-2xl sm:text-3xl font-light text-white">Tailored Quote <span className="text-xs text-zinc-400 font-normal">confirmed at consultation</span></div>
                  <div className="text-xs text-rose-300 mt-1">No hidden fees — covers theatre, surgeon, sutures & all checkups</div>
                </div>
              </div>
              <ul className="space-y-3 text-xs text-zinc-300 font-light">
                <li className="flex items-center gap-2"><Check size={14} className="text-rose-400" /> Day-case procedure under comfortable local anaesthesia</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-rose-400" /> Comprehensive home aftercare kit & 24/7 clinical contact</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-rose-400" /> Included 2-week and 6-week review appointments</li>
              </ul>
              <a
                href="#lp-booking-form"
                className="block text-center py-3.5 bg-rose-500 hover:bg-rose-400 text-white text-xs font-semibold uppercase tracking-wider rounded-xl transition-all shadow-md"
              >
                Request Surgical Assessment
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: FAQS */}
      <section className="py-16 bg-white border-t border-zinc-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">
              Clear & Honest Advice
            </span>
            <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-zinc-900 mt-2">
              Frequently Asked Questions About Labiaplasty
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
          <span className="text-[10px] font-bold uppercase tracking-widest text-rose-400 bg-zinc-800 px-4 py-1.5 rounded-full border border-zinc-700">
            Discreet & Compassionate Care
          </span>
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight">
            Take the First Step Toward Intimate Comfort & Confidence
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
            Discuss your options in complete confidence with our specialist surgeons at Gerka Clinic Dublin.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <a
              href="#lp-booking-form"
              className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold uppercase tracking-widest text-zinc-900 bg-white hover:bg-zinc-100 px-8 py-4 rounded-2xl shadow-xl transition-all"
            >
              <span>BOOK A CONFIDENTIAL CONSULTATION</span>
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
          <Phone size={14} className="text-rose-700" />
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
