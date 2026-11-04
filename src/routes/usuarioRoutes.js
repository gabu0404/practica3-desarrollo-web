const express = require('express');
const router = express.Router();
const {
    crearUsuario,
    obtenerUsuarios,
    obtenerUsuarioPorId,
    actualizarUsuario,
    eliminarUsuario
} = require('../controllers/usuarioController');

router.post('/usuarios', crearUsuario);
router.get('/usuarios', obtenerUsuarios);
router.get('/usuarios/:id', obtenerUsuarioPorId);
router.put('/usuarios/:id', actualizarUsuario);
router.delete('/usuarios/:id', eliminarUsuario);

module.exports = router;