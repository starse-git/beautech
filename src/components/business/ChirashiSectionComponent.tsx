import React from "react";
import GradientBorderText from "../common/GradientBorderText";
import rectangleLeft from "@/assets/img/business/rectangleLeft.png";
import rectangleRight from "@/assets/img/business/rectangleRight.png";

const ChirashiSectionComponent = () => {
  return (
    <div className="w-full my-16 md:my-32 px-4 md:px-6 lg:px-12">
      <div
        className="max-w-[940px] mx-auto TopbeforeLeft"
        style={
          {
            "--before-bg": `url(${rectangleLeft.src})`,
            "--after-bg": `url(${rectangleRight.src})`,
          } as React.CSSProperties
        }
      >
        <div
          className="beforeBLeft  py-8 md:py-20"
          style={
            {
              "--before-bg": `url(${rectangleLeft.src})`,
              "--after-bg": `url(${rectangleRight.src})`,
            } as React.CSSProperties
          }
        >
          <p className="text-lg md:text-xl lg:text-2xl leading-relaxed font-medium text-center text-pinkBrand mb-8 md:mb-14">
            事業の連携と融合によって、
            <br />
            当社ならではの強みを
            <br className="md:hidden" />
            発揮しています。
          </p>
          <div className="text-center mb-6 md:mb-10">
            <GradientBorderText text="相乗効果の最大化" />
            <p className="leading-relaxed text-center text-sm lg:text-base font-medium text-[#4d4d4d]">
              代理店ブランドで得た最新技術トレンドを
              <br className="md:hidden" />
              自社ブランドに還元し、商品競争力を強化。
            </p>
          </div>
          <div className="text-center mb-6 md:mb-10">
            <GradientBorderText text="市場データの活用" />
            <p className="leading-relaxed text-center text-sm lg:text-base font-medium text-[#4d4d4d]">
              サロンやECで得た顧客データを
              <br className="md:hidden" />
              新商品開発や既存商品の改善に活かし、
              <br />
              市場ニーズに即した商品づくりを実現。
            </p>
          </div>
          <div className="text-center mb-8 md:mb-14">
            <GradientBorderText text="包括的なソリューション" />
            <p className="leading-relaxed text-center text-sm lg:text-base font-medium text-[#4d4d4d]">
              百貨店・ホテル・サロンなど、
              <br className="md:hidden" />
              商品を導入いただく事業者様に対しては
              <br className="md:hidden" />
              供給にとどまらず、
              <br className="hidden md:block" />
              IT事業部のLP制作や
              <br className="md:hidden" />
              集客支援までワンストップで提供。
            </p>
          </div>
          <p className="leading-loose text-center text-sm md:text-base lg:text-lg font-medium text-darkText">
            私たちは、ブランドと販路の両面から
            <br className="md:hidden" />
            事業を多角的に展開し、
            <br />
            市場の変化に適応しながら、
            <br />
            持続的な成長と新たな価値創造を
            <br className="md:hidden" />
            実現してまいります。
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChirashiSectionComponent;
