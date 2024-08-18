'use strict';
import cors from 'cors';
import express, { json, urlencoded } from 'express';
import './db/connect.js';
import Book from './models/Book.js';
import compression from 'compression';
import morgan from 'morgan';
import router from './routes/index.js';
const app = express();
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cors());
app.use(compression());
app.use(morgan('dev'));
app.use('/api/v1', router);
app.listen(8888, () => {
  console.log(`Listen on port 8888`);
});
