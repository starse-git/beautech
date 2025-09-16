import React from 'react'
import TitleEngJPComponent from '@/components/common/TitleEngJPComponent';
const HistorySectionComponent = () => {
  return (
    <div className="container my-16 md:my-32">
      <TitleEngJPComponent titleEn1="" titleJp="沿革" className="mb-6 md:mb-10">
        <span className="text-pinkBrand">H</span>ISTORY
      </TitleEngJPComponent>
      <div className="md:max-w-[520px] lg:max-w-[680px] mx-auto">
        <table className="min-w-full">
          <colgroup>
            <col className="w-[20%] md:w-[15%]" />
            <col className="w-[80%] md:w-[85%]" />
          </colgroup>
          <tbody>
            <tr className="text-sm md:text-base lg:text-xl">
              <td className="px-0 md:px-4 py-3 text-left align-top">2025/09</td>
              <td className="px-0 md:px-4 py-3 text-left">
                <p className="leading-relaxed tracking-wider">
                  損害保険 PL保険加入
                  <br />
                  ビューテック株式会社として<br className="md:hidden" />現所在地に移転
                  <br />
                  ホームページリニューアル
                </p>
              </td>
            </tr>
            <tr className="text-sm md:text-base lg:text-xl">
              <td className="px-0 md:px-4 py-3 align-top">2024/01</td>
              <td className="px-0 md:px-4 py-3">
                <p className="leading-relaxed tracking-wider">西村 茂夫が代表取締役に就任</p>
              </td>
            </tr>
            <tr className="text-sm md:text-base lg:text-xl">
              <td className="px-0 md:px-4 py-3 align-top">2023/11</td>
              <td className="px-0 md:px-4 py-3">
                <p className="leading-relaxed tracking-wider">プライバシーマーク <br className="md:hidden" />第22000-459（01）号 を取得</p>
              </td>
            </tr>
            <tr className="text-sm md:text-base lg:text-xl">
              <td className="px-0 md:px-4 py-3 align-top">2023/10</td>
              <td className="px-0 md:px-4 py-3">
                <p className="leading-relaxed tracking-wider">
                  労働者派遣事業許可番号<br className="md:hidden" />（派13-316918）を取得
                  <br />
                  有料職業紹介事業許可番号<br className="md:hidden" />（13-ユ-315806）を取得
                </p>
              </td>
            </tr>
            <tr className="text-sm md:text-base lg:text-xl">
              <td className="px-0 md:px-4 py-3 align-top">2024/07</td>
              <td className="px-0 md:px-4 py-3">
                <p className="leading-relaxed tracking-wider">松尾大が代表取締役に就任</p>
              </td>
            </tr>
            <tr className="text-sm md:text-base lg:text-xl">
              <td className="px-0 md:px-4 py-3 align-top">2024/06</td>
              <td className="px-0 md:px-4 py-3">
                <p className="leading-relaxed tracking-wider">
                  プライバシーマーク申請中<br />
                  ホームページリニュアル<br />
                  住所変更<br />
                  資本金増資<br />
                  社名変更<br />
                  前身となる会社開設
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default HistorySectionComponent;
