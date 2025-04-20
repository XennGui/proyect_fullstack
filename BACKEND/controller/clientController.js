// BACKEND/controller/clientController.js

const clientService = require('../services/clientService');
const messages = require('../utils/errorTypes');

class ClientController {
    async getClients(req, res) {
        try {
            const clients = await clientService.getClients();
            res.json(clients);
        } catch (error) {
            console.error(error);
            res.status(messages.ERROR_OBTENER_CLIENTES.status).json({ message: messages.ERROR_OBTENER_CLIENTES.message });
        }
    }

    async getProductCountByClient(req, res) {
        const { dni } = req.params;
        try {
            const client = await clientService.getClientByDNI(dni);
            if (!client) {
                return res.status(messages.CLIENTE_NO_ENCONTRADO.status).json({ message: messages.CLIENTE_NO_ENCONTRADO.message });
            }

            const productCount = await clientService.countProductsForClient(dni);
            res.json({ ...client, productos_asignados: productCount });
        } catch (error) {
            console.error(error);
            res.status(messages.ERROR_OBTENER_CLIENTE.status).json({ message: messages.ERROR_OBTENER_CLIENTE.message });
        }
    }

    async getClientByDNI(req, res) {
        const { dni } = req.params;
        try {
            const client = await clientService.getClientByDNI(dni);
            if (!client) {
                return res.status(messages.CLIENTE_NO_ENCONTRADO.status).json({ message: messages.CLIENTE_NO_ENCONTRADO.message });
            }
            res.json(client);
        } catch (error) {
            console.error(error);
            res.status(messages.ERROR_OBTENER_CLIENTE.status).json({ message: messages.ERROR_OBTENER_CLIENTE.message });
        }
    }

    async createClient(req, res) {
        const { dni, nombre, apellido_paterno, apellido_materno, fecha_nacimiento } = req.body;
        try {
            const newClient = await clientService.addClient({ dni, nombre, apellido_paterno, apellido_materno, fecha_nacimiento });
            res.status(messages.CLIENTE_CREADO.status).json(newClient);
        } catch (error) {
            console.error(error);
            res.status(messages.ERROR_CREAR_CLIENTE.status).json({ message: messages.ERROR_CREAR_CLIENTE.message });
        }
    }

    async updateClient(req, res) {
        const { id } = req.params;
        const { dni, nombre, apellido_paterno, apellido_materno, fecha_nacimiento } = req.body;
        try {
            const updatedClient = await clientService.modifyClient(id, { dni, nombre, apellido_paterno, apellido_materno, fecha_nacimiento });
            if (!updatedClient) {
                return res.status(messages.CLIENTE_NO_ENCONTRADO.status).json({ message: messages.CLIENTE_NO_ENCONTRADO.message });
            }
            res.json(updatedClient);
        } catch (error) {
            console.error(error);
            res.status(messages.ERROR_ACTUALIZAR_CLIENTE.status).json({ message: messages.ERROR_ACTUALIZAR_CLIENTE.message });
        }
    }

    async deleteClient(req, res) {
        const { dni } = req.params;
        try {
            await clientService.removeClient(dni);
            res.status(messages.CLIENTE_ELIMINADO.status).send();
        } catch (error) {
            console.error(error);
            res.status(messages.ERROR_ELIMINAR_CLIENTE.status).json({ message: messages.ERROR_ELIMINAR_CLIENTE.message });
        }
    }
}

module.exports = new ClientController();
