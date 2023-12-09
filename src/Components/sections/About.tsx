'use client';
import { Element } from 'react-scroll';

import SectionTitle from '../SectionTitle';
import Reveal from '../Reveal';

export default function About() {
  return (
    <section>
      <Element className="grid gap-10" name="about">
        <SectionTitle title="About me" />
        <Reveal>
          <p className='leading-7'>
          I'm Nicolas, an experienced frontend web developer with more than 2 years of experience, specialized in creating highly functional and attractive React applications.

My career includes successful projects and freelance work, which has allowed me to hone my skills and constantly learn.

With more than 3 years of self-taught study, I have strengthened my passion for programming, acquiring skills and creating personal projects
           
          
          </p>
        </Reveal>
      </Element>
    </section>
  );
}
