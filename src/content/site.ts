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
  {
    id: "tenure",
    index: "01.1",
    target: 7,
    format: "pad2",
    suffix: " yrs",
    label: "Building production software",
    note: "2018 — present",
  },
  {
    id: "users",
    index: "01.2",
    target: 10,
    format: "plain",
    suffix: "k+",
    label: "Monthly active users served",
    note: "La Haus · GPT-4 systems",
  },
  {
    id: "efficiency",
    index: "01.3",
    target: 60,
    format: "plain",
    suffix: "%",
    label: "Operational efficiency gained",
    note: "LLM workflow automation",
  },
  {
    id: "latency",
    index: "01.4",
    target: 40,
    format: "plain",
    suffix: "%",
    label: "Latency reduced in production",
    note: "Cache · stream · prompt",
  },
  {
    id: "cost",
    index: "01.5",
    target: 35,
    format: "plain",
    suffix: "%",
    label: "Infrastructure cost lowered",
    note: "Architecture + optimization",
  },
] as const;

export const signalIntro =
  "Production outcomes measured across deployed AI systems, platform services, and infrastructure work." as const;

export const deploymentsIntro =
  "Three stations. Cali and Dublin. SaaS platforms, payment APIs, RAG pipelines, and production LLM systems." as const;

export const experience = [
  {
    id: "la-haus",
    plate: "02.1",
    current: true,
    role: "AI Full Stack Software Engineer",
    company: "La Haus",
    period: "2025 — Present",
    place: "Cali, Colombia",
    station: "Active station",
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
    current: false,
    role: "Senior Full Stack Software Engineer",
    company: "PSL Corp",
    period: "2022 — 2025",
    place: "Cali, Colombia",
    station: "Prior station",
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
    current: false,
    role: "Software Engineer",
    company: "Evervault",
    period: "2018 — 2022",
    place: "Dublin, Ireland",
    station: "Origin station",
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

export const instrumentationIntro =
  "Classified the way a map legend is classified: by system, not by buzzword. Filter by key or search the working stack." as const;

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

export const caseStudies = {
  "la-haus": {
    slug: "la-haus",
    plate: "02.1 / Case",
    company: "La Haus",
    role: "AI Full Stack Software Engineer",
    period: "2025 — Present",
    place: "Cali, Colombia",
    title: "Production AI on the survey line",
    lead:
      "A case plate for the systems behind enterprise search, multi-agent automation, and LLM features shipped to production at La Haus.",
    image: {
      src: "/images/signal-lattice.png",
      alt: "Abstract neural constellation lattice with copper and mint connections.",
    },
    problem: {
      heading: "Problem",
      body:
        "Operational teams still ran manual knowledge lookup and workflow steps that did not scale with product demand. Enterprise search and automation needed reliable LLM systems in production — not demos — with measurable impact on efficiency, latency, and cost.",
    },
    system: {
      heading: "System",
      body:
        "Architected, deployed, and monitored production AI using GPT-4, FastAPI, Next.js, TypeScript, and GCP. Designed RAG knowledge systems and multi-agent workflows with embeddings, LangChain, LangGraph, and Pinecone, with supervised fine-tuning where it earned its keep. Backend traffic ran on Go, FastAPI, Node.js, and PostgreSQL with caching, prompt optimization, and streaming.",
      stack: [
        "GPT-4",
        "FastAPI",
        "Next.js",
        "TypeScript",
        "GCP",
        "LangChain",
        "LangGraph",
        "Pinecone",
        "Go",
        "PostgreSQL",
      ],
    },
    outcomes: {
      heading: "Outcome",
      items: [
        { value: "10k+", label: "Monthly active users on production AI systems" },
        { value: "~60%", label: "Operational efficiency gained by removing manual workflows" },
        { value: "~40%", label: "Latency reduced through cache, stream, and prompt work" },
        { value: "~35%", label: "Infrastructure cost lowered after architecture passes" },
      ],
    },
    backHref: "/#deployments",
    backLabel: "Return to Deployments",
  },
  psl: {
    slug: "psl",
    plate: "02.2 / Case",
    company: "PSL Corp",
    role: "Senior Full Stack Software Engineer",
    period: "2022 — 2025",
    place: "Cali, Colombia",
    title: "SaaS platforms on the prior station",
    lead:
      "A case plate for enterprise SaaS, GraphQL APIs, real-time analytics, and delivery practices built at PSL Corp.",
    image: {
      src: "/images/copper-traces.png",
      alt: "Abstract copper circuit traces on a dark survey field.",
    },
    problem: {
      heading: "Problem",
      body:
        "Enterprise SaaS products needed performant frontends, scalable backend services, and reliable delivery across teams. Platform features and third-party integrations required REST and GraphQL APIs that could hold under operational load, with analytics that made large-scale data usable.",
    },
    system: {
      heading: "System",
      body:
        "Led development of enterprise SaaS applications with React, Next.js, Node.js, Express, and PostgreSQL. Designed REST and GraphQL APIs for core platform features and integrations. Built real-time analytics for large-scale operational data. Introduced CI/CD, automated testing, and engineering practices that improved deployment reliability, and mentored junior engineers through cross-functional delivery.",
      stack: [
        "React",
        "Next.js",
        "Node.js",
        "Express",
        "PostgreSQL",
        "GraphQL",
        "MySQL",
        "CI/CD",
      ],
    },
    outcomes: {
      heading: "Outcome",
      items: [
        { value: "~30%", label: "Production performance gained through database and backend passes" },
        { value: "API", label: "REST and GraphQL surfaces for platform and third-party work" },
        { value: "Live", label: "Real-time analytics for large-scale operational data" },
        { value: "CI/CD", label: "Pipelines, testing, and practices that steadied releases" },
      ],
    },
    backHref: "/#deployments",
    backLabel: "Return to Deployments",
  },
  evervault: {
    slug: "evervault",
    plate: "02.3 / Case",
    company: "Evervault",
    role: "Software Engineer",
    period: "2018 — 2022",
    place: "Dublin, Ireland",
    title: "Payment systems at the origin station",
    lead:
      "A case plate for full-stack applications, payment workflow APIs, and reliability work shipped from Dublin at Evervault.",
    image: {
      src: "/images/andes-geometry.png",
      alt: "Abstract Andean geometric field in copper and ink.",
    },
    problem: {
      heading: "Problem",
      body:
        "Internal and customer-facing systems needed reliable full-stack applications and APIs that could support payment workflows and enterprise integrations. Reliability depended on monitoring, testing, and debugging that kept services stable as the product surface grew.",
    },
    system: {
      heading: "System",
      body:
        "Developed full-stack applications with Python (Django, Flask), Node.js, and React for internal and customer-facing systems. Built and maintained APIs for payment workflows and enterprise integrations. Strengthened reliability through monitoring, testing, and debugging, and contributed performance improvements across frontend and backend while collaborating in Agile teams with product, design, and engineering.",
      stack: ["Python", "Django", "Flask", "Node.js", "React"],
    },
    outcomes: {
      heading: "Outcome",
      items: [
        { value: "Pay", label: "APIs supporting payment workflows and enterprise integrations" },
        { value: "Full", label: "Stack delivery across Python, Node.js, and React systems" },
        { value: "Ops", label: "Reliability gains from monitoring, testing, and debugging" },
        { value: "Team", label: "Agile delivery with product, design, and engineering" },
      ],
    },
    backHref: "/#deployments",
    backLabel: "Return to Deployments",
  },
} as const;

export type CaseSlug = keyof typeof caseStudies;
