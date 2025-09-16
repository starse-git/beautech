import React from 'react'
import PhilosophySectionComponent from '@/components/about/PhilosophySectionComponent';
import MessageSectionComponent from '@/components/about/MessageSectionComponent';
import HistorySectionComponent from '@/components/about/HistorySectionComponent';
import CompanyProfileSectionComponent from '@/components/about/CompanyProfileSectionComponent';
import AccessSectionComponent from '@/components/about/AccessSectionComponent';
const AboutPage = () => {
  return (
    <div className="w-full mt-[60px] md:mt-[100px]">
      {/* MV */}
      <div></div>
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
