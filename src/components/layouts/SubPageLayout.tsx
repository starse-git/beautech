import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";

interface SubPageLayoutProps {
  children: React.ReactNode;
}

export default function SubPageLayout({ children }: SubPageLayoutProps) {
  return (
    <div className="w-full">
      <Header />
      <main className="w-full my-20 md:my-40">{children}</main>
      <Footer />
    </div>
  );
}