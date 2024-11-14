
const Footer = () => {
    return (
        <footer className="bg-[#252525] w-full p-[25px] lg:p-[50px] flex flex-col md:flex-row gap-8 backgroundPattern2">
            <div className="md:w-[40%] lg:w-[60%] copyrightContainer">
                <h4 className="text-white text-center text-[20px] mb-2 lg:text-[24px] lg:text-left font-[500]">Naing Lu Tun</h4>
                <p className="text-[#c0c0c0] text-center lg:text-[18px] lg:text-left">© 2024 | All rights reserved.</p>
            </div>

            <div className="flex w-full justify-between md:w-[60%] lg:w-[40%] footerLinksContainer">
                <div className=" footerNavigateLinksContainer">
                    <h4 className="text-white text-[18px] font-[500] mb-2 footerNavigateHeader">Navigate</h4>
                    <ul>
                        <li className="text-[#c0c0c0] leading-[28px] hover:text-white"><a href="#">Home</a></li>
                        <li className="text-[#c0c0c0] leading-[28px] hover:text-white"><a href="#about">About</a></li>
                        <li className="text-[#c0c0c0] leading-[28px] hover:text-white"><a href="#certificates">Certificates</a></li>
                        <li className="text-[#c0c0c0] leading-[28px] hover:text-white"><a href="#projects">Projects</a></li>
                    </ul>
                </div>
                <div className=" footerProjectLinksContainer">
                    <h4 className="text-white text-[18px] font-[500] mb-2 footerNavigateHeader">Projects</h4>
                    <ul>
                        <li className="text-[#c0c0c0] leading-[28px] hover:text-white"><a href="https://nainglutun.github.io/boiling-point" target="_blank">Boiling Point</a></li>
                        <li className="text-[#c0c0c0] leading-[28px] hover:text-white"><a href="https://nainglutun.github.io/gera-store"  target="_blank">Gera Store</a></li>
                        <li className="text-[#c0c0c0] leading-[28px] hover:text-white"><a href="https://nainglutun.github.io/flowy"  target="_blank">Flowy</a></li>
                        <li className="text-[#c0c0c0] leading-[28px] hover:text-white"><a href="https://nainglutun.github.io/DevLab"  target="_blank">DevLab</a></li>
                    </ul>
                </div>
                <div className=" footerSocialLinksContainer">
                    <h4 className="text-white text-[18px] font-[500] mb-2">Socials</h4>

                    <ul>
                        <li className="text-[#c0c0c0] leading-[28px] hover:text-white"><a href="https://www.linkedin.com/in/naing-lu-tun-68b56a2ab/"  target="_blank">Linkedin</a></li>
                        <li className="text-[#c0c0c0] leading-[28px] hover:text-white"><a href="https://github.com/NaingLuTun"  target="_blank">Github</a></li>
                    </ul>
                </div>
            </div>
            
        </footer>
    )
}

export default Footer