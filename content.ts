/**
 * ============================================================
 *  SITE CONTENT — edit this one file to update the whole site.
 * ============================================================
 *  Anything in [SQUARE BRACKETS] or marked "PLACEHOLDER" is
 *  example text. Replace it with your real details.
 *  Links set to "#" are placeholders; set a real URL or "" to hide.
 */

export const site = {
  name: "Brian Gibson",
  role: "Web Developer",
  // One-line value proposition shown in the hero.
  tagline: "Fast, affordable websites for small businesses.",
  intro:
    "I design and build clean, mobile-friendly websites that load in a blink and help local businesses get found, get trusted, and get calls.",
  // Small status pill above the hero heading. Set to "" to hide.
  availability: "Available for new projects",
  // Used for the browser tab title and search engine description.
  seoTitle: "Brian Gibson — Web Developer for Small Businesses",
  seoDescription:
    "Brian Gibson builds fast, affordable, accessible static websites for small businesses.",
};

export const contact = {
  email: "Dex.dev.tech@outlook.com",
  // PLACEHOLDER — optional phone (shown only if not empty), e.g. "(555) 555-0123"
  phone: "",
  location: "Arizona",
  links: [
    // PLACEHOLDER URLs — links left as "#" are hidden on the site until you add a real URL.
    { label: "GitHub", href: "https://github.com/Bagibson93-star", icon: "github" },
    { label: "LinkedIn", href: "#", icon: "linkedin" }, // PLACEHOLDER — add your LinkedIn URL
  ] as { label: string; href: string; icon: "github" | "linkedin" | "x" | "globe" }[],
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string; // "" or omitted hides the button
  repoUrl?: string; // "" or omitted hides the button
  image?: string; // screenshot in /public, e.g. "/projects/my-site.jpg"
  imageAlt?: string;
  example?: boolean; // shows an "Example" badge — remove when it's a real project
};

export const projects: Project[] = [
  {
    title: "Rekt Drones",
    description:
      "Website for a DJI and FPV drone repair shop in Mesa, AZ: flat-rate pricing breakdown, a four-step repair process, online repair requests and repair tracking.",
    tags: ["HTML & CSS", "JavaScript", "Responsive images", "Local SEO"],
    liveUrl: "https://www.rektdrones.com",
    repoUrl: "", // optional — add a public repo URL to show a "Code" button
    image: "/projects/rektdrones.jpg",
    imageAlt: "Rekt Drones homepage with the headline “Broken drone? Get it fixed in Mesa, AZ.”",
  },
  {
    title: "AZ Agentic",
    description:
      "Landing page for an AI receptionist service for Arizona small businesses, with a live chat demo, a step-by-step setup timeline and clear package pricing.",
    tags: ["React", "Vite", "Tailwind CSS", "AI chat"],
    liveUrl: "https://az-agentic.com",
    repoUrl: "",
    image: "/projects/az-agentic.jpg",
    imageAlt: "AZ Agentic homepage with the headline “You're on a roof. A customer is calling.”",
  },
  // Template for a new project — copy, uncomment and fill in:
  // {
  //   title: "Example Project (placeholder)",
  //   description:
  //     "PLACEHOLDER. Replace this card with your next project, or delete it from content.ts. Add a screenshot to /public/projects and set the links.",
  //   tags: ["Next.js", "TypeScript"],
  //   liveUrl: "#",
  //   repoUrl: "#",
  //   example: true,
  // },
];

export type Service = {
  name: string;
  price: string; // set a price like "$499", or "" to show "Get a quote"
  priceNote: string; // shown next to a price, e.g. "one-time"
  description: string;
  features: string[];
  featured?: boolean;
};

export const services: Service[] = [
  {
    name: "Starter",
    price: "", // e.g. "$499" — leave "" to show "Get a quote"
    priceNote: "one-time",
    description: "A polished one-page site to get your business online fast.",
    features: [
      "Single-page responsive website",
      "Contact and tap-to-call buttons",
      "Basic search engine setup",
      "Free hosting setup",
    ],
  },
  {
    name: "Business",
    price: "", // e.g. "$499" — leave "" to show "Get a quote"
    priceNote: "one-time",
    description: "A multi-page site for businesses ready to look established.",
    features: [
      "Up to 5 pages",
      "Custom design to match your brand",
      "Google Maps and reviews links",
      "Accessibility and speed checks",
      "Connect your own domain",
    ],
    featured: true,
  },
  {
    name: "Care Plan",
    price: "", // e.g. "$499" — leave "" to show "Get a quote"
    priceNote: "per month",
    description: "Ongoing updates so your site never goes stale.",
    features: [
      "Text and photo updates",
      "Monthly uptime and speed check",
      "Priority email support",
    ],
  },
];

export const about = {
  heading: "Websites that work as hard as you do",
  // PLACEHOLDER — rewrite in your own words.
  paragraphs: [
    "I'm Brian, a web developer who builds simple, fast websites for small businesses. My recent work includes the website for Rekt Drones, a drone repair shop in Mesa, Arizona, and the landing page for AZ Agentic. I use modern tools like Next.js, React and AI-assisted coding to ship quality work quickly and keep costs low.",
    "I also use a screen reader every day, so accessibility isn't an afterthought in my work. Every site I build is designed to be usable by everyone, which also means better search rankings and happier customers.",
  ],
  highlights: [
    { label: "Static sites", detail: "Fast, secure and cheap to host" },
    { label: "Accessible", detail: "Built and tested with a screen reader" },
    { label: "Mobile-first", detail: "Looks great on every phone" },
  ],
};

export const steps = [
  { step: "1", title: "Quick call", detail: "Tell me about your business and what you need." },
  { step: "2", title: "Design & build", detail: "I build your site and share a preview link." },
  { step: "3", title: "Launch", detail: "We go live on your domain, usually within days." },
];

/** Full-screen cinematic hero background. */
export const hero = {
  image: "/hero.jpg", // put your photo in /public/hero.jpg (or change this path)
  // Describe the photo for screen reader users.
  imageAlt: "A rain-soaked Japanese street at night with glowing lanterns, a classic sports car, and a glass tower under the moon",
  // Optional looping background video, e.g. "/hero.mp4". "" = photo only.
  video: "",
  eyebrow: "Web developer · Small business websites",
  primaryCta: { label: "See my work", href: "#projects" },
  secondaryCta: { label: "View packages", href: "#services" },
};
