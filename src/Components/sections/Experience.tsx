"use client"

import { config } from "@/config"
import SectionTitle from "../SectionTitle"
import Reveal from "../Reveal"

export default function Experience() {
  return (
    <section aria-labelledby="experience-title" id="experience">
      <SectionTitle
        eyebrow="Experience"
        id="experience-title"
        title="Where I have shipped work"
      />
      <ol className="relative border-l border-white/10 pl-6 md:pl-8">
        {config.experience.map((job, index) => (
          <li className="relative mb-12 last:mb-0" key={job.company}>
            <span
              aria-hidden
              className="absolute -left-[1.54rem] top-1.5 h-3 w-3 rounded-full border border-accent bg-bg md:-left-[2.04rem]"
            />
            <Reveal delay={index * 0.05}>
              <article className="grid gap-3">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="text-h3 text-white">
                    {job.role}
                    <span className="text-muted"> · {job.company}</span>
                  </h3>
                  <p className="text-sm text-zinc-500">{job.date}</p>
                </div>
                <ul className="grid gap-2 text-sm leading-6 text-muted">
                  {job.bullets.map((bullet) => (
                    <li className="flex gap-2" key={bullet}>
                      <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {job.tech.map((tech) => (
                    <li
                      className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-zinc-300"
                      key={tech}
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  )
}
