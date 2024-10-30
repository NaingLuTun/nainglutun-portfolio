

import "../../index.css"
import profileImg from "../../assets/profile.png"

import Header from "../Header/Header"

const Intro = () => {
  return (
    <section id="intro" className=" flex w-full introSection">

        <div className="w-[60%] p-[100px] bg-[#151730] introTextsContainer">
          <Header />
          
        </div>

        <div className="w-[40%] p-[50px] bg-[#ccf281] relative introImageContainer">

            <div className="w-[150px] h-[150px] bg-[#379958] rounded-3xl overflow-hidden profileImgContainer">
              <img src={profileImg} alt="profile" className="w-full profileImg" />
            </div>
            
        </div>
        

    </section>

    
  )
}

export default Intro