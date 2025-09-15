import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";

interface PublicLayoutProps {
  children: React.ReactNode;
}

export default function PublicLayouts({ children }: PublicLayoutProps) {
  return (
    <div className="w-full">
      <Header />
      <main className="w-full">{children}</main>
      <Footer />
    </div>
  );
}