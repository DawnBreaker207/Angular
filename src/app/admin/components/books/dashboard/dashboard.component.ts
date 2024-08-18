import { Component, OnInit } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { Book, BookState } from '../../../state/book.model';
import { selectedAllBook } from '../../../state/book.selector';
import { DeleteBook, GetBooks } from '../../../state/book.action';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  books$: Observable<Book[]>;
  paginates$: BehaviorSubject<Book[]> = new BehaviorSubject<Book[]>([]);
  currentPage: number = 1;
  itemPerPage: number = 10;
  totalItems: number = 0;

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
