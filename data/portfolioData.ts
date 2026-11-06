export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  domain: string;
  description: string;
  problemSolved: string;
  technologies: string[];
  contribution: string;
  status: string;
  image: string;
  fallbackImage: string;
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface CredentialItem {
  id: string;
  title: string;
  organization: string;
  role: string;
  date: string;
  category: 'Offer Letter' | 'Appointment' | 'Certificate' | 'Internship';
  fileType: 'pdf' | 'jpg' | 'png';
  filePath: string;
  fileName: string;
  description: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  type: 'Work Experience' | 'Completed Internship' | 'Offer / Appointment' | 'Leadership';
  period: string;
  location: string;
  description: string[];
  credential?: {
    fileType: 'pdf' | 'jpg' | 'png';
    filePath: string;
    fileName: string;
    title: string;
  };
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: { name: string; highlight?: boolean; level?: string }[];
}

export interface EducationItem {
  institution: string;
  campus: string;
  affiliation: string;
  degree: string;
  field: string;
  period: string;
  status: string;
  cgpa?: string;
  description: string;
}

export const PERSONAL_INFO = {
  name: 'HARSHVARDHAN SHINDE',
  displayName: 'Harshvardhan Shinde',
  role: 'Backend Developer',
  careerDirection: 'Backend Developer and AI/ML Engineer',
  tagline: 'Quick learner who adapts to new technologies and challenges efficiently.',
  heroIntroduction:
    "Hi, I'm Harshvardhan Shinde — a Backend Developer passionate about building practical software solutions, developing reliable backend systems, working with APIs and databases, and exploring Artificial Intelligence and Machine Learning.",
  institution: 'Pillai HOC College of Engineering and Technology',
  degree: 'Bachelor of Engineering in Computer Engineering',
  educationPeriod: 'May 2024 – May 2028',
  educationSummary: 'Third Year / Fifth Semester • Computer Engineering',
  location: 'Navi Mumbai, Maharashtra, India',
  email: 'harsh4687.techie@gmail.com',
  linkedIn: 'https://linkedin.com/in/harshvardhanshinde4687/',
  gitHub: 'https://github.com/harsh4687techie-bot',
  profileImage: '/images/profile.jpg',
  resumePdf: '/resume/Harshvardhan_Shinde_Resume.pdf',
  resumeFileName: 'Harshvardhan_Shinde_Resume.pdf',
  bio: `I am a backend-focused developer and Computer Engineering student at Pillai HOC College of Engineering and Technology (May 2024 – May 2028). My engineering focus centers on clean object-oriented architecture, modular RESTful APIs, and dependable relational data pipelines using Python, Django, Flask, FastAPI, and PostgreSQL.

Beyond backend infrastructure, I actively explore AI-driven technology, quantitative data processing, and validation workflows. With practical experience as Manager at TechSpace Academy and Founder at NexSpace, alongside technical internships in backend engineering and data science, I build software that is robust, testable, and aligned with real-world requirements.`,
};

export const PROJECTS: ProjectItem[] = [
  {
    id: 'student-project-hub',
    title: 'StudentProjectHub',
    subtitle: 'Academic Project Collaboration & Code Repository',
    category: 'Full-Stack & Systems',
    domain: 'Education Tech & Collaborative Software Management',
    description:
      'A modular academic platform facilitating student project submissions, faculty evaluations, and code repository management with role-based access control.',
    problemSolved:
      'Replaced fragmented manual submissions and unorganized local code archives with an automated, role-gated submission pipeline and centralized faculty evaluation workflow.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'REST APIs', 'PostgreSQL / Prisma'],
    contribution:
      'Architected modular authentication workflows, role-based project submission pipelines, faculty reviewer assignment logic, and responsive dashboard views.',
    status: 'Active Development / Prototype',
    image: '/projects/student-project-hub.jpg',
    fallbackImage: '/projects/student-project-hub.svg',
    githubUrl: 'https://github.com/harsh4687techie-bot',
    featured: true,
  },
  {
    id: 'vital-ledger',
    title: 'Blood Bank Management System',
    subtitle: 'Vital Ledger Logistics Engine',
    category: 'Backend & Logistics',
    domain: 'Healthcare Logistics & Life-Saving Donor Network',
    description:
      'A Flask-based blood bank inventory and management platform engineered for hospital requests, real-time blood group stock visibility, and donor management.',
    problemSolved:
      'Eliminated dangerous supply blind spots by automating real-time blood group inventory tracking, critical threshold alerts, and emergency hospital requisition workflows.',
    technologies: ['Python', 'Flask', 'PostgreSQL / SQLite', 'REST APIs', 'PDF/Excel Export'],
    contribution:
      'Designed donor database schemas, low-inventory threshold triggers, hospital requisition endpoints, and automated reporting engines.',
    status: 'Completed System',
    image: '/projects/vital-ledger.jpg',
    fallbackImage: '/projects/vital-ledger.svg',
    githubUrl: 'https://github.com/harsh4687techie-bot',
    featured: true,
  },
  {
    id: 'society-sphere',
    title: 'Society Maintenance and Payment System',
    subtitle: 'SocietySphere Administrative Platform',
    category: 'Enterprise & Fintech',
    domain: 'Real Estate Administration & Resident Ledger',
    description:
      'A comprehensive society administration ledger providing automated flat billing, digital payment status tracking, and transparent resident communication.',
    problemSolved:
      'Resolved manual paper billing bottlenecks, tracking discrepancies, and delayed resident maintenance collections by establishing an automated ledger with recurring billing.',
    technologies: ['Next.js', 'TypeScript', 'Prisma ORM', 'PostgreSQL', 'Tailwind CSS'],
    contribution:
      'Designed recurring dues calculation logic, ledger expense tracking, fine-gating for overdue balances, and receipt dispatch routines.',
    status: 'Completed Architecture / Deployed Prototype',
    image: '/projects/society-sphere.jpg',
    fallbackImage: '/projects/society-sphere.svg',
    githubUrl: 'https://github.com/harsh4687techie-bot',
    featured: true,
  },
  {
    id: 'om-sai-transport',
    title: 'Om Sai Transport',
    subtitle: 'Tipper Lifecycle Management System',
    category: 'Industrial Systems & Architecture',
    domain: 'Commercial Fleet & Vehicle Lifecycle Operations',
    description:
      'A complete industrial tipper management system covering factory dispatch, showroom intake, customer delivery, and maintenance operations.',
    problemSolved:
      'Overcame operational tracking breakdowns across factory intake, customer registration, insurance compliance, and unmonitored mechanic maintenance schedules.',
    technologies: ['Python', 'OOP Architecture', 'JSON State Engine', 'Modular Services'],
    contribution:
      'Served as Technical Lead; engineered Factory-to-Showroom intake workflow, role-based registration (Manager, Owner, Driver, Mechanic), insurance compliance gating, and periodic mechanic service scheduling.',
    status: 'Production-Aligned System',
    image: '/projects/om-sai-transport.jpg',
    fallbackImage: '/projects/om-sai-transport.svg',
    githubUrl: 'https://github.com/harsh4687techie-bot',
    featured: true,
  },
  {
    id: 'equity-volume-analyzer',
    title: 'Stock Volume & Sector Analysis System',
    subtitle: 'Equity Volume Analyzer & Report Engine',
    category: 'Quantitative Finance & Tooling',
    domain: 'Financial Market Ingestion & Dynamic Reporting',
    description:
      'A high-performance desktop analytical tool and reporting engine ingesting daily equity trading files to generate dynamic multi-period comparison reports with live Excel formulas.',
    problemSolved:
      'Automated high-volume trade file processing, replacing hours of error-prone manual spreadsheet data entry with instant sector aggregations and live formulas.',
    technologies: ['Python', 'Pandas', 'OpenPyXL / XlsxWriter', 'Data Processing', 'Analytical Engine'],
    contribution:
      'Architected duplicate trade filtering, weekly and monthly sector aggregation logic, live formula injection, and zero-division safe financial percentage metrics.',
    status: 'Completed Analytical Desktop Application',
    image: '/projects/equity-volume-analyzer.jpg',
    fallbackImage: '/projects/equity-volume-analyzer.svg',
    githubUrl: 'https://github.com/harsh4687techie-bot',
    featured: true,
  },
  {
    id: 'groundtruth-loop',
    title: 'GroundTruth Loop',
    subtitle: 'AI Model Calibration & HITL Pipeline',
    category: 'AI / ML & Validation',
    domain: 'Model Evaluation & Uncertainty Calibration',
    description:
      'A backend evaluation pipeline for scoring AI model uncertainty, routing low-confidence samples to human reviewers, and generating ground-truth calibration benchmarks.',
    problemSolved:
      'Mitigated silent model failures and hallucinations in production by filtering uncertain inferences into an auditable Human-in-the-Loop review queue.',
    technologies: ['Python', 'FastAPI', 'PyTorch / Scikit-learn', 'JSON Workflows', 'REST APIs'],
    contribution:
      'Constructed confidence score threshold filters, validation dataset audit loops, discrepancy detection, and automated feedback logging for continuous retraining.',
    status: 'Research & Engineering Prototype',
    image: '/projects/groundtruth-loop.jpg',
    fallbackImage: '/projects/groundtruth-loop.svg',
    githubUrl: 'https://github.com/harsh4687techie-bot',
    featured: false,
  },
  {
    id: 'gym-management',
    title: 'Gym Management System',
    subtitle: 'GymTrack Access & Subscription Engine',
    category: 'Backend & Services',
    domain: 'Fitness Operations & Biometric Attendance',
    description:
      'A modular backend service coordinating member subscriptions, biometric/RFID check-ins, trainer slot reservations, and automated renewal alerts.',
    problemSolved:
      'Replaced insecure paper logbooks and expired pass oversights with automated membership validity checks and real-time check-in logging.',
    technologies: ['Python', 'Django / Flask', 'PostgreSQL', 'REST APIs', 'OOP Design'],
    contribution:
      'Engineered membership subscription validation routines, automated attendance logging endpoints, and trainer capacity scheduling algorithms.',
    status: 'Functional Backend System',
    image: '/projects/gym-management.jpg',
    fallbackImage: '/projects/gym-management.svg',
    githubUrl: 'https://github.com/harsh4687techie-bot',
    featured: false,
  },
  {
    id: 'momentify',
    title: 'Momentify',
    subtitle: 'Media Curation & Event Timeline Engine',
    category: 'Full-Stack & Media',
    domain: 'Digital Memory Archival & EXIF Processing',
    description:
      'A platform for organizing multimedia event timelines, automated EXIF metadata indexing, and encrypted archival sharing.',
    problemSolved:
      'Solved chaotic, disorganized media hoarding by parsing EXIF timestamps and geolocation tags to auto-chronologize event albums.',
    technologies: ['Next.js', 'React', 'Node.js', 'PostgreSQL', 'Object Storage'],
    contribution:
      'Implemented media upload pipelines, automated EXIF timestamp and geolocation extraction, timeline cluster grouping, and secure presigned sharing URLs.',
    status: 'Completed Prototype',
    image: '/projects/momentify.jpg',
    fallbackImage: '/projects/momentify.svg',
    githubUrl: 'https://github.com/harsh4687techie-bot',
    featured: false,
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'techspace-manager',
    role: 'Manager',
    organization: 'TechSpace Academy',
    type: 'Leadership',
    period: 'August 2024 – Present',
    location: 'Navi Mumbai, Maharashtra',
    description: [
      'Managing engineering lifecycle processes, enforcing clean OOP principles, and structuring data processing pipelines.',
      'Supervising backend development workflows, technical modularity, and operational execution for student engineering initiatives.',
      'Guiding team members through technical requirements, code reviews, and system documentation standards.',
    ],
  },
  {
    id: 'nexspace-founder',
    role: 'Founder',
    organization: 'NexSpace',
    type: 'Leadership',
    period: '2024 – Present',
    location: 'Navi Mumbai, Maharashtra',
    description: [
      'Founded and directed NexSpace, leading technical initiatives focused on software planning, backend prototyping, and student tech collaboration.',
      'Architected system designs, evaluated technology stacks, and managed cross-functional engineering project lifecycles.',
      'Led project planning, client coordination, software delivery, and practical development sprints.',
    ],
  },
  {
    id: 'tipper-tech-lead',
    role: 'Technical Lead – Tipper Project',
    organization: 'TechSpace (Om Sai Transport)',
    type: 'Work Experience',
    period: 'Sep 2025 – Oct 2025',
    location: 'Navi Mumbai, Maharashtra',
    description: [
      'Designed and implemented a complete Tipper Lifecycle Management System covering factory dispatch, showroom intake, owner delivery, and maintenance.',
      'Built Factory-to-Showroom workflow automating vehicle intake, insurance compliance verification, and status tracking using Python and JSON.',
      'Developed role-based registration system for Manager, Owner, Driver, and Mechanic, structured using OOP for strict modularity.',
      'Implemented mechanic maintenance module enabling service logging, scheduled health checks, and odometer updates.',
    ],
    credential: {
      fileType: 'pdf',
      filePath: '/resume/Harshvardhan_Shinde_Resume.pdf',
      fileName: 'Harshvardhan_Shinde_Resume.pdf',
      title: 'Verified Experience in Official Resume',
    },
  },
  {
    id: 'she-can-foundation',
    role: 'Python Development Internship',
    organization: 'She Can Foundation',
    type: 'Completed Internship',
    period: 'August 2026',
    location: 'Remote (via Internshala)',
    description: [
      'Selected for Python Development internship through Internshala (Certificate No: fffb6u60q88).',
      'Engaged in Python-based backend workflows, data manipulation, and software implementation routines.',
      'Reinforced modular coding standards and systematic testing across assigned programming tasks.',
    ],
    credential: {
      fileType: 'png',
      filePath: '/certificates/She_Can_Foundation_Python_Development_Internship.png',
      fileName: 'She_Can_Foundation_Python_Development_Internship.png',
      title: 'She Can Foundation Certificate of Selection',
    },
  },
  {
    id: 'sankey-solutions',
    role: 'Python Developer',
    organization: 'Sankey Solutions',
    type: 'Offer / Appointment',
    period: 'September 2025 – October 2025',
    location: 'Remote',
    description: [
      'Received official offer for Python Developer internship with Sankey Business Solutions Pvt Ltd (25 Sep 2025 – 27 Oct 2025).',
      'Engineered backend logic routines in Python, focusing on modularity, data handling, and robust algorithm execution.',
      'Collaborated within an enterprise software environment to fulfill key software development deliverables.',
    ],
    credential: {
      fileType: 'jpg',
      filePath: '/certificates/Sankey_Solutions_Python_Developer_Offer_Letter.jpg',
      fileName: 'Sankey_Solutions_Python_Developer_Offer_Letter.jpg',
      title: 'Sankey Solutions Offer Letter',
    },
  },
  {
    id: 'ai-asesro',
    role: 'Python Developer Intern',
    organization: 'AI Asesro',
    type: 'Offer / Appointment',
    period: '01 May 2026 – 31 May 2026',
    location: 'Panvel, Navi Mumbai',
    description: [
      'Received official offer letter on 30th April 2026 for Python Developer Intern position at AI Asesro.',
      'Focus areas include Python backend scripting, API development, and software service integration.',
    ],
    credential: {
      fileType: 'pdf',
      filePath: '/certificates/AI_Asesro_Python_Developer_Intern_Offer_Letter.pdf',
      fileName: 'AI_Asesro_Python_Developer_Intern_Offer_Letter.pdf',
      title: 'AI Asesro Python Developer Intern Offer Letter',
    },
  },
  {
    id: 'upskill-campus',
    role: 'Full Stack Developer Intern',
    organization: 'upSkill Campus',
    type: 'Offer / Appointment',
    period: '04 April 2026 – 04 May 2026',
    location: 'Remote (Partner: UniConverge Technologies)',
    description: [
      'Full Stack Developer internship document with industry partner UniConverge Technologies Pvt. Ltd.',
      'Contributed to end-to-end web workflows, integrating backend service endpoints with structured frontend interfaces.',
      'Note: Physical document in asset records is issued to Satyam Kumar; pending confirmation.',
    ],
    credential: {
      fileType: 'jpg',
      filePath: '/certificates/upSkill_Campus_Full_Stack_Developer_Intern_Offer_Letter.jpg',
      fileName: 'upSkill_Campus_Full_Stack_Developer_Intern_Offer_Letter.jpg',
      title: 'upSkill Campus Offer Letter',
    },
  },
  {
    id: 'letsupgrade-ambassador',
    role: 'Campus Ambassador',
    organization: 'LetsUpgrade',
    type: 'Offer / Appointment',
    period: 'November 2025 – February 2026',
    location: 'Navi Mumbai, Maharashtra',
    description: [
      'Appointed Student Ambassador for LetsUpgrade EdTech Pvt Ltd (Program duration: 10.11.2025 to 08.02.2026).',
      'Spearheaded peer outreach and technical literacy initiatives, promoting skill development programs across college departments.',
      'Coordinated technical workshops and fostered collaborative learning environments among engineering students.',
    ],
    credential: {
      fileType: 'jpg',
      filePath: '/certificates/LetsUpgrade_Campus_Ambassador_Offer_Letter.jpg',
      fileName: 'LetsUpgrade_Campus_Ambassador_Offer_Letter.jpg',
      title: 'LetsUpgrade Ambassador Appointment Letter',
    },
  },
  {
    id: 'internshala-isp',
    role: 'Internshala Student Partner',
    organization: 'Internshala',
    type: 'Offer / Appointment',
    period: 'November 2025 – January 2026',
    location: 'Campus Outreach',
    description: [
      'Selected for the prestigious Internshala Student Partner (ISP) program to represent Internshala on campus.',
      'Entrusted with empowering peers through skill-building trainings, verified internship awareness, and career opportunities.',
    ],
    credential: {
      fileType: 'pdf',
      filePath: '/certificates/Internshala_Student_Partner_Appointment_Letter.pdf',
      fileName: 'Internshala_Student_Partner_Appointment_Letter.pdf',
      title: 'Internshala Student Partner Appointment Letter',
    },
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Programming Languages',
    iconName: 'Code2',
    skills: [
      { name: 'Python', highlight: true },
      { name: 'Java' },
      { name: 'JavaScript', highlight: true },
      { name: 'TypeScript', highlight: true },
      { name: 'SQL', highlight: true },
    ],
  },
  {
    title: 'Backend Engineering',
    iconName: 'Server',
    skills: [
      { name: 'Flask', highlight: true },
      { name: 'Django', highlight: true },
      { name: 'FastAPI', highlight: true },
      { name: 'Node.js' },
      { name: 'REST APIs', highlight: true },
      { name: 'OOP Architecture', highlight: true },
    ],
  },
  {
    title: 'Databases & Storage',
    iconName: 'Database',
    skills: [
      { name: 'PostgreSQL', highlight: true },
      { name: 'SQL', highlight: true },
      { name: 'JSON-based Storage', highlight: true },
      { name: 'Data Processing' },
      { name: 'Pandas (Basics)' },
      { name: 'NumPy (Basics)' },
    ],
  },
  {
    title: 'Frontend Development',
    iconName: 'Layout',
    skills: [
      { name: 'HTML5' },
      { name: 'CSS3 / CSS Modules' },
      { name: 'React', highlight: true },
      { name: 'Next.js', highlight: true },
      { name: 'Tailwind CSS', highlight: true },
      { name: 'TypeScript', highlight: true },
    ],
  },
  {
    title: 'Tools & Workflows',
    iconName: 'Terminal',
    skills: [
      { name: 'Git', highlight: true },
      { name: 'GitHub', highlight: true },
      { name: 'VS Code' },
      { name: 'API Integration' },
      { name: 'Deployment' },
      { name: 'Clean Code Standards', highlight: true },
    ],
  },
];

export const CREDENTIALS: CredentialItem[] = [
  {
    id: 'sih-2026-cert',
    title: 'Smart India Hackathon 2026 Participation',
    organization: 'Pillai HOC College of Engineering & Technology',
    role: 'Hackathon Participant',
    date: '29 August 2026',
    category: 'Certificate',
    fileType: 'pdf',
    filePath: '/certificates/Smart_India_Hackathon_2026_Participation.pdf',
    fileName: 'Smart_India_Hackathon_2026_Participation.pdf',
    description:
      'Certificate of Participation in the Internal Hackathon of Smart India Hackathon 2026. Verified collaborative engineering and rapid prototyping.',
  },
  {
    id: 'she-can-selection',
    title: 'Python Development Internship Selection',
    organization: 'She Can Foundation & Internshala',
    role: 'Python Development Intern',
    date: '13 August 2026',
    category: 'Internship',
    fileType: 'png',
    filePath: '/certificates/She_Can_Foundation_Python_Development_Internship.png',
    fileName: 'She_Can_Foundation_Python_Development_Internship.png',
    description:
      'Official Internshala Certificate of Selection for the Python Development internship at She Can Foundation (Certificate No: fffb6u60q88).',
  },
  {
    id: 'ai-asesro-offer',
    title: 'Python Developer Intern Offer Letter',
    organization: 'AI Asesro',
    role: 'Python Developer Intern',
    date: '30 April 2026',
    category: 'Offer Letter',
    fileType: 'pdf',
    filePath: '/certificates/AI_Asesro_Python_Developer_Intern_Offer_Letter.pdf',
    fileName: 'AI_Asesro_Python_Developer_Intern_Offer_Letter.pdf',
    description: 'Official offer letter for the Python Developer Intern role at AI Asesro (Duration: May 1st to May 31st 2026).',
  },
  {
    id: 'upskill-offer',
    title: 'Full Stack Developer Intern Offer Letter',
    organization: 'upSkill Campus & UniConverge Technologies',
    role: 'Full Stack Developer Intern',
    date: '04 April 2026',
    category: 'Offer Letter',
    fileType: 'jpg',
    filePath: '/certificates/upSkill_Campus_Full_Stack_Developer_Intern_Offer_Letter.jpg',
    fileName: 'upSkill_Campus_Full_Stack_Developer_Intern_Offer_Letter.jpg',
    description: 'Official offer letter for Full Stack Development Internship at upSkill Campus / UniConverge Technologies.',
  },
  {
    id: 'sankey-offer',
    title: 'Python Developer Intern Offer Letter',
    organization: 'Sankey Solutions',
    role: 'Python Developer Intern',
    date: '24 September 2025',
    category: 'Offer Letter',
    fileType: 'jpg',
    filePath: '/certificates/Sankey_Solutions_Python_Developer_Offer_Letter.jpg',
    fileName: 'Sankey_Solutions_Python_Developer_Offer_Letter.jpg',
    description: 'Internship offer letter as Python Developer Intern at Sankey Business Solutions Pvt Ltd (25 Sep – 27 Oct 2025).',
  },
  {
    id: 'letsupgrade-ambassador-offer',
    title: 'Student Ambassador Appointment Letter',
    organization: 'LetsUpgrade EdTech Pvt Ltd',
    role: 'Campus Ambassador',
    date: '10 November 2025',
    category: 'Appointment',
    fileType: 'jpg',
    filePath: '/certificates/LetsUpgrade_Campus_Ambassador_Offer_Letter.jpg',
    fileName: 'LetsUpgrade_Campus_Ambassador_Offer_Letter.jpg',
    description: 'Appointment letter for the Student Ambassador Program at LetsUpgrade EdTech Pvt Ltd (10.11.2025 to 08.02.2026).',
  },
  {
    id: 'internshala-isp-letter',
    title: 'Internshala Student Partner Appointment',
    organization: 'Internshala',
    role: 'Internshala Student Partner',
    date: '11 October 2025',
    category: 'Appointment',
    fileType: 'pdf',
    filePath: '/certificates/Internshala_Student_Partner_Appointment_Letter.pdf',
    fileName: 'Internshala_Student_Partner_Appointment_Letter.pdf',
    description: 'Official appointment letter for the Internshala Student Partner (ISP) program.',
  },
  {
    id: 'resume-doc',
    title: 'Official Curriculum Vitae / Resume',
    organization: 'Harshvardhan Shinde',
    role: 'Backend Developer',
    date: 'Latest Verified',
    category: 'Certificate',
    fileType: 'pdf',
    filePath: '/resume/Harshvardhan_Shinde_Resume.pdf',
    fileName: 'Harshvardhan_Shinde_Resume.pdf',
    description:
      'Verified professional curriculum vitae detailing academic record, technical competencies, and verified engineering experience.',
  },
];

export const EDUCATION_INFO: EducationItem = {
  institution: 'Pillai HOC College of Engineering and Technology',
  campus: 'Rasayani, Navi Mumbai, Maharashtra, India',
  affiliation: 'Autonomous Institution (NAAC Accredited with "A" Grade)',
  degree: 'Bachelor of Engineering (B.E.)',
  field: 'Computer Engineering',
  period: 'May 2024 – May 2028',
  status: 'Third Year / Fifth Semester',
  description:
    'Pursuing core Computer Engineering curriculum with dedicated focus on backend systems, data structures, relational database architecture, algorithms, and modular software engineering.',
};


export interface InternshipItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  description: string;
  credential: {
    fileType: 'pdf' | 'jpg' | 'png';
    filePath: string;
    fileName: string;
    title: string;
  };
}

export const INTERNSHIPS: InternshipItem[] = [
  {
    id: 'ai-asesro-intern',
    role: 'Python Developer Intern',
    organization: 'AI Asesro',
    period: '01 May 2026 – 31 May 2026',
    description:
      'Offered the position of Python Developer Intern at AI Asesro. Engaged in backend logic architecture, Python scripting, and technical software implementation.',
    credential: {
      fileType: 'pdf',
      filePath: '/certificates/AI_Asesro_Python_Developer_Intern_Offer_Letter.pdf',
      fileName: 'AI_Asesro_Python_Developer_Intern_Offer_Letter.pdf',
      title: 'AI Asesro Offer Letter',
    },
  },
  {
    id: 'she-can-foundation-intern',
    role: 'Python Development Internship',
    organization: 'She Can Foundation',
    period: 'August 2026',
    description:
      'Successfully secured Python Development internship at She Can Foundation through Internshala (Certificate of Selection issued August 13, 2026, Certificate No: fffb6u60q88). Focused on Python-based backend workflows.',
    credential: {
      fileType: 'png',
      filePath: '/certificates/She_Can_Foundation_Python_Development_Internship.png',
      fileName: 'She_Can_Foundation_Python_Development_Internship.png',
      title: 'She Can Foundation Certificate of Selection',
    },
  },
  {
    id: 'upskill-campus-intern',
    role: 'Full Stack Developer Intern',
    organization: 'upSkill Campus',
    period: '04 April 2026 – 04 May 2026',
    description:
      'Appointed as Full Stack Development Intern in collaboration with industry partner UniConverge Technologies Pvt. Ltd. (Offer issued 04-04-2026). Focused on end-to-end full-stack software development workflows.',
    credential: {
      fileType: 'jpg',
      filePath: '/certificates/upSkill_Campus_Full_Stack_Developer_Intern_Offer_Letter.jpg',
      fileName: 'upSkill_Campus_Full_Stack_Developer_Intern_Offer_Letter.jpg',
      title: 'upSkill Campus Offer Letter',
    },
  },
];

export const INTERNSHALA_PARTNER = {
  role: 'Internshala Student Partner',
  organization: 'Internshala',
  period: 'November 2025 – January 2026',
  appointmentDate: '11 October 2025',
  programDuration: '25th November 2025 – 2nd January 2026',
  description:
    'Appointed to represent Internshala on campus to promote professional skill-building trainings, internships, and student learning opportunities.',
  credential: {
    fileType: 'pdf' as const,
    filePath: '/certificates/Internshala_Student_Partner_Appointment_Letter.pdf',
    fileName: 'Internshala_Student_Partner_Appointment_Letter.pdf',
    title: 'Internshala Student Partner Appointment Letter',
  },
};
