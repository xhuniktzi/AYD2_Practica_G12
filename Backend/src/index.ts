import express, { json } from 'express';
import clientRouter from './routes/ClientRoutes.js';
import citasRouter from './routes/CitaRouter.js';

const port = 8000;
const app = express();

app.use(json());

app.use('/client', clientRouter);
app.use('/citas', citasRouter)

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
