import React from 'react'

import TitleEngJPComponent from '@/components/common/TitleEngJPComponent';
const AccessSectionComponent = () => {
  return (
    <div className="bg-[#dce5ea] py-16 md:py-32">
      <div id="access" className="container mx-auto">
      <TitleEngJPComponent titleEn1="" titleJp="アクセス" className="mb-6 md:mb-10">
        <span className="text-pinkBrand">A</span>CCESS
      </TitleEngJPComponent>
      <p className="text-sm md:text-base leading-loose flex flex-row items-start mb-5 md:mb-8">
        <span>所在地：</span>
        <span>東京都中央区東日本橋1丁目3-3 <br className="md:hidden" />TYDビル 3F</span>
      </p>
      <div className="w-full h-[285px] md:h-[570px] px-0 md:px-12 lg:px-16">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.4531434685287!2d139.78299607623154!3d35.69046502946596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018894db5187e1d%3A0x781162b5c47070b0!2z44CSMTAzLTAwMDQg5p2x5Lqs6YO95Lit5aSu5Yy65p2x5pel5pys5qmL77yR5LiB55uu77yT4oiS77yTIOe_vOODk-ODqyAzZg!5e0!3m2!1sja!2sjp!4v1757999711602!5m2!1sja!2sjp"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="text-sm md:text-base leading-loose flex flex-row items-start mb-5 md:mb-8 mt-5 md:mt-0">
        <span>メトロ：</span>
        <p className='inline'>東日本橋駅 徒歩3分<br className="md:hidden" /><span className="hidden md:inline">、</span>馬喰横山駅 徒歩4分<br className="md:hidden" /><span className="hidden md:inline">、</span>馬喰町駅 徒歩6分<br className="md:hidden" /><span className="hidden md:inline">、</span>日比谷線 人形町駅 徒歩10分</p>
      </div>
      </div>
    </div>
  )
}

export default AccessSectionComponent;
