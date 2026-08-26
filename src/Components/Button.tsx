interface Props {
  children: React.ReactNode
  href?: string
  variant?: "primary" | "ghost"
  type?: "button" | "submit"
}

export default function Button({
  children,
  href,
  variant = "primary",
  type = "button",
}: Props) {
  const className =
    variant === "primary"
      ? "inline-flex min-h-[44px] items-center justify-center rounded-full bg-accent px-5 text-sm font-medium text-zinc-950 transition-all hover:bg-white hover:scale-95"
      : "inline-flex min-h-[44px] items-center justify-center rounded-full border border-white/15 px-5 text-sm font-medium text-zinc-100 transition hover:border-accent/60 hover:text-white"

  if (href) {
    const external = href.startsWith("http") || href.startsWith("mailto:")
    return (
      <a
        className={className}
        href={href}
        rel={external ? "noreferrer" : undefined}
        target={href.startsWith("http") ? "_blank" : undefined}
      >
        {children}
      </a>
    )
  }

  return (
    <button className={className} type={type}>
      {children}
    </button>
  )
}
