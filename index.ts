import express from 'express';
import cors from 'cors';
import { BookController } from './controller/controllerBook';

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

const bookController = new BookController();

app.get('/books', bookController.getBooks.bind(bookController));
app.get('/books/:id', bookController.getBookById.bind(bookController));
app.post('/books', bookController.createBook.bind(bookController));
app.put('/books/:id', bookController.updateBook.bind(bookController));
app.delete('/books/:id', bookController.deleteBook.bind(bookController));

app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
})
