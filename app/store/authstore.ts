import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

type AuthStoreProps = {
  token: string | null;
  user: {
    id: string;
    name: string;
    email: string;
    userType: string;
  } | null;
  setUser: (user: AuthStoreProps['user']) => void;
  setToken: (token: string) => void;
  setLogout: () => void;
};

export const useAuthStore = create<AuthStoreProps>()(
  devtools((set) => ({
    token: null,
    user: null,
    setUser: (user) => set({ user }),
    setToken: (token) => set({ token }),
    setLogout: () => set({ user: null, token: null }),
  }))
);
