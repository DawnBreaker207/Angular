import Category from '../models/Category.js';

export class CategoryController {
  GetAll = async (req, res) => {
    try {
      const data = await Category.find();
      res.status(200).json({
        res: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
  GetOne = async (req, res) => {
    try {
      const data = await Category.findById(req.params.id);
      res.status(200).json({
        res: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
  Create = async (req, res) => {
    try {
      const data = await Category.create(req.body);
      res.status(200).json({
        res: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
  Update = async (req, res) => {
    try {
      const data = await Category.findByIdAndUpdate(req.params.id, req.body);
      res.status(200).json({
        res: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
  Delete = async (req, res) => {
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
