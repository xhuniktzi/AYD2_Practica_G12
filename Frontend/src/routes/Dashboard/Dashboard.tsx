import { Link } from 'react-router-dom';
import './Dashboard.css';


const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      <div className="dashboard-buttons">
        <Link to="/clients" className="dashboard-button">Gestionar Clientes</Link>
        <Link to="/appointments" className="dashboard-button">Agendar Citas</Link>
        <Link to="/cases" className="dashboard-button">Gestionar Expedientes</Link>
        <Link to="/reports" className="dashboard-button">Ver Reportes</Link>
      </div>
    </div>
  );
};

export default Dashboard;
