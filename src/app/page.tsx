import AboutSectionComponent from "@/components/home/AboutSectionComponent";
import NewsSectionComponent from "@/components/home/NewsSectionComponent";
import PublicLayout from "@/components/layouts/PublicLayout";
import RecruitSectionComponent from "@/components/home/RecruitSectionComponent";
import ContactFormSectionComponent from "@/components/home/ContactFormSectionComponent";
import FullImageSlider from "@/components/common/FullImageSlider";
import SliderImage1 from "@/assets/img/home/slider_img01.jpg";
import SliderImage2 from "@/assets/img/home/slider_img02.jpg";
import SliderImage3 from "@/assets/img/home/slider_img03.jpg";
import SliderImage1SP from "@/assets/img/home/slider_img01SP.jpg";
import SliderImage2SP from "@/assets/img/home/slider_img02SP.jpg";
import SliderImage3SP from "@/assets/img/home/slider_img03SP.jpg";
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
  const imagesSP = [
    {
      src: SliderImage1SP,
      alt: "SliderImage1",
    },
    {
      src: SliderImage2SP,
      alt: "SliderImage2",
    },
    {
      src: SliderImage3SP,
      alt: "SliderImage3",
    },
  ];

  return (
    <div className="w-full">
      <div className="hidden md:block">
        <FullImageSlider images={images}/>
      </div>
      <div className="md:hidden">
        <FullImageSlider images={imagesSP}/>
      </div>
      <PublicLayout>
        <AboutSectionComponent />
        <NewsSectionComponent />
        <RecruitSectionComponent />
        <ContactFormSectionComponent />
      </PublicLayout>
    </div>
  );
}
