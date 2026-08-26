"use client"

import { config } from "@/config"
import Reveal from "../Reveal"
import Button from "../Button"
import SocialLinks from "../SocialLinks"

export default function Contact() {
  return (
    <section
      aria-labelledby="contact-title"
      className="rounded-3xl border border-white/10 bg-surface px-6 py-12 sm:px-10"
      id="contact"
    >
      <Reveal width="fit-content">
        <p className="text-caption font-medium uppercase text-accent">Contact</p>
        <h2 className="mt-3 text-h2 text-white" id="contact-title">
          Let&apos;s build something useful.
        </h2>
      </Reveal>
      <Reveal delay={0.05}>
        <p className="mt-4 max-w-xl text-base leading-7 text-muted">
          If you need a frontend developer for a React or Next.js product, a
          dashboard, or an interface connected to APIs and automation, get in
          touch.
        </p>
      </Reveal>
      <Reveal delay={0.1}>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href={`mailto:${config.email}`}>Get in touch</Button>
          <Button href={config.resume} variant="ghost">
            View resume
          </Button>
        </div>
      </Reveal>
      <Reveal delay={0.15}>
        <div className="mt-8 flex flex-col gap-2 text-sm text-zinc-300">
          <a className="w-fit hover:text-white" href={`mailto:${config.email}`}>
            {config.email}
          </a>
          <SocialLinks className="mt-3" />
        </div>
      </Reveal>
    </section>
  )
}
