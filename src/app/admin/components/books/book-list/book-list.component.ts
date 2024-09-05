import { BookHeader } from '@/assets/mock/mock-table';
import { Book, BookState } from '@/base/interfaces/common';
import { DeleteBook, GetBooks } from '@/state/book/book.action';
import { selectedAllBook } from '@/state/book/book.selector';
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss',
})
export class BookListComponent implements OnInit {
  bookHeader = BookHeader;
  books$: Observable<Book[]>;
  paginates$: BehaviorSubject<Book[]> = new BehaviorSubject<Book[]>([]);
  currentPage: number = 1;
  itemPerPage: number = 10;
  totalItems: number = 0;
  path: string = '/admin/books/edit/';
  id$: Observable<Book | undefined> = new Observable<Book | undefined>();
  constructor(private store: Store<{ book: BookState }>) {
    this.books$ = this.store.pipe(select(selectedAllBook));
  }
  get totalPages(): number {
    return Math.ceil(this.totalItems / this.itemPerPage);
  }
  ngOnInit(): void {
    this.store.dispatch(GetBooks());

    this.books$.subscribe((books) => {
      this.totalItems = books.length;
      this.updatePagination(books);
    });
  }
  updatePagination(books: Book[]) {
    const start = (this.currentPage - 1) * this.itemPerPage;
    const end = start + this.itemPerPage;
    this.paginates$.next(books.slice(start, end));
  }
  onPageChange(page: number) {
    this.currentPage = page;
    this.books$.subscribe((books) => this.updatePagination(books));
  }
  onDel(bookId: string): void {
    this.store.dispatch(DeleteBook({ bookId }));
  }
}
