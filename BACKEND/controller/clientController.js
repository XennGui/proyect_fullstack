//BACKEND/controller/clientController.js
const clientService = require('../services/clientService');

class ClientController {
    async getClients(req, res) {
        try {
            const clients = await clientService.getClients();
            res.json(clients);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error al obtener los clientes' }); //error 500 Error interno del servidor (problema inesperado)
        }
    }

    async getClientByDNI(req, res) {
        const { dni } = req.params;
        try {
            const client = await clientService.getClientByDNI(dni);
            if (!client) {
                return res.status(404).json({ message: 'Cliente no encontrado' }); //error 404 Cliente no encontrado
            }
            res.json(client);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error al obtener el cliente' }); //error 500 Error interno del servidor (problema inesperado)
        }
    }

    async createClient(req, res) {
        try {
            const { dni, nombre, apellido_paterno, apellido_materno, fecha_nacimiento } = req.body;
            const newClient = await clientService.addClient({
                dni, nombre, apellido_paterno, apellido_materno, fecha_nacimiento
            });
            res.status(201).json(newClient);  // error 201 Cliente creado exitosamente
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error al crear el cliente' }); //error 500 Error interno del servidor (problema inesperado)
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
                res.status(404).json({ message: 'Cliente no encontrado' });  //error 404 Cliente no encontrado  
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error al actualizar el cliente' }); //error 500 Error interno del servidor (problema inesperado)
        }

    }

    async deleteClient(req, res) {
        try {
            const { dni } = req.params;
            await clientService.removeClient(dni);
            res.sendStatus(204);  //error 204 Cliente eliminado exitosamente
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error al eliminar el cliente' }); //error 500 Error interno del servidor (problema inesperado)
        }
    }
}

module.exports = new ClientController();
