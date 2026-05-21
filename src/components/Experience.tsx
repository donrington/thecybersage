'use client';

import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const EXPERIENCE = [
  {
    year: '2026',
    role: 'Full Stack Developer',
    company: 'Recoverderm',
    type: 'Contract · Remote',
    desc: 'Built the full stack for a paramedical clinic. Secure patient portals, treatment tracking, a CMS the team could manage without a developer on call. JWT + refresh token rotation, HIPAA-compliant data flow.',
    stack: ['Next.js', 'Django', 'PostgreSQL'],
  },
  {
    year: '2025',
    role: 'Full Stack Developer',
    company: 'Anoc.ng',
    type: 'Contract · Remote',
    desc: 'Built the platform for Chartered Accountants to manage client intake, documents, and compliance audits in one place. Encrypted pipelines, zero breaches.',
    stack: ['Next.js', 'Node.js', 'PostgreSQL'],
  },
  {
    year: '2025',
    role: 'Software Engineer',
    company: 'NextGen Robotics',
    type: 'Contract · Remote',
    desc: 'Built the web platform and cloud deployment setup for a robotics company. Go backend on AWS, CI/CD from scratch, kept API latency under 100ms. 25% user engagement lift after go-live.',
    stack: ['Next.js', 'Go', 'AWS'],
  },
  {
    year: '2025',
    role: 'Sr. Full Stack Developer',
    company: 'Autoboy',
    type: 'Full-time · Remote',
    desc: 'Scaled a dual-sided automotive marketplace. React frontend, Go microservices on the backend, real-time inventory, payment integration, seller dashboards. 30% faster DB responses after Redis + connection pool tuning.',
    stack: ['React', 'Go', 'PostgreSQL', 'Redis'],
  },
  {
    year: '2024',
    role: 'Full Stack Developer',
    company: 'Axflo Oil & Gas',
    type: 'Contract · Remote',
    desc: 'Headless CMS for an oil and gas company. Custom document generation, role-based access, workflow automation for internal ops. Manual ops down 60%.',
    stack: ['Next.js', 'Django', 'PostgreSQL'],
  },
  {
    year: '2024',
    role: 'Web Developer',
    company: 'KRK Motors',
    type: 'Contract · Remote',
    desc: 'Brand website for a premium auto dealership. GSAP animations, sub-1s load time, built to match the aesthetic.',
    stack: ['Next.js', 'Tailwind', 'GSAP'],
  },
  {
    year: '2024',
    role: 'Full Stack Developer',
    company: 'Rokeyla Fashion',
    type: 'Contract · Remote',
    desc: 'Built the e-commerce platform for Rokeyla. Stripe integration, live inventory sync via pg_notify, backend holds up under demand spikes.',
    stack: ['Next.js', 'Stripe', 'PostgreSQL'],
  },
  {
    year: '2024',
    role: 'Web Developer',
    company: 'Samdus Oil and Gas',
    type: 'Contract · Remote',
    desc: 'Corporate site for an oil and gas company. Custom animations, SEO-first build, 98/100 on Lighthouse. Sub-1s LCP.',
    stack: ['Next.js', 'Django'],
  },
  {
    year: '2024',
    role: 'Web Developer',
    company: 'Handyman & Contractors',
    type: 'Contract · Remote',
    desc: 'Built the lead gen site. Conversion-tuned landing pages, qualified service inquiries tripled after launch.',
    stack: ['React', 'Node.js', 'Tailwind'],
  },
  {
    year: '2024',
    role: 'Lead Full Stack Developer',
    company: 'Amanigo Travels',
    type: 'Contract · Remote',
    desc: 'Led development of a travel management app. Booking engine, itinerary builder, CMS, API integrations with global travel providers. Booking API with rate-limiting and idempotent payments.',
    stack: ['Next.js', 'Django', 'PostgreSQL'],
  },
  {
    year: '2024',
    role: 'Team Leader',
    company: 'Zidio',
    type: 'Internship · Remote',
    desc: 'Led the dev team during internship at Zidio. Kept sprints unblocked, hit every deadline across 3 sprints.',
    stack: ['Agile', 'Jira', 'Scrum'],
  },
  {
    year: '2023',
    role: 'Lead Back-End Engineer',
    company: 'Dejaii',
    type: 'Contract · Remote',
    desc: 'Built the API integration layer across multiple services. Tuned DB queries, cut latency across the board.',
    stack: ['Django', 'PostgreSQL', 'REST API'],
  },
  {
    year: '2021',
    role: 'Full Stack Developer',
    company: 'Xtus Connect',
    type: 'Full-time · Remote',
    desc: 'Owned web app development from first commit to client handoff. Shipped features, profiled performance, managed delivery for 2+ years.',
    stack: ['React', 'Django', 'PostgreSQL'],
  },
  {
    year: '2019',
    role: 'QA Engineer',
    company: 'Nigerian Bottling Company',
    type: 'Internship · On-site',
    desc: 'Automated Brix level monitoring tests across the production lines. Test harnesses cut manual inspection cycles by 40%.',
    stack: ['Python', 'Selenium', 'PostgreSQL'],
  },
];

export function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !lineRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0, transformOrigin: 'top center' },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            end: 'bottom 80%',
            scrub: 1,
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="w-full bg-white border-t border-black/[0.08]"
    >
      <div className="max-w-[1440px] mx-auto px-[clamp(1.25rem,5vw,5rem)] py-[clamp(5rem,10vw,11rem)]">

        {/* Section label */}
        <div className="flex items-center gap-4 mb-[clamp(3rem,6vw,7rem)]">
          <span
            className="text-[0.6rem] tracking-[0.22em] uppercase text-black/30 font-medium"
            style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}
          >
            04 / Experience
          </span>
          <div className="flex-1 h-px bg-black/10" />
        </div>

        {/* Headline */}
        <h2
          className="font-black text-black tracking-[-0.04em] leading-[0.9] mb-[clamp(3rem,5vw,6rem)]"
          style={{
            fontFamily: 'Satoshi, system-ui, sans-serif',
            fontWeight: 800,
            fontSize: 'clamp(2.8rem, 7vw, 8rem)',
          }}
        >
          Where I&apos;ve{' '}
          <span
            style={{
              fontFamily: 'var(--font-instrument), Georgia, serif',
              fontStyle: 'italic',
              fontWeight: 400,
              color: 'rgba(10,10,10,0.3)',
            }}
          >
            Worked
          </span>
        </h2>

        {/* Timeline */}
        <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_2px_1fr] gap-0">

          {/* Center line (desktop) */}
          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-black/08">
            <div
              ref={lineRef}
              className="w-full bg-black/20"
              style={{ height: '100%', transformOrigin: 'top' }}
            />
          </div>

          {/* Entries */}
          <div className="lg:col-span-3 space-y-0">
            {EXPERIENCE.map((exp, i) => {
              const isLeft = i % 2 === 0;
              return (
                <ExperienceEntry key={i} exp={exp} index={i} isLeft={isLeft} />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceEntry({
  exp,
  index,
  isLeft,
}: {
  exp: typeof EXPERIENCE[0];
  index: number;
  isLeft: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10%' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className={`flex flex-col lg:flex-row gap-0 border-b border-black/[0.06] py-10 lg:py-14 ${
        isLeft ? '' : 'lg:flex-row-reverse'
      }`}
    >
      {/* Year column */}
      <div className={`lg:w-1/2 flex ${isLeft ? 'lg:justify-end lg:pr-16' : 'lg:justify-start lg:pl-16'} items-start`}>
        <div className={`flex flex-col ${isLeft ? 'lg:items-end lg:text-right' : 'lg:items-start lg:text-left'}`}>
          <span
            className="font-black text-black/08 leading-none tracking-[-0.04em] select-none"
            style={{
              fontFamily: 'Satoshi, system-ui, sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(4rem, 8vw, 9rem)',
            }}
          >
            {exp.year}
          </span>
          <span
            className="text-[0.6rem] tracking-[0.18em] uppercase text-black/30 font-medium -mt-2"
            style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}
          >
            {exp.type}
          </span>
        </div>
      </div>

      {/* Content column */}
      <div className={`lg:w-1/2 flex flex-col gap-3 ${isLeft ? 'lg:pl-16' : 'lg:pr-16'}`}>
        <div>
          <h3
            className="font-black text-black tracking-[-0.03em] leading-tight"
            style={{
              fontFamily: 'Satoshi, system-ui, sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(1.2rem, 2.5vw, 2rem)',
            }}
          >
            {exp.role}
          </h3>
          <p
            className="mt-0.5 text-[0.65rem] tracking-[0.16em] uppercase text-black/40 font-medium"
            style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}
          >
            {exp.company}
          </p>
        </div>
        <p
          className="text-black/50 leading-relaxed"
          style={{
            fontFamily: 'Satoshi, system-ui, sans-serif',
            fontSize: 'clamp(0.9rem, 1.2vw, 1.05rem)',
          }}
        >
          {exp.desc}
        </p>
        <div className="flex flex-wrap gap-1.5 mt-1">
          {exp.stack.map((t) => (
            <span
              key={t}
              className="border border-black/12 text-black/35 text-[0.58rem] tracking-[0.12em] uppercase px-2 py-0.5"
              style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
