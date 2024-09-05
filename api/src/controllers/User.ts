import bcrypt from 'bcryptjs';
import { RequestHandler } from 'express';
import User from '../models/User';
import jwt from 'jsonwebtoken';
class UserController {
  Register: RequestHandler = async (req, res) => {
    try {
      const { email, password } = req.body;
      const checkEmail = await User.findOne({ email: email });
      if (checkEmail) {
        return res.status(400).json({ res: 'Email exist' });
      }
      const hashPass = await bcrypt.hash(password, 12);

      const newUser = await User.create({
        ...req.body,
        password: hashPass,
      });
      res.status(200).json({
        res: newUser,
      });
    } catch (error) {
      res.status(500).json({
        res: error,
      });
    }
  };
  Login: RequestHandler = async (req, res) => {
    try {
      const { email, password } = req.body;
      const userExist = await User.findOne({ email: email });

      if (!userExist) {
        return res.status(400).json({ res: 'Email exist' });
      }

      const comparePass = await bcrypt.compare(
        password,
        userExist.password as string,
      );
      if (!comparePass) {
        res.status(400).json({ res: 'Password not right' });
      }

      userExist.password = undefined;

      const token = jwt.sign({ _id: userExist.id }, 'SECRET_KEY', {
        expiresIn: '10d',
      });

      res.status(200).json({
        res: token,
        token: token,
      });
    } catch (error) {
      res.status(500).json({
        res: error,
      });
    }
  };
}

export default UserController;
