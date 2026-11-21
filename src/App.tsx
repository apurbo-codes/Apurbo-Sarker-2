import { useCallback, useEffect, useState } from 'react';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { Navbar } from './components/Navbar';
import { PortfolioSection } from './components/PortfolioSection';
import { ServicesSection } from './components/ServicesSection';
import { SkillsSection } from './components/SkillsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ProjectTypeOption, SectionId } from './data/portfolioData';

const SECTION_ORDER: SectionId[] = [
  'home',
  'services',
  'about',
  'portfolio',
  'skills',
  'testimonials',
  'contact',
];

export default function App() {
  const [activeSection, setActiveSection] = useState<SectionId>('home');
  const [preselectedProjectType, setPreselectedProjectType] = useState<ProjectTypeOption | ''>('');

  const scrollToSection = useCallback((sectionId: SectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(sectionId);
    }
  }, []);

  const handleInquireWithPreset = useCallback(
    (projectType: ProjectTypeOption) => {
      setPreselectedProjectType(projectType);
      scrollToSection('contact');
    },
    [scrollToSection]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          const id = visible[0].target.id as SectionId;
          if (SECTION_ORDER.includes(id)) {
            setActiveSection(id);
          }
        }
      },
      {
        rootMargin: '-25% 0px -55% 0px',
        threshold: [0.1, 0.25, 0.5],
      }
    );

    SECTION_ORDER.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex flex-col">
      <Navbar activeSection={activeSection} onNavigate={scrollToSection} />

      <main className="flex-1">
        <HeroSection onNavigate={scrollToSection} />
        <ServicesSection onInquireService={handleInquireWithPreset} />
        <AboutSection onNavigate={scrollToSection} />
        <PortfolioSection onInquireProject={handleInquireWithPreset} />
        <SkillsSection />
        <TestimonialsSection />
        <ContactSection preselectedProjectType={preselectedProjectType} />
      </main>

      <Footer onNavigate={scrollToSection} onInquireService={handleInquireWithPreset} />
    </div>
  );
}
