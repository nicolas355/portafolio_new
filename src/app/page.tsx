import Hero from '@/Components/sections/Hero';
import Contact from '@/Components/sections/Contact';
import Jobs from '@/Components/sections/Jobs';
import Projects from '@/Components/sections/Projects';
import About from '@/Components/sections/About';
import Skills from '@/Components/sections/Skills';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:px-24 px-4">
      <Hero />
      <div className="grid gap-20">
        <About />
        <Jobs />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </main>
  );
}
