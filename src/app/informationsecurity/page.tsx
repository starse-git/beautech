import React from 'react'
import InfoSection1Component from '@/components/informationsecurity/InfoSection1Component';
import InfoSection2Component from '@/components/informationsecurity/InfoSection2Component';
import InfoSection3Component from '@/components/informationsecurity/InfoSection3Component';

const InformationSecurityPage = () => {
  return (
    <div className="w-full mt-0 md:mt-[100px]">
      <InfoSection1Component />
      <InfoSection2Component />
      <InfoSection3Component />
    </div>
  )
}

export default InformationSecurityPage;
