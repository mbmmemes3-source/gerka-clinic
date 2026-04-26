"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import Link from "next/link"

const faqs = [
  {
    id: "01",
    question: "Do you have a payment plan?",
    answer: (
      <>
        Treatments over €1,000 can apply for flexible payment plans through Humm. 
        You can apply directly at{" "}
        <Link 
          href="https://www.shophumm.com/ie/" 
          target="_blank" 
          className="text-zinc-900 font-medium underline underline-offset-4 decoration-zinc-300 hover:decoration-zinc-900 transition-colors"
        >
          shophumm.com/ie
        </Link>
      </>
    )
  },
  {
    id: "02",
    question: "Is there parking available?",
    answer: "Street parking is available outside the clinic. Additional parking may be available at the Talbot Hotel Stillorgan, subject to authorised availability. Please confirm with reception prior to your appointment before using the hotel parking."
  },
  {
    id: "03",
    question: "What is your cancellation policy?",
    answer: "To maintain our standard of care, we require 48 hours notice for all cancellations. This allows us to reallocate our specialists' time to other patients on our curated waiting list."
  },
  {
    id: "04",
    question: "Do you accept health insurance?",
    answer: "Gerka Clinic does not work directly with insurance providers, as the majority of our treatments are aesthetic and cosmetic procedures, which are generally not covered by medical insurance. For medically indicated consultations or treatments, patients will receive a detailed receipt following their appointment. Patients may submit this receipt to their insurance provider for potential reimbursement, depending on the terms and coverage of their individual policy."
  },
  {
    id: "05",
    question: "What Payment Do You Accept?",
    answer: "We accept all major international credit cards, including American Express, alongside secure digital payments and bank transfers for your convenience."
  }
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-16 md:py-32 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        
        {/* CENTERED HEADER */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center rounded-full px-4 py-1.5 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400 bg-zinc-50 border border-zinc-100 mb-4 md:mb-6"
          >
            Concierge Support
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-6xl font-light text-zinc-900 tracking-tight leading-tight"
          >
            Your Questions, <br className="block sm:hidden" />
            <span className="italic font-serif text-zinc-500 underline decoration-zinc-100 underline-offset-4 md:underline-offset-8">Answered</span>
          </motion.h2>
        </div>

        {/* FAQ ACCORDIONS */}
        <div className="w-full space-y-2 md:space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group overflow-hidden rounded-2xl md:rounded-[2.5rem] transition-all duration-500 ${
                openIndex === index ? "bg-[#F9F9F7] p-5 sm:p-7 md:p-10" : "bg-transparent p-5 sm:p-6 border-b border-zinc-100"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-start sm:items-center justify-between text-left gap-4"
              >
                <div className="flex items-start sm:items-center gap-4 md:gap-6">
                  <span className={`text-[10px] md:text-[11px] font-bold tracking-widest mt-1 sm:mt-0 ${
                    openIndex === index ? "text-zinc-900" : "text-zinc-300"
                  }`}>
                    {faq.id}
                  </span>
                  <span className={`text-base sm:text-lg md:text-2xl font-medium tracking-tight transition-colors duration-300 ${
                    openIndex === index ? "text-zinc-900" : "text-zinc-500 group-hover:text-zinc-900"
                  }`}>
                    {faq.question}
                  </span>
                </div>
                
                <div className={`mt-1 sm:mt-0 flex-shrink-0 transition-transform duration-500 ${openIndex === index ? "rotate-180" : "rotate-0"}`}>
                  <ChevronDown size={20} strokeWidth={1.5} className={openIndex === index ? "text-zinc-900" : "text-zinc-300"} />
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                  >
                    <div className="pt-4 md:pt-6 sm:pl-10">
                      <div className="text-zinc-500 leading-relaxed text-sm sm:text-base md:text-lg font-light max-w-2xl">
                        {faq.answer}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM DECORATION */}
        <div className="mt-12 md:mt-20 flex justify-center">
            <div className="h-[1px] w-12 md:w-20 bg-zinc-200" />
        </div>
      </div>
    </section>
  )
}