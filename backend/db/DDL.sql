CREATE DATABASE softjobs;
\c softjobs;

CREATE TABLE usuarios (
    id              SERIAL,
    email           VARCHAR(50) NOT NULL,
    email_pass      VARCHAR(60) NOT NULL,
    rol             VARCHAR(25),
    lenguage        VARCHAR(20),
    PRIMARY KEY(id)
    );

SELECT * FROM usuarios;