import { expect } from 'chai';
import sinon from 'sinon';
import productModel from '../../../src/database/models/product.model';
import productService from '../../../src/services/product.service';
import productsMock from '../../mocks/productsMock';

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
 
});
