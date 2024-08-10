import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
//import './ActualizarCliente.css';

const ActualizarCliente = () => {
    const { id } = useParams();
    const [cliente, setCliente] = useState({
        CUI: '',
        nombre: '',
        apellido: '',
        telefono: '',
        correo: '',
        edad: '',
        codigoGenero: ''
    });
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCliente = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/client/${id}`);
                setCliente(response.data);
            } catch (error) {
                console.error('Error al obtener el cliente:', error);
            }
        };

        fetchCliente();
    }, [id]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setCliente({
            ...cliente,
            [e.target.name]: e.target.value
        });
    };

    const handleUpdateCliente = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:8000/client/${id}`, cliente);
            alert('Cliente actualizado con éxito.');
            navigate('/dashboard');
        } catch (error) {
            console.error('Error al actualizar el cliente:', error);
            alert('Hubo un problema al actualizar el cliente. Inténtalo de nuevo.');
        }
    };

    return (
        <div className="actualizar-cliente-container">
            <h2>Actualizar Cliente</h2>
            <form onSubmit={handleUpdateCliente}>
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
                <button type="submit" className="actualizar-cliente-button">Actualizar Cliente</button>
            </form>
        </div>
    );
};

export default ActualizarCliente;
