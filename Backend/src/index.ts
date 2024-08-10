import express, { json } from 'express';
import clientRouter from './routes/ClientRoutes.js';
import citasRouter from './routes/CitaRouter.js';
import abogadoRouter from './routes/AbogadoRoutes.js';
import cors from 'cors';

const port = 8000;
const app = express();




app.use(cors());
app.use(json());


app.use('/abogado', abogadoRouter);
app.use('/client', clientRouter);
app.use('/citas', citasRouter)
app.use('/abogado', abogadoRouter);

app.use((err, _req, res, _next) => {
    console.error(err.stack); // Imprime el error en la consola para debug
    res.status(500).json({ error: 'Algo salió mal, intenta nuevamente.' }); // Envía una respuesta amigable al cliente
});

// Manejo de errores no capturados en Promesas
process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
    // Puedes decidir si reiniciar el servidor aquí
});

// Manejo de excepciones no capturadas
process.on('uncaughtException', (error) => {
    console.error('Uncaught Exception:', error);
    // Considera reiniciar el servidor en este caso
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
