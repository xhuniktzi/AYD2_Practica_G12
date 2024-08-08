import express from 'express';
import ClientController from '../controllers/ClientController.js';
import { db } from '../database/connection.js';

const clientRouter = express.Router();
const clientController = new ClientController(db);

clientRouter.get('/all', clientController.getClients);
clientRouter.get('/:id', clientController.getClient);
clientRouter.post('/create', clientController.createClient);
clientRouter.put('/:id', clientController.updateClient);

export default clientRouter;
