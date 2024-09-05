import { createFeatureSelector, createSelector } from '@ngrx/store';

import { storeKey } from './book.action';
import { BookState } from '@/base/interfaces/common';

const selectedBookState = createFeatureSelector<BookState>(`${storeKey}`);

// export const selectBook = createSelector(selectedBookState, (bookState) => {
//   return bookState.books;
// });

export const selectedAllBook = createSelector(
  selectedBookState,
  (state: BookState) => {
    return state.books;
  },
);

export const selectedById = (bookId: string) =>
  createSelector(
    selectedBookState,
    (state: BookState) =>
      state.books.find((book) => book._id === bookId) || null,
  );
