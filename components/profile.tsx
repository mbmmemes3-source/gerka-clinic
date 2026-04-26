"use client"

import React from "react"
import { motion } from "framer-motion"
import { 
  GraduationCap, 
  Stethoscope, 
  Scissors, 
  Microscope, 
  CheckCircle2,
  Globe,
  MapPin,
  Calendar
} from "lucide-react"

export default function DoctorProfileCompact() {
  const skills = [
    "Dermatology & Skin Treatment", "Aesthetic Medicine", "Surgical Cosmetic Procedures",
    "Botox & Fillers", "PRP, Mesotherapy, Microneedling", "Laser Therapy",
    "Fat Grafting", "Research & Writing"
  ]

  const surgicalExpertise = [
    "Blepharoplasty", "Eyebrow Lift", "Facelift", "Laser Facial", "Mole Removal"
  ]

  return (
    <section className="bg-[#FAF9F6] py-16 px-6">
      <div className="max-w-5xl mx-auto bg-white border border-zinc-200 rounded-[2.5rem] overflow-hidden shadow-sm">
        
        {/* TOP BAR: NAME & TITLE */}
        <div className="bg-zinc-900 p-8 md:p-12 text-white flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-500">Clinical Team</span>
            <h1 className="text-3xl md:text-4xl font-light tracking-tight">Tamana Noorzaei, <span className="italic font-serif">MD</span></h1>
            <div className="flex items-center gap-4 text-zinc-400 text-xs uppercase tracking-widest">
              <span className="flex items-center gap-1.5"><Stethoscope size={14}/> Aesthetic & Dermatology</span>
            </div>
          </div>
          <div className="bg-white/10 px-6 py-4 rounded-2xl border border-white/10 backdrop-blur-md">
            <p className="text-xs font-light leading-relaxed max-w-[240px]">
              Dedicated medical doctor with 5 years of expertise in dermatology and surgical cosmetic procedures.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12">
          
          {/* LEFT COLUMN: SKILLS & EDUCATION */}
          <div className="lg:col-span-5 p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-zinc-100 space-y-10">
            
            {/* Skills */}
            <div className="space-y-4">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400">Core Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map(s => (
                  <span key={s} className="px-3 py-1.5 bg-zinc-50 border border-zinc-100 rounded-lg text-[11px] text-zinc-600 font-medium">{s}</span>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="space-y-4">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400">Education</h3>
              <div className="flex gap-4 items-start">
                <GraduationCap className="text-zinc-900 mt-1" size={20} />
                <div>
                  <p className="text-sm font-bold text-zinc-800">Medical Doctor (MD)</p>
                  <p className="text-xs text-zinc-500">Jami Medical University | 04/2023</p>
                </div>
              </div>
            </div>

           
          </div>

          {/* RIGHT COLUMN: HISTORY & SURGICAL */}
          <div className="lg:col-span-7 p-8 md:p-12 space-y-10 bg-[#FAF9F6]/30">
            
            {/* Work History */}
            <div className="space-y-6">
              <div className="space-y-2">
                <h4 className="text-xl font-medium text-zinc-900">Aesthetic & Dermatology Doctor</h4>
                <p className="text-xs font-bold uppercase text-zinc-400 tracking-widest">Private Aesthetic Centres, Afghanistan</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                {surgicalExpertise.map(item => (
                  <div key={item} className="flex items-center gap-3 text-sm text-zinc-600 font-light">
                    <Scissors size={14} className="text-zinc-300" /> {item}
                  </div>
                ))}
                <div className="flex items-center gap-3 text-sm text-zinc-600 font-light">
                  <CheckCircle2 size={14} className="text-zinc-300" /> Botox, Fillers, PRP
                </div>
                <div className="flex items-center gap-3 text-sm text-zinc-600 font-light">
                  <CheckCircle2 size={14} className="text-zinc-300" /> Fat Grafting
                </div>
              </div>
            </div>

            {/* Publications */}
            <div className="pt-8 border-t border-zinc-200 space-y-4">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400 flex items-center gap-2">
                <Microscope size={14}/> Scientific Publications
              </h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <span className="text-zinc-900 font-bold text-xs mt-0.5">01.</span>
                  <p className="text-xs text-zinc-600 leading-relaxed">Published article — <span className="text-zinc-900 font-medium">World Journal (UK)</span>, July 4, 2025</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-zinc-900 font-bold text-xs mt-0.5">02.</span>
                  <p className="text-xs text-zinc-600 leading-relaxed italic">Second clinical article currently under review</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}