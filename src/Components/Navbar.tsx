'use client';
import Image from 'next/image';
import { Link } from 'react-scroll';

export default function Navbar() {
  return (
    <nav className="py-4 px-10 flex w-full items-center justify-between max-w-5xl fixed top-0 backdrop-blur-xl z-10">
      <Link
        className="hover:text-slate-100 hover:cursor-pointer"
        duration={500}
        offset={-100}
        smooth={true}
        to="home"
      >
        <Image alt="Nicolas gonzalez" height={30} src="/logo.svg" width={30} />
      </Link>
      <div className="flex gap-4 uppercase text-slate-300 font-bold tracking-wide text-xs items-center">
        <Link
          className="hover:text-slate-100 hover:scale-105 transition-all hover:cursor-pointer hidden sm:flex"
          duration={500}
          offset={-100}
          smooth={true}
          to="about"
        >
          About
        </Link>
        <Link
          className="hover:text-slate-100 hover:scale-105 transition-all hover:cursor-pointer hidden sm:flex"
          duration={500}
          href="#jobs"
          offset={-100}
          smooth={true}
          to="jobs"
        >
          Experience
        </Link>
        <Link
          className="hover:text-slate-100 hover:scale-105 transition-all hover:cursor-pointer hidden sm:flex"
          duration={500}
          href="#projects"
          offset={-100}
          smooth={true}
          to="projects"
        >
          Projects
        </Link>
        <Link
          className="hover:text-slate-100 hover:scale-105 transition-all hover:cursor-pointer hidden sm:flex"
          duration={500}
          href="#skills"
          offset={-100}
          smooth={true}
          to="skills"
        >
          Skills
        </Link>
        <Link
          className="hover:text-slate-100 hover:scale-105 transition-all hover:cursor-pointer hidden sm:flex"
          duration={500}
          href="#contact"
          offset={-100}
          smooth={true}
          to="contact"
        >
          Contact
        </Link>
        <a
          className="rounded-md border-blue-300 border-solid border-2 px-6 py-1 text-white-300 hover:bg-blue-300 hover:text-black"
          href="https://drive.google.com/file/d/1WwH3ZRIbadeZ_rwgz02e3gnBTOkdD6Am/view?usp=sharing"
          target="_blank"
        >
          My resume
        </a>
      </div>
    </nav>
  );
}
