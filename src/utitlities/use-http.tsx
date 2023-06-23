import { useEffect, useState } from "react";
import { API_URL } from "../constants";

type TApiResponse<T> = {
    data: T;
    error: string;
    isLoading: boolean
}
export function useHttp<T>(url: string, method: string, body: any): TApiResponse<T> {
    const [data, setData] = useState<T>();
    const [error, setError] = useState<string>();
    const [isLoading, setIsLoading] = useState<boolean>();


    const fetchApiCall = () => {
        setIsLoading(true);
        fetch(API_URL + url, {
            method: method,
            body: body ? JSON.stringify(body) : null
        }).then(res => res.json())
            .then(resData => {
                setData(resData);
            }).catch(err => {
                setError(err);
            })
        setIsLoading(false);
    }
    useEffect(() => {
        fetchApiCall();
    }, []);
    return { data, error, isLoading }

}