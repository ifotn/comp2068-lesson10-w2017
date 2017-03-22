import { Component } from '@angular/core';

// define a book class
export class Book {
  id: number;
  title: string;
  author: string;
}

// set up an array of books
const BOOKS: Book[] = [
  { id: 100, title: 'Bit Rot', author: 'Douglas Coupland' },
  { id: 101, title: 'Heroes of the Frontier', author: 'Dave Eggers' },
  { id: 102, title: 'Gone Girl', author: 'Gillian Flynn' }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {
  title = 'Angular Book List';
  message = 'Our first Angular Books';
  books = BOOKS;

  /*book: Book = {
    id: 100,
    title: 'Bit Rot',
    author: 'Douglas Coupland'
  }*/
}
