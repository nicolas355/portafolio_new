"use client"
import { Element } from "react-scroll"
import SectionTitle from "../SectionTitle"
import ExperienceCard from "../ExperienceCard"

export default function Jobs() {
  return (
    <section>
      <Element className="grid gap-10" name="jobs">
        <SectionTitle title="Experience" />

        <ExperienceCard
          company="YopLabs"
          role="Frontend Developer"
          date="dic. 2024 - may. 2025"
          description="I participated in the development of Labbi, a B2B web platform that connects pharmacies with laboratories and drugstores. I was responsible for the layout of the homepage and the login area, working on both the frontend and some backend tasks for product integration."
          projects={[
            {
              title: "Labbi",
              description: "",
              responsibilities: [
                "Development and layout of the Labbi website by Industrias Bagó using React with styles implemented using SASS and Material UI components, ensuring a responsive and modern interface.",
                "Implementation and customization of reusable MaterialUI components, adapting them to the design guidelines provided by the team.",
                "Management of the application's global state using Redux, facilitating communication between components and improving project scalability.",
                "Performance optimization and bug fixes.",
              ],
              video: "/projects/labbi.gif",
            },
          ]}
        />

        <ExperienceCard
          company="No-Country"
          role="Frontend Developer"
          date="Nov. 2023 - abr. 2024"
          description="Team collaboration multidisciplinary to solve real challenges using front-end technologies. Contribute to the definition of development processes, architectures and methodologies. Active participation in problem solving and innovative solution creation. Use of agile methodologies for efficient development and collaboration. Work with tools like Git, Jira and technologies like Next.js, Typescript, React, Redux in a collaborative, fast and fluid software development environment."
          projects={[
            {
              title: "Pet Notes",
              description:
                "The application focuses on comprehensive management of information about pets, offering functionalities such as detailed data logging, a calendar for important tasks and events, and managing and visualizing pending tasks effectively. My responsibilities were:",
              responsibilities: [
                "Use of TypeScript to ensure security in the code.",
                "Integration of the form with the databases.",
                "State management via Context API for a seamless experience.",
                "Structure and styles with CSS Modules and Tailwind.",
                "Active use of GitHub, Git and Jira for daily management and monitoring.",
                "Daily meetings with the team leader to align objectives.",
                "Use of agile methodologies for efficient and collaborative development.",
              ],
              video: "/projects/noCountry.webm",
            },
          ]}
        />

        <ExperienceCard
          company="Freelance"
          role="Web Developer"
          date="Dec. 2021 - Nov 2023"
          description="I actively participated in identifying business opportunities and potential collaborations, building strong and lasting relationships with clients.
I was involved in defining requirements, working closely with each client to fully understand their needs, objectives, and challenges.
Based on this analysis, I developed customized digital solutions, leveraging my knowledge of web and front-end development (React, HTML, CSS, WordPress, among other technologies).
I was also responsible for comprehensive project management: I planned, supervised, and ensured timely delivery, maintaining constant and transparent communication with clients throughout the process."
          projects={[
            {
              title: "Quarks Consulting",
              description:
                "At Quarks Consulting, a leader in comprehensive outsourcing services for salaries and payroll management, I contributed to creating an innovative platform that facilitates communication and showcases company services. Key responsibilities included:",
              responsibilities: [
                "Implemented effective communication features, including functional contact forms with PHP.",
                "Implemented functionalities and animations with JavaScript.",
                "Collaborated with UX/UI Designer to convert Figma designs.",
              ],
              media: ["/projects/Quarks.gif"],
            },
            {
              title: "High Web Design",
              description:
                "This project marks my first step into web design, focusing on creating a stunning landing page for High Web Design to acquire customers. Responsibilities included:",
              responsibilities: [
                "Collaborated effectively with the development team to implement design.",
                "Implemented interactive elements like contact forms, functionalities with JavaScript and PHP.",
                "Created original designs, responsive sites, and SEO optimization.",
                "Used JavaScript libraries such as ScrollReveal.js.",
              ],
              media: ["/projects/high.gif"],
            },
            {
              title: "Muebleria Amoblarte",
              description:
                "Mueblería Amoblarte specializes in furniture design and marketing for elegant and functional home spaces. Responsibilities:",
              responsibilities: [
                "Implemented functionalities and animations with JavaScript.",
                "Developed product image gallery.",
                "Managed employment opportunities section.",
              ],
              media: ["/projects/MuebleriaAmoblarte.gif"],
            },
            {
              title: "Herreria Altar",
              description:
                "Altar Constructions and Blacksmithing is a workshop specializing in blacksmithing and constructions. My responsibilities were:",
              responsibilities: [
                "Converted graphic designs (PSD/XD) to HTML, CSS, and JavaScript.",
                "Applied animations and visual effects to enhance the page.",
                "Included links and icons connecting to social networks.",
                "Used mixins and SASS functions to encapsulate reusable styles.",
              ],
              media: ["/projects/herreria.gif"],
            },
          ]}
        />

        <ExperienceCard
          company="AutoescuelaSion"
          role="Web Developer"
          date="Jul. 2020 - January 2023"
          description="At AutoescuelaSion, an innovative door-to-door driving school platform door, I had a role in the administration of the website, improving its functionalities and expanding your online presence in addition to working closely as administrative for the company. My responsibilities They covered:"
          projects={[
            {
              title: "Web developer",
              description: "",
              responsibilities: [
                "Develop and optimize the website using technologies such as React and Vite to improve user experience and loading speed.",

                " Manage and update the website, implementing new functionalities and optimizing content to improve user experience",

                "Collaborate in the development of customer acquisition strategies, contributing to improving the services offered and customer satisfaction.",

                "I implemented components and layouts using Bootstrap, improving the aesthetics and the functionality of the site.",

                "Oversaw social media strategy, expanding online presence and effectively highlighting services",

                "On the second site implement Next js,Tailwind.",
              ],
              media: [
                "/projects/autoescuelasion.gif",
                "/projects/productoSion.gif",
              ],
            },
          ]}
        />
      </Element>
    </section>
  )
}
