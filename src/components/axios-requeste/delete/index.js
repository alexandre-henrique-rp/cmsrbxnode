import dotenv from 'dotenv';
dotenv.config()

import axios from 'axios';


const api = axios.create({
  baseURL: process.env.SERVE_CONSULT,
});


export const httpDelete = async (url, data) => {
  const resp = await axios
    .delete(url, { data })
    .then((response) => {
      const data = response.data;
      console.log('Deu tudo certo');
      return data;
    })
    .catch((error) => {
      console.error(error);
      return error;
    });
  
  return resp;
};