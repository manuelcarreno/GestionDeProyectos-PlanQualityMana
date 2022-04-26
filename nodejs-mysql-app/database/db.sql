CREATE DATABASE db_gestion;

use db_gestion;

CREATE TABLE users(
    id INT(11) NOT NULL,
    username VARCHAR(16) NOT NULL,
    password VARCHAR(20) NOT NULL,
    fullname VARCHAR(100) NOT NULL
);
ALTER TABLE users
    ADD PRIMARY KEY (id);
ALTER TABLE users
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=1;

CREATE TABLE formularios(
    Nombredelproyecto VARCHAR(16) NOT NULL,
    metrica1 VARCHAR(16) NOT NULL,
    metrica2 VARCHAR(16) NOT NULL,
    metrica3 VARCHAR(16) NOT NULL,
    opcion1 VARCHAR(16) NOT NULL,
    opcion2 VARCHAR(16) NOT NULL,
    FechaInicio VARCHAR(16) NOT NULL,
    FechaTermino VARCHAR(16) NOT NULL,
    descripcion VARCHAR(420) NOT NULL
);
ALTER TABLE formularios
    ADD PRIMARY KEY (Nombredelproyecto);
ALTER TABLE formularios
    drop column id;

DESCRIBE users;
  