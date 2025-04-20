//BACKEND/services/clientService.js

const clientModel = require('../models/clientModel');

class ClientService {
    async getClients() {
        return await clientModel.getAllClients();
    }

    async countProductsForClient(dni) {
        return await clientModel.countProductsByClientDNI(dni);
    }       

    async getClientByDNI(dni) {
        return await clientModel.getClientByDNI(dni);
    }

    async addClient(data) {
        return await clientModel.createClient(data);
    }

    async modifyClient(id, data) {
        return await clientModel.updateCliente(id, data);
    }


    async removeClient(dni) {
        return await clientModel.deleteClient(dni);
    }
}

module.exports = new ClientService();
