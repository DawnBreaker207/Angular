import { Component, Input } from '@angular/core';
import { Book } from '../../../../admin/state/book.model';

@Component({
  selector: 'card-book',
  templateUrl: './card-book.component.html',
  styleUrl: './card-book.component.scss',
})
export class CardBookComponent {
  @Input() bookData: Book = {} as Book;
}
