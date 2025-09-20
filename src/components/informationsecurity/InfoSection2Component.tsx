import React from 'react'

const InfoSection2Component = () => {
  return (
    <div className="py-10 md:py-20 bg-[#dce5ea]">
      <div className="container">
        <h1 className="text-xl md:text-3xl lg:text-4xl mb-10 md:mb-16 tracking-wide text-center">
          <span className="text-pinkBrand bg-gradient-to-r from-orangeBrand via-pinkBrand to-[#7e62b7] bg-repeat-x bg-[position:-100%_100%] bg-[size:200%_6%]">
            個人情報に関する苦情・<br className="lg:hidden" />相談及び問い合わせ窓口
          </span>
        </h1>
        <p className="leading-loose text-center mb-2">BEAU-TECH 株式会社</p>
        <p className="leading-loose text-center mb-2">苦情及び相談窓口</p>
        <p className="leading-loose text-center mb-2">〒104-0043 東京都中央区湊2-4-1 <br className='md:hidden' />TOMACビル５階</p>
        <p className="leading-loose text-center mb-2">TEL：03-6661-2879</p>
        <p className="leading-loose text-center mb-2">FAX：03-5207-2956</p>
      </div>
    </div>
  )
}

export default InfoSection2Component;
