import boilingPointImage from "../../../assets/projects-images/boiling-point-image.png"
import geraStoreImage from "../../../assets/projects-images/gera-store-image.png"
import flowyImage from "../../../assets/projects-images/flowy-image.png"
import devLabImage from "../../../assets/projects-images/devlab-image.png"

import javascriptIcon from "../../../assets/tech-stack-icons/javascript-svgrepo-com.svg"
import typescriptIcon from "../../../assets/tech-stack-icons/typescript-icon-svgrepo-com.svg"
import reactIcon from "../../../assets/tech-stack-icons/react-svgrepo-com.svg"
import cssIcon from "../../../assets/tech-stack-icons/css-svgrepo-com.svg"
import tailwindCSSIcon from "../../../assets/tech-stack-icons/tailwind-svgrepo-com.svg"

import linkIcon3 from "../../../assets/link-icon/link-icon-3.svg"
import githubIcon from "../../../assets/github-142-svgrepo-com.svg"

import { useMemo } from "react"

interface techStackType {
    techIcon: string,
    techName: string,
}

interface ProjectsType {
    projectImage: string,
    projectTitle: string,
    projectTechs: techStackType[],
    projectDescription: string,
    projectLink: string,
    githubLink: string,
}

const Projects = () => {

    const projects = useMemo<ProjectsType[]>(() => 
    [
        {
            projectImage: boilingPointImage,
            projectTitle: "Boiling Point",
            /* projectTechs: [reactIcon, javascriptIcon, cssIcon], */
            projectTechs: [
                {
                    techIcon: reactIcon,
                    techName: "React",
                },
                {
                    techIcon: javascriptIcon,
                    techName: "Javascript",
                },
                {
                    techIcon: cssIcon,
                    techName: "CSS",
                },
            ],
            /* projectDescription: "Boiling Point is a web application for a hot pot restaurant. This is my first personal project that I made because I wanted to start with something I love in real life, which is hot pot!", */
            projectDescription: "A responsive and interactive hot pot restaurant website for hot pot lovers",
            projectLink: "https://nainglutun.github.io/boiling-point",
            githubLink: "https://github.com/NaingLuTun/boiling-point",
        },
        {
            projectImage: geraStoreImage,
            projectTitle: "Gera Store",
            /* projectTechs: [reactIcon, typescriptIcon, cssIcon], */
            projectTechs: [
                {
                    techIcon: reactIcon,
                    techName: "React",
                },
                {
                    techIcon: typescriptIcon,
                    techName: "Typescript",
                },
                {
                    techIcon: cssIcon,
                    techName: "CSS",
                },
            ],
            /* projectDescription: "Gera Store is a fully developed website for a local e-commerce clothing store store. This is my second personal project and this took the longest to develop because I wanted to show that I can build a complete frontend part of a functional online store.", */
            projectDescription: "A complete online e-commerce clothing store website for stylish people",
            projectLink: "https://nainglutun.github.io/gera-store",
            githubLink: "https://github.com/NaingLuTun/gera-store",
        },
        {
            projectImage: flowyImage,
            projectTitle: "Flowy",
            /* projectTechs: [reactIcon, typescriptIcon, tailwindCSSIcon], */
            projectTechs: [
                {
                    techIcon: reactIcon,
                    techName: "React",
                },
                {
                    techIcon: typescriptIcon,
                    techName: "Typescript",
                },
                {
                    techIcon: tailwindCSSIcon,
                    techName: "Tailwind",
                },
            ],
            /* projectDescription: "Flowy is a web application that provide you accurate and up-to-date weather forecasts, powered by openweathermap API. I decided to create this fun little project to show my ability working with APIs.", */
            projectDescription: "A weather forecast web application, developed with openweathermap API",
            projectLink: "https://nainglutun.github.io/flowy",
            githubLink: "https://github.com/NaingLuTun/flowy",
        },
        {
            projectImage: devLabImage,
            projectTitle: "DevLab",
            /* projectTechs: [reactIcon, typescriptIcon, tailwindCSSIcon], */
            projectTechs: [
                {
                    techIcon: reactIcon,
                    techName: "React",
                },
                {
                    techIcon: typescriptIcon,
                    techName: "Typescript",
                },
                {
                    techIcon: tailwindCSSIcon,
                    techName: "Tailwind",
                },
            ],
            /* projectDescription: "DevLab is a landing page for an educational website, showcasing my skills in responsive web design and interactive web development. I chose this as the fourth project for my portfolio to highlight my ability to create engaging and user-friendly layouts that can adapt to all devices.", */
            projectDescription: "An attractive, responsive and interactive landing page for an educationl website",
            projectLink: "https://nainglutun.github.io/DevLab",
            githubLink: "https://github.com/NaingLuTun/DevLab",
        },
    ],[])

    return (
        <section className="bg-[#07080a] w-full p-[25px] lg:p-[50px] projectsSection">
            <div className="mb-[25px] md:mb-[50px] text-center projectsHeaderContainer">
                <h2 className="text-white text-nowrap text-3xl font-[500] mb-3 ">
                    My Personal Projects
                </h2>
                <p className="text-[#c0c0c0] w-full">These are my personal projects that I made while learning and advancing my frontend development skills</p>
            </div>

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 projectsContainer">
                {projects.map(project => (
                    <div key={project.projectTitle} className="bg-[#252525] p-4 rounded-xl individualProjectsContainer">

                        
                            <div className="w-full rounded-xl mb-4 projectImageContainer">
                                <img src={project.projectImage} alt={project.projectImage} className="w-full rounded-xl" />
                            </div>

                            <div className="w-full mb-4 projectInfoContainer">
                                <h3 className="text-white text-center text-lg font-semibold leading-[18px] mb-3 projectTitle">{project.projectTitle}</h3>
                                <p className="text-[#e7e7e7] text-center text-[14px]">{project.projectDescription}</p>
                            </div>

                            <div className="bg-[#07080a] rounded-lg p-3 flex justify-center gap-6 mb-4 techUsedContainer">
                                {project.projectTechs.map((tech, index) => (
                                    <img key={index} src={tech.techIcon} alt={tech.techName} className="w-[30px]" title={tech.techName} />
                                ))}
                            </div>

                            <div className="flex justify-between lg:justify-center lg:gap-7 linksContainer">
                                <a href={project.projectLink} target="_blank" className="text-white leading-[16px] flex gap-1 items-center">
                                    <span className="underline">Visit Live</span>
                                    <img src={linkIcon3} alt="live" className="w-[18px] inline" />
                                </a>
                                <a href={project.githubLink} target="_blank" className="text-white leading-[16px] flex gap-1 items-center">
                                    <span className="underline">Visit Repo</span>
                                    <img src={githubIcon} alt="live" className="w-[18px] rounded-full inline" />
                                </a>
                            </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Projects