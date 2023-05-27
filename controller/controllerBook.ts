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

    public async createBook(req: Request, res: Response): Promise<Response> {
        try {
            const book: BookModel = req.body;
            const newBook: BookModel | null = await this.bookService.createBook(book);

            if (!newBook) {
                return res.status(400).json({ message: 'Book already exists' });
            }

            return res.status(201).json(newBook);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Internal server error' });
        }
    }

    public async updateBook(req: Request, res: Response): Promise<Response> {
        try {
            const book: any = req.body;
            const { id } = req.params;
            const updatedBook: BookModel | null = await this.bookService.updateBook(id, book);

            if (!updatedBook) {
                return res.status(404).json({ message: 'Book not found' });
            }

            return res.status(200).json(updatedBook);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Internal server error' });
        }
    }

    public async deleteBook(req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.params;
            const deletedBook: boolean = await this.bookService.deleteBook(id);

            if (!deletedBook) {
                return res.status(404).json({ message: 'Book not found' });
            }

            return res.status(200).json(deletedBook);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Internal server error' });
        }
    }
}