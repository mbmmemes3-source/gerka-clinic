"use client"

import { motion } from "framer-motion"
import { Award, GraduationCap } from "lucide-react"

const specialists = [
  {
    name: "Giselle Gerka",
    role: "Founder | Aesthetic & Regenerative Practitioner | Skin Lesion Specialist",
    image: "/gerka.jpeg",
    // Added AICAD to credentials for the floating image tag
    credentials: "Rey Juan Carlos University -  AICAD",
    specialties: "Aesthetic Medicine • Regenerative Treatments • Skin Lesion Care • Pelvic Floor Health",
    bio: [
      "Giselle Gerka is the founder of Gerka Clinic and has over 17 years of experience in aesthetic medicine.",
      "She began her training in Venezuela with a technical degree in physiotherapy, and later specialised in pelvic floor rehabilitation and women’s health in Spain. This background supports her structured and functional approach to patient care.",
      "Giselle has completed formal training in minor surgery in Spain and holds an international certification in laser technologies. She works with a range of advanced aesthetic and energy-based treatments.",
      "Her clinical focus includes dermatology, particularly the assessment and treatment of skin lesions. She holds an Advanced Diploma in Dermatology from AICAD and has trained in dermoscopy and skin biopsy techniques through programmes associated with King’s College Hospital London.",
      "She also undertakes continuous training in anatomy, with hands-on practical sessions in Spain, ensuring a high level of precision and safety in her procedures.",
      "She is currently continuing her professional studies in minor surgery and dermatology in Spain",
      "At Gerka Clinic, Giselle focuses on delivering safe, effective treatments with a combination of medical and aesthetic expertise."
    ]
  },
  {
    name: "Dr. Evelyn Alba",
    role: "Gynaecology & Obstetrics Specialist",
    image: "/1.webp",
    credentials: "Universitat de Barcelona",
    specialties: (
      <div className="space-y-4 text-left">
        <p className="text-zinc-500 font-normal normal-case">Dr Alba specialises in the following areas of women’s health and advanced gynaecology:</p>
        <div className="space-y-3">
          <div>
            <p className="text-zinc-900 font-bold uppercase tracking-widest text-[10px] mb-1">• Aesthetic & Cosmetic Gynaecological Surgery</p>
            <p className="text-zinc-500 font-light normal-case text-xs leading-relaxed tracking-normal">Advanced surgical techniques to enhance both function and appearance of the intimate area, with a strong focus on precision, safety and natural results.</p>
          </div>
          <div>
            <p className="text-zinc-900 font-bold uppercase tracking-widest text-[10px] mb-1">• Regenerative Gynaecology</p>
            <p className="text-zinc-500 font-light normal-case text-xs leading-relaxed tracking-normal">Innovative treatments using PRP, cellular therapies and energy-based devices to restore tissue health, improve function and support intimate wellbeing.</p>
          </div>
          <div>
            <p className="text-zinc-900 font-bold uppercase tracking-widest text-[10px] mb-1">• Hormonal Health & Functional Medicine</p>
            <p className="text-zinc-500 font-light normal-case text-xs leading-relaxed tracking-normal">Personalised assessment and treatment of hormonal imbalances affecting energy, mood, sexual health and overall wellbeing.</p>
          </div>
          <div>
            <p className="text-zinc-900 font-bold uppercase tracking-widest text-[10px] mb-1">• Menopause & Perimenopause Care</p>
            <p className="text-zinc-500 font-light normal-case text-xs leading-relaxed tracking-normal">Comprehensive, evidence-based support for women navigating menopause, including symptom management, hormonal optimisation and intimate health restoration.</p>
          </div>
        </div>
      </div>
    ),
    bio: [
      "Specialist in Gynaecology and Obstetrics, Dr Alba holds advanced postgraduate training from the Universitat de Barcelona. She is a dedicated member of SEGERF and AEEM.",
      "Her approach combines scientific rigour with compassionate care, addressing sexual dysfunction, urinary incontinence and menopausal symptoms through innovative, personalised treatments.",
      "She ensures every patient receives informed, individualised support at every stage of life, ensuring clinical excellence remains at the heart of the patient journey."
    ]
  }
]

export function SpecialistsSection() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-10">
        
        {/* SECTION HEADER */}
        <div className="text-center mb-16 md:mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center rounded-full px-3 py-1 md:px-4 md:py-1.5 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-zinc-400 bg-zinc-50 border border-zinc-100 mb-4 md:mb-6"
          >
            Our Leadership
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-6xl font-light text-zinc-900 tracking-tight"
          >
            The <span className="italic font-serif text-zinc-500">Specialists</span>
          </motion.h2>
        </div>

        {/* SPECIALISTS LIST */}
        <div className="space-y-20 md:space-y-32">
          {specialists.map((pro, index) => (
            <div 
              key={pro.name}
              className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-10 md:gap-16 lg:gap-24`}
            >
              {/* IMAGE SIDE */}
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="w-full lg:w-1/2"
              >
                <div className="relative aspect-[4/5] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-xl md:shadow-2xl group">
                  <img 
                    src={pro.image} 
                    alt={pro.name} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  
                  {/* Floating Info Tag */}
                  <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8 bg-white/95 backdrop-blur-md p-4 md:p-6 rounded-2xl md:rounded-3xl border border-white/20 shadow-lg lg:translate-y-4 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 transition-all duration-500">
                    <div className="flex items-center gap-2 md:gap-3 text-zinc-800">
                      <GraduationCap size={16} className="text-zinc-400 md:w-5 md:h-5" />
                      <span className="text-[9px] md:text-xs font-bold uppercase tracking-widest">{pro.credentials}</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* TEXT SIDE */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="w-full lg:w-1/2 space-y-6 md:space-y-8"
              >
                <div className="space-y-2 md:space-y-3 text-center lg:text-left">
                  <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] text-zinc-400">
                    {pro.role}
                  </span>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-light text-zinc-900 tracking-tight">
                    {pro.name}
                  </h3>
                </div>

                {/* Highlight Boxes */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-3 md:gap-4">
                  <div className="flex items-center gap-2 bg-zinc-50 border border-zinc-100 px-3 py-1.5 md:px-4 md:py-2 rounded-full">
                    <Award size={12} className="text-zinc-400 md:w-3.5 md:h-3.5" />
                    <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-zinc-600">Pioneer in Excellence</span>
                  </div>
                </div>

                {/* Bio Paragraphs */}
                <div className="space-y-4 md:space-y-6 text-center lg:text-left">
                  {pro.bio.map((para, i) => (
                    <p key={i} className="text-base md:text-lg text-zinc-500 font-light leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>

                {/* Technical Skills Row */}
                <div className="pt-6 border-t border-zinc-100 text-center lg:text-left">
                   <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400 mb-2 md:mb-3">Core Expertise</p>
                   <div className="text-xs md:text-sm text-zinc-900 font-medium tracking-wide">
                     {pro.specialties}
                   </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}