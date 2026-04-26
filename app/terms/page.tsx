"use client"

import { motion } from "framer-motion"
import { 
  Home, 
  ChevronRight, 
  Gavel, 
  Stethoscope, 
  Calendar, 
  CreditCard, 
  AlertTriangle, 
  Cookie, 
  Info,
  Scale,
  ShieldAlert,
  Mail,
  Lock
} from "lucide-react"
import Link from "next/link"

export default function TermsAndConditionsPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* --- HERO BANNER --- */}
      <section className="relative pt-32 pb-16 md:pt-48 md:pb-24 bg-[#F9F9F7] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center rounded-full px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400 bg-white border border-zinc-200 mb-6"
          >
            Agreement & Policies
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-light text-zinc-900 tracking-tight mb-8"
          >
            Terms & <span className="italic font-serif text-zinc-500">Conditions</span>
          </motion.h1>

          {/* BREADCRUMB */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center gap-4 text-[10px] font-bold uppercase tracking-widest"
          >
            <Link href="/" className="text-zinc-400 hover:text-zinc-900 flex items-center gap-2 transition-colors">
              <Home size={14} /> Home
            </Link>
            <ChevronRight size={12} className="text-zinc-300" />
            <span className="text-zinc-900">Terms & Conditions</span>
          </motion.div>
        </div>
      </section>

      {/* --- TERMS & CONDITIONS CONTENT --- */}
      <section className="py-20 px-6 md:px-10">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-16">
            
            {/* 1. INTRODUCTION */}
            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-[11px] font-bold uppercase tracking-[0.3em] text-zinc-900 mb-6 flex items-center gap-3">
                <Gavel size={18} className="text-zinc-400" /> 1. Introduction
              </h2>
              <div className="space-y-4 text-zinc-500 font-light leading-relaxed text-lg">
                <p>
                  These Terms and Conditions govern the use of the Gerka Clinic website and services. By accessing this website or booking an appointment with Gerka Clinic, you agree to comply with these Terms and Conditions.
                </p>
                <p className="text-zinc-900 font-normal">
                  If you do not agree with any part of these terms, please do not use our website or services.
                </p>
              </div>
            </motion.section>

            {/* 2. MEDICAL SERVICES */}
            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-[11px] font-bold uppercase tracking-[0.3em] text-zinc-900 mb-6 flex items-center gap-3">
                <Stethoscope size={18} className="text-zinc-400" /> 2. Medical Services
              </h2>
              <div className="space-y-4 text-zinc-500 font-light leading-relaxed">
                <p>Gerka Clinic provides medical, aesthetic, and wellness treatments delivered by qualified healthcare professionals.</p>
                <ul className="space-y-2 list-disc pl-5">
                  <li>All treatments require an appropriate consultation to determine suitability and medical safety.</li>
                  <li>Results from aesthetic or medical procedures may vary from patient to patient, and no specific outcomes can be guaranteed.</li>
                </ul>
              </div>
            </motion.section>

            {/* 3. APPOINTMENTS */}
            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-[11px] font-bold uppercase tracking-[0.3em] text-zinc-900 mb-6 flex items-center gap-3">
                <Calendar size={18} className="text-zinc-400" /> 3. Appointments
              </h2>
              <div className="space-y-4 text-zinc-500 font-light leading-relaxed">
                <p>Appointments can be scheduled through our website, telephone, email, or in person at the clinic. Patients are responsible for providing accurate medical information during consultations.</p>
                <p className="italic">Gerka Clinic reserves the right to refuse treatment if it is considered medically inappropriate or unsafe.</p>
              </div>
            </motion.section>

            {/* 4. CANCELLATIONS */}
            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-[11px] font-bold uppercase tracking-[0.3em] text-zinc-900 mb-6 flex items-center gap-3">
                <AlertTriangle size={18} className="text-zinc-400" /> 4. Cancellations and Late Arrivals
              </h2>
              <div className="p-8 rounded-[2rem] bg-zinc-50 border border-zinc-100 space-y-4 text-zinc-600 font-light">
                <p>• Patients are kindly requested to provide at least <span className="text-zinc-900 font-medium">48 hours notice</span> for appointment cancellations or rescheduling.</p>
                <p>• Late arrivals may result in a shortened appointment or rescheduling.</p>
                <p>• Missed appointments or late cancellations may incur a cancellation fee.</p>
              </div>
            </motion.section>

            {/* 5. PAYMENTS */}
            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-[11px] font-bold uppercase tracking-[0.3em] text-zinc-900 mb-6 flex items-center gap-3">
                <CreditCard size={18} className="text-zinc-400" /> 5. Payments
              </h2>
              <p className="text-zinc-500 font-light leading-relaxed">
                Payment for treatments may be required in advance or immediately after the service is provided. Gerka Clinic accepts various payment methods including card payments and other approved systems. All prices are subject to change without prior notice.
              </p>
            </motion.section>

            {/* 6. TREATMENT RISKS */}
            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-[11px] font-bold uppercase tracking-[0.3em] text-zinc-900 mb-6 flex items-center gap-3">
                <ShieldAlert size={18} className="text-zinc-400" /> 6. Treatment Risks
              </h2>
              <p className="text-zinc-500 font-light leading-relaxed">
                All medical and aesthetic procedures involve potential risks and side effects. During your consultation, our medical team will explain possible risks and expected outcomes. Patients must follow post-treatment instructions carefully to minimise complications.
              </p>
            </motion.section>

            {/* 7, 8, 9, 10. LEGAL SECTIONS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-10">
              <div className="space-y-4">
                <h3 className="text-[11px] font-bold uppercase tracking-widest text-zinc-900 flex items-center gap-2">
                  <Info size={16} /> 7. Website Info
                </h3>
                <p className="text-sm text-zinc-500 font-light leading-relaxed">Provided for general informational purposes only. It does not replace professional medical advice.</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-[11px] font-bold uppercase tracking-widest text-zinc-900 flex items-center gap-2">
                  <Lock size={16} /> 8. Intellectual Property
                </h3>
                <p className="text-sm text-zinc-500 font-light leading-relaxed">All content, including text and graphics, is the property of Gerka Clinic and may not be reproduced without permission.</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-[11px] font-bold uppercase tracking-widest text-zinc-900 flex items-center gap-2">
                  <Scale size={16} /> 9. Limitation of Liability
                </h3>
                <p className="text-sm text-zinc-500 font-light leading-relaxed">Gerka Clinic is not liable for damages resulting from misuse of info or failure to follow post-treatment medical advice.</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-[11px] font-bold uppercase tracking-widest text-zinc-900 flex items-center gap-2">
                  <Gavel size={16} /> 10. Governing Law
                </h3>
                <p className="text-sm text-zinc-500 font-light leading-relaxed">These Terms and Conditions are governed by the laws of Ireland and subject to the jurisdiction of Irish courts.</p>
              </div>
            </div>

            {/* --- MEDICAL DISCLAIMER SECTION --- */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              className="bg-zinc-900 text-white p-8 md:p-16 rounded-[3rem] space-y-8"
            >
              <div className="space-y-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-500">Important Notice</span>
                <h2 className="text-3xl font-light">Medical Disclaimer</h2>
              </div>
              <div className="space-y-6 text-zinc-400 font-light leading-relaxed text-sm md:text-base">
                <p>The information provided on the Gerka Clinic website is for informational and educational purposes only. It is not intended to replace professional medical advice, diagnosis, or treatment.</p>
                <p>Gerka Clinic does not guarantee specific results. Individual outcomes vary depending on factors such as medical history, skin type, lifestyle, and adherence to post-treatment instructions.</p>
                <p className="bg-white/5 p-6 rounded-2xl border border-white/10 text-zinc-200 italic">
                  Before undergoing any treatment, patients will receive a consultation where potential risks, benefits, and alternatives will be explained. Gerka Clinic reserves the right to decline treatment if it is not considered medically appropriate.
                </p>
              </div>
            </motion.section>

            {/* --- COOKIE POLICY SECTION --- */}
            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-12 pt-10">
              <div className="space-y-4">
                <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-zinc-900 flex items-center gap-3">
                  <Cookie size={18} className="text-zinc-400" /> Cookie Policy
                </h2>
                <p className="text-zinc-500 font-light">This Cookie Policy explains how Gerka Clinic uses cookies and similar technologies to improve functionality and user experience.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { title: "Essential Cookies", text: "Necessary for the website to function properly and securely." },
                  { title: "Analytics Cookies", text: "Helping us understand how visitors interact with our website to improve performance." },
                  { title: "Functional Cookies", text: "Allowing the website to remember preferences such as language or location." }
                ].map((cookie, i) => (
                  <div key={i} className="p-6 rounded-2xl border border-zinc-100 bg-[#F9F9F7] space-y-3">
                    <h4 className="text-[11px] font-bold uppercase tracking-widest text-zinc-900">{cookie.title}</h4>
                    <p className="text-xs text-zinc-500 font-light leading-relaxed">{cookie.text}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-4 text-zinc-500 font-light text-sm">
                <h4 className="text-zinc-900 font-medium">Managing Cookies</h4>
                <p>You can control and manage cookies through your browser settings. Most browsers allow you to refuse or delete cookies. Please note that disabling cookies may affect website functionality.</p>
                <p className="text-[10px] uppercase tracking-widest text-zinc-400 mt-8">Updates: Gerka Clinic may update this Cookie Policy periodically to reflect technological or legal changes.</p>
              </div>
            </motion.section>

            {/* --- CONTACT FOOTER --- */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              className="text-center pt-20 border-t border-zinc-100"
            >
              <p className="text-2xl italic font-serif text-zinc-500 mb-4">Gerka Clinic</p>
              <p className="text-sm text-zinc-400 uppercase tracking-[0.2em] mb-8">Dublin, Ireland</p>
              <a href="mailto:info@gerkaclinic.com" className="bg-zinc-900 text-white px-10 py-5 rounded-full text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-zinc-800 transition-all flex items-center gap-3 mx-auto w-fit">
                <Mail size={16} /> info@gerkaclinic.com
              </a>
            </motion.section>

          </div>
        </div>
      </section>

      <footer className="py-12 text-center text-[9px] font-bold uppercase tracking-[0.4em] text-zinc-300">
        Gerka Clinic • Legal & Compliance • {new Date().getFullYear()}
      </footer>
    </main>
  )
}