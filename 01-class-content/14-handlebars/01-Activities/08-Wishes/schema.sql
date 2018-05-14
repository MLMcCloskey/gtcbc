DROP DATABASE IF EXISTS wishes_db:

CREATE DATABASE wishes_db;

USE wishes_db;

CREATE TABLE wishes (
    id INT NOT NULL AUTO_INCREMENT,
    wish VARCHAR(50) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO wishes(wish)
VALUE("a really big genatalia");

SELECT * FROM wishes;