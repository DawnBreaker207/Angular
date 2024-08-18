import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Book, BookState } from '../../../admin/state/book.model';
import { selectedAllBook } from '../../../admin/state/book.selector';
import { GetBooks } from '../../../admin/state/book.action';

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
