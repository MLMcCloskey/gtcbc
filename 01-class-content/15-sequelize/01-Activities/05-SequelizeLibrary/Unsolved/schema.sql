DROP DATABASE IF EXISTS `sequelize_library`;
CREATE DATABASE `sequelize_library`;
USE sequelize_library;

CREATE TABLE books(
	id INT NOT NULL AUTO_INCREMENT,
	title VARCHAR (50),
    author VARCHAR (50),
    genre VARCHAR (50),
    pages INT (50)
);