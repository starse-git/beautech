import React from "react";
import Image, { StaticImageData } from "next/image";

interface SubBannerProps {
  image: StaticImageData | string;
  title1: string;
  title2: string;
  subtitle?: string;
  highlightLetter?: string;
  reverse?: boolean;
}

const SubBannerComponent: React.FC<SubBannerProps> = ({
  image,
  title1,
  title2,
  subtitle,
  highlightLetter,
  reverse = false,
}) => {
  return (
    <div className="w-full md:max-w-[1360px] mx-auto md:px-6 lg:px-8 flex flex-col md:flex-row items-center">
      {/* Image Section */}
      <div
        className={`w-full md:w-[60%] ${
          reverse ? "order-2 md:order-1" : "order-1 md:order-2"
        }`}
      >
        <div className="w-full">
          <Image
            src={image}
            alt="Sub Banner"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto"
            priority
          />
        </div>
      </div>

      {/* Text Section */}
      <div
        className={`w-full md:w-[40%] ${
          reverse ? "order-1 md:order-2" : "order-2 md:order-1"
        } relative z-[1] -mt-8 md:-mt-0`}
      >
        <div className="flex flex-col items-start leading-[1] text-darkText px-4 md:px-0">
          <p className="text-[45px] md:text-[60px] font-medium md:font-normal lg:text-[110px] tracking-widest">
            {title1}
          </p>
          <p className="text-[45px] md:text-[60px] font-medium md:font-normal lg:text-[110px] tracking-widest">
            {highlightLetter ? (
              <>
                <span className="text-pinkBrand">{highlightLetter}</span>
                {title2.replace(highlightLetter, "")}
              </>
            ) : (
              title2
            )}
          </p>
          {subtitle && (
            <p className="text-base md:text-xl lg:text-2xl font-medium md:font-normal mt-3 md:mt-2">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SubBannerComponent;