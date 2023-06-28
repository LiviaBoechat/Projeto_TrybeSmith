import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import { OrderSequelizeModel } from '../../../src/database/models/order.model';
import orderService from '../../../src/services/order.service';
import orderController from '../../../src/controllers/order.controller';
import { Order } from '../../../src/types/Order';
import { ServiceResponse } from '../../../src/types/ServiceResponse';
chai.use(sinonChai);

describe('OrdersController', function () {
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });
  it('Testa se a rota get /order responde corretamente', async function () {
    // Arrange Mock
    const dbOrderResponseMock = {
      id: 2,
      userId: 3,
      productIds: [4, 3]
    };

    const serviceResponse: ServiceResponse<OrderSequelizeModel[]> = {
      status: 'SUCCESSFUL',
      data: [dbOrderResponseMock] as any,
    }
    sinon.stub(orderService, 'findAll').resolves(serviceResponse as any);
    // Act
    await orderController.findAll(req, res);
    // Assert
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith([dbOrderResponseMock]);
  });
});
