import React from 'react'
import Image from 'next/image';
import longImg01 from '@/assets/img/business/longImg01.png';
import lineBg from '@/assets/img/business/lineBg.png';
import TitleBorderComponent from '../common/TitleBorderComponent';
import pImg01 from "@/assets/img/business/pImg01.png";
import pImg02 from "@/assets/img/business/pImg02.png";

const CosmeticsScetion2Component = () => {
  return (
    <div className="max-w-[1360px] mx-auto px-0 md:px-6 lg:px-8">
      <div className="max-w-[850px] mb-5 md:mb-10 mr-4">
        <Image
          src={longImg01}
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
            className="titleText1 md:w-[32%] lg:w-[30%] pt-0 md:pt-1 flex items-center md:items-start gap-5 md:gap-0"
            style={
              {
                "--line-bg": `url(${lineBg.src})`,
              } as React.CSSProperties
            }
          >
            ブランド戦略
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
              先端科学と自然の調和を追求する2つのアプローチ
            </p>
            <p className="titleText3">
              先端科学と自然由来の成分を融合した高品質な商品ラインアップにより、
              <br />
              お取引先様は安定した販売基盤を築くとともに、新たな市場機会を拡大できます。
            </p>
          </div>
        </div>
        {/*  */}
        <div className="max-w-[1030px] md:ml-auto mt-10 md:mt-16 px-4 md:px-0">
          <div className="w-full flex items-center justify-between mb-5 md:hidden">
            <h1 className="w-[45%] text-lg tracking-wide text-left">
              <span className="inline-block text-pinkBrand bg-gradient-to-r from-orangeBrand via-pinkBrand to-[#7e62b7] bg-repeat-x bg-[position:-100%_105%] bg-[size:200%_6%]">
                代理店
                <br />
                ブランド事業
              </span>
            </h1>
            <div className="w-[55%] -mr-4">
              <Image
                src={pImg01}
                alt="画像"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto"
              />
            </div>
          </div>
          <TitleBorderComponent
            text="代理店ブランド事業"
            className="hidden md:block mb-10"
          />
          <p className="text-sm md:text-lg font-normal leading-loose mb-6 md:mb-10">
            韓国発の先端バイオテクノロジーをいち早く導入し、世界的に評価の高いブランドを国内市場に提供。
            <br />
            自社開発だけでは得られない技術力と商品の新鮮さを確保し、最新のトレンドを取り入れラインアップを展開します。
          </p>
          <div className="relative pb-5 md:pb-12">
            <div className="hidden md:block absolute top:0 lg:bottom-0 right-0 w-[37%] h-full lg:flex lg:items-end">
              <Image
                src={pImg01}
                alt="画像"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto"
              />
            </div>
            <div className="w-full md:w-[65%]">
              <h3 className="boxTitle">EXOMERE（エクソミア）</h3>
              <p className="boxText">
                韓国の植物幹細胞技術による、微細成分「エクソソーム」に着目。
                <br />
                肌への高い浸透効果と透明感やハリをサポートし、エイジングケアに特化した
                先端スキンケアブランドです。
              </p>
              <h3 className="boxTitle mt-5 md:mt-8">
                D.PL CELL（ディープルセル）
              </h3>
              <p className="boxText">
                韓国の皮膚科学研究所の技術を背景に持つブランド。
                <br />
                医学的アプローチに裏付けられた信頼性と効果に重点を置き、
                <br />
                エイジングケア市場での高付加価値なソリューションを提供します。
              </p>
            </div>
          </div>
          {/* 自社ブランド事業 */}
          <div className="flex items-center md:items-start gap-4 my-6 md:my-12 lg:my-20">
            <div className="w-[50%] md:w-[35%] -ml-4 md:ml-0">
              <Image
                src={pImg02}
                alt="画像"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto"
              />
            </div>
            <div className="w-[50%] md:w-[65%] mt-10">
              <TitleBorderComponent text="自社ブランド事業" className="mb-10" />
              <p className="hidden md:block boxText mb-6 md:mb-10">
                代理店事業で得た知見と市場データを活かし、植物幹細胞を核とした<br className="hidden lg:block" />自社ブランドの開発を推進。<br />コンセプト設計から価格設定、マーケティングまで一貫して自社でコントロールできる体制を強みとし、<br />独自のブランド価値を確立しています。<br />長期的なブランド資産を築き、収益性の向上を目指します。
              </p>
            </div>
          </div>
          <p className="md:hidden boxText mb-12 md:mb-6">
            代理店事業で得た知見と市場データを活かし、植物幹細胞を核とした<br className="hidden lg:block" />自社ブランドの開発を推進。<br />コンセプト設計から価格設定、マーケティングまで一貫して自社でコントロールできる体制を強みとし、<br />独自のブランド価値を確立しています。<br />長期的なブランド資産を築き、収益性の向上を目指します。
          </p>
        </div>
      </div>
    </div>
  );
}

export default CosmeticsScetion2Component;
