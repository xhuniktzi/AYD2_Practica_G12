import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './AgregarExpedientes.css';

const AgregarExpediente = () => {
    const [codigoDocumento, setCodigoDocumento] = useState('');
    const [contenidoDocumento, setContenidoDocumento] = useState('');
    const [codigoEstado, setCodigoEstado] = useState('');
    const navigate = useNavigate();

    const handleAddExpediente = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            // Crear el objeto expediente con los datos del formulario
            const expediente = {
                codigo_Documento: parseInt(codigoDocumento),
                contenido_Documento: contenidoDocumento,
                codigo_Estado: parseInt(codigoEstado),
            };
            alert(JSON.stringify(expediente));
            // Realizar la solicitud POST al backend para agregar el expediente
            const response = await axios.post('http://localhost:8000/abogado/agregarExpediente', (expediente));

            // Mostrar una alerta de éxito y redirigir al dashboard
            alert('Expediente creado con éxito.');
            navigate('/dashboard');
        } catch (error) {
            // Manejo de errores
        
            console.error('Error al crear el expediente:', error);
            alert('Hubo un problema al crear el expediente. Inténtalo de nuevo.');
        }
    };

    return (
        <div className="agregar-expediente-container">
            <h2>Agregar Expediente</h2>
            <form onSubmit={handleAddExpediente}>
                <div className="form-group">
                    <label htmlFor="codigoDocumento">Código del Documento:</label>
                    <input
                        type="text"
                        id="codigoDocumento"
                        name="codigoDocumento"
                        value={codigoDocumento}
                        onChange={(e) => setCodigoDocumento(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="contenidoDocumento">Contenido del Documento:</label>
                    <textarea
                        id="contenidoDocumento"
                        name="contenidoDocumento"
                        value={contenidoDocumento}
                        onChange={(e) => setContenidoDocumento(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="codigoEstado">Código del Estado:</label>
                    <input
                        type="text"
                        id="codigoEstado"
                        name="codigoEstado"
                        value={codigoEstado}
                        onChange={(e) => setCodigoEstado(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="agregar-expediente-button">Agregar Expediente</button>
            </form>
        </div>
    );
};

export default AgregarExpediente;
