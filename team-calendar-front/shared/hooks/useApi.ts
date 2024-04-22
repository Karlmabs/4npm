import {useEffect, useState} from 'react';
import axios, {AxiosError, AxiosRequestConfig} from 'axios';

interface ApiHook<T> {
    loading: boolean;
    data: T | null;
    error: AxiosError<any> | null;
}

const useApi = <T>(
    url: string,
    method: AxiosRequestConfig['method'],
    requestData: AxiosRequestConfig['data'],
    callback?: () => void
): ApiHook<T> => {
    const [loading, setLoading] = useState<boolean>(true);
    const [responseData, setResponseData] = useState<T | null>(null);
    const [error, setError] = useState<AxiosError | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios({ method, url, data: requestData });
                setResponseData(response.data);
                if (callback) {
                    callback();
                }
            } catch (err) {
                setError(err as AxiosError<any>);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url, method, requestData, callback]);

    return { loading, data: responseData, error };
};

export default useApi;
