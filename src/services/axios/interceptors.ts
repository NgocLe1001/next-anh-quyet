import { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

import { LocalStorageHelper } from 'src/utils';
import { TOKEN_KEY } from 'src/definitions';



export const setUpRequestInterceptor = (config: InternalAxiosRequestConfig) => {
    if (LocalStorageHelper.getItem(TOKEN_KEY)) {
        config.headers['Authorization'] = `Bearer ${LocalStorageHelper.getItem(TOKEN_KEY)}`;
    }

    return config;
}

export const setUpResponseInterceptor = (response: AxiosResponse) => {
    return response
}

export const setUpErrorInterceptor = async (error: AxiosError) => {
    alert('something went wrong')
}

