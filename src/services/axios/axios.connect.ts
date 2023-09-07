import axios, { AxiosInstance } from "axios";
import { URI_API } from '../../environmentVariables';


const axiosInstance: AxiosInstance = axios.create({
    baseURL: URI_API,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosInstance