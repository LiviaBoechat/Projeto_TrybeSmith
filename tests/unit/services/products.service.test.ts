import { expect } from 'chai';
import sinon from 'sinon';
import productModel, { ProductSequelizeModel } from '../../../src/database/models/product.model';
import productService from '../../../src/services/product.service';
import productsMock from '../../mocks/productsMock';
import { Product } from '../../../src/types/Product';

describe('ProductsService', function () {
  afterEach(function () { sinon.restore(); });

  it('Testa se a rota post /products responde corretamente', async function () {
    // Arrange (mock)
    const paramters = productsMock.reqBodyMock;
    const mockCreateReturn = productModel.build(productsMock.dbResponseMock);
    sinon.stub(productModel, 'create').resolves(mockCreateReturn);
    // Act
    const response = await productService.create(paramters);
    // Assert
    expect(response.data).to.be.deep.equal(productsMock.realDbResponseMock);
  });

  it('Testa se a rota get /products responde corretamente', async function () {
    // Arrange (mock)
    const paramters = productsMock.reqBodyMock;
    const mockFindAllReturn = productModel.build(productsMock.allProductsMock as unknown as Product);
    sinon.stub(productModel, 'findAll').resolves(productsMock.allProductsMock as unknown as [ProductSequelizeModel]);
    // Act
    const response = await productService.findAll();
    // Assert
    expect(response.data).to.be.deep.equal(productsMock.allProductsMock);
  });
 
});
