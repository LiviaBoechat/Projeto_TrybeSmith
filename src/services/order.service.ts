import { literal } from 'sequelize';
import OrderModel, { OrderInputtableTypes, 
  OrderSequelizeModel } from '../database/models/order.model';
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

type DBPOrderReponse = {
  productIds: number[];
  userId: number
};

async function create(order: OrderInputtableTypes)
  : Promise<ServiceResponse<DBPOrderReponse>> {
  const newOrder = await OrderModel.create(order);
  const orderId = newOrder.dataValues.id;
  const orderId = newOrder.dataValues.id;

  await Promise.all(productIds.map((id) =>
    ProductModel.update({ orderId }, { where: { id } })));
  
  const theServiceResponse: ServiceResponse<DBPOrderReponse | unknown> = {
    status: 'SUCCESSFUL', 
    data: { userId, productIds }, 
  };

  return theServiceResponse;
}

export default {
  findAll,
  create,
};