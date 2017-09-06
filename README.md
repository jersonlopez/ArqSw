# script la de base de datos


CREATE TABLE account(
id INTEGER NOT NULL AUTO_INCREMENT,
username VARCHAR(50) NOT NULL,
password VARCHAR(50) NOT NULL,
email VARCHAR(50) NOT NULL,
CONSTRAINT primary_key PRIMARY KEY (id));
