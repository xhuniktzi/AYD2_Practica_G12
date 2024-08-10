import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './AgregarClientes.css'

const AgregarCliente = () => {
    const [cliente, setCliente] = useState({
        cui: '',
        name: '',
        lastName: '',
        phone: '',
        email: '',
        age: '',
        gender: '1', // Por defecto, género masculino
        dateJoined: new Date().toISOString().split('T')[0] // Fecha actual
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
                    <label htmlFor="cui">CUI:</label>
                    <input
                        type="text"
                        id="cui"
                        name="cui"
                        value={cliente.cui}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Nombre:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={cliente.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Apellido:</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={cliente.lastName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Teléfono:</label>
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        value={cliente.phone}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Correo:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={cliente.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="age">Edad:</label>
                    <input
                        type="number"
                        id="age"
                        name="age"
                        value={cliente.age}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="gender">Género:</label>
                    <select
                        id="gender"
                        name="gender"
                        value={cliente.gender}
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
