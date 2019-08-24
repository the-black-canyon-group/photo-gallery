DROP DATABASE IF EXISTS fec;

CREATE DATABASE fec;

USE fec;

CREATE TABLE listings (
    id int NOT NULL AUTO_INCREMENT,
    listing varchar(140) NOT NULL,
    PRIMARY KEY (ID)
);

CREATE TABLE propertyImages (
    id int NOT NULL AUTO_INCREMENT,
    image varchar(256) NOT NULL,
    description varchar(140),
    foreignKey int NOT NULL,
    PRIMARY KEY (ID)
)
