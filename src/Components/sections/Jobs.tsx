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
                    <h3 className="font-bold text-xl uppercase">
                      FRONTEND DEVELOPER{" "}
                    </h3>
                    <p className="text-gray-500">No-Country</p>
                  </div>
                </Reveal>
                <Reveal>
                  <p className="text-gray-500 hidden md:flex">
                    Nov. 2023 - Present
                  </p>
                </Reveal>
              </div>
              <div className="grid gap-4">
                <Reveal>
                  <p>
                    Team collaboration multidisciplinary to solve real
                    challenges using front-end technologies. Contribute to the
                    definition of development processes, architectures and
                    methodologies Active participation in the problem solving
                    and solution creation innovative. Use of agile methodologies
                    to efficient development and collaborative. Work with tools
                    like Git, Jira and current technologies like Nexts js,
                    Typescript, React, Redux in a collaborative environment
                    Software development fast and fluid
                  </p>
                </Reveal>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="flex gap-8">
          <Reveal>
            <div className="grid gap-4">
              <div className="flex justify-between">
                <Reveal>
                  <div>
                    <h3 className="font-bold text-xl uppercase">
                      Web Developer{" "}
                    </h3>
                    <p className="text-gray-500">Freelance</p>
                  </div>
                </Reveal>
                <Reveal>
                  <p className="text-gray-500 hidden md:flex">
                    Dic. 2021 - Nov 2023
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
            </div>
          </Reveal>
        </div>

        <div className="flex gap-8">
          <Reveal>
            <div className="grid gap-4">
              <div className="flex justify-between">
                <Reveal>
                  <div>
                    <h3 className="font-bold text-xl uppercase">
                      Administrative driving school{" "}
                    </h3>
                    <p className="text-gray-500">AutoescuelaSion</p>
                  </div>
                </Reveal>
                <Reveal>
                  <p className="text-gray-500 hidden md:flex">
                    Jul. 2020 - January 2023
                  </p>
                </Reveal>
              </div>
              <div className="grid gap-4">
                <Reveal>
                  <p>
                    Optimization of allocation instructors for coverage total
                    classes and reduction of cancellations, improving the
                    student experience. Implementation of a system required
                    attendance record, facilitating the identification and
                    troubleshooting attendance. Leadership in surveys
                    satisfaction to improve quality of the services offered.
                    Collaboration in the management of online sales, increasing
                    significantly sales to provide quick responses and develop a
                    sales pitch cash. Content creation and management of design
                    programs such as Illustrator, Photoshop and Figma. Manage
                    website company, managing images, information, structure
                  </p>
                </Reveal>
              </div>
            </div>
          </Reveal>
        </div>
      </Element>
    </section>
  );
}
