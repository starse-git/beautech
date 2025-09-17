import React from "react";

interface GradientBorderTextProps {
  text: string;
}

const GradientBorderText: React.FC<GradientBorderTextProps> = ({ text }) => {
  return (
    <div className="relative inline-block mb-2">
      <div className="relative px-5 py-1 bg-transparent border border-transparent bg-gradient-to-r from-[#f37054] via-[#f3547d] to-[#8262b7] bg-clip-border transform -skew-x-[20deg]">
        <div className="absolute inset-[1px] bg-white transform"></div>
        <div className="relative transform skew-x-[20deg] z-10">
          <span className="text-base md:text-lg lg:text-xl leading-relaxed font-medium text-center text-pinkBrand whitespace-nowrap tracking-wide">
            {text}
          </span>
        </div>
      </div>
    </div>
  );
};

export default GradientBorderText;
