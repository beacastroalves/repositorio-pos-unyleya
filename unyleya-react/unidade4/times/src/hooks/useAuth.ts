import { create } from "zustand";

interface State {
  username: string;
  email: string;
  token: string;
  setUsername: (novoNome: string) => void;
}

const useAuth = create<State>((set) => ({
  username: "Beatriz Castro",
  email: "bea@castro.com",
  token: "ifasfsajffiofasfasd978",

  setUsername: (novoNome) => set((state) => ({...state, username: novoNome}))
}));

export default useAuth;