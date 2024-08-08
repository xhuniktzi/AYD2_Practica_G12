import citaController from '../controllers/CitaController.js';
import { db } from '../database/connection.js';
import express from 'express';
const citasRouter = express.Router();
const citasController = new citaController();

citasRouter.post('/create', citasController.crearCita);

export default citasRouter;
