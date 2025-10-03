"use client"
import Navbar from "@/components/navbar"
import ContactSection from "@/components/contact-section"
import ProjectSection from "@/components/project-section"
import SkillsSection from "@/components/skills-section"
import InfoSection from "@/components/info-section"
import CommunityImpact from "@/components/community-impact"


export default function HomePage() {

  return (
    <main className="flex flex-col w-screen ">
      <Navbar />
      <InfoSection />
      <SkillsSection />
      <ProjectSection />
      <CommunityImpact />
      <ContactSection />
    </main>
  )
}




