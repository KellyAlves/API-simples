import { BookModel } from "../model/bookModel";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, get } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyAMNRUW6BrmOwOj4KG5skqp35GbL0S68Qg",
    authDomain: "api-book-ea715.firebaseapp.com",
    databaseURL: "https://api-book-ea715-default-rtdb.firebaseio.com",
    projectId: "api-book-ea715",
    storageBucket: "api-book-ea715.appspot.com",
    messagingSenderId: "610356094954",
    appId: "1:610356094954:web:2a06520f944b9af6977493"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const bookRef = ref(db);

export class BookService {
    public async getBooks(): Promise<BookModel[] | null> {
        try {
            const books: BookModel[] = [];
            let book: BookModel;
            const snapshot = await get(child(bookRef, 'books/'));

            if (!snapshot.exists()) {
                return null;
            }

            snapshot.forEach((childSnapshot) => {
                book = childSnapshot.val();
                books.push(book);
            });
            return books;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    public async getBookById(id: string): Promise<BookModel | null> {
        try {
            const snapshot = await get(child(bookRef, `books/${id}`));

            if (!snapshot.exists()) {
                return null;
            }

            const book: BookModel = snapshot.val();
            return book;
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}
