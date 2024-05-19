'use client';

import { ROUTES, TOKEN_KEY } from '@/config';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem(TOKEN_KEY);
    if (isLoggedIn) router.push(ROUTES.HOME);
  }, []);

  return <main className="public-content">{children}</main>;
}
