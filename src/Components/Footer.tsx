import { config } from "@/config"

export default function Footer() {
  return (
    <footer className="border-t border-white/5">
      <div className="mx-auto flex max-w-content flex-col gap-4 px-5 py-8 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>© 2026 {config.name}</p>
        <div className="flex flex-wrap gap-4">
          {config.socialMedia.map((social) => (
            <a
              className="hover:text-white"
              href={social.url}
              key={social.name}
              rel="noreferrer"
              target="_blank"
            >
              {social.name}
            </a>
          ))}
          <a className="hover:text-white" href={`mailto:${config.email}`}>
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
