"use client"

import { useCallback, useEffect, useState } from "react"

interface Props {
  limit: number
}

const ScrollTopButton: React.FC<Props> = ({ limit }) => {
  const [hasScrolled, setHasScrolled] = useState(false)

  const handleScroll = useCallback(() => {
    setHasScrolled(window.scrollY >= limit)
  }, [limit])

  useEffect(() => {
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  return (
    <a
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 z-40 hidden h-12 w-12 items-center justify-center rounded-full bg-accent text-zinc-950 transition md:flex ${
        hasScrolled ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      }`}
      href="#home"
    >
      ↑
    </a>
  )
}

export default ScrollTopButton
