import { useInView } from "react-intersection-observer"

interface individualTechContainerPropsType {
    name: string,
    image: string,
    description: string,
    bgColor: string,
}

const IndividualTechContainer = ({name, image, description, bgColor}: individualTechContainerPropsType) => {
    const {ref, inView} = useInView ({
        triggerOnce: true, 
        threshold: 0.1,
    })


  return (
        <div ref={ref} className={`p-[10px] mb-3 rounded-xl flex gap-4 w-full bg-[#252525] hover:bg-[#2b2b2b] hover:shadow-inwards ${inView? "revealTeckStack" : ""} md:mb-0 individualTechStackContainer`}>
            <div style={{backgroundColor: bgColor}} className="w-[80px] h-[80px] p-3 flex justify-center items-center rounded-xl techIconContainer">
                <img draggable={false} src={image} alt="react" className="w-full"/>
            </div>

            <div className="p-3 flex flex-col justify-center lg:block lg:p-0 h-[80px] lg:w-[200px]  techInfoContainer">
                <h3 className="text-white text-xl font-[500]">{name}</h3>
                <p className="text-[#c0c0c0]">{description}</p>
            </div>
        </div>
  )
}

export default IndividualTechContainer