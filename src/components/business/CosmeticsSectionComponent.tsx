import React from 'react'
import TitleEngJPComponent from '@/components/common/TitleEngJPComponent';

const CosmeticsSectionComponent = () => {
  return (
    <div id="cosmetics" className="container my-16 md:mb-16 md:mt-0">
      <TitleEngJPComponent
        titleEn1="COSMETICS"
        titleJp="コスメ事業"
        className="mb-6 md:mb-10"
      >
        <span className="text-pinkBrand">B</span>USINESS
      </TitleEngJPComponent>
      <p className="text-sm md:text-base lg:text-lg leading-loose md:leading-relaxed">
        当社のコスメ事業は、「先進的なブランド展開」 と「多様な販売チャネルの確立」 という<br className='hidden md:block' />
        2つの戦略を中心に、市場での存在感を高めています。<br />
        先端科学と自然の調和を追求したブランドづくりと、幅広い販路の開拓により、<br className='hidden md:block' />
        持続的な成長と確かな信頼を築いています。
      </p>
    </div>
  );
}

export default CosmeticsSectionComponent;
