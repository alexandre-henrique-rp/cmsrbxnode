import dotenv from 'dotenv';
dotenv.config()

import axios from 'axios';


const api = axios.create({
  baseURL: process.env.SERVE_CONSULT,
});


export const httpPost = async (url, data) => {
  const resp = await api
    .post(url, data)
    .then((response) => {
      const data = response.data;
      console.log('Sucesso!');
      return data;
    })
    .catch((erro) => {
      console.error('erro');
      return erro;
    });
  const result = await resp;
  return result;
};