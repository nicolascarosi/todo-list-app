import { ILoginValues } from '@/app/(public)/login/components/LoginForm/LoginForm.interface';
import { ENDPOINTS } from '@/config';

export const loginService = {
  login: async (body: ILoginValues): Promise<any> => {
    const res = await fetch(ENDPOINTS.LOGIN_MOCK, {
      method: 'GET',
      // headers: { 'Content-Type': 'application/json' },
      // body: JSON.stringify(body),
      cache: 'no-store',
    });
    if (res.ok) return await res.json();
    throw new Error('Something went wrong');
  },
};
