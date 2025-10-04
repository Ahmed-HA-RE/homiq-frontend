import axios from 'axios';
import { refreshAccessToken } from '~/api/auth';
import { useAuthStore } from '~/store/authstore';
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL_DEVELOPMENT;

const setUser = useAuthStore.getState().setUser;

const api = axios.create({
  baseURL: BACKEND_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (res) => res,
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      !originalRequest.url.includes('/auth/refresh') &&
      error.response?.data?.message ===
        'Your session has expired. Please log in again.'
    ) {
      originalRequest._retry = true;

      const data = await refreshAccessToken();
      setUser(
        {
          name: data.user.name,
          email: data.user.email,
          id: data.user._id,
          userType: data.user.userType,
        },
        data.accessToken
      );
      originalRequest.headers.Authorization = `Bearer ${data.accessToken}`;
      return api(originalRequest);
    }

    return Promise.reject(error);
  }
);

export default api;
