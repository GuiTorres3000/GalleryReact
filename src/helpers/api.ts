import axios, {type AxiosRequestConfig, type AxiosResponse } from "axios";

export const api = axios.create({
      baseURL: import.meta.env.VITE_API_URL,
});

// AxiosRequestConfig is for insert headers
export const fetcher = async <T = unknown>(url: string, options: AxiosRequestConfig = {}): Promise<T> => {
      const response: AxiosResponse<T> = await api.get<T>(url, options);
      return response.data;
};