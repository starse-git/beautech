import React from 'react'
import SubPageLayout from '@/components/layouts/SubPageLayout';

const layout = ({ children }: { children: React.ReactNode }) => {
  return <SubPageLayout>{children}</SubPageLayout>;
};

export default layout;
