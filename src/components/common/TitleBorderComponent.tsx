import React from "react";

interface TitleBorderComponentProps {
  text: string;
  className?: string;
}

const TitleBorderComponent: React.FC<TitleBorderComponentProps> = ({ text, className }) => {
  return (
    <h1 className={`text-xl md:text-4xl mb-2 tracking-wide text-left ${className ? className : ""}`}>
      <span className="text-pinkBrand bg-gradient-to-r from-orangeBrand via-pinkBrand to-[#7e62b7] bg-repeat-x bg-[position:-100%_100%] bg-[size:200%_6%]">
        {text}
      </span>
    </h1>
  );
};

export default TitleBorderComponent;
