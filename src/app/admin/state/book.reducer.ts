import { createReducer, on } from '@ngrx/store';
import {
  AddBookSuccess,
  DeleteBookSuccess,
  GetBooksSuccess,
  UpdateBook,
} from './book.action';
import { BookState } from './book.model';

export const initialState: BookState = {
  books: [],
  selectedBook: null,
};

export const bookReducer = createReducer(
  initialState,

  on(GetBooksSuccess, (state, { books }) => {
    return { ...state, books };
  }),

  on(AddBookSuccess, (state, { book }) => {
    return {
      ...state,
      books: [...state.books, book],
    };
  }),
  on(UpdateBook, (state, { book }) => {
    return {
      ...state,
      books: state.books.map((books) =>
        books._id === book._id ? book : books
      ),
    };
  }),
  on(DeleteBookSuccess, (state, { bookId }) => {
    return {
      ...state,
      books: state.books.filter((book) => book._id !== bookId),
    };
  })
);
