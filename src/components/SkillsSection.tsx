import React from 'react';
import { Bot, Code2 } from 'lucide-react';
import { SKILLS_DATA } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="relative py-20 lg:py-24 bg-[#0A0A0A] border-t border-white/[0.06]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Kicker + Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-4 mb-3">
            <span className="section-kicker-line w-14 sm:w-20" aria-hidden="true" />
            <span className="font-display font-semibold text-sm sm:text-base text-[#FF7900]">
              Core Capabilities
            </span>
            <span className="section-kicker-line w-14 sm:w-20" aria-hidden="true" />
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight text-white">
            My Skills &amp; Expertise
          </h2>
        </div>

        {/* Two Structured Skill Category Panels (No fabricated percentages) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {SKILLS_DATA.map((group) => {
            const Icon = group.id === 'ai-automation' ? Bot : Code2;

            return (
              <div
                key={group.id}
                className="rounded-2xl bg-[#111111] border border-white/[0.08] p-7 sm:p-9 shadow-[0_12px_36px_rgba(0,0,0,0.4)]"
              >
                <div className="flex items-center gap-3.5 mb-3">
                  <div className="w-11 h-11 rounded-xl bg-[#FF7900]/12 border border-[#FF7900]/25 flex items-center justify-center text-[#FF7900] shrink-0">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-white">{group.title}</h3>
                </div>

                <p className="text-sm sm:text-[15px] text-[#B8B8B8] leading-relaxed mb-7 pb-6 border-b border-white/[0.08]">
                  {group.subtitle}
                </p>

                <div className="space-y-5">
                  {group.skills.map((skill, idx) => {
                    const num = String(idx + 1).padStart(2, '0');
                    return (
                      <div
                        key={skill.name}
                        className="group flex items-start gap-4 pb-4 border-b border-white/[0.05] last:border-b-0 last:pb-0"
                      >
                        <span className="font-display font-bold text-sm text-[#FF7900] tabular-nums pt-0.5 shrink-0">
                          {num}.
                        </span>
                        <div>
                          <h4 className="font-display font-semibold text-base text-white group-hover:text-[#FF9A24] transition-colors">
                            {skill.name}
                          </h4>
                          <p className="text-sm text-[#B8B8B8] leading-relaxed mt-1">
                            {skill.detail}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
