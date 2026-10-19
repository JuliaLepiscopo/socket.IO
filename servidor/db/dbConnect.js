import { MongoClient } from "mongodb";

const cliente = new MongoClient(
<<<<<<< HEAD
  "mongodb://localhost:27017"
=======
  "mongodb+srv://alura:123@aluracluster.lp6gdyc.mongodb.net/?retryWrites=true&w=majority"
>>>>>>> dc49db089f14141fc25697ac6bc5885eda9b352d
);

let documentosColecao, usuariosColecao;

try {
  await cliente.connect();

  const db = cliente.db("alura-websockets");
  documentosColecao = db.collection("documentos");
  usuariosColecao = db.collection("usuarios");

  console.log("Conectado ao banco de dados com sucesso!");
} catch (erro) {
  console.log(erro);
}

export { documentosColecao, usuariosColecao };
