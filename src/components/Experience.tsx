'use client';

import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const EASE = [0.22, 1, 0.36, 1] as const;

const EXPERIENCE = [
  {
    year: '2026',
    role: 'Full Stack Developer',
    company: 'Recoverderm',
    type: 'Contract · Remote',
    bullets: [
      'HIPAA-compliant patient portals with JWT rotation and encrypted data flows — zero compliance violations.',
      'Role-based access across patient, clinician, and admin layers, cutting unauthorized access surface by 60%.',
      'Automated workflows reduced manual admin overhead by 40%. Deployed on AWS with zero-downtime releases.',
    ],
    stack: ['Next.js', 'Django', 'PostgreSQL'],
  },
  {
    year: '2025',
    role: 'Full Stack Developer',
    company: 'Anoc.ng',
    type: 'Contract · Remote',
    bullets: [
      'Compliance platform for Chartered Accountants — client intake, documents, and audits in one encrypted system.',
      'Multi-tenant architecture with strict data isolation supporting 50+ concurrent client cases.',
      'Automated approval chains cut manual processing time by 50% and eliminated missed compliance deadlines.',
    ],
    stack: ['Next.js', 'Node.js', 'PostgreSQL'],
  },
  {
    year: '2025',
    role: 'Software Engineer',
    company: 'NextGen Robotics',
    type: 'Contract · Remote',
    bullets: [
      'Scalable Django backend on cloud infrastructure — 30% performance gain through architecture optimisation.',
      'CI/CD pipelines and automated provisioning cut deployment time by 45%.',
      'Zero-trust security and VPN infrastructure reduced vulnerabilities by 20%, downtime by 35%.',
    ],
    stack: ['Next.js', 'Go', 'AWS'],
  },
  {
    year: '2025',
    role: 'Sr. Full Stack Developer',
    company: 'Autoboy',
    type: 'Full-time · Remote',
    bullets: [
      'Scaled a dual-sided automotive marketplace with real-time inventory and Go microservices backend.',
      'Redis caching + connection pool tuning delivered 30% faster DB responses under peak load.',
      'Rate-limiting and circuit-breaker layers eliminated cascading failures across payment APIs.',
    ],
    stack: ['React', 'Go', 'PostgreSQL', 'Redis'],
  },
  {
    year: '2024',
    role: 'Full Stack Developer',
    company: 'Axflo Oil & Gas',
    type: 'Contract · Remote',
    bullets: [
      'Full-stack corporate site with Django — improved operational communication efficiency by 40%.',
      'Job application module with automated email notifications improved processing efficiency by 50%.',
      'Newsletter system increased subscriber engagement by 35%. Frontend performance up 30% post-integration.',
    ],
    stack: ['Next.js', 'Django', 'PostgreSQL'],
  },
  {
    year: '2024',
    role: 'Web Developer',
    company: 'KRK Motors',
    type: 'Contract · Remote',
    bullets: [
      'Premium brand site with GSAP animations — sub-1s load time, 98/100 Lighthouse score.',
      'Custom scroll-driven animation system tuned to the luxury automotive identity.',
    ],
    stack: ['Next.js', 'Tailwind', 'GSAP'],
  },
  {
    year: '2024',
    role: 'Full Stack Developer',
    company: 'Rokeyla Fashion',
    type: 'Contract · Remote',
    bullets: [
      'Full e-commerce platform with Stripe, live inventory sync via pg_notify, and order lifecycle management.',
      'Eliminated overselling during demand spikes. Reduced manual dispatch coordination by 55%.',
    ],
    stack: ['Next.js', 'Stripe', 'PostgreSQL'],
  },
  {
    year: '2024',
    role: 'Web Developer',
    company: 'Samdus Oil and Gas',
    type: 'Contract · Remote',
    bullets: [
      '98/100 Lighthouse score, sub-1s LCP, full Core Web Vitals compliance on INP, LCP, and CLS.',
      'SEO-first SSR architecture with structured data and custom scroll-driven animation system.',
    ],
    stack: ['Next.js', 'Django'],
  },
  {
    year: '2024',
    role: 'Web Developer',
    company: 'Handyman & Contractors',
    type: 'Contract · Remote',
    bullets: [
      'Conversion-optimised lead gen site — qualified inquiries tripled within 30 days of launch.',
      'CRM webhooks and automated lead routing ensured immediate team follow-up on every submission.',
    ],
    stack: ['React', 'Node.js', 'Tailwind'],
  },
  {
    year: '2024',
    role: 'Lead Full Stack Developer',
    company: 'Amanigo Travels',
    type: 'Contract · Remote',
    bullets: [
      'Booking engine, itinerary builder, and CMS with real-time pricing APIs from global travel providers.',
      'Idempotent payment API prevented duplicate charges and race conditions across concurrent bookings.',
    ],
    stack: ['Next.js', 'Django', 'PostgreSQL'],
  },
  {
    year: '2024',
    role: 'Team Leader',
    company: 'Zidio',
    type: 'Internship · Remote',
    bullets: [
      'Led 8 developers across 2 software products — 50% increase in user engagement, 100% deadline hit rate.',
      'Scrum implementation improved team productivity by 65% and cut feature cycle time by 50%.',
    ],
    stack: ['Agile', 'Jira', 'Scrum'],
  },
  {
    year: '2023',
    role: 'Lead Back-End Engineer',
    company: 'Dejaii',
    type: 'Contract · Remote',
    bullets: [
      'Built the API integration layer across multiple services into a unified, fault-tolerant pipeline.',
      'Rewrote critical queries and added caching — significantly reduced p95 latency on high-traffic endpoints.',
    ],
    stack: ['Django', 'PostgreSQL', 'REST API'],
  },
  {
    year: '2021',
    role: 'Full Stack Developer',
    company: 'Xtus Connect',
    type: 'Full-time · Remote',
    bullets: [
      'Owned full web app lifecycle — architecture through client handoff — over a 2+ year engagement.',
      'Resolved DB and SSR bottlenecks, improving page load times by 35% across the platform.',
    ],
    stack: ['React', 'Django', 'PostgreSQL'],
  },
  {
    year: '2019',
    role: 'QA Engineer',
    company: 'Nigerian Bottling Company',
    type: 'Internship · On-site',
    bullets: [
      'Automated Brix level monitoring across production lines — manual inspection cycles cut by 40%.',
      'Built test harnesses and dashboards giving ops real-time visibility into quality metrics.',
    ],
    stack: ['Python', 'Selenium', 'PostgreSQL'],
  },
];

/* ── Mobile card (vertical scroll) ──────────────────────────────────────── */
function MobileCard({ exp, index }: { exp: (typeof EXPERIENCE)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-6%' });
  const num = String(index + 1).padStart(2, '0');

  return (
    <motion.div
      ref={ref}
      className="border-b border-black/8 py-10 px-6"
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: EASE }}
    >
      {/* Top row: num + type */}
      <div className="flex items-center justify-between mb-4">
        <span
          className="text-[0.55rem] tracking-[0.24em] uppercase text-black/30 font-medium"
          style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}
        >
          {num}
        </span>
        <span
          className="text-[0.55rem] tracking-[0.18em] uppercase text-black/28 font-medium"
          style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}
        >
          {exp.type}
        </span>
      </div>

      {/* Year */}
      <div
        className="leading-none select-none mb-6"
        style={{
          fontFamily: 'var(--font-instrument), Georgia, serif',
          fontStyle: 'italic',
          fontWeight: 400,
          fontSize: 'clamp(5rem, 22vw, 9rem)',
          color: 'rgba(10,10,10,0.35)',
          letterSpacing: '-0.04em',
        }}
      >
        {exp.year}
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-black/10 mb-6" />

      {/* Role + company */}
      <div className="mb-5">
        <h3
          className="font-black text-black tracking-[-0.03em] leading-tight mb-2"
          style={{
            fontFamily: 'Satoshi, system-ui, sans-serif',
            fontWeight: 900,
            fontSize: 'clamp(1.7rem, 7vw, 2.6rem)',
          }}
        >
          {exp.role}
        </h3>
        <p
          className="text-[0.72rem] tracking-[0.22em] uppercase text-black/50 font-bold"
          style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}
        >
          {exp.company}
        </p>
      </div>

      {/* Description */}
      <ul className="mb-6 flex flex-col gap-2.5">
        {exp.bullets.map((b, i) => (
          <li
            key={i}
            className="flex gap-2.5 text-black/70 leading-relaxed font-semibold"
            style={{
              fontFamily: 'Satoshi, system-ui, sans-serif',
              fontSize: 'clamp(0.88rem, 3vw, 1rem)',
            }}
          >
            <span className="mt-[0.45em] w-1 h-1 rounded-full bg-black/30 shrink-0" />
            {b}
          </li>
        ))}
      </ul>

      {/* Stack badges */}
      <div className="flex flex-wrap gap-2">
        {exp.stack.map((t) => (
          <span
            key={t}
            className="border border-black/20 bg-black/5 text-black/60 text-[0.65rem] tracking-widest uppercase font-semibold px-3 py-1.5"
            style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

/* ── Desktop panel (horizontal scroll) ──────────────────────────────────── */
function DesktopPanel({
  exp,
  index,
  total,
}: {
  exp: (typeof EXPERIENCE)[0];
  index: number;
  total: number;
}) {
  const num = String(index + 1).padStart(2, '0');
  const tot = String(total).padStart(2, '0');

  return (
    <div
      className="relative shrink-0 h-full flex flex-col justify-between border-r border-black/8"
      style={{ width: '100vw', padding: 'clamp(2rem,4vw,4.5rem) clamp(2rem,5vw,5rem)' }}
    >
      {/* Top row */}
      <div className="flex items-center justify-between">
        <span
          className="text-[0.55rem] tracking-[0.24em] uppercase text-black/30 font-medium"
          style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}
        >
          {num} · {exp.type}
        </span>
        <span
          className="text-[0.55rem] tracking-[0.18em] uppercase text-black/20 font-medium tabular-nums"
          style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}
        >
          {num} / {tot}
        </span>
      </div>

      {/* Center: year + rule + content */}
      <div className="flex items-stretch flex-1 mt-8 mb-8 gap-0">
        {/* Year */}
        <div
          className="flex items-center shrink-0"
          style={{ width: 'clamp(220px, 32vw, 480px)' }}
        >
          <span
            style={{
              fontFamily: 'var(--font-instrument), Georgia, serif',
              fontStyle: 'italic',
              fontWeight: 400,
              fontSize: 'clamp(6rem, 14vw, 18rem)',
              color: 'rgba(10,10,10,0.38)',
              letterSpacing: '-0.04em',
              lineHeight: 1,
              userSelect: 'none',
            }}
          >
            {exp.year}
          </span>
        </div>

        {/* Vertical rule */}
        <div className="w-px bg-black/12 self-stretch mx-[clamp(2rem,3.5vw,4rem)] shrink-0" />

        {/* Content */}
        <div className="flex flex-col justify-center gap-6 flex-1 min-w-0 max-w-2xl">
          <div className="flex flex-col gap-3">
            <h3
              style={{
                fontFamily: 'Satoshi, system-ui, sans-serif',
                fontWeight: 900,
                fontSize: 'clamp(2rem, 3.8vw, 4.5rem)',
                color: 'rgba(10,10,10,0.92)',
                letterSpacing: '-0.035em',
                lineHeight: 1.02,
              }}
            >
              {exp.role}
            </h3>
            <p
              className="text-[0.75rem] tracking-[0.24em] uppercase text-black/55 font-bold"
              style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}
            >
              {exp.company}
            </p>
          </div>

          <ul className="flex flex-col gap-2" style={{ maxWidth: '54ch' }}>
            {exp.bullets.map((b, i) => (
              <li
                key={i}
                className="flex gap-2.5 text-black/72 leading-relaxed font-semibold"
                style={{
                  fontFamily: 'Satoshi, system-ui, sans-serif',
                  fontSize: 'clamp(0.85rem, 1.1vw, 1rem)',
                }}
              >
                <span className="mt-[0.5em] w-1 h-1 rounded-full bg-black/30 shrink-0" />
                {b}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2">
            {exp.stack.map((t) => (
              <span
                key={t}
                className="border border-black/20 bg-black/5 text-black/60 text-[0.65rem] tracking-widest uppercase font-semibold px-3 py-1.5"
                style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom scroll hint — first panel only */}
      {index === 0 && (
        <p
          className="text-[0.52rem] tracking-[0.2em] uppercase text-black/22 font-medium"
          style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}
        >
          Scroll to explore →
        </p>
      )}
    </div>
  );
}

/* ── Section ──────────────────────────────────────────────────────────────── */
export function Experience() {
  const sectionRef    = useRef<HTMLElement>(null);
  const pinRef        = useRef<HTMLDivElement>(null);
  const trackRef      = useRef<HTMLDivElement>(null);
  const progressRef   = useRef<HTMLDivElement>(null);
  const sectionInView = useInView(sectionRef, { once: true, margin: '-12%' });

  useEffect(() => {
    if (window.innerWidth < 1024) return; // desktop only

    const pin      = pinRef.current;
    const track    = trackRef.current;
    const progress = progressRef.current;
    if (!pin || !track) return;

    const ctx = gsap.context(() => {
      const getEnd = () => `+=${track.scrollWidth - window.innerWidth}`;

      gsap.to(track, {
        x: () => -(track.scrollWidth - window.innerWidth),
        ease: 'none',
        scrollTrigger: {
          trigger: pin,
          start: 'top top',
          end: getEnd,
          scrub: 1.2,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      if (progress) {
        gsap.to(progress, {
          scaleX: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: pin,
            start: 'top top',
            end: getEnd,
            scrub: 1.2,
            invalidateOnRefresh: true,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  /* Shared section header */
  const Header = (
    <div className="px-[clamp(1.25rem,5vw,5rem)] pt-[clamp(4rem,8vw,10rem)] pb-[clamp(2rem,4vw,4rem)]">
      <div className="flex items-center gap-4 mb-[clamp(2rem,4vw,4rem)]">
        <motion.span
          className="text-[0.6rem] tracking-[0.22em] uppercase text-black/30 font-medium shrink-0"
          style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}
          initial={{ opacity: 0, x: -16 }}
          animate={sectionInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE }}
        >
          04 / Experience
        </motion.span>
        <motion.div
          className="flex-1 h-px bg-black/10"
          initial={{ scaleX: 0, transformOrigin: 'left' }}
          animate={sectionInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.4, delay: 0.15, ease: EASE }}
        />
      </div>

      <h2
        className="font-black text-black tracking-[-0.04em] leading-[0.9]"
        style={{
          fontFamily: 'Satoshi, system-ui, sans-serif',
          fontWeight: 900,
          fontSize: 'clamp(2.4rem, 7vw, 8rem)',
        }}
      >
        {(['Where', "I've"] as const).map((word, i) => (
          <span key={word} className="inline-block overflow-hidden mr-[0.22em]">
            <motion.span
              className="block"
              initial={{ y: '110%' }}
              animate={sectionInView ? { y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.05 + i * 0.1, ease: EASE }}
            >
              {word}
            </motion.span>
          </span>
        ))}
        {' '}
        <span className="inline-block overflow-hidden">
          <motion.span
            className="block"
            style={{
              fontFamily: 'var(--font-instrument), Georgia, serif',
              fontStyle: 'italic',
              fontWeight: 400,
              color: 'rgba(10,10,10,0.28)',
            }}
            initial={{ y: '110%' }}
            animate={sectionInView ? { y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.28, ease: EASE }}
          >
            Worked
          </motion.span>
        </span>
      </h2>
    </div>
  );

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="w-full border-t border-black/8"
    >
      {/* ── Mobile layout (< lg) ─────────────────────────────────────────── */}
      <div className="block lg:hidden relative overflow-hidden">
        {/* Video bg */}
        <video
          autoPlay muted loop playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
        >
          <source src="/hero2.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-white/78 z-1 pointer-events-none" />

        <div className="relative z-10">
          {Header}
          <div>
            {EXPERIENCE.map((exp, i) => (
              <MobileCard key={i} exp={exp} index={i} />
            ))}
          </div>
        </div>
      </div>

      {/* ── Desktop layout (≥ lg) ────────────────────────────────────────── */}
      <div className="hidden lg:block">
        {/* Header sits above the pin — plain white bg */}
        <div className="bg-white">
          {Header}
        </div>

        {/* Pinned horizontal scroll */}
        <div ref={pinRef} data-cursor="drag" className="h-screen overflow-hidden relative">
          {/* Video bg — pinned with content */}
          <video
            autoPlay muted loop playsInline
            className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
          >
            <source src="/hero2.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-white/72 z-1 pointer-events-none" />

          {/* Progress bar */}
          <div className="absolute top-0 left-0 right-0 h-px bg-black/8 z-20 pointer-events-none">
            <div
              ref={progressRef}
              className="h-full bg-black/40 origin-left"
              style={{ transform: 'scaleX(0)' }}
            />
          </div>

          {/* Track */}
          <div
            ref={trackRef}
            className="relative z-10 flex h-full"
            style={{ width: `${EXPERIENCE.length * 100}vw` }}
          >
            {EXPERIENCE.map((exp, i) => (
              <DesktopPanel
                key={i}
                exp={exp}
                index={i}
                total={EXPERIENCE.length}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
