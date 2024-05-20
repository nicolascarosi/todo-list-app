import { ROUTES, TOKEN_KEY } from '@/config';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isLoggedIn = cookies().get(TOKEN_KEY)?.value;
  if (isLoggedIn) redirect(ROUTES.HOME);

  return <main className="public-content">{children}</main>;
}
