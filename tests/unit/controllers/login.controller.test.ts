import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import userService from '../../../src/services/user.service';
import userController from '../../../src/controllers/user.controller';
import mapStatusHTTP from '../../../src/utils/mapStatusHTTP';


chai.use(sinonChai);

describe('LoginController', function () {
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });

  it('Testa se retorna token qd login é feito', async function () {
    // Arrange
    const requestBody = {};
    const serviceResponse = {
      status: 'SUCCESSFUL',
      data: {},
    };
    sinon.stub(userService, 'verifyLogin').resolves(serviceResponse as any);
    // Act
    await userController.verifyLogin(req, res);
    // Assert
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(serviceResponse.data);
  });

  it('Testa se responde erro qd validação do login falha', async function () {
    // Arrange
    const requestBody = {};
    const serviceResponse = {
      status: 'ERROR',
      data: {},
    };
    sinon.stub(userService, 'verifyLogin').resolves(serviceResponse as any);
    const expectedStatus = mapStatusHTTP(serviceResponse.status);
    // Act
    await userController.verifyLogin(req, res);
    // Assert
    expect(res.status).to.have.been.calledWith(expectedStatus);
    expect(res.json).to.have.been.calledWith(serviceResponse.data);
  });
});
