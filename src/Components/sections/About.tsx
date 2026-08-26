"use client"

import SectionTitle from "../SectionTitle"
import Reveal from "../Reveal"

export default function About() {
  return (
    <section aria-labelledby="about-title" id="about">
      <SectionTitle eyebrow="About" id="about-title" title="Who I am" />
      <div className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr]">
        <Reveal>
          <div className="max-w-2xl space-y-4 text-base leading-7 text-muted">
            <p>
              I&apos;m Nicolas, a frontend developer specialized in React,
              Next.js and TypeScript. I build web applications, dashboards and
              product interfaces meant to be used in production.
            </p>
            <p>
              I have more than two years of professional experience, including
              product work at YopLabs on Labbi, a B2B platform connecting
              pharmacies with laboratories and drugstores. I also work with
              APIs, Node.js and automation when a product needs more than a UI.
            </p>
            <p>
              I&apos;m interested in building software that solves operational
              problems: ordering systems, admin tools, and workflows that
              connect frontend with real business processes.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-1">
            <div className="rounded-2xl border border-white/10 bg-surface p-5">
              <dt className="text-caption uppercase text-zinc-500">
                Experience
              </dt>
              <dd className="mt-2 text-2xl font-semibold text-white">2+ years</dd>
              <p className="mt-1 text-sm text-muted">Professional frontend work</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-surface p-5">
              <dt className="text-caption uppercase text-zinc-500">Focus</dt>
              <dd className="mt-2 text-2xl font-semibold text-white">
                React / Next.js
              </dd>
              <p className="mt-1 text-sm text-muted">TypeScript as the default</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-surface p-5">
              <dt className="text-caption uppercase text-zinc-500">Also</dt>
              <dd className="mt-2 text-2xl font-semibold text-white">
                APIs &amp; automation
              </dd>
              <p className="mt-1 text-sm text-muted">When the product needs it</p>
            </div>
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
