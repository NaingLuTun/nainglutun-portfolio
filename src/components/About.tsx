import aboutImage from "../assets/about-me-image.jpg"
import aboutMoblieImage from "../assets/about-me-moblie-image.jpg"

import triangleIcon from "../assets/about-section-icons/triangle-svgrepo-com.svg"
import squareIcon from "../assets/about-section-icons/square-svgrepo-com.svg"

import githubIcon from "../assets/icons8-github.svg"
import linkedinIcon from "../assets/linkedin-svgrepo-com.svg"

import downloadIcon from "../assets/download-minimalistic-svgrepo-com.svg"

import { useMediaQuery } from "react-responsive"


const About = () => {

    const isBigScreen = useMediaQuery({ query: '(min-width: 1024px)' })
    const isLargerScreen = useMediaQuery({ query: '(min-width: 1240px)' })

    return (
        <section className="bg-[#07080a] w-full p-[25px] lg:p-[50px] aboutSection">

            
            <div className="bg-[#252525] w-full  rounded-md flex flex-col gap-4 relative lg:flex-row  aboutContainer backgroundPattern2">
                {isLargerScreen && (
                    <>
                    <img src={triangleIcon} alt="" className="absolute w-[70px] bottom-[15%] left-[45%] opacity-30 triangleIcon"/>
                    <img src={squareIcon} alt="" className="absolute w-[70px] bottom-[15%] left-[55%] opacity-30 squareIcon"/>
                    <img src={triangleIcon} alt="" className="absolute w-[70px] bottom-[15%] left-[65%] opacity-30 triangleIcon"/>
                    <img src={squareIcon} alt="" className="absolute w-[70px] bottom-[15%] left-[75%] opacity-30 squareIcon"/>
                    
                    </>
                )}
                
                <div className="w-full lg:w-[40%] rounded-md imageContainer">
                    {isBigScreen ? 
                    <img src={aboutImage} alt="image" className="w-full rounded-md" /> : 
                    <img src={aboutMoblieImage} alt="image" className="w-full rounded-md"/>
                    }
                    
                </div>

                <div className="w-full lg:w-[60%] p-4 pt-8 pb-8 lg:pb-0 aboutMeInfo">
                    <h2 className="text-white text-nowrap text-3xl font-[500] mb-5 text-center lg:text-left">About Me</h2>

                    <p className={`text-white text-[18px] leading-8 mb-[100px] ${isLargerScreen? "mb-[130px]":  isBigScreen? "mb-[80px]":""} aboutMePara`}>
                        Hello, I am a frontend developer from Yangon, Myanmar. I am mostly a self taught programmer but to advance my skills I also took <span className="font-[600] text-[19px]">professional frontend developer course</span> from Meta. I've been learning and builing my personal projects on my own for about a little over a year now, and I'm finally ready to make use of the skills I've gained in real-world projects, taking on new challenges in a professional setting. I'm a resourceful person who gets the job done, even when ideal resources are limited. While I'm naturally an introvert, I'm confident and proactive in group settings, making sure that my contributions to the team are meaningful and my ideas are heard. I'm currently looking for an <span className="font-[600] text-[19px]">intern or junior position</span> , so If you like what you see in my portfolio, I'd love to connect. Please feel free to reach out!
                    </p>

                    <div className="grid grid-cols-2 w-full nameAndEmailContainer">
                        <div className="mb-8 nameContainer">
                            <p className="text-white text-[18px] font-[600]">Name</p>
                            <p className="text-[#c0c0c0]">Naing Lu Tun</p>
                        </div>

                        <div className="mb-8 -ml-6 lg:-ml-0 emailContainer">
                            <p className="text-white text-[18px] font-[600]">Email</p>
                            <p className="text-[#c0c0c0]">nainglu7924@gmail.com</p>
                        </div>

                        <div className="socialsContainer">

                            <div className="flex gap-3 socialsIconsContainer">
                                <a href="https://www.linkedin.com/in/naing-lu-tun-68b56a2ab/" target="_blank"><img src={linkedinIcon} alt="linkedin" className="w-[40px] linkedinIcon" /></a>
                                <a href="https://github.com/NaingLuTun" target="_blank"><img src={githubIcon} alt="github" className="w-[40px] githubIcon" /></a>
                            </div>
                        </div>

                        <div className="flex items-center gap-1 -ml-6 lg:-ml-0 CVContainer">
                            <img src={downloadIcon} alt="download" className="w-[40px] h-[40px]" />
                            <p className="text-white text-[18px] font-[600]">Download CV</p>
                            
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default About