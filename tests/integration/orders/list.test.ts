import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';
import OrderModel from '../../../src/database/models/order.model';

chai.use(chaiHttp);

describe('GET /orders', function () { 
  beforeEach(function () { sinon.restore(); });

  //   it('Testa se rota post /order funciona', async function () {
  //   // Arrange (mock)
  //   const dbOrderResponseMock = {
  //     id: 2,
  //     userId: 3,
  //     productIds: [4, 3]
  //   };
   
  //   const mockFindAllReturn = OrderModel.build(dbOrderResponseMock);
  //   sinon.stub(OrderModel, 'findAll').resolves([mockFindAllReturn]);
  //   // Act
  //   const httpResponse = await chai.request(app).post('/orders');
  //   // Assert
  //   expect(httpResponse.status).to.equal(200);
  //   expect(httpResponse.body).to.be.deep.equal([dbOrderResponseMock]);
  // });
});
