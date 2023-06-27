import UserModel, { UserInputtableTypes } from '../database/models/user.model';

async function create(user: UserInputtableTypes): Promise<UserInputtableTypes> {
  const newUser = await UserModel.create(user);
  return newUser.dataValues;
}

export default {
  create,
};