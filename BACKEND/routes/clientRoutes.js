//BACKEND/routes/clientRouters.js
const express = require('express');
const router = express.Router();
const clientController = require('../controller/clientController');

// GET todos los clientes
router.get('/', (req, res) => clientController.getClients(req, res));

// GET cliente por DNI
router.get('/:dni', (req, res) => clientController.getClientByDNI(req, res));

// POST crear cliente
router.post('/', (req, res) => clientController.createClient(req, res));

// PUT actualizar cliente
router.put('/:id', (req, res) => clientController.updateClient(req, res));

// DELETE eliminar cliente
router.delete('/:dni', (req, res) => clientController.deleteClient(req, res));

module.exports = router;
