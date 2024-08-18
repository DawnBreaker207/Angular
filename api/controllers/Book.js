import Book from '../models/Book.js';

export class BookController {
  GetAll = async (req, res) => {
    try {
      const data = await Book.find();
      res.status(200).json({
        res: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
  GetOne = async (req, res) => {
    try {
      const data = await Book.findById(req.params.id);
      res.status(200).json({
        res: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
  Create = async (req, res) => {
    try {
      const data = await Book.create(req.body);
      res.status(200).json({
        res: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
  Update = async (req, res) => {
    try {
      const data = await Book.findByIdAndUpdate(req.params.id, req.body);
      res.status(200).json({
        res: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
  Delete = async (req, res) => {
    try {
      const data = await Book.findByIdAndDelete(req.params.id);
      res.status(200).json({
        res: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
