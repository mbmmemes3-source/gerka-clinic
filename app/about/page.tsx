"use client"

import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Trophy, Award, Users, Target, Calendar, Star, Heart, BookOpen, Lightbulb, Eye } from "lucide-react"
import { Footer } from "@/components/footer"
import { AboutIntro } from "@/components/about"
import { SpecialistsSection } from "@/components/bio"
import { PlanningVisit} from "@/components/visit"
import { ContactSection } from "@/components/contact"
import { GerkaHeroBanner } from "@/components/aboutBanner"
import ClinicIntro from "@/components/features"
import DoctorAboutPage from "@/components/profile"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <GerkaHeroBanner/>
      <AboutIntro/>
      <SpecialistsSection/>
      <DoctorAboutPage/>
      <ClinicIntro/>
      <PlanningVisit/>
      <ContactSection/>
      
    </div>
  )
}