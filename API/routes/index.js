const express = require('express');
const router = express.Router();
const pacienteController = require('../controllers/pacienteControllers');

module.exports = function () {
    // Agrega nuevos pacientes via POST
    router.post('/pacientes',
        pacienteController.nuevoCliente
    );
    // Obtiene todos los registros de pacientes en la BD
    router.get('/pacientes',
        pacienteController.obtenerPacientes
    );
    // Obtiene los registros del paciente en la BD
    router.get('/pacientes/:id',
        pacienteController.obtenerPaciente
    );
    // Actualiza los registros del paciente en la BD
    router.put('/pacientes/:id',
        pacienteController.actualizaPaciente
    );
    // Elimina los registros del paciente en la BD
    router.delete('/pacientes/:id',
        pacienteController.eliminaPaciente
    );
    return router;
}