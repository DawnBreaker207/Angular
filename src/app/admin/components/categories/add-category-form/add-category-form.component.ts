import { Category } from '@/base/interfaces/common';
import { removeLeadingSpace } from '@/base/validators/validators';
import { CategoryActions } from '@/state/category/category.actions';

import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-add-category-form',
  templateUrl: './add-category-form.component.html',
  styleUrl: './add-category-form.component.scss',
})
export class AddCategoryFormComponent {
  constructor(
    private store: Store,
    private router: Router,
  ) {}
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

  getFormControl(name: string): FormControl {
    return this.categoryForm.get(name) as FormControl;
  }
  onSubmit() {
    if (this.categoryForm.valid) {
      const category: Category = this.categoryForm.value as Category;
      this.store.dispatch(CategoryActions.createCategory({ category }));
      this.router.navigate(['/admin/categories']);
    }
  }
}
