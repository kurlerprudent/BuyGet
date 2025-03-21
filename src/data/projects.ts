// data/projects.ts

export type Project = {
  id: number;
  slug: string;
  name: string;
  description: string;
  category: string;
  bgImage: string;
  caseStudy: {
    challenges: string;
    solutions: string;
    outcomes: string;
  };
};

export const projects: Project[] = [
  {
    id: 1,
    slug: "shsweb",
    name: "SHSWEB",
    description: "Technological solutions for senior high schools.",
    category: "Web",
    bgImage: "/assets/shsweb.jpg",
    caseStudy: {
      challenges: "Schools needed modern digital tools to support learning and communication.",
      solutions: "We built interactive web applications tailored for educational environments.",
      outcomes: "Improved engagement and streamlined communication between teachers and students.",
    },
  },
  {
    id: 2,
    slug: "softica",
    name: "Web",
    description: "Enterprise software development and solutions.",
    category: "Enterprise",
    bgImage: "/assets/softica.jpg",
    caseStudy: {
      challenges: "Legacy systems and complex business requirements slowed down operations.",
      solutions: "We developed custom enterprise applications using modern frameworks.",
      outcomes: "Boosted efficiency and reduced operating costs for the organization.",
    },
  },
  {
    id: 3,
    slug: "inovic",
    name: "AI",
    description: "AI & robotics research and development.",
    category: "AI/Robotics",
    bgImage: "/assets/inovic.jpg",
    caseStudy: {
      challenges: "Integrating AI with robotics posed technical and integration challenges.",
      solutions: "We designed advanced algorithms and built robotics prototypes.",
      outcomes: "Enhanced automation capabilities and improved research outcomes.",
    },
  },
  {
    id: 4,
    slug: "ctech",
    name: "Cybersecurity",
    description: "Cybersecurity and digital identity protection.",
    category: "Cybersecurity",
    bgImage: "/assets/ctech.jpg",
    caseStudy: {
      challenges: "Rising digital threats and identity theft risks required robust protection.",
      solutions: "We implemented strong security protocols and identity verification systems.",
      outcomes: "Significantly reduced breaches and secured digital assets.",
    },
  },
  {
    id: 5,
    slug: "itectona",
    name: "Cybersecurity",
    description: "Security & military engineering.",
    category: "Defense",
    bgImage: "/assets/itectona.jpg",
    caseStudy: {
      challenges: "Strict security requirements and advanced threats needed reliable solutions.",
      solutions: "We engineered military-grade systems and secure engineering solutions.",
      outcomes: "Enhanced defense capabilities and overall operational security.",
    },
  },
  {
    id: 6,
    slug: "unisoft",
    name: "UNISOFT",
    description: "Industrial, agricultural, and construction machinery.",
    category: "Agric",
    bgImage: "/assets/unisoft.jpg",
    caseStudy: {
      challenges: "Diverse industry needs made machinery integration complex.",
      solutions: "We developed adaptable software solutions for multiple sectors.",
      outcomes: "Increased productivity and streamlined operations across industries.",
    },
  },
  {
    id: 7,
    slug: "teksol",
    name: "TEKSOL",
    description: "Consumer electronics and smart devices.",
    category: "Mobile",
    bgImage: "/assets/teksol.jpg",
    caseStudy: {
      challenges: "A fast-changing market and high consumer expectations were hard to meet.",
      solutions: "We designed innovative products with smart integrations and modern design.",
      outcomes: "Boosted market presence and significantly improved customer satisfaction.",
    },
  },
  {
    id: 8,
    slug: "nrecom",
    name: "NRECOM",
    description: "Renewable energy solutions.",
    category: "Agric",
    bgImage: "/assets/project-renewable.jpg",
    caseStudy: {
      challenges: "High energy demands and environmental concerns required sustainable action.",
      solutions: "We implemented green technologies and sustainable energy projects.",
      outcomes: "Reduced carbon footprint and improved energy efficiency.",
    },
  },
  {
    id: 9,
    slug: "zappy-eon",
    name: "ZAPPY EON",
    description: "Aerospace and electrical engineering projects.",
    category: "Web",
    bgImage: "/assets/zappyeon.jpg",
    caseStudy: {
      challenges: "Complex engineering problems in aerospace and power systems needed innovative solutions.",
      solutions: "We developed advanced electrical systems and aerospace engineering methods.",
      outcomes: "Enhanced system performance and improved reliability in challenging conditions.",
    },
  },
];