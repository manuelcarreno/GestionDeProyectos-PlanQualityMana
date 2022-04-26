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

DESCRIBE users;
  