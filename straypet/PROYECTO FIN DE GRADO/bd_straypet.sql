drop database if exists straypet;
create database if not exists straypet;

use straypet;

drop table if exists usuario;
create table usuario(
	id int primary key auto_increment,
    nombre varchar(1000),
    usuario varchar(1000),
    pass varchar(1000),
    email varchar(1000),
    fechaNacimiento date,
    fechaEliminacion datetime,
    imagen longblob,
    idTipoSexo int NOT NULL,
    idNacionalidad int NOT NULL,
    seguidores int
);

drop table if exists usuarios_seguidos;
create table usuarios_seguidos(
	id int primary key auto_increment,
    id_usuario int,
    id_seguido int
);

alter table usuarios_seguidos add constraint foreign key (id_usuario) 
references usuario(id) on update cascade on delete restrict;

alter table usuarios_seguidos add constraint foreign key (id_seguido) 
references usuario(id) on update cascade on delete restrict;

drop table if exists animal;
create table animal(
	id int primary key auto_increment,
    id_asociacion int default null,
    nombre varchar(1000),
    edad varchar(1000),
    especie varchar(1000),
    raza varchar(1000),
    vacunado tinyint,
    castrado tinyint,
    detalles longtext,
    imagen longblob not null
    
);

alter table animal add constraint foreign key (id_asociacion) 
references usuario(id) on update cascade on delete restrict;

drop table if exists publicacion;
create table publicacion(
	id int primary key auto_increment,
    id_usuario int,
    id_animal int default null,
    texto longtext,
    localizacion varchar(100),
    fecha date,
    imagen longblob not null,
    cuentabancaria varchar(1000)
);

alter table publicacion add constraint foreign key (id_animal) 
references animal(id) on update cascade on delete restrict;

alter table publicacion add constraint foreign key (id_usuario) 
references usuario(id) on update cascade on delete restrict;


drop database if exists coordenada;
create table coordenada(
    id int primary key auto_increment,
	latitud double not null,
    longitud double not null,
    id_publicacion int not null
);

alter table coordenada add constraint foreign key (id_publicacion) 
references publicacion(id) on update cascade on delete restrict;

drop table if exists comentario;
create table comentario(
	id int primary key auto_increment,
    id_usuario int,
    id_publicacion int,
    texto longtext not null,
    id_comentario_padre int
);

alter table comentario add constraint foreign key (id_usuario) 
references usuario(id) on update cascade on delete restrict;

alter table comentario add constraint foreign key (id_publicacion) 
references publicacion(id) on update cascade on delete restrict;


drop table if exists sequence;
create table sequence (
  SEQ_COUNT int not null primary key,
  SEQ_NAME varchar(45) default null
);















