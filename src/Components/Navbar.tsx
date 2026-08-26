"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { config } from "@/config"

const sectionIds = ["about", "experience", "projects", "skills", "contact"]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState("")

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[]

    if (!elements.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target.id) setActive(visible.target.id)
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5] }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled || open
          ? "border-white/10 bg-bg/80 backdrop-blur-xl"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-content items-center justify-between px-5 sm:px-8"
      >
        <a
          className="flex items-center gap-2 rounded-md text-sm font-semibold tracking-tight text-zinc-100"
          href="#home"
        >
          <Image alt="" height={28} src="/logo.svg" width={28} />
          <span className="hidden sm:inline">Nicolas Gonzalez</span>
          <span className="sm:hidden">NG</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {config.navLinks.map((link) => {
            const id = link.url.replace("#", "")
            return (
              <li key={link.name}>
                <a
                  className={`rounded-md px-3 py-2 text-sm transition-all hover:scale-105 ${
                    active === id
                      ? "text-white"
                      : "text-zinc-400 hover:text-white"
                  }`}
                  href={link.url}
                >
                  {link.name}
                </a>
              </li>
            )
          })}
        </ul>

        <div className="hidden md:block">
          <a
            className="inline-flex min-h-[40px] items-center rounded-full bg-accent px-4 text-sm font-medium text-zinc-950 transition hover:bg-white"
            href="#contact"
          >
            Let&apos;s work together
          </a>
        </div>

        <button
          aria-controls="mobile-menu"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 text-zinc-100 md:hidden"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span aria-hidden className="flex flex-col gap-1.5">
            <span
              className={`block h-0.5 w-5 bg-current transition ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-current transition ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-current transition ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      {open ? (
        <div
          className="border-t border-white/10 bg-bg px-5 py-6 md:hidden"
          id="mobile-menu"
        >
          <ul className="grid gap-2">
            {config.navLinks.map((link) => (
              <li key={link.name}>
                <a
                  className="block rounded-md px-3 py-3 text-base text-zinc-200 hover:bg-white/5"
                  href={link.url}
                  onClick={() => setOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <a
                className="mt-2 inline-flex min-h-[44px] w-full items-center justify-center rounded-full bg-accent px-4 text-sm font-medium text-zinc-950"
                href="#contact"
                onClick={() => setOpen(false)}
              >
                Let&apos;s work together
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  )
}
