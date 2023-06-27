import { Request, Response } from 'express';
import productService from '../services/product.service';
import mapStatusHTTP from '../utils/mapStatusHTTP';

async function create(req: Request, res: Response): Promise<Response> {
  const { name, price, orderId } = req.body;
  const newProduct = await productService.create(
    { name, price, orderId },
  );

  if (newProduct.status !== 'SUCCESSFUL') {
    return res.status(mapStatusHTTP(newProduct.status)).json(newProduct.data);
  }
  return res.status(201).json(newProduct.data);
}

export default {
  create,
};