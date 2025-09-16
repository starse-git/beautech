import React from 'react'
import PhilosophySectionComponent from '@/components/about/PhilosophySectionComponent';
import MessageSectionComponent from '@/components/about/MessageSectionComponent';
import HistorySectionComponent from '@/components/about/HistorySectionComponent';
import CompanyProfileSectionComponent from '@/components/about/CompanyProfileSectionComponent';
import AccessSectionComponent from '@/components/about/AccessSectionComponent';
import Image from 'next/image';
import Banner from '@/assets/img/about/about_banner.png';
import SubBannerComponent from '@/components/common/SubBannerComponent';

const AboutPage = () => {
  return (
    <div className="w-full mt-0 md:mt-[100px]">
      {/* MV */}
      <SubBannerComponent
        image={Banner}
        title1="ABOUT"
        title2="BEAUTECH"
        highlightLetter="B"
        subtitle="企業情報"
        reverse={false}
      />
      {/* Philosophy */}
      <PhilosophySectionComponent />
      {/* Message */}
      <MessageSectionComponent />
      {/* History */}
      <HistorySectionComponent />
      {/* Company */}
      <CompanyProfileSectionComponent />
      {/* Access */}
      <AccessSectionComponent />
    </div>
  );
}

export default AboutPage;
