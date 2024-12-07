var database = require("../database/config");

function buscarHorasEstudo(idUsuario) {

    var instrucaoSql = `select DataEstudo, qtdHora 
        from estudo 
            where week(DataEstudo) = week(curdate()) and fkUsuario = ${idUsuario}
            order by DataEstudo desc limit 7;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarHorasEstudoUsuarios() {

    var instrucaoSql = `SELECT 
    DATE(DataEstudo) AS dia,
    SUM(qtdHora) AS totalHorasEstudadas
        FROM estudo
        WHERE week(DataEstudo) = week(curdate())
        GROUP BY dia
        ORDER BY dia;
        `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarHorasEstudo,
    buscarHorasEstudoUsuarios
}
