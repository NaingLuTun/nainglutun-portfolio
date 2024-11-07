import IndividualSubCertificateContainer from "./IndividualSubCertificateContainer"
interface subCertificatesType {
    certiName: string,
    certiImage: string,
    verifyLink: string,
}

interface SubCertificatesPropsType {
    subCertificates: subCertificatesType[],
}

const SubCertificates = ({subCertificates}: SubCertificatesPropsType) => {


    return (
        <div className="w-full bg-[#131313] p-4 rounded-xl lg:w-[50%] lg:h-[600px] subCertificateSection">
            <h2 className="text-white text-xl w-full text-center mb-6 subCertificatesHeader">Module Certificates</h2>

            <div className={`overflow-y-scroll overflow-hidden h-[332px] lg:h-full subCertificatesContainer`}>

                {subCertificates.map((certi) => (
                    <IndividualSubCertificateContainer key={certi.certiName} certiName={certi.certiName} certiImage={certi.certiImage} verifyLink={certi.verifyLink}/>
                ))}

            </div>
        </div>
    )
}

export default SubCertificates