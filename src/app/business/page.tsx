"use client";
import React, { useEffect } from "react";
import SubBannerComponent from '@/components/common/SubBannerComponent';
import Banner from '@/assets/img/business/business_banner.png';
import CosmeticsSectionComponent from '@/components/business/CosmeticsSectionComponent';
import ChirashiSectionComponent from '@/components/business/ChirashiSectionComponent';
import ChirashiSection2Component from '@/components/business/ChirashiSection2Component';
import CosmeticsScetion2Component from '@/components/business/CosmeticsScetion2Component';
import MarketingSetctionComponent from '@/components/business/MarketingSetctionComponent';
import ECSectionComponent from '@/components/business/ECSectionComponent';
import SoftwareSectionComponent from '@/components/business/SoftwareSectionComponent';
import SolutionSectionComponent from '@/components/business/SolutionSectionComponent';
import SalesSectionComponent from '@/components/business/SalesSectionComponent';

import { useSearchParams } from "next/navigation";
import useSmoothScroll from "@/hooks/useSmoothScroll";
import SuspenseWrapper from "@/components/common/SuspenseWrapper";

const ScrollHandler: React.FC = () => {
  const searchParams = useSearchParams();
  const { scrollToSection } = useSmoothScroll();

  useEffect(() => {
    const targetId = searchParams.get("scrollTo");
    if (targetId) {
      setTimeout(() => {
        scrollToSection(targetId);
      }, 300);
    }
  }, [searchParams, scrollToSection]);

  return null;
};

const BusinessPage = () => {
  
  return (
    <SuspenseWrapper fallback={<div>Loading business page...</div>}>
      <ScrollHandler />
    <div className="w-full mt-0 md:mt-[100px]">
      {/* MV */}
      <SubBannerComponent
        image={Banner}
        title1="OUR"
        title2="BUSINESS"
        highlightLetter="B"
        subtitle="ビューテックのしごと"
        reverse={false}
      />
      {/* Cosmetics */}
      <CosmeticsSectionComponent />
      {/* Cosmetics2 */}
      <CosmeticsScetion2Component />
      {/* Sales */}
      <SalesSectionComponent />
      {/* Chirashi */}
      <ChirashiSectionComponent />
      {/* Solution */}
      <SolutionSectionComponent />
      {/* Software */}
      <SoftwareSectionComponent />
      {/* EC */}
      <ECSectionComponent />
      {/* Marketing */}
      <MarketingSetctionComponent />
      {/* Chirashi2 */}
      <ChirashiSection2Component />
      
    </div>
    </SuspenseWrapper>
  )
}

export default BusinessPage;
