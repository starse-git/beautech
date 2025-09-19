import { useCallback } from "react";

const useSmoothScroll = () => {
  const scrollToSection = useCallback((id: string, customOffset?: number) => {
    const section = document.getElementById(id);

    if (section) {
      const defaultOffset = window.innerWidth < 768 ? 70 : 100;
      const offset = customOffset ?? defaultOffset;

      const sectionPosition = section.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = sectionPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }, []);

  return { scrollToSection };
};

export default useSmoothScroll;