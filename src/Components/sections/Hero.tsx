"use client"

import { config } from "@/config"
import Button from "../Button"
import HeroVisual from "../HeroVisual"
import Reveal from "../Reveal"
import SocialLinks from "../SocialLinks"

export default function Hero() {
  return (
    <section className="relative border-b border-white/5" id="home">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(132,182,255,0.08),transparent_45%)]" />
      <div className="mx-auto grid max-w-content items-center gap-12 px-5 py-16 sm:px-8 lg:min-h-[calc(100vh-4rem)] lg:grid-cols-[1.1fr_0.9fr] lg:py-20">
        <div className="grid gap-4">
          <Reveal width="fit-content">
            <p className="text-caption font-medium uppercase text-accent">
              {config.name}
            </p>
          </Reveal>
          <Reveal delay={0.05} width="fit-content">
            <h1 className="text-h1 text-white">{config.role}</h1>
          </Reveal>
          <Reveal delay={0.1} width="fit-content">
            <p className="text-lg text-zinc-300">
              {config.stack.join(" · ")}
            </p>
          </Reveal>
          <Reveal delay={0.15} width="fit-content">
            <p className="max-w-xl text-xl font-medium tracking-tight text-white">
              I build modern, scalable and user-focused web applications.
            </p>
          </Reveal>
          <Reveal delay={0.2} width="fit-content">
            <p className="max-w-xl text-base leading-7 text-muted">
              Frontend developer focused on React, Next.js and TypeScript, with
              experience shipping real-world products, reusable UI and
              performance-minded interfaces. I also connect apps to APIs,
              databases and automation when the product needs it.
            </p>
          </Reveal>
          <Reveal delay={0.25} width="fit-content">
            <div className="mt-4 flex flex-wrap gap-3">
              <Button href="#projects">View my work</Button>
              <Button href="#contact" variant="ghost">
                Let&apos;s talk
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.3} width="fit-content">
            <SocialLinks className="mt-2" />
          </Reveal>
        </div>
        <Reveal delay={0.2}>
          <HeroVisual />
        </Reveal>
      </div>
    </section>
  )
}
