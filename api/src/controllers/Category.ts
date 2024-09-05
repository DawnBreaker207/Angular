import { RequestHandler } from 'express';
import Category from '../models/Category';

export class CategoryController {
  GetAll: RequestHandler = async (req, res) => {
    try {
      const data = await Category.find();
      res.status(200).json({
        res: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
  GetOne: RequestHandler = async (req, res) => {
    try {
      const data = await Category.findById(req.params.id);
      res.status(200).json({
        res: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
  Create: RequestHandler = async (req, res) => {
    try {
      const data = await Category.create(req.body);
      res.status(200).json({
        res: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
  Update: RequestHandler = async (req, res) => {
    try {
      const data = await Category.findByIdAndUpdate(req.params.id, req.body);
      res.status(200).json({
        res: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
  Delete: RequestHandler = async (req, res) => {
    try {
      const data = await Category.findByIdAndDelete(req.params.id);
      res.status(200).json({
        res: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
