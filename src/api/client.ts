import axios from 'axios';
import { QueryClient } from '@tanstack/react-query';


export const axiosInstance = axios.create({
  baseURL: 'https://api.qurancdn.com/api/qdc',
});

// config react query'
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});
