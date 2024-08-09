import { Link } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h2>Dashboard de Asistente</h2>
      <div className="dashboard-buttons">
        <Link to="/clientes" className="dashboard-button">Gestionar Clientes</Link>
        <Link to="/agregar-cliente" className="dashboard-button">Agregar Cliente</Link>
        <Link to="/appointments" className="dashboard-button">Agendar Citas</Link>
        {/* Puedes agregar más funcionalidades si es necesario */}
      </div>
    </div>
  );
};

export default Dashboard;
