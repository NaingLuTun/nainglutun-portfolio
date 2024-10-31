import { useState } from "react"

const Nav = () => {
  const [viewNav, setViewNav] = useState(false)

  const handleViewNav = () => {
      setViewNav(!viewNav)
  }
  return (

    <div className="w-full flex items-center justify-between navBar">
        <a href="#intro" className="text-[30px] text-[#6664f1] noticeFont">Naing</a>

        <button onClick={handleViewNav} className={`menuBtn ${viewNav? "active" : ""}`}>
            <div className=" menuIcon"></div>
        </button>

    </div>  
  )
}

export default Nav