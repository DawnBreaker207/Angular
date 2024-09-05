import { Book, BookState } from '@/base/interfaces/common';
import { GetBooks } from '@/state/book/book.action';

import { selectedAllBook } from '@/state/book/book.selector';
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrl: './list-book.component.scss',
})
export class ListBookComponent implements OnInit {
  books$: Observable<Book[]>;
  constructor(private store: Store<{ book: BookState }>) {
    this.books$ = this.store.pipe(select(selectedAllBook));
  }
  ngOnInit(): void {
    this.store.dispatch(GetBooks());
  }
}
