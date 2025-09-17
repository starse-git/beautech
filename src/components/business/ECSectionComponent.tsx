import React from "react";
import Image from "next/image";
import longImg05 from "@/assets/img/business/longImg05.png";
import lineBg from "@/assets/img/business/lineBg.png";
import TitleBorderComponent from "../common/TitleBorderComponent";
import ButtonComponent from "../common/ButtonComponent";

const ECSectionComponent = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1360px] mx-auto px-0 md:px-6 lg:px-8 -mb-[28%] md:-mb-[20%] lg:-mb-[12%]">
        <div className="max-w-[850px] mr-4">
          <Image
            src={longImg05}
            alt="画像"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto"
          />
        </div>
      </div>
      <div className="bg-[#dbe5e9] pb-16 md:pb-40 lg:pb-56 pt-[30%] md:pt-[25%] lg:pt-[15%]">
        <div className="max-w-[1360px] mx-auto px-0 md:px-6 lg:px-8">
          <div className="max-w-[1150px]">
            <div className="flex flex-col md:flex-row px-4 md:px-0">
              <h3
                className="titleText1 md:w-[32%] lg:w-[30%] pt-0 md:pt-1 flex items-center md:items-start gap-5 md:gap-0"
                style={
                  {
                    "--line-bg": `url(${lineBg.src})`,
                  } as React.CSSProperties
                }
              >
                EC売上
                <br />
                成長支援
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
              <div className="flex flex-col items-start text-darkText md:w-[68%] lg:w-[70%] mt-6 md:mt-14 lg:mt-20">
                <p className="titleText2">
                  デジタル販路の構築と
                  <br className="md:hidden" />
                  成長のための継続的な支援
                </p>
                <p className="titleText3 xl:whitespace-nowrap">
                  ECサイトの構築から集客、注文処理、顧客管理まで、オンラインビジネスを総合的に支援。
                  <br />
                  「作って終わり」ではなく、売上拡大につながるまで継続的に伴走する運用支援が強みです。
                  <br />
                  さらに、コスメ事業で培った知見を活かし、美容業界に特化した提案も可能です。
                </p>
              </div>
            </div>
            {/*  */}
            <div className="max-w-[1030px] md:ml-auto mt-10 md:mt-16 px-4 md:px-0">
              <TitleBorderComponent
                text="サービス内容"
                className="mb-8 md:mb-10 font-extrabold md:font-normal"
              />
              <h3 className="boxTitle">ECサイト構築</h3>
              <p className="boxText">
                目的やご予算に合わせ、最適なオーダーメイド開発プランを提案します。
              </p>
              <div className="max-w-[300px] md:max-w-[400px] mx-auto md:mx-0 mt-3 md:mt-6">
                <ButtonComponent
                  href="/"
                  textColor="text-white"
                  bgGradient="bg-gradient-to-r from-orangeBrand to-purpleBrand"
                  arrowColor="bg-white"
                >
                  EC shop “Star Shop”
                </ButtonComponent>
              </div>
              <h3 className="boxTitle mt-8 md:mt-10">
                運用・保守・改善の
                <br className="md:hidden" />
                トータルサポート
              </h3>
              <p className="boxText">
                安定したサイト運営を支えながら、コンテンツ更新やSEO施策、データ分析に基づく改善提案を継続的に行います。
              </p>
              <h3 className="boxTitle mt-8 md:mt-10">ビジネス成長の伴走支援</h3>
              <p className="boxText">
                集客から顧客管理まで、売上向上に直結する仕組みづくりをサポートします。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ECSectionComponent;
