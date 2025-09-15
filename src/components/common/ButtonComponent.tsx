// import Link from 'next/link';
// import React from 'react'
// interface ButtonProps {
//   href: string;
//   className?: string;
//   children: React.ReactNode;
// }

// const ButtonComponent = ({ href, className, children }: ButtonProps) => {
//   return (
//     <Link
//       href={href}
//       rel="noopener noreferrer"
//       className={`btnStyle ${className ?? ""}`}
//     >
//       <span>{children}</span>
//     </Link>
//   );
// }

// export default ButtonComponent;
import Link from 'next/link';
import React from 'react';

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  textColor?: string;
  bgGradient?: string;
  arrowColor?: string;
  className?: string;
}

const ButtonComponent = ({
  href,
  children,
  textColor = "text-white",
  bgGradient = "bg-gradient-to-r from-pink-500 to-purple-700",
  arrowColor = "bg-white",
  className,
}: ButtonProps) => {
  return (
    <Link
      href={href}
      className={`inline-block w-full h-[50px] max-md:mx-auto ${bgGradient} ${textColor} font-bold text-sm md:text-base cursor-pointer transition-all duration-300 ${className}`}
    >
      <span className="relative flex items-center justify-center h-full px-10">
        {children}

        <span
          className={`absolute right-5 top-1/2 w-[45px] h-[1px] ${arrowColor} -translate-y-1/2`}
        />

        <span
          className={`absolute right-5 top-1/2 w-[1px] h-[10px] ${arrowColor} rotate-[-45deg] -translate-x-[2px] -translate-y-[8px]`}
        />
      </span>
    </Link>
  );
};

export default ButtonComponent;
