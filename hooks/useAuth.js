import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect, useState} from "react";
import {URL} from "../constants";
import axios from "axios";

const useAuth = () => {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: `${URL}/api/user`,
        headers: {
            'Content-Type': 'application/json',
        }
    };

    const fetchData = async () => {
        setLoading(true);

        try {
            options.headers["x-access-token"] = await AsyncStorage.getItem('token');
            const response = await axios.request(options);
            setUser(response.data);
            setLoading(false);
        } catch (e) {
            setError(e);
            console.log("Error while fetching Authentication", e);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return {user, loading, error};
}

export default useAuth;