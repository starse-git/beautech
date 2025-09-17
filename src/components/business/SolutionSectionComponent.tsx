import React from "react";
import Image from "next/image";
import longImg03 from "@/assets/img/business/longImg03.png";
import lineBg from "@/assets/img/business/lineBg.png";
import TitleBorderComponent from "../common/TitleBorderComponent";
import TitleEngJPComponent from "../common/TitleEngJPComponent";

const SolutionSectionComponent = () => {
  return (
    <div className="w-full bg-[#dbe5e9]">
      <div className="container py-16 md:py-16">
        <TitleEngJPComponent
          titleEn1="IT SOLUTION"
          titleJp="IT事業"
          className="mb-6 md:mb-10"
        >
          <span className="text-pinkBrand">B</span>USINESS
        </TitleEngJPComponent>
        <p className="text-sm md:text-base lg:text-lg leading-loose md:leading-relaxed">
          当社は、お客様のデジタル化と持続的な成長を支援するため、<br className="hidden md:block" />
          4つの事業領域を基盤にITサービスを展開しています。<br />
          専門性の高いソリューションを通じて、IT課題の解決からビジネス変革(DX)の実現まで、<br className="hidden md:block" />
          お客様の挑戦を力強くサポートいたします。
        </p>
      </div>
      <div className="max-w-[1360px] mx-auto px-0 md:px-6 lg:px-8">
        <div className="max-w-[850px] mb-5 md:mb-10 mr-4">
          <Image
            src={longImg03}
            alt="画像"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto"
          />
        </div>
        <div className="max-w-[1150px] pb-16 md:pb-40 lg:pb-56">
          <div className="flex flex-col md:flex-row px-4 md:px-0">
            <h3
              className="titleText1 md:w-[45%] lg:w-[40%] pt-0 md:pt-1 flex items-center md:items-start gap-5 md:gap-0"
              style={
                {
                  "--line-bg": `url(${lineBg.src})`,
                } as React.CSSProperties
              }
            >
              ITプロフェッショナル
              <br />
              サービス
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
                最適な人材と技術で
                <br className="block md:hidden" />
                プロジェクトを成功に導く
              </p>
              <p className="titleText3">
                高度なスキルを持つITエンジニアの派遣から、
                <br className="block md:hidden" />
                お客様の課題に応じた
                <br className="hidden md:block" />
                システム・インフラの設計・開発・保守まで幅広く対応。
                <br />
                豊富な人材ネットワークと正確なスキルマッチングを強みに、
                <br />
                初期コンサルティングから長期運用まで一貫してサポートが可能です。
              </p>
            </div>
          </div>
          {/*  */}
          <div className="max-w-[1030px] md:ml-auto mt-10 md:mt-16 px-4 md:px-0">
            <TitleBorderComponent
              text="サービス内容"
              className="mb-8 md:mb-10 font-extrabold md:font-normal"
            />
            <h3 className="boxTitle">IT人材派遣</h3>
            <p className="boxText">
              システム開発、ネットワーク・サーバー構築、クラウド運用など、幅広い工程に対応できるエンジニアをご紹介します。
            </p>
            <h3 className="boxTitle mt-5 md:mt-10">システム開発</h3>
            <p className="boxText">
              Webアプリケーション、業務システム、基幹システムなど、お客様の要件に合わせた受託開発を行います。
            </p>
            <h3 className="boxTitle mt-5 md:mt-10">インフラソリューション</h3>
            <p className="boxText">
              オンプレミス環境からAWS・GCP・Azureなどのクラウドまで、
              <br />
              安定性かつ効率的なITインフラの構築と最適化を支援します。
            </p>
            <h3 className="boxTitle mt-5 md:mt-10">運用・保守</h3>
            <p className="boxText">
              初期コンサルティングから運用・保守まで、システムのライフサイクル全体を継続的にサポートします。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SolutionSectionComponent;
