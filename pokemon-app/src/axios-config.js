import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://localhost:7186', // Change this to your backend server's base URL
    // You can also add other Axios configurations here, such as headers, timeouts, etc.
});

export default instance;
