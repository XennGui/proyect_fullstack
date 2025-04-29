// src/components/Client/ClientList.js

import React from "react";

const ClientList = ({ clients, onDeleteClient, onEditClient }) => {
    const handleDeleteConfirmation = (dni) => {
        if (window.confirm("¿Estás seguro de eliminar este cliente?")) {
            onDeleteClient(dni);
        }
    };

    return (
        <div>
            <h2 className="clients-title">Lista de Clientes</h2>
            {clients.length === 0 ? (
                <p>No hay clientes registrados.</p>
            ) : (
                <ul className="client-list">
                    {clients.map((client) => (
                        <li key={client.dni} className="client-item">
                            <div className="client-info">
                                <strong>{client.nombre} {client.apellido_paterno} {client.apellido_materno}</strong>
                                <p>DNI: {client.dni}</p>
                                <p>Fecha Nacimiento: {new Date(client.fecha_nacimiento).toLocaleDateString()}</p>
                            </div>
                            <div className="client-actions">
                                <button
                                    className="edit-button"
                                    onClick={() => onEditClient(client)}
                                >
                                    Editar
                                </button>
                                <button
                                    className="delete-button"
                                    onClick={() => handleDeleteConfirmation(client.dni)}
                                >
                                    Eliminar
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ClientList;
