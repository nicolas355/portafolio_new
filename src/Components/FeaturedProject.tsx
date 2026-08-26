import Image from "next/image"

interface Project {
  id?: string
  name: string
  tagline: string
  problem: string
  solution: string
  tech: string[]
  features: string[]
  url?: string
  github?: string
  image?: string
  flow?: string[]
}

export default function FeaturedProject({
  project,
  featured = false,
}: {
  project: Project
  featured?: boolean
}) {
  return (
    <article
      className={`overflow-hidden rounded-2xl border border-white/10 bg-surface ${
        featured ? "lg:grid lg:grid-cols-2" : "grid"
      }`}
    >
      <div className="relative min-h-[220px] border-b border-white/10 bg-zinc-950 lg:border-b-0 lg:border-r">
        {project.image ? (
          <Image
            alt={`${project.name} preview`}
            className="h-full w-full object-cover object-top"
            height={720}
            src={project.image}
            unoptimized={project.image.endsWith(".gif")}
            width={1200}
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        ) : project.flow ? (
          <ol className="flex h-full flex-col justify-center gap-3 p-6 sm:p-8">
            {project.flow.map((step, index) => (
              <li className="flex items-center gap-3 text-sm text-zinc-200" key={step}>
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent/15 text-xs font-medium text-accent">
                  {index + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        ) : (
          <div className="flex h-full min-h-[220px] items-center justify-center text-sm text-zinc-500">
            Preview coming soon
          </div>
        )}
      </div>
      <div className="flex flex-col gap-4 p-6 sm:p-8">
        <div>
          <h3 className="text-xl font-semibold text-white">{project.name}</h3>
          <p className="mt-1 text-sm text-muted">{project.tagline}</p>
        </div>
        <div className="grid gap-3 text-sm leading-6 text-zinc-300">
          <p>
            <span className="font-medium text-white">Problem. </span>
            {project.problem}
          </p>
          <p>
            <span className="font-medium text-white">Solution. </span>
            {project.solution}
          </p>
        </div>
        <ul className="grid gap-1.5 text-sm text-muted">
          {project.features.map((feature) => (
            <li key={feature}>· {feature}</li>
          ))}
        </ul>
        <ul className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <li
              className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-zinc-300"
              key={tech}
            >
              {tech}
            </li>
          ))}
        </ul>
        <div className="mt-auto flex flex-wrap gap-3 pt-2">
          {project.url ? (
            <a
              className="inline-flex min-h-[40px] items-center text-sm font-medium text-accent hover:text-white"
              href={project.url}
              rel="noreferrer"
              target="_blank"
            >
              Live demo
            </a>
          ) : null}
          {project.github ? (
            <a
              className="inline-flex min-h-[40px] items-center text-sm font-medium text-zinc-300 hover:text-white"
              href={project.github}
              rel="noreferrer"
              target="_blank"
            >
              GitHub
            </a>
          ) : null}
        </div>
      </div>
    </article>
  )
}
