import React from "react";

const HandlingPersonalInfoComponent = () => {
  return (
    <div className="">
      <h3 className="text-base md:text-2xl font-bold mb-5">
        「個人情報の取扱いについて」
      </h3>
      <p>当社はお預かりした個人情報について以下のように取扱います。</p>
      <ul className="list-decimal list-inside space-y-4 leading-loose marker:font-bold">
        <li className="pl-5 -indent-5">
          利用目的について <br />
          提供された個人情報の利用目的は以下に定める通りです。
          <br />
          <ol className="list-none">
            <li className="pl-5 -indent-5">
              ・問い合わせ情報：問い合わせへの対応、連絡
            </li>
            <li className="pl-5 -indent-5">
              ・資料請求者情報：資料の送付、連絡
            </li>
          </ol>
        </li>
        <li className="pl-5 -indent-5">
          個人情報保護管理者について
          <br />
          当社の個人情報保護管理者は以下の通りです。
          <br />
          STAR TECH 株式会社
          <br />
          個人情報保護管理者　副社長 松尾 大
          <br />
          住所：〒104-0043　東京都中央区湊2-4-1　TOMACビル５階
          <br />
          電話番号：03-5207-2955
        </li>
        <li className="pl-5 -indent-5">
          委託について
          <br />
          上記１項の利用目的を果たすために外部委託をする場合があります。
        </li>
        <li className="pl-5 -indent-5">
          個人情報を提供することの任意性について
          <br />
          当社に個人情報をお預かりすることは任意です。
          <br />
          ただし、お預かりできなかった場合には上記１項の利用目的を果たすことができない場合があります。
        </li>
        <li className="pl-5 -indent-5">
          個人情報に関する苦情・開示等について
          <br />
          当社が保有する開示対象個人情報の取扱いに関する苦情及び開示等（利用目的の通知、開示、訂正・追加又は削除、利用又は第三者への提供の停止・消去）の申し出は上記２項の個人情報保護管理者までご連絡下さい。
          <br />
          なお、利用目的の通知、及び個人情報の開示に関わる手数料は、1件につき800円を申し受けます。
        </li>
      </ul>
    </div>
  );
};

export default HandlingPersonalInfoComponent;