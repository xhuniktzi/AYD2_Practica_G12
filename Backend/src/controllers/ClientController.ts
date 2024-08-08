import { Request, Response } from 'express';
import { clients } from '../database/schema.js';
import { db } from '../database/connection.js';
import { eq } from 'drizzle-orm';

export default class clientsController {
    async getClient(req: Request, res: Response) {
        const result = await db
            .select()
            .from(clients)
            .where(eq(clients.cui, BigInt(req.params.id)));
        res.status(200).send(result);
    }

    async createClient(req: Request, res: Response) {
        const result = await db.insert(clients).values(req.body).$returningId();
        res.status(200).send(result);
    }

    async updateClient(req: Request, res: Response) {
        await db
            .update(clients)
            .set(req.body)
            .where(eq(clients.cui, BigInt(req.params.id)));
        res.status(200).send('');
    }
}
