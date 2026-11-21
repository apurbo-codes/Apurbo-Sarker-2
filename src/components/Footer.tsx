import React from 'react';
import { Linkedin, Mail } from 'lucide-react';
import {
  CONTACT_INFO,
  NAV_ITEMS,
  ProjectTypeOption,
  SectionId,
} from '../data/portfolioData';
import { BrandLogo } from './BrandLogo';

interface FooterProps {
  onNavigate: (section: SectionId) => void;
  onInquireService: (projectType: ProjectTypeOption) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onInquireService }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] border-t border-white/[0.08] py-14">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/[0.07]">
          {/* Brand Summary */}
          <div className="lg:col-span-5 space-y-4">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('home');
              }}
              className="inline-flex items-center gap-2.5"
            >
              <BrandLogo className="w-7 h-7 shrink-0" />
              <span className="font-display font-bold text-[18px] md:text-xl text-white whitespace-nowrap">
                {CONTACT_INFO.name}
              </span>
            </a>

            <p className="text-sm text-[#B8B8B8] leading-relaxed max-w-sm">
              AI Automation Specialist &amp; Web Developer building intelligent AI-powered workflows and modern, responsive websites for growing businesses.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="font-display font-semibold text-sm text-white mb-4">Navigation</h3>
            <ul className="space-y-2.5">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(item.id);
                    }}
                    className="text-sm text-[#B8B8B8] hover:text-[#FF7900] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Links */}
          <div className="lg:col-span-2">
            <h3 className="font-display font-semibold text-sm text-white mb-4">Services</h3>
            <ul className="space-y-2.5">
              <li>
                <button
                  type="button"
                  onClick={() => onInquireService('AI Automation')}
                  className="text-sm text-[#B8B8B8] hover:text-[#FF7900] transition-colors cursor-pointer text-left"
                >
                  AI Automation
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onInquireService('Business Website Development')}
                  className="text-sm text-[#B8B8B8] hover:text-[#FF7900] transition-colors cursor-pointer text-left"
                >
                  Web Development
                </button>
              </li>
            </ul>
          </div>

          {/* Direct Contact */}
          <div className="lg:col-span-3">
            <h3 className="font-display font-semibold text-sm text-white mb-4">Connect</h3>
            <div className="space-y-3">
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-center gap-2.5 text-sm text-[#B8B8B8] hover:text-[#FF7900] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#FF7900] shrink-0" aria-hidden="true" />
                <span className="truncate">{CONTACT_INFO.email}</span>
              </a>

              <a
                href={CONTACT_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-[#B8B8B8] hover:text-[#FF7900] transition-colors"
              >
                <Linkedin className="w-4 h-4 text-[#FF7900] shrink-0" aria-hidden="true" />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8C8C8C]">
          <p>&copy; {currentYear} {CONTACT_INFO.name}. All rights reserved.</p>
          <p>AI Automation Specialist &amp; Web Developer</p>
        </div>
      </div>
    </footer>
  );
};
