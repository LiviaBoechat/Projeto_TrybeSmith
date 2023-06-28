import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';
import productModel from '../../../src/database/models/product.model';
import productsMock from '../../mocks/productsMock';

chai.use(chaiHttp);

describe('GET /products', function () { 
  beforeEach(function () { sinon.restore(); });
  
  // it('Testa se rota post /products funciona', async function () {
  //   // Arrange (mock)
  //   const httpRequestBody = productsMock.reqBodyMock;
  //   const mockFindAllReturn = productModel.build(productsMock.allProductsMock);
  //   sinon.stub(productModel, 'findAll').resolves(mockFindAllReturn);
  //   // Act
  //   const httpResponse = await chai.request(app).post('/products').send(httpRequestBody);
  //   // Assert
  //   expect(httpResponse.status).to.equal(201);
  //   expect(httpResponse.body).to.be.deep.equal(productsMock.realDbResponseMock);
  // });
});
