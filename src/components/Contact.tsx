'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger, SplitText);

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const emailRef = useRef<HTMLAnchorElement>(null);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (!sectionRef.current || !emailRef.current) return;
    const ctx = gsap.context(() => {
      const split = new SplitText(emailRef.current!, { type: 'chars' });
      gsap.fromTo(
        split.chars,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.0,
          stagger: 0.025,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: emailRef.current,
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSending(false);
    setSent(true);
  };

  const SOCIALS = [
    {
      label: 'GitHub',
      href: 'https://github.com/Donrington',
      svg: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
        </svg>
      ),
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/carrington-abakwe-b0b0a0217',
      svg: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
    },
    {
      label: 'X / Twitter',
      href: 'https://x.com/CarlSwitch_CHUG',
      svg: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.741l7.73-8.835L1.254 2.25H8.08l4.258 5.63 5.906-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="w-full bg-[#0A0A0A] border-t border-white/[0.06]"
    >
      <div className="max-w-[1440px] mx-auto px-[clamp(1.25rem,5vw,5rem)] pt-[clamp(5rem,10vw,11rem)] pb-[clamp(3rem,6vw,7rem)]">

        {/* Section label */}
        <div className="flex items-center gap-4 mb-[clamp(3rem,6vw,8rem)]">
          <span
            className="text-[0.6rem] tracking-[0.22em] uppercase text-white/20 font-medium"
            style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}
          >
            05 / Contact
          </span>
          <div className="flex-1 h-px bg-white/10" />
        </div>

        {/* Giant email CTA */}
        <div className="mb-[clamp(4rem,8vw,10rem)]">
          <p
            className="text-white/30 mb-6"
            style={{
              fontFamily: 'var(--font-instrument), Georgia, serif',
              fontStyle: 'italic',
              fontSize: 'clamp(1.1rem, 2.5vw, 2rem)',
            }}
          >
            Have a project in mind?
          </p>
          <div className="overflow-hidden">
            <a
              ref={emailRef}
              href="mailto:carryoby@gmail.com"
              className="block font-black text-white tracking-[-0.04em] leading-[0.88] hover:text-white/50 transition-colors duration-300 will-change-transform"
              style={{
                fontFamily: 'Satoshi, system-ui, sans-serif',
                fontWeight: 800,
                fontSize: 'clamp(2.5rem, 6.5vw, 8rem)',
                wordBreak: 'break-all',
              }}
            >
              carryoby@gmail.com
            </a>
          </div>
          <div className="mt-6 flex items-center gap-4">
            <a
              href="mailto:carryoby@gmail.com"
              className="group inline-flex items-center gap-2 border border-white/20 text-white/50 hover:border-white hover:text-white px-6 py-3 text-[0.65rem] tracking-[0.18em] uppercase font-medium transition-all duration-200"
              style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}
            >
              Send Email
              <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Grid: form + info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[clamp(3rem,6vw,8rem)] border-t border-white/[0.08] pt-[clamp(3rem,5vw,6rem)]">

          {/* Contact form */}
          <div>
            <h3
              className="font-black text-white tracking-[-0.03em] mb-8"
              style={{
                fontFamily: 'Satoshi, system-ui, sans-serif',
                fontWeight: 800,
                fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
              }}
            >
              Or send a message
            </h3>

            {sent ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="py-10 text-center"
              >
                <p
                  className="text-white/60"
                  style={{
                    fontFamily: 'var(--font-instrument), Georgia, serif',
                    fontStyle: 'italic',
                    fontSize: 'clamp(1.2rem, 2.5vw, 2rem)',
                  }}
                >
                  Message received. I&apos;ll be in touch.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      className="block text-[0.6rem] tracking-[0.18em] uppercase text-white/30 mb-2 font-medium"
                      style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState((p) => ({ ...p, name: e.target.value }))}
                      className="w-full bg-transparent border border-white/15 text-white placeholder:text-white/20 px-4 py-3 text-sm focus:outline-none focus:border-white/40 transition-colors"
                      style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-[0.6rem] tracking-[0.18em] uppercase text-white/30 mb-2 font-medium"
                      style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState((p) => ({ ...p, email: e.target.value }))}
                      className="w-full bg-transparent border border-white/15 text-white placeholder:text-white/20 px-4 py-3 text-sm focus:outline-none focus:border-white/40 transition-colors"
                      style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label
                    className="block text-[0.6rem] tracking-[0.18em] uppercase text-white/30 mb-2 font-medium"
                    style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}
                  >
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState((p) => ({ ...p, message: e.target.value }))}
                    className="w-full bg-transparent border border-white/15 text-white placeholder:text-white/20 px-4 py-3 text-sm focus:outline-none focus:border-white/40 transition-colors resize-none"
                    style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}
                    placeholder="Tell me about your project..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full bg-white text-black py-4 text-[0.65rem] tracking-[0.2em] uppercase font-medium hover:bg-white/80 transition-colors duration-200 disabled:opacity-50"
                  style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}
                >
                  {sending ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>

          {/* Info panel */}
          <div className="flex flex-col justify-between gap-10">
            <div className="space-y-6">
              <div>
                <p
                  className="text-[0.6rem] tracking-[0.18em] uppercase text-white/25 font-medium mb-1"
                  style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}
                >
                  Location
                </p>
                <p
                  className="text-white/60"
                  style={{
                    fontFamily: 'Satoshi, system-ui, sans-serif',
                    fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
                  }}
                >
                  Remote · Available Worldwide
                </p>
              </div>
              <div>
                <p
                  className="text-[0.6rem] tracking-[0.18em] uppercase text-white/25 font-medium mb-1"
                  style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}
                >
                  Response Time
                </p>
                <p
                  className="text-white/60"
                  style={{
                    fontFamily: 'Satoshi, system-ui, sans-serif',
                    fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
                  }}
                >
                  Within 24 hours
                </p>
              </div>
              <div>
                <p
                  className="text-[0.6rem] tracking-[0.18em] uppercase text-white/25 font-medium mb-1"
                  style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}
                >
                  Status
                </p>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  <p
                    className="text-white/60"
                    style={{
                      fontFamily: 'Satoshi, system-ui, sans-serif',
                      fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
                    }}
                  >
                    Available for new projects
                  </p>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="flex gap-4">
              {SOCIALS.map(({ label, href, svg }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-white/15 flex items-center justify-center text-white/30 hover:text-white hover:border-white/40 transition-all duration-200"
                  aria-label={label}
                >
                  {svg}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer bar */}
        <div className="mt-[clamp(4rem,7vw,8rem)] pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p
            className="text-[0.58rem] tracking-[0.18em] uppercase text-white/20 font-medium"
            style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}
          >
            © 2026 Abakwe Carrington · Cybersage
          </p>
          <p
            className="text-[0.58rem] tracking-[0.18em] uppercase text-white/15"
            style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}
          >
            Built with Next.js · Deployed on Vercel
          </p>
        </div>
      </div>
    </section>
  );
}
