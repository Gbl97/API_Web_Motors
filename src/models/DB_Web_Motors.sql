CREATE DATABASE IF NOT EXISTS teste_webmotors;

Use teste_webmotors;

CREATE TABLE tb_AnuncioWebmotors (
id INT PRIMARY KEY AUTO_INCREMENT,
marca VARCHAR(45) NOT NULL,
modelo VARCHAR(45) NOT NULL,
versao VARCHAR(45) NOT NULL,
ano INT NOT NULL,
quilometragem INT NOT NULL,
observacao TEXT NOT NULL
);
