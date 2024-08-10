import React, { useState } from 'react';
import axios from 'axios';
//import './ActualizarEstado.css';

const ActualizarEstado = () => {
    const [expedienteId, setExpedienteId] = useState('');
    const [codigoEstado, setCodigoEstado] = useState('');

    const handleUpdateEstado = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.put(`http://localhost:8000/abogado/actualizarEstado/${expedienteId}`, {
                codigo_Estado: parseInt(codigoEstado),
            });
            alert('Estado del expediente actualizado con éxito.');
        } catch (error) {
            console.error('Error al actualizar el estado del expediente:', error);
            alert('Hubo un problema al actualizar el estado del expediente. Inténtalo de nuevo.');
        }
    };

    return (
        <div className="actualizar-estado-container">
            <h2>Actualizar Estado del Expediente</h2>
            <form onSubmit={handleUpdateEstado}>
                <div className="form-group">
                    <label htmlFor="expedienteId">ID del Expediente:</label>
                    <input
                        type="text"
                        id="expedienteId"
                        name="expedienteId"
                        value={expedienteId}
                        onChange={(e) => setExpedienteId(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="codigoEstado">Nuevo Código del Estado:</label>
                    <input
                        type="text"
                        id="codigoEstado"
                        name="codigoEstado"
                        value={codigoEstado}
                        onChange={(e) => setCodigoEstado(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="actualizar-estado-button">Actualizar Estado</button>
            </form>
        </div>
    );
};

export default ActualizarEstado;
