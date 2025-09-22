import React from 'react'
import TitleEngJPComponent from '@/components/common/TitleEngJPComponent'
import TitleBorderComponent from '@/components/common/TitleBorderComponent'
import OfficeFormComponent from '@/components/recruit/entryForm/OfficeFormComponent'
const OfficeFormPage = () => {
  return (
    <div className="w-full mt-0 md:mt-[100px]">
      <div className="container my-20 md:my-40">
        <TitleEngJPComponent
          titleEn1=""
          titleJp="採用情報"
          className="mb-6 md:mb-10"
        >
          <span className="text-pinkBrand">R</span>ECRUIT
        </TitleEngJPComponent>
        <div className="flex items-center justify-center mb-10 md:mb-16">
          <TitleBorderComponent text="オフィスワーカー" />
        </div>
        <OfficeFormComponent />
      </div>
    </div>
  )
}

export default OfficeFormPage;
