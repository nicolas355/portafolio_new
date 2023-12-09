'use client';
import { Element } from 'react-scroll';

import { config } from '@/config';

import SectionTitle from '../SectionTitle';
import ProjectItem from '../ProjectItem';
import Reveal from '../Reveal';

export default function Projects() {
  return (
    <section>
      <Element className="grid gap-10" name="projects">
        <SectionTitle title="Other projects" />
        <Reveal>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-10 mx-auto">
            {config.projects.map((project, index) => (
              <ProjectItem
                key={index}
                description={project.description}
                github={project.github}
                image={project.image}
                tech={project.tech}
                title={project.name}
                url={project.url}
              />
            ))}
          </div>
        </Reveal>
      </Element>
    </section>
  );
}
