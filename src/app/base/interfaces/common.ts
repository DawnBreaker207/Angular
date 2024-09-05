export interface ApiResponse<T> {
  res: T;
  token: string;
}
export interface TableItem {
  _id?: string;
  [key: string]: string | number | undefined;
}

// Book
export interface Book extends TableItem {
  // _id?: string;
  title: string;
  author: string;
  public_year: number;
  description: string;
  thumbnail: string;
}
export interface BookState {
  books: Book[];
  selectedBook: Book | null;
}

// Category
export interface Category extends TableItem {
  // _id?: string;
  title: string;
  slug: string;
  description: string;
  thumbnail: string;
}
export interface CategoryState {
  category: Category[];
  selectedCategory: Category | null;
}

// User
export interface User extends TableItem {
  // _id?: string;
  name?: string;
  email: string;
  password: string;
}

export interface UserState {
  user: User | null;
  token: string | null;
}
