import Reveal from "./Reveal"

interface Props {
  title: string
  eyebrow?: string
  id?: string
}

const SectionTitle: React.FC<Props> = ({ title, eyebrow, id }) => {
  return (
    <Reveal className="mb-10" width="fit-content">
      <div>
        {eyebrow ? (
          <p className="mb-3 text-caption font-medium uppercase text-accent">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="text-h2 text-white" id={id}>
          {title}
        </h2>
      </div>
    </Reveal>
  )
}

export default SectionTitle
