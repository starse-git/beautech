import PublicLayouts from '@/components/layouts/PublicLayout';

export default function NewsLayout({ children }: { children: React.ReactNode }) {
  return <PublicLayouts>{children}</PublicLayouts>;
}
