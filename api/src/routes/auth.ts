import { Router } from 'express';

import UserController from '../controllers/User';

const routeAuth = Router();
const authController = new UserController();

routeAuth.post('/register', authController.Register);
routeAuth.post('/login', authController.Login);

export default routeAuth;
