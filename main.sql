CREATE TABLE Person (
    id VARCHAR(36) CONSTRAINT ID_PK PRIMARY KEY,
    nome VARCHAR(32) unique,
    apelidos VARCHAR(255)[]
);