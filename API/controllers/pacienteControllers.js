const Paciente = require('../models/Paciente');

// Cuando se crea nuevo cliente
exports.nuevoCliente = async (req, res, next) => {
    // Crear objeto de paciente con datos req.body
    const paciente = new Paciente(req.body);
    try {
        await paciente.save();
        res.json({ mensaje: 'El cliente se agregó correctamente' });
    } catch (error) {
        console.log(error);
        next();
    }
}

// Obtiene todos los pacientes
exports.obtenerPacientes = async (req, res, next) => {
    try {
        const pacientes = await Paciente.find({});
        res.json(pacientes);
    } catch (error) {
        console.log(error);
    }
}

// Obtiene los datos del paciente
exports.obtenerPaciente = async (req, res, next) => {
    try {
        const paciente = await Paciente.findById(req.params.id);
        res.json(paciente);
    } catch (error) {
        console.log(error);
    }
}

// Actualiza los datos del paciente
exports.actualizaPaciente = async (req, res, next) => {
    try {
        const paciente = await Paciente.findOneAndUpdate({ _id: req.params.id }, req.body, {
            new: true
        });
        res.json(paciente);
    } catch (error) {
        console.log(error);
    }
}

// Elimina al paciente
exports.eliminaPaciente = async (req, res, next) => {
    try {
        await Paciente.findByIdAndDelete({ _id: req.params.id });
        res.json({mensaje: 'Paciene eliminado correctamente'});
    } catch (error) {
        console.log(error);
    }
}