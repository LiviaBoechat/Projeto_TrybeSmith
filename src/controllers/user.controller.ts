import { Request, Response } from 'express';
import userService from '../services/user.service';

async function create(req: Request, res: Response): Promise<void> {
  const { username, vocation, level, password } = req.body;
  const newUser = await userService.create(
    { username, vocation, level, password },
  );
  res.status(201).json(newUser);
}

export default {
  create,
};