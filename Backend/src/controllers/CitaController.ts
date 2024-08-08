import { Request, Response } from 'express';
import { MySql2Database } from 'drizzle-orm/mysql2';
import { db } from '../database/connection.js';
import { citas, clients } from '../database/schema.js';
import { eq } from 'drizzle-orm';

export default class citaController {

    async crearCita(req: Request, res: Response) {
        const { CUI_Cliente } = req.body;
        const find_cui = await db.select({ cui: clients.cui })
            .from(clients)
            .where(eq(clients.cui, CUI_Cliente));

        if (find_cui.length > 0) {
            if (CUI_Cliente === find_cui[0].cui) {
                const result = await db.insert(citas)
                    .values(req.body)
                    .$returningId();

                res.status(200).send(result);
            } else {
                res.status(400).send()
            }
        } else {
            res.status(404).send()
        }



    }
}