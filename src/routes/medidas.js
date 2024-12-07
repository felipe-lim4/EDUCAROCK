var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas/:idUsuario", function (req, res) {
    medidaController.buscarHorasEstudo(req, res);
});

router.get("/estudoUsuarios/", function (req, res) {
    medidaController.buscarHorasEstudoUsuarios(req, res);
});


module.exports = router;