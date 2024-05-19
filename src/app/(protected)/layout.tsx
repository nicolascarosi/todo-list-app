'use client';

import { ROUTES, TOKEN_KEY } from '@/config';
import { Sidebar } from '@/layout';
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
    if (!isLoggedIn) router.push(ROUTES.LOGIN);
  }, []);

  return (
    <>
      <Sidebar />
      <main className="protected-content">{children}</main>
    </>
  );
}
