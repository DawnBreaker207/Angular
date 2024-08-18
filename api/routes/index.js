import { Router } from 'express';
import routeBook from './book.js';
import routeCategory from './category.js';

const router = Router();

router.use('/books', routeBook);
router.use('/category', routeCategory);

export default router;
