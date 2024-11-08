import boilingPointImage from "../../../assets/projects-images/boiling-point-image.png"
import geraStoreImage from "../../../assets/projects-images/gera-store-image.png"
import flowyImage from "../../../assets/projects-images/flowy-image.png"
import devLabImage from "../../../assets/projects-images/devlab-image.png"
import { useMemo } from "react"


interface ProjectsType {
    projectImage: string,
    projectTitle: string,
    projectTechs: string[],
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
            projectTechs: ["React", "Javascript", "CSS"],
            projectDescription: "Boiling Point is a web application for a hot pot restaurant. This is my first personal project that I made because I wanted to start with something I love in real life, which is hot pot!",
            projectLink: "https://nainglutun.github.io/boiling-point",
            githubLink: "https://github.com/NaingLuTun/boiling-point",
        },
        {
            projectImage: geraStoreImage,
            projectTitle: "Gera Store",
            projectTechs: ["React", "Typescript", "CSS"],
            projectDescription: "Gera Store is a fully developed website for a local e-commerce clothing store store. This is my second personal project and this took the longest to develop because I really wanted to show that I can build a complete frontend part of a functional online store.",
            projectLink: "https://nainglutun.github.io/gera-store",
            githubLink: "https://github.com/NaingLuTun/gera-store",
        },
        {
            projectImage: flowyImage,
            projectTitle: "Flowy",
            projectTechs: ["React", "Typescript","Tailwind"],
            projectDescription: "Flowy is a web application that provide you accurate and up-to-date weather forecasts, powered by openweathermap API. I decided to create this fun little project to show my ability working with APIs.",
            projectLink: "https://nainglutun.github.io/flowy",
            githubLink: "https://github.com/NaingLuTun/flowy",
        },
        {
            projectImage: devLabImage,
            projectTitle: "DevLab",
            projectTechs: ["React", "Typescript", "Tailwind"],
            projectDescription: "DevLab is a landing page for an educational website, showcasing my skills in responsive web design and interactive web development. I chose this as the fourth project for my portfolio to highlight my ability to create engaging and user-friendly layouts that can adapt to all devices.",
            projectLink: "https://nainglutun.github.io/DevLab",
            githubLink: "https://github.com/NaingLuTun/DevLab",
        },
    ],[])

    return (
        <section className=" projectsSection">

        </section>
    )
}

export default Projects