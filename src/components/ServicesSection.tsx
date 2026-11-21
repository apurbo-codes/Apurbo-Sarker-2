import React from 'react';
import { ArrowRight, Code2, Palette, Settings } from 'lucide-react';
import { motion } from 'motion/react';
import { ProjectTypeOption, SERVICES_DATA, ServiceItem } from '../data/portfolioData';

interface ServicesSectionProps {
  onInquireService: (projectType: ProjectTypeOption) => void;
}

const AiChipIcon: React.FC<{ className?: string }> = ({ className = 'w-9 h-9' }) => (
  <svg
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <rect x="8" y="8" width="20" height="20" rx="4" stroke="currentColor" strokeWidth="2.2" />
    <path
      d="M14 4V8M18 4V8M22 4V8M14 28V32M18 28V32M22 28V32M4 14H8M4 18H8M4 22H8M28 14H32M28 18H32M28 22H32"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
    <text
      x="18"
      y="21.5"
      textAnchor="middle"
      fill="currentColor"
      fontSize="9.5"
      fontWeight="700"
      fontFamily="Poppins, Inter, sans-serif"
    >
      AI
    </text>
  </svg>
);

const renderServiceIcon = (id: ServiceItem['id']) => {
  switch (id) {
    case 'web-development':
      return <Code2 className="w-9 h-9 text-[#FF7A00]" strokeWidth={2.2} aria-hidden="true" />;
    case 'ai-automation':
      return <AiChipIcon className="w-9 h-9 text-[#FF7A00]" />;
    case 'ui-ux-design':
      return <Palette className="w-9 h-9 text-[#FF7A00]" strokeWidth={2} aria-hidden="true" />;
    case 'website-maintenance':
      return <Settings className="w-9 h-9 text-[#FF7A00]" strokeWidth={2} aria-hidden="true" />;
  }
};

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onInquireService }) => {
  return (
    <section id="services" className="relative py-20 lg:py-24 bg-[#0A0A0A]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <div className="flex items-center justify-center gap-4 mb-2.5">
            <span className="section-kicker-line w-14 sm:w-20" aria-hidden="true" />
            <span className="font-display font-semibold text-sm sm:text-base text-[#FF7A00]">
              My Services
            </span>
            <span className="section-kicker-line w-14 sm:w-20" aria-hidden="true" />
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight text-white">
            What I Do
          </h2>
        </motion.div>

        {/* 4 Cards in One Row (2x2 on tablet 768px+, 1 col on mobile <768px) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES_DATA.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => onInquireService(service.inquiryPreset)}
              className="group relative rounded-[18px] bg-[#111111] border border-white/[0.08] hover:border-[#FF7A00]/55 p-6 flex flex-col justify-between min-h-[210px] hover:-translate-y-1.5 hover:shadow-[0_14px_36px_rgba(255,122,0,0.14)] transition-all duration-200 cursor-pointer"
            >
              <div>
                <div className="mb-4">{renderServiceIcon(service.id)}</div>
                <h3 className="font-display font-bold text-lg text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-[#B8B8B8] leading-relaxed pr-8">
                  {service.description}
                </p>
              </div>

              <div className="flex justify-end mt-4">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onInquireService(service.inquiryPreset);
                  }}
                  aria-label={`Inquire about ${service.title}`}
                  className="w-8 h-8 rounded-full bg-gradient-to-r from-[#FF7A00] to-[#FF9A2E] text-[#0A0A0A] flex items-center justify-center group-hover:scale-110 transition-transform duration-150 shadow-[0_0_16px_rgba(255,122,0,0.35)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white cursor-pointer"
                >
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
