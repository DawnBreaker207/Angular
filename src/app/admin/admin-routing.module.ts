import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookFormComponent } from './components/books/add-book-form/add-book-form.component';
import { BookListComponent } from './components/books/book-list/book-list.component';
import { EditBookFormComponent } from './components/books/edit-book-form/edit-book-form.component';
import { CategoryListComponent } from './components/categories/category-list/category-list.component';
import { AddCategoryFormComponent } from './components/categories/add-category-form/add-category-form.component';
import { EditCategoryFormComponent } from './components/categories/edit-category-form/edit-category-form.component';

const routes: Routes = [
  {
    path: 'books',
    children: [
      { path: '', component: BookListComponent },
      { path: 'add', component: AddBookFormComponent },
      { path: 'edit/:id', component: EditBookFormComponent },
    ],
  },
  {
    path: 'categories',
    children: [
      { path: '', component: CategoryListComponent },
      { path: 'add', component: AddCategoryFormComponent },
      { path: 'edit/:id', component: EditCategoryFormComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
