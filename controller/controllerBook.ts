import { Request, Response } from 'express';
import { BookModel } from '../model/bookModel';
import { BookService } from '../service/serviceBook';

export class BookController {
    private bookService: BookService;

    constructor() {
        this.bookService = new BookService();
    }

    public async getBooks(req: Request, res: Response): Promise<Response> {
        try {
            const books: BookModel[] | null = await this.bookService.getBooks();

            if (!books) {
                return res.status(404).json({ message: 'Books not found' });
            }

            return res.status(200).json(books);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Internal server error' });
        }
    }

    public async getBookById(req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.params;
            const book: BookModel | null = await this.bookService.getBookById(id);

            if (!book) {
                return res.status(404).json({ message: 'Book not found' });
            }

            return res.status(200).json(book);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Internal server error' });
        }
    }
}