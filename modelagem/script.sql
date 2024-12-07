use educarock;

show tables;


describe estudo;
select * from usuario;




insert into estudo (fkUsuario, DataEstudo, qtdHora) values
	(8, '2024-12-01', 5);
    
    
SELECT round(COALESCE(AVG(totalHoras), 0),2) AS mediaGeral
FROM (
    SELECT SUM(qtdHora) AS totalHoras
    FROM estudo
    WHERE fkUsuario = 8
    GROUP BY DataEstudo
) AS subquery;



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
	(2, '2024-12-01', 10),
	(2, '2024-12-02', 2),
    (2, '2024-12-03', 5);
    
    (8, '2024-12-03', 4),
    (8, '2024-12-04', 8),
    (8, '2024-12-05', 1),
    (8, '2024-12-06', 2),
    (8, '2024-12-07', 3);
    
update estudo set qtdHora = ifnull(qtdHora, 0) + 20 where fkUsuario = 8 and dataEstudo = curdate();

select * from estudo;
delete from estudo where idEstudo >= 8;

select DataEstudo, qtdHora from estudo 
where week(DataEstudo) = week(curdate())  and fkUsuario = 8
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


SELECT SUM(qtdHora) AS totalHorasEstudadas
FROM estudo
WHERE week(DataEstudo) = week(curdate());

SELECT 
    SUM(qtdHora) AS totalHorasEstudadas,
    TIMESTAMPDIFF(WEEK, MIN(DataEstudo), CURDATE()) AS semanasDesdePrimeiroEstudo
FROM estudo 
WHERE fkUsuario = 8;






use educarock;

select * from estudo join usuario on fkUsuario = idUsuario;

delete from registro where idRegistro > 56;