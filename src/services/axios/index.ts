import axios, { AxiosError, AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios';


import {
    setUpErrorInterceptor,
    setUpRequestInterceptor,
    setUpResponseInterceptor,
} from './interceptors';

import { LocalStorageHelper } from 'src/utils';
import { TOKEN_KEY } from 'src/definitions';

const axiosInstance: AxiosInstance = axios.create({
    timeout: 60000,
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

axiosInstance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        if (!config.headers['Authorization'] && LocalStorageHelper.getItem(TOKEN_KEY)) {
            config.headers['Authorization'] = `Bearer ${LocalStorageHelper.getItem(TOKEN_KEY)}`;
        }

        return setUpRequestInterceptor(config);
    },
    (error: AxiosError) => {
        return Promise.reject(error);
    },
);

axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => {
        return setUpResponseInterceptor(response);
    },
    async (error: AxiosError) => {
        return setUpErrorInterceptor(error, true);
    },
);

export { axiosInstance };
