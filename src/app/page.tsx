import Hero from "@/Components/sections/Hero"
import About from "@/Components/sections/About"
import Experience from "@/Components/sections/Experience"
import Projects from "@/Components/sections/Projects"
import WhatIBuild from "@/Components/sections/WhatIBuild"
import Skills from "@/Components/sections/Skills"
import Contact from "@/Components/sections/Contact"

export default function Home() {
  return (
    <main className="min-h-screen" id="main">
      <Hero />
      <div className="mx-auto grid max-w-content gap-24 px-5 pb-28 pt-8 sm:px-8 md:gap-32">
        <About />
        <Experience />
        <Projects />
        <WhatIBuild />
        <Skills />
        <Contact />
      </div>
    </main>
  )
}
