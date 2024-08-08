import { Request, Response } from 'express';
import { clients } from '../database/schema.js';
import { MySql2Database } from 'drizzle-orm/mysql2';
import { eq } from 'drizzle-orm';

export default class abogadoController {
    db: MySql2Database;
    constructor(db: MySql2Database) {
        this.db = db;
    }

    async getClients(req: Request, res: Response) {
        const result = await this.db.select().from(clients);
        res.status(200).send(result);
    }

    getClient(req: Request, res: Response) {
        res.send(
            'Aquí iría la implementación de este método... ¡SI TUVIERA UNA!'
        );
    }

    async createClient(req: Request, res: Response) {
        const result = await this.db
            .insert(clients)
            .values(req.body)
            .$returningId();
        res.status(200).send(result);
    }

    async updateClient(req: Request, res: Response) {
        await this.db
            .update(clients)
            .set(req.body)
            .where(eq(clients.cui, BigInt(req.params.id)));
        res.status(200).send('');
    }
}
