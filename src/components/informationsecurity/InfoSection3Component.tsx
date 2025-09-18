import React from "react";
import TitleBorderComponent from "@/components/common/TitleBorderComponent";

const InfoSection3Component = () => {
  return (
    <div>
      <div className="container py-10 md:py-20">
        <div className="flex items-center justify-center mb-10 md:mb-16">
          <TitleBorderComponent text="個人情報の取扱いについて" />
        </div>
        <p className="mb-5">当社は取得した個人情報の取扱いについて、以下のように公表します。</p>

        <h3 className="text-base md:text-xl font-bold mb-8">
          【I】取得した個人情報の利用目的
        </h3>

        <div className="max-w-[1100px] mx-auto">
          <table className="w-full table-fixed border-collapse border-t-2 border-l-2 border-gray-200">
            <tbody>
              {[
                ["個人情報の種別", "利用目的", "開示区分"],
                ["顧客先から預かった情報", "委託された業務の遂行", "非対象"],
                ["協力会社から預かった情報", "委託された業務の遂行", "非対象"],
                [
                  "人材紹介会社から預かった情報",
                  "採用選考、スキルの検討、顧客への提供",
                  "非対象",
                ],
                ["お客様の個人情報", "見積、契約、請求、各種連絡", "対象"],
                [
                  "お問合わせいただいた方の個人情報",
                  "お問合わせへの対応、関連する各種連絡",
                  "対象",
                ],
                ["採用応募された方の個人情報", "採用選考、各種連絡", "対象"],
                [
                  "当社従業者の個人情報",
                  "人事、給与、健康管理、福利厚生、各種連絡",
                  "対象",
                ],
              ].map((row, rowIndex) => (
                <tr key={rowIndex} className="border-b-2 border-gray-200">
                  {row.map((cell, cellIndex) => (
                    <td
                      key={cellIndex}
                      className="border-r-2 border-gray-200 p-4"
                    >
                      <p>{cell}</p>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-[#dce5ea]">
        <div className="container py-10 md:py-20">
          <h3 className="text-base md:text-xl font-bold mb-8">
            【II】保有個人データ又は第三者提供記録に関する事項
          </h3>
          <ul className="list-decimal list-inside leading-loose marker:font-bold">
            <li className="mb-5 pl-5 -indent-5">
              当社の名称及び住所並びに代表者の氏名：「個人情報保護方針」に記載しています。（住所は「苦情・相談及び問い合わせ窓口」に同じ）
            </li>
            <li className="mb-5 pl-5 -indent-5">
              個人情報保護管理者の職制：副社長　松尾
              大（連絡先Tel：03-6661-2879）
            </li>
            <li className="mb-5 pl-5 -indent-5">
              保有個人データの利用目的
              <br />
              【Ⅰ】の「開示区分」が〝開示対象〟になっているものが該当します。
            </li>
            <li className="mb-5 pl-5 -indent-5">
              認定個人情報保護団体
              <br />
              当社が入会している認定個人情報保護団体はありません。
            </li>
            <li className="mb-5 pl-5 -indent-5">
              保有個人データの開示等又は第三者提供記録の開示の請求手続
              <br />
              保有個人データの取扱いに関する開示等（利用目的の通知、開示、内容の訂正、追加又は削除、利用の停止・消去又は第三者への提供の停止）又は第三者提供記録の開示の申し出は上記２項の個人情報保護管理者までご連絡下さい。請求手続きについて説明をさせていただきます。
            </li>
            <li className="mb-0 pl-5 -indent-5 space-y-4">
              保有個人データの安全管理のために講じた措置
              <br />
              当社は保有個人データの安全管理のために以下の措置を講じています。
              <br />
              <br />
              <p className="leading-loose pl-6 -indent-6">
                <span className="mr-2">①</span>
                個人データの取扱いに係る規程の整備
                <br />
                個人データの取得、利用、保存等を行う場合の取扱い手順を社内規程として整備しています。
              </p>
              <p className="leading-loose pl-6 -indent-6">
                <span className="mr-2">②</span>組織的安全管理措置
                <br />
                部門毎に個人データの取扱いに関する責任者を設けるとともに、自己点検・内部監査等を通し整備した取扱い方法に従って従業者が個人データを取り扱っていることを責任者が確認する体制を整備しています。
              </p>
              <p className="leading-loose pl-6 -indent-6">
                <span className="mr-2">③</span>人的安全管理措置
                <br />
                従業者全員には社内規程順守を盛り込んだ誓約書の提出を義務づけ、年毎に個人データの取扱い手順や情報セキュリティの留意事項について研修を実施しています。
              </p>
              <p className="leading-loose pl-6 -indent-6">
                <span className="mr-2">④</span>物理的安全管理措置
                <br />
                事業所及び機密区域の施錠、及び個人データを取り扱う機器、電子媒体及び書類等の盗難又は紛失等を防止するための措置を講じています。
              </p>
              <p className="leading-loose pl-6 -indent-6">
                <span className="mr-2">⑤</span>技術的安全管理措置
                <br />
                個人データを取り扱うことのできる機器及び当該機器を取り扱う従業者を明確化し、個人データへの不要又は不正なアクセスを防止しています。
              </p>
              <p className="leading-loose pl-6 -indent-6">
                <span className="mr-2">⑥</span>委託先の監督
                <br />
                個人データを預託している委託先を年毎の定期又は適宜に評価し、安全管理措置に関し当社のレベル以上の措置を講じていることを確認しています。
              </p>
              <p className="leading-loose pl-6 -indent-6">
                <span className="mr-2">⑦</span>外的環境の把握
                <br />
                国内事業者のクラウドサーバーを利用しています。
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <div className="container py-10 md:py-20">
          <h3 className="text-base md:text-xl font-bold mb-6">
            【III】苦情・ご相談に関する事項
          </h3>
          <p className="ml-4">
          個人情報についての苦情・ご相談を受け付けております。「個人情報保護方針」に掲載されているお問い合わせ窓口までご連絡ください。
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoSection3Component;
