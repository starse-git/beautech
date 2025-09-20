"use client";
import TitleBorderComponent from '../common/TitleBorderComponent';
import TitleEngJPComponent from '../common/TitleEngJPComponent';

const InfoSection1Component = () => {
  const styleCss =`
    .custom-list {
      counter-reset: my-counter;
    }

    .custom-list li {
      counter-increment: my-counter;
    }

    .custom-list li::before {
      content: "" counter(my-counter, numeric) ") ";
      margin-right: 0.5rem;
    }
  `;
  const listItems = [
    "当社は、個人情報の取扱いに関する法令、国が定める指針その他の規範を含むコンプライアンスを確立し、社会的責務としてこれを遵守致します。",
    "当社は、個人情報の取得、利用及び提供に関して、適正・適切な取扱いを定めた社内規程を策定し遵守致します。また、取得した個人情報は、利用目的の範囲内で利用し、目的外利用を行わないための措置を講じます。",
    "当社は、個人情報の漏えい、滅失又は毀損に対し適切な安全管理措置ならびに是正措置を講じます。",
    "個人情報の取扱い及び個人情報保護マネジメントシステムに関して、本人から苦情及び相談があった場合には、誠意をもって対応致します。",
    "当社は、個人情報保護マネジメントシステムを策定し実施するとともに、継続的に改善致します。"
  ];
  const listItems1 = [
    "制定日 2023年6月1日",
    "改訂日 2025年6月1日",
    "BEAU-TECH 株式会社",
    "代表取締役 西村 茂夫"
  ];
  return (
    <div className="my-20 md:my-40">
      <div className="container">
        <TitleEngJPComponent
          titleEn1=""
          titleJp="個人情報保護方針"
          className="mb-6 md:mb-10"
        >
          <span className="text-pinkBrand">I</span>NFORMATION
        </TitleEngJPComponent>
        <div className="flex items-center justify-center mb-10 md:mb-16">
          <TitleBorderComponent text="個人情報保護方針" />
        </div>
        <div className="bg-white-box">
          <p className="leading-loose mb-6">
            BEAU-TECH
            株式会社は、社会の基盤となるITサービスを提供する企業として、個人情報保護の重要性を認識し、個人情報を適切に保護するための個人情報管理の仕組みを策定し、以下のように「個人情報保護方針」を定め、保護に努めます。
          </p>
          <style jsx>{styleCss}</style>
          <ol className="custom-list list-none">
            {listItems.map((item, index) => (
              <li key={index} className="mb-6">
                {item}
              </li>
            ))}
          </ol>
          <div className="text-right">
            {listItems1.map((item, index) => (
              <p key={index} className="mb-6">
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoSection1Component;
