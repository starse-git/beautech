import React from 'react'
import TitleEngJPComponent from '@/components/common/TitleEngJPComponent'
import TitleBorderComponent from '@/components/common/TitleBorderComponent'
import SEFormComponent from '@/components/recruit/entryForm/SEFormComponent'
const SystemEngineerFormPage = () => {
  return (
    <div className="container">
      <TitleEngJPComponent
        titleEn1=""
        titleJp="採用情報"
        className="mb-6 md:mb-10"
      >
        <span className="text-pinkBrand">R</span>ECRUIT
      </TitleEngJPComponent>
      <div className="flex items-center justify-center mb-10 md:mb-16">
        <TitleBorderComponent text="システムエンジニア" />
      </div>
      <SEFormComponent />
    </div>
  )
}

export default SystemEngineerFormPage;
