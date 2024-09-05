import { Router } from 'express';
import { CategoryController } from '../controllers/Category';

const routeCategory = Router();
const categoryController = new CategoryController();

routeCategory.get('/', categoryController.GetAll);
routeCategory.get('/:id', categoryController.GetOne);
routeCategory.post('', categoryController.Create);
routeCategory.put('/:id', categoryController.Update);
routeCategory.delete('/:id', categoryController.Delete);
export default routeCategory;
