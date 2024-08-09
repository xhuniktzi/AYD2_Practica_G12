import React, { useState } from 'react';
import axios from 'axios';
//import './VerDocumento.css';

const VerDocumento = () => {
    const [expedienteId, setExpedienteId] = useState('');
    const [documento, setDocumento] = useState(null);

    const handleFetchDocumento = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.get(`http://localhost:8000/abogado/generarDocumentos/${expedienteId}`);
            setDocumento(response.data.contenido);
        } catch (error) {
            console.error('Error al obtener el documento:', error);
            alert('Hubo un problema al obtener el documento. Inténtalo de nuevo.');
        }
    };

    return (
        <div className="ver-documento-container">
            <h2>Ver Documento de Expediente</h2>
            <form onSubmit={handleFetchDocumento}>
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
                <button type="submit" className="ver-documento-button">Ver Documento</button>
            </form>

            {documento && (
                <div className="documento-contenido">
                    <h3>Contenido del Documento</h3>
                    <p>{documento}</p>
                </div>
            )}
        </div>
    );
};

export default VerDocumento;
