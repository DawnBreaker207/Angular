import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';

import { BooksService } from './services/Book/books.service';
import { CategoriesService } from './services/Category/categories.service';

import { BookListComponent } from './components/books/book-list/book-list.component';
import { AddBookFormComponent } from './components/books/add-book-form/add-book-form.component';
import { EditBookFormComponent } from './components/books/edit-book-form/edit-book-form.component';
import { CategoryListComponent } from './components/categories/category-list/category-list.component';
import { AddCategoryFormComponent } from './components/categories/add-category-form/add-category-form.component';
import { EditCategoryFormComponent } from './components/categories/edit-category-form/edit-category-form.component';
import { BaseModule } from '@/base/base.module';

@NgModule({
  declarations: [
    AddBookFormComponent,
    EditBookFormComponent,
    BookListComponent,
    CategoryListComponent,
    AddCategoryFormComponent,
    EditCategoryFormComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BaseModule,
  ],
  providers: [BooksService, CategoriesService],
})
export class AdminModule {}
