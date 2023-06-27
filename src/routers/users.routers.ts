import { Router } from 'express';
import usersController from '../controllers/user.controller';

const usersRouter = Router();

usersRouter.post('/login', usersController.create);

export default usersRouter;