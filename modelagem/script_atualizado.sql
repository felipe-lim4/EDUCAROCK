create database educarock;
use educarock;

create table usuario(
	idUsuario int auto_increment primary key not null,
    nome varchar(45),
    username varchar(45),
    email varchar(200),
    senha varchar(45)
    );
    
create table estudo(
    fkUsuario int not null,
    DataEstudo date not null,
    primary key (fkUsuario, DataEstudo),
    qtdHora int,
    constraint foreign key (fkUsuario) references usuario(idUsuario)
    );
    

INSERT INTO estudo (fkUsuario, DataEstudo, qtdHora) VALUES 
(1, '2024-12-01', 5) ON DUPLICATE KEY UPDATE DataEstudo = VALUES(DataEstudo), qtdHora = qtdHora + VALUES(qtdHora);

SELECT round(COALESCE(AVG(totalHoras), 0),2) AS mediaGeral
FROM (
    SELECT SUM(qtdHora) AS totalHoras
    FROM estudo
    WHERE fkUsuario = 8
    GROUP BY DataEstudo
) AS subquery;

select * from estudo;

select DataEstudo, qtdHora 
        from estudo 
            where week(DataEstudo) = week(curdate()) and fkUsuario = 1
            order by DataEstudo desc limit 7;


SELECT AVG(totalHoras) AS mediaHoras, DataEstudo
FROM (
    SELECT SUM(qtdHora) AS totalHoras, DataEstudo
    FROM estudo
    right JOIN usuario
    on idUsuario = fkUsuario
    WHERE idUsuario = 8
    GROUP BY DataEstudo
) AS subquery
GROUP BY DataEstudo;

truncate table estudo;
select * from estudo;

select * from estudo where fkUsuario = 8 and dataEstudo = curdate() limit 1; 
insert into estudo (fkUsuario, DataEstudo, qtdHora) values
	(1, '2024-12-01', 10),
	(1, '2024-12-02', 2),
    (1, '2024-12-03', 5),
    (1, '2024-12-04', 8),
    (1, '2024-12-05', 1),
    (1, '2024-12-06', 2),
    (1, '2024-12-07', 3);
    
update estudo set qtdHora = ifnull(qtdHora, 0) + 20 where fkUsuario = 8 and dataEstudo = curdate();

select * from usuario;
delete from estudo where idEstudo >= 8;

select DataEstudo, qtdHora from estudo 
where week(DataEstudo) = week(curdate())  and fkUsuario = 6
order by DataEstudo limit 7;



SELECT DataEstudo, qtdHora 
FROM estudo 
WHERE week(DataEstudo) = week(curdate()) 
group by fkUsuario
ORDER BY fkUsuario 
LIMIT 7;

SELECT 
    DATE(DataEstudo) AS dia,
    SUM(qtdHora) AS totalHorasEstudadas
FROM estudo
WHERE week(DataEstudo) = week(curdate())
GROUP BY dia
ORDER BY dia;

SELECT 
    usuario.nome AS Usuario,
    COALESCE(SUM(estudo.qtdHora), 0) AS TotalHorasEstudadas
FROM 
    usuario
LEFT JOIN  
    estudo ON estudo.fkUsuario = usuario.idUsuario 
GROUP BY 
    usuario.nome
ORDER BY 
    usuario.nome;
SELECT SUM(qtdHora) AS totalHorasEstudadas
FROM estudo
WHERE week(DataEstudo) = week(curdate());

SELECT 
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
use educarock;
delete from usuario where idUsuario = 5;



SELECT 
    SUM(qtdHora) AS totalHorasEstudadas,
    TIMESTAMPDIFF(WEEK, MIN(DataEstudo), CURDATE()) AS semanasDesdePrimeiroEstudo
FROM estudo 
WHERE fkUsuario = 8;

SELECT 
    DATE(DataEstudo) AS dia,
    SUM(qtdHora) AS totalHorasEstudadas
        FROM estudo
        WHERE week(DataEstudo) = week(curdate())
        GROUP BY dia
        ORDER BY dia desc;
        

SELECT 
    usuario.nome AS Usuario,
    SUM(estudo.qtdHora) AS TotalHorasEstudadas
FROM 
    estudo
 JOIN  
    usuario ON estudo.fkUsuario = usuario.idUsuario
WHERE 
    estudo.DataEstudo >= DATE_SUB(CURDATE(), INTERVAL 7 DAY)
GROUP BY 
    usuario.nome
ORDER BY 
    TotalHorasEstudadas DESC;
    
    
use educarock;

select * from estudo join usuario on fkUsuario = idUsuario;

delete from registro where idRegistro > 56;