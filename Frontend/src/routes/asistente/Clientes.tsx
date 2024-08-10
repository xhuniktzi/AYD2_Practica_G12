import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Clientes.css'
const Clientes = () => {
    const [clientes, setClientes] = useState([]);
    const [searchCui, setSearchCui] = useState('');

    useEffect(() => {
        const fetchClientes = async () => {
            try {
                const response = await axios.get('http://localhost:8000/client');
                setClientes(response.data);
            } catch (error) {
                console.error('Error al obtener los clientes:', error);
            }
        };

        fetchClientes();
    }, []);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchCui(e.target.value);
    };

    const filteredClientes = clientes.filter(cliente =>
        cliente.cui.toString().includes(searchCui)
    );

    return (
        <div className="clientes-container">
            <h2>Gestionar Clientes</h2>
            <div className="search-container">
                <label htmlFor="search-cui">Buscar por CUI:</label>
                <input
                    type="text"
                    id="search-cui"
                    value={searchCui}
                    onChange={handleSearchChange}
                />
            </div>

            <div className="client-list">
                <h3>Lista de Clientes</h3>
                <table>
                    <thead>
                        <tr>
                            <th>CUI</th>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Teléfono</th>
                            <th>Correo</th>
                            <th>Edad</th>
                            <th>Género</th>
                            <th>Fecha de Ingreso</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredClientes.map((cliente, index) => (
                            <tr key={index}>
                                <td>{cliente.cui}</td>
                                <td>{cliente.name}</td>
                                <td>{cliente.lastName}</td>
                                <td>{cliente.phone}</td>
                                <td>{cliente.email}</td>
                                <td>{cliente.age}</td>
                                <td>{cliente.gender === 1 ? 'Masculino' : 'Femenino'}</td>
                                <td>{new Date(cliente.dateJoined).toLocaleDateString()}</td>
                                <td>
                                    <Link to={`/actualizar-cliente/${cliente.cui}`} className="edit-button">Editar</Link>
                                    {/* Si deseas agregar la funcionalidad de eliminar, puedes agregar un botón aquí */}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Clientes;
