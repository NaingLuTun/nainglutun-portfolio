import { useMemo, useState } from "react"

import mainCertificate from "../../../assets/certificates/Coursera - Meta Front-End Developer.png"

import linkIcon from "../../../assets/link-icon/link-svgrepo-com.svg"
import linkIcon2 from "../../../assets/link-icon/link-icon-2.svg"
import metaIcon from "../../../assets/meta-svgrepo-com.svg"


interface moduleCertiType {
    courseNo: number,
    courseName: string,
    certiLink: string,
}



const Certificates = () => {
    const [isHovered, setIsHovered] = useState(false)

    const skills = useMemo(() => ["Front-End Development", "React", "Javascript", "HTML", "CSS", "Version Control", "Functional Programming", "Object Oriented Programming", "Unit Testing", "Web Performance", "Responsive Design", "Principles of UX/UI"], [])

    const moduleCerti = useMemo<moduleCertiType[]>(() => 
        [
        {
            courseNo: 1,
            courseName: "Introduction to Front-End Development",
            certiLink: "https://coursera.org/verify/JJ3DEW3SGJV3",
        },
        {
            courseNo: 2,
            courseName: "Programming with Javascript",
            certiLink: "https://coursera.org/verify/TM6RGPM7CG6Y",
        },
        {
            courseNo: 3,
            courseName: "Version Control",
            certiLink: "https://coursera.org/verify/R63LVXMKXPD8",
        },
        {
            courseNo: 4,
            courseName: "HTML and CSS in depth",
            certiLink: "https://coursera.org/verify/478W0OK99UMZ",
        },
        {
            courseNo: 5,
            courseName: "React Basics",
            certiLink: "https://coursera.org/verify/JYH3BKTIYLCU",
        },
        {
            courseNo: 6,
            courseName: "Advanced React",
            certiLink: "https://coursera.org/verify/WHPS9PL8Z4CG",
        },
        {
            courseNo: 7,
            courseName: "Principles of UX/UI design",
            certiLink: "https://coursera.org/verify/38SW6DX1CEME",
        },
        {
            courseNo: 8,
            courseName: "Front-End Developer Capstone",
            certiLink: "https://coursera.org/verify/RUBUX6CE9AC7",
        },
        {
            courseNo: 9,
            courseName: "Coding Interview Preparation",
            certiLink: "https://coursera.org/verify/ZKCXS0G14SVJ",
        },
    ],[]) 
    return (
        <section className="bg-[#07080a] w-full p-[25px] lg:p-[50px] certificateSection">
            <div className="mb-[25px] md:mb-[50px] certificateHeaderContainer">
                <h2 className="text-white text-nowrap text-3xl text-center font-[500] mb-3 ">Certificates</h2>
                <p className="text-[#c0c0c0] text-center w-full">The Meta Front-End Developer Professional Certificate course gave me a solid foundation in front-end development and enhanced my ability to create responsive and user-friendly websites.</p>
            </div>
            
            <div className="w-full h-full bg-[#252525] p-4 rounded-xl gap-4 certificateContainer">
                <div className="w-full text-center mb-6 mainCertiImageHeaderDescription">
                    <h2 className="text-white text-xl mainCertificateHeader">Meta Front-End Developer</h2>
                    <h2 className="text-white text-xl  mainCertificateHeaderDescription">Specialization Certificate</h2> 
                </div>
                <div className="w-full bg-[#131313] p-4 rounded-xl   mainCertificateContainer">
                    
                    <div className="w-full flex flex-col mb-4 lg:flex-row lg:items-center mainCertiImageAndSkillsContainer">
                        <div className="overflow-hidden rounded-xl relative mb-3 lg:w-[50%] mainCertiImageContainer">
                            <img src={mainCertificate} alt="Meta Front-end Development Professional Certificate" className={`rounded-xl transition-[0.5s] relative ${isHovered? "scale-125 blur-sm" : ""} mainCertiImage`} />{/* hover animation in index.css */}
                            <a href="https://coursera.org/verify/professional-cert/OXXVOG0AJZNL" target="_blank">
                                <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className="w-full h-full top-0 left-0 absolute bg-[#000000b0] flex flex-col justify-center items-center opacity-0 transition-[0.3s] gap-2 hover:opacity-100 imageHoverVerifyContainer">
                                    
                                    <img src={linkIcon} alt="link" className="w-[50px] lg:w-[80px]" />
                                    
                                    <p className="text-white" >Verify</p>
                                </div>
                            </a>
                            
                        </div>

                        <div className="w-full h-fit mb-5 lg:w-[50%] lg:p-[25px] mainCertiSkillsAndInfoContainer">
                            <p className="text-white text-nowrap text-lg text-center mb-4 lg:text-xl skillsHeader">Skills Aquired</p>
                        
                            <div className="flex flex-wrap gap-2 p-[10px] pt-0 pb-0 w-full mb-6 skillsContainer ">
                                {skills.map(skill => (
                                    <p className="text-white text-[14px] p-2 pr-4 pl-4 h-fit rounded-full bg-[#252525] skills">{skill}</p>
                                ))}
                                {/* <p className="text-white text-[14px] p-2 pr-4 pl-4 h-fit rounded-full bg-[#252525] skills">Front-End Development</p>
                                <p className="text-white text-[14px] p-2 pr-4 pl-4 h-fit rounded-full bg-[#252525] skills">React</p>
                                <p className="text-white text-[14px] p-2 pr-4 pl-4 h-fit rounded-full bg-[#252525] skills">Javascript</p>
                                <p className="text-white text-[14px] p-2 pr-4 pl-4  h-fit rounded-full bg-[#252525] skills">HTML</p>
                                <p className="text-white text-[14px] p-2 pr-4 pl-4  h-fit rounded-full bg-[#252525] skills">CSS</p>
                                <p className="text-white text-[14px] p-2 pr-4 pl-4 h-fit rounded-full bg-[#252525] skills">Version Control</p>
                                <p className="text-white text-[14px] p-2 pr-4 pl-4 h-fit rounded-full bg-[#252525] skills">Functional Programming</p>
                                <p className="text-white text-[14px] p-2 pr-4 pl-4 h-fit rounded-full bg-[#252525] skills">Object Oriented Programming</p>
                                <p className="text-white text-[14px] p-2 pr-4 pl-4 h-fit rounded-full bg-[#252525] skills">Unit Testing</p>
                                <p className="text-white text-[14px] p-2 pr-4 pl-4 h-fit rounded-full bg-[#252525] skills">Web Performance</p>
                                <p className="text-white text-[14px] p-2 pr-4 pl-4 h-fit rounded-full bg-[#252525] skills">Responsive Design</p>
                                <p className="text-white text-[14px] p-2 pr-4 pl-4 h-fit rounded-full bg-[#252525] skills">Principles of UI/UX</p> */}

                                
                            </div>
                                <div className="w-full p-[14px] bg-[#252525] rounded-xl mainCertiInfoContainer">
                                    <div className="flex items-center gap-1 mb-2 organizationContainer">
                                        <p className="text-white lg:text-lg organization">Organization - </p>
                                        <div className="p-1 flex justify-center items-center bg-white metaIconContainer">
                                            <img src={metaIcon} alt="Meta" className="w-[16px] inline"/>
                                        </div>      
                                        
                                        <p className="text-white lg:text-lg organizationName">Meta</p>
                                    </div>

                                    <p className="text-white lg:text-lg mb-2 issueDate">Certificate Issue Date - November 5, 2024</p>

                                    <p className="text-white lg:text-lg mb-2 credentialId">Credential ID - OXXVOG0AJZNL</p>
                                    
                                    <a href="https://coursera.org/verify/professional-cert/OXXVOG0AJZNL" target="_blank" className="text-white lg:text-lg">Credential URL - <span className="underline">Meta Front-End Developer Certificate <img src={linkIcon2} alt="link" className="inline w-[16px] lg:w-lg"/></span></a>
                                </div>
                        
                        </div>
                    </div>

                    <div className="p-[14px] bg-[#252525] rounded-xl moduleCertificates">
                        <h2 className="text-white text-xl mb-6 text-center">Course Completed Module Certificates</h2>

                        <div className="lg:grid lg:grid-cols-2 moduleCertificatesContainer">
                            {moduleCerti.map(certi => (
                                <div key={certi.courseName} className="flex w-full gap-1 mb-4 course1Container">
                                    <p className="text-white text-[14px] text-nowrap lg:text-lg">Course {certi.courseNo} - </p>
                                    <a href={certi.certiLink} target="_blank" className="text-white text-[14px] underline lg:text-lg">{certi.courseName} <img src={linkIcon2} alt="link" className="w-[16px] inline"/></a>
                                </div>
                            ))}

                           {/*  <div className="flex w-full gap-1 mb-4 course1Container">
                                <p className="text-white text-[14px] text-nowrap lg:text-lg">Course 1 - </p>
                                <a href="https://coursera.org/verify/JJ3DEW3SGJV3" target="_blank" className="text-white text-[14px] underline lg:text-lg">Introduction to Front-End Development <img src={linkIcon2} alt="link" className="w-[16px] inline"/></a>
                            </div>
                            <div className="flex w-full gap-1 mb-4 course1Container">
                                <p className="text-white text-[14px] text-nowrap lg:text-lg">Course 2 - </p>
                                <a href="https://coursera.org/verify/TM6RGPM7CG6Y" target="_blank" className="text-white text-[14px] underline lg:text-lg">Programming with Javascript <img src={linkIcon2} alt="link" className="w-[16px] inline"/></a>
                            </div>
                            <div className="flex w-full gap-1 mb-4 course1Container">
                                <p className="text-white text-[14px] text-nowrap lg:text-lg">Course 3 - </p>
                                <a href="https://coursera.org/verify/R63LVXMKXPD8" target="_blank" className="text-white text-[14px] underline lg:text-lg">Version Control <img src={linkIcon2} alt="link" className="w-[16px] inline"/></a>
                            </div>
                            <div className="flex w-full gap-1 mb-4 course1Container">
                                <p className="text-white text-[14px] text-nowrap lg:text-lg">Course 4 - </p>
                                <a href="https://coursera.org/verify/478W0OK99UMZ" target="_blank" className="text-white text-[14px] underline lg:text-lg">HTMl and CSS in depth <img src={linkIcon2} alt="link" className="w-[16px] inline"/></a>
                            </div>
                            <div className="flex w-full gap-1 mb-4 course1Container">
                                <p className="text-white text-[14px] text-nowrap lg:text-lg">Course 5 - </p>
                                <a href="https://coursera.org/verify/JYH3BKTIYLCU" target="_blank" className="text-white text-[14px] underline lg:text-lg">React Basics <img src={linkIcon2} alt="link" className="w-[16px] inline"/></a>
                            </div>
                            <div className="flex w-full gap-1 mb-4 course1Container">
                                <p className="text-white text-[14px] text-nowrap lg:text-lg">Course 6 - </p>
                                <a href="https://coursera.org/verify/WHPS9PL8Z4CG" target="_blank" className="text-white text-[14px] underline lg:text-lg">Advanced React <img src={linkIcon2} alt="link" className="w-[16px] inline"/></a>
                            </div>
                            <div className="flex w-full gap-1 mb-4 course1Container">
                                <p className="text-white text-[14px] text-nowrap lg:text-lg">Course 7 - </p>
                                <a href="https://coursera.org/verify/38SW6DX1CEME" target="_blank" className="text-white text-[14px] underline lg:text-lg">Principles of UX/UI Design <img src={linkIcon2} alt="link" className="w-[16px] inline"/></a>
                            </div>
                            <div className="flex w-full gap-1 mb-4 course1Container">
                                <p className="text-white text-[14px] text-nowrap lg:text-lg">Course 8 - </p>
                                <a href="https://coursera.org/verify/RUBUX6CE9AC7" target="_blank" className="text-white text-[14px] underline lg:text-lg">Front-End Developer Capstone <img src={linkIcon2} alt="link" className="w-[16px] inline"/></a>
                            </div>
                            <div className="flex w-full gap-1 mb-4 course1Container">
                                <p className="text-white text-[14px] text-nowrap lg:text-lg">Course 9 - </p>
                                <a href="https://coursera.org/verify/ZKCXS0G14SVJ" target="_blank" className="text-white text-[14px] underline lg:text-lg">Coding Interview Preparation <img src={linkIcon2} alt="link" className="w-[16px] inline"/></a>
                            </div> */}
                        </div>

                        
                    </div>
                </div>


            </div>

        </section>
    )
}

export default Certificates