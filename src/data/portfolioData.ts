import { PROJECT_PREVIEW_ASSETS } from '../config/assets';

export type SectionId =
  | 'home'
  | 'about'
  | 'services'
  | 'portfolio'
  | 'skills'
  | 'testimonials'
  | 'contact';

export interface NavItem {
  id: SectionId;
  label: string;
}

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'skills', label: 'Skills' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'contact', label: 'Contact' },
];

export const CONTACT_INFO = {
  name: 'Apurbo Sarker',
  shortName: 'Apurbo',
  role: 'AI Automation & Web Development Expert',
  email: 'apurbosarker340@gmail.com',
  linkedin: 'https://www.linkedin.com/in/apurbo-sarker',
  github: 'https://github.com',
  whatsapp: 'https://wa.me/8801989174085',
  formspreeEndpoint: 'https://formspree.io/f/xaeobaqe',
} as const;

export type ProjectTypeOption =
  | 'AI Automation'
  | 'AI Chatbot Development'
  | 'n8n Workflow Automation'
  | 'AI Agent Development'
  | 'Business Website Development'
  | 'Landing Page Development'
  | 'Other';

export const PROJECT_TYPE_OPTIONS: ProjectTypeOption[] = [
  'AI Automation',
  'AI Chatbot Development',
  'n8n Workflow Automation',
  'AI Agent Development',
  'Business Website Development',
  'Landing Page Development',
  'Other',
];

export const BUDGET_OPTIONS = [
  'Under $100',
  '$100–$300',
  '$300–$500',
  '$500–$1,000',
  '$1,000+',
] as const;

export interface ServiceItem {
  id: 'web-development' | 'ai-automation' | 'ui-ux-design' | 'website-maintenance';
  title: string;
  description: string;
  inquiryPreset: ProjectTypeOption;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Modern, responsive and scalable websites.',
    inquiryPreset: 'Business Website Development',
  },
  {
    id: 'ai-automation',
    title: 'AI Automation',
    description: 'Smart solutions to automate your workflows.',
    inquiryPreset: 'AI Automation',
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    description: 'Beautiful and user-friendly designs.',
    inquiryPreset: 'Landing Page Development',
  },
  {
    id: 'website-maintenance',
    title: 'Website Maintenance',
    description: 'Keep your site secure and up-to-date.',
    inquiryPreset: 'Other',
  },
];

export interface AboutStatItem {
  id: string;
  target: number;
  suffix: string;
  label: string;
}

export const ABOUT_STATS: AboutStatItem[] = [
  { id: 'experience', target: 3, suffix: '+', label: 'Years Experience' },
  { id: 'projects', target: 50, suffix: '+', label: 'Projects Completed' },
  { id: 'satisfaction', target: 100, suffix: '%', label: 'Client Satisfaction' },
];

export type PortfolioCategory = 'All' | 'AI Automation' | 'Web Development';

export interface PortfolioProject {
  id: string;
  title: string;
  category: 'AI Automation' | 'Web Development';
  conceptLabel: 'Concept Project' | 'Demo Project';
  shortDescription: string;
  fullOverview: string;
  image: string;
  capabilities: string[];
  tools: string[];
  inquiryPreset: ProjectTypeOption;
}

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'ai-customer-support-assistant',
    title: 'AI Customer Support Assistant',
    category: 'AI Automation',
    conceptLabel: 'Concept Project',
    shortDescription:
      'An intelligent conversational support assistant built to resolve common customer inquiries, summarize tickets, and route complex issues.',
    fullOverview:
      'Designed as an end-to-end customer support concept, this AI assistant connects a structured knowledge base with automated ticket triage. It handles frequently asked questions around orders and onboarding while escalating nuanced requests with concise agent-ready summaries.',
    image: PROJECT_PREVIEW_ASSETS.aiCustomerSupport,
    capabilities: [
      'Context-aware multi-turn Q&A over business documentation',
      'Automated ticket categorization and priority routing',
      'Structured handoff summaries for human support teams',
    ],
    tools: ['AI Chatbot Architecture', 'Knowledge Base Retrieval', 'Webhook Routing'],
    inquiryPreset: 'AI Chatbot Development',
  },
  {
    id: 'smart-n8n-workflow-automation',
    title: 'Smart n8n Workflow Automation',
    category: 'AI Automation',
    conceptLabel: 'Concept Project',
    shortDescription:
      'A multi-step n8n automation pipeline that captures inbound leads, enriches records with AI, updates CRM fields, and triggers personalized emails.',
    fullOverview:
      'Built to eliminate manual copy-paste tasks between forms, spreadsheets, and email tools. When a new inquiry arrives, the n8n workflow validates inputs, uses an AI step to classify intent, syncs clean records into the CRM, and dispatches tailored follow-up messages.',
    image: PROJECT_PREVIEW_ASSETS.smartN8nWorkflow,
    capabilities: [
      'Instant webhook ingestion with structured payload validation',
      'AI-assisted lead qualification and intent tagging',
      'Automated CRM synchronization and email dispatch',
    ],
    tools: ['n8n Workflows', 'REST Webhooks', 'CRM & Email Automation'],
    inquiryPreset: 'n8n Workflow Automation',
  },
  {
    id: 'ai-business-assistant',
    title: 'AI Business Assistant',
    category: 'AI Automation',
    conceptLabel: 'Concept Project',
    shortDescription:
      'An internal AI agent workspace designed to organize daily operational tasks, qualify prospects, and draft clear executive summaries.',
    fullOverview:
      'Created for founders and lean teams managing high-volume operations. This concept assistant consolidates incoming requests, highlights priority follow-ups, and prepares structured action briefs so decision-makers spend less time sorting inbox clutter.',
    image: PROJECT_PREVIEW_ASSETS.aiBusinessAssistant,
    capabilities: [
      'Automated daily priority digest and task organization',
      'Lead pipeline enrichment and follow-up drafting',
      'Consistent structured outputs across business tools',
    ],
    tools: ['AI Agents', 'Business Process Automation', 'Lead Workflows'],
    inquiryPreset: 'AI Agent Development',
  },
  {
    id: 'modern-saas-business-website',
    title: 'Modern SaaS Business Website',
    category: 'Web Development',
    conceptLabel: 'Demo Project',
    shortDescription:
      'A high-conversion, responsive SaaS marketing website featuring crisp product storytelling, clean feature architecture, and fast navigation.',
    fullOverview:
      'A concept SaaS web experience tailored for B2B software startups. Focused on clear value proposition hierarchy, responsive layout grids across desktop and mobile, and intuitive calls-to-action that guide visitors smoothly toward product demos.',
    image: PROJECT_PREVIEW_ASSETS.modernSaasWebsite,
    capabilities: [
      'Conversion-oriented hero layout and clear value messaging',
      'Modular feature showcase built for responsive screens',
      'Clean semantic structure with fast interactive transitions',
    ],
    tools: ['React & TypeScript', 'Tailwind CSS', 'Responsive UI Architecture'],
    inquiryPreset: 'Business Website Development',
  },
  {
    id: 'premium-restaurant-website',
    title: 'Premium Restaurant Website',
    category: 'Web Development',
    conceptLabel: 'Demo Project',
    shortDescription:
      'An atmospheric fine-dining website concept combining dark editorial aesthetics, curated menu presentation, and seamless table inquiry flows.',
    fullOverview:
      'Designed to translate the ambiance of a modern upscale restaurant into a polished digital presence. Highlights signature dishes with high-contrast visual framing, organized tasting menus, and an effortless reservation inquiry experience on any device.',
    image: PROJECT_PREVIEW_ASSETS.premiumRestaurantWebsite,
    capabilities: [
      'Atmospheric dark editorial layout with strong visual hierarchy',
      'Interactive menu sections optimized for mobile and desktop',
      'Streamlined reservation and private event inquiry flow',
    ],
    tools: ['Modern Web Design', 'Landing Page Architecture', 'Mobile-First UI'],
    inquiryPreset: 'Landing Page Development',
  },
];

export interface SkillGroup {
  id: string;
  title: string;
  subtitle: string;
  skills: {
    name: string;
    detail: string;
  }[];
}

export const SKILLS_DATA: SkillGroup[] = [
  {
    id: 'ai-automation',
    title: 'AI Automation',
    subtitle: 'Designing reliable AI workflows and intelligent systems that reduce manual effort.',
    skills: [
      {
        name: 'AI Chatbots',
        detail: 'Custom conversational assistants for customer support, onboarding, and FAQ automation.',
      },
      {
        name: 'AI Agents',
        detail: 'Goal-oriented agents that classify inputs, summarize data, and assist daily operations.',
      },
      {
        name: 'n8n Workflow Automation',
        detail: 'Node-based multi-app workflows connecting webhooks, APIs, databases, and notifications.',
      },
      {
        name: 'Business Process Automation',
        detail: 'Streamlining repetitive back-office tasks into dependable automated pipelines.',
      },
      {
        name: 'Lead Generation Automation',
        detail: 'Automated lead capture, enrichment, routing, and timely email follow-up sequences.',
      },
    ],
  },
  {
    id: 'web-development',
    title: 'Web Development',
    subtitle: 'Building fast, modern, and responsive web experiences tailored to business goals.',
    skills: [
      {
        name: 'Responsive Website Development',
        detail: 'Fluid, mobile-first layouts engineered for desktop, laptop, tablet, and smartphone screens.',
      },
      {
        name: 'Landing Page Development',
        detail: 'Focused, high-clarity pages crafted to communicate value and encourage visitor inquiries.',
      },
      {
        name: 'Business Websites',
        detail: 'Credible, structured corporate and service websites built to strengthen brand trust.',
      },
      {
        name: 'Modern Website Design',
        detail: 'Clean typography, dark-luxury or brand-aligned visual systems, and smooth interactions.',
      },
      {
        name: 'SaaS Website Development',
        detail: 'Product-focused marketing sites that clearly present software capabilities and workflows.',
      },
    ],
  },
];

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
}

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 't1',
    quote:
      'Apurbo automated our lead intake and CRM follow-ups with n8n, saving our team hours every week while making our response time near instant.',
    author: 'Daniel Brooks',
    role: 'Operations Lead, B2B Consulting',
  },
  {
    id: 't2',
    quote:
      'Clean communication, sharp attention to visual polish, and a modern website that immediately elevated how prospects perceive our brand.',
    author: 'Nadia Rahman',
    role: 'Founder, Digital Studio',
  },
  {
    id: 't3',
    quote:
      'From AI chatbot workflow design to front-end execution, everything was delivered cleanly, documented, and easy for our team to manage.',
    author: 'Marcus Chen',
    role: 'Product Manager, SaaS Startup',
  },
];
