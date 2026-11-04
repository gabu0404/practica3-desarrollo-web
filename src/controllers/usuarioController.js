const pool = require('../config/db');

// Registrar (POST /usuarios)
const crearUsuario = async (req, res) => {
    try {
        const { nombre, email, edad } = req.body;
        const result = await pool.query(
            'INSERT INTO usuarios (nombre, email, edad) VALUES ($1, $2, $3) RETURNING *',
            [nombre, email, edad]
        );
        res.status(201).json({ mensaje: 'Usuario registrado exitosamente', usuario: result.rows[0] });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Consultar (GET /usuarios)
const obtenerUsuarios = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM usuarios ORDER BY id ASC');
        res.status(200).json(result.rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Consultar por ID (GET /usuarios/:id)
const obtenerUsuarioPorId = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await pool.query('SELECT * FROM usuarios WHERE id = $1', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ mensaje: 'Usuario no encontrado' });
        }
        res.status(200).json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Actualizar (PUT /usuarios/:id)
const actualizarUsuario = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, email, edad } = req.body;
        const result = await pool.query(
            'UPDATE usuarios SET nombre = $1, email = $2, edad = $3 WHERE id = $4 RETURNING *',
            [nombre, email, edad, id]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ mensaje: 'Usuario no encontrado' });
        }
        res.status(200).json({ mensaje: 'Usuario actualizado exitosamente', usuario: result.rows[0] });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Eliminar (DELETE /usuarios/:id)
const eliminarUsuario = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await pool.query('DELETE FROM usuarios WHERE id = $1 RETURNING *', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ mensaje: 'Usuario no encontrado' });
        }
        res.status(200).json({ mensaje: 'Usuario eliminado exitosamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    crearUsuario,
    obtenerUsuarios,
    obtenerUsuarioPorId,
    actualizarUsuario,
    eliminarUsuario
};