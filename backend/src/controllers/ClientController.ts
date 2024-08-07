import { Client } from '../models/Client.js';
import { Request, Response } from 'express';

export default class ClientController {
    getClients(req: Request, res: Response) {
        res.send(
            'Aquí iría la implementación de este método... ¡SI TUVIERA UNA!'
        );
    }

    getClient(req: Request, res: Response) {
        res.send(
            'Aquí iría la implementación de este método... ¡SI TUVIERA UNA!'
        );
    }

    createClient(req: Request, res: Response) {
        res.send(
            'Aquí iría la implementación de este método... ¡SI TUVIERA UNA!'
        );
    }
}
