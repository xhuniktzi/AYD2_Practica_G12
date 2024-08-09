import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
//import './AgregarCliente.css';

const AgregarCliente = () => {
    const [cliente, setCliente] = useState({
        CUI: '',
        nombre: '',
        apellido: '',
        telefono: '',
        correo: '',
        edad: '',
        codigoGenero: '1', // Por defecto, género masculino
        fechaIngreso: new Date().toISOString().split('T')[0] // Fecha actual
    });
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setCliente({
            ...cliente,
            [e.target.name]: e.target.value
        });
    };

    const handleAddCliente = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8000/client', cliente);
            alert('Cliente creado con éxito.');
            navigate('/dashboard');
        } catch (error) {
            console.error('Error al crear el cliente:', error);
            alert('Hubo un problema al crear el cliente. Inténtalo de nuevo.');
        }
    };

    return (
        <div className="agregar-cliente-container">
            <h2>Agregar Cliente</h2>
            <form onSubmit={handleAddCliente}>
                <div className="form-group">
                    <label htmlFor="CUI">CUI:</label>
                    <input
                        type="text"
                        id="CUI"
                        name="CUI"
                        value={cliente.CUI}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="nombre">Nombre:</label>
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={cliente.nombre}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="apellido">Apellido:</label>
                    <input
                        type="text"
                        id="apellido"
                        name="apellido"
                        value={cliente.apellido}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="telefono">Teléfono:</label>
                    <input
                        type="text"
                        id="telefono"
                        name="telefono"
                        value={cliente.telefono}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="correo">Correo:</label>
                    <input
                        type="email"
                        id="correo"
                        name="correo"
                        value={cliente.correo}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="edad">Edad:</label>
                    <input
                        type="number"
                        id="edad"
                        name="edad"
                        value={cliente.edad}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="codigoGenero">Género:</label>
                    <select
                        id="codigoGenero"
                        name="codigoGenero"
                        value={cliente.codigoGenero}
                        onChange={handleChange}
                    >
                        <option value="1">Masculino</option>
                        <option value="2">Femenino</option>
                    </select>
                </div>
                <button type="submit" className="agregar-cliente-button">Agregar Cliente</button>
            </form>
        </div>
    );
};

export default AgregarCliente;
