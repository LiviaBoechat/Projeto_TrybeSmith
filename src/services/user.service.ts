import bcrypt from 'bcryptjs';
import UserModel from '../database/models/user.model';
import { ServiceResponse, ServiceResponseError } from '../types/ServiceResponse';
import jwtUtil from '../utils/jwt.util';
import { Token } from '../types/Token';
import { Login } from '../types/Login';

async function verifyLogin(login: Login)
  : Promise<ServiceResponse<Token> | ServiceResponseError> {
  if (!login.username || !login.password) {
    return { status: 'INVALID_DATA', data: { message: '"username" and "password" are required' } };
  }
  
  const foundUser = await UserModel.findOne({ where: { username: login.username } });

  if (!foundUser || !bcrypt.compareSync(login.password, foundUser.dataValues.password)) {
    return { status: 'UNAUTHORIZED', data: { message: 'Username or password invalid' } };
  }

  const { id, username } = foundUser.dataValues;

  const token = jwtUtil.sign({ id, username });
  
  return { status: 'SUCCESSFUL', data: { token } };
}

export default {
  verifyLogin,
};
