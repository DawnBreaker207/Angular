import { Component, EventEmitter, input, Input, Output } from '@angular/core';
import { Book } from '../../../state/book.model';
import { BehaviorSubject } from 'rxjs';

type dataHeader = {
  id: number;
  name: string;
};

@Component({
  selector: 'admin-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent {
  dataHeader: dataHeader[] = [
    { id: 1, name: 'Id' },
    { id: 2, name: 'Title' },
    { id: 3, name: 'Author' },
    { id: 4, name: 'Year' },
    { id: 5, name: 'Description' },
    { id: 6, name: 'Thumbnail' },
    { id: 7, name: 'Action' },
  ];

  @Input() currentPage: number = 1;
  @Input() itemPerPage: number = 5;
  @Input() totalItems: number = 0;
  @Input() totalPages: number = 0;
  @Input() paginates$: BehaviorSubject<Book[]> = new BehaviorSubject<Book[]>(
    []
  );
  @Output() onPageChange: EventEmitter<number> = new EventEmitter<number>();

  @Output() onDel: EventEmitter<string> = new EventEmitter<string>();
  handleDelete(bookId: string) {
    this.onDel.emit(bookId);
  }
  pageChange(page: number) {
    this.onPageChange.emit(page);
  }
}
