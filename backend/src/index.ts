import express from 'express';
import ClientRouter from './routes/ClientRoutes.js';

const port = 8000;
const app = express();

app.use('/client', ClientRouter);

app.get('/', (req, res) => {
    res.send('hello');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
