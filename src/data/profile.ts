export const profile = {
  name: "Shantanu Pramanik",
  firstName: "Shantanu",
  role: "Senior Software Engineer",
  company: "Zalando",
  headline: "Senior Full-Stack Engineer @ Zalando · ex-AWS · ex-Cisco",
  location: "Berlin, Germany",
  email: "srs.shaan@gmail.com",
  phone: "+49 170 9013174",
  phoneHref: "tel:+491709013174",
  availability: "Open to interesting conversations",
  heroTitle: ["I build products", "that ship fast", "and scale quietly."],
  heroIntro:
    "Full-stack engineer with 7+ years of turning messy problems into fast, reliable software — from a 0→1 health app with 15k monthly users to logistics systems moving fashion across Europe.",
  about: [
    "I'm a full-stack engineer based in Berlin. Right now I'm at Zalando, working on Transport & Logistics for one of Europe's leading fashion and lifestyle platforms. Before that I was an SDE II at AWS, a founding engineer at a health-tech startup, and spent years at ThoughtSpot and Cisco.",
    "I care about measurable outcomes: cutting a team's LLM bill by 85%, shipping app updates without waiting on store review, or building an internal tool that 90% of an org actually chooses to use. I like the whole stack, but I love the moment a product clicks for the person using it.",
    "Outside of work I write about engineering culture, mentor developers, and chase coastlines and lakes with a camera in my pocket.",
  ],
  education: {
    school: "Vellore Institute of Technology",
    degree: "B.Tech, Computer Science & Engineering",
    years: "2015 – 2019",
  },
  resumeUrl: "",
};

export const socials = [
  { label: "GitHub", href: "https://github.com/shantanu0323", icon: "github" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/shantanu-pramanik/", icon: "linkedin" },
  { label: "Medium", href: "https://medium.com/@shantanu0323", icon: "medium" },
  { label: "Instagram", href: "https://www.instagram.com/shantanu0323/", icon: "instagram" },
] as const;

export type SocialIcon = (typeof socials)[number]["icon"];

export const navLinks = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Work" },
  { id: "skills", label: "Stack" },
  { id: "writing", label: "Writing" },
  { id: "contact", label: "Contact" },
];

export const stats = [
  { value: 7, suffix: "+", label: "Years shipping software" },
  { value: 15, suffix: "k", label: "Monthly users on a 0→1 app" },
  { value: 85, suffix: "%", label: "LLM cost cut at ThoughtSpot" },
  { value: 5, suffix: "", label: "Companies, from startup to big tech" },
];

export const marquee = [
  "Zalando",
  "AWS",
  "Everheal",
  "ThoughtSpot",
  "Cisco",
  "React",
  "TypeScript",
  "Java",
  "Python",
  "React Native",
  "Spring Boot",
  "PySpark",
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  summary?: string;
  highlights: string[];
  tags: string[];
};

export const experience: Experience[] = [
  {
    company: "Zalando",
    role: "Senior Software Engineer",
    period: "Jun 2025 — Present",
    location: "Berlin, Germany",
    summary:
      "Building Transport & Logistics systems for one of Europe's leading fashion and lifestyle platforms.",
    highlights: [],
    tags: ["Logistics", "Full-stack", "Distributed systems"],
  },
  {
    company: "Amazon Web Services",
    role: "Software Development Engineer II",
    period: "Oct 2024 — Jun 2025",
    location: "Berlin, Germany",
    summary: "Built and operated services at AWS scale as an SDE II.",
    highlights: [],
    tags: ["AWS", "Java", "Cloud"],
  },
  {
    company: "Everheal",
    role: "Senior Founding Engineer",
    period: "Aug 2023 — Sep 2024",
    location: "Bengaluru, India",
    highlights: [
      "Built the React Native app, its AWS infrastructure and monitoring from the ground up — 15,000 monthly active users within 6 months of launch.",
      "Integrated EAS Update to ship over-the-air releases without store review, improving the release process by 82%.",
      "Rebuilt the iOS and Android notification engine, making notification navigation 50% more efficient.",
    ],
    tags: ["React Native", "Expo", "AWS", "0→1"],
  },
  {
    company: "ThoughtSpot",
    role: "Software Engineer II",
    period: "Nov 2021 — Jul 2023",
    location: "Bengaluru, India",
    highlights: [
      "Cut Natural Language Analysis spend by 85% ($4,250/month) by pairing classic ML with smart preprocessing before calling LLMs.",
      "Led a team of 3 building a React + Tailwind single-page app, reducing load times by 30%.",
      "Built a pipeline-health dashboard on Jenkins data that reduced recurring errors by 23%.",
      "Mentored junior developers, lifting delivery speed by 40%.",
    ],
    tags: ["React", "TypeScript", "ML", "Jest"],
  },
  {
    company: "Cisco",
    role: "Software Engineer I → II",
    period: "Jan 2019 — Nov 2021",
    location: "Bengaluru, India",
    highlights: [
      "Designed Feature Tracker, a router feature platform with 300+ fields — 90% internal adoption, 110+ daily users and a 95% drop in render time.",
      "Launched Ganesha, an ML assistant on Webex Teams with secure off-VPN access, boosting productivity by 40%.",
      "Automated vulnerability testing for router features, accelerating shipment timelines by 10%.",
      "Built STAR+ and iMentor, lifting framework adoption by 56% and onboarding efficiency by 30%.",
    ],
    tags: ["React", "Flask", "Python", "ML"],
  },
];

export type Project = {
  title: string;
  category: string;
  description: string;
  impact: string;
  tags: string[];
  href?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Everheal",
    category: "Health-tech · 0→1",
    description:
      "A patient-care mobile app built from scratch as founding engineer — app, infrastructure, monitoring and over-the-air releases.",
    impact: "15k MAU in 6 months",
    tags: ["React Native", "Expo EAS", "AWS"],
    featured: true,
  },
  {
    title: "Feature Tracker",
    category: "Internal platform · Cisco",
    description:
      "A queryable platform that tracks every feature shipped on Cisco routers, with template-based personalised dashboards.",
    impact: "90% adoption · 60% more productive",
    tags: ["React", "Bootstrap", "REST"],
    featured: true,
  },
  {
    title: "NL Analysis Cost Engine",
    category: "ML · ThoughtSpot",
    description:
      "Classic ML and smart preprocessing in front of LLM calls, so only the hard questions hit the expensive model.",
    impact: "−85% · $4,250 saved monthly",
    tags: ["Python", "ML", "LLMs"],
  },
  {
    title: "Ganesha",
    category: "ML assistant · Cisco",
    description:
      "A Webex Teams bot that compiles dozens of internal portals into one conversation, with secure off-VPN access via webhooks.",
    impact: "+40% productivity",
    tags: ["Python", "Flask", "Webhooks"],
  },
  {
    title: "Walk to the Destination",
    category: "Open source · Visualiser",
    description:
      "An interactive path-finding visualiser for Dijkstra, A*, greedy search and more — with maze generation for fun.",
    impact: "Live demo",
    tags: ["React", "Algorithms"],
    href: "https://shantanu0323.github.io/walk_to_the_destination/",
  },
  {
    title: "Blight",
    category: "Hackathon winner · HPE",
    description:
      "Emergency alerts and live victim tracking during natural calamities. Took 1st place at the HPE IoT Hackathon.",
    impact: "Rank 1 · HPE IoT Hackathon",
    tags: ["Android", "Flask", "Firebase"],
    href: "https://github.com/shantanu0323",
  },
];

export const skills = [
  {
    title: "Frontend",
    blurb: "Interfaces that feel fast and obvious.",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind", "HTML5 / CSS3", "Jest"],
  },
  {
    title: "Backend",
    blurb: "Services that stay boring in production.",
    items: ["Java", "Spring Boot", "Python", "Flask", "Django", "REST APIs", "Microservices"],
  },
  {
    title: "Mobile",
    blurb: "Native feel, web velocity.",
    items: ["React Native", "Expo / EAS", "iOS", "Swift", "Android"],
  },
  {
    title: "Cloud & Data",
    blurb: "Infrastructure and pipelines that scale.",
    items: ["AWS", "Azure", "PySpark", "SQL", "NoSQL", "Jenkins", "CI/CD", "Linux"],
  },
];

export const certifications = [
  "MCSE: Cloud Platform & Infrastructure",
  "MCSA: Cloud Platform",
  "Advanced React",
  "HackerRank Gold · Java, Python, Problem Solving",
];

export const articles = [
  {
    title: "The 3 Cs of a Great Employee",
    excerpt: "What really matters beyond your job description.",
    date: "Jul 2025",
    href: "https://www.linkedin.com/pulse/3-cs-great-employee-what-really-matters-beyond-your-job-pramanik-fcrqf",
  },
  {
    title: "How to Run Better Engineering Stand-ups",
    excerpt: "And actually make them useful — lessons from startups and big orgs.",
    date: "Jul 2025",
    href: "https://www.linkedin.com/pulse/how-run-better-engineering-stand-ups-actually-make-them-pramanik-6fmrf",
  },
  {
    title: "Handling Tech Debt Without Slowing the Team",
    excerpt: "Staring at tangled code and thinking “this needs a rewrite”? Read this first.",
    date: "Jun 2025",
    href: "https://www.linkedin.com/pulse/how-handle-tech-debt-without-slowing-team-down-shantanu-pramanik-nx3af",
  },
  {
    title: "Frontend ↔ Backend Tradeoffs No One Talks About",
    excerpt: "What full-stack engineers know that makes everyone's life easier.",
    date: "Jun 2025",
    href: "https://www.linkedin.com/pulse/frontend-backend-tradeoffs-one-talks-shantanu-pramanik-bvocf",
  },
  {
    title: "How I Structure My Week as a Senior Engineer",
    excerpt: "Finding focus between meetings, code and collaboration.",
    date: "Jun 2025",
    href: "https://www.linkedin.com/pulse/how-i-structure-my-work-week-senior-engineer-shantanu-pramanik-k3ccf",
  },
  {
    title: "Bridging the Product ↔ Engineering Gap",
    excerpt: "Great products come from working with product teams, not around them.",
    date: "May 2025",
    href: "https://www.linkedin.com/pulse/bridging-gap-what-one-tells-you-product-engineering-shantanu-pramanik-s7kvc",
  },
];

export const testimonials = [
  {
    quote:
      "Amazing design and super intuitive usage with the new Feature Tracker tool! Allowing users to create their own queries was genius. All the PMs in my group are using it in their weekly core teams. I'm bragging about this tool to everyone!",
    name: "TJ Johndrew",
    title: "Engineering Leader, Cisco",
  },
  {
    quote:
      "Without your immense talent, dedication and can-do attitude these tools could not have taken the shape they have today. Your front-end skills are second to none.",
    name: "Daxesh Patwa",
    title: "Engineering Leader, Cisco",
  },
  {
    quote:
      "You were very receptive in listening to the need, then went through all the steps needed to make it happen. With a few more features it will be useful to the entire XE community.",
    name: "Raj Shanbhag",
    title: "Engineering Program Manager, Cisco",
  },
  {
    quote:
      "Thanks Shantanu — you made STAR simple to adopt across the testbed. Exceptional contribution.",
    name: "Senthil Arasu",
    title: "Director of Engineering, Cisco",
  },
  {
    quote:
      "Deadline-oriented, innovative and always ready to put all his energy into getting the job done. He has an in-depth understanding of modern technologies and always gives his 100%.",
    name: "Classmate & collaborator",
    title: "Vellore Institute of Technology",
  },
];
