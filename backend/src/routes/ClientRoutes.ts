import express from 'express';
import ClientController from '../controllers/ClientController.js';

const router = express.Router();
const clientController = new ClientController();

router.get('/all', clientController.getClients);
router.get('/:id', clientController.getClient);
router.post('/create', clientController.createClient);

export default router;
