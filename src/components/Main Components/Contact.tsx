import { useInView } from "react-intersection-observer"
import gmailIcon from "../../assets/contact-section-icons/gmail-svgrepo-com.svg"
import linkedinIcon from "../../assets/linkedin-svgrepo-com.svg"
import linkIcon3 from "../../assets/link-icon/link-icon-3.svg"
import copyIcon from "../../assets/contact-section-icons/copy-svgrepo-com.svg"
import checkIcon from "../../assets/contact-section-icons/check-svgrepo-com.svg"
import arrowPointer from "../../assets/contact-section-icons/arrow-svgrepo-com.svg"

import { useState } from "react"


const Contact = () => {
    const {ref, inView} = useInView({
        triggerOnce: true, 
        threshold: 0.01,
    })


    const [email] = useState("nainglu7924@gmail.com")
    const [isCopied, setIsCopied] = useState(false)

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(email)
        .then(() => {
            setIsCopied(true)
        })
    }

    return (
        <section className="bg-[#252525] w-full p-[25px] lg:p-[50px] contactSection">
            <h2 ref={ref} className={`text-[50px] text-[#403df8] font-[500] text-center opacity-0 mb-[50px] ${inView? "revealHeaderAnimation" : ""} lg:text-[80px] `}> Get In Touch</h2>

            <div className="flex flex-col gap-[40px] relative md:flex-row md:justify-evenly md:items-center  contactInfosContainer">

                <img src={arrowPointer} alt="arrow" className={`absolute w-[40px] top-[26%] left-[18%] md:w-[40px] md:top-[50%] md:left-[8%] lg:w-[60px] lg:top-[35%] lg:left-[12%]  arrowPointer1 `} />
                <img src={arrowPointer} alt="arrow" className={`absolute w-[40px] top-[70%] left-[92%] md:w-[40px] md:top-[30%] md:left-[92%] lg:w-[60px] lg:top-[15%] lg:left-[88%] arrowPointer2 `}/>

                <div className="w-full flex flex-col items-center gap-4 lg:w-[300px] linkedinContainer">
                    <img src={linkedinIcon} alt="linkedin" className="w-[100px] p-[6px]" />
                    <a href="https://www.linkedin.com/in/naing-lu-tun-68b56a2ab" target="_blank" className="text-white text-[20px] text-center flex items-center gap-1 linkedinProfileLink">Go to profile <img src={linkIcon3} alt="link" className="w-[30px] inline" /></a>
                </div>
                <div className="w-full flex flex-col items-center gap-4 lg:w-[300px] gmailContainer">
                    <img src={gmailIcon} alt="linkedin" className="w-[100px]" />

                    <div className="flex gap-1 items-center emailCopyContainer">
                        <p className="text-white text-[20px] text-center">nainglu7924@gmail.com</p>
                        <button onClick={handleCopyEmail} title="copy" className="bg-[#000000] w-[34px] h-[34px] rounded-md flex justify-center items-center relative copyBtn">
                            <img src={isCopied? checkIcon : copyIcon} alt="copy" className="w-[30px]"/>
                            {isCopied? <span className="text-white text-[12px] absolute -right-11">Copied</span>: null}
                        </button> 
                        
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default Contact