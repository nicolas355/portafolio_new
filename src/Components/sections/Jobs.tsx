"use client";
import { Element } from "react-scroll";
import { config } from "@/config";
import Image from "next/image";
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

                <Reveal>
                  <h2 className="text-2xl uppercase text-blue-400 font-bold">
                    {" "}
                    Pet Notes
                  </h2>
                  <p>
                    PET NOTES: The application focuses on the comprehensive
                    management of information about pets, offering
                    functionalities such as detailed data logging, a calendar
                    for important tasks and events, as well as the ability to
                    manage and visualize pending tasks effectively, my
                    responsibilities were:
                  </p>
                  <p className="mt-2">
                    - Use of TypeScript to ensure security in the code.
                  </p>
                  <p>- Integration of the form with the databases</p>
                  <p>
                    - State management via Context API for a seamless
                    experience.
                  </p>
                  <p>- Structure and styles with CSS Modules and Tailwind </p>
                  <p>
                    - Active use of GitHub, Git and Jira for daily management
                    and monitoring.
                  </p>
                  <p>
                    - Daily meetings with the team leader to align objectives.
                  </p>
                  <p>
                    - Use of agile methodologies for efficient and collaborative
                    development.
                  </p>
                  <video controls className="py-8" height="360" width="800">
                    <source src="/projects/noCountry.webm" type="video/webm" />
                    Your browser does not support the video tag.
                  </video>
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

                <Reveal>
                  <h2 className="text-2xl uppercase text-[#71c4ef] font-bold">
                    {" "}
                    Quarks Consulting
                  </h2>
                  <p>
                    At Quarks Consulting, leader in comprehensive outsourcing
                    services for the management of salaries and payrolls, I
                    contributed to the creation of an innovative platform that
                    facilitates communication and also transmits and values the
                    services of the company. My key responsibilities included:
                  </p>
                  <p className="mt-2">
                    - Interactive Features: implement forms of communication
                    effective, with functional contact forms with PHP
                  </p>
                  <p>
                    - Implementation of functionalities and animations with
                    Javascript
                  </p>
                  <p>
                    - Collaboration with UX/UI Designer: Work as a team with a
                    designer specialized in creating interfaces in Figma to
                    convert your designs.
                  </p>
                      
                      <Image width={500} height={500} src={'/projects/Quarks.gif'}  className="w-[800px] object-cover object-center   h-[400px] rounded-lg mt-3"
                  
                    alt="imagen">

                      </Image>
                 
                </Reveal>

                <Reveal>
                  <h2 className="text-2xl uppercase text-[#004D98] font-bold ">
                    {" "}
               High Web Design
                  </h2>
                  <p>
                  This project marks my first step into the world of web design, focusing on creating a stunning landing page for HIGH WEB DESIGN with a focus on customer acquisition. , an initiative that represents my initial foray into web design with the clear objective of offering effective solutions to elevate businesses to the highest level in the digital field. My responsibilities were:
                  </p>
                  <p className="mt-2">
                    - Effective collaboration with the development team to ensure proper implementation of the design.
                  </p>
                  <p>
                    - Interactive Elements: Implementation of interactive elements, such as contact forms, functionalities with javascript and php
                  </p>
                  <p>
                    - Creation of original designs, responsive sites and SEO optimization.
​
                  </p>

                  <p>
                    - Implementation of javascript libraries such as ScrollReveal.js
                  </p>

                  <Image width={500} height={500} src={'/projects/high.gif'}  className="w-[800px] object-cover object-center  h-[400px] rounded-lg mt-3"
                  
                  alt="imagen_high">

                    </Image>


                </Reveal>



                <Reveal>
                  <h2 className="text-2xl uppercase text-yellow-500 font-bold">
                    {" "}
                   Muebleria Amoblarte
                  </h2>
                  <p>
                  Mueblería Amoblarte is a company dedicated to the design and marketing of furniture, specializing in the creation of elegant and functional spaces for the home. My responsibilities were:
                  </p>
                  <p className="mt-2">
                    - Implementation of functionalities and animations with Javascript
                  </p>
                  <p>
                    - Product Image Gallery
                  </p>
                  <p>
                    - Employment Opportunities: The platform offers opportunities for those looking to join the company's team. Benefits include on-the-spot commissions.
                  </p>

                  <Image width={500} height={500} src={'/projects/MuebleriaAmoblarte.gif'}  className="w-[800px] h-[400px] object-cover object-center  rounded-lg  mt-3"
                  
                  alt="imagen_high">

                    </Image>
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
                      Web developer | Administrative | Sales
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

                <h2 className="text-2xl uppercase text-red-500 font-bold ">
                    {" "}
          AutoescuelaSion
                  </h2>
                  <p>
                    At AutoescuelaSion, an innovative door-to-door driving
                    school platform door, I had a role in the administration of
                    the website, improving its functionalities and expanding
                    your online presence in addition to working closely as
                    administrative for the company. My responsibilities They
                    covered:
                  </p>
                  <p className="mt-2">
                    Develop and optimize the website using technologies such as
                    React and Vite to improve user experience and loading speed.
                  </p>
                  <p>
                    - Manage and update the website, implementing new
                    functionalities and optimizing content to improve user
                    experience.
                  </p>
                  <p>
                    - Collaborate in the development of customer acquisition
                    strategies, contributing to improving the services offered
                    and customer satisfaction.
                  </p>
                  <p>
                    - I implemented components and layouts using Bootstrap,
                    improving the aesthetics and the functionality of the site.
                  </p>
                  <p>
                    - Oversaw social media strategy, expanding online presence
                    and effectively highlighting services
                  </p>

                  <p>- On the second site implement Next js,Tailwind.</p>

                  <Image width={500} height={500} src={'/projects/productoSion.gif'}  className="w-[800px]  h-[400px] object-cover object-center  rounded-lg mt-3"
                  
                  alt="imagen_product_sion">

                    </Image>

                    
                    <Image width={500} height={500} src={'/projects/autoescuelasion.gif'}  className="w-[800px]  h-[400px] object-cover object-center  rounded-lg mt-3"
                  
                  alt="imagen_product_sion">

                    </Image>

               
                </Reveal>
              </div>
            </div>
          </Reveal>
        </div>
      </Element>
    </section>
  );
}
