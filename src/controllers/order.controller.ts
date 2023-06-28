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

export default {
  findAll,
};