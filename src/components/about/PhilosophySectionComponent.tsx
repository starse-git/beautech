import React from "react";
import TitleEngJPComponent from '@/components/common/TitleEngJPComponent';
import circleBg from '@/assets/img/about/circleBg.png';

const PhilosophySectionComponent = () => {
  return (
    <div className="container my-16 md:mb-32 md:mt-0">
      <TitleEngJPComponent titleEn1="" titleJp="企業理念" className="mb-6 md:mb-10">
        <span className="text-pinkBrand">P</span>HILOSOPHY
      </TitleEngJPComponent>
      <p className="text-sm md:text-base lg:text-lg leading-loose md:leading-relaxed">
        私たちは、お客様の美と暮らしを支える<br className="md:hidden" />確かな品質を追求し、
        <br className="hidden md:block" />
        Beauty（美）とIT（技術）、<br className="md:hidden" />二つの力で人と社会に新しい価値を創造します。
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 my-8 md:my-16">
        <div>
          <div
            className="text-center w-[140px] md:w-[193px] h-[140px] md:h-[193px] mx-auto bg-contain bg-center bg-no-repeat flex flex-col items-center justify-center space-y-3"
            style={{ backgroundImage: `url(${circleBg.src})` }}
          >
            <span className="text-sm md:text-lg  font-medium text-pinkBrand block tracking-widest">
              INTERGRITY
            </span>
            <span className="text-xl md:text-2xl lg:text-4xl font-medium text-pinkBrand block">
              誠実
            </span>
          </div>
          <p className="mt-6 text-sm md:text-base lg:text-lg leading-relaxed text-center font-medium">
            情熱をもって行動し、
            <br />
            最後まで責任を果たすことで
            <br />
            安心と信頼を届けます。
          </p>
        </div>
        <div>
          <div
            className="text-center w-[140px] md:w-[193px] h-[140px] md:h-[193px] mx-auto bg-contain bg-center bg-no-repeat flex flex-col items-center justify-center space-y-3"
            style={{ backgroundImage: `url(${circleBg.src})` }}
          >
            <span className="text-sm md:text-lg  font-medium text-pinkBrand block tracking-widest">
              QUALITY
            </span>
            <span className="text-xl md:text-2xl lg:text-4xl font-medium text-pinkBrand block">
              品質
            </span>
          </div>
          <p className="mt-6 text-sm md:text-base lg:text-lg leading-relaxed text-center font-medium">
            品質は信頼の証。
            <br />
            私たちはその基準を守り、
            <br />
            常にその価値を磨き続けます。
          </p>
        </div>
        <div>
          <div
            className="text-center w-[140px] md:w-[193px] h-[140px] md:h-[193px] mx-auto bg-contain bg-center bg-no-repeat flex flex-col items-center justify-center space-y-3"
            style={{ backgroundImage: `url(${circleBg.src})` }}
          >
            <span className="text-sm md:text-lg  font-medium text-pinkBrand block tracking-widest">
              CHALLENGE
            </span>
            <span className="text-xl md:text-2xl lg:text-4xl font-medium text-pinkBrand block">
              挑戦
            </span>
          </div>
          <p className="mt-6 text-sm md:text-base lg:text-lg leading-relaxed text-center font-medium">
            時代の変化を先取りし、
            <br />
            最新の技術と発想で、
            <br />
            未来を切り拓く挑戦を続けます。
          </p>
        </div>
      </div>
    </div>
  );
};

export default PhilosophySectionComponent;
