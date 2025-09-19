"use client";
import React, { useEffect } from "react";
import PhilosophySectionComponent from "@/components/about/PhilosophySectionComponent";
import MessageSectionComponent from "@/components/about/MessageSectionComponent";
import HistorySectionComponent from "@/components/about/HistorySectionComponent";
import CompanyProfileSectionComponent from "@/components/about/CompanyProfileSectionComponent";
import AccessSectionComponent from "@/components/about/AccessSectionComponent";
import Banner from "@/assets/img/about/about_banner.png";
import SubBannerComponent from "@/components/common/SubBannerComponent";
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
const AboutPage = () => {

  return (
    <SuspenseWrapper fallback={<div>Loading about page...</div>}>
      <ScrollHandler />
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
        <div id="companyPhilosophy">
          <PhilosophySectionComponent />
        </div>
        {/* Message */}
        <div id="ceoMessage">
          <MessageSectionComponent />
        </div>
        {/* History */}
        <div id="history">
          <HistorySectionComponent />
        </div>
        {/* Company */}
        <CompanyProfileSectionComponent />
        {/* Access */}
        <AccessSectionComponent />
      </div>
    </SuspenseWrapper>
  );
};

export default AboutPage;
