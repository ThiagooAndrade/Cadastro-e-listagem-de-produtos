import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";

const conexaoMongo = await conectaNaDatabase();

conexaoMongo.on("error", (erro) => {
    console.error("erro de conexao", erro);
});

// conexaoMongo.on("connection", (stream) => {
//     console.log("alguem conectou!");
// });

conexaoMongo.once("open", () => {
    console.log("Conexao com o banco feita com sucesso");
});

const app = express();
routes(app);

export default app;
