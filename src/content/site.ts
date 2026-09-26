export const site = {
  name: "Connor Brennan",
  givenName: "Connor",
  familyName: "Brennan",
  shortName: "CB",
  role: "AI Full Stack Software Engineer",
  location: "Cali, Colombia",
  coordinates: "3.4516° N  76.5320° W",
  email: "connor.brennan42@outlook.com",
  phone: "+57 602 345 6789",
  years: 7,
  editionYear: 2026,
  focus: "Production AI",
  summary:
    "AI Full Stack Software Engineer with 7 years of experience building scalable SaaS platforms, backend services, APIs, and AI-powered systems. Builds reliable systems that improve performance, automate workflows, and support production applications at scale.",
  coverLead:
    "Builds production AI systems, APIs, and SaaS platforms that hold under load.",
} as const;

export const metrics = [
  { value: "07", suffix: " yrs", label: "Building production software", note: "2018 — present" },
  { value: "10k", suffix: "+", label: "Monthly active users served", note: "La Haus · GPT-4 systems" },
  { value: "60", suffix: "%", label: "Operational efficiency gained", note: "LLM workflow automation" },
  { value: "40", suffix: "%", label: "Latency reduced in production", note: "Cache · stream · prompt" },
  { value: "35", suffix: "%", label: "Infrastructure cost lowered", note: "Architecture + optimization" },
] as const;

export const experience = [
  {
    id: "la-haus",
    plate: "02.1",
    role: "AI Full Stack Software Engineer",
    company: "La Haus",
    period: "2025 — Present",
    place: "Cali, Colombia",
    stack: ["GPT-4", "FastAPI", "Next.js", "TypeScript", "GCP", "LangChain", "LangGraph", "Pinecone", "Go", "PostgreSQL"],
    notes: [
      "Architected, deployed, and monitored production AI systems using GPT-4, FastAPI, Next.js, TypeScript, and GCP, serving 10,000+ monthly active users.",
      "Designed RAG-based knowledge systems and multi-agent workflows using embeddings, LangChain, LangGraph, and Pinecone for enterprise search and automation, incorporating supervised fine-tuning where appropriate.",
      "Integrated LLM capabilities into production products, eliminating manual workflows and improving operational efficiency by approximately 60%.",
      "Built scalable backend services with Go, FastAPI, Node.js, and PostgreSQL to support high-volume distributed API traffic.",
      "Improved system performance through caching, prompt optimization, and streaming architectures, reducing latency by approximately 40% and infrastructure costs by approximately 35%.",
    ],
  },
  {
    id: "psl",
    plate: "02.2",
    role: "Senior Full Stack Software Engineer",
    company: "PSL Corp",
    period: "2022 — 2025",
    place: "Cali, Colombia",
    stack: ["React", "Next.js", "Node.js", "Express", "PostgreSQL", "GraphQL", "MySQL", "CI/CD"],
    notes: [
      "Led development of enterprise SaaS applications using React, Next.js, Node.js, Express, and PostgreSQL, delivering performant frontend experiences and scalable backend services.",
      "Designed REST and GraphQL APIs supporting core platform features and third-party integrations.",
      "Built real-time analytics systems for large-scale operational data processing and visualization.",
      "Improved production performance by approximately 30% through MySQL and PostgreSQL database optimization and backend refactoring.",
      "Introduced CI/CD pipelines, automated testing, and software engineering best practices across teams to improve deployment reliability.",
      "Mentored junior engineers and contributed to cross-functional product delivery.",
    ],
  },
  {
    id: "evervault",
    plate: "02.3",
    role: "Software Engineer",
    company: "Evervault",
    period: "2018 — 2022",
    place: "Dublin, Ireland",
    stack: ["Python", "Django", "Flask", "Node.js", "React"],
    notes: [
      "Developed full-stack applications using Python (Django, Flask), Node.js, and React for internal and customer-facing systems.",
      "Built and maintained APIs supporting payment workflows and enterprise integrations.",
      "Improved system reliability through monitoring, testing, and debugging enhancements.",
      "Collaborated in Agile teams with product, design, and engineering stakeholders.",
      "Contributed to performance improvements across frontend and backend systems.",
    ],
  },
] as const;

export const skillGroups = [
  {
    id: "ai",
    title: "AI / LLM Systems",
    legend: "A",
    items: [
      "Python",
      "OpenAI API",
      "Claude API",
      "Gemini API",
      "LLMs",
      "Prompt Engineering",
      "RAG",
      "Supervised Fine-Tuning",
      "LangChain",
      "LangGraph",
      "LlamaIndex",
      "Vector Databases",
      "Embeddings",
      "Semantic Search",
      "AI Agents",
      "MCP",
      "Function Calling",
      "AI Automation",
    ],
  },
  {
    id: "backend",
    title: "Backend",
    legend: "B",
    items: [
      "FastAPI",
      "Node.js",
      "Express",
      "Django",
      "Flask",
      "Go",
      "REST APIs",
      "GraphQL",
      "Microservices",
      "WebSockets",
      "System Design",
    ],
  },
  {
    id: "frontend",
    title: "Frontend",
    legend: "C",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "UI Performance Optimization",
      "Responsive Design",
    ],
  },
  {
    id: "infra",
    title: "Data & Infrastructure",
    legend: "D",
    items: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Redis",
      "Pinecone",
      "Weaviate",
      "ChromaDB",
      "AWS",
      "GCP",
      "Docker",
      "Kubernetes",
      "CI/CD",
      "GitHub Actions",
      "Observability",
    ],
  },
] as const;

export const education = {
  plate: "04",
  degree: "M.Sc., Computer Science — Intelligent Systems (AI)",
  school: "Trinity College Dublin",
  period: "2014 — 2018",
  place: "College Green, Dublin 2, Ireland",
} as const;

export const coverFacts = [
  {
    label: "Tenure",
    value: `${String(site.years).padStart(2, "0")} years`,
  },
  {
    label: "Now",
    value: experience[0].company,
  },
  {
    label: "Focus",
    value: site.focus,
  },
] as const;

export const plates = [
  { id: "cover", index: "00", label: "Cover" },
  { id: "signal", index: "01", label: "Signal" },
  { id: "deployments", index: "02", label: "Deployments" },
  { id: "instrumentation", index: "03", label: "Instrumentation" },
  { id: "origin", index: "04", label: "Origin" },
  { id: "correspondence", index: "05", label: "Dispatch" },
] as const;
