import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, Observable, switchMap } from 'rxjs';

import {
  AddBook,
  AddBookSuccess,
  DeleteBook,
  DeleteBookSuccess,
  GetBooks,
  GetBooksSuccess,
  UpdateBook,
  UpdateBookSuccess,
} from './book.action';
import { BooksService } from '../services/books.service';

@Injectable()
export class BookEffect {
  constructor(private actions: Actions, private bookService: BooksService) {}

  loadAllBooks$: Observable<any> = createEffect(() =>
    this.actions.pipe(
      ofType(GetBooks),
      switchMap(() => {
        return this.bookService
          .getAll()
          .pipe(map((books) => GetBooksSuccess({ books })));
      })
    )
  );

  addBook: Observable<any> = createEffect(() =>
    this.actions.pipe(
      ofType(AddBook),
      switchMap(({ book }) => {
        return this.bookService
          .create(book)
          .pipe(map((createBook) => AddBookSuccess({ book: createBook })));
      })
    )
  );

  updateBook: Observable<any> = createEffect(() =>
    this.actions.pipe(
      ofType(UpdateBook),
      switchMap(({ book }) => {
        return this.bookService
          .update(book)
          .pipe(map((updateBook) => UpdateBookSuccess({ book: updateBook })));
      })
    )
  );
  deleteBook: Observable<any> = createEffect(() =>
    this.actions.pipe(
      ofType(DeleteBook),
      switchMap(({ bookId }) => {
        return this.bookService
          .delete(bookId)
          .pipe(map(() => DeleteBookSuccess({ bookId })));
      })
    )
  );
}
