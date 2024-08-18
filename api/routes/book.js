import { Router } from 'express';
import { BookController } from '../controllers/Book.js';

const routeBook = Router();
const bookController = new BookController();

routeBook.get('/', bookController.GetAll);
routeBook.get('/:id', bookController.GetOne);
routeBook.post('', bookController.Create);
routeBook.put('/:id', bookController.Update);
routeBook.delete('/:id', bookController.Delete);
export default routeBook;
