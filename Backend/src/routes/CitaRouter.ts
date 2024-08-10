import citaController from '../controllers/CitaController.js';
import { db } from '../database/connection.js';
import express from 'express';
const citasRouter = express.Router();
const citasController = new citaController();

citasRouter.get('/', citasController.todasLasCitas)
citasRouter.get('/clients/:id', citasController.citasPorCliente)
citasRouter.post('/create', citasController.crearCita);
citasRouter.put('/:id', citasController.actualizarCita);

export default citasRouter;
