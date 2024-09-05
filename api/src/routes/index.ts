import { Router } from 'express';
import routeBook from './book';
import routeCategory from './category';
import routeAuth from './auth';

const router = Router();

router.use('/books', routeBook);
router.use('/categories', routeCategory);
router.use('/auth', routeAuth);

export default router;
