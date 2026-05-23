export const navLinks = [
  { label: "Services", href: "/#services" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Process", href: "/#process" },
  { label: "Contact", href: "/#contact" }
];

export const company = {
  name: "Tessera Studio",
  email: "contact@tesseraweb.in",
  phone: "+91 98765 43210",
  location: "Serving brands worldwide",
  calendarUrl: "mailto:contact@tesseraweb.in?subject=Book%20a%20Discovery%20Call"
};

export const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/tesserastudio.in/" }
];

export const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms", href: "/terms" }
];

export const industries = [
  "Real Estate",
  "F&B",
  "SaaS",
  "E-commerce",
  "Healthcare",
  "Education",
  "Hospitality",
  "Creators"
];

export const services = [
  {
    title: "Website Design & Development",
    eyebrow: "Conversion websites",
    description:
      "High-performance websites, landing pages and e-commerce experiences built to look premium and convert cleanly.",
    features: ["Business websites", "Landing pages", "E-commerce", "Custom development"],
    icon: "browser",
    href: "/website-development-bangalore"
  },
  {
    title: "Digital Marketing",
    eyebrow: "Demand engines",
    description:
      "Campaign strategy, lead funnels and content systems for brands that need predictable growth, not random spikes.",
    features: ["Social Ads", "Lead generation", "Social growth", "Funnel creation"],
    icon: "target",
    href: "/lead-generation-systems"
  },
  {
    title: "Branding & Design",
    eyebrow: "Identity systems",
    description:
      "Distinctive visual identities, social systems and creative direction that make your brand easier to remember.",
    features: ["Logo design", "Brand identity", "Social creatives", "Visual systems"],
    icon: "diamond",
    href: "/branding-services"
  },
  {
    title: "AI Automation",
    eyebrow: "Intelligent Systems",
    description:
      "AI receptionists, follow-up workflows and CRM automations that remove manual work from your growth machine.",
    features: ["AI receptionists", "Lead follow-up", "CRM workflows", "Process automation"],
    icon: "network",
    badge: "NEW",
    href: "/ai-automation-services"
  }
];

export const caseStudies = [
  {
    slug: "urban-nest-realty",
    title: "Real Estate Co. Website",
    category: "Web Design",
    metric: "+62% qualified inquiries",
    visual: "architecture",
    image: "/images/portfolio/tessera-studio-website-development-chittoor.png",
    client: "Urban Nest Realty (Real Estate)",
    summary:
      "A premium real estate website designed in Andhra Pradesh to showcase heritage, amenities, portfolio, digital brochure, and WhatsApp enquiry flow.",
    overview:
      "Urban Nest needed a site that matched the trust level of its inventory. We redesigned the positioning, built a cleaner property discovery experience and tightened the inquiry flow for higher-quality lead capture.",
    services: ["Positioning", "UX design", "Web development", "Lead optimization"],
    timeline: "3 weeks",
    stats: [
      { label: "Qualified inquiries", value: "+62%" },
      { label: "Average session time", value: "+41%" },
      { label: "Launch timeline", value: "21 days" }
    ],
    challenge:
      "The previous site looked generic, buried property highlights and forced serious buyers through a clumsy contact process.",
    solution:
      "We introduced editorial property layouts, clearer agent trust cues, faster browsing and a tighter CTA rhythm across listing and landing pages.",
    outcome:
      "The business launched with a sharper premium feel and a noticeably better lead mix, with more complete briefs and fewer low-intent inquiries."
  },
  {
    slug: "bloom-table-campaign",
    title: "Cafe Marketing Campaign",
    category: "Digital Marketing",
    metric: "3.8x campaign ROAS",
    visual: "campaign",
    image: "/images/portfolio/tessera-studio-cafe-marketing-chittoor.png",
    client: "Bloom Table Cafe (Restaurant & F&B)",
    summary:
      "A localized marketing campaign and responsive café site built to drive weekday traffic and repeat footfall in South India.",
    overview:
      "Bloom Table had solid footfall but weak campaign structure. We built a creative system, localized ad messaging and a tighter offer ladder for repeat visits.",
    services: ["Campaign strategy", "Creative direction", "Paid social", "Offer funnel"],
    timeline: "4 weeks",
    stats: [
      { label: "Campaign ROAS", value: "3.8x" },
      { label: "Weekday traffic", value: "+27%" },
      { label: "Returning customers", value: "+19%" }
    ],
    challenge:
      "The cafe had a likeable brand but inconsistent offers, low message-to-offer clarity and ad creative that blended into the feed.",
    solution:
      "We restructured the promotions around clear intent buckets, designed punchier creatives and connected campaign timing to in-store behavior.",
    outcome:
      "The campaign gave the team a repeatable acquisition system instead of one-off boosts, with healthier weekday demand and better audience retention."
  },
  {
    slug: "orbitstack-launch",
    title: "Startup Landing Page",
    category: "Web + Branding",
    metric: "41% demo conversion lift",
    visual: "saas",
    image: "/images/portfolio/tessera-studio-saas-branding-and-design.png",
    client: "OrbitStack (Startup / SaaS)",
    summary:
      "A conversion-focused landing page and modern brand system built for clear product positioning and demo lead capture.",
    overview:
      "OrbitStack had a capable product and a fuzzy story. We clarified the value prop, designed a cleaner interface narrative and rebuilt the landing page around demo conversion.",
    services: ["Messaging", "Brand system", "Landing page design", "Front-end build"],
    timeline: "2.5 weeks",
    stats: [
      { label: "Demo conversion lift", value: "+41%" },
      { label: "Bounce reduction", value: "-23%" },
      { label: "Paid readiness", value: "Launch-ready" }
    ],
    challenge:
      "The product page was feature-heavy, visually flat and asked too much interpretation from a cold visitor.",
    solution:
      "We reframed the narrative around outcomes, introduced a more distinct visual system and turned the interface into proof instead of decoration.",
    outcome:
      "The team launched with clearer positioning, stronger campaign readiness and materially better conversion from visitor to booked demo."
  },
  {
    slug: "always-on-ai-receptionist",
    title: "AI Receptionist System",
    category: "AI Automation",
    metric: "24/7 lead response",
    visual: "chat",
    image: "/images/portfolio/tessera-studio-ai-automation-services.png",
    client: "Northline Clinics (Healthcare)",
    summary:
      "An automated AI receptionist and qualified WhatsApp follow-up workflow to handle clinic enquiries 24/7.",
    overview:
      "Northline was losing time to manual follow-up and missed evening inquiries. We designed an AI receptionist flow that could respond instantly and escalate cleanly.",
    services: ["Conversation design", "Automation logic", "CRM workflow", "Ops handoff"],
    timeline: "2 weeks",
    stats: [
      { label: "Lead response coverage", value: "24/7" },
      { label: "Manual follow-up load", value: "-58%" },
      { label: "Qualified handoffs", value: "+34%" }
    ],
    challenge:
      "The team was juggling inbound requests across channels, which meant slow response times and incomplete context for follow-up.",
    solution:
      "We built an AI triage layer with clear qualification rules, a human escalation path and CRM logging that made each lead easier to act on.",
    outcome:
      "The workflow gave the sales and ops team their evenings back while improving response speed and preserving a polished first-touch experience."
  },
  {
    slug: "lattice-brand-system",
    title: "Brand Identity Project",
    category: "Branding",
    metric: "Launch-ready visual system",
    visual: "identity",
    image: "/images/portfolio/tessera-studio-brand-identity-system.png",
    client: "Lattice Atelier (Branding)",
    summary:
      "Visual identity system built to establish a premium design brand from day one across web, social, and print assets.",
    overview:
      "Lattice Atelier needed a brand system with enough character to feel memorable but enough discipline to scale across channels without getting noisy.",
    services: ["Identity strategy", "Logo system", "Typography", "Launch toolkit"],
    timeline: "3 weeks",
    stats: [
      { label: "Primary brand assets", value: "28" },
      { label: "Launch toolkit", value: "Ready in 3 weeks" },
      { label: "Social system", value: "12 templates" }
    ],
    challenge:
      "The brand was entering a crowded space with no visual equity and needed to look credible immediately.",
    solution:
      "We built a tile-inspired identity, expressive typography rules and a content-ready asset kit that kept the brand consistent without feeling rigid.",
    outcome:
      "The business launched with a cohesive premium presence and a system the internal team could actually use day to day."
  }
];

export const differentiators = [
  "Premium design: every pixel considered",
  "Fast execution: 2-4 week delivery",
  "Growth-focused: built to convert",
  "AI-first approach: automation-native",
  "End-to-end execution: strategy to scale"
];

export const stats = [
  { value: 15, suffix: "+", label: "Brands scaled", decimals: 0 },
  { value: 3.2, suffix: "x", label: "Average ROI", decimals: 1 },
  { value: 14, suffix: "-day", label: "Average delivery", decimals: 0 }
];

export const processSteps = [
  {
    title: "Discover",
    description: "Understand your business, goals, audience and growth bottlenecks."
  },
  {
    title: "Strategize",
    description: "Build the roadmap, messaging architecture and execution system."
  },
  {
    title: "Build",
    description: "Design, develop, write, automate and integrate the moving parts."
  },
  {
    title: "Launch",
    description: "QA the experience, deploy the assets and make the rollout clean."
  },
  {
    title: "Scale",
    description: "Optimize campaigns, improve conversion and expand automation."
  }
];

export const testimonials = [
  {
    quote:
      "Tessera Studio turned a scattered brand into a premium acquisition machine. The website paid for itself faster than we expected.",
    name: "Aarav Mehta",
    company: "Urban Nest Realty",
    initials: "AM"
  },
  {
    quote:
      "They gave us the rare combination: tasteful design, fast execution and a marketing system that actually brought leads in.",
    name: "Nisha Rao",
    company: "Bloom Table Cafe",
    initials: "NR"
  },
  {
    quote:
      "The AI follow-up workflow changed our sales team overnight. No more missed inquiries, no more manual chasing.",
    name: "Dev Shah",
    company: "OrbitStack",
    initials: "DS"
  }
];

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}
