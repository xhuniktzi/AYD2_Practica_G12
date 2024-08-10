import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Citas.css';

const Citas = () => {
  const [appointments, setAppointments] = useState([
    { id: 1, dpi: '1234567890', client: 'Juan Pérez', date: '2024-08-10', time: '10:00', details: 'Consulta general' },
    { id: 2, dpi: '0987654321', client: 'María López', date: '2024-08-11', time: '14:00', details: 'Revisión dental' },
  ]);

  const [searchDpi, setSearchDpi] = useState('');
  const [filteredAppointments, setFilteredAppointments] = useState(appointments);
  const [editingAppointment, setEditingAppointment] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddAppointment = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica para agregar una cita
  };

  const handleEditClick = (appointment) => {
    setEditingAppointment(appointment);
    setIsModalOpen(true);
  };

  const handleSaveAppointment = (e) => {
    e.preventDefault();
    // Lógica para guardar los cambios de la cita
    setIsModalOpen(false);
  };

  const handleDeleteClick = (id) => {
    setAppointments(appointments.filter(appointment => appointment.id !== id));
  };

  const handleSearchChange = (e) => {
    setSearchDpi(e.target.value);
    setFilteredAppointments(appointments.filter(appointment => appointment.dpi.includes(e.target.value)));
  };

  return (
    <div className="appointments-container">
      <div className="appointments-header">
        <h2>Agendar/Reprogramar Citas</h2>
        <Link to="/dashboard" className="back-button">Regresar al Dashboard</Link>
      </div>

      <form onSubmit={handleAddAppointment} className="appointments-form">
        <div>
          <label htmlFor="client">Cliente:</label>
          <select id="client" name="client" required>
            <option value="">Seleccionar Cliente</option>
            <option value="Juan Pérez">Juan Pérez</option>
            <option value="María López">María López</option>
            {/* Agregar más opciones de clientes según sea necesario */}
          </select>
        </div>
        <div>
          <label htmlFor="date">Fecha:</label>
          <input type="date" id="date" name="date" required />
        </div>
        <div>
          <label htmlFor="time">Hora:</label>
          <input type="time" id="time" name="time" required />
        </div>
        <div>
          <label htmlFor="details">Detalles:</label>
          <textarea id="details" name="details" rows={3} />
        </div>
        <button type="submit">Agendar Cita</button>
      </form>

      <div className="search-container">
        <label htmlFor="search-dpi">Buscar por DPI:</label>
        <input
          type="text"
          id="search-dpi"
          value={searchDpi}
          onChange={handleSearchChange}
        />
      </div>

      <div className="appointment-list">
        <h3>Lista de Citas</h3>
        <table>
          <thead>
            <tr>
              <th>DPI</th>
              <th>Cliente</th>
              <th>Fecha</th>
              <th>Hora</th>
              <th>Detalles</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filteredAppointments.map((appointment, index) => (
              <tr key={index}>
                <td>{appointment.dpi}</td>
                <td>{appointment.client}</td>
                <td>{appointment.date}</td>
                <td>{appointment.time}</td>
                <td>{appointment.details}</td>
                <td>
                  <button className="edit-button" onClick={() => handleEditClick(appointment)}>Reprogramar</button>
                  <button className="delete-button" onClick={() => handleDeleteClick(appointment.id)}>Cancelar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h3>Reprogramar Cita</h3>
            <form onSubmit={handleSaveAppointment}>
              <div>
                <label htmlFor="edit-dpi">DPI:</label>
                <input type="text" id="edit-dpi" name="dpi" value={editingAppointment.dpi} readOnly />
              </div>
              <div>
                <label htmlFor="edit-client">Cliente:</label>
                <input type="text" id="edit-client" name="client" value={editingAppointment.client} readOnly />
              </div>
              <div>
                <label htmlFor="edit-date">Fecha:</label>
                <input type="date" id="edit-date" name="date" value={editingAppointment.date} onChange={(e) => setEditingAppointment({ ...editingAppointment, date: e.target.value })} />
              </div>
              <div>
                <label htmlFor="edit-time">Hora:</label>
                <input type="time" id="edit-time" name="time" value={editingAppointment.time} onChange={(e) => setEditingAppointment({ ...editingAppointment, time: e.target.value })} />
              </div>
              <div>
                <label htmlFor="edit-details">Detalles:</label>
                <textarea id="edit-details" name="details" rows={3} value={editingAppointment.details} onChange={(e) => setEditingAppointment({ ...editingAppointment, details: e.target.value })} />
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

export default Citas;
