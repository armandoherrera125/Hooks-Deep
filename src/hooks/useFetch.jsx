import { useEffect, useState } from "react";

export const useFetch = (url = '') => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {

        const fetchAPI = async () => {
            try {
                const response = await fetch(url);
                const parseResponse = await response.json();
                setData(parseResponse);
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false);
            }
        }
            fetchAPI();
    }, [url]);

    return {
        data,
        loading,
        error
    }

}
