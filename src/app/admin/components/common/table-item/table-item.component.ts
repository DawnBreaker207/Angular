import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../../../state/book.model';

@Component({
  selector: 'table-item',
  templateUrl: './table-item.component.html',
  styleUrl: './table-item.component.scss',
})
export class TableItemComponent {
  @Input() bookData: Book = {} as Book;
  @Input() index: number = 0;
  @Output() onDel: EventEmitter<string> = new EventEmitter<string>();

  onDelete() {
    this.onDel.emit(this.bookData._id);
  }
}
