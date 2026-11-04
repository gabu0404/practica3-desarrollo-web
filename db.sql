-- Crear base de datos
CREATE DATABASE unemi_practica3;

-- Conectarse a la base de datos y crear la tabla
\c unemi_practica3;

CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    edad INTEGER,
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);