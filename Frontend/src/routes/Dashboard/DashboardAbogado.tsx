import { Link } from 'react-router-dom';
import './Dashboard.css';

const DashboardAbogado = () => {
    return (
        <div className="dashboard-container">
            <h2>Dashboard del Abogado</h2>
            <div className="dashboard-buttons">
                <Link to="/agregar-expediente" className="dashboard-button">Agregar Expediente</Link>
                <Link to="/ver-documento" className="dashboard-button">Ver Documento</Link>
                <Link to="/actualizar-estado" className="dashboard-button">Actualizar Estado de Expediente</Link>
            </div>
        </div>
    );
};

export default DashboardAbogado;
