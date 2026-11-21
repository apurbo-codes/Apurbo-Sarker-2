import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { NAV_ITEMS, SectionId, CONTACT_INFO } from '../data/portfolioData';
import { BrandLogo } from './BrandLogo';

interface NavbarProps {
  activeSection: SectionId;
  onNavigate: (section: SectionId) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id: SectionId) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors duration-200 border-b ${
        scrolled
          ? 'bg-[#0A0A0A]/90 backdrop-blur-md border-white/[0.08]'
          : 'bg-[#0A0A0A]/75 backdrop-blur-md border-white/[0.06]'
      }`}
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-[72px] flex items-center justify-between gap-4 lg:gap-6">
        {/* Left: Orange Logo Icon + Apurbo Sarker */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('home');
          }}
          className="flex items-center gap-2.5 whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF7A00] rounded-lg py-1"
          aria-label={`${CONTACT_INFO.name} Home`}
        >
          <BrandLogo className="w-7 h-7 shrink-0" />
          <span className="font-display font-bold text-[18px] md:text-xl tracking-tight text-white whitespace-nowrap">
            {CONTACT_INFO.name}
          </span>
        </a>

        {/* Center: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-6" aria-label="Primary Navigation">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(item.id);
                }}
                className={`relative py-2 text-sm font-medium whitespace-nowrap shrink-0 transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF7A00] rounded ${
                  isActive ? 'text-[#FF7A00]' : 'text-[#D4D4D4] hover:text-white'
                }`}
              >
                {item.label}
                <span
                  className={`absolute left-0 right-0 bottom-0.5 h-[2px] rounded-full bg-[#FF7A00] transition-transform duration-200 origin-left ${
                    isActive ? 'scale-x-100' : 'scale-x-0'
                  }`}
                  aria-hidden="true"
                />
              </a>
            );
          })}
        </nav>

        {/* Right: Orange Pill CTA + Mobile Hamburger */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => handleLinkClick('contact')}
            className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#FF7A00] to-[#FF9A2E] text-[#0A0A0A] font-display font-semibold text-sm whitespace-nowrap shrink-0 hover:brightness-110 active:scale-[0.98] transition-all duration-150 shadow-[0_0_24px_rgba(255,122,0,0.35)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white cursor-pointer"
          >
            <span>Let&apos;s Talk</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg bg-[#111111] border border-white/10 text-white hover:border-[#FF7A00]/60 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF7A00] cursor-pointer"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0D0D0D] border-t border-white/[0.08] px-4 py-5 space-y-2">
          <nav className="flex flex-col space-y-1" aria-label="Mobile Navigation">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(item.id);
                  }}
                  className={`px-4 py-3 rounded-xl text-base font-medium transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-[#FF7A00]/12 text-[#FF7A00] border border-[#FF7A00]/25'
                      : 'text-[#B8B8B8] hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A00]" aria-hidden="true" />}
                </a>
              );
            })}
          </nav>
          <div className="pt-3 border-t border-white/[0.08]">
            <button
              type="button"
              onClick={() => handleLinkClick('contact')}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-[#FF7A00] to-[#FF9A2E] text-[#0A0A0A] font-display font-semibold text-sm hover:brightness-110 transition-all cursor-pointer"
            >
              <span>Let&apos;s Talk</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
