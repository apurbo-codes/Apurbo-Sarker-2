import React from 'react';
import { Quote } from 'lucide-react';
import { motion } from 'motion/react';
import { TESTIMONIALS_DATA } from '../data/portfolioData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="relative py-20 lg:py-24 bg-[#0A0A0A] border-t border-white/[0.06]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <div className="flex items-center justify-center gap-4 mb-2.5">
            <span className="section-kicker-line w-14 sm:w-20" aria-hidden="true" />
            <span className="font-display font-semibold text-sm sm:text-base text-[#FF7A00]">
              Testimonials
            </span>
            <span className="section-kicker-line w-14 sm:w-20" aria-hidden="true" />
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight text-white">
            What Clients Say
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS_DATA.map((item, idx) => (
            <motion.blockquote
              key={item.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-[18px] bg-[#111111] border border-white/[0.08] hover:border-[#FF7A00]/45 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(255,122,0,0.12)] transition-all duration-200 p-7 flex flex-col justify-between"
            >
              <div>
                <Quote className="w-7 h-7 text-[#FF7A00] mb-4 opacity-90" aria-hidden="true" />
                <p className="text-[#B8B8B8] text-sm sm:text-[15px] leading-relaxed mb-6">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>
              <footer className="pt-4 border-t border-white/[0.07]">
                <p className="font-display font-semibold text-sm text-white">{item.author}</p>
                <p className="text-xs text-[#8C8C8C] mt-0.5">{item.role}</p>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};
