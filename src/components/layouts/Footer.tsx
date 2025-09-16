import Link from "next/link";
import React from "react";

const Footer = () => {
  const listItems1 = [
    { page: "企業理念", href: "/company-philosophy" },
    { page: "社長メッセージ", href: "/ceo-message" },
    { page: "沿革", href: "/history" },
    { page: "所在地（アクセス）", href: "/access" }
  ];

  const listItems2 = [
    { page: "コスメ事業", href: "/cosmetics" },
    { page: "IT事業", href: "/it" },
  ];

  const listItems3 = [
    { page: "法人のお客様", href: "/corporate" },
    { page: "個人のお客様", href: "/personal" },
  ];

  const listItems4 = [
    { page: "情報セキュリティ", href: "/security" },
  ];

  return (
    <footer className="w-full bg-[#3c3c3c] py-10 md:py-12">
      <div className="container text-[#e5dece]">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-5">
          <div>
            <h4 className="font-normal text-lg md:text-xl mb-4">企業情報</h4>
            <ul className="space-y-2 text-sm md:text-base list-disc list-inside marker:text-[0.5rem]">
              {listItems1.map((item, index) => (
                <li key={index}>
                  <Link href={item.href} className="hover:underline">{item.page}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-normal text-lg md:text-xl mb-4">事業内容</h4>
            <ul className="space-y-2 text-sm md:text-base list-disc list-inside marker:text-[0.5rem]">
              {listItems2.map((item, index) => (
                <li key={index}>
                  <Link href={item.href} className="hover:underline">{item.page}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden md:block">
            <h4 className="font-normal text-lg md:text-xl mb-4">採用情報</h4>
          </div>

          <div>
            <h4 className="font-normal text-lg md:text-xl mb-4">問い合わせ</h4>
            <ul className="space-y-2 text-sm md:text-base">
              {listItems3.map((item, index) => (
                <li key={index}>
                  <Link href={item.href} className="hover:underline">{item.page}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="block md:hidden">
            <h4 className="font-normal text-lg md:text-xl mb-4">採用情報</h4>
          </div>

          <div className="col-span-2 md:col-span-1">
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

        <div className="flex flex-wrap justify-center items-center mt-5 md:mt-0">
          <Link href="/site-policy" className="text-xs md:text-sm hover:underline">サイトポリシー</Link>
          <span className="mx-4">|</span>
          <Link href="/privacy-policy" className="text-xs md:text-sm hover:underline">プライバシーポリシー</Link>
        </div>
        <div className="mt-3 text-xs md:text-sm text-center">
          Copyright &copy;2025 BEAUTECH株式会社. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
