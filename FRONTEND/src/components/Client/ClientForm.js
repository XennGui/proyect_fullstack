// src/components/Client/ClientForm.js

import React, { useState, useEffect } from "react";
import { getClientByDNI, createClient, updateClient } from "../../services/Client/clientService";

const ClientForm = ({ clientToEdit, onAddClient, onUpdateClient }) => {
    const [dni, setDni] = useState("");
    const [nombre, setNombre] = useState("");
    const [apellidoPaterno, setApellidoPaterno] = useState("");
    const [apellidoMaterno, setApellidoMaterno] = useState("");
    const [fechaNacimiento, setFechaNacimiento] = useState("");
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!dni || !nombre || !apellidoPaterno || !apellidoMaterno || !fechaNacimiento) {
            setError("Todos los campos son obligatorios.");
            return;
        }

        const client = {
            dni, 
            nombre, 
            apellido_paterno: apellidoPaterno,
            apellido_materno: apellidoMaterno, 
            fecha_nacimiento: fechaNacimiento
        };

        try {
            if (clientToEdit) {
                const response = await updateClient(clientToEdit.id, client);
                onUpdateClient(response.data);
            } else {
                const response = await createClient(client);
                onAddClient(response.data);
            }
            resetForm();
        } catch (error) {
            console.error("Error al procesar el cliente", error);
            setError(error.response?.data?.message || "Hubo un error al procesar el cliente.");
        }
    };

    const resetForm = () => {
        setDni("");
        setNombre("");
        setApellidoPaterno("");
        setApellidoMaterno("");
        setFechaNacimiento("");
        setError(null);
    };

    useEffect(() => {
        if (clientToEdit) {
            setDni(clientToEdit.dni);
            setNombre(clientToEdit.nombre);
            setApellidoPaterno(clientToEdit.apellido_paterno);
            setApellidoMaterno(clientToEdit.apellido_materno);
            setFechaNacimiento(clientToEdit.fecha_nacimiento.split('T')[0]);
        } else {
            resetForm();
        }
    }, [clientToEdit]);

    return (
        <form onSubmit={handleSubmit} className="client-form">
            <h2>{clientToEdit ? "Editar Cliente" : "Crear Cliente"}</h2>
            {error && <div className="error">{error}</div>}

            <div className="form-group">
                <label>DNI</label>
                <input type="text" value={dni} onChange={(e) => setDni(e.target.value)} />
            </div>

            <div className="form-group">
                <label>Nombre</label>
                <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
            </div>

            <div className="form-group">
                <label>Apellido Paterno</label>
                <input type="text" value={apellidoPaterno}
                    onChange={(e) => setApellidoPaterno(e.target.value)} />
            </div>

            <div className="form-group">
                <label>Apellido Materno</label>
                <input type="text" value={apellidoMaterno}
                    onChange={(e) => setApellidoMaterno(e.target.value)} />
            </div>

            <div className="form-group">
                <label>Fecha de Nacimiento</label>
                <input type="date" value={fechaNacimiento}
                    onChange={(e) => setFechaNacimiento(e.target.value)} />
            </div>

            <button type="submit">
                {clientToEdit ? "Actualizar Cliente" : "Guardar Cliente"}
            </button>
        </form>
    );
};

export default ClientForm;