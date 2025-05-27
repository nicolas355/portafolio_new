"use client"
import React from "react"
import Reveal from "./Reveal"
import Image from "next/image"
interface Project {
  title: string
  description: string
  media?: string[]
  video?: string
  responsibilities?: string[]
}

interface ExperienceCardProps {
  company: string
  role: string
  date: string
  description: string
  projects?: Project[]
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  company,
  role,
  date,
  description,
  projects = [],
}) => {
  return (
    <div className="flex gap-8">
      <Reveal>
        <div className="w-full flex justify-between">
          <p className="text-gray-500">{company}</p>
          <p className="text-gray-500 hidden md:flex">{date}</p>
        </div>

        <div className="grid gap-4">
          <Reveal>
            <h3 className="font-bold mt-2 text-3xl">{role}</h3>
          </Reveal>
          <Reveal>
            <p>{description}</p>
          </Reveal>

          {projects.map(
            ({ title, description, video, media, responsibilities }, i) => (
              <Reveal key={i}>
                <h2 className="text-2xl line-clamp-3 mb-3 mt-3 uppercase text-white font-bold">
                  {title}
                </h2>
                <p className="mb-3 mt-3">{description}</p>
                {responsibilities?.map((resp, idx) => (
                  <p key={idx} className={idx === 0 ? "mt-2" : ""}>
                    - {resp}
                  </p>
                ))}

                {media && media.length > 0 ? (
                  media.map((src, idx) =>
                    src.endsWith(".gif") ? (
                      <Image
                        width={500}
                        height={500}
                        key={idx}
                        src={src}
                        alt={`${title} media ${idx + 1}`}
                        className="py-8 w-full h-auto"
                      />
                    ) : (
                      <video key={idx} controls className="py-8 w-full h-auto">
                        <source src={src} type="video/webm" />
                        Your browser does not support the video tag.
                      </video>
                    )
                  )
                ) : video ? (
                  video.endsWith(".gif") ? (
                    <img
                      src={video}
                      alt={`${title} preview`}
                      className="py-8 w-full h-auto"
                    />
                  ) : (
                    <video controls className="py-8 w-full h-auto">
                      <source src={video} type="video/webm" />
                      Your browser does not support the video tag.
                    </video>
                  )
                ) : null}
              </Reveal>
            )
          )}
        </div>
      </Reveal>
    </div>
  )
}

export default ExperienceCard
