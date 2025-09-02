import { create } from 'zustand';

interface State {
  firstName: string;
  lastName: string;
  email: string;
  accessToken: string;
  setFirstName: (novoFirstName: string) => void;
  setLastName: (novoLastName: string) => void;
}

export const useAuth = create<State>((set) => ({
  firstName: 'Bia',
  lastName: 'Castro',
  email: "beacastro23@gmail.com",
  accessToken: "asdasodjaoisdjaiodjneowwed",

  setFirstName: (novoFirstName) => set((state) => ({...state, firstName: novoFirstName})),
  setLastName: (novoLastName) => set((state) => ({...state, lastName: novoLastName})),

}));