import React from 'react'
import TitleEngJPComponent from '../common/TitleEngJPComponent';
import Image from 'next/image';
import ButtonComponent from '../common/ButtonComponent';
import Img01 from '@/assets/img/home/recruit_img01.jpg';
const RecruitSectionComponent = () => {
  return (
    <div className="bg-[#e5ded8] py-16 md:py-32">
      <div className="max-w-auto md:max-w-[1920px] mx-auto flex flex-col md:flex-row items-center justify-center px-0">
        <div className="w-full md:w-1/2 mb-8 md:mb-0 relative h-auto md:h-[450px] lg:h-[600px]">
          <Image
            src={Img01}
            alt="Responsive Image"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-full object-cover md:object-cover md:object-bottom-right"
            priority
          />
        </div>
        <div className="w-full md:w-1/2 px-4 md:px-8 lg:px-12">
          <TitleEngJPComponent titleEn1="" titleJp="採用情報">
            <span className="text-pinkBrand">R</span>ECRUIT
          </TitleEngJPComponent>
          <p className="text-sm md:text-lg lg:text-xl leading-loose text-darkText my-6 md:my-8 lg:my-12">
            ITで、美と化粧品業界に新しい常識を。
            <br />
            わたしたちと一緒に、美の現場を自動化・効率化させ
            <br className="hidden lg:block" />
            人がもっと輝ける仕組みをつくりませんか？
          </p>
          <div className="max-w-[250px] md:max-w-[350px] mx-auto md:mx-0">
            <ButtonComponent
              href="#"
              textColor="text-[#e5dece]"
              bgGradient="bg-[#636363]"
              arrowColor="bg-[#e5dece]"
            >
              VIEW MORE
            </ButtonComponent>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecruitSectionComponent;
