"use client";
import TitleEngJPComponent from "../common/TitleEngJPComponent";
import Image from "next/image";
import ButtonComponent from "../common/ButtonComponent";
import Img01 from "@/assets/img/home/about_img01.png";
import Img02 from "@/assets/img/home/about_img02.png";
const AboutSectionComponent = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row my-16 md:my-32">
          <div className="w-full md:w-1/2 px-0 md:px-4 lg:px-12 order-2 md:order-1 mt-10 md:mt-0">
            <TitleEngJPComponent titleEn1="ABOUT" titleJp="企業情報">
              <span className="text-pinkBrand">B</span>EAUTECH
            </TitleEngJPComponent>
            <p className="text-sm md:text-lg lg:text-xl leading-loose text-darkText my-6 md:mt-12">
              私たちは「誠実」「品質」「挑戦」を理念に掲げ、
              <br className="hidden lg:block" />
              BeautyとITの両輪で新しい価値を創造しています。
              <br />
              ITの知見と美容現場への理解を活かし、
              <br className="hidden lg:block" />
              化粧品とシステムの両面で安心と信頼をお届けし、
              <br className="hidden lg:block" />
              業界の未来をともに切り拓いていきます。
            </p>
            <div className="max-w-[250px] md:max-w-[350px] mx-auto md:mx-0 mt-10 md:my-0">
              <ButtonComponent
                href="#"
                textColor="text-white"
                bgGradient="bg-gradient-to-r from-pinkBrand to-purpleBrand"
                arrowColor="bg-white"
              >
                VIEW MORE
              </ButtonComponent>
            </div>
          </div>
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <div className="w-full mx-auto">
              <Image
                src={Img01}
                alt="Responsive Image"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row my-16 md:my-32">
          <div className="w-full md:w-1/2 px-0 md:px-4 lg:px-12 order-2 mt-10 md:mt-0">
            <TitleEngJPComponent titleEn1="OUR" titleJp="ビューテックのしごと">
              <span className="text-pinkBrand">B</span>USINESS
            </TitleEngJPComponent>
            <p className="text-sm md:text-lg lg:text-xl leading-loose text-darkText my-6 md:mt-12">
              「Beauty × Technology」 を軸に、
              <br className="hidden lg:block" />
              コスメ事業とIT事業を展開しています。
              <br />
              コスメ事業では品質にこだわった化粧品と、
              <br className="hidden lg:block" />
              美容業界に特化したソリューションを提供。
              <br />
              IT事業では企業の業務効率化と自動化を支援いたします。
            </p>
            <div className="max-w-[250px] md:max-w-[350px] mx-auto md:mx-0 mt-10 md:my-0">
              <ButtonComponent
                href="#"
                textColor="text-white"
                bgGradient="bg-gradient-to-r from-pinkBrand to-purpleBrand"
                arrowColor="bg-white"
              >
                VIEW MORE
              </ButtonComponent>
            </div>
          </div>
          <div className="w-full md:w-1/2 order-1">
            <div className="w-full mx-auto">
              <Image
                src={Img02}
                alt="Responsive Image"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSectionComponent;
