import React from "react";
import Image from "next/image";
import longImg02 from "@/assets/img/business/longImg02.png";
import lineBg from "@/assets/img/business/lineBg.png";
import TitleBorderComponent from "../common/TitleBorderComponent";
import pImg03 from "@/assets/img/business/pImg03.png";
import pImg04 from "@/assets/img/business/pImg04.png";
import pImg05 from "@/assets/img/business/pImg05.png";
import ButtonComponent from "../common/ButtonComponent";
const SalesSectionComponent = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1360px] mx-auto px-0 md:px-6 lg:px-8 -mb-[28%] md:-mb-[20%] lg:-mb-[12%]">
        <div className="max-w-[850px] mr-4">
          <Image
            src={longImg02}
            alt="画像"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto"
          />
        </div>
      </div>
      <div className="bg-[#e4ded7] pb-16 md:pb-40 lg:pb-28 pt-[30%] md:pt-[25%] lg:pt-[15%]">
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
                販売経路の
                <br />
                拡大戦略
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
                  顧客接点の拡大と業態に応じた最適な販売戦略
                </p>
                <p className="titleText3 xl:whitespace-nowrap">
                  当社は単一の販路に依存せず、ターゲット顧客の生活シーンや購買行動に合わせて
                  <br />
                  多角的な販売チャネルを構築。
                  リスクを分散するとともに、売上機会の最大化を図ります。
                </p>
              </div>
            </div>
            {/*  */}
            <div className="max-w-[1030px] md:ml-auto mt-10 md:mt-16 px-4 md:px-0">
              <div className="md:mb-0 lg:mb-24">
                <div className="w-full flex items-center justify-between mb-5 md:hidden">
                  <h1 className="w-[40%] text-lg tracking-wide text-left">
                    <span className="inline-block text-pinkBrand bg-gradient-to-r from-orangeBrand via-pinkBrand to-[#7e62b7] bg-repeat-x bg-[position:-100%_105%] bg-[size:200%_6%]">
                      高級チャネル
                    </span>
                    <span className="block text-base font-medium leading-loose tracking-wider text-[#f3547d]">
                      信頼と体験価値の提供
                    </span>
                  </h1>
                  <div className="w-[55%] -mr-4">
                    <Image
                      src={pImg03}
                      alt="画像"
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-full h-auto"
                    />
                  </div>
                </div>
                <TitleBorderComponent
                  text="高級チャネル"
                  className="hidden md:block mb-0"
                />
                <p className="hidden md:block text-base md:text-xl font-medium leading-loose tracking-wider text-[#f3547d] mb-6 md:mb-10">
                  信頼と体験価値の提供
                </p>
                <div className="relative pb-10 md:pb-0 lg:pb-12">
                  <div className="hidden md:block absolute top:0 lg:bottom-0 right-0 w-[37%] h-full lg:flex lg:items-end">
                    <Image
                      src={pImg03}
                      alt="画像"
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="w-full md:w-[70%]">
                    <h3 className="boxTitle">百貨店</h3>
                    <p className="boxText">
                      ブランドの格調と信頼性を高め、高価格帯商品の訴求に最適。
                      <br />
                      対面販売による専門的なアドバイスを通じて顧客満足度を高めます。
                    </p>
                    <h3 className="boxTitle mt-5 md:mt-8">ホテル</h3>
                    <p className="boxText">
                      リラックスや贅沢を楽しむ宿泊客層にアプローチ。
                      <br />
                      宿泊特典やスパメニューとの連携により、特別な体験価値を提供します。
                    </p>
                  </div>
                </div>
              </div>
              {/* 終了 高級チャネル */}

              {/* 専門チャネル */}
              <div>
                <div className="w-full flex items-center justify-between mb-5 md:hidden">
                  <h1 className="w-[45%] text-lg tracking-wide text-left order-2 md:order-1">
                    <span className="inline-block text-pinkBrand bg-gradient-to-r from-orangeBrand via-pinkBrand to-[#7e62b7] bg-repeat-x bg-[position:-100%_103%] bg-[size:200%_6%]">
                      専門チャネル
                    </span>
                    <span className="block text-base font-medium leading-loose tracking-wider text-[#f3547d]">
                      効果実感と信頼構築
                    </span>
                  </h1>
                  <div className="w-[55%] -ml-4">
                    <Image
                      src={pImg04}
                      alt="画像"
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-full h-auto"
                    />
                  </div>
                </div>
                <div className="relative pb-12 md:py-16 lg:py-24">
                  <div className="hidden md:block absolute top:0 lg:top-0 left-0 w-[37%] h-full lg:flex lg:items-start">
                    <Image
                      src={pImg04}
                      alt="画像"
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="w-full md:w-[60%] md:ml-auto">
                    <TitleBorderComponent
                      text="専門チャネル"
                      className="hidden md:block mb-0"
                    />
                    <p className="hidden md:block text-base md:text-xl font-medium leading-loose tracking-wider text-[#f3547d] mb-6 md:mb-10">
                      効果実感と信頼構築
                    </p>
                    <h3 className="boxTitle mt-5 md:mt-8">エステサロン</h3>
                    <p className="boxText">
                      <span className="text-lg">
                        プロの施術と連動して商品の効果を体験できる場。
                        <br />
                        高い満足度に基づく信頼関係を築き、継続的な利用につながります。
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              {/* 終了 専門チャネル */}

              {/* 直接販売チャネル */}
              <div>
                <div className="w-full flex items-center justify-between mb-5 md:hidden">
                  <h1 className="w-[45%] text-lg tracking-wide text-left">
                    <span className="inline-block text-pinkBrand bg-gradient-to-r from-orangeBrand via-pinkBrand to-[#7e62b7] bg-repeat-x bg-[position:-100%_105%] bg-[size:200%_6%]">
                      直接販売チャネル
                    </span>
                    <span className="-mr-16 block text-base font-medium leading-loose tracking-wider text-[#f3547d]">
                      利便性と顧客データの活用
                    </span>
                  </h1>
                  <div className="w-[55%] -mr-4">
                    <Image
                      src={pImg05}
                      alt="画像"
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-full h-auto"
                    />
                  </div>
                </div>
                <div className="relative pb-5 md:pb-0">
                  <div className="hidden md:block absolute top:0 lg:bottom-10 right-0 w-[37%] h-full lg:flex lg:items-end">
                    <Image
                      src={pImg05}
                      alt="画像"
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="w-full md:w-[80%] relative z-[1]">
                    <TitleBorderComponent
                      text="直接販売チャネル"
                      className="hidden md:block mb-0"
                    />
                    <p className="hidden md:block text-base md:text-xl font-medium leading-loose tracking-wider text-[#f3547d] mb-6 md:mb-10">
                      利便性と顧客データの活用
                    </p>
                    <h3 className="boxTitle mt-5 md:mt-8">
                      ECサイト・オンライン販売
                    </h3>
                    <p className="boxText mb-5 md:mb-10">
                      <span className="text-lg">
                        時間や場所を問わず広域の顧客にリーチが可能。
                        <br />
                        顧客データを直接取得できるため、リピーター育成やマーケティングの強化に活用できます。
                        <br />
                        特にサブスクリプションモデルとの親和性が高く、安定した収益基盤の構築につながります。
                      </span>
                    </p>
                    <div className="max-w-[300px] md:max-w-[400px] mx-auto md:mx-0 mt-3 md:mt-6">
                      <ButtonComponent
                        href="/"
                        textColor="text-white"
                        bgGradient="bg-gradient-to-r from-pinkBrand to-purpleBrand"
                        arrowColor="bg-white"
                      >
                        EC shop &quot;Star Shop&quot;
                      </ButtonComponent>
                    </div>
                  </div>
                </div>
              </div>
              {/* 終了 直接販売チャネル */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesSectionComponent;
