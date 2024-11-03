create database educarock;

use educarock;

create table usuario(
	idUsuario int primary key auto_increment,
    nome varchar(45) not null,
    username varchar(45) not null,
    email varchar(200) not null,
    senha varchar(45) not null
    );
    
create table estudo(
	idEstudo int,
    fkUsuario int,
    constraint  pkEstudo primary key (idEstudo, fkUsuario),
    dataa date,
    qtdHora int not null
    );
    

    
    