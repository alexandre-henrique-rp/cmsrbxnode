import express from 'express';
import DBSync from './middlewares/DBSync.js';

const app = express();
app.use(loggerMiddleware);

// Rotas da aplicação

// DBSync()
app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});