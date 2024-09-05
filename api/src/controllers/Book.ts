import { RequestHandler } from 'express';
import Book from '../models/Book';

export class BookController {
  GetAll: RequestHandler = async (req, res) => {
    try {
      const data = await Book.find();
      res.status(200).json({
        res: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
  GetOne: RequestHandler = async (req, res) => {
    try {
      const data = await Book.findById(req.params.id);
      res.status(200).json({
        res: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
  Create: RequestHandler = async (req, res) => {
    try {
      const data = await Book.create(req.body);
      res.status(200).json({
        res: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
  Update: RequestHandler = async (req, res) => {
    try {
      const data = await Book.findByIdAndUpdate(req.params.id, req.body);
      res.status(200).json({
        res: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
  Delete: RequestHandler = async (req, res) => {
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
