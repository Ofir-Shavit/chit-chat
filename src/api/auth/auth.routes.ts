import { Router } from 'express';
import authController from './auth.controller';

const authRouter = Router();

authRouter.use('login', authController.login);

export default authRouter;
