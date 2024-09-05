
import { UserType } from '../../interfaces/User';


declare global {
  namespace Express {
    interface Request {
      user?: UserType;
    }
  }
}
