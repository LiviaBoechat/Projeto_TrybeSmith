import { Router } from 'express';
import usersController from '../controllers/user.controller';

const usersRouter = Router();

usersRouter.post('/', usersController.verifyLogin);

export default usersRouter;