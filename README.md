# API REST - Práctica de Desarrollo Web

Este proyecto es una API REST desarrollada con Node.js, Express y PostgreSQL. Implementa las operaciones CRUD completas sobre una tabla de `usuarios`, cumpliendo con los requerimientos de la Guía de Práctica.

## Tecnologías Utilizadas
- **Backend:** Node.js, Express
- **Base de Datos:** PostgreSQL
- **Dependencias:** `pg` (cliente de PostgreSQL), `dotenv` (variables de entorno), `cors`.

## Endpoints Implementados
1. **Registrar usuario** (`POST /api/usuarios`): Inserta un nuevo registro enviando un JSON con `nombre`, `email` y `edad`.
2. **Consultar todos los usuarios** (`GET /api/usuarios`): Retorna la lista completa de usuarios.
3. **Consultar usuario por ID** (`GET /api/usuarios/:id`): Busca y retorna un usuario específico.
4. **Actualizar usuario** (`PUT /api/usuarios/:id`): Modifica los datos de un usuario existente.
5. **Eliminar usuario** (`DELETE /api/usuarios/:id`): Borra un usuario de la base de datos.

## Configuración e Instalación
1. Clonar el repositorio.
2. Ejecutar el script SQL que se encuentra en `db.sql` en PostgreSQL.
3. Configurar las credenciales de la base de datos en el archivo `.env`.
4. Instalar las dependencias con `npm install`.
5. Iniciar el servidor en modo desarrollo con `npm run dev`.