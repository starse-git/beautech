import React from 'react'
import TitleEngJPComponent from '@/components/common/TitleEngJPComponent';
// import Image from 'next/image';
// import messageCircle from '@/assets/img/about/messageCircle.png';
const MessageSectionComponent = () => {
  return (
    <div className="container relative my-16 md:my-32">
      {/* <div className="absolute -top-4 left-0 w-full h-full">
        <Image src={messageCircle.src} alt="message circle" width={0} height={0} sizes="100vw" className="z-0 w-full h-full object-cover" priority />
      </div> */}
      <div className="relative">
        <TitleEngJPComponent
          titleEn1=""
          titleJp="代表挨拶"
          className="mb-6 md:mb-10"
        >
          <span className="text-pinkBrand">M</span>ESSAGE
        </TitleEngJPComponent>
        <div className="px-4 md:px-10 lg:px-12 space-y-8 md:space-y-8">
          <p className="text-base md:text-lg lg:text-2xl leading-loose">
            品質は信頼の証。そして、それは卓越した技術の上に成り立ちます。
            <br />
            私たちはその基準を守り、常にその価値を磨き続けます。
            <br />
            クラウド、セキュリティ、UXデザイン。
            <br />
            現在の御客様を大切にするとともに、時代の変化を先取りし、
            <br />
            最新の技術と美容への深い理解というハイブリッドな発想で、未来を切り拓く挑戦を続けます。
          </p>
          <p className="text-base md:text-lg lg:text-2xl leading-loose">
            私たちには、ITの知見と美容現場への理解、その両方があります。
            <br />
            技術の力で美容現場の「当たり前」を進化させ、自動化と効率化の仕組みを提供し、
            <br />
            業界の未来をともに切り拓いていくこと。
            <br />
            それが、私たちの新たな挑戦です。
          </p>
          <p className="text-base md:text-lg lg:text-2xl leading-loose">
            この挑戦の根底にあるのは「誠実」「品質」「挑戦」という理念です。
            <br />
            肌に触れる化粧品も、業務を支えるシステムも、品質に一切妥協せず、
            <br />
            お客様に安心と信頼をお届けすることを最優先に考えています。
          </p>
          <p className="text-base md:text-lg lg:text-2xl leading-loose">
            これからもBeauty(美)とTech(技術)の両輪でデジタル変革（DX）を推進し、
            <br />
            新しい価値を生み出し、お客様の幸せを支え、
            <br />
            ビジネスの可能性を広げるパートナーとして歩み続けます。
          </p>
          <p className="text-base md:text-lg lg:text-2xl leading-loose text-right">
            代表取締役
            <span className="font-bold text-lg md:text-xl lg:text-3xl ml-3">
              西村 茂夫
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default MessageSectionComponent;
