'use client';

import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Plus, Minus } from 'lucide-react';
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

const SERVICES = [
  {
    index: '01',
    title: 'Full Stack Development',
    short: 'End-to-end web applications.',
    body: 'React/Next.js front-end, Django/Go back-end, PostgreSQL persistence. I handle architecture, API design, state management, and deployment — from zero to production.',
    keywords: ['React', 'Next.js', 'Django', 'Go', 'PostgreSQL'],
  },
  {
    index: '02',
    title: 'API & Microservices',
    short: 'REST APIs designed for scale.',
    body: 'Rate-limiting, idempotency keys, JWT auth, connection pooling, caching strategies. I build services that survive traffic spikes without becoming a maintenance liability.',
    keywords: ['REST', 'Redis', 'JWT', 'Go', 'Node.js'],
  },
  {
    index: '03',
    title: 'Cloud & DevOps',
    short: 'AWS · Docker · CI/CD.',
    body: 'Container orchestration, GitHub Actions pipelines, zero-downtime deploys, environment management. I set up infrastructure that your team can actually understand.',
    keywords: ['AWS', 'Docker', 'GitHub Actions', 'Terraform'],
  },
  {
    index: '04',
    title: 'Ecommerce Systems',
    short: 'Payments, inventory, conversions.',
    body: 'Stripe/Paystack integration, multi-vendor marketplaces, real-time inventory, and checkout flows tuned for conversion. Headless or full-stack.',
    keywords: ['Stripe', 'Paystack', 'Next.js', 'Django'],
  },
  {
    index: '05',
    title: 'Performance Audits',
    short: "Find and fix what’s slow.",
    body: 'Database query analysis, bundle optimization, Core Web Vitals improvement, caching architecture review. I find bottlenecks and eliminate them with evidence.',
    keywords: ['PostgreSQL', 'Lighthouse', 'Webpack', 'CDN'],
  },
];

function ServiceRow({ service, index }: { service: typeof SERVICES[0]; index: number }) {
  const [open, setOpen] = useState(false);
  const rowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!rowRef.current) return;
    gsap.fromTo(
      rowRef.current,
      { x: -30, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: rowRef.current,
          start: 'top 88%',
        },
        delay: index * 0.06,
      }
    );
  }, [index]);

  return (
    <div ref={rowRef} className="border-b border-white/[0.08]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-6 lg:py-8 text-left group"
      >
        <div className="flex items-baseline gap-6 lg:gap-10 flex-1 min-w-0">
          <span
            className="text-[0.6rem] tracking-[0.2em] uppercase text-white/25 font-medium shrink-0"
            style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}
          >
            {service.index}
          </span>
          <div className="flex flex-col lg:flex-row lg:items-baseline gap-1 lg:gap-8 flex-1 min-w-0">
            <h3
              className="font-black text-white tracking-[-0.035em] leading-none group-hover:text-white/60 transition-colors duration-200"
              style={{
                fontFamily: 'Satoshi, system-ui, sans-serif',
                fontWeight: 800,
                fontSize: 'clamp(1.5rem, 3.5vw, 3.5rem)',
              }}
            >
              {service.title}
            </h3>
            <p
              className="text-white/35 text-sm lg:text-base hidden lg:block"
              style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}
            >
              {service.short}
            </p>
          </div>
        </div>
        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          className="shrink-0 ml-4"
        >
          {open ? (
            <Minus size={20} className="text-white/40" />
          ) : (
            <Plus size={20} className="text-white/40 group-hover:text-white/70 transition-colors" />
          )}
        </motion.div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-8 pl-[calc(0.6rem+1.5rem+1.5rem)] lg:pl-[calc(0.6rem+2.5rem+2.5rem)]">
              <p
                className="text-white/50 leading-relaxed max-w-2xl mb-5"
                style={{
                  fontFamily: 'Satoshi, system-ui, sans-serif',
                  fontSize: 'clamp(0.95rem, 1.4vw, 1.1rem)',
                }}
              >
                {service.body}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.keywords.map((kw) => (
                  <span
                    key={kw}
                    className="border border-white/15 text-white/35 text-[0.58rem] tracking-[0.14em] uppercase px-2.5 py-1"
                    style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}
                  >
                    {kw}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="w-full bg-[#0A0A0A]"
    >
      <div className="max-w-[1440px] mx-auto px-[clamp(1.25rem,5vw,5rem)] py-[clamp(5rem,10vw,11rem)]">

        {/* Section label */}
        <div className="flex items-center gap-4 mb-[clamp(3rem,6vw,7rem)]">
          <span
            className="text-[0.6rem] tracking-[0.22em] uppercase text-white/20 font-medium"
            style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}
          >
            03 / Services
          </span>
          <div className="flex-1 h-px bg-white/10" />
        </div>

        {/* Headline */}
        <h2
          className="font-black text-white tracking-[-0.04em] leading-[0.9] mb-[clamp(3rem,5vw,6rem)]"
          style={{
            fontFamily: 'Satoshi, system-ui, sans-serif',
            fontWeight: 800,
            fontSize: 'clamp(2.8rem, 7vw, 8rem)',
          }}
        >
          What I{' '}
          <span
            style={{
              fontFamily: 'var(--font-instrument), Georgia, serif',
              fontStyle: 'italic',
              fontWeight: 400,
              color: 'rgba(255,255,255,0.3)',
            }}
          >
            Build
          </span>
        </h2>

        {/* Service rows */}
        <div className="border-t border-white/[0.08]">
          {SERVICES.map((service, i) => (
            <ServiceRow key={service.index} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
