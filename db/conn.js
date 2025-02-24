const { MongoClient } = require("mongodb"); //{variavel} pq é uma utilizacao local.
const uri = "mongodb://127.0.0.1:27017/meubanco"; //endereço do banco de dados
const client = new MongoClient(uri); //utilizar o client, passando a uri
async function run() {
  try {
    await client.connect();
    console.log("Conectado ao MongoDB");
  } catch (err) {
    console.log(err);
  }
}
run();
module.exports = client;
