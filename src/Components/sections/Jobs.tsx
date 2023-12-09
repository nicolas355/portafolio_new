"use client";
import { Element } from "react-scroll";

import { config } from "@/config";

import SectionTitle from "../SectionTitle";
import Reveal from "../Reveal";

export default function Jobs() {
  return (
    <section>
      <Element className="grid gap-10 pt-10" name="jobs">
        <SectionTitle title="Experience" />
        <div className="flex gap-8">
          <Reveal>
            <div className="grid gap-4">
              <div className="flex justify-between">
                <Reveal>
                  <div>
                    <h3 className="font-bold text-xl uppercase">Web Developer </h3>
                    <p className="text-gray-500 flex md:hidden text-sm">
                      July 2021 - Actuality
                    </p>
                    <p className="text-gray-500">Freelance</p>
                  </div>
                </Reveal>
                <Reveal>
                  <p className="text-gray-500 hidden md:flex">
                    July 2022 - Present
                  </p>
                </Reveal>
              </div>
              <div className="grid gap-4">
                <Reveal>
                  <p>
                    Proactively identify business opportunities and
                    collaborations by establishing strong client relationships.
                    Requirement Definition: Collaborate closely with clients to
                    comprehend their needs and objectives effectively. Solution
                    Development: Harness technical skills and expertise in
                    web/frontend development (such as React, CSS, HTML,
                    Wordpress, etc.) to craft tailored digital solutions.
                    Project Management: Accountable for project planning,
                    monitoring, and delivery. Maintain transparent communication
                    with clients, ensuring adherence to agreed-upon timelines.
                  </p>
                </Reveal>
           
              </div>

              <div>
                <div className="grid grid-templa" />
              </div>

          
     
            </div>
          </Reveal>
        </div>
      </Element>
    </section>
  );
}
