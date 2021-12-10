import axios from 'axios';

axios.defaults.withCredentials = true;

export default class HttpClient {
    constructor(base, tokenStorage) {
        this.base = base;
        this.tokenStorage = tokenStorage;
    }

    getAxios() {
        const axiosAgent = axios.create({
            baseURL : this.base,
            headers: {
                Authorization: 'Bearer ' + this.tokenStorage.getToken(),
            }
        });
        axiosAgent.defaults.timeout = 2500;

        return axiosAgent;
    }
    
}