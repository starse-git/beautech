import AboutSectionComponent from "@/components/home/AboutSectionComponent";
import NewsSectionComponent from "@/components/home/NewsSectionComponent";
import PublicLayout from "@/components/layouts/PublicLayout";
import RecruitSectionComponent from "@/components/home/RecruitSectionComponent";
import ContactFormSectionComponent from "@/components/home/ContactFormSectionComponent";
import FullImageSlider from "@/components/common/FullImageSlider";
import SliderImage1 from "@/assets/img/home/slider_img01.jpg";
import SliderImage2 from "@/assets/img/home/slider_img02.jpg";
import SliderImage3 from "@/assets/img/home/slider_img03.jpg";
export default function Home() {
  const images = [
    {
      src: SliderImage1,
      alt: "SliderImage1",
    },
    {
      src: SliderImage2,
      alt: "SliderImage2",
    },
    {
      src: SliderImage3,
      alt: "SliderImage3",
    },
  ];

  return (
    <div className="w-full">
      <FullImageSlider images={images}/>
      <PublicLayout>
        <AboutSectionComponent />
        <NewsSectionComponent />
        <RecruitSectionComponent />
        <ContactFormSectionComponent />
      </PublicLayout>
    </div>
  );
}
