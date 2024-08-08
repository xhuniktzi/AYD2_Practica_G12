import express, { json } from 'express';
import clientRouter from './routes/ClientRoutes.js';

const port = 8000;
const app = express();

app.use(json());

app.use('/client', clientRouter);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
