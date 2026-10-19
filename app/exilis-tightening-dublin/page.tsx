"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ShieldCheck, Zap, Sparkles, Heart,
  ArrowRight, Check, Star, Lock, Stethoscope,
  Phone, Mail, User, Clock, ChevronRight,
  Award, Users, Send, Loader2, ChevronDown, MapPin, CheckCircle2, Tag, Calendar,
  Activity, Droplets, Target, HelpCircle, EyeOff
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import emailjs from "emailjs-com"
import { useRouter } from "next/navigation"
import { sendGerkaInquiry } from "@/app/actions/sendEmail"

const treatmentPillars = [
  {
    name: "INTERNAL VAGINAL CANAL TIGHTENING",
    badge: "8-Minute 360° Volumetric Heating",
    desc: "Controlled radiofrequency waves gently heat the mucosal lining across 360 degrees simultaneously, triggering acute collagen contraction and stimulating deep fibroblast regeneration for structural firmness.",
    benefits: [
      "Firms lax internal vaginal tissue",
      "Restores natural tissue elasticity and tone",
      "Shortest procedural time worldwide (just 8 mins)"
    ],
    image: "/ultra.webp",
    offer: "Clinical Course of 3"
  },
  {
    name: "EXTERNAL LABIAL FIRMING & CONTOURING",
    badge: "Vulval Tissue Rejuvenation",
    desc: "Addresses stretched, deflated or crepey labia minora and majora following childbirth or age-related estrogen changes. Delivers uniform heat with calibrated surface cooling for aesthetic and physical comfort.",
    benefits: [
      "Tightens and contracts loose labial folds",
      "Smooths crepey, thinning external tissue",
      "Reduces physical chafing during exercise or wear"
    ],
    image: "/exillis.jpeg",
    offer: "Internal & External Duo"
  },
  {
    name: "POSTPARTUM RECOVERY & LAXITY RESTORATION",
    badge: "Post-Childbirth Care",
    desc: "Specially calibrated for women who have undergone vaginal deliveries. Gently repairs micro-stretched fascial and mucosal layers to restore intimate tightness, sensation, and pelvic confidence safely.",
    benefits: [
      "Reverses post-birth intimate tissue stretching",
      "Improves natural sensation and intimacy comfort",
      "Safe to start 12 weeks postpartum"
    ],
    image: "/natural.webp",
    offer: "Postpartum Protocol"
  },
  {
    name: "PERIMENOPAUSE & MOISTURE REJUVENATION",
    badge: "Hydration & GSM Support",
    desc: "Thermal stimulation increases capillary microcirculation and mucosal vascularity. Re-awakens natural moisture production to alleviate intimate dryness, burning sensations, and painful intercourse without hormones.",
    benefits: [
      "Stimulates natural lubrication and vascularity",
      "Alleviates intimate friction and dyspareunia",
      "100% hormone-free and non-invasive"
    ],
    image: "/vaginal.jpg",
    offer: "Doctor-Led Care"
  }
]

const protocolComparison = [
  {
    id: "full-protocol",
    name: "Combined Internal & External",
    badge: "Complete Intimate Transformation",
    bestFor: "Women seeking comprehensive internal tightening plus external labial firming and aesthetic improvement.",
    techDetails: "Full 360° intravaginal probe heating (8 min) followed by external labial contouring applicator (20-30 min).",
    duration: "45 - 60 Minutes per session",
    course: "3 Sessions (spaced 1 - 2 weeks apart)",
    sensation: "Gentle, soothing warmth — comparable to a warm bath. Completely painless with zero anesthesia required.",
    downtime: "Zero downtime. You can return to work, gym, or errands immediately. Resume intimacy in 24-48 hours.",
    longevity: "Results develop over 60-90 days as new collagen matures, lasting 12 - 18+ months.",
    highlights: [
      "Addresses both functional canal laxity and cosmetic labial concerns in one visit",
      "Utilizes single-use, medically sealed disposable tips for guaranteed clinical hygiene",
      "Delivered with maximum discretion in a private medical clinic setting"
    ]
  },
  {
    id: "internal-canal",
    name: "Internal Canal Only",
    badge: "Targeted 360° Tightening",
    bestFor: "Women concerned specifically with internal looseness, reduced friction during intercourse, or early tissue laxity.",
    techDetails: "Fast, uniform 360-degree radiofrequency heating along the entire depth of the vaginal canal.",
    duration: "25 - 30 Minutes (8 minutes active heating)",
    course: "3 Sessions (spaced 7 - 14 days apart)",
    sensation: "Pleasantly warm internal sensation with no pinching, scraping, or sharp discomfort.",
    downtime: "None. No bed rest, pads, or recovery period required.",
    longevity: "Peak collagen density reached at 3 months, lasting over 12 months.",
    highlights: [
      "Fastest internal tightening technology in modern aesthetic gynecology",
      "No risk of mucosal scarring or burning associated with older laser ablations",
      "Significant increase in intimacy friction and sensation reported by patients"
    ]
  },
  {
    id: "external-labial",
    name: "External Labial Rejuvenation",
    badge: "Aesthetic Vulval Contouring",
    bestFor: "Loose, crepey, or elongated labia majora/minora causing self-consciousness or physical chafing in clothing.",
    techDetails: "Focused ergonomic RF applicator with real-time Energy Flow Control (EFC™) surface monitoring.",
    duration: "30 Minutes",
    course: "3 - 4 Sessions (spaced 1 - 2 weeks apart)",
    sensation: "Warm soothing touch with continuous surface thermal regulation.",
    downtime: "Zero downtime. Mild transient pinkness settles within 30 minutes.",
    longevity: "Long-lasting skin firming and wrinkle smoothing.",
    highlights: [
      "Non-surgical alternative to invasive surgical labiaplasty",
      "Zero scalpel incisions, zero sutures, and zero wound care required",
      "Restores plumpness, elasticity, and youthful contour to delicate vulval skin"
    ]
  },
  {
    id: "postpartum-recovery",
    name: "Post-Childbirth Protocol",
    badge: "Maternal Pelvic Care",
    bestFor: "New mothers experiencing loss of tone, stretching, or altered sensation following one or multiple deliveries.",
    techDetails: "Combined gentle thermal collagen rebuilding tailored to postpartum healing stages.",
    duration: "45 Minutes",
    course: "3 Sessions (spaced 2 weeks apart)",
    sensation: "Very comfortable, soothing warmth that promotes muscular and mucosal relaxation.",
    downtime: "None. Perfectly fits into a busy mother's schedule with immediate return to baby care.",
    longevity: "Helps permanently reset stretched fibers back towards pre-pregnancy density.",
    highlights: [
      "Can be safely commenced 12 weeks after delivery (following postpartum clearance)",
      "Can be paired with BTL Emsella® pelvic floor strengthening for total core rehabilitation",
      "Helps restore intimate confidence and pelvic stability without surgery"
    ]
  }
]

const indicationsList = [
  "Laxity or looseness in the vaginal canal after childbirth",
  "Perimenopausal or menopausal tissue thinning and dryness",
  "Loss of friction, sensation, or fullness during intimate relations",
  "Elongated, stretched, or crepey labia causing discomfort in swimwear or gym clothes",
  "Mild stress incontinence or bladder weakness during coughing or exercise",
  "Desire for intimate tightening without surgery, anesthesia, or downtime"
]

const faqs = [
  {
    q: "How does Exilis Ultra Femme 360™ perform vaginal tightening without surgery?",
    a: "Exilis Ultra Femme 360™ uses clinically calibrated monopolar radiofrequency energy. A specialized, single-use ergonomic tip is inserted into the vaginal canal. It delivers 360-degree volumetric thermal energy evenly into the mucosal tissue (at 40°C to 42°C). This gentle heating accomplishes two things: it causes immediate contraction of loose collagen bundles, and triggers fibroblasts to synthesize dense new collagen and elastin over the subsequent 60 to 90 days."
  },
  {
    q: "Does Exilis vaginal tightening hurt?",
    a: "No, Exilis Ultra Femme 360™ is completely painless. Most patients describe it as a comfortable, gentle warming sensation, similar to sitting in a warm bath. There is no cutting, no burning, no needles, and no anesthesia or numbing gel is required."
  },
  {
    q: "How many sessions are recommended for optimal tightening?",
    a: "The clinically proven protocol consists of 3 sessions, typically scheduled 7 to 14 days apart. While many women notice an initial tightening sensation and enhanced comfort after their very first session, the full structural benefits and cellular remodeling continue to build for up to 3 months following completion of your course."
  },
  {
    q: "How does Exilis Ultra Femme compare to CO2 or Erbium vaginal laser (like MonaLisa Touch)?",
    a: "Vaginal lasers work by creating microscopic ablation zones (intentional burn wounds) into the tissue, requiring days of healing, discharge, and potential risk of scarring or infection. In contrast, Exilis Ultra Femme 360™ uses non-ablative radiofrequency that heats the deeper collagen-producing layers without burning or damaging the surface mucosa. It is dramatically more comfortable, takes just 8 minutes, and carries zero social downtime."
  },
  {
    q: "When can I resume sexual intercourse after treatment?",
    a: "Because Exilis does not cut or break the skin surface, the recovery is exceptionally fast. We simply recommend waiting 24 to 48 hours before resuming sexual intercourse or using tampons to allow the heated tissues to rest comfortably."
  },
  {
    q: "How soon after giving birth can I undergo Exilis vaginal tightening?",
    a: "You can safely begin Exilis Ultra Femme 360™ treatments starting 12 weeks after childbirth, provided your postpartum lochia (bleeding) has completely ceased and your GP or obstetrician has cleared you at your 6-week post-birth checkup."
  },
  {
    q: "Can Exilis be combined with Emsella® pelvic floor treatment?",
    a: "Yes! At Gerka Clinic, we frequently combine Exilis Ultra Femme 360™ with the BTL Emsella® chair for a complete intimate restoration package. Exilis tightens and rejuvenates the vaginal mucosa and labia, while Emsella exercises and strengthens the deeper pelvic floor muscles. Together, they provide the gold standard non-surgical solution for intimate tightness and bladder control."
  }
]

const comparisonVsSurgery = [
  {
    factor: "Procedure Nature",
    exilis: "100% Non-Surgical & Non-Ablative",
    laser: "Micro-Ablative Laser (Intentional tissue wounds)",
    surgery: "Vaginoplasty / Surgical Labiaplasty (Scalpel excision)"
  },
  {
    factor: "Pain & Anesthesia",
    exilis: "Painless (Soothing warm feeling, No numbing)",
    laser: "Mild to moderate stinging/heat",
    surgery: "High pain (Requires general or spinal anesthesia)"
  },
  {
    factor: "Downtime & Abstinence",
    exilis: "0 Days Downtime (24-48 hours intimate pause)",
    laser: "3 - 7 Days discharge & healing",
    surgery: "6 - 8 Weeks painful recovery & abstinence"
  },
  {
    factor: "Procedural Time",
    exilis: "8 Mins Internal / 45 Mins Combined",
    laser: "20 - 30 Minutes",
    surgery: "1.5 - 2.5 Hours in Operating Theater"
  },
  {
    factor: "Permanent Scarring",
    exilis: "Zero Scarring (Preserves natural anatomy)",
    laser: "Risk of fibrosis with repeated sessions",
    surgery: "Permanent surgical scars and risk of nerve alteration"
  }
]

export default function ExilisVaginalTighteningLandingPage() {
  const router = useRouter()

  useEffect(() => {
    document.title = "Exilis Vaginal Tightening Dublin | Ultra Femme 360™ Non-Surgical | Gerka Clinic"
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Non-surgical vaginal tightening in Dublin with Exilis Ultra Femme 360™. Doctor-led intimate care for vaginal laxity, postpartum recovery, and tissue rejuvenation with zero downtime."
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
  const [activeTab, setActiveTab] = useState("full-protocol")

  // Promotional campaign control
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
        fd.append("treatment", `[Exilis Vaginal Tightening Dublin] ${formData.interested_in}`)
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
        treatment: `[Exilis Vaginal Tightening Dublin] ${formData.interested_in}`,
        message: formData.message || "Exilis Ultra Femme 360 Vaginal Tightening Consultation Request",
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
    "name": "Gerka Clinic - Exilis Vaginal Tightening Dublin",
    "url": "https://www.gerkaclinic.com/exilis-tightening-dublin/",
    "logo": "https://www.gerkaclinic.com/icon2.png",
    "description": "Doctor-led non-surgical vaginal tightening and intimate rejuvenation clinic in Dublin with BTL Exilis Ultra Femme 360™.",
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
              <span>Special Promotion: Course of 3 Package Savings Available</span>
            </div>
          )}

          <h1 className="text-xl sm:text-2xl font-light tracking-tight text-zinc-900 leading-snug">
            EXILIS ULTRA FEMME 360™ DUBLIN — <br />
            <span className="font-serif italic text-rose-900/80">Non-Surgical Vaginal Tightening</span>
          </h1>

          <p className="text-xs sm:text-sm text-zinc-600 font-light leading-relaxed">
            Restore intimate firmness, vaginal elasticity, natural moisture, and pelvic confidence. Clinically proven 360° radiofrequency technology delivering comfortable, painless results with zero downtime.
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
                  <span>Special Promotion: Course of 3 Package Savings Available</span>
                </div>
              )}

              <h1 className="text-3xl sm:text-4xl lg:text-4xl font-light tracking-tight text-zinc-900 leading-[1.12]">
                EXILIS ULTRA FEMME 360™ DUBLIN — <br />
                <span className="font-serif italic text-rose-900/80">Non-Surgical Vaginal Tightening</span>
              </h1>

              <p className="text-sm sm:text-base text-zinc-600 font-light leading-relaxed max-w-2xl">
                Restore intimate firmness, vaginal elasticity, natural moisture, and pelvic confidence. Clinically proven 360° radiofrequency technology delivering comfortable, painless results with zero downtime.
              </p>
            </div>

            {/* HERO VISUALS: APPLICATOR & MECHANISM */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="relative rounded-3xl overflow-hidden border border-zinc-200/90 shadow-xl bg-zinc-900 aspect-[4/3] group">
                <Image
                  src="/ultra.webp"
                  alt="Exilis Ultra Femme 360 Thermal Radiofrequency Action Diagram"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/85 via-zinc-950/20 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 text-white text-xs font-light">
                  <span className="font-bold text-rose-300 block uppercase tracking-widest text-[10px]">360° Volumetric Heat</span>
                  Uniform collagen remodeling in just 8 minutes
                </div>
              </div>

              <div className="relative rounded-3xl overflow-hidden border border-zinc-200/90 shadow-xl bg-zinc-900 aspect-[4/3] group">
                <Image
                  src="/exillis.jpeg"
                  alt="BTL Exilis Ultra Femme 360 Applicator at Gerka Clinic Dublin"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/85 via-zinc-950/20 to-transparent" />
                <div className="absolute top-3 right-3 bg-zinc-900/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] text-white font-medium uppercase tracking-widest border border-white/20">
                  Doctor-Led
                </div>
                <div className="absolute bottom-3 left-4 right-4 text-white text-xs font-light">
                  <span className="font-bold text-rose-300 block uppercase tracking-widest text-[10px]">Sterile & Single-Use</span>
                  Internal & external clinical tips for complete safety
                </div>
              </div>
            </div>

            {/* TRUST BADGES ROW */}
            <div className="grid grid-cols-3 gap-3 pt-3">
              <div className="bg-white p-3 rounded-2xl border border-zinc-200 text-center shadow-xs">
                <Clock size={18} className="mx-auto text-rose-700 mb-1" />
                <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-900 block">8 Minutes</span>
                <span className="text-[10px] text-zinc-500 font-light">Fastest in the World</span>
              </div>
              <div className="bg-white p-3 rounded-2xl border border-zinc-200 text-center shadow-xs">
                <ShieldCheck size={18} className="mx-auto text-emerald-600 mb-1" />
                <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-900 block">Zero Downtime</span>
                <span className="text-[10px] text-zinc-500 font-light">No Surgery or Needles</span>
              </div>
              <div className="bg-white p-3 rounded-2xl border border-zinc-200 text-center shadow-xs">
                <Award size={18} className="mx-auto text-blue-600 mb-1" />
                <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-900 block">Since 2019</span>
                <span className="text-[10px] text-zinc-500 font-light">Ireland's Leading Clinic</span>
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
                  <span>100% Confidential Consultation</span>
                </span>
                <h2 className="text-xl sm:text-2xl font-light tracking-tight text-zinc-900 mt-2">
                  Book Your Private Assessment
                </h2>
                <p className="text-xs text-zinc-500 mt-1 font-light leading-relaxed">
                  Discuss your concerns in complete confidence with our specialized intimate health team.
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
                      placeholder="e.g. Sarah Kelly"
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
                    Primary Concern / Treatment Goal *
                  </label>
                  <select
                    value={formData.interested_in}
                    onChange={(e) => setFormData({ ...formData, interested_in: e.target.value })}
                    className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl text-xs md:text-sm text-zinc-900 focus:outline-none focus:border-zinc-900 transition-colors"
                  >
                    <option value="Not sure">Not sure (Clinical assessment recommended)</option>
                    <option value="Postpartum Vaginal Laxity">Postpartum Vaginal Laxity & Tone Recovery</option>
                    <option value="Perimenopause / Menopause Laxity">Perimenopausal / Menopause Changes & Dryness</option>
                    <option value="Internal & External Tightening">Combined Internal & External Tightening</option>
                    <option value="External Labial Contouring">External Labial Firming & Crepey Skin</option>
                    <option value="Intimate Sensation & Friction">Restoring Sensation & Intimate Comfort</option>
                    <option value="Exilis + Emsella Combo">Exilis Ultra Femme + Emsella® Chair Package</option>
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
                    Confidential Notes or Questions (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Any specific questions or concerns you'd like to mention..."
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
                    <span>Enquiry received with complete discretion. Redirecting...</span>
                  </div>
                )}

                <div className="flex items-center gap-2 text-[10px] text-zinc-500 font-light pt-1">
                  <Lock size={12} className="text-zinc-400 shrink-0" />
                  <span>Your medical information is strictly confidential and protected by Irish GDPR standards.</span>
                </div>
              </form>
            </div>
          </div>

        </div>
      </section>

      {/* LIMITED-TIME PROMOTION BANNER */}
      {isOfferActive && (
        <section className="py-8 bg-gradient-to-r from-rose-950 via-zinc-900 to-rose-950 text-white border-y border-rose-800/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-rose-500/20 border border-rose-400/40 flex items-center justify-center text-rose-300 shrink-0">
                <Tag size={24} />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-rose-300">
                  Clinical Course Savings
                </span>
                <h2 className="text-xl sm:text-2xl font-light tracking-tight mt-0.5">
                  Package of 3 Internal & External Sessions for €1,050 (Save €150)
                </h2>
                <p className="text-xs text-rose-200/80 font-light mt-0.5">
                  Book your consultation before 30 November 2026 to secure course package rates for complete intimate restoration.
                </p>
              </div>
            </div>
            <a
              href="#lp-booking-form"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest bg-rose-400 hover:bg-rose-300 text-zinc-950 px-6 py-3.5 rounded-xl shadow-lg transition-all shrink-0"
            >
              <span>Claim Package Rate</span>
              <ArrowRight size={14} />
            </a>
          </div>
        </section>
      )}

      {/* SECTION: 4 TREATMENT PILLARS */}
      <section className="py-16 bg-white border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">
              Complete Intimate Restoration
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-tight text-zinc-900 mt-2">
              Clinical Applications of Exilis Ultra Femme 360™
            </h2>
            <p className="text-sm md:text-base text-zinc-600 font-light mt-3">
              Delivering non-invasive 360° radiofrequency energy to address vaginal laxity, labial tone, postpartum stretching, and menopausal dryness.
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
                  {isOfferActive && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-rose-500 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-md">
                        {item.offer}
                      </span>
                    </div>
                  )}
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
                    <span>Enquire about {item.name}</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: INTERACTIVE PROTOCOL MATRIX */}
      <section className="py-16 bg-gradient-to-b from-white to-[#FAF9F6] border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-[10px] font-bold uppercase tracking-widest text-rose-900 bg-rose-50 px-3.5 py-1.5 rounded-full border border-rose-200/80 inline-block mb-3">
              Interactive Protocol Guide
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-tight text-zinc-900">
              Vaginal Tightening Treatment Protocols
            </h2>
            <p className="text-sm md:text-base text-zinc-600 font-light mt-2">
              Select an option below to compare treatment zones, procedure time, sensations, and post-treatment resumption of intimacy.
            </p>
          </div>

          {/* TAB BUTTONS */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {protocolComparison.map((item) => (
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
            const current = protocolComparison.find((b) => b.id === activeTab) || protocolComparison[0]
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
                      {current.name} Protocol Details
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-600 font-light mt-1">
                      {current.bestFor}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="bg-[#FAF9F6] p-4 rounded-2xl border border-zinc-200">
                      <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-1">
                        Technology Delivery
                      </div>
                      <div className="text-xs text-zinc-900 font-medium leading-relaxed">
                        {current.techDetails}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="bg-[#FAF9F6] p-4 rounded-2xl border border-zinc-200">
                        <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-1">
                          Session Duration
                        </div>
                        <div className="text-xs text-zinc-800 font-light leading-relaxed flex items-center gap-1.5">
                          <Clock size={14} className="text-rose-700" />
                          <span>{current.duration}</span>
                        </div>
                      </div>

                      <div className="bg-[#FAF9F6] p-4 rounded-2xl border border-zinc-200">
                        <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-1">
                          Recommended Course
                        </div>
                        <div className="text-xs text-zinc-800 font-medium leading-relaxed flex items-center gap-1.5">
                          <Calendar size={14} className="text-zinc-600" />
                          <span>{current.course}</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="bg-[#FAF9F6] p-4 rounded-2xl border border-zinc-200">
                        <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-1">
                          Treatment Sensation
                        </div>
                        <div className="text-xs text-zinc-900 font-medium leading-relaxed">
                          {current.sensation}
                        </div>
                      </div>

                      <div className="bg-[#FAF9F6] p-4 rounded-2xl border border-zinc-200">
                        <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-1">
                          Recovery & Intimacy Resumption
                        </div>
                        <div className="text-xs text-zinc-700 font-light leading-relaxed">
                          {current.downtime}
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
                    <span>Clinical Benefits</span>
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
                    All treatments are performed in Dublin by certified practitioners with strict medical confidentiality and specialized feminine care experience since 2019.
                  </div>
                </div>
              </motion.div>
            )
          })()}
        </div>
      </section>

      {/* SECTION: IDEAL CANDIDATES / INDICATIONS */}
      <section className="py-16 bg-white border-y border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FAF9F6] rounded-3xl border border-zinc-200 p-8 sm:p-12 shadow-md grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="text-[10px] font-bold uppercase tracking-widest text-rose-900 bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
                Is Exilis Right for You?
              </span>
              <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-zinc-900">
                Ideal For Women Experiencing
              </h2>
              <p className="text-xs sm:text-sm text-zinc-600 font-light leading-relaxed">
                Whether changes have been caused by childbirth, natural aging, or hormonal shifts in menopause, non-surgical radiofrequency tightening provides safe and effective restoration:
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
                <h3 className="text-xl font-light tracking-tight">Private Medical Consultation</h3>
                <p className="text-xs text-zinc-400 font-light leading-relaxed">
                  Book a confidential appointment to evaluate your symptoms and discuss customized tightening protocols.
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

      {/* SECTION: COMPARISON WITH SURGERY & LASER */}
      <section className="py-16 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">
              Treatment Comparison
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-tight text-zinc-900 mt-2">
              Why Women Choose Exilis Over Surgery or Laser
            </h2>
            <p className="text-sm md:text-base text-zinc-600 font-light mt-2">
              Understand how Exilis Ultra Femme 360™ compares to invasive vaginoplasty surgery or ablative CO2 lasers.
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-zinc-200 shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs md:text-sm">
                <thead>
                  <tr className="border-b border-zinc-200 bg-zinc-50/75">
                    <th className="py-4 px-6 font-semibold uppercase tracking-wider text-zinc-500 text-[11px]">Factor</th>
                    <th className="py-4 px-6 font-bold uppercase tracking-wider text-rose-950 bg-rose-50/90 text-[11px]">
                      Exilis Ultra Femme 360™ (Gerka Clinic)
                    </th>
                    <th className="py-4 px-6 font-semibold uppercase tracking-wider text-zinc-600 text-[11px]">Ablative Vaginal Laser</th>
                    <th className="py-4 px-6 font-semibold uppercase tracking-wider text-zinc-600 text-[11px]">Surgical Vaginoplasty</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100">
                  {comparisonVsSurgery.map((row, i) => (
                    <tr key={i} className="hover:bg-zinc-50/40 transition-colors">
                      <td className="py-4 px-6 font-medium text-zinc-900">{row.factor}</td>
                      <td className="py-4 px-6 font-semibold text-rose-950 bg-rose-50/40">{row.exilis}</td>
                      <td className="py-4 px-6 text-zinc-600 font-light">{row.laser}</td>
                      <td className="py-4 px-6 text-zinc-600 font-light">{row.surgery}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: TRANSPARENT PRICING & PACKAGES */}
      <section className="py-16 bg-white border-y border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">
              Clear & Upfront Pricing
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-tight text-zinc-900 mt-2">
              Exilis Vaginal Tightening Investment
            </h2>
            <p className="text-sm md:text-base text-zinc-600 font-light mt-2">
              Transparent clinical rates with significant savings on the recommended 3-session course.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Card 1: Single Session */}
            <div className="bg-[#FAF9F6] rounded-3xl p-8 border border-zinc-200 flex flex-col justify-between space-y-6">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 block mb-2">Single Treatment</span>
                <h3 className="text-2xl font-light text-zinc-900">Internal & External Session</h3>
                <p className="text-xs text-zinc-500 font-light mt-1">Ideal for initial maintenance or standalone assessment.</p>
                <div className="mt-4 pt-4 border-t border-zinc-200">
                  <div className="text-3xl font-light text-zinc-900">€400 <span className="text-xs text-zinc-500 font-normal">/ session</span></div>
                  <div className="text-xs text-zinc-500 mt-1">Includes both 360° internal canal & external labial firming</div>
                </div>
              </div>
              <ul className="space-y-3 text-xs text-zinc-600 font-light">
                <li className="flex items-center gap-2"><Check size={14} className="text-rose-700" /> 45-60 minutes total procedure time</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-rose-700" /> Single-use sterile tips included</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-rose-700" /> Immediate return to normal daily routine</li>
              </ul>
              <a
                href="#lp-booking-form"
                className="block text-center py-3.5 bg-zinc-900 hover:bg-black text-white text-xs font-semibold uppercase tracking-wider rounded-xl transition-all"
              >
                Book Single Session
              </a>
            </div>

            {/* Card 2: Course of 3 (Featured) */}
            <div className="bg-zinc-900 text-white rounded-3xl p-8 border border-zinc-800 flex flex-col justify-between space-y-6 shadow-xl relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-rose-500 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full shadow-md">
                Recommended Clinical Course
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-rose-300 block mb-2">Complete Course</span>
                <h3 className="text-2xl font-light text-white">Course of 3 Sessions</h3>
                <p className="text-xs text-zinc-400 font-light mt-1">The clinically validated protocol for maximum collagen remodeling and tone.</p>
                <div className="mt-4 pt-4 border-t border-zinc-800">
                  <div className="text-3xl font-light text-white">€1,050 <span className="text-xs text-zinc-400 font-normal">total</span></div>
                  <div className="text-xs font-semibold text-rose-300 mt-1">Save €150 compared to single sessions (€350/session)</div>
                </div>
              </div>
              <ul className="space-y-3 text-xs text-zinc-300 font-light">
                <li className="flex items-center gap-2"><Check size={14} className="text-rose-400" /> 3 Full Internal & External treatments spaced 1-2 weeks apart</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-rose-400" /> Full structural neocollagenesis lasting 12-18 months</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-rose-400" /> Ongoing clinical review with specialist practitioners</li>
              </ul>
              <a
                href="#lp-booking-form"
                className="block text-center py-3.5 bg-rose-500 hover:bg-rose-400 text-white text-xs font-semibold uppercase tracking-wider rounded-xl transition-all shadow-md"
              >
                Book Course of 3
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
              Clear & Honest Guidance
            </span>
            <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-zinc-900 mt-2">
              Frequently Asked Questions About Vaginal Tightening
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
            Regain Intimate Tone, Comfort & Confidence
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
            Take the first step towards non-surgical intimate rejuvenation. Speak with our experienced women's intimate health practitioners at Gerka Clinic Dublin.
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
