"use client";
import { AboutSection } from "@/sections/About";
import { aboutSectionId, contactSectionId, heroSectionId, projectsSectionId } from "@/sections/constants";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { TestimonialsSection } from "@/sections/Testimonials";
import { useState } from "react";
export default function Home() {
    const [activeSectionId, setActiveSectionId] = useState<string>(heroSectionId);
    return (
        <>
            <Header activeSectionId={activeSectionId} setActiveSectionId={setActiveSectionId} />
            <HeroSection id={heroSectionId} />
            <ProjectsSection id={projectsSectionId} />
            <TapeSection />
            <TestimonialsSection />
            <AboutSection id={aboutSectionId} />
            <ContactSection id={contactSectionId} />
            <Footer />
        </>
    );
}
