import { literal } from 'sequelize';
import OrderModel, { OrderSequelizeModel } from '../database/models/order.model';
import ProductModel from '../database/models/product.model';
import { ServiceResponse } from '../types/ServiceResponse';

async function findAll(): Promise<ServiceResponse<OrderSequelizeModel[]>> {
  const orderList = await OrderModel.findAll({
    attributes: [
      'id',
      'userId',
      [literal('JSON_ARRAYAGG(productIds.id)'),
        'productIds'],
    ],
    include: [{
      model: ProductModel,
      as: 'productIds',
      attributes: [],
    }],
    group: ['id'], // agrupa pelo campo id da tabela Order
    raw: true,
  });

  const theServiceResponse: ServiceResponse<OrderSequelizeModel[]> = {
    status: 'SUCCESSFUL', data: orderList };

  return theServiceResponse;
}

export default {
  findAll,
};