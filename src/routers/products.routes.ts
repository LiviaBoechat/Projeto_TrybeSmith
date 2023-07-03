import { Router } from 'express';
import productsController from '../controllers/product.controller';
import { createProductNameValidation, createProductPriceValidation } 
  from '../controllers/middlewares/createProductValidation';

const productsRouter = Router();

productsRouter.post(
  '/',  
  createProductNameValidation,
  createProductPriceValidation,
  productsController.create,
);
productsRouter.get('/', productsController.findAll);

export default productsRouter;