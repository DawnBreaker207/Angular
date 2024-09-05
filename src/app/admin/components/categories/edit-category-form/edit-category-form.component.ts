import { BaseComponent } from '@/base/base.component';
import { Category } from '@/base/interfaces/common';
import { UnsubscribeService } from '@/base/services/unsubscribe.service';
import { removeLeadingSpace } from '@/base/validators/validators';
import { CategoryActions } from '@/state/category/category.actions';

import { selectedById } from '@/state/category/category.selectors';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { filter, Observable } from 'rxjs';

@Component({
  selector: 'app-edit-category-form',
  templateUrl: './edit-category-form.component.html',
  styleUrl: './edit-category-form.component.scss',
})
export class EditCategoryFormComponent extends BaseComponent implements OnInit {
  category$: Observable<Category | null> = new Observable<Category | null>();
  categoryForm = new FormGroup({
    title: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      removeLeadingSpace(),
    ]),
    slug: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      removeLeadingSpace(),
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
    const categoryId = this.paramValue;
    if (categoryId) {
      this.category$ = this.store.pipe(select(selectedById(categoryId)));
      this.category$
        .pipe(filter((res): res is Category => !!res))
        .subscribe((book) => {
          this.categoryForm.setValue({
            title: book.title,
            slug: book.slug,
            description: book.description,
            thumbnail: book.thumbnail,
          });
        });
    }
  }
  getFormControl(name: string): FormControl {
    return this.categoryForm.get(name) as FormControl;
  }
  onSubmit() {
    if (this.categoryForm.valid) {
      const category: Category = {
        _id: this.paramValue as string,
        ...(this.categoryForm.value as Category),
      };
      this.store.dispatch(CategoryActions.updateCategory({ category }));
      this.router.navigate(['/admin/categories']);
    }
  }
}
