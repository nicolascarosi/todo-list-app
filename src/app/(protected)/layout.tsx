import { ROUTES, TOKEN_KEY } from '@/config';
import { Sidebar } from '@/layout';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isLoggedIn = cookies().get(TOKEN_KEY)?.value;
  if (!isLoggedIn) redirect(ROUTES.LOGIN);

  return (
    <>
      <Sidebar />
      <main className="protected-content">{children}</main>
    </>
  );
}
