import React from "react";
import Image from "next/image";
import longImg06 from "@/assets/img/business/longImg06.png";
import lineBg from "@/assets/img/business/lineBg.png";
import TitleBorderComponent from "../common/TitleBorderComponent";

const MarketingSetctionComponent = () => {
  return (
    <div className="max-w-[1360px] mx-auto px-0 md:px-6 lg:px-8">
      <div className="max-w-[850px] mb-5 md:mb-10 mr-4 -mt-[5%] md:-mt-[8%] lg:-mt-[6%]">
        <Image
          src={longImg06}
          alt="画像"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto"
        />
      </div>
      <div className="max-w-[1150px]">
        <div className="flex flex-col md:flex-row px-4 md:px-0">
          <h3
            className="titleText1 md:w-[45%] lg:w-[40%] pt-0 md:pt-1 flex items-center md:items-start gap-5 md:gap-0"
            style={
              {
                "--line-bg": `url(${lineBg.src})`,
              } as React.CSSProperties
            }
          >
            マーケティング
            <br />
            コンサルティング
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
              Web集客に特化した効果的な
              <br className="block md:hidden" />
              ランディングページの提供
            </p>
            <p className="titleText3">
              コスメ事業とIT事業の知見を融合し、成約率の高いランディングページ(LP)を制作。
              <br />
              特にエステサロンをはじめとする美容業界において、女性心理に基づいた
              <br className="hidden md:block" />
              デザインとコピーで集客から成約までを支援します。
            </p>
          </div>
        </div>
        {/*  */}
        <div className="max-w-[1030px] md:ml-auto mt-10 md:mt-16 px-4 md:px-0">
          <TitleBorderComponent text="サービス内容" className="mb-8 md:mb-10 font-extrabold md:font-normal" />
          <h3 className="boxTitle">業界特化型LP制作</h3>
          <p className="boxText">
          体験予約・資料請求・お問い合わせなど、エステサロン集客で重要なアクションにつながる設計を行います。
          </p>
          <h3 className="boxTitle mt-5 md:mt-10">ターゲットに合わせた訴求</h3>
          <p className="boxText">
          女性心理を踏まえたデザインとコピー設計により、見込み客の心を動かし、行動へとつなげます。
          </p>
          <h3 className="boxTitle mt-5 md:mt-10">エステサロン専門LP <span className="hidden md:inline">|</span> <br className="md:hidden" />選べる5つのテンプレート</h3>
          <p className="boxText">
          現在、テンプレート化や分析機能を備えた新サービスを準備中。<br />
          今後さらに効果的な集客支援を提供していきます。
          </p>
        </div>
      </div>
    </div>
  );
};

export default MarketingSetctionComponent;
