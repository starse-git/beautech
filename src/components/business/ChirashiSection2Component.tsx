import React from "react";
import rectangleLeft from "@/assets/img/business/rectangleLeft.png";
import rectangleRight from "@/assets/img/business/rectangleRight.png";

const ChirashiSection2Component = () => {
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
            <p className="leading-loose text-center text-sm md:text-base lg:text-lg font-medium text-darkText">
              当社は4つの事業を連携させ、<br />
              美容業界に特化した包括的な<br className="md:hidden" />ソリューションを提供しています。
              <br />
              LPによる集客支援から<br className="md:hidden" />予約・顧客管理システムの導入、
              <br />
              さらにインフラ保守までを一貫して担い、
              <br />
              サロンや化粧品事業の効率化と<br className="md:hidden" />持続的な成長を力強くサポートします。
            </p>
          </div>
        </div>
    </div>
  );
};

export default ChirashiSection2Component;
