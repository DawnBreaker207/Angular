import { Book } from '@/base/interfaces/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-book',
  templateUrl: './card-book.component.html',
  styleUrl: './card-book.component.scss',
})
export class CardBookComponent {
  @Input() bookData: Book = {} as Book;
}
