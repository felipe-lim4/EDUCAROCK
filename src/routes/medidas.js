var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas/:idUsuario", function (req, res) {
    medidaController.buscarHorasEstudo(req, res);
});

router.get("/rank", function (req, res) {
    medidaController.buscarRank(req, res);
});


router.post("/inserir", function (req, res) {
    medidaController.inserirHoras(req, res);
});



module.exports = router;