import { CategoryHeader } from '@/assets/mock/mock-table';
import { Category, CategoryState } from '@/base/interfaces/common';
import { CategoryActions } from '@/state/category/category.actions';

import { loadAllCategory } from '@/state/category/category.selectors';
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.scss',
})
export class CategoryListComponent implements OnInit {
  categoryHeader = CategoryHeader;
  categories$: Observable<Category[]>;
  paginates$: BehaviorSubject<Category[]> = new BehaviorSubject<Category[]>([]);
  currentPage: number = 1;
  itemPerPage: number = 10;
  totalItems: number = 0;
  path: string = '/admin/categories/edit/';
  id$: Observable<Category | undefined> = new Observable<
    Category | undefined
  >();
  constructor(private store: Store<{ category: CategoryState }>) {
    this.categories$ = this.store.pipe(select(loadAllCategory));
  }
  get totalPages(): number {
    return Math.ceil(this.totalItems / this.itemPerPage);
  }
  ngOnInit(): void {
    this.store.dispatch(CategoryActions.loadCategories());

    this.categories$.subscribe((categories) => {
      this.totalItems = categories.length;
      this.updatePagination(categories);
    });
  }
  updatePagination(categories: Category[]) {
    const start = (this.currentPage - 1) * this.itemPerPage;
    const end = start + this.itemPerPage;
    this.paginates$.next(categories.slice(start, end));
  }
  onPageChange(page: number) {
    this.currentPage = page;
    this.categories$.subscribe((categories) =>
      this.updatePagination(categories),
    );
  }
  onDel(categoryId: string): void {
    this.store.dispatch(CategoryActions.deleteCategory({ categoryId }));
  }
}
