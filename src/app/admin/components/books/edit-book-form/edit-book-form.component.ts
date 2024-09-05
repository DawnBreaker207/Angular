import { BaseComponent } from '@/base/base.component';
import { Book } from '@/base/interfaces/common';
import { UnsubscribeService } from '@/base/services/unsubscribe.service';
import {
  fourDigitValidator,
  removeLeadingSpace,
  removeLeadingZero,
} from '@/base/validators/validators';
import { UpdateBook } from '@/state/book/book.action';

import { selectedById } from '@/state/book/book.selector';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { filter, Observable } from 'rxjs';

@Component({
  selector: 'app-edit-book-form',
  templateUrl: './edit-book-form.component.html',
  styleUrl: './edit-book-form.component.scss',
})
export class EditBookFormComponent extends BaseComponent implements OnInit {
  book$: Observable<Book | null> = new Observable<Book | null>();
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
  constructor(
    private store: Store,
    route: ActivatedRoute,
    unsubscribeService: UnsubscribeService,
    private router: Router,
  ) {
    super(route, unsubscribeService);
  }

  override ngOnInit(): void {
    super.ngOnInit();
    const bookId = this.paramValue;
    if (bookId) {
      this.book$ = this.store.pipe(select(selectedById(bookId)));
      this.book$.pipe(filter((res): res is Book => !!res)).subscribe((book) => {
        this.bookForm.setValue({
          title: book.title,
          author: book.author,
          public_year: book.public_year,
          description: book.description,
          thumbnail: book.thumbnail,
        });
      });
    }
  }
  getFormControl(name: string): FormControl {
    return this.bookForm.get(name) as FormControl;
  }
  onSubmit() {
    if (this.bookForm.valid) {
      const book: Book = {
        _id: this.paramValue as string,
        ...(this.bookForm.value as Book),
      };
      this.store.dispatch(UpdateBook({ book }));
      this.router.navigate(['/admin/books']);
    }
  }
}
