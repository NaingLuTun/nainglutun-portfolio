import { useInView } from "react-intersection-observer"

import IndividualTechContainer from "./IndividualTechContainer"

import reactIcon from "../../../assets/tech-stack-icons/react-svgrepo-com.svg"
import typescriptIcon from "../../../assets/tech-stack-icons/typescript-icon-svgrepo-com.svg"
import javascriptIcon from "../../../assets/tech-stack-icons/javascript-svgrepo-com.svg"
import tailwindCSSIcon from "../../../assets/tech-stack-icons/tailwind-svgrepo-com.svg"
import gitIcon from "../../../assets/tech-stack-icons/git-icon-svgrepo-com.svg"
import HTMLIcon from "../../../assets/tech-stack-icons/html-5-svgrepo-com.svg"
import CSSICon from "../../../assets/tech-stack-icons/css-svgrepo-com.svg" 
import scssIcon from "../../../assets/tech-stack-icons/scss2-svgrepo-com.svg"


interface techStackType {
    name: string,
    image: string,
    description: string,
    bgColor: string,
}

const TechStack = () => {
    const {ref, inView} = useInView ({
        triggerOnce: true, 
        threshold: 0.01,
    })

    const techStacks: techStackType[] = [
        {
            name: "React",
            image: reactIcon,
            description: "Javascript library",
            bgColor: "#52b8e133",
        },
        {
            name: "Typescript",
            image: typescriptIcon,
            description: "Javascript with types",
            bgColor: "#007bcd33",
        },
        {
            name: "Javascript",
            image: javascriptIcon,
            description: "Dynamic web language",
            bgColor: "#f8df1d33",
        },
        {
            name: "Tailwind",
            image: tailwindCSSIcon,
            description: "CSS framework",
            bgColor: "#1dc1cd33",
        },
        {
          name: "SCSS",
          image: scssIcon,
          description: "CSS with superpowers",
          bgColor: "#d1699b33",  
        },
        {
            name: "Git",
            image: gitIcon,
            description: "Version control",
            bgColor: "#f1573833",
        },
        {
            name: "HTML",
            image: HTMLIcon,
            description: "Markup language",
            bgColor: "#ff512633",
        },
        {
            name: "CSS",
            image: CSSICon,
            description: "Cascading Style Sheets",
            bgColor: "#0772c333",
        },
    ]



    return (
        <section ref={ref} className="bg-[#07080a] w-full p-[25px] lg:p-[50px] teckStackSection">
            <h2 className={`text-white text-nowrap text-3xl text-center font-[500] ${inView? "revealHeaderAnimation" : ""} techStackHeader`}>Current Tech Stack</h2>
            <p className={`mb-[50px] text-[#c0c0c0] text-center ${inView? "revealHeaderAnimation" : ""} `}>I'm always learning new tech. This is my current tech stack</p>

            <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 md:gap-3 lg:grid-cols-4 w-full techStacksContainer">
                <IndividualTechContainer name={techStacks[0].name} image={techStacks[0].image} description={techStacks[0].description} bgColor={techStacks[0].bgColor}/>

                <IndividualTechContainer name={techStacks[1].name} image={techStacks[1].image} description={techStacks[1].description} bgColor={techStacks[1].bgColor}/>

                <IndividualTechContainer name={techStacks[2].name} image={techStacks[2].image} description={techStacks[2].description} bgColor={techStacks[2].bgColor}/>

                <IndividualTechContainer name={techStacks[3].name} image={techStacks[3].image} description={techStacks[3].description} bgColor={techStacks[3].bgColor}/>

                <IndividualTechContainer name={techStacks[4].name} image={techStacks[4].image} description={techStacks[4].description} bgColor={techStacks[4].bgColor}/>

                <IndividualTechContainer name={techStacks[5].name} image={techStacks[5].image} description={techStacks[5].description} bgColor={techStacks[5].bgColor}/>

                <IndividualTechContainer name={techStacks[6].name} image={techStacks[6].image} description={techStacks[6].description} bgColor={techStacks[6].bgColor}/>

                <IndividualTechContainer name={techStacks[7].name} image={techStacks[7].image} description={techStacks[7].description} bgColor={techStacks[7].bgColor}/>
            </div>
        </section>
    )
}

export default TechStack