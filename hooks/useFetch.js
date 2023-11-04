import {useEffect, useState} from "react";
import {URL} from "../constants";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const useFetch = (endpoint, useToken) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: `${URL}/api/${endpoint}`,
        headers: {
            'Content-Type': 'application/json',
        }
    };


    const fetchData = async () => {
        setLoading(true);

        try {
            if (useToken) {
                options.headers["x-access-token"] = await AsyncStorage.getItem('token');
            }
            const response = await axios.request(options);
            setData(response.data);
            setLoading(false);
        } catch (e) {
            setError(e);
            alert("Error encountered while fetching");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const refetch = () => {
        setLoading(true);
        fetchData();
    }

    return {data, loading, error, refetch};
}

export default useFetch;