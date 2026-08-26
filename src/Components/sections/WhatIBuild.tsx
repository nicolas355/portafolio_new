"use client"

import { config } from "@/config"
import SectionTitle from "../SectionTitle"
import Reveal from "../Reveal"

export default function WhatIBuild() {
  return (
    <section aria-labelledby="build-title" id="build">
      <SectionTitle eyebrow="Services" id="build-title" title="What I build" />
      <div className="grid gap-4 sm:grid-cols-2">
        {config.services.map((service, index) => (
          <Reveal delay={index * 0.05} key={service.title}>
            <article className="h-full rounded-2xl border border-white/10 bg-surface p-6 transition hover:border-accent/30">
              <h3 className="text-lg font-semibold text-white">{service.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">
                {service.description}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
