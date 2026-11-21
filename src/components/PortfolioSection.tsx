import React, { useEffect, useState } from 'react';
import { ArrowRight, Check, ExternalLink, Layers, X } from 'lucide-react';
import {
  PORTFOLIO_PROJECTS,
  PortfolioCategory,
  PortfolioProject,
  ProjectTypeOption,
} from '../data/portfolioData';

interface PortfolioSectionProps {
  onInquireProject: (projectType: ProjectTypeOption) => void;
}

const CATEGORIES: PortfolioCategory[] = ['All', 'AI Automation', 'Web Development'];

interface ProjectPreviewImageProps {
  src: string;
  alt: string;
  title: string;
}

const ProjectPreviewImage: React.FC<ProjectPreviewImageProps> = ({ src, alt, title }) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#181818] via-[#111111] to-[#080808] p-6 text-center">
        <Layers className="w-8 h-8 text-[#FF7900] mb-3" aria-hidden="true" />
        <p className="font-display font-semibold text-sm text-white">{title}</p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      loading="lazy"
      decoding="async"
      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
    />
  );
};

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onInquireProject }) => {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>('All');
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  const filteredProjects =
    activeCategory === 'All'
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((project) => project.category === activeCategory);

  useEffect(() => {
    if (!selectedProject) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject]);

  return (
    <section id="portfolio" className="relative overflow-hidden py-20 lg:py-24 bg-[#0A0A0A] border-t border-white/[0.06]">
      {/* Subtle orange dotted-pattern decorations in header corners */}
      <div
        className="pointer-events-none hidden sm:block absolute top-8 left-4 lg:left-10 w-28 h-24 orange-dot-pattern opacity-65"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none hidden sm:block absolute top-8 right-4 lg:right-10 w-28 h-24 orange-dot-pattern opacity-65"
        aria-hidden="true"
      />

      {/* Diagonal orange glow in bottom-left and subtle top glow */}
      <div
        className="pointer-events-none absolute -bottom-16 -left-16 w-[380px] h-[280px] rotate-[28deg] bg-gradient-to-tr from-[#FF7A00]/22 via-[#FF9A2E]/10 to-transparent blur-2xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-10 left-0 w-[340px] h-[1.5px] -rotate-[24deg] origin-left bg-gradient-to-r from-[#FF7A00]/60 to-transparent shadow-[0_0_18px_rgba(255,122,0,0.45)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-12 left-1/2 -translate-x-1/2 w-[520px] h-[240px] rounded-full bg-[#FF7A00]/[0.06] blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Kicker + Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="flex items-center justify-center gap-4 mb-2.5">
            <span className="section-kicker-line w-14 sm:w-20" aria-hidden="true" />
            <span className="font-display font-semibold text-sm sm:text-base text-[#FF7A00]">
              My Portfolio
            </span>
            <span className="section-kicker-line w-14 sm:w-20" aria-hidden="true" />
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight text-white mb-4">
            Explore My Latest Work
          </h2>
          <p className="text-sm sm:text-base text-[#B8B8B8]">
            Selected concept and demo projects illustrating AI automation workflows and modern web architecture.
          </p>
        </div>

        {/* Interactive Category Filter Controls */}
        <div className="flex justify-center mb-12">
          <div
            className="inline-flex flex-wrap items-center justify-center gap-1.5 p-1.5 rounded-xl bg-[#111111] border border-white/[0.08]"
            role="tablist"
            aria-label="Filter projects by category"
          >
            {CATEGORIES.map((category) => {
              const isSelected = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap shrink-0 transition-all duration-150 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF7900] ${
                    isSelected
                      ? 'bg-[#FF7900] text-[#080808] font-semibold shadow-sm'
                      : 'text-[#B8B8B8] hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group rounded-2xl bg-[#111111] border border-white/[0.08] hover:border-[#FF7900]/45 overflow-hidden flex flex-col justify-between transition-all duration-200 shadow-[0_12px_36px_rgba(0,0,0,0.4)]"
            >
              <div>
                {/* Preview Image */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#0D0D0D] border-b border-white/[0.06]">
                  <ProjectPreviewImage
                    src={project.image}
                    alt={`${project.title} preview`}
                    title={project.title}
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#111111]/70 via-transparent to-transparent"
                    aria-hidden="true"
                  />
                </div>

                {/* Card Body */}
                <div className="p-6">
                  {/* Clean unboxed metadata kicker (Zero-Pill Discipline) */}
                  <div className="flex items-center gap-2 text-xs font-medium mb-2.5">
                    <span className="text-[#FF7900]">{project.conceptLabel}</span>
                    <span className="text-[#666666]" aria-hidden="true">
                      &middot;
                    </span>
                    <span className="text-[#B8B8B8]">{project.category}</span>
                  </div>

                  <h3 className="font-display font-bold text-xl text-white mb-2.5 group-hover:text-[#FF9A24] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-[#B8B8B8] leading-relaxed">
                    {project.shortDescription}
                  </p>
                </div>
              </div>

              {/* Card Action */}
              <div className="px-6 pb-6 pt-2">
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-2 text-sm font-display font-semibold text-white hover:text-[#FF7900] transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF7900] rounded py-1"
                >
                  <span>View Project</span>
                  <ArrowRight
                    className="w-4 h-4 text-[#FF7900] transition-transform duration-150 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Lightbox / Project Detail Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#111111] border border-white/[0.12] shadow-[0_24px_80px_rgba(0,0,0,0.9)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              aria-label="Close project details"
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-[#080808]/90 border border-white/15 text-white hover:border-[#FF7900] hover:text-[#FF7900] flex items-center justify-center transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF7900]"
            >
              <X className="w-5 h-5" aria-hidden="true" />
            </button>

            {/* Preview Header */}
            <div className="relative aspect-[16/10] w-full bg-[#080808] border-b border-white/[0.08] overflow-hidden">
              <ProjectPreviewImage
                src={selectedProject.image}
                alt={`${selectedProject.title} detailed view`}
                title={selectedProject.title}
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent"
                aria-hidden="true"
              />
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-medium mb-2">
                  <span className="text-[#FF7900]">{selectedProject.conceptLabel}</span>
                  <span className="text-[#666666]" aria-hidden="true">
                    &middot;
                  </span>
                  <span className="text-[#B8B8B8]">{selectedProject.category}</span>
                </div>

                <h3
                  id="modal-project-title"
                  className="font-display font-bold text-2xl sm:text-3xl text-white"
                >
                  {selectedProject.title}
                </h3>
              </div>

              <p className="text-[#B8B8B8] text-sm sm:text-base leading-relaxed">
                {selectedProject.fullOverview}
              </p>

              <div className="pt-4 border-t border-white/[0.08]">
                <h4 className="font-display font-semibold text-sm text-white mb-3">
                  Key Concept Capabilities
                </h4>
                <ul className="space-y-2.5">
                  {selectedProject.capabilities.map((cap) => (
                    <li key={cap} className="flex items-start gap-2.5 text-sm text-[#E5E5E5]">
                      <Check className="w-4 h-4 text-[#FF7900] mt-0.5 shrink-0" aria-hidden="true" />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-white/[0.08]">
                <h4 className="font-display font-semibold text-sm text-white mb-2">
                  Focus Areas
                </h4>
                <p className="text-xs sm:text-sm text-[#B8B8B8]">
                  {selectedProject.tools.join(' · ')}
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-[#8C8C8C]">
                  {selectedProject.conceptLabel} showcase — built to demonstrate capabilities.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    const preset = selectedProject.inquiryPreset;
                    setSelectedProject(null);
                    onInquireProject(preset);
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#FF7900] to-[#FF9A24] text-[#080808] font-display font-semibold text-sm hover:brightness-110 transition-all cursor-pointer"
                >
                  <span>Build Something Similar</span>
                  <ExternalLink className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
