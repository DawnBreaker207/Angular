import { Book } from '@/base/interfaces/common';
import { createAction, props } from '@ngrx/store';

export const storeKey = 'bookKey';

export const GetBooks = createAction(`[${storeKey}] Load Book`);

export const GetBooksSuccess = createAction(
  `[${storeKey}] Load Book Success`,
  props<{ books: Book[] }>(),
);

export const AddBook = createAction(
  `[${storeKey}] Create Book`,
  props<{ book: Book }>(),
);
export const AddBookSuccess = createAction(
  `[${storeKey}] Create Book Success`,
  props<{ book: Book }>(),
);

export const UpdateBook = createAction(
  `[${storeKey}] Update Book `,
  props<{ book: Book }>(),
);
export const UpdateBookSuccess = createAction(
  `[${storeKey}] Update Book Success`,
  props<{ book: Book }>(),
);
export const DeleteBook = createAction(
  `[${storeKey}] Delete Book`,
  props<{ bookId: string }>(),
);
export const DeleteBookSuccess = createAction(
  `[${storeKey}] Delete Book Success`,
  props<{ bookId: string }>(),
);
