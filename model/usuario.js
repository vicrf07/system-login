const conn = require("../db/conn");

class Usuario {
  constructor(email, senha) {
    this.email = email;
    this.senha = senha;
  }

  static async validar(emailParam, senhaParam) {
    const dados = await conn
      .db()
      .collection("usuarios")
      .findOne({ email: emailParam, senha: senhaParam });

    if (dados) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = Usuario
