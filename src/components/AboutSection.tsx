import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Briefcase, CheckCircle2, Smile } from 'lucide-react';
import { motion } from 'motion/react';
import { ABOUT_STATS, SectionId } from '../data/portfolioData';
import { PortraitImage } from './PortraitImage';

interface AboutSectionProps {
  onNavigate: (section: SectionId) => void;
}

interface CountUpValueProps {
  target: number;
  suffix: string;
  start: boolean;
}

const CountUpValue: React.FC<CountUpValueProps> = ({ target, suffix, start }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setValue(target);
      return;
    }

    let rafId = 0;
    const duration = 1200;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Smooth easeOutCubic curve
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) {
        rafId = requestAnimationFrame(tick);
      }
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [start, target]);

  return (
    <span className="tabular-nums">
      {value}
      {suffix}
    </span>
  );
};

export const AboutSection: React.FC<AboutSectionProps> = ({ onNavigate }) => {
  const statsRef = useRef<HTMLDivElement | null>(null);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const node = statsRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const renderStatIcon = (id: string) => {
    switch (id) {
      case 'experience':
        return <Briefcase className="w-6 h-6 text-[#FF7A00]" aria-hidden="true" />;
      case 'projects':
        return <CheckCircle2 className="w-6 h-6 text-[#FF7A00]" aria-hidden="true" />;
      default:
        return <Smile className="w-6 h-6 text-[#FF7A00]" aria-hidden="true" />;
    }
  };

  return (
    <section id="about" className="relative py-20 lg:py-24 bg-[#0A0A0A]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 items-center">
          {/* Left: Close-up photo in layered glowing orange frame */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 flex justify-center lg:justify-start"
          >
            <div className="relative w-full md:w-[330px] h-[300px] md:h-[270px] shrink-0">
              {/* Second thin layered orange outline offset by 6px at top-left and right */}
              <div
                className="pointer-events-none absolute -top-[6px] -left-[6px] w-[72%] h-[78%] rounded-tl-[24px] rounded-tr-[14px] rounded-bl-[14px] border-t-[1.5px] border-l-[1.5px] border-[#FF7A00]/65"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute top-[10%] -right-[6px] bottom-[10%] w-6 rounded-r-[22px] border-r-[1.5px] border-t-[1.5px] border-b-[1.5px] border-[#FF7A00]/55"
                aria-hidden="true"
              />

              {/* Primary glowing orange frame */}
              <div className="relative w-full h-full rounded-[20px] overflow-hidden bg-[#111111] border-[1.5px] border-[#FF7A00] shadow-[0_0_25px_rgba(255,122,0,0.35)]">
                <PortraitImage
                  variant="about"
                  className="w-full h-full object-cover object-[50%_15%] scale-[1.62] origin-center brightness-[0.94] contrast-[1.06]"
                />
                {/* Soft dark edge vignette keeping the face in the upper-middle crisp and clear */}
                <div
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,transparent_36%,rgba(10,10,10,0.52)_80%,rgba(10,10,10,0.82)_100%)]"
                  aria-hidden="true"
                />
              </div>
            </div>
          </motion.div>

          {/* Middle: About Me Copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col items-start"
          >
            <div className="flex items-center gap-3 mb-2.5 w-full">
              <span className="font-display font-semibold text-sm sm:text-base text-[#FF7A00] whitespace-nowrap">
                About Me
              </span>
              <span className="section-kicker-line-left w-28" aria-hidden="true" />
            </div>

            <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight text-white leading-[1.15] mb-5 [text-wrap:balance]">
              Turning Ideas into <span className="text-[#FF7A00]">Digital Reality</span>
            </h2>

            <p className="text-[#B8B8B8] text-[15px] sm:text-base leading-relaxed mb-7">
              I&apos;m Apurbo, a passionate AI Automation and Web Developer with a strong focus on building innovative, user-friendly web solutions. I love turning ideas into powerful digital experiences that make an impact.
            </p>

            <button
              type="button"
              onClick={() => onNavigate('portfolio')}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-gradient-to-r from-[#FF7A00] to-[#FF9A2E] text-[#0A0A0A] font-display font-semibold text-sm whitespace-nowrap shrink-0 hover:brightness-110 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-150 shadow-[0_0_24px_rgba(255,122,0,0.35)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white cursor-pointer"
            >
              <span>Know More About Me</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </motion.div>

          {/* Right: Stats Card with 3 Animated Count-Up Rows */}
          <motion.div
            ref={statsRef}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3"
          >
            <div className="rounded-[20px] bg-[#111111] border border-[#FF7A00]/30 p-7 space-y-6 shadow-[0_14px_40px_rgba(0,0,0,0.5)] hover:border-[#FF7A00]/55 hover:shadow-[0_14px_40px_rgba(255,122,0,0.14)] transition-all duration-200">
              {ABOUT_STATS.map((stat) => (
                <div key={stat.id} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#FF7A00]/12 border border-[#FF7A00]/25 flex items-center justify-center shrink-0">
                    {renderStatIcon(stat.id)}
                  </div>
                  <div>
                    <div className="font-display font-bold text-2xl sm:text-[28px] text-white leading-none">
                      <CountUpValue
                        target={stat.target}
                        suffix={stat.suffix}
                        start={statsVisible}
                      />
                    </div>
                    <p className="text-xs sm:text-sm text-[#B8B8B8] mt-1">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
