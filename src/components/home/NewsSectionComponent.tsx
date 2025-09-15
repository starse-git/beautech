import React from 'react'
import TitleEngJPComponent from '../common/TitleEngJPComponent';
import { News } from '@/types/news';

const NewsSectionComponent = () => {
  const newsData: News[] = [
    {
      id: 1,
      title: "システムメンテナンスのお知らせ",
      content:
        "2025年9月20日（土）0:00〜6:00 の間、システムメンテナンスを行います。この間サービスをご利用いただけません。",
      date: "2025-09-15",
      isImportant: true,
    },
    {
      id: 2,
      title: "新機能リリースのお知らせ",
      content: "新しい検索機能を追加しました。ぜひご利用ください。",
      date: "2025-09-10",
      isImportant: false,
    },
    {
      id: 3,
      title: "祝日のお知らせ",
      content: "2025年9月23日（月）は秋分の日のため、カスタマーサポートを休業いたします。",
      date: "2025-09-05",
      isImportant: false,
    },
    {
      id: 4,
      title: "お知らせが入ります。 お知らせが入ります。 お知らせが入ります。 お知らせが入ります。",
      content: "いつもご利用いただきありがとうございます。今後ともよろしくお願いいたします。",
      date: "2025-09-01",
      isImportant: false,
    },
  ];
  return (
    <div className="bg-[#dce5ea] py-16 md:py-32">
      <div className="container mx-auto">
        <TitleEngJPComponent titleEn1="" titleJp="ビューテックからのお知らせ">
          <span className="text-pinkBrand">N</span>EWS
        </TitleEngJPComponent>
        <div className="my-6 md:my-12">
          <ul className="gap-4 md:gap-6">
            {newsData.map((news) => (
              <li
                key={news.id}
                className="flex flex-row items-start justify-between text-base md:text-2xl py-1 md:py-3 border-t border-dashed border-[#c5cecd] last:border-b"
              >
                <p className="w-[120px] md:w-[160px] text-[#666666] px-4">
                  {news.date}
                </p>
                <p className="w-[calc(100%-120px)] md:w-[calc(100%-160px)] cursor-pointer hover:underline text-[#333333] pr-4">
                  {news.title}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div className="max-w-[200px] ml-auto">
          <span className="relative flex items-center justify-center h-full px-10 text-pinkBrand font-bold ">
            VIEW MORE

            <span
              className={`absolute right-0 top-1/2 w-[45px] h-[1px] bg-[#666] -translate-y-1/2`}
            />

            <span
              className={`absolute right-0 top-1/2 w-[1px] h-[10px] bg-[#666] rotate-[-45deg] -translate-x-[2px] -translate-y-[8px]`}
            />
          </span>
        </div>
      </div>
    </div>
  );
}

export default NewsSectionComponent;