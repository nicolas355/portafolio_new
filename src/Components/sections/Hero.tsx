"use client"

import ContactBtn from "../ContactButton"
import Reveal from "../Reveal"

export default function Hero() {
  return (
    <section
      className="flex flex-col md:flex-row gap-4 h-screen items-center"
      id="home"
    >
      <div className="flex flex-col gap-4 h-full justify-center items-center md:items-start">
        <div className="grid text-center place-items-center md:place-items-start md:text-start">
          <Reveal>
            <h2 className="font-bold flex text-3xl xl:text-5xl">
              Hi, my name is
            </h2>
          </Reveal>
          <Reveal>
            <h1 className="font-extrabold text-6xl xl:text-7xl">
              Nicolas Gonzalez
            </h1>
          </Reveal>
        </div>
        <div className="grid text-center place-items-center md:place-items-start md:text-start">
          <Reveal>
            <h2 className="text-3xl xl:text-4xl">
              I am{" "}
              <span className="text-blue-300  font-extrabold xl:text-4xl text-4xl whitespace-nowrap">
                Frontend Developer
              </span>
            </h2>
          </Reveal>
          <Reveal>
            <h2 className=" xl:text-2xl text-xl">I build things for the web</h2>
          </Reveal>
        </div>
        <Reveal>
          <ContactBtn />
        </Reveal>
      </div>
    </section>
  )
}
