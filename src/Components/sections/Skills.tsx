"use client"

import { config } from "@/config"
import SectionTitle from "../SectionTitle"
import Reveal from "../Reveal"

export default function Skills() {
  return (
    <section aria-labelledby="skills-title" id="skills">
      <SectionTitle
        eyebrow="Skills"
        id="skills-title"
        title="Tools I use with intention"
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {config.skills.map((group, index) => (
          <Reveal delay={index * 0.04} key={group.category}>
            <article className="h-full rounded-2xl border border-white/10 bg-surface p-5">
              <h3 className="text-sm font-medium text-accent">{group.category}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    className="rounded-full border border-white/10 px-2.5 py-1 text-sm text-zinc-200"
                    key={item}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
      <p className="mt-6 text-sm text-zinc-500">
        Spanish (native) · English (intermediate)
      </p>
    </section>
  )
}
