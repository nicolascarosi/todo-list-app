import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface IUserState {
  user: string;
  removeUser: () => void;
  updateUser: (param: string) => void;
}

export const useUserStore = create<IUserState>()(
  persist(
    (set, get) => ({
      user: '',
      removeUser: () => set({ user: '' }),
      updateUser: (newUser: string) => set({ user: newUser }),
    }),
    {
      name: 'user-storage',
    }
  )
);
