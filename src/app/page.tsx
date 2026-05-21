'use client';

import { SmoothScroll } from '@/lib/SmoothScroll';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Projects } from '@/components/Projects';
import { Services } from '@/components/Services';
import { Experience } from '@/components/Experience';
import { Credentials } from '@/components/Credentials';
import { Marquee } from '@/components/Marquee';
import { Stack } from '@/components/Stack'; 
import { Contact } from '@/components/Contact';

export default function Home() {
  return (
    <SmoothScroll>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Marquee />
        <Stack />
        <Services />
        <Experience />
        <Credentials />
        <Contact />
      </main>
    </SmoothScroll>
  );
}
