import React from "react";

const PersonalInfoComponent = () => {
  return (
    <>
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        個人情報の取扱いについて
      </h1>
      <p className="mb-4 text-sm">
        当社はお預かりした貴殿の個人情報について以下のように取扱います。
      </p>

      <ol className="list-decimal pl-6 space-y-4 text-gray-700 text-sm">
        <li>
          <strong>利用目的について</strong>
          <br />
          提供された個人情報の利用目的は以下に定める通りです。
          <ul className="list-disc pl-6 mt-2">
            <li>
              利用する個人情報：基本個人情報、履歴書、職務経歴書、スキルシート
            </li>
            <li>利用目的：採用選考及び面談に関わる連絡のため</li>
          </ul>
        </li>
        <li>
          <strong>個人情報保護管理者について</strong>
          <br />
          BEAUTECH 株式会社
          <br />
          個人情報保護管理者 副社長 松尾 大
          <br />
          住所：〒103-0004 東京都中央区東日本橋1丁目3-3 TYDビル 3F
          <br />
          電話番号：03-6661-2879
        </li>
        <li>
          <strong>委託について</strong>
          <br />
          上記1項の利用目的を果たすために外部委託をする場合があります。
        </li>
        <li>
          <strong>個人情報を提供することの任意性について</strong>
          <br />
          当社に個人情報をお預かりすることは任意です。ただし、お預かりできなかった場合には上記1項の利用目的を果たすことができない場合があります。
        </li>
        <li>
          <strong>個人情報に関する苦情・開示等について</strong>
          <br />
          当社が保有する開示対象個人情報の取扱いに関する苦情及び開示等（利用目的の通知、開示、訂正・追加又は削除、利用又は第三者への提供の停止・消去、第三者提供記録の開示）の申し出は上記2項の個人情報保護管理者までご連絡下さい。苦情及び開示等の請求手続きについて説明をさせていただきます。なお、利用目的の通知、及び個人情報の開示に関わる手数料は、1件につき800円を申し受けます。
        </li>
      </ol>
    </>
  );
};

export default PersonalInfoComponent;
