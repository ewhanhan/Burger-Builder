import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://cors-anywhere.herokuapp.com/https://r-c-g-burger-builder.firebaseio.com/',
});

export default axiosInstance;
