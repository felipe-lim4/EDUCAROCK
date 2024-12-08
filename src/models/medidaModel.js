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


function buscarRank(){

    var instrucaoSql = `SELECT 
            usuario.nome AS Usuario,
            COALESCE(SUM(estudo.qtdHora), 0) AS TotalHorasEstudadas
        FROM 
            usuario
        LEFT JOIN  
            estudo ON estudo.fkUsuario = usuario.idUsuario 
            AND WEEK(estudo.DataEstudo) = WEEK(CURDATE())
        GROUP BY 
            usuario.nome
        ORDER BY 
            TotalHorasEstudadas desc
            limit 5;
        `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function inserirHoras(fkUsuario, DataEstudo, qtdHora){

    var instrucaoSql = `INSERT INTO estudo (fkUsuario, DataEstudo, qtdHora) 
    VALUES (${fkUsuario}, '${DataEstudo}', ${qtdHora}) 
    ON DUPLICATE KEY UPDATE 
    DataEstudo = VALUES(DataEstudo), 
    qtdHora = qtdHora + VALUES(qtdHora);`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarHorasEstudo,
    buscarHorasEstudoUsuarios,
    buscarRank,
    inserirHoras
}
