//BACKEND/models/clientModel.js

const db = require('../config/db');

class ClientModel {

    //Obtiene todos los clientes
    async getAllClients() {
        const result = await db.query('SELECT * FROM cliente');
        return result.rows;
    }

    //Funcion para contar productos por DNI del cliente
    async countProductsByClientDNI(dni) {
        const client = await db.query('SELECT * FROM cliente WHERE dni = $1', [dni]);

        if (client.rows.length === 0) {
            return 0;
        }

        const clienteId = client.rows[0].id; 
        const result = await db.query(
            'SELECT COUNT(*) FROM producto WHERE cliente_id = $1',
            [clienteId]
        );

        return parseInt(result.rows[0].count, 10);
    }

    //Obtiene al cliente pero por DNI
    async getClientByDNI(dni) {
        const result = await db.query('SELECT * FROM cliente WHERE dni = $1', [dni]);
        return result.rows[0];
    }

    async createClient({ dni, nombre, apellido_paterno, apellido_materno, fecha_nacimiento }) {
        const result = await db.query(
            'INSERT INTO cliente (dni, nombre, apellido_paterno, apellido_materno, fecha_nacimiento) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [dni, nombre, apellido_paterno, apellido_materno, fecha_nacimiento]
        );
        return result.rows[0];
    }

    //Actualiza pero por id del cliente
    async updateCliente(id, { dni, nombre, apellido_paterno, apellido_materno, fecha_nacimiento }) {
        const result = await db.query(
            'UPDATE cliente SET dni = $1, nombre = $2, apellido_paterno = $3, apellido_materno = $4, fecha_nacimiento = $5 WHERE id = $6 RETURNING *',
            [dni, nombre, apellido_paterno, apellido_materno, fecha_nacimiento, id]
        );
        return result.rows[0];
    }

    //Funcion de eliminar por DNI del cliente
    async deleteClient(dni) {
        await db.query('DELETE FROM cliente WHERE dni = $1', [dni]);
    }
}

module.exports = new ClientModel();
