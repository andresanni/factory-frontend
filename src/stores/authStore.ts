import { create } from "zustand";
import { jwtDecode } from "jwt-decode";

interface UserState {
  token: string | null;
  id: number | null;
  username: string | null;
  permissions: string[];
  error: string | null;
  login: (token: string) => void;
  setError: (error: string) => void;
  logout: () => void;
}

interface JwtPayload {
  id: number;
  username: string;
  permissions: string[];
}

const useAuthStore = create<UserState>((set) => ({
  token: null,
  id: null,
  username: null,
  permissions: [],
  error: null,
  login: (token: string) => {
    set({ token });
    const decodedToken = jwtDecode<JwtPayload>(token);
    set({
      id: decodedToken.id,
      username: decodedToken.username,
      permissions: decodedToken.permissions,
    });
  },
  setError: (error: string | null) => set({ error }),
  logout: () => set({ token: null, permissions: [], error: null }),
}));

export default useAuthStore;
