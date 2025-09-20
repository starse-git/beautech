import TitleEngJPComponent from '@/components/common/TitleEngJPComponent';
import TitleBorderComponent from '@/components/common/TitleBorderComponent';
import React from 'react';

const MarginRatePage = () => {
  return (
    <div className="my-20 md:my-40">
      <div className="container">
        <TitleEngJPComponent
          titleEn1=""
          titleJp="労働派遣法に基づくマージン率"
          className="mb-6 md:mb-10"
        >
          <span className="text-pinkBrand">M</span>ARGIN RATE
        </TitleEngJPComponent>
        <div className="flex items-center justify-center mb-10 md:mb-16">
          <TitleBorderComponent text="労働派遣法に基づくマージン率" />
        </div>
        <div className="bg-white-box">
          <p className="leading-loose mb-6">
            平成24年10月1日の労働者派遣法改定により、派遣元事業主は毎事業年度終了後、マージン率を公開することが義務付けられました。（法第23条第5項）<br />
            当社では、以下に公開致します。
          </p>
          <div className="mb-6">
            <strong>1. 対象年度：</strong>2024年4月1日～2025年3月31日（第7期）
          </div>
          <div className="mb-6">
            <strong>2. 労働者派遣の実績</strong>
            <table className="w-full border border-gray-300 text-left mt-2">
              <tbody>
                <tr>
                  <th className="bg-gray-100 border px-4 py-2 w-1/2">① 労働者の数</th>
                  <td className="border px-4 py-2">16 人</td>
                </tr>
                <tr>
                  <th className="bg-gray-100 border px-4 py-2">② 派遣先の数</th>
                  <td className="border px-4 py-2">7 社</td>
                </tr>
                <tr>
                  <th className="bg-gray-100 border px-4 py-2">③ 派遣料金の平均額（1日8時間）</th>
                  <td className="border px-4 py-2">31,882 円</td>
                </tr>
                <tr>
                  <th className="bg-gray-100 border px-4 py-2">④ 派遣労働者の平均賃金額（1日8時間）</th>
                  <td className="border px-4 py-2">16,031 円</td>
                </tr>
                <tr>
                  <th className="bg-gray-100 border px-4 py-2">⑤ マージン率</th>
                  <td className="border px-4 py-2">49.7 ％</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mb-6">
            <strong>3. 教育訓練</strong>
            <ul className="list-disc list-inside ml-4">
              <li>情報セキュリティー教育</li>
              <li>ビジネスマナー研修</li>
              <li>ＩＴスキル研修</li>
            </ul>
            キャリア・コンサルティング相談窓口の連絡先 電話番号：03-6661-2879
          </div>
          <div className="mb-6">
            <strong>4. 福利厚生に関する事項</strong>
            <ul className="list-disc list-inside ml-4">
              <li>年次有給休暇</li>
              <li>定期健康診断（年1回）</li>
              <li>資格取得支援（合格時の受験料補助）</li>
              <li>社員旅行（不定期開催）</li>
            </ul>
          </div>
          <div className="mb-6">
            <strong>5. 派遣労働者の待遇の決定に係る労使協定について</strong>
            <table className="w-full border border-gray-300 text-left mt-2">
              <tbody>
                <tr>
                  <th className="bg-gray-100 border px-4 py-2 w-1/2">① 労使協定を締結しているか否か</th>
                  <td className="border px-4 py-2">締結している</td>
                </tr>
                <tr>
                  <th className="bg-gray-100 border px-4 py-2">② 労使協定の対象となる協定労働者の範囲</th>
                  <td className="border px-4 py-2">派遣先に派遣されるすべての労働者</td>
                </tr>
                <tr>
                  <th className="bg-gray-100 border px-4 py-2">③ 労使協定の有効期間の終期</th>
                  <td className="border px-4 py-2">2025年3月31日</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarginRatePage;
