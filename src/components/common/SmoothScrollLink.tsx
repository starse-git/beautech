"use client";

import { useRouter, usePathname } from "next/navigation";
import useSmoothScroll from "@/hooks/useSmoothScroll";

interface SmoothScrollLinkProps {
  href: string; // 例: "/about#history"
  children: React.ReactNode;
  className?: string;
}

const SmoothScrollLink = ({ href, children, className }: SmoothScrollLinkProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const { scrollToSection } = useSmoothScroll();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();

    const [path, id] = href.split("#");

    if (pathname === path && id) {
      // 同じページ内 → Smooth Scroll
      scrollToSection(id);
    } else if (id) {
      // 他ページ → クエリにスクロール対象を渡して遷移
      router.push(`${path}?scrollTo=${id}`);
    } else {
      // アンカーなし → 通常遷移
      router.push(path);
    }
  };

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
};

export default SmoothScrollLink;