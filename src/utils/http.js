import axios from 'axios';

const http = axios.create({
   baseURL: 'https://tiktok.fullstack.edu.vn/api',
});

// this func handle res.data.data (first data of Axios, last data of Back-end)
export const get = async (path, options = {}) => {
   const res = await http.get(path, options);

   return res.data;
};

export default http;
