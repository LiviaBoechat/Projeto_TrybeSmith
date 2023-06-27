import express from 'express';
import usersRouter from './routers/users.routers';
import productsRouter from './routers/products.routes';

const app = express();

app.use(express.json());
app.use('/users', usersRouter);
app.use('/products', productsRouter);

export default app;
