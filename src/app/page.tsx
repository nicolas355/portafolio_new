import Hero from "@/Components/sections/Hero"
import Contact from "@/Components/sections/Contact"
import Jobs from "@/Components/sections/Jobs"
import Projects from "@/Components/sections/Projects"
import About from "@/Components/sections/About"
import Skills from "@/Components/sections/Skills"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col px-5 md:px-0  justify-between  ">
      <Hero />
      <div className="grid gap-20">
        <About />
        <Jobs />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </main>
  )
}
