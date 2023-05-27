import express from 'express';
import cors from 'cors';
import { BookController } from './controller/controllerBook';

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

const bookController = new BookController();

