import { useState } from "react"
import linkIcon from "../../../assets/link-icon/link-svgrepo-com.svg"

interface IndividualSubCertificateContainerPropsType {
    certiName: string,
    certiImage: string,
    verifyLink: string,
}

const IndividualSubCertificateContainer = ({certiName, certiImage, verifyLink}: IndividualSubCertificateContainerPropsType) => {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <a href={verifyLink} target="_blank" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <div className="bg-[#252525] h-[100px] mb-2 p-3 w-full rounded-xl flex gap-4 items-center lg:h-fit individualCertificateContainer">
                <div className="w-[50%] overflow-hidden rounded-xl relative lg:w-[20%] individualCertiImageContainer">
                    <img src={certiImage} alt="certificate image" className={`rounded-xl w-full transition-[0.5s] ${isHovered? "scale-125 blur-sm" : ""}`} />
                    <div className={`w-full h-full top-0 left-0 absolute bg-[#000000b0] flex flex-col justify-center items-center opacity-0 transition-[0.3s] gap-2 ${isHovered? "opacity-100": ""} forBlur`}>
                        <img src={linkIcon} alt="link" className="w-[30px]"/>
                        <p className="text-white text-[12px]">verify</p>
                    </div>
                </div>
                <p className="text-[12px] text-white w-[50%] lg:w-[80%] ">{certiName}</p>
            </div>
        </a>
    )
}

export default IndividualSubCertificateContainer