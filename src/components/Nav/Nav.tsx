
import { useMediaQuery } from "react-responsive"

import homeIcon from "../../assets/nav-icons/home-svgrepo-com.svg"
import aboutIcon from "../../assets/nav-icons/user-question-svgrepo-com.svg"
import certificateIcon from "../../assets/nav-icons/certificate-badge-svgrepo-com.svg"
import projectsIcon from "../../assets/nav-icons/web-svgrepo-com.svg"
import contactIcon from "../../assets/nav-icons/contact-us-svgrepo-com.svg"



const Nav = () => {

  const isBigScreen = useMediaQuery({ query: '(min-width: 767px)' })

  return (


    
    <div className="w-full flex items-center justify-between navBar">
        {isBigScreen? (
          <ul className="flex justify-between w-full border-white border-2 p-2 pl-[40px] pr-[40px] lg:pl-[150px] lg:pr-[150px] rounded-full navContainer">
              <li className="text-white hover:text-[#403df8] font-[500]"><a href="#">Home</a></li>
              <li className="text-white hover:text-[#403df8] font-[500]"><a href="#about">About</a></li>
              <li className="text-white hover:text-[#403df8] font-[500]"><a href="#certificates">Certificates</a></li>
              <li className="text-white hover:text-[#403df8] font-[500]"><a href="#projects">Projects</a></li>
              <li className="text-white hover:text-[#403df8] font-[500]"><a href="#contact">Contact</a></li>
          </ul>
        ): 
        <ul className="flex justify-between w-full border-white border-2 p-2 pl-[40px] pr-[40px]  rounded-full navContainer">
            <li className="text-white"><a href="#"><img src={homeIcon} alt="home" className="w-[25px]" /></a></li>
            <li className="text-white"><a href="#about"><img src={aboutIcon} alt="about" className="w-[25px]" /></a></li>
            <li className="text-white"><a href="#certificates"><img src={certificateIcon} alt="certificate" className="w-[25px]" /></a></li>
            <li className="text-white"><a href="#projects"><img src={projectsIcon} alt="projects" className="w-[25px]" /></a></li>
            <li className="text-white"><a href="#contact"><img src={contactIcon} alt="contact" className="w-[25px]" /></a></li>
        </ul>
        }
    </div>  
  )
}

export default Nav