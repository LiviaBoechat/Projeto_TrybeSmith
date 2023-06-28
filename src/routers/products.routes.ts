import { Router } from 'express';
import productsController from '../controllers/product.controller';
// import createProductValidation from '../controllers/middlewares/createProductValidation';

const productsRouter = Router();

productsRouter.post('/', productsController.create);
productsRouter.get('/', productsController.findAll);

export default productsRouter;