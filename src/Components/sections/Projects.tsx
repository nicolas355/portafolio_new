"use client"

import { config } from "@/config"
import SectionTitle from "../SectionTitle"
import ProjectItem from "../ProjectItem"
import FeaturedProject from "../FeaturedProject"
import Reveal from "../Reveal"

export default function Projects() {
  return (
    <section aria-labelledby="projects-title" id="projects">
      <SectionTitle eyebrow="Projects" id="projects-title" title="Selected work" />
      <div className="grid gap-8">
        {config.featuredProjects.map((project, index) => (
          <Reveal delay={index * 0.04} key={project.id}>
            <FeaturedProject featured project={project} />
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-16">
        <h3 className="mb-6 text-lg font-semibold text-white">More work</h3>
        <div className="grid gap-6 sm:grid-cols-2">
          {config.projects.map((project) => (
            <ProjectItem
              description={project.description}
              features={project.features}
              github={project.github || undefined}
              image={project.image}
              key={project.name}
              problem={project.problem}
              solution={project.solution}
              tech={project.tech}
              title={project.name}
              url={project.url}
            />
          ))}
        </div>
      </Reveal>
    </section>
  )
}
