import { config } from "@/config"

interface Props {
  className?: string
}

export default function SocialLinks({ className = "" }: Props) {
  return (
    <ul className={`flex items-center gap-3 ${className}`}>
      {config.socialMedia.map((social) => (
        <li key={social.name}>
          <a
            className="inline-flex min-h-[40px] items-center rounded-full border border-white/10 px-3 text-sm text-zinc-300 transition hover:border-accent/50 hover:text-white"
            href={social.url}
            rel="noreferrer"
            target="_blank"
          >
            {social.name}
          </a>
        </li>
      ))}
      <li>
        <a
          className="inline-flex min-h-[40px] items-center rounded-full border border-white/10 px-3 text-sm text-zinc-300 transition hover:border-accent/50 hover:text-white"
          href={`mailto:${config.email}`}
        >
          Email
        </a>
      </li>
    </ul>
  )
}
