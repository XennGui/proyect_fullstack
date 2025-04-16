//BACKEND/controller/clientController.js
const clientService = require('../services/clientService');

class ClientController {
    async getClients(req, res) {
        try {
            const clients = await clientService.getClients();
            res.json(clients);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error al obtener los clientes' });
        }
    }

    async getClientByDNI(req, res) {
        const { dni } = req.params;
        try {
            const client = await clientService.getClientByDNI(dni);
            if (!client) {
                return res.status(404).json({ message: 'Cliente no encontrado' });
            }
            res.json(client);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error al obtener el cliente' });
        }
    }

    async createClient(req, res) {
        try {
            const { dni, nombre, apellido_paterno, apellido_materno, fecha_nacimiento } = req.body;
            const newClient = await clientService.addClient({
                dni, nombre, apellido_paterno, apellido_materno, fecha_nacimiento
            });
            res.status(201).json(newClient);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error al crear el cliente' });
        }
    }

    async updateClient(req, res) {
        const { id } = req.params;  
        const { dni, nombre, apellido_paterno, apellido_materno, fecha_nacimiento } = req.body;
        try {
            const updatedCliente = await clientService.modifyClient(id, { dni, nombre, apellido_paterno, apellido_materno, fecha_nacimiento });
            if (updatedCliente) {
                res.json(updatedCliente);
            } else {
                res.status(404).json({ message: 'Cliente no encontrado' });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error al actualizar el cliente' });
        }

    }

    async deleteClient(req, res) {
        try {
            const { dni } = req.params;
            await clientService.removeClient(dni);
            res.sendStatus(204);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error al eliminar el cliente' });
        }
    }
}

module.exports = new ClientController();
