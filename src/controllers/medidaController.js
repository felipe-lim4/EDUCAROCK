var medidaModel = require("../models/medidaModel");


function buscarHorasEstudo(req, res) {

    var idUsuario = req.params.idUsuario;

    medidaModel.buscarHorasEstudo(idUsuario)
    .then(function (resultadoUsuario) {

      if (resultadoUsuario.length > 0) {

        medidaModel.buscarHorasEstudoUsuarios()
          .then(function (resultadoTodosUsuarios) {


            if (resultadoTodosUsuarios.length > 0) {
              res.status(200).json({

                usuario: resultadoUsuario,
                todosUsuarios: resultadoTodosUsuarios

              });
            } else {
              res.status(204).send("Nenhum registro de horas de estudo encontrado para outros usuários!");
            }
          })
          .catch(function (erro) {
            console.log("Erro ao buscar os dados de todos os usuários:", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
          });
      } else {
        res.status(204).send("Nenhum registro de horas de estudo encontrado para o usuário!");
      }
    })
    .catch(function (erro) {
      console.log("Erro ao buscar os dados do usuário:", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
    });
}


function buscarRank(req, res) {

    medidaModel.buscarRank()
    .then(function (resultado) {

    if (resultado.length > 0) {

              res.status(200).json(resultado);
    } else {
              res.status(204).send("Nenhum registro de horas de estudo encontrado para outros usuários!");
    }
          })
          .catch(function (erro) {
            console.log("Erro ao buscar os dados de todos os usuários:", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
          });


}

function inserirHoras(req, res) {

    var horas = req.body.horasServer;
    var idUsuario = req.body.idUsuarioServer;
    var data = req.body.dateServer;



    if (horas == undefined) {
        res.status(400).send("Horas undefined");
    } else if(idUsuario == undefined){
        res.status(400).send("idUsuario undefined");
    } else if(data == undefined){
        res.status(400).send("data undefined");
    }else{
        medidaModel.inserirHoras(idUsuario, data, horas)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
    }

       
    }


module.exports = {
    buscarHorasEstudo,
    buscarRank,
    inserirHoras
};