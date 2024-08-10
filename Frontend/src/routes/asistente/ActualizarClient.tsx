import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './ActualizarCliente.css'
const ActualizarCliente = () => {
    const { id } = useParams();
    const [cliente, setCliente] = useState({
        cui: '',
        name: '',
        lastName: '',
        phone: '',
        email: '',
        age: '',
        gender: '1' // Valor predeterminado para evitar que sea undefined
    });

    const navigate = useNavigate();

    useEffect(() => {
        const fetchCliente = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/client/${id}`);

                setCliente({
                    cui: response.data[0].cui || '',
                    name: response.data[0].name || '',
                    lastName: response.data[0].lastName || '',
                    phone: response.data[0].phone || '',
                    email: response.data[0].email || '',
                    age: response.data[0].age || '',
                    gender: response.data[0].gender || '1'
                });

            } catch (error) {
                console.error('Error al obtener el cliente:', error);
            }
        };

        fetchCliente();
    }, [id]);


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setCliente({
            ...cliente,
            [e.target.name]: e.target.value || '' // Asegura que nunca es undefined
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
                <button type="submit" className="actualizar-cliente-button">Actualizar Cliente</button>
            </form>
        </div>
    );
};

export default ActualizarCliente;
