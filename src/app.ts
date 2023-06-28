import express from 'express';
import usersRouter from './routers/users.routers';
import productsRouter from './routers/products.routes';
import orderRouter from './routers/orders.routes';

const app = express();

app.use(express.json());
app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/orders', orderRouter);

export default app;
