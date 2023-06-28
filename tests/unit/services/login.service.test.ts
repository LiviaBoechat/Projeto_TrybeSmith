import bcrypt from 'bcryptjs';
import jwtUtil from '../../../src/utils/jwt.util';
import { expect } from 'chai';
import sinon from 'sinon';
import UserModel from '../../../src/database/models/user.model';
import userController from '../../../src/controllers/user.controller';
import userService from '../../../src/services/user.service';
import { ServiceResponseError, ServiceResponseSuccess } from '../../../src/types/ServiceResponse';

describe('LoginService', function () {
  beforeEach(function () { sinon.restore(); });
  it('Testa se responde success qd login é feito', async function () {
    // Arrange
    const login = {
      username: 'livia',
      password: 'password',
    };

    const foundUser = {
      dataValues: {
        id: 1,
        username: 'Livia',
        password: bcrypt.hashSync('password', 10),
      },
    };

    type TokenTypeMock = { token: string };

    const expectedToken = 'expected_token';

    const mockLoginReturn = UserModel.build(foundUser as any);
    sinon.stub(UserModel, 'findOne').resolves(mockLoginReturn);
    sinon.stub(bcrypt, 'compareSync').returns(true);
    sinon.stub(jwtUtil, 'sign').returns(expectedToken);

    // Act
    const result = (await userService.verifyLogin(login)) as ServiceResponseSuccess<TokenTypeMock>;

    // Assert
    expect(result.status).to.equal('SUCCESSFUL');
    expect(result.data.token).to.equal(expectedToken);
  });

  it('Testa se responde com erro quando login falha', async function () {
    // Arrange
    const login = {
      username: 'livia',
      password: 'password',
    };
    
    sinon.stub(UserModel, 'findOne').resolves(null);
    sinon.stub(bcrypt, 'compareSync').returns(false);

    // Act
    const result = (await userService.verifyLogin(login)) as ServiceResponseError;

    // Assert
    expect(result.status).to.equal('UNAUTHORIZED');
    expect(result.data.message).to.equal('Username or password invalid');
  });

  it('Testa se retorna erro qd username e password não são passados', async function () {
    // Arrange
    const login = {
      username: '',
      password: 'password',
    };
    
    // Act
    const result = (await userService.verifyLogin(login)) as ServiceResponseError;

    // Assert
    expect(result.status).to.equal('INVALID_DATA');
    expect(result.data.message).to.equal('"username" and "password" are required');
  });

});
