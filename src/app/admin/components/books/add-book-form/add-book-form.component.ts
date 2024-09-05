import { Book } from '@/base/interfaces/common';
import {
  fourDigitValidator,
  removeLeadingSpace,
  removeLeadingZero,
} from '@/base/validators/validators';
import { AddBook } from '@/state/book/book.action';

import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-add-book-form',
  templateUrl: './add-book-form.component.html',
  styleUrl: './add-book-form.component.scss',
})
export class AddBookFormComponent {
  constructor(
    private store: Store,
    private router: Router,
  ) {}
  bookForm = new FormGroup({
    title: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      removeLeadingSpace(),
    ]),
    author: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      removeLeadingSpace(),
    ]),
    public_year: new FormControl(0, [
      Validators.required,
      removeLeadingSpace(),
      removeLeadingZero(),
      fourDigitValidator(4),
    ]),
    description: new FormControl('', [removeLeadingSpace()]),
    thumbnail: new FormControl('', [removeLeadingSpace()]),
  });

  getFormControl(name: string): FormControl {
    return this.bookForm.get(name) as FormControl;
  }
  onSubmit() {
    if (this.bookForm.valid) {
      const book: Book = this.bookForm.value as Book;
      this.store.dispatch(AddBook({ book }));
      this.router.navigate(['/admin/books']);
    }
  }
}
