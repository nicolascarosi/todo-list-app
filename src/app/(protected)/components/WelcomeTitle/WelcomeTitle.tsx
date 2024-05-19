'use client';

import { SectionTitle } from '@/components';
import { useUserStore } from '@/store';

export const WelcomeTitle = () => {
  const { user } = useUserStore();

  return <SectionTitle title={`Welcome ${user}`} />;
};
