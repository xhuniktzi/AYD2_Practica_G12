import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Clients.css';

const Clients = () => {
  const [clients, setClients] = useState([]);
  const [searchCui, setSearchCui] = useState('');
  const [filteredClients, setFilteredClients] = useState(clients);
  const [editingClient, setEditingClient] = useState({ cui: '', name: '', surname: '', phone: '', email: '', age: 0, gender: '' });
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Cargar clientes desde el backend al montar el componente
  React.useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await axios.get('http://localhost:3000/clients');
        setClients(response.data);
        setFilteredClients(response.data);
      } catch (error) {
        console.error('Error fetching clients:', error);
      }
    };
    fetchClients();
  }, []);

  const handleAddClient = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const newClient = {
        CUI: editingClient.cui,
        nombre: editingClient.name,
        apellido: editingClient.surname,
        telefono: editingClient.phone,
        correo: editingClient.email,
        edad: editingClient.age,
        codigo_Genero: editingClient.gender === 'Masculino' ? 1 : 2,
        fecha_Ingreso: new Date().toISOString().split('T')[0] // Formato YYYY-MM-DD
      };

      const response = await axios.post('http://localhost:3000/', newClient);
      setClients([...clients, newClient]); // Actualiza el estado local con el nuevo cliente
      setFilteredClients([...clients, newClient]);
    } catch (error) {
      console.error('Error creating client:', error);
    }
  };

  const handleEditClick = (client) => {
    setEditingClient(client);
    setIsModalOpen(true);
  };

  const handleSaveClient = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:3000/${editingClient.cui}`, editingClient);
      setClients(clients.map(client => client.cui === editingClient.cui ? editingClient : client));
      setFilteredClients(filteredClients.map(client => client.cui === editingClient.cui ? editingClient : client));
      setIsModalOpen(false);
    } catch (error) {
      console.error('Error updating client:', error);
    }
  };

  const handleDeleteClick = async (cui) => {
    try {
      await axios.delete(`http://localhost:3000/${cui}`);
      setClients(clients.filter(client => client.cui !== cui));
      setFilteredClients(filteredClients.filter(client => client.cui !== cui));
    } catch (error) {
      console.error('Error deleting client:', error);
    }
  };

  const handleSearchChange = (e) => {
    setSearchCui(e.target.value);
    setFilteredClients(clients.filter(client => client.cui.includes(e.target.value)));
  };

  return (
    <div className="clients-container">
      <div className="clients-header">
        <h2>Gestionar Clientes</h2>
        <Link to="/dashboard" className="back-button">Regresar al Dashboard</Link>
      </div>

      <form onSubmit={handleAddClient} className="clients-form">
        {/* Los campos para agregar o editar un cliente */}
      </form>

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
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filteredClients.map((client, index) => (
              <tr key={index}>
                <td>{client.cui}</td>
                <td>{client.name}</td>
                <td>{client.surname}</td>
                <td>{client.phone}</td>
                <td>{client.email}</td>
                <td>{client.age}</td>
                <td>{client.gender}</td>
                <td>
                  <button className="edit-button" onClick={() => handleEditClick(client)}>Editar</button>
                  <button className="delete-button" onClick={() => handleDeleteClick(client.cui)}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h3>Editar Cliente</h3>
            <form onSubmit={handleSaveClient}>
              {/* Campos del formulario para editar cliente */}
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Clients;
