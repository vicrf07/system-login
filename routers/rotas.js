const express = require("express")
const rotasController = require("./rotasController")

const router = express.Router()

router.get("/", rotasController.home)
router.get("/login", rotasController.login)
router.get("/logout", rotasController.logout)
router.post("/validacao", rotasController.validacao)

module.exports = router
