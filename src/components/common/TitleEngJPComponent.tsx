import React, { ReactNode } from 'react'
interface TitleEngJPComponentProps {
    titleEn1?: string;
    titleJp?: string;
    children?: ReactNode;
}
const TitleEngJPComponent = ({titleEn1, titleJp, children}: TitleEngJPComponentProps) => {
  return (
    <div className="flex flex-col items-start leading-[1] text-darkText">
      {titleEn1 && (
        <p className="text-[45px] md:text-[60px] lg:text-[80px] tracking-wider">{titleEn1}</p>
      )}
      {children ? (
        <p className="text-[45px] md:text-[60px] lg:text-[80px] tracking-wider">
          {children}
        </p>
      ) : (
        <p className="text-[45px] md:text-[60px] lg:text-[80px] tracking-wider">
          <span className="text-pinkBrand">B</span>EAUTECH
        </p>
      )}

      {titleJp && (
        <p className="text-base md:text-xl lg:text-2xl mt-1 md:mt-2">{titleJp}</p>
      )}
    </div>
  )
}

export default TitleEngJPComponent;
