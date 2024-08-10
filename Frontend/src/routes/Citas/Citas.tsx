import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Citas = () => {
  const [cita, setCita] = useState({
    CUI: 0,
    fecha: new Date().toISOString().split('T')[0],
    hora: new Date().toISOString().split('T')[1].replace("Z", "").split(".")[0]
  });


  const [listaCitas, setListaCitas] = useState([]);

  useEffect(() => {
    const fetchCitas = async () => {
      try {
        const response = await axios.get('http://localhost:8000/citas');
        setListaCitas(response.data);
      } catch (error) {
        console.error('Error al obtener los Citas:', error);
      }
    };

    fetchCitas();
  }, []);

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setCita({
      ...cita,
      [e.target.name]: e.target.value
    });
  };

  const handleAddCita = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8000/citas/create', cita);
      alert('Cita creada con éxito.');
      navigate('/dashboard');
    } catch (error) {
      console.error('Error al crear la cita:', error);
      alert('Hubo un problema al crear la cita. Inténtalo de nuevo.');
    }
  };

  return (
    <div className="agregar-cita-container">
      <h2>Agregar Cita</h2>
      <form onSubmit={handleAddCita}>
        <div className="form-group">
          <label htmlFor="CUI">CUI:</label>
          <input
            type="text"
            id="CUI"
            name="CUI"
            value={cita.CUI}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="fecha">Fecha:</label>
          <input
            type="date"
            id="fecha"
            name="fecha"
            value={cita.fecha}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="hora">Hora:</label>
          <input
            type="time"
            id="hora"
            name="hora"
            value={cita.hora}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="agregar-cita-button">Agregar Cita</button>
      </form>

      <div className="client-list">
        <h3>Lista de Clientes</h3>
        <table>
          <thead>
            <tr>
              <th>Codigo</th>
              <th>Cui</th>
              <th>fecha</th>
              <th>hora</th>
             
            </tr>
          </thead>
          <tbody>
            {listaCitas.map((cita, index) => (
              <tr key={index}>
                <td>{cita.codigo_Cita}</td>
                <td>{cita.CUI}</td>
                <td>{cita.fecha}</td>
                <td>{cita.hora}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Citas;
