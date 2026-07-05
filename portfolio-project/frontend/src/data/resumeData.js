export const profile = {
  name: 'Shivanshu Rawat',
  title: 'Software Developer · MERN Stack · AI/ML',
  location: 'Delhi NCR, India',
  summary:
    "B.Tech in Information Technology from Bhagwan Parshuram Institute of Technology, IP University, Delhi. Currently a Data Science Intern at CBRE Gurugram, working on sales management analytics. Proficient across the MERN stack (MongoDB, Express.js, React.js, Node.js) with hands-on experience shipping full-stack applications, and currently deepening expertise in AI, Machine Learning, and LLM-powered products.",
  email: 'shivanshur62@gmail.com',
  socials: [
    { label: 'GitHub', url: 'https://github.com/' },
    { label: 'LinkedIn', url: 'https://linkedin.com/' },
  ],
};

export const education = {
  degree: 'Bachelor of Technology (B.Tech) — Information Technology',
  school: 'Bhagwan Parshuram Institute of Technology, I.P. University, Delhi',
  logoKey: 'GGSIPU',
};

export const experience = [
  {
    org: 'CBRE',
    role: 'Data Science Intern',
    duration: 'Ongoing since Feb 2026',
    location: 'Gurugram, India',
    current: true,
  },
  {
    org: 'Culture Holidays Pvt Ltd',
    role: 'Quality Analyst Intern',
    duration: 'Jul – Sep 2025',
    location: 'Gurugram, India',
  },
  {
    org: 'Coding Nijas',
    role: 'C++ Programming',
    duration: 'Jan – Jun 2025',
    location: 'Delhi, India',
  },
  {
    org: 'Wayspire Pvt. Ltd.',
    role: 'MERN Stack Development',
    duration: 'Jul – Aug 2024',
    location: 'Delhi, India',
  },
  {
    org: 'Airports Authority of India',
    role: 'Cisco Packet Tracer',
    duration: 'Dec 2023',
    location: 'Delhi, India',
  },
  {
    org: 'Tech Radiance',
    role: 'C++ Programming',
    duration: 'Jun – Dec 2023',
    location: 'Delhi, India',
  },
];

export const projects = [
  {
    name: 'India RERA Data Extraction',
    client: 'CBRE',
    stack: ['Python', 'Pandas', 'NumPy', 'OpenPyXL', 'tqdm', 'EasyOCR', 'Selenium'],
    duration: 'Ongoing',
    description:
      'Automated pipeline that scrapes, OCRs, and structures real-estate regulatory filings across Indian states into clean, queryable datasets.',
  },
  {
    name: 'Fuzzy Lookup with Abbreviation Matching',
    client: 'CBRE',
    stack: ['React', 'JavaScript', 'GitHub'],
    duration: '1 week',
    description:
      'Internal tool that reconciles inconsistent naming conventions across datasets using fuzzy string matching and abbreviation-aware lookups.',
  },
  {
    name: 'College Website Management & Information Retrieval System',
    client: 'Academic Project',
    stack: ['MongoDB', 'Express.js', 'Node.js', 'React.js', 'Postman', 'Git'],
    duration: '2 months',
    description:
      'Full-stack MERN application for managing and retrieving institutional information, with a REST API tested end-to-end via Postman.',
  },
  {
    name: 'Student Tool Productivity Platform',
    client: 'Personal Project',
    stack: ['React', 'Next.js', 'Python', 'TypeScript', 'Vercel', 'Render', 'Git'],
    duration: 'Ongoing',
    description:
      'A productivity suite for students, deployed across Vercel and Render, combining a Next.js frontend with Python-powered services.',
  },
  {
    name: 'AI-Powered iPad Calculator',
    client: 'Personal Project',
    stack: ['Next.js', 'Tailwind CSS', 'Python', 'TypeScript', 'Git'],
    duration: '2 months',
    description:
      'A handwriting-to-math calculator inspired by Apple\u2019s Math Notes, interpreting freeform input into solved equations.',
  },
  {
    name: 'Jarvis Assistant',
    client: 'Personal Project',
    stack: ['Python', 'React', 'Git'],
    duration: '1 week',
    description:
      'A voice-driven desktop assistant capable of executing system tasks and answering queries in natural language.',
  },
];

export const certifications = [
  { name: 'Software Engineering Fundamentals', issuer: 'Electronics & ICT Academy, IIT Guwahati' },
  { name: 'Certification in Python', issuer: 'Google' },
  { name: 'MongoDB & Rapidly Developing Scalable Applications', issuer: 'Udemy' },
  { name: 'Programming with JavaScript', issuer: 'Meta' },
  { name: 'Bootstrap', issuer: 'Great Learning' },
  { name: 'React JS Fundamentals', issuer: 'Great Learning' },
  { name: 'Global AI Training — Leveraging AI at CBRE (Level 1)', issuer: 'CBRE' },
];

export const skills = {
  'Full-Stack': ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'REST APIs', 'Next.js'],
  Languages: ['JavaScript', 'TypeScript', 'Python', 'C++'],
  'AI / Data': ['Pandas', 'NumPy', 'EasyOCR', 'Selenium', 'LLM fundamentals', 'Machine Learning'],
  Tooling: ['Git', 'GitHub', 'Postman', 'Vercel', 'Render', 'Excel'],
};
