import { create } from 'zustand';

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

export const useAuth = create<State>((set) => ({
  user: null,

  setUser: novoUser => set((state) => ({
    ...state,
    user: novoUser
  })),
}));