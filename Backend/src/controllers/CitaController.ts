import { Request, Response } from 'express';
import { db } from '../database/connection.js';
import { citas } from '../database/schema.js';
import { eq } from 'drizzle-orm';

export default class citaController {

    /**
     * POST /citas/create
     * @param req Request
     * CUI_Cliente: int
     * fecha: date
     * hora: time
     * 
     * @param res Response
     * codigo_Cita: int
     */
    async crearCita(req: Request, res: Response) {
        const result = await db.insert(citas)
            .values(req.body)
            .$returningId();

        res.status(200).send(result);
    }

    /**
     * PUT /citas/:id
     * @param req Request
     * id: int
     * 
     * @param res
     * NULL 
     */
    async actualizarCita(req: Request, res: Response) {
        const id = parseInt(req.params.id);

        await db.update(citas)
            .set(req.body)
            .where(eq(citas.codigo_Cita, id));

        res.status(204).send();
    }

    /**
     * GET /citas/clients/:id
     * @param req 
     * id: int
     * @param res 
     * codigo_Cita: int
     * CUI_Cliente: str
     * fecha: datetime
     * hora: time
     */
    async citasPorCliente(req: Request, res: Response) {
        const id = BigInt(req.params.id);

        const result = await db.select({
            codigo_Cita: citas.codigo_Cita,
            CUI_Cliente: citas.CUI_Cliente,
            fecha: citas.fecha,
            hora: citas.hora
        })
            .from(citas)
            .where(eq(citas.CUI_Cliente, id));

        const parsed_result = result.map(c => {
            return {
                codigo_Cita: c.codigo_Cita,
                CUI_Cliente: c.CUI_Cliente.toString(),
                fecha: c.fecha,
                hora: c.hora
            }
        })

        res.status(200).send(parsed_result);
    }
}