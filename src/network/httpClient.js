import axios from 'axios';

axios.defaults.withCredentials = true;

export default class HttpClient {
    constructor(base) {
        this.base = base;
    }

    getAxios() {
        const axiosAgent = axios.create({
            baseURL : this.base,
        });

        return axiosAgent;
    }
}