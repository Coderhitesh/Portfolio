export const profile = {
  name: "Hitesh Yadav",
  role: "Full Stack Developer",
  location: "Delhi, India",
  email: "hiteshy468@gmail.com",
  phone: "+91 9079036042",
  github: "https://github.com/Coderhitesh",
  linkedin: "https://linkedin.com/in/coderhitesh",
  summary:
    "I build scalable, secure and high-performance web applications on the MERN stack. My specialty is the unglamorous, hard part of the web — payment webhooks, booking race conditions, video pipelines and APIs that stay fast at 10k+ users.",
};

export const stats = [
  { value: "3+", label: "years shipping production code" },
  { value: "10k+", label: "users served by LMS & CRM modules" },
  { value: "40%", label: "API latency cut via Mongo indexing" },
  { value: "30+", label: "web apps & themes delivered" },
];

export const stack = [
  {
    layer: "Frontend",
    note: "What users touch",
    items: ["React.js", "Next.js", "Tailwind CSS", "Responsive UI"],
  },
  {
    layer: "Backend",
    note: "Where the logic lives",
    items: ["Node.js", "Express", "REST APIs", "MVC Architecture", "WebSockets"],
  },
  {
    layer: "Data",
    note: "Source of truth",
    items: ["MongoDB", "Indexing & Aggregation", "Mongoose"],
  },
  {
    layer: "DevOps & Cloud",
    note: "Keeping it alive",
    items: ["AWS", "Docker", "Nginx", "PM2", "Cloudinary", "Firebase", "Git"],
  },
  {
    layer: "Integrations",
    note: "Money & identity",
    items: ["Razorpay", "Stripe", "PhonePe", "OAuth", "JWT"],
  },
];

export const experience = [
  {
    company: "Hover Business Services LLP",
    role: "MERN Stack Developer",
    period: "2025 — Present",
    current: true,
    points: [
      "Designed and developed scalable LMS & CRM modules serving 10k+ users.",
      "Implemented REST APIs and optimized MongoDB indexes, reducing API latency by 40%.",
      "Built reusable React components, improving development speed by 25%.",
      "Integrated Razorpay & Stripe payment gateways with secure webhook handling.",
    ],
  },
  {
    company: "Digi India Solution",
    role: "Full Stack Developer",
    period: "Feb 2024 — Apr 2025",
    points: [
      "Built and maintained 10+ web applications on Node.js, improving operational efficiency by 20%.",
      "Improved MongoDB performance, reducing query execution time by 35%.",
      "Collaborated closely with UI/UX teams to reach a 95% customer satisfaction rate.",
      "Reduced system downtime by 30% through effective debugging and optimization.",
    ],
  },
  {
    company: "DGMT, New Delhi",
    role: "Full Stack Developer",
    period: "Dec 2022 — Feb 2024",
    points: [
      "Developed custom websites with core HTML & CSS, boosting system performance by 25%.",
      "Designed and customized 20+ WordPress themes, increasing client customization by 50%.",
      "Built mobile-first, responsive interfaces that increased mobile traffic by 30%.",
    ],
  },
];

export const projects = [
  {
    id: "01",
    name: "PrintHutt",
    tagline: "Custom Product E-commerce Platform",
    url: "https://printhutt.com",
    stack: ["Next.js", "MongoDB", "AWS S3", "PhonePe"],
    description:
      "A full-fledged e-commerce platform for customizable products — live product preview, secure payments, order tracking and an admin dashboard for product & order management.",
    highlight: "Live product preview",
  },
  {
    id: "02",
    name: "PanandAcademy",
    tagline: "Online Learning Platform (LMS)",
    url: "https://panandacademy.com",
    stack: ["React.js", "Node.js", "MongoDB", "Razorpay", "AWS"],
    description:
      "A scalable LMS with video streaming, test series, a referral system, role-based access control (Admin / Teacher / Student) and secure online payments.",
    highlight: "Role-based access · video streaming",
  },
  {
    id: "03",
    name: "SRTutorsBureau",
    tagline: "Tutor Booking Platform",
    url: "https://srtutorsbureau.com",
    stack: ["React.js", "Node.js", "MongoDB"],
    description:
      "A location-based tutor search and booking platform — tutor profiles, ratings, reviews and an online booking system connecting students with qualified tutors.",
    highlight: "Location-based search",
  },
  {
    id: "04",
    name: "Omm Documentation",
    tagline: "Digital Notarization & Legal Docs",
    url: "https://ommdocumentation.com",
    stack: ["Next.js", "Node.js", "MongoDB"],
    description:
      "Fully online notarization and e-signature services for legal, business and immigration documents — secure digital verification, compliant with Indian legal standards.",
    highlight: "E-signature & verification",
  },
  {
    id: "05",
    name: "DessoBuild",
    tagline: "Construction Consultation Platform",
    url: "https://dessobuild.com",
    stack: ["React.js", "Node.js", "Express", "MongoDB"],
    description:
      "Corporate site for a real-estate & construction firm with CMS-based services and SEO structure — plus real-time live chat and voice consultations with per-minute billing.",
    highlight: "Per-minute billed voice calls",
  },
];

export const education = {
  school: "Rajeev Gandhi Institute of Technology & Management, New Delhi",
  degree: "Bachelor of Computer Applications (BCA)",
  period: "Aug 2020 — Sept 2023",
};

export const certification = "MERN Stack Development — AIT, Sec 6, Gurgaon";

export const marqueeItems = [
  "REST APIs",
  "Payment Webhooks",
  "MongoDB Indexing",
  "WebSockets",
  "Next.js",
  "Node.js",
  "Razorpay · Stripe · PhonePe",
  "AWS · Docker · PM2",
  "OAuth · JWT",
  "LMS · E-commerce · Booking",
];
