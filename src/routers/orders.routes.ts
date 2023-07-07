import { Router } from 'express';
import ordersController from '../controllers/order.controller';
// import createProductValidation from '../controllers/middlewares/createProductValidation';

const productsRouter = Router();

productsRouter.get('/', ordersController.findAll);
productsRouter.post('/', ordersController.create);

export default productsRouter;