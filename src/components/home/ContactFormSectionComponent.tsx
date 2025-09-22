"use client"
import React from 'react'
import { useRouter } from "next/navigation";
const ContactFormSectionComponent = () => {
  const router = useRouter();
  return (
    <div className="bg-[#dce5ea] py-16 md:py-32">
      <div className="container max-w-[1230px] mx-auto">
        <div className="flex flex-col items-start leading-[1] text-darkText mb-8 md:mb-12">
          <p className="text-[45px] md:text-[60px] lg:text-[80px] tracking-wider">
            CONTACT<br className='block md:hidden' /><span className="text-pinkBrand ml-0 md:ml-4">F</span>ORM
          </p>
          <p className="text-base md:text-xl lg:text-2xl mt-1 md:mt-2">
            ビューテックへお問い合わせ
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-10">
          <div className="w-full md:w-1/2 bg-pinkBrand p-4 md:p-5">
            <div className="border border-[#ddd3cd] h-full cursor-pointer" onClick={() => router.push('/contact')}>
              <div className="py-8 md:py-10 space-y-4 md:space-y-8 text-center text-[#e5dece]">
                <h3 className="text-lg md:text-2xl lg:text-4xl">法人のお客様</h3>
                <p className="text-base md:text-lg lg:text-xl">
                  お取引に関するお問い合わせ、
                  <br />
                  メーカー様、専門家様などはこちらから
                </p>
                <span
                  className={`relative w-[45px] h-[1px] bg-[#ddd3cd] flex mx-auto`}
                >
                  <span
                    className={`absolute right-0 top-1/2 w-[1px] h-[10px] bg-[#ddd3cd] rotate-[-45deg] -translate-x-[2px] -translate-y-[8px]`}
                  />
                </span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 bg-[#ddd3cd] p-4 md:p-5">
            <div className="border border-pinkBrand h-full cursor-pointer" onClick={() => router.push('/personalcontact')}>
              <div className="py-8 md:py-10 space-y-4 md:space-y-8 text-center text-pinkBrand">
                <h3 className="text-lg md:text-2xl lg:text-4xl">個人のお客様</h3>
                <p className="text-base md:text-lg lg:text-xl">
                  商品に関する
                  <br />
                  ご質問、ご要望などはこちらから
                </p>
                <span
                  className={`relative w-[45px] h-[1px] bg-pinkBrand flex mx-auto`}
                >
                  <span
                    className={`absolute right-0 top-1/2 w-[1px] h-[10px] bg-pinkBrand rotate-[-45deg] -translate-x-[2px] -translate-y-[8px]`}
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactFormSectionComponent;
