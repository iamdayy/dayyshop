import Axios from "axios";


const axios = Axios.create({
    baseURL: 'https://api.binderbyte.com/',
});

axios.interceptors.request.use(
    (config) => {
        config.params = {
            ...config.params,
            api_key: "f190edf178716038ba14f55b1135e93db1b3a295c0d77c3a8a68d5b0ef56ff6a"
    }
        return config;
    },
    (err) =>{
        return Promise.reject(err)
    }
)

export default axios;