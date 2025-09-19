"use client";
import Link from "next/link";
import React from "react";
import SmoothScrollLink from "../common/SmoothScrollLink";

const Footer = () => {

  const listItems1 = [
    { page: "企業理念", href: "/about#companyPhilosophy" },
    { page: "社長メッセージ", href: "/about#ceoMessage" },
    { page: "沿革", href: "/about#history" },
    { page: "所在地（アクセス）", href: "/about#access" }
  ];

  const listItems2 = [
    { page: "コスメ事業", href: "/business#cosmetics" },
    { page: "IT事業", href: "/business#it" },
  ];

  const listItems3 = [
    { page: "法人のお客様", href: "/contact" },
    { page: "個人のお客様", href: "/personalcontact" },
  ];

  const listItems4 = [
    { page: "情報セキュリティ", href: "/informationsecurity" },
  ];

  return (
    <footer className="w-full bg-[#3c3c3c] py-10 md:py-12">
      <div className="container px-0 text-[#e5dece]">
        <div className="flex flex-col md:flex-row gap-5 md:gap-5">
          <div className="w-full md:w-[20%] flex flex-row md:flex-col">
            <h4 className="font-normal text-lg md:text-xl mb-4 w-[30%] md:w-full">企業情報</h4>
            <ul className="space-y-2 text-sm md:text-base list-disc list-inside marker:text-[0.5rem]">
              {listItems1.map((item, index) => (
                <li key={index}>
                  <SmoothScrollLink href={item.href} className="hover:underline">{item.page}</SmoothScrollLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full md:w-[18%] flex flex-row md:flex-col">
            <h4 className="font-normal text-lg md:text-xl mb-4 w-[30%] md:w-full">事業内容</h4>
            <ul className="space-y-2 text-sm md:text-base list-disc list-inside marker:text-[0.5rem]">
              {listItems2.map((item, index) => (
                <li key={index}>
                  <SmoothScrollLink href={item.href} className="hover:underline">{item.page}</SmoothScrollLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full md:w-[17%]">
            <h4 className="font-normal text-lg md:text-xl mb-0 md:mb-4"><Link href="/recruit">採用情報</Link></h4>
          </div>

          <div className="w-full md:w-[20%] flex flex-row md:flex-col">
            <h4 className="font-normal text-lg md:text-xl mb-4 w-[30%] md:w-full">問い合わせ</h4>
            <ul className="space-y-2 text-sm md:text-base">
              {listItems3.map((item, index) => (
                <li key={index}>
                  <Link href={item.href} className="hover:underline">{item.page}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full md:w-[25%]">
            <h4 className="font-normal text-lg md:text-xl mb-4">
              労働派遣法に基づくマージン率
            </h4>
            <ul className="space-y-2 text-sm md:text-base">
              {listItems4.map((item, index) => (
                <li key={index}>
                  <Link href={item.href} className="hover:underline">{item.page}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* <div className="flex flex-wrap justify-center items-center mt-10 md:mt-0">
          <Link href="/site-policy" className="text-xs md:text-sm hover:underline">サイトポリシー</Link>
          <span className="mx-4">|</span>
          <Link href="/privacy-policy" className="text-xs md:text-sm hover:underline">プライバシーポリシー</Link>
        </div> */}
        <div className="mt-10 text-xs md:text-sm text-center">
          Copyright &copy;2025 BEAUTECH株式会社. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
