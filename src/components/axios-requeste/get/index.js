import dotenv from 'dotenv';
dotenv.config()

import axios from 'axios';


const api = axios.create({
  baseURL: process.env.SERVE_CONSULT,
});

export const httpGet = async (url) => {
  const resp = await api
    .get(url)
    .then((response) => {
      const data = response.data;
      console.log('Deu tudo certo');
      return data;
    })
    .catch((erro) => {
      console.error('erro');
      return erro;
    });
  const result = await resp;
  return result;
};