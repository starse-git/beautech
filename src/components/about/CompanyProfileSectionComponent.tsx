import React from 'react'
import TitleEngJPComponent from '@/components/common/TitleEngJPComponent';

const CompanyProfileSectionComponent = () => {
  return (
    <div className="container my-16 md:my-32">
      <TitleEngJPComponent titleEn1="COMPANY" titleJp="会社概要" className="mb-6 md:mb-10">
        <span className="text-pinkBrand">P</span>ROFILE
      </TitleEngJPComponent>
      <div className="md:max-w-[520px] lg:max-w-[680px] mx-auto">
        <table className="min-w-full">
          <colgroup>
            <col className="w-[30%] md:w-[30%]" />
            <col className="w-[70%] md:w-[70%]" />
          </colgroup>
          <tbody>
            <tr className="text-sm md:text-base lg:text-xl">
              <td className="px-0 md:px-4 py-3 align-top">商号</td>
              <td className="px-0 md:px-4 py-3">
                <p className="leading-relaxed tracking-wider">BEAUTECH ビューテック株式会社</p>
              </td>
            </tr>
            <tr className="text-sm md:text-base lg:text-xl">
              <td className="px-0 md:px-4 py-3 align-top">設立</td>
              <td className="px-0 md:px-4 py-3">
                <p className="leading-relaxed tracking-wider">2018年08月01日</p>
              </td>
            </tr>
            <tr className="text-sm md:text-base lg:text-xl">
              <td className="px-0 md:px-4 py-3 align-top">資本金</td>
              <td className="px-0 md:px-4 py-3">
                <p className="leading-relaxed tracking-wider">2,000万円</p>
              </td>
            </tr>
            <tr className="text-sm md:text-base lg:text-xl">
              <td className="px-0 md:px-4 py-3 align-top">代表取締役</td>
              <td className="px-0 md:px-4 py-3">
                <p className="leading-relaxed tracking-wider">西村 茂夫</p>
              </td>
            </tr>
            <tr className="text-sm md:text-base lg:text-xl">
              <td className="px-0 md:px-4 py-3 align-top">主要取引銀行</td>
              <td className="px-0 md:px-4 py-3">
                <p className="leading-relaxed tracking-wider">三井住友銀行<br />東京東信用金庫</p>
              </td>
            </tr>
            <tr className="text-sm md:text-base lg:text-xl">
              <td className="px-0 md:px-4 py-3 align-top break-keep">許認可・届出受理</td>
              <td className="px-0 md:px-4 py-3">
                <p className="leading-relaxed tracking-wider">
                  労働者派遣事業許可番号 <br className="md:hidden" />派13-316918<br />
                  有料職業紹介事業許可番号 <br className="md:hidden" />13-ユ-315806<br />
                  プライバシーマーク <br className="md:hidden" />第22000-459（01）号
                </p>
              </td>
            </tr>
            <tr className="text-sm md:text-base lg:text-xl">
              <td className="px-0 md:px-4 py-3 align-top">加入保険</td>
              <td className="px-0 md:px-4 py-3">
                <p className="leading-relaxed tracking-wider">
                  損害保険 PL保険
                </p>
              </td>
            </tr>
            <tr className="text-sm md:text-base lg:text-xl">
              <td className="px-0 md:px-4 py-3 align-top">電話番号</td>
              <td className="px-0 md:px-4 py-3">
                <p className="leading-relaxed tracking-wider">
                  03-6661-2879
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CompanyProfileSectionComponent;
