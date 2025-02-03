
import axios, { InternalAxiosRequestConfig } from 'axios';
import { store } from '@/app/store/store';
import { login } from '@/state/userState/authenticate'
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  // timeout: 10000,
});

interface CustomAxiosRequestConfig extends InternalAxiosRequestConfig {
  _retry?: boolean;
}



// Request interceptor to add token
api.interceptors.request.use(
  (config) => {

    if (typeof window !== "undefined") {
      const token = store.getState().userAuthentication.accessToken;

      if (token) {
        if (config.headers instanceof axios.AxiosHeaders) {
          config.headers.set('Authorization', `Bearer ${token}`);
        } else {
          config.headers = { ...config.headers, Authorization: `Bearer ${token}` };
        }
      }
    }


    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle token expiry
api.interceptors.response.use(
  (response) => response,

  async (error) => {

    if (!error.config) {
      console.error('Request config is undefined:', error);
      return Promise.reject(error);
    }

    const originalRequest = error.config as CustomAxiosRequestConfig;

    if (originalRequest._retry == undefined) {
      return Promise.reject(error);
    }
    if (error.response && error.response.status === 401) {
      originalRequest._retry = true; // Mark the request as retried
      try {
        // Send request to refresh token endpoint
        const refreshResponse = await api.post(
          '/auth/refresh-token',
          {}, // No body needed; the backend reads the httpOnly cookie
          { baseURL: process.env.NEXT_PUBLIC_API_URL, withCredentials: true }
        );

        const newAccessToken = refreshResponse.data.accessToken;
        const user = refreshResponse.data.user;




        store.dispatch(login({ user, token: newAccessToken })); // Update context state

        // Retry the original request
        error.config.headers['Authorization'] = `Bearer ${newAccessToken}`;
        return api(error.config);
      } catch (refreshError) {
        console.error('Token refresh failed:', refreshError);
      }
    }
    return Promise.reject(error);
  }
);

export default api;