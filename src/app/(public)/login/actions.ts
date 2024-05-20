'use server';

import { TOKEN_KEY } from '@/config';
import { loginService } from '@/services';
import { cookies } from 'next/headers';
import { ILoginValues } from './components/LoginForm/LoginForm.interface';

export const login = async (values: ILoginValues) => {
  const response = await loginService.login(values);
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

  cookies().set(TOKEN_KEY, response[0].accessToken, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    path: '/',
  });
  return response;
};

export const logout = () => cookies().delete(TOKEN_KEY);
