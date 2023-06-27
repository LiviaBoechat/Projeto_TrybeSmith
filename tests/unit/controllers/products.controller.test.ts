import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import productService from '../../../src/services/product.service';
import productController from '../../../src/controllers/product.controller';
import productsMock from '../../mocks/productsMock';
import { Product } from '../../../src/types/Product';
import { ServiceResponse } from '../../../src/types/ServiceResponse';

chai.use(sinonChai);

describe('ProductsController', function () {
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
  });

  afterEach(function () {
    sinon.restore();
  });


  it('Testa se a rota post /products responde corretamente', async function () {
    // Arrange Mock
    type DBProductReponse = {
      id: number;
      name: string
      price: string;
    };
    
    req.body = productsMock.reqBodyMock;
    const serviceResponse: ServiceResponse<DBProductReponse> = {
      status: 'SUCCESSFUL',
      data: productsMock.realDbResponseMock,
    }
    sinon.stub(productService, 'create').resolves(serviceResponse);
    // Act
    await productController.create(req, res);
    // Assert
    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith(productsMock.realDbResponseMock);
  });

});
