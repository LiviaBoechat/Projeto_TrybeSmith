import { Request, Response } from 'express';
import ordersService from '../services/order.service';
import mapStatusHTTP from '../utils/mapStatusHTTP';

async function findAll(_req: Request, res: Response) {
  const ordersList = await ordersService.findAll();

  if (ordersList.status !== 'SUCCESSFUL') {
    return res.status(mapStatusHTTP(ordersList.status)).json(ordersList.data);
  }
  return res.status(200).json(ordersList.data);
}

async function create(req: Request, res: Response): Promise<Response> {
  const { productIds, userId } = req.body;
  const newOrder = await ordersService.create(
    { productIds, userId },
  );

  if (newOrder.status !== 'SUCCESSFUL') {
    return res.status(mapStatusHTTP(newOrder.status)).json(newOrder.data);
  }
  return res.status(201).json(newOrder.data);
}

export default {
  findAll,
  create,
};