import Image from "next/image"

interface Props {
  title: string
  description: string
  problem?: string
  solution?: string
  image: string
  url?: string
  github?: string
  tech: string[]
  features?: string[]
}

const ProjectItem: React.FC<Props> = ({
  title,
  description,
  problem,
  solution,
  image,
  url,
  github,
  tech,
  features,
}) => {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-surface transition hover:border-accent/30">
      {url ? (
        <a
          className="relative block h-44 overflow-hidden border-b border-white/10"
          href={url}
          rel="noreferrer"
          target="_blank"
        >
          <Image
            alt={`${title} screenshot`}
            className="h-full w-full object-cover object-top transition duration-300 hover:scale-[1.02]"
            height={360}
            src={image}
            width={640}
            sizes="(max-width: 640px) 100vw, 50vw"
          />
        </a>
      ) : (
        <div className="relative h-44 overflow-hidden border-b border-white/10">
          <Image
            alt={`${title} screenshot`}
            className="h-full w-full object-cover object-top"
            height={360}
            src={image}
            width={640}
            sizes="(max-width: 640px) 100vw, 50vw"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="text-sm leading-6 text-muted">{description}</p>
        {problem ? (
          <p className="text-sm leading-6 text-zinc-300">
            <span className="font-medium text-white">Problem. </span>
            {problem}
          </p>
        ) : null}
        {solution ? (
          <p className="text-sm leading-6 text-zinc-300">
            <span className="font-medium text-white">Solution. </span>
            {solution}
          </p>
        ) : null}
        {features?.length ? (
          <ul className="text-sm text-muted">
            {features.map((feature) => (
              <li key={feature}>· {feature}</li>
            ))}
          </ul>
        ) : null}
        <ul className="flex flex-wrap gap-2">
          {tech.map((item) => (
            <li
              className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-zinc-300"
              key={item}
            >
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-auto flex gap-4 pt-2">
          {url ? (
            <a
              className="text-sm font-medium text-accent hover:text-white"
              href={url}
              rel="noreferrer"
              target="_blank"
            >
              Live demo
            </a>
          ) : null}
          {github ? (
            <a
              className="text-sm font-medium text-zinc-300 hover:text-white"
              href={github}
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

export default ProjectItem
