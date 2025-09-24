import TitleBorderComponent from '@/components/common/TitleBorderComponent';
import TitleEngJPComponent from '@/components/common/TitleEngJPComponent';
import React from 'react'
import { JobItem } from '@/types/index';
import ButtonComponent from '@/components/common/ButtonComponent';

type JobCategory = {
  category: string;
  href: string;
  jobs: JobItem[];
};

const RecruitPage = () => {
  const jobCategories: JobCategory[] = [
    {
      category: "事務・営業",
      href:"/recruit/officeForm",
      jobs: [
        { title: "職種",desp: "事務・営業",},
        { title: "仕事内容", desp: "資料作成などの事務業務全般をお任せします。基本的なPCスキル（Excel・Word）や、電話応対など一般的なビジネスマナーがあれば、はじめられる仕事です。書類チェックや電話・来客対応等のサポート業務を通して、会社を支えていただく仕事です。まずは簡単な業務からはじめ、徐々にステップアップ。未経験でもしっかりなくスートできます！",},
        { title: "求人情報", desp: "2名",},
        { title: "採用部門", desp: "学部（文系・理系）は問いません。",},
        { title: "基本給", desp: "学士（東京勤務）200,000円（月額手当含む）", },
        { title: "手当", desp: "時間外手当、交通費全額支給 など", },
        { title: "賞与", desp: "年2回（7月、12月）", },
        { title: "勤務地", desp: "東京、神奈川県、千葉県、埼玉県", },
        { title: "勤務時間", desp: "09:00〜18:00 ※配属会により異なります。",},
        { title: "福利厚生", desp: "健康保険、厚生年金、雇用保険、労災保険、退職金制度、各種保険組合",},
        { title: "教育制度", desp: "OJT、社内講座、グローバル言語（日本語・英語）通信など", },
        { title: "休日/休暇", desp: "週休2日制（土・日）、有給休暇（初年度10日付与）、産前産後特別休暇、育児休暇",},
        { title: "面接", desp: "一次試験 → 二次試験（選考方法は勤務地により変更になる場合があります）",},
        { title: "ドキュメント", desp: "履歴書、卒業見込証明書、成績証明書、他社の就職証明書",}
      ]
    },
    {
      category: "システムエンジニア",
      href:"/recruit/systemEngineerForm",
      jobs: [
        { title: "職種", desp: "システムエンジニア" },
        { title: "仕事内容", desp: "システムの設計、お客様との打ち合わせ、コンサルティング、プログラミングなどの技術力も重要ですが、コミュニケーション能力はそれ以上に重要です。" },
        { title: "求人情報", desp: "10名" },
        { title: "採用部門", desp: "学部（文系・理系）は問いません。" },
        { title: "基本給", desp: "学士（東京都） 200,000円（諸手当含む）" },
        { title: "手当", desp: "時間外手当、交通費全額支給 など" },
        { title: "賞与", desp: "年2回（7月、12月）" },
        { title: "勤務地", desp: "東京、神奈川県、千葉県、埼玉県" },
        { title: "勤務時間", desp: "09:00～18:00 ※各企画により異なります。" },
        { title: "福利厚生", desp: "健康保険、厚生年金、労働保険。働く上で必要となる社会保険は、各種完備" },
        { title: "教育制度", desp: "新入社員研修、OJT、Java、PHP、社内講座（Oracle、VMware、Linux/AIX/Windows構築）、グローバル語学（日本語・英語）講座など" },
        { title: "休日/休暇", desp: "週休2日制（土・日）、有給休暇（初年度10日付与）、産前産後特別休暇、費用" },
        { title: "面接",desp:"一次面接、二次面接  ※選考方法は、時期や会場により変更になる場合があります。"},
        { title: "ドキュメント", desp: "履歴書、卒業見込証明書、成績証明書、他社の成績証明書" },
      ]
    },
    {
      category: "インフラエンジニア",
      href:"/recruit/infraEngineerForm",
      jobs: [
        { title: "職種", desp: "インフラエンジニア" },
        { title: "仕事内容", desp: "物理サーバ/仮想サーバ(ミドルウェア含む)、ストレージ、ネットワーク等のインフラ基盤の設計、構築および運用まで、 あなたのご経験やご希望に合ったインフラ基盤プロジェクトを用意しています。" },
        { title: "求人情報", desp: "10名" },
        { title: "採用部門", desp: "学部（文系・理系）は問いません。" },
        { title: "基本給", desp: "学士（東京都） 200,000円（諸手当含む）" },
        { title: "手当", desp: "時間外手当、交通費全額支給 など" },
        { title: "賞与", desp: "年2回（7月、12月）" },
        { title: "勤務地", desp: "東京、神奈川県、千葉県、埼玉県" },
        { title: "勤務時間", desp: "09:00～18:00 ※各企画により異なります。" },
        { title: "福利厚生", desp: "健康保険、厚生年金、労働保険。働く上で必要となる社会保険は、各種完備" },
        { title: "教育制度", desp: "OJT、社内講座、グローバル言語（日本語・英語）講座など" },
        { title: "休日/休暇", desp: "週休2日制（土・日）、有給休暇（初年度10日付与）、産前産後特別休暇、費用" },
        { title: "面接",desp:"一次面接、二次面接 ※選考方法は、時期や会場により変更になる場合があります。"},
        { title: "ドキュメント", desp: "履歴書、卒業見込証明書、成績証明書、他社の成績証明書" },
      ]
    }
  ];
  return (
    <div className="container">
      <TitleEngJPComponent
        titleEn1=""
        titleJp="採用情報"
        className="mb-6 md:mb-10"
      >
        <span className="text-pinkBrand">R</span>ECRUIT
      </TitleEngJPComponent>

      {jobCategories.map((category, i) => (
        <div key={i}>
          {/* 職種タイトル */}
          <div className="flex items-center justify-center mb-10 md:mb-16">
            <TitleBorderComponent text={category.category} />
          </div>

          <div className="bg-white-box my-10 md:my-16">
            {category.jobs.map((item, idx) => (
              <div key={idx} className="mt-6 md:mt-10 first:mt-0">
                <h3 className="text-lg md:text-xl font-bold border-b-2 border-gray-300 pb-2 mb-1">
                  {item.title}
                </h3>
                <div className="text-sm md:text-base/loose">
                  <p className="text-darkText leading-loose">{item.desp}</p>
                </div>
              </div>
            ))}
            <div className="max-w-[300px] md:max-w-[400px] mx-auto mt-6 md:mt-14">
              <ButtonComponent
                href={category.href}
                textColor="text-white"
                bgGradient="bg-gradient-to-r from-orangeBrand to-purpleBrand"
                arrowColor="bg-white"
              >
                エントリ
              </ButtonComponent>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecruitPage;