const Usuario = require("../model/usuario");

module.exports = class rotasController {
  static home(req, res) {
    if (req.session.name === "logado") {
      res.render("home", { msg: "logado" });
    } else {
      res.render("login", { msg: "" });
    }
  }

  static login(req, res) {
    res.render("login", { msg: "" });
  }
  static logout(req, res) {
    if (req.session.name === "logado") {
      req.session.name = "unplugged";
      res.render("login", { msg: "" });
    }
  }

  static async validacao(req, res) {
    //metodo assincrono, pq envolve uma validação externa, e para q n trave a aplicação, necessita ser assincrona
    const email = req.body.txtEmail;
    const senha = req.body.txtSenha;

    let mark = await Usuario.validar(email, senha);

    if (mark === true) {
      req.session.name = "logado";
      res.redirect("/");
    }
  }
};
