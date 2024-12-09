var database = require("../database/config");

function buscarHorasEstudo(idUsuario) {

    var instrucaoSql = `SELECT 
    DataEstudo, 
    qtdHora 
FROM 
    estudo 
WHERE 
    DataEstudo >= DATE_SUB(NOW(), INTERVAL 7 DAY) 
    AND fkUsuario = ${idUsuario}
ORDER BY 
    DataEstudo DESC 
LIMIT 7;`

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarHorasEstudoUsuarios() {

    var instrucaoSql = `SELECT 
    DATE(DataEstudo) AS dia,
    SUM(qtdHora) AS totalHorasEstudadas
FROM 
    estudo
WHERE 
    DataEstudo >= DATE_SUB(CURDATE(), INTERVAL 7 DAY)
    AND DataEstudo <= NOW()
GROUP BY 
    dia
ORDER BY 
    dia;
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
