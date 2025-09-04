import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  accessToken: string;
}

interface State {
  user: User | null;
  setUser: (user: User | null) => void;
}

export const useAuth = create<State>()(
  persist(
    (set) => ({
      user: null,

      setUser: novoUser => set({ user: novoUser }),
    }),
    {
      name: "@useAuth"
    }
  )
);