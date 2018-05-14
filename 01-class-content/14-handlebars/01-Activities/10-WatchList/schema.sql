DROP DATABASE IF EXISTS moviePlanner:

CREATE DATABASE moviePlanner;

USE moviePlanner;

CREATE TABLE movies (
    id INT NOT NULL AUTO_INCREMENT,
    movie VARCHAR(50) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO movies(movie)
VALUE("The Shining");

SELECT * FROM movies;