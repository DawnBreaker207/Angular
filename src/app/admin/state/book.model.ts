export interface Book {
  _id?: string;
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
