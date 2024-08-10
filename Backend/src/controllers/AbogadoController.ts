import { Request, Response } from 'express';
import { expediente } from '../database/schema.js';
import { MySql2Database } from 'drizzle-orm/mysql2';
import { eq } from 'drizzle-orm';

export default class AbogadoController {
    db: MySql2Database;
    constructor(db: MySql2Database) {
        this.db = db;
    }

    async agregarExpediente(req: Request, res: Response) {
        try {
            const { codigo_Documento, contenido_Documento, codigo_Estado } = req.body;

            const result = await this.db
                .insert(expediente)
                .values({
                    codigo_Documento,
                    contenido_Documento,
                    codigo_Estado,
                })
                .$returningId();

            res.status(200).send({ expedienteId: result[0].no_Expediente });
        } catch (error) {
            console.error("Error adding expediente:", error);
            res.status(500).send('Internal Server Error');
        }
    }

    async generarDocumentos(req: Request, res: Response) {
        try {
            const { expedienteId } = req.params;

            const expedienteRecord = await this.db
                .select()
                .from(expediente)
                .where(eq(expediente.no_Expediente, Number(expedienteId)))
                .limit(1);

            if (expedienteRecord.length === 0) {
                return res.status(404).send('Expediente not found');
            }

            const contenido = expedienteRecord[0].contenido_Documento;

            res.status(200).send({ contenido });
        } catch (error) {
            console.error("Error retrieving expediente:", error);
            res.status(500).send('Internal Server Error');
        }
    }

    async actualizarEstado(req: Request, res: Response) {
        try {
            const { expedienteId } = req.params;
            const { codigo_Estado } = req.body;

            const result = await this.db
                .update(expediente)
                .set({ codigo_Estado })
                .where(eq(expediente.no_Expediente, Number(expedienteId)));

            if (Number(result) === 0) { 
                return res.status(404).send('Expediente not found');
            }

            const updatedRecord = await this.db
                .select({
                    no_Expediente: expediente.no_Expediente,
                    codigo_Estado: expediente.codigo_Estado,
                })
                .from(expediente)
                .where(eq(expediente.no_Expediente, Number(expedienteId)))
                .limit(1);

            res.status(200).send({ No_Caso: updatedRecord[0].no_Expediente ,codigo_Estado: updatedRecord[0].codigo_Estado });
        } catch (error) {
            console.error("Error updating expediente status:", error);
            res.status(500).send('Internal Server Error');
        }
    }

    async getFiles(req: Request, res: Response) {
        const result = await this.db
            .select()
            .from(expediente);
        res.status(200).send(result);
    }
}
