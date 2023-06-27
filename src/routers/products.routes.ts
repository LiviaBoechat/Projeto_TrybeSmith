import { Router } from 'express';
import productsController from '../controllers/product.controller';

const productsRouter = Router();

productsRouter.post('/', productsController.create);

export default productsRouter;