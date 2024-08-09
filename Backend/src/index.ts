import express, { json } from 'express';
import clientRouter from './routes/ClientRoutes.js';
import citasRouter from './routes/CitaRouter.js';
import abogadoRouter from './routes/AbogadoRoutes.js';
import cors from 'cors';

const port = 8000;
const app = express();

app.use(cors());
app.use(json());

app.use('/client', clientRouter);
app.use('/citas', citasRouter)
app.use('/abogado', abogadoRouter);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
