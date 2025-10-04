import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

type AuthStoreProps = {
  token: string | null;
  user: { id: string; name: string; email: string; userType: string } | null;
  setUser: (user: AuthStoreProps['user'], token: string) => void;
  setLogout: () => void;
};

export const useAuthStore = create<AuthStoreProps>()(
  devtools((set) => ({
    token: null,
    user: null,
    setUser: (user, token) => set({ user, token }),
    setLogout: () => set({ user: null, token: null }),
  }))
);
