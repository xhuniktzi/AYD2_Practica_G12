import express from 'express';
import AbogadoController from '../controllers/AbogadoController.js';
import { db } from '../database/connection.js';

const abogadoRouter = express.Router();
const abogadoController = new AbogadoController(db);

abogadoRouter.post('/agregarExpediente', (req, res) => abogadoController.agregarExpediente(req, res));
abogadoRouter.get('/generarDocumentos/:expedienteId', (req, res) => abogadoController.generarDocumentos(req, res));
abogadoRouter.put('/actualizarEstado/:expedienteId', (req, res) => abogadoController.actualizarEstado(req, res));

export default abogadoRouter;
