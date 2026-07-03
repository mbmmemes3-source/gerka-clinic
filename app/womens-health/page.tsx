"use client"
import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ShieldCheck, Microscope, Sparkles, Heart, Zap,
  ArrowRight, Check, Star, Lock, Stethoscope,
  Phone, Mail, User, Clock, ChevronRight,
  Award, Users, Send, Loader2, ChevronDown, Activity, Droplets
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import emailjs from "emailjs-com"
import { useRouter } from "next/navigation"
import Head from "next/head"

// ─── Components ─────────────────────────────────────────────────────────────

const Badge = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`inline-flex items-center gap-2 px-3 md:px-4 py-1.5 rounded-full bg-white border border-zinc-200 text-zinc-500 text-[9px] md:text-[10px] font-bold uppercase tracking-widest shadow-sm ${className}`}>
    {children}
  </div>
)

const ServiceCard = ({ icon: Icon, title, desc, image }: { icon: any; title: string; desc: string; image: string }) => (
  <motion.div
    whileHover={{ y: -8 }}
    className="group relative bg-white border border-zinc-100 rounded-2xl md:rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-700 h-full flex flex-col"
  >
    <div className="relative h-48 md:h-64 overflow-hidden">
      <Image src={image} alt={title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/70 via-transparent to-transparent" />
    </div>
    <div className="p-6 md:p-8 flex-1 flex flex-col">
      <div className="w-10 h-10 rounded-xl bg-zinc-50 flex items-center justify-center mb-4 border border-zinc-100">
        <Icon size={20} strokeWidth={1.5} className="text-zinc-900" />
      </div>
      <h3 className="text-xl md:text-2xl font-light text-zinc-900 mb-3 tracking-tight">{title}</h3>
      <p className="text-zinc-500 font-light text-xs md:text-sm leading-relaxed flex-1">{desc}</p>
      <Link href="#" className="mt-6 inline-flex items-center gap-2 text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-zinc-400 group-hover:text-zinc-900 transition-all">
        View Procedure <ArrowRight size={14} />
      </Link>
    </div>
  </motion.div>
)

// ─── Main Page ──────────────────────────────────────────────────────────────

export default function IntimateHealthLandingPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "", phone: "", email: "",
    concern: "Labiaplasty",
    contact_method: "Email",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (status === "loading") return
    setStatus("loading")

    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          ...formData,
          subject: `Intimate Health Inquiry: ${formData.concern}`,
          time: new Date().toLocaleString(),
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )

      if (result.text === "OK") {
        setStatus("success")
        setTimeout(() => router.push("/womens-health/thank-you"), 1500)
      }
    } catch (error) {
      setStatus("error")
      setTimeout(() => setStatus("idle"), 4000)
    }
  }

  const procedures = [
    { icon: Zap,       title: "Emsella Pelvic Floor",         desc: "FDA-cleared BTL Emsella chair for bladder leakage, pelvic floor weakness and intimate wellness. No surgery, no downtime.", image: "/ultra.webp" },
    { icon: Heart,     title: "Vaginal Dryness & Menopause",  desc: "Regenerative treatments for menopause-related dryness, discomfort and vaginal atrophy.", image: "/4.webp" },
    { icon: Droplets,  title: "O-Shot / PRP",                desc: "Advanced PRP protocols to restore intimate sensitivity and treat dryness and atrophy.", image: "/oshot.jpg" },
    { icon: Activity,  title: "Labiaplasty",                 desc: "Surgical refinement of the labia minora for functional comfort and aesthetic symmetry.", image: "/labi2.avif" },
  ]

  return (
    <>
    <Head>
      <title>Emsella Pelvic Floor Treatment Dublin | Gerka Clinic Women&apos;s Health</title>
      <meta name="description" content="Specialist women's health clinic in Dublin. Emsella pelvic floor treatment, vaginal dryness, O-Shot PRP & labiaplasty. Ireland's only Dr Runnels-certified clinic. Book free consultation." />
    </Head>
    <main className="bg-white min-h-screen">
      <style jsx global>{`
        .intimate-input {
          width: 100%;
          padding: 14px 16px 14px 44px;
          background: #FAF9F6;
          border: 1px solid #e5e5e5;
          border-radius: 12px;
          font-size: 14px;
          transition: all 0.3s ease;
        }
        @media (min-width: 768px) {
            .intimate-input {
                padding: 16px 20px 16px 50px;
                border-radius: 14px;
            }
        }
        .intimate-input:focus {
          border-color: #18181b;
          background: white;
          box-shadow: 0 8px 20px -4px rgba(0,0,0,0.05);
          outline: none;
        }
      `}</style>

      {/* ── HERO SECTION ──────────────────────────────────────────────── */}
      <section className="relative pt-24 md:pt-32 pb-12 md:pb-20 bg-[#FAF9F6] overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 md:px-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-center">
            
            <div className="lg:col-span-7 space-y-6 md:space-y-8 text-center lg:text-left">
              <Badge className="bg-emerald-50 text-emerald-700 border-emerald-100">
                <Lock size={12} /> Confidential Specialist Care
              </Badge>

              <h1 className="text-[32px] sm:text-[44px] md:text-[54px] lg:text-[62px] font-light text-zinc-900 tracking-tighter leading-[1.1]">
                Emsella Pelvic Floor<br />
                <span className="italic font-serif text-zinc-400">Treatment Dublin.</span>
              </h1>

              <p className="text-base md:text-lg lg:text-xl text-zinc-500 font-light max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Certified BTL Emsella provider. Non-surgical treatment for bladder leakage, pelvic weakness &amp; intimate wellness. Results from session one.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link href="#consultation" className="w-full sm:w-auto bg-zinc-900 text-white px-8 md:px-10 py-4 rounded-2xl text-[11px] md:text-xs font-bold uppercase tracking-widest hover:bg-black transition-all shadow-xl shadow-zinc-200 text-center">
                  Book Free Confidential Consultation
                </Link>
              </div>

              <div className="flex flex-col items-center lg:items-start gap-1 pt-2">
                <p className="text-[10px] md:text-[11px] text-zinc-500 font-light text-center lg:text-left">
                  Ireland&apos;s Only Dr Runnels-Certified Women&apos;s Health Clinic
                </p>
                <p className="text-[10px] md:text-[11px] text-zinc-400 font-light text-center lg:text-left">
                  Stillorgan Road, Dublin &middot; By Appointment
                </p>
                <p className="text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-zinc-500 text-center lg:text-left">
                  SEGERF Board Registered Specialists
                </p>
              </div>
            </div>

            {/* FORM CARD */}
            <div id="consultation" className="lg:col-span-5 w-full max-w-md mx-auto lg:max-w-none">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white border border-zinc-100 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-10 shadow-2xl"
              >
                <AnimatePresence mode="wait">
                  {status === "success" ? (
                    <motion.div key="success" className="py-12 md:py-20 text-center space-y-4">
                      <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto text-emerald-600">
                        <Check size={32} />
                      </div>
                      <h3 className="text-xl md:text-2xl font-light">Enquiry Received</h3>
                      <p className="text-zinc-500 text-sm">We will contact you discreetly within 24 hours.</p>
                    </motion.div>
                  ) : (
                    <div className="space-y-6">
                      <div className="text-center space-y-1">
                        <h2 className="text-xl md:text-2xl font-light tracking-tight text-zinc-900">Start Your Journey</h2>
                        <p className="text-zinc-400 text-[9px] md:text-[10px] font-bold tracking-widest">JUDGEMENT-FREE & CONFIDENTIAL</p>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-300" size={16} />
                          <input required className="intimate-input" placeholder="Full Name" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                           <div className="relative">
                               <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-300 sm:hidden" size={16} />
                               <input required className="intimate-input sm:px-5" style={{paddingLeft: 'unset'}} placeholder="Phone" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                           </div>
                           <div className="relative">
                               <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-300 sm:hidden" size={16} />
                               <input required type="email" className="intimate-input sm:px-5" style={{paddingLeft: 'unset'}} placeholder="Email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                           </div>
                        </div>
                        <div className="relative">
                          <Activity className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-300" size={16} />
                          <select className="intimate-input appearance-none cursor-pointer" value={formData.concern} onChange={e => setFormData({...formData, concern: e.target.value})}>
                            <option value="Labiaplasty">Labiaplasty (Surgical)</option>
                            <option value="Tightening">Vaginal Tightening</option>
                            <option value="Dryness">Dryness / Menopause</option>
                            <option value="Lichen Sclerosus">Lichen Sclerosus Support</option>
                            <option value="General">General Wellness Inquiry</option>
                          </select>
                          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-300" size={16} />
                        </div>
                        <textarea className="intimate-input min-h-[100px] md:min-h-[120px] resize-none" style={{paddingLeft: '20px'}} placeholder="How can we help you?" value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} />
                        
                        <button disabled={status === "loading"} className="w-full bg-zinc-900 text-white py-4 md:py-5 rounded-2xl text-[10px] font-bold uppercase tracking-[0.2em] shadow-xl hover:bg-black transition-all flex items-center justify-center gap-3 active:scale-95">
                          {status === "loading" ? <Loader2 className="animate-spin" size={16} /> : "Submit Inquiry"}
                        </button>
                      </form>
                    </div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PILLARS ──────────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-5 md:px-6">
        <div className="text-center mb-10 md:mb-16 space-y-3 md:space-y-4">
          <Badge>Specialisms</Badge>
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-light text-zinc-900 tracking-tight">Functional & Aesthetic Gynaecology</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {procedures.map((p, i) => <ServiceCard key={i} {...p} />)}
        </div>
      </section>

      {/* ── FOCUS: LABIAPLASTY ───────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-5 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6 md:space-y-8 order-2 lg:order-1 text-center lg:text-left">
              <div>
                <Badge className="mb-4">Surgical Excellence</Badge>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-zinc-900 leading-tight">Labiaplasty <br/><span className="italic font-serif text-zinc-400">Precision.</span></h3>
              </div>
              <p className="text-sm md:text-base lg:text-lg text-zinc-500 font-light leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Labiaplasty is a life-changing procedure for many women, resolving physical discomfort during exercise and intimacy, and restoring self-confidence. At Gerka Clinic, we use refined surgical techniques to ensure natural results and a comfortable recovery.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-lg mx-auto lg:mx-0">
                 {[
                   "Functional discomfort relief",
                   "Natural aesthetic symmetry",
                   "Performed by Gynaecologists",
                   "Discreet recovery protocol"
                 ].map(item => (
                   <div key={item} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-lg bg-emerald-50 flex items-center justify-center shrink-0">
                         <Check size={12} className="text-emerald-600" />
                      </div>
                      <span className="text-xs md:text-sm text-zinc-600 font-light">{item}</span>
                   </div>
                 ))}
              </div>
              <Link href="/womens-health/labiaplasty" className="inline-flex items-center gap-3 text-[10px] md:text-xs font-bold uppercase tracking-widest text-zinc-900 border-b border-zinc-900 pb-1">
                View Before & After Cases <ArrowRight size={14} />
              </Link>
            </div>
            <div className="order-1 lg:order-2">
               <div className="rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border-white border-[8px] md:border-[12px] bg-white aspect-[6/5] relative">
                  <Image src="/labia-pre.jpeg" fill alt="Clinical focus" className="object-cover grayscale-[0.3]" />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CLINICAL STANDARDS ────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-zinc-900 text-white md:rounded-[4rem] mx-2 md:mx-4 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <div className="lg:col-span-7 space-y-8 md:space-y-12 text-center lg:text-left">
                 <div className="space-y-4">
                    <Badge className="bg-white/10 text-white/80 border-white/20 mx-auto lg:mx-0">The Gerka Standard</Badge>
                    <h2 className="text-3xl md:text-4xl lg:text-6xl font-light tracking-tight">More than surgery.<br /><span className="italic font-serif text-zinc-500">Holistic Care.</span></h2>
                 </div>
                 
                 <div className="grid grid-cols-2 gap-6 md:gap-10 max-w-md mx-auto lg:mx-0">
                    <div className="space-y-2">
                       <div className="text-3xl md:text-5xl font-light text-white">SEGERF</div>
                       <p className="text-[8px] md:text-[10px] uppercase font-bold tracking-[0.2em] text-zinc-500">Board Registered Specialists</p>
                    </div>
                    <div className="space-y-2">
                       <div className="text-3xl md:text-5xl font-light text-white">100%</div>
                       <p className="text-[8px] md:text-[10px] uppercase font-bold tracking-[0.2em] text-zinc-500">Patient Confidentiality</p>
                    </div>
                 </div>

                 <div className="space-y-6 pt-10 border-t border-white/10 text-left">
                    <div className="flex gap-4">
                       <ShieldCheck className="text-zinc-500 shrink-0" size={24} />
                       <div>
                          <h4 className="text-sm font-bold uppercase tracking-widest">Medical-Led Approach</h4>
                          <p className="text-zinc-400 text-xs md:text-sm font-light mt-1">Our clinic is led by Gynaecologists specializing in oncology and aesthetic surgery from Universitat de Barcelona.</p>
                       </div>
                    </div>
                 </div>
              </div>
              
              <div className="lg:col-span-5">
                 <div className="bg-white/5 border border-white/10 p-6 md:p-10 rounded-2xl md:rounded-[3rem] backdrop-blur-md">
                    
<Award className="text-amber-400 mb-6 md:mb-8 w-8 h-8 md:w-10 md:h-10" />
                    <p className="text-lg md:text-2xl font-light leading-relaxed italic text-zinc-200">
                      "Every woman deserves to feel comfortable, confident, and supported through every stage of her life. We bridge the gap between medical health and aesthetic confidence."
                    </p>
                    <div className="mt-8 flex items-center gap-4">
                       <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden bg-zinc-800 relative">
                          <Image src="/1.webp" fill alt="Dr Alba" className="object-cover" />
                       </div>
                       <div>
                          <div className="text-sm font-medium text-white">Dr. Evelyn Alba</div>
                          <div className="text-[10px] text-zinc-500 uppercase tracking-widest">Specialist Gynaecologist</div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────────────── */}
      <section className="py-16 md:py-32 text-center px-5">
        <div className="max-w-3xl mx-auto space-y-8 md:space-y-10">
          <Badge>Dublin Private Clinic</Badge>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-light text-zinc-900 tracking-tight leading-tight">
            Take the first step toward <br />
            <span className="italic font-serif text-zinc-500 text-4xl md:text-7xl underline decoration-zinc-100 underline-offset-4 md:underline-offset-8">physical freedom.</span>
          </h2>
          <p className="text-sm md:text-lg text-zinc-500 font-light leading-relaxed">
            Schedule a no-obligation consultation to discuss your concerns in a safe, clinical environment.
          </p>
          <div className="pt-4 md:pt-6">
             <motion.a
               href="#consultation"
               whileHover={{ scale: 1.02 }}
               whileTap={{ scale: 0.98 }}
               className="inline-flex items-center gap-3 bg-zinc-900 text-white px-8 md:px-14 py-4 md:py-5 rounded-full text-[11px] md:text-xs font-bold uppercase tracking-[0.2em] shadow-2xl hover:bg-black transition-all"
             >
                Secure My Consultation <ChevronRight size={16} />
             </motion.a>
          </div>
        </div>
      </section>

      {/* ── DISCREET FOOTER ──────────────────────────────────────────── */}
      <footer className="py-10 md:py-12 bg-[#FAF9F6] border-t border-zinc-200/50">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 opacity-40">
           <div className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-zinc-900 text-center">Gerka Clinic · Intimate Health Division</div>
           <div className="flex flex-wrap justify-center gap-4 md:gap-8 items-center text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-zinc-500">
              <span className="flex items-center gap-2"><Lock size={12}/> GDPR Secure</span>
              <span className="flex items-center gap-2"><ShieldCheck size={12}/> SEGERF Certified</span>
           </div>
        </div>
      </footer>
    </main>
    </>
  )
}