import { Request, Response } from 'express';
import { db } from '../database/connection.js';
import { citas } from '../database/schema.js';
import { eq } from 'drizzle-orm';

export default class citaController {

    /**
     * POST /citas/create
     * @param req Request
     * CUI: int
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
     * CUI: str
     * fecha: datetime
     * hora: time
     */
    async citasPorCliente(req: Request, res: Response) {
        const id = req.params.id;

        const result = await db.select({
            codigo_Cita: citas.codigo_Cita,
            CUI: citas.CUI,
            fecha: citas.fecha,
            hora: citas.hora
        })
            .from(citas)
            .where(eq(citas.CUI, id));

        const parsed_result = result.map(c => {
            return {
                codigo_Cita: c.codigo_Cita,
                CUI: c.CUI.toString(),
                fecha: c.fecha,
                hora: c.hora
            }
        })

        res.status(200).send(parsed_result);
    }

    async todasLasCitas(req: Request, res: Response){
        const result = await db.select({
            codigo_Cita: citas.codigo_Cita,
            CUI: citas.CUI,
            fecha: citas.fecha,
            hora: citas.hora
        })
            .from(citas)

        res.status(200).send(result)
    }
}