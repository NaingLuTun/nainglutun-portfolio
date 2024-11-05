import { useState } from "react"

import mainCertificate from "../../../assets/certificates/Coursera - Meta Front-End Developer.png"
/* import introToFrontendCertificate from "../../../assets/certificates/Coursera - Introduction to Front-End Development.png"
import programmingWithJSCertificate from "../../../assets/certificates/Coursera - Programming with Javascript.png"
import versionControlCertificate from "../../../assets/certificates/Coursera - Version Control.png" 
import htmlAndCssInDepthCertificate from "../../../assets/certificates/Coursera - HTML and CSS in depth.png"
import reactBasicsCertificate from "../../../assets/certificates/Coursera - React Basics.png"
import advancedReactCertificate from "../../../assets/certificates/Coursera - Advanced React.png"
import principlesOfUIUXCertificate from "../../../assets/certificates/Coursera - Principles of UI-UX design.png"
import frontendCapstoneCertificate from "../../../assets/certificates/Coursera - Front-End Developer Capstone.png"
import codingInterviewPrepCertificate from "../../../assets/certificates/Coursera - Coding Interview Preparation.png" */

import linkIcon from "../../../assets/link-icon/link-svgrepo-com.svg"



const Certificates = () => {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <section className="bg-[#07080a] w-full p-[25px] lg:p-[50px] certificateSection">
            <div className="mb-[25px] md:mb-[50px] certificateHeaderContainer">
                <h2 className="text-white text-nowrap text-3xl text-center font-[500] mb-3 ">Certificates</h2>
                <p className="text-[#c0c0c0] text-center w-full">The Meta Front-End Developer Professional Certificate course gave me a solid foundation in front-end development and enhanced my ability to create responsive and user-friendly websites.</p>
            </div>
            
            <div className="flex flex-col w-full bg-[#252525] p-4 rounded-xl certificatesContainer">

                <div className="w-full bg-[#131313] p-4 rounded-xl  mainCertificateContainer">
                    <div className="overflow-hidden rounded-xl relative mb-3  mainCertiImageContainer">
                        <img src={mainCertificate} alt="Meta Front-end Development Professional Certificate" className={`rounded-xl transition-[0.5s] relative ${isHovered? "scale-125 blur-sm" : ""} mainCertiImage`} />{/* hover animation in index.css */}
                        <a href="https://coursera.org/verify/professional-cert/OXXVOG0AJZNL" target="_blank">
                            <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className="w-full h-full top-0 left-0 absolute bg-[#000000b0] flex flex-col justify-center items-center opacity-0 transition-[0.3s] gap-2 hover:opacity-100 imageHoverVerifyContainer">
                                
                                <img src={linkIcon} alt="link" className="w-[50px] lg:w-[80px]" />
                                
                                <p className="text-white" >Verify</p>
                            </div>
                        </a>
                        
                    </div>

                    <div className="w-full text-center mb-6 mainCertiImageHeaderDescription">
                        <h3 className="text-white text-xl">Meta Front-End Developer</h3>
                        <p className="text-[#c0c0c0] text-[14px]">Specialization Certificate</p>
                    </div>

                    <div className="w-full h-fit mb-5 mainCertiImageInfoContainer">
                        <p className="text-white text-nowrap text-lg mb-2 skillsHeader">Skills Aquired</p>
                        
                        <div className="flex flex-wrap gap-2 p-[10px] pt-0 pb-0 w-full">
                            <p className="text-white text-[14px] p-2 pr-4 pl-4 rounded-full bg-[#252525] skills">Front-End Development</p>
                            <p className="text-white text-[14px] p-2 pr-4 pl-4  rounded-full bg-[#252525] skills">React</p>
                            <p className="text-white text-[14px] p-2 pr-4 pl-4  rounded-full bg-[#252525] skills">Javascript</p>
                            <p className="text-white text-[14px] p-2 pr-4 pl-4 rounded-full bg-[#252525] skills">Version Control</p>
                            <p className="text-white text-[14px] p-2 pr-4 pl-4 rounded-full bg-[#252525] skills">Responsive Design</p>
                            <p className="text-white text-[14px] p-2 pr-4 pl-4  rounded-full bg-[#252525] skills">HTML</p>
                            <p className="text-white text-[14px] p-2 pr-4 pl-4  rounded-full bg-[#252525] skills">CSS</p>
                            <p className="text-white text-[14px] p-2 pr-4 pl-4 rounded-full bg-[#252525] skills">Principles of UI/UX</p>
                        </div>
                        
                    </div>


                    <div className="w-full mainCertiVerifyContainer">
                        <p className="text-white text-lg text-nowrap mb-2 verifyHeader">Verify</p>
                        <div className="p-[10px] pt-0 pb-0 verifyLinkContainer">
                            <a href="https://coursera.org/verify/professional-cert/OXXVOG0AJZNL" target="_blank" className="text-white text-[14px] underline text-wrap decoration-white flex-grow-0 verifyLink">Meta Front-End Developer Professional Certificate</a>
                        </div>
                        
                    </div>
                    
                </div>

                <div className=" subCertificatesContainer">

                </div>
            </div>

        </section>
    )
}

export default Certificates