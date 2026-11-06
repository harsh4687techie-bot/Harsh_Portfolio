'use client';

import React, { useState } from 'react';
import { ArrowUpRight, Plus, Minus, Server, Database, Layers, Cpu, Wrench } from 'lucide-react';
import styles from './Services.module.css';

interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  techStack: string[];
  icon: typeof Server;
  previewImage: string;
}

const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'backend-dev',
    number: '01',
    title: 'BACKEND ARCHITECTURE & REST APIS',
    tagline: 'High-reliability server-side logic and deterministic API contracts',
    description:
      'Designing and engineering modular server-side architectures, micro-services, and deterministic RESTful endpoints in Python using FastAPI, Django, Flask, and Node.js. Focused on clean separation of concerns, robust exception handling, and high-throughput data pipelines.',
    deliverables: [
      'Stateless RESTful API development & OpenAPI docs',
      'JWT/session authentication & role-based access control',
      'Strict input validation & error boundaries',
      'Third-party service integrations & webhook handlers',
    ],
    techStack: ['Python', 'FastAPI', 'Django', 'Flask', 'Node.js', 'REST APIs', 'Postman'],
    icon: Server,
    previewImage: '/projects/om-sai-transport.jpg',
  },
  {
    id: 'db-design',
    number: '02',
    title: 'DATABASE DESIGN & RELATIONAL DATA MODELING',
    tagline: 'High-integrity schemas, optimized queries, and structured persistence',
    description:
      'Architecting resilient relational schemas in PostgreSQL and SQL. Enforcing strict referential integrity, foreign key constraints, index tuning, and clean JSON-based document storage layers where dynamic state caching is required.',
    deliverables: [
      'Normalized relational schema architecture (3NF)',
      'Complex query optimization & index strategies',
      'Transaction integrity & concurrency management',
      'Database migrations & data export routines (Excel/PDF)',
    ],
    techStack: ['PostgreSQL', 'SQL', 'Prisma ORM', 'SQLite', 'JSON Engines', 'Pandas'],
    icon: Database,
    previewImage: '/projects/vital-ledger.jpg',
  },
  {
    id: 'fullstack-web',
    number: '03',
    title: 'FULL-STACK SYSTEMS & WEB APPLICATIONS',
    tagline: 'Modern TypeScript frontends seamlessly connected to backend services',
    description:
      'Developing full-stack web applications combining responsive, type-safe Next.js / React frontends with robust backend microservices. Ensuring end-to-end type safety, fluid user experiences, and clean modular codebases.',
    deliverables: [
      'Next.js (App Router) & React dynamic interfaces',
      'Client-side state management & validation',
      'Responsive design & accessibility compliance',
      'End-to-end API client integration',
    ],
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'HTML5/CSS3', 'REST APIs'],
    icon: Layers,
    previewImage: '/projects/student-project-hub.jpg',
  },
  {
    id: 'aiml-eng',
    number: '04',
    title: 'AI / ML PIPELINES & VALIDATION ENGINEERING',
    tagline: 'Ground-truth evaluation, uncertainty calibration, and data processing',
    description:
      'Building backend pipelines that score model prediction uncertainty, filter edge cases into Human-In-The-Loop (HITL) review queues, and structure validation benchmarks for continuous model calibration and reliability.',
    deliverables: [
      'Uncertainty confidence threshold filtering',
      'Human-in-the-loop review routing endpoints',
      'Automated dataset aggregation & preprocessing',
      'Quantitative financial data processing & analysis',
    ],
    techStack: ['Python', 'PyTorch / Scikit-learn', 'FastAPI', 'Pandas', 'NumPy', 'OpenPyXL'],
    icon: Cpu,
    previewImage: '/projects/groundtruth-loop.jpg',
  },
  {
    id: 'industrial-sys',
    number: '05',
    title: 'INDUSTRIAL LIFECYCLE & WORKFLOW SYSTEMS',
    tagline: 'Domain-specific enterprise operations, fleet dispatch, and logistics',
    description:
      'Engineering practical end-to-end business workflows such as vehicle lifecycle intake, showroom dispatch, insurance compliance tracking, maintenance scheduling, and cooperative society financial ledgers.',
    deliverables: [
      'Multi-tier role management (Admin, Staff, Customer, Mechanic)',
      'Stepwise workflow state machines & transitions',
      'Automated recurring billing & expense ledger engines',
      'Scheduled maintenance & renewal alert routines',
    ],
    techStack: ['Python', 'OOP Design', 'Modular Architecture', 'State Engines', 'PostgreSQL'],
    icon: Wrench,
    previewImage: '/projects/society-sphere.jpg',
  },
];

export default function Services() {
  const [activeServiceId, setActiveServiceId] = useState<string | null>('backend-dev');

  const toggleService = (id: string) => {
    setActiveServiceId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="services" className={`section ${styles.servicesSection}`}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header-editorial">
          <div className="section-watermark">SERVICES</div>
          <div className="section-label-editorial">/SERVICES</div>
          <h2 className="section-title-editorial">Engineering Competencies &amp; Capabilities</h2>
          <p className="section-subtitle-editorial">
            Core software engineering capabilities offered to startups, engineering teams, and collaborative client initiatives.
          </p>
        </div>

        {/* Interactive Accordion Rows */}
        <div className={styles.accordionContainer}>
          {SERVICES_DATA.map((service) => {
            const isExpanded = activeServiceId === service.id;
            const Icon = service.icon;

            return (
              <div
                key={service.id}
                className={`${styles.serviceRow} ${isExpanded ? styles.serviceRowExpanded : ''}`}
              >
                {/* Closed / Interactive Bar Header */}
                <button
                  type="button"
                  className={styles.rowHeader}
                  onClick={() => toggleService(service.id)}
                  aria-expanded={isExpanded}
                  aria-controls={`service-panel-${service.id}`}
                >
                  <div className={styles.headerLeft}>
                    <span className={styles.number}>{service.number}</span>
                    <h3 className={styles.rowTitle}>{service.title}</h3>
                  </div>

                  <div className={styles.headerRight}>
                    <span className={styles.tagline}>{service.tagline}</span>
                    <div className={styles.toggleIconWrap}>
                      {isExpanded ? (
                        <Minus size={18} className={styles.toggleIcon} />
                      ) : (
                        <Plus size={18} className={styles.toggleIcon} />
                      )}
                    </div>
                  </div>
                </button>

                {/* Expanded Dark Editorial Content Panel */}
                {isExpanded && (
                  <div
                    id={`service-panel-${service.id}`}
                    className={styles.expandedPanel}
                  >
                    <div className={styles.panelContent}>
                      
                      {/* Left: Detailed Overview */}
                      <div className={styles.panelDetails}>
                        <div className={styles.panelBadgeRow}>
                          <Icon size={16} className={styles.panelIcon} />
                          <span>Specialized Capability</span>
                        </div>

                        <h4 className={styles.panelTitle}>{service.title}</h4>
                        <p className={styles.panelDescription}>{service.description}</p>

                        <div className={styles.deliverablesBlock}>
                          <span className={styles.blockHeading}>Key Deliverables</span>
                          <ul className={styles.deliverablesList}>
                            {service.deliverables.map((item, idx) => (
                              <li key={idx} className={styles.deliverableItem}>
                                <span className={styles.bullet}>&bull;</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className={styles.techStackBlock}>
                          <span className={styles.blockHeading}>Technologies &amp; Protocols</span>
                          <div className={styles.techTags}>
                            {service.techStack.map((tech) => (
                              <span key={tech} className={styles.techTag}>
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Right: Technical Project Artwork Preview */}
                      <div className={styles.panelVisual}>
                        <div className={styles.visualFrame}>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={service.previewImage}
                            alt={`${service.title} preview`}
                            className={styles.visualImage}
                          />
                          <div className={styles.visualOverlay}>
                            <span className={styles.visualLabel}>Reference Implementation</span>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

