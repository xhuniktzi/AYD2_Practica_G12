import express from 'express';
import ClientController from '../controllers/ClientController.js';

const clientRouter = express.Router();
const clientController = new ClientController();

clientRouter
    .route('/')
    .get(clientController.getClients)
    .post(clientController.createClient);

clientRouter
    .route('/:id')
    .get(clientController.getClient)
    .put(clientController.updateClient);

export default clientRouter;
