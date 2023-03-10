import DB from "../../database/db.js";
import User from "../api/user/model/user.js";

export const dbSync = async () => {
  try {
    await DB.authenticate();
    console.log("Conexão com o banco de dados estabelecida com sucesso.");

    // Adicione todas as suas tabelas aqui
    await User.sync();
    // await Post.sync();
    
    console.log("Todas as tabelas foram sincronizadas com sucesso.");
  } catch (error) {
    console.error("Não foi possível conectar e sincronizar as tabelas com o banco de dados:", error);
  }
};