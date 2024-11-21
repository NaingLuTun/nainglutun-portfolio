

import "../../index.css"
import downloadIcon from "../../assets/download-minimalistic-svgrepo-com.svg"
import cvFile from "../../assets/NaingLuTunCV.pdf"
import Header from "../Header/Header"

const Intro = () => {
  return (
    <section className=" bg-transparent w-full p-[25px] lg:pr-[50px] lg:pl-[50px] introSection backgroundPattern1">

          <Header />

          <div className="bg-inherit pt-[70px] pb-[70px] md:pt-[130px] md:pb-[130px] text-center introTextsContainer">
            <p className="text-white text-2xl pt-1 pb-1 md:pt-3 md:pb-3 font-[500]">Naing Lu Tun</p>
            <p className="text-[#403df8] text-4xl pt-1 pb-1 md:pt-3 md:pb-3 md:text-[70px] md:leading-[70px] lg:leading-10 noticeFont">React / Frontend Developer</p>
            <p className="text-[#c0c0c0] pt-1 pb-1 md:pt-3 md:pb-3">Hello!, I'm a frontend developer based in Myanmar, I develop responsive, interactive, and user-friendly websites</p>

            <div className="pt-3 pb-3 w-full flex items-center justify-center gap-3 ProjectAndCVBtnContainer">
                <a href="#projects" className="text-white text-nowrap bg-[#403df8] p-2 rounded-lg border-[#7e7cec] border-2 hover:bg-[#4947aa] projectsLinkBtn">See my projects {">"} </a>
                <a href={cvFile} download="NaingLuTunCV" className="p-2 text-white text-nowrap flex gap-1 items-center"> <img className="w-[30px] h-[30px] md:w-[40px] md:h-[40px]" src={downloadIcon} alt="download" />Download CV</a>
            </div>
          </div>
          

    </section>

    
  )
}

export default Intro