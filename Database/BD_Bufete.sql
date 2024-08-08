CREATE database IF NOT EXISTS Bufete;

USE Bufete;

CREATE TABLE IF NOT EXISTS  rol (
	codigo_Rol INT AUTO_INCREMENT PRIMARY KEY,
    nombre  VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS  genero(
	codigo_Genero INT AUTO_INCREMENT PRIMARY KEY,
    nombre  VARCHAR(255) NOT NULL,
    abreviatura VARCHAR(1) NOT NULL
);

CREATE TABLE IF NOT EXISTS  estado(
	codigo_Estado INT AUTO_INCREMENT PRIMARY KEY,
    nombre  VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS  tipo_documento(
	codigo_Documento INT AUTO_INCREMENT PRIMARY KEY,
    nombre_Tipo  VARCHAR(255) NOT NULL,
    extension VARCHAR(6) NOT NULL
);

CREATE TABLE IF NOT EXISTS  cliente(
	CUI INTEGER PRIMARY KEY,
    nombre VARCHAR(50),
    apellido VARCHAR(50),
    telefono INT,
    correo VARCHAR(60),
    edad INT,
    codigo_Genero INT,
    fecha_Ingreso DATE,
    FOREIGN KEY (codigo_Genero) REFERENCES genero(codigo_Genero)
);

CREATE TABLE IF NOT EXISTS  cita(
	codigo_Cita INT PRIMARY KEY,
    CUI_Cliente INTEGER,
    fecha DATE,
    hora TIME,
    FOREIGN KEY (CUI_Cliente) REFERENCES  cliente(CUI)
);

CREATE TABLE IF NOT EXISTS  expediente(
	no_Expediente INTEGER PRIMARY KEY,
    codigo_Documento  INT,
	contenido_Documento VARCHAR(1000),
	codigo_Estado INT,
    FOREIGN KEY (codigo_Documento) REFERENCES tipo_documento(codigo_Documento),
    FOREIGN KEY (codigo_Estado) REFERENCES estado(codigo_Estado)
);