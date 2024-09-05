import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, throwError } from 'rxjs';

import { BooksService } from '@/admin/services/Book/books.service';
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

@Injectable()
export class BookEffect {
  constructor(
    private actions: Actions,
    private bookService: BooksService,
  ) {}

  loadAllBooks$ = createEffect(() =>
    this.actions.pipe(
      ofType(GetBooks),
      switchMap(() => {
        return this.bookService.getAll().pipe(
          map((books) => GetBooksSuccess({ books })),
          catchError((error) => {
            console.log(`Error ${error}`);
            return throwError(() => new Error('Something went wrong'));
          }),
        );
      }),
    ),
  );

  addBook = createEffect(() =>
    this.actions.pipe(
      ofType(AddBook),
      switchMap(({ book }) => {
        return this.bookService.create(book).pipe(
          map((createBook) => AddBookSuccess({ book: createBook })),
          catchError((error) => {
            console.log(`Error ${error}`);
            return throwError(() => new Error('Something went wrong'));
          }),
        );
      }),
    ),
  );

  updateBook = createEffect(() =>
    this.actions.pipe(
      ofType(UpdateBook),
      switchMap(({ book }) => {
        return this.bookService.update(book).pipe(
          map((updateBook) => UpdateBookSuccess({ book: updateBook })),
          catchError((error) => {
            console.log(`Error ${error}`);
            return throwError(() => new Error('Something went wrong'));
          }),
        );
      }),
    ),
  );
  deleteBook = createEffect(() =>
    this.actions.pipe(
      ofType(DeleteBook),
      switchMap(({ bookId }) => {
        return this.bookService.delete(bookId).pipe(
          map(() => DeleteBookSuccess({ bookId })),
          catchError((error) => {
            console.log(`Error ${error}`);
            return throwError(() => new Error('Something went wrong'));
          }),
        );
      }),
    ),
  );
}
