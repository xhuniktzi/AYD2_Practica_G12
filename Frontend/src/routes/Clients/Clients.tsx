import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Clients.css';

const Clients = () => {
  const [clients, setClients] = useState([
    { cui: '123456789', name: 'Juan', surname: 'Pérez', phone: '12345678', email: 'juan@example.com', age: 30, gender: 'Masculino' },
    { cui: '987654321', name: 'María', surname: 'López', phone: '87654321', email: 'maria@example.com', age: 25, gender: 'Femenino' },
  ]);

  const [filteredClients, setFilteredClients] = useState(clients);
  const [searchCui, setSearchCui] = useState('');
  const [editingClient, setEditingClient] = useState({cui: '', name: '', surname: '', phone: '', email: '', age: 0, gender: ''});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddClient = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica para agregar un cliente
  };

  const handleEditClick = (client) => {
    setEditingClient(client);
    setIsModalOpen(true);
  };

  const handleSaveClient = (e) => {
    e.preventDefault();
    // Lógica para guardar los cambios del cliente
    setIsModalOpen(false);
  };

  const handleDeleteClick = (cui) => {
    setClients(clients.filter(client => client.cui !== cui));
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
        <div>
          <label htmlFor="cui">CUI:</label>
          <input type="text" id="cui" name="cui" required />
        </div>
        <div>
          <label htmlFor="name">Nombre:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div>
          <label htmlFor="surname">Apellido:</label>
          <input type="text" id="surname" name="surname" required />
        </div>
        <div>
          <label htmlFor="phone">Teléfono:</label>
          <input type="text" id="phone" name="phone" required />
        </div>
        <div>
          <label htmlFor="email">Correo:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="age">Edad:</label>
          <input type="number" id="age" name="age" required />
        </div>
        <div>
          <label htmlFor="gender">Género:</label>
          <select id="gender" name="gender" required>
            <option value="Masculino">Masculino</option>
            <option value="Femenino">Femenino</option>
            <option value="Otro">Otro</option>
          </select>
        </div>
        <button type="submit">Agregar Cliente</button>
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
              <div>
                <label htmlFor="edit-cui">CUI:</label>
                <input type="text" id="edit-cui" name="cui" value={editingClient.cui} readOnly />
              </div>
              <div>
                <label htmlFor="edit-name">Nombre:</label>
                <input type="text" id="edit-name" name="name" value={editingClient.name} onChange={(e) => setEditingClient({ ...editingClient, name: e.target.value })} />
              </div>
              <div>
                <label htmlFor="edit-surname">Apellido:</label>
                <input type="text" id="edit-surname" name="surname" value={editingClient.surname} onChange={(e) => setEditingClient({ ...editingClient, surname: e.target.value })} />
              </div>
              <div>
                <label htmlFor="edit-phone">Teléfono:</label>
                <input type="text" id="edit-phone" name="phone" value={editingClient.phone} onChange={(e) => setEditingClient({ ...editingClient, phone: e.target.value })} />
              </div>
              <div>
                <label htmlFor="edit-email">Correo:</label>
                <input type="email" id="edit-email" name="email" value={editingClient.email} onChange={(e) => setEditingClient({ ...editingClient, email: e.target.value })} />
              </div>
              <div>
                <label htmlFor="edit-age">Edad:</label>
                <input type="number" id="edit-age" name="age" value={editingClient.age} onChange={(e) => setEditingClient({ ...editingClient, age: e.target.value })} />
              </div>
              <div>
                <label htmlFor="edit-gender">Género:</label>
                <select id="edit-gender" name="gender" value={editingClient.gender} onChange={(e) => setEditingClient({ ...editingClient, gender: e.target.value })}>
                  <option value="Masculino">Masculino</option>
                  <option value="Femenino">Femenino</option>
                  <option value="Otro">Otro</option>
                </select>
              </div>
              <button type="submit">Guardar Cambios</button>
              <button type="button" onClick={() => setIsModalOpen(false)}>Cancelar</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Clients;