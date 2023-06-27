import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';
import productModel from '../../../src/database/models/product.model';
import productsMock from '../../mocks/productsMock';

chai.use(chaiHttp);

describe('POST /products', function () { 
  afterEach(function () { sinon.restore(); });

  it('Testa se rota post /products funciona', async function () {
    // Arrange (mock)
    const httpRequestBody = productsMock.reqBodyMock;
    const mockCreateReturn = productModel.build(productsMock.dbResponseMock);
    sinon.stub(productModel, 'create').resolves(mockCreateReturn);
    // Act
    const httpResponse = await chai.request(app).post('/products').send(httpRequestBody);
    // Assert
    expect(httpResponse.status).to.equal(201);
    expect(httpResponse.body).to.be.deep.equal(productsMock.realDbResponseMock);
  });
});
