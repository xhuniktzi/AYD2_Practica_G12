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
	CUI BIGINT PRIMARY KEY,
    nombre VARCHAR(50),
    apellido VARCHAR(50),
    telefono INT,
    correo VARCHAR(60),
    edad INT,
    codigo_Genero INT,
    fecha_Ingreso DATE,
    FOREIGN KEY (codigo_Genero) REFERENCES genero(codigo_Genero)
);

CREATE TABLE IF NOT EXISTS cita(
	codigo_Cita INT AUTO_INCREMENT PRIMARY KEY,
    CUI_Cliente BIGINT,
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
-- Valores iniciales
-- rol
INSERT INTO rol (nombre) VALUES ('Administrador'), ('Abogado'), ('Secretario');

-- genero
INSERT INTO genero (nombre, abreviatura) VALUES ('Masculino', 'M'), ('Femenino', 'F');

-- estado
INSERT INTO estado (nombre) VALUES ('Pendiente'), ('En Proceso'), ('Finalizado');

-- tipo_documento
INSERT INTO tipo_documento (nombre_Tipo, extension) VALUES ('Informe', 'docx'), ('Contrato', 'pdf'), ('Carta', 'txt');

-- cliente
INSERT INTO cliente (CUI, nombre, apellido, telefono, correo, edad, codigo_Genero, fecha_Ingreso) VALUES
(1234567890123, 'Juan', 'Perez', 5551234, 'juan.perez@example.com', 30, 1, '2023-01-01'),
(2345678901234, 'Maria', 'Lopez', 5555678, 'maria.lopez@example.com', 25, 2, '2023-02-15');

-- cita
INSERT INTO cita ( CUI_Cliente, fecha, hora) VALUES
(1234567890123, '2023-03-01', '10:00:00'),
(2345678901234, '2023-03-05', '14:00:00');

-- expediente
INSERT INTO expediente (no_Expediente, codigo_Documento, contenido_Documento, codigo_Estado) VALUES
(1, 1, 'Contenido del informe de Juan Perez', 1),
(2, 2, 'Contenido del contrato de Maria Lopez', 2);