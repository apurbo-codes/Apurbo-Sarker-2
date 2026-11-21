import React, { useEffect, useState } from 'react';
import {
  AlertCircle,
  Check,
  CheckCircle2,
  Copy,
  Linkedin,
  Loader2,
  Mail,
  Send,
} from 'lucide-react';
import {
  BUDGET_OPTIONS,
  CONTACT_INFO,
  PROJECT_TYPE_OPTIONS,
  ProjectTypeOption,
} from '../data/portfolioData';

interface ContactSectionProps {
  preselectedProjectType: ProjectTypeOption | '';
}

interface FormState {
  fullName: string;
  email: string;
  projectType: string;
  estimatedBudget: string;
  projectDetails: string;
}

const INITIAL_FORM_STATE: FormState = {
  fullName: '',
  email: '',
  projectType: '',
  estimatedBudget: '',
  projectDetails: '',
};

export const ContactSection: React.FC<ContactSectionProps> = ({ preselectedProjectType }) => {
  const [formData, setFormData] = useState<FormState>(INITIAL_FORM_STATE);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    if (preselectedProjectType) {
      setFormData((prev) => ({ ...prev, projectType: preselectedProjectType }));
    }
  }, [preselectedProjectType]);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_INFO.email);
      setCopiedEmail(true);
      window.setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      // Clipboard API fallback not needed when mailto link is adjacent
    }
  };

  const validateForm = (): string | null => {
    if (!formData.fullName.trim()) {
      return 'Please enter your full name.';
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailPattern.test(formData.email.trim())) {
      return 'Please enter a valid email address.';
    }
    if (!formData.projectType) {
      return 'Please select a project type.';
    }
    if (!formData.projectDetails.trim() || formData.projectDetails.trim().length < 10) {
      return 'Please share a brief description of your project (at least 10 characters).';
    }
    return null;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Prevent duplicate submissions
    if (isSubmitting) return;

    const validationError = validateForm();
    if (validationError) {
      setSubmitStatus('error');
      setErrorMessage(validationError);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch(CONTACT_INFO.formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.fullName.trim(),
          email: formData.email.trim(),
          projectType: formData.projectType,
          estimatedBudget: formData.estimatedBudget || 'Not specified',
          projectDetails: formData.projectDetails.trim(),
          _subject: `Portfolio Inquiry: ${formData.projectType} — ${formData.fullName.trim()}`,
        }),
      });

      if (!response.ok) {
        let serverError = 'Unable to send your inquiry right now. Please try again or email directly.';
        try {
          const data = await response.json();
          if (data?.errors && Array.isArray(data.errors) && data.errors.length > 0) {
            serverError = data.errors.map((err: { message?: string }) => err.message).join(', ');
          }
        } catch {
          // Use default fallback message
        }
        setSubmitStatus('error');
        setErrorMessage(serverError);
        return;
      }

      // Show success only after a verified successful response and reset form
      setSubmitStatus('success');
      setFormData(INITIAL_FORM_STATE);
    } catch {
      setSubmitStatus('error');
      setErrorMessage(
        'Network error while submitting your inquiry. Please check your connection or email apurbosarker340@gmail.com directly.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-20 lg:py-24 bg-[#0A0A0A] border-t border-white/[0.06]">
      <div
        className="pointer-events-none absolute bottom-0 right-0 w-[460px] h-[460px] rounded-full bg-[#FF7A00]/[0.07] blur-[140px]"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Kicker + Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-4 mb-3">
            <span className="section-kicker-line w-14 sm:w-20" aria-hidden="true" />
            <span className="font-display font-semibold text-sm sm:text-base text-[#FF7900]">
              Contact
            </span>
            <span className="section-kicker-line w-14 sm:w-20" aria-hidden="true" />
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight text-white mb-4 [text-wrap:balance]">
            Let&apos;s Build Something Great Together
          </h2>
          <p className="text-[#B8B8B8] text-base leading-relaxed">
            Have a project in mind? Let&apos;s discuss how AI automation and modern web development can help your business.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Panel: Direct Contact Channels */}
          <div className="lg:col-span-5 space-y-5">
            <div className="rounded-2xl bg-[#111111] border border-white/[0.08] p-7 shadow-[0_12px_36px_rgba(0,0,0,0.4)]">
              <h3 className="font-display font-bold text-xl text-white mb-2">
                Direct Contact
              </h3>
              <p className="text-sm text-[#B8B8B8] leading-relaxed mb-6">
                Prefer reaching out directly? Send an email or connect on LinkedIn to start a conversation about your goals.
              </p>

              <div className="space-y-4">
                {/* Email Card */}
                <div className="rounded-xl bg-[#0A0A0A] border border-white/[0.07] p-4 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-10 h-10 rounded-lg bg-[#FF7900]/12 border border-[#FF7900]/25 flex items-center justify-center text-[#FF7900] shrink-0">
                      <Mail className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-[#8C8C8C]">Email</p>
                      <a
                        href={`mailto:${CONTACT_INFO.email}`}
                        className="text-sm font-medium text-white hover:text-[#FF7900] transition-colors truncate block"
                      >
                        {CONTACT_INFO.email}
                      </a>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    aria-label="Copy email address"
                    className="w-9 h-9 rounded-lg bg-[#161616] border border-white/10 hover:border-[#FF7900]/60 flex items-center justify-center text-[#B8B8B8] hover:text-white transition-colors shrink-0 cursor-pointer"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-[#FF7900]" aria-hidden="true" />
                    ) : (
                      <Copy className="w-4 h-4" aria-hidden="true" />
                    )}
                  </button>
                </div>

                {/* LinkedIn Card */}
                <a
                  href={CONTACT_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-[#0A0A0A] border border-white/[0.07] hover:border-[#FF7900]/50 hover:shadow-[0_8px_28px_rgba(255,121,0,0.14)] p-4 flex items-center gap-3.5 transition-all duration-200 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#FF7900]/12 border border-[#FF7900]/25 flex items-center justify-center text-[#FF7900] shrink-0">
                    <Linkedin className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-[#8C8C8C]">LinkedIn</p>
                    <p className="text-sm font-medium text-white group-hover:text-[#FF7900] transition-colors truncate">
                      linkedin.com/in/apurbo-sarker
                    </p>
                  </div>
                </a>

                {/* WhatsApp Card */}
                <a
                  href="https://wa.me/8801989174085"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat with Apurbo Sarker on WhatsApp"
                  className="rounded-xl bg-[#0A0A0A] border border-white/[0.07] hover:border-[#FF7900]/50 hover:shadow-[0_8px_28px_rgba(255,121,0,0.14)] p-4 flex items-center gap-3.5 transition-all duration-200 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#FF7900]/12 border border-[#FF7900]/25 flex items-center justify-center text-[#FF7900] shrink-0">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.9"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5"
                      aria-hidden="true"
                    >
                      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                      <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-[#8C8C8C]">WhatsApp</p>
                    <p className="text-sm font-medium text-white group-hover:text-[#FF7900] transition-colors truncate">
                      +880 1989-174085
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Right Panel: Formspree Project Inquiry Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-2xl bg-[#111111] border border-white/[0.08] p-7 sm:p-9 shadow-[0_12px_36px_rgba(0,0,0,0.4)] space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-white mb-2">
                    Full Name <span className="text-[#FF7900]">*</span>
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData((prev) => ({ ...prev, fullName: e.target.value }))}
                    placeholder="John Carter"
                    className="w-full px-4 py-3 rounded-xl bg-[#080808] border border-white/[0.12] text-white placeholder-[#6E6E6E] text-sm focus:outline-none focus:border-[#FF7900] focus:ring-1 focus:ring-[#FF7900] transition-colors"
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                    Email Address <span className="text-[#FF7900]">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                    placeholder="john@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#080808] border border-white/[0.12] text-white placeholder-[#6E6E6E] text-sm focus:outline-none focus:border-[#FF7900] focus:ring-1 focus:ring-[#FF7900] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Project Type */}
                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-white mb-2">
                    Project Type <span className="text-[#FF7900]">*</span>
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    required
                    value={formData.projectType}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, projectType: e.target.value }))
                    }
                    className="w-full px-4 py-3 rounded-xl bg-[#080808] border border-white/[0.12] text-white text-sm focus:outline-none focus:border-[#FF7900] focus:ring-1 focus:ring-[#FF7900] transition-colors"
                  >
                    <option value="" disabled className="text-[#6E6E6E]">
                      Select a project type
                    </option>
                    {PROJECT_TYPE_OPTIONS.map((option) => (
                      <option key={option} value={option} className="bg-[#111111] text-white">
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Estimated Budget (Optional) */}
                <div>
                  <label
                    htmlFor="estimatedBudget"
                    className="block text-sm font-medium text-white mb-2"
                  >
                    Estimated Budget <span className="text-[#8C8C8C] font-normal">(Optional)</span>
                  </label>
                  <select
                    id="estimatedBudget"
                    name="estimatedBudget"
                    value={formData.estimatedBudget}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, estimatedBudget: e.target.value }))
                    }
                    className="w-full px-4 py-3 rounded-xl bg-[#080808] border border-white/[0.12] text-white text-sm focus:outline-none focus:border-[#FF7900] focus:ring-1 focus:ring-[#FF7900] transition-colors"
                  >
                    <option value="" className="text-[#6E6E6E]">
                      Select budget range
                    </option>
                    {BUDGET_OPTIONS.map((option) => (
                      <option key={option} value={option} className="bg-[#111111] text-white">
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Project Details */}
              <div>
                <label
                  htmlFor="projectDetails"
                  className="block text-sm font-medium text-white mb-2"
                >
                  Project Details <span className="text-[#FF7900]">*</span>
                </label>
                <textarea
                  id="projectDetails"
                  name="projectDetails"
                  required
                  rows={5}
                  value={formData.projectDetails}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, projectDetails: e.target.value }))
                  }
                  placeholder="Tell me about your business goals, workflow challenges, or website vision..."
                  className="w-full px-4 py-3 rounded-xl bg-[#080808] border border-white/[0.12] text-white placeholder-[#6E6E6E] text-sm focus:outline-none focus:border-[#FF7900] focus:ring-1 focus:ring-[#FF7900] transition-colors resize-y"
                />
              </div>

              {/* Status Feedback Banners */}
              {submitStatus === 'success' && (
                <div
                  role="status"
                  className="rounded-xl bg-emerald-500/10 border border-emerald-500/30 p-4 flex items-start gap-3 text-emerald-300 text-sm"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-white">Inquiry Sent Successfully</p>
                    <p className="text-emerald-200/90 mt-0.5">
                      Thank you for reaching out. Apurbo will review your project details and respond shortly.
                    </p>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div
                  role="alert"
                  className="rounded-xl bg-red-500/10 border border-red-500/30 p-4 flex items-start gap-3 text-red-200 text-sm"
                >
                  <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-white">Could Not Submit Inquiry</p>
                    <p className="text-red-200/90 mt-0.5">{errorMessage}</p>
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <div className="pt-1">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#FF7900] to-[#FF9A24] text-[#080808] font-display font-semibold text-sm sm:text-base hover:brightness-110 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-150 shadow-[0_8px_26px_rgba(255,121,0,0.28)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
                      <span>Sending Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Project Inquiry</span>
                      <Send className="w-4 h-4" aria-hidden="true" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
