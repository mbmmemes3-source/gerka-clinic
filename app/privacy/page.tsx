"use client"

import { motion } from "framer-motion"
import { Home, ChevronRight, ShieldCheck, Lock, Eye, Scale, FileText, Share2, Database, Globe, Bell, Mail } from "lucide-react"
import Link from "next/link"

export default function PrivacyPolicyPage() {
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
            Legal Compliance
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-light text-zinc-900 tracking-tight mb-8"
          >
            Privacy <span className="italic font-serif text-zinc-500">Policy</span>
          </motion.h1>

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
            <span className="text-zinc-900">Privacy Policy</span>
          </motion.div>
        </div>
      </section>

      {/* --- MAIN CONTENT --- */}
      <section className="py-20 px-6 md:px-10">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-20">
            
            {/* 1. INTRODUCTION */}
            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-zinc-900 mb-6 flex items-center gap-3">
                <FileText size={18} className="text-zinc-400" /> 1. Introduction
              </h2>
              <div className="space-y-4 text-zinc-500 font-light leading-relaxed text-lg">
                <p>
                  Gerka Clinic is committed to protecting and respecting your privacy. This Privacy Policy explains how we collect, use, process, and protect your personal data when you visit our website, contact us, or receive medical or aesthetic treatments at our clinic.
                </p>
                <p>
                  Gerka Clinic operates in compliance with the <span className="text-zinc-900 font-normal">General Data Protection Regulation (GDPR)</span> and applicable Irish data protection legislation. By using our website or services, you agree to the terms of this Privacy Policy.
                </p>
              </div>
            </motion.section>

            {/* 2. DATA CONTROLLER */}
            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-zinc-900 mb-6 flex items-center gap-3">
                <ShieldCheck size={18} className="text-zinc-400" /> 2. Data Controller
              </h2>
              <div className="p-8 rounded-[2rem] bg-[#F9F9F7] border border-zinc-100 text-zinc-600 font-light">
                <p className="font-semibold text-zinc-900 mb-1">Gerka Clinic</p>
                <p className="mb-4">Dublin, Ireland</p>
                <p>Email: <a href="mailto:info@gerkaclinic.com" className="text-zinc-900 underline">info@gerkaclinic.com</a></p>
                <p>Phone: +353 087 888 8087</p>
              </div>
            </motion.section>

            {/* 3. PERSONAL DATA WE COLLECT */}
            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-zinc-900 mb-8 flex items-center gap-3">
                <Eye size={18} className="text-zinc-400" /> 3. Personal Data We Collect
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                {[
                  { title: "Personal Identification", items: ["Full name", "Date of birth", "Address"] },
                  { title: "Contact Information", items: ["Email address", "Telephone number"] },
                  { title: "Medical Information", items: ["Medical history relevant to treatment", "Consultation notes", "Treatment records"] },
                  { title: "Clinical Documentation", items: ["Medical photographs (only with patient consent)"] },
                  { title: "Financial Information", items: ["Billing details", "Payment records"] },
                  { title: "Website Data", items: ["Cookies and analytics data", "IP address", "Browser information"] }
                ].map((cat, i) => (
                  <div key={i} className="space-y-3">
                    <h4 className="text-[11px] font-bold uppercase tracking-widest text-zinc-900">{cat.title}</h4>
                    <ul className="space-y-2">
                      {cat.items.map((item, j) => (
                        <li key={j} className="text-zinc-500 font-light text-sm flex items-center gap-2">
                          <div className="w-1 h-1 bg-zinc-300 rounded-full" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* 4. HOW WE USE YOUR INFORMATION */}
            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-zinc-900 mb-6 flex items-center gap-3">
                <Lock size={18} className="text-zinc-400" /> 4. How We Use Your Information
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Providing medical, aesthetic, and wellness treatments",
                  "Scheduling and managing appointments",
                  "Maintaining medical records",
                  "Communicating regarding consultations",
                  "Processing payments and invoices",
                  "Improving our website and services",
                  "Ensuring patient safety and quality",
                  "Complying with legal and regulatory obligations"
                ].map((text, i) => (
                  <li key={i} className="p-4 rounded-xl bg-zinc-50 border border-zinc-100 text-sm text-zinc-600 font-light">
                    {text}
                  </li>
                ))}
              </ul>
            </motion.section>

            {/* 5. LEGAL BASIS */}
            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-zinc-900 mb-6 flex items-center gap-3">
                <Scale size={18} className="text-zinc-400" /> 5. Legal Basis for Processing
              </h2>
              <div className="space-y-4 text-zinc-500 font-light leading-relaxed">
                <p>Under the GDPR, we process data based on:</p>
                <div className="flex flex-wrap gap-3">
                  {["Patient consent", "Performance of contract", "Legal obligations", "Legitimate interests"].map(tag => (
                    <span key={tag} className="px-4 py-1.5 bg-white border border-zinc-200 rounded-full text-[11px] font-medium text-zinc-900 uppercase tracking-wider">{tag}</span>
                  ))}
                </div>
                <p className="pt-4 italic font-serif text-zinc-900 bg-zinc-50 p-6 rounded-2xl">
                  Special category data, including health information, is processed strictly for medical purposes and handled with the highest level of confidentiality.
                </p>
              </div>
            </motion.section>

            {/* 6. SHARING OF DATA */}
            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-zinc-900 mb-6 flex items-center gap-3">
                <Share2 size={18} className="text-zinc-400" /> 6. Sharing of Personal Data
              </h2>
              <div className="space-y-6">
                <ul className="space-y-3 text-zinc-500 font-light">
                  <li>• Healthcare professionals involved in your treatment</li>
                  <li>• Laboratories and diagnostic service providers</li>
                  <li>• Payment processing providers</li>
                  <li>• Regulatory authorities when required by law</li>
                  <li>• Professional insurers or legal representatives</li>
                </ul>
                <p className="text-zinc-900 font-medium tracking-tight">
                  Gerka Clinic does not sell, rent, or trade personal data to third parties.
                </p>
              </div>
            </motion.section>

            {/* 7 & 8. RETENTION & SECURITY */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-zinc-900 mb-6 flex items-center gap-3">
                  <Database size={18} className="text-zinc-400" /> 7. Data Retention
                </h2>
                <p className="text-zinc-500 font-light leading-relaxed text-sm">
                  Medical records are retained for the period required under Irish healthcare regulations. Once expired, data will be securely deleted or anonymised.
                </p>
              </motion.section>
              <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-zinc-900 mb-6 flex items-center gap-3">
                  <Lock size={18} className="text-zinc-400" /> 8. Data Security
                </h2>
                <p className="text-zinc-500 font-light leading-relaxed text-sm">
                  We implement appropriate technical and organisational measures to protect your information from unauthorised access, loss, or misuse.
                </p>
              </motion.section>
            </div>

            {/* 9. RIGHTS */}
            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-zinc-900 text-white p-8 md:p-12 rounded-[3rem]">
              <h2 className="text-xl font-light mb-8">9. Your Data Protection Rights</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-zinc-400 font-light text-sm">
                {[
                  "Access your personal data",
                  "Request correction of inaccuracies",
                  "Request deletion where applicable",
                  "Restrict or object to processing",
                  "Request data portability",
                  "Withdraw consent at any time"
                ].map((right, i) => (
                  <div key={i} className="flex items-center gap-3 border-b border-white/10 pb-3">
                    <ChevronRight size={14} className="text-white" /> {right}
                  </div>
                ))}
              </div>
              <p className="mt-8 text-xs text-zinc-500 leading-relaxed">
                You have the right to lodge a complaint with the <span className="text-white">Irish Data Protection Commission</span> if you believe your data has been processed unlawfully.
              </p>
            </motion.section>

            {/* 10, 11, 12. COOKIES, LINKS, UPDATES */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-zinc-100 pt-16">
              {[
                { icon: <Globe size={18} />, title: "10. Cookies", text: "We use cookies to enhance user experience. Manage these via your browser settings." },
                { icon: <Share2 size={18} />, title: "11. Third-Party Links", text: "We are not responsible for the privacy practices of external websites linked on our site." },
                { icon: <Bell size={18} />, title: "12. Updates", text: "This policy may be updated from time to time. Updates will be published on our website." }
              ].map((item, i) => (
                <div key={i} className="space-y-4">
                  <div className="text-zinc-900 flex items-center gap-2 font-bold text-[11px] uppercase tracking-widest">
                    {item.icon} {item.title}
                  </div>
                  <p className="text-xs text-zinc-500 leading-relaxed font-light">{item.text}</p>
                </div>
              ))}
            </div>

            {/* 13. CONTACT */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              className="text-center pt-10"
            >
              <h2 className="text-[11px] font-bold uppercase tracking-[0.4em] text-zinc-400 mb-6">Contact Information</h2>
              <div className="flex flex-col items-center space-y-2 text-zinc-900 font-light">
                <p className="text-2xl italic font-serif text-zinc-500">Gerka Clinic</p>
                <p>Dublin, Ireland</p>
                <a href="mailto:info@gerkaclinic.com" className="flex items-center gap-2 hover:text-zinc-500 transition-colors">
                  <Mail size={16} /> info@gerkaclinic.com
                </a>
              </div>
            </motion.section>

          </div>
        </div>
      </section>

      <footer className="py-12 text-center text-[9px] font-bold uppercase tracking-[0.4em] text-zinc-300">
        Gerka Clinic • GDPR Compliance • {new Date().getFullYear()}
      </footer>
    </main>
  )
}