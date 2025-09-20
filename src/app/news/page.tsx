import TitleEngJPComponent from '@/components/common/TitleEngJPComponent';
import TitleBorderComponent from '@/components/common/TitleBorderComponent';
import React from 'react';

const NewsPage = () => {
  return (
    <div className="my-20 md:my-40">
      <div className="container">
        <TitleEngJPComponent
          titleEn1=""
          titleJp="お知らせ"
          className="mb-6 md:mb-10"
        >
          <span className="text-pinkBrand">N</span>EWS
        </TitleEngJPComponent>
        <div className="flex items-center justify-center mb-10 md:mb-16">
          <TitleBorderComponent text="お知らせ" />
        </div>
        <div className="bg-white-box p-8 md:p-16 text-darkText text-base md:text-lg leading-loose">
          <ul className="gap-4 md:gap-6">
            {[
              {
                id: 1,
                title: "プライバシーマーク　第22000-459（01）号　を取得しました。",
                content: "プライバシーマーク　第22000-459（01）号　を取得しました。",
                date: "2023/11/08",
                isImportant: true,
              },
              {
                id: 2,
                title: "労働者派遣事業許可番号（派13-316918） 、有料職業紹介事業許可番号（13-ユ-315806）を取得しました。",
                content: "労働者派遣事業許可番号（派13-316918） 、有料職業紹介事業許可番号（13-ユ-315806）を取得しました。",
                date: "2023/10/01",
                isImportant: false,
              },
              {
                id: 3,
                title: "ホームページを公開しました。",
                content: "ホームページを公開しました。",
                date: "2023/06/10",
                isImportant: false,
              },
              {
                id: 4,
                title: "資本金を2,000万円に増資しました。",
                content: "資本金を2,000万円に増資しました。",
                date: "2023/06/06",
                isImportant: false,
              },
              {
                id: 5,
                title: "事務所を八丁堀に移動しました。",
                content: "事務所を八丁堀に移動しました。",
                date: "2023/02/01",
                isImportant: false,
              },
              {
                id: 6,
                title: "会社を設立しました。",
                content: "会社を設立しました。",
                date: "2018/08/01",
                isImportant: false,
              },
            ].map((news) => (
              <li
                key={news.id}
                className="flex flex-col md:flex-row items-start justify-between text-base md:text-2xl py-4 md:py-3 border-t border-dashed border-[#c5cecd] last:border-b"
              >
                <p className="w-full md:w-[160px] text-[#666666] md:px-4">
                  {news.date}
                </p>
                <p className="w-full md:w-[calc(100%-160px)] text-[#333333] md:pr-4">
                  {news.title}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
