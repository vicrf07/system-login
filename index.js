const express = require("express");
const app = express();
const exphbs = require("express-handlebars"); //middleware require, vai buscar o pacote handlebars, e faz o configuração do template engine(handlebars)

app.use(express.json()); //framework(express) vai converter os dados em json
app.use(
  express.urlencoded({
    extended: true,
  })
); //funcao anonima, fazendo a conversao dos dados dentro daquilo que estiver trafegando em qualquer middleware.

//criação da sessão
const session = require("express-session");
const umDia = 100 * 60 * 60 * 24;

//bloco de controle da sessao
app.use(
  session({
    secret: "chavesecreta01423gf146gf46108fg0614tg614gf46gf601fgb0864",
    saveUninitialized: true,
    cookie: { maxAge: umDia },
    resave: false,
    name: "unplugged",
  })
);

app.engine(
  "hbs",
  exphbs.engine({
    extname: ".hbs",
  })
); //o engine informa ao express como ele trata as extensões
app.set("view engine", "hbs"); //setando a alteração

app.use("./public", express.static("public")); //criar a pasta publica, para gravar algum tipo de imagem/pagina extra

app.use(
  express.static("public", {
    setHeaders: (res) => {
      res.set("Content-Type", "text/css");
    },
  })
); //definir o MIME type do servidor

const rotas = require("./routers/rotas"); //import da pasta de rotas
app.use("/", rotas); //(local do arquivo, objeto )

//chamada para o arquivo db
const conexao = require("./db/conn");

/*rotas para as views
app.get("/", (req,res)=>{
    res.render("home",{msg:"HOME.HBS"})//(nome da view a ser carregada, parametro)
})
app.get("/login", (req,res)=>{
    res.render("login",{msg:"LOGIN.HBS"})//(nome da view a ser carregada, parametro)
})*/

app.listen(3000, () => {
  console.log("Servidor iniciando na porta 3000");
});

/*app.get("/", (req,res)=>{
    res.send("<p>O servidor foi criado</p>")
})*/
