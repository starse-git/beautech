import React from "react";
import Image from "next/image";
import longImg04 from "@/assets/img/business/longImg04.png";
import lineBg from "@/assets/img/business/lineBg.png";
import TitleBorderComponent from "../common/TitleBorderComponent";
import ButtonComponent from "../common/ButtonComponent";

const SoftwareSectionComponent = () => {
  return (
    <div className="max-w-[1360px] mx-auto px-0 md:px-6 lg:px-8">
      <div className="max-w-[850px] mb-5 md:mb-10 mr-4 -mt-[5%] md:-mt-[8%] lg:-mt-[6%]">
        <Image
          src={longImg04}
          alt="画像"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto"
        />
      </div>
      <div className="max-w-[1150px] pb-16 md:pb-40 lg:pb-52">
        <div className="flex flex-col md:flex-row px-4 md:px-0">
          <h3
            className="titleText1 md:w-[45%] lg:w-[40%] pt-0 md:pt-1 flex items-center md:items-start gap-5 md:gap-0"
            style={
              {
                "--line-bg": `url(${lineBg.src})`,
              } as React.CSSProperties
            }
          >
            独自ソフトウェア
            <br />
            ソリューション
            <span className="md:hidden w-[56px] h-[90px]">
              <Image
                src={lineBg}
                alt="Line Image"
                width={56}
                height={90}
                className="w-full h-auto"
              />
            </span>
          </h3>
          <div className="flex flex-col items-start text-darkText md:w-[55%] lg:w-[60%] mt-6 md:mt-14 lg:mt-20">
            <p className="titleText2">
              「すぐに使える」高品質な
              <br className="block md:hidden" />
              ソフトウェアで業務効率化を実現
            </p>
            <p className="titleText3 xl:whitespace-nowrap">
              汎用性の高い業務課題に対し、自社開発したソフトウェアパッケージを提供しています。
              <br />
              低コスト・短期間で導入できる即効性と、柔軟なカスタマイズ性を兼ね備え、
              <br />
              業務の効率化と生産性向上をサポートします。
              <br />
              また、導入後も安心のサポート体制で、継続的な改善と最適化を実現します。
            </p>
          </div>
        </div>
        {/*  */}
        <div className="max-w-[1030px] md:ml-auto mt-10 md:mt-16 px-4 md:px-0">
          <TitleBorderComponent
            text="サービス内容"
            className="mb-8 md:mb-10 font-extrabold md:font-normal"
          />
          <h3 className="boxTitle">Smile勤怠</h3>
          <p className="boxText">
            目的やご予算に合わせ、最適なオーダーメイド開発プランを提案します。
          </p>
          <div className="max-w-[300px] md:max-w-[400px] mx-auto md:mx-0 mt-3 md:mt-6">
            <ButtonComponent
              href="https://smile-kintai.jp/"
              target="_blank"
              textColor="text-white"
              bgGradient="bg-gradient-to-r from-orangeBrand to-purpleBrand"
              arrowColor="bg-white"
            >
              Smile勤怠について
            </ButtonComponent>
          </div>
          <h3 className="boxTitle mt-8 md:mt-10">KIZUNA(絆)</h3>
          <p className="boxText">
            コミュニティや社内SNSを想定したプラットフォーム。組織内のコミュニケーションを活性化し、
            チームの連携力を高めます。
          </p>
          <div className="max-w-[300px] md:max-w-[400px] mx-auto md:mx-0 mt-3 md:mt-6">
            <ButtonComponent
              href="https://www.kizuna-star.com/"
              target="_blank"
              textColor="text-white"
              bgGradient="bg-gradient-to-r from-orangeBrand to-purpleBrand"
              arrowColor="bg-white"
            >
              KIZUNA（絆）について
            </ButtonComponent>
          </div>
          <h3 className="boxTitle mt-8 md:mt-10">オンライン試験</h3>
          <p className="boxText">
            Web上で試験の作成・実施・採点までを完結できるシステム。
            <br />
            遠隔地での採用試験や教育研修におけるテスト実施に最適です。
          </p>
          <div className="max-w-[300px] md:max-w-[400px] mx-auto md:mx-0 mt-3 md:mt-6">
            <ButtonComponent
              href="https://elearning-star.com/login"
              target="_blank"
              textColor="text-white"
              bgGradient="bg-gradient-to-r from-orangeBrand to-purpleBrand"
              arrowColor="bg-white"
            >
              オンライン試験について
            </ButtonComponent>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoftwareSectionComponent;
