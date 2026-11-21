import React from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'motion/react';
import { CONTACT_INFO, SectionId } from '../data/portfolioData';
import { PortraitImage } from './PortraitImage';

interface HeroSectionProps {
  onNavigate: (section: SectionId) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-[#0A0A0A] md:min-h-[calc(100vh-72px)] flex flex-col md:flex-row md:items-start pb-12 md:pb-0"
    >
      {/* 1. Blurred Dark Cityscape Backdrop with Warm Orange Tint (z-0) */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        <svg
          viewBox="0 0 1440 720"
          preserveAspectRatio="xMidYMax slice"
          className="absolute inset-0 w-full h-full opacity-35 blur-[5px] scale-105"
        >
          <defs>
            <linearGradient id="skyTint" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#0A0A0A" />
              <stop offset="55%" stopColor="#1A1108" />
              <stop offset="100%" stopColor="#2B1504" />
            </linearGradient>
          </defs>
          <rect width="1440" height="720" fill="url(#skyTint)" />
          <g fill="#12100E">
            <rect x="40" y="310" width="90" height="410" />
            <rect x="145" y="240" width="110" height="480" />
            <rect x="275" y="340" width="85" height="380" />
            <rect x="380" y="200" width="130" height="520" />
            <rect x="530" y="290" width="95" height="430" />
            <rect x="645" y="250" width="120" height="470" />
            <rect x="790" y="320" width="100" height="400" />
            <rect x="910" y="180" width="140" height="540" />
            <rect x="1075" y="260" width="115" height="460" />
            <rect x="1210" y="220" width="105" height="500" />
            <rect x="1330" y="300" width="110" height="420" />
          </g>
          <g fill="#FF7A00" fillOpacity="0.45">
            <circle cx="195" cy="295" r="3" />
            <circle cx="215" cy="335" r="2.5" />
            <circle cx="430" cy="260" r="3.5" />
            <circle cx="465" cy="310" r="2.5" />
            <circle cx="695" cy="300" r="3" />
            <circle cx="960" cy="245" r="4" />
            <circle cx="1005" cy="290" r="2.5" />
            <circle cx="1125" cy="330" r="3" />
            <circle cx="1260" cy="285" r="3.5" />
          </g>
        </svg>

        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/80 to-[#0A0A0A]/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]/50" />
        <div className="absolute -top-24 right-[8%] w-[560px] h-[560px] rounded-full bg-[#FF7A00]/14 blur-[140px]" />
        <div className="absolute -bottom-24 -left-16 w-[440px] h-[440px] rounded-full bg-[#FF7A00]/14 blur-[130px]" />
      </div>

      {/* 2. Glowing Diagonal Orange Neon Streaks (z-10, STRICTLY BEHIND photo and text) */}
      <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden" aria-hidden="true">
        {/* Far top-right corner diagonal streak (behind/beside photo edge, never crossing face) */}
        <div className="hidden md:block absolute -top-10 -right-12 w-[1.5px] h-[340px] rotate-[36deg] origin-top-right bg-gradient-to-b from-[#FF9A2E] via-[#FF7A00]/80 to-transparent shadow-[0_0_18px_2px_rgba(255,122,0,0.6)]" />
        <div className="hidden md:block absolute -top-12 -right-8 w-[64px] h-[340px] rotate-[36deg] origin-top-right bg-gradient-to-b from-[#FF7A00]/20 via-[#FF7A00]/06 to-transparent blur-xl" />

        {/* Bottom-left diagonal streak (under left CTA/social edge, never overlapping photo) */}
        <div className="hidden md:block absolute -bottom-12 left-[6%] lg:left-[12%] w-[1.5px] h-[220px] rotate-[38deg] origin-bottom bg-gradient-to-t from-[#FF9A2E] via-[#FF7A00]/75 to-transparent shadow-[0_0_18px_2px_rgba(255,122,0,0.6)]" />
        <div className="hidden md:block absolute -bottom-12 left-[4%] lg:left-[10%] w-[68px] h-[240px] rotate-[38deg] origin-bottom bg-gradient-to-t from-[#FF7A00]/18 to-transparent blur-xl" />
      </div>

      {/* 3. Right-Side Blended Portrait (z-20: higher than streaks, no dark overlay on face) */}
      <div className="pointer-events-none relative md:absolute md:top-0 md:right-0 w-full md:w-[50%] lg:w-[54%] h-[380px] sm:h-[440px] md:h-[520px] lg:h-[640px] xl:h-[700px] z-20 order-1 md:order-none self-start">
        <div className="relative w-full h-full hero-portrait-mask-mobile overflow-hidden">
          <PortraitImage
            variant="hero"
            className="w-full h-full object-cover object-[50%_42%] md:object-[50%_42%]"
          />
        </div>
      </div>

      {/* 4. Left Content Container (z-30, stacked below photo on <768px, vertically centered on md+) */}
      <div className="relative z-30 max-w-[1240px] mx-auto px-5 md:px-6 lg:px-8 w-full order-2 md:order-none -mt-2 md:mt-0 md:pt-12 lg:pt-16 md:pb-16 lg:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="md:max-w-[54%] lg:max-w-[600px] xl:max-w-[720px] flex flex-col items-start text-left"
        >
          {/* Small pill badge with green dot */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#141414]/90 border border-white/[0.1] text-xs sm:text-sm font-medium text-[#E5E5E5] mb-4 md:mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.85)]" aria-hidden="true" />
            <span>Available for new projects</span>
          </div>

          {/* Main Heading: 36-40px mobile, 64px desktop on two lines */}
          <h1 className="font-display font-extrabold tracking-tight text-white text-[36px] sm:text-[40px] md:text-[44px] lg:text-[52px] xl:text-[64px] leading-[1.08] mb-5">
            <span className="block xl:whitespace-nowrap">Stop Doing Manual Work.</span>
            <span className="block">
              Let <span className="text-[#FF7A00]">AI</span> Do It.
            </span>
          </h1>

          {/* Sub-paragraph: soft gray, 18-20px on desktop, max-w 520px */}
          <p className="text-[#B8B8B8] text-[15px] sm:text-base lg:text-[18px] xl:text-[19px] leading-relaxed max-w-[520px] mb-7 md:mb-8">
            I&apos;m Apurbo, an AI Automation &amp; Web Developer. I automate repetitive tasks so you save time and money.
          </p>

          {/* CTA Buttons: side-by-side when space fits, stack cleanly on very narrow viewports */}
          <div className="w-full flex flex-wrap items-center gap-3 sm:gap-4 mb-8 md:mb-9">
            <button
              type="button"
              onClick={() => onNavigate('portfolio')}
              className="flex-1 sm:flex-none min-w-[148px] inline-flex items-center justify-center gap-2 px-5 sm:px-7 py-3 sm:py-3.5 rounded-full bg-gradient-to-r from-[#FF7A00] to-[#FF9A2E] text-[#0A0A0A] font-display font-semibold text-sm sm:text-base whitespace-nowrap hover:brightness-110 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-150 shadow-[0_0_28px_rgba(255,122,0,0.45)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white cursor-pointer"
            >
              <span>View My Work</span>
              <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="flex-1 sm:flex-none min-w-[136px] inline-flex items-center justify-center gap-2 px-5 sm:px-7 py-3 sm:py-3.5 rounded-full bg-[#111111]/90 border border-[#FF7A00]/65 text-white font-display font-semibold text-sm sm:text-base whitespace-nowrap hover:bg-[#FF7A00]/12 hover:border-[#FF7A00] hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF7A00] cursor-pointer"
            >
              <span>Contact Me</span>
            </button>
          </div>

          {/* Row of round dark icon buttons with orange borders (centered on mobile, left on md+) */}
          <div className="w-full flex items-center justify-center md:justify-start gap-3.5">
            <a
              href={CONTACT_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-11 h-11 rounded-full bg-[#111111]/90 border border-[#FF7A00]/45 flex items-center justify-center text-[#E5E5E5] hover:text-[#FF7A00] hover:border-[#FF7A00] hover:-translate-y-0.5 hover:shadow-[0_0_18px_rgba(255,122,0,0.3)] transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF7A00]"
            >
              <Linkedin className="w-[18px] h-[18px]" aria-hidden="true" />
            </a>

            <a
              href={CONTACT_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-11 h-11 rounded-full bg-[#111111]/90 border border-[#FF7A00]/45 flex items-center justify-center text-[#E5E5E5] hover:text-[#FF7A00] hover:border-[#FF7A00] hover:-translate-y-0.5 hover:shadow-[0_0_18px_rgba(255,122,0,0.3)] transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF7A00]"
            >
              <Github className="w-[18px] h-[18px]" aria-hidden="true" />
            </a>

            <a
              href={CONTACT_INFO.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-11 h-11 rounded-full bg-[#111111]/90 border border-[#FF7A00]/45 flex items-center justify-center text-[#E5E5E5] hover:text-[#FF7A00] hover:border-[#FF7A00] hover:-translate-y-0.5 hover:shadow-[0_0_18px_rgba(255,122,0,0.3)] transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF7A00]"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.9"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-[18px] h-[18px]"
                aria-hidden="true"
              >
                <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
              </svg>
            </a>

            <a
              href={`mailto:${CONTACT_INFO.email}`}
              aria-label="Email Apurbo"
              className="w-11 h-11 rounded-full bg-[#111111]/90 border border-[#FF7A00]/45 flex items-center justify-center text-[#E5E5E5] hover:text-[#FF7A00] hover:border-[#FF7A00] hover:-translate-y-0.5 hover:shadow-[0_0_18px_rgba(255,122,0,0.3)] transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF7A00]"
            >
              <Mail className="w-[18px] h-[18px]" aria-hidden="true" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* 5. Thin Glowing Orange Line Along the Bottom Edge */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[1.5px] z-30 bg-gradient-to-r from-[#FF7A00]/45 via-[#FF9A2E] to-[#FF7A00]/45 shadow-[0_0_20px_rgba(255,122,0,0.8)]"
        aria-hidden="true"
      />
    </section>
  );
};
