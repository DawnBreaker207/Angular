import { CategoriesService } from '@/admin/services/Category/categories.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, throwError } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { CategoryActions } from './category.actions';

@Injectable()
export class CategoryEffects {
  loadCategories$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CategoryActions.loadCategories),
      switchMap(() =>
        this.categoryServices.LoadAll().pipe(
          map((category) =>
            CategoryActions.loadCategoriesSuccess({ category: category }),
          ),
          catchError(() => EMPTY),
        ),
      ),
    );
  });
  CreateCategory = createEffect(() =>
    this.actions$.pipe(
      ofType(CategoryActions.createCategory),
      switchMap(({ category }) => {
        return this.categoryServices.Create(category).pipe(
          map((category) =>
            CategoryActions.createCategorySuccess({ category: category }),
          ),
          catchError((error) => {
            console.log(`Error ${error}`);
            return throwError(() => new Error('Something went wrong'));
          }),
        );
      }),
    ),
  );
  UpdateCategory = createEffect(() => {
    return this.actions$.pipe(
      ofType(CategoryActions.updateCategory),
      switchMap(({ category }) =>
        this.categoryServices.Update(category).pipe(
          map((category) =>
            CategoryActions.updateCategorySuccess({ category: category }),
          ),
          catchError(() => EMPTY),
        ),
      ),
    );
  });
  DeleteCategory = createEffect(() => {
    return this.actions$.pipe(
      ofType(CategoryActions.deleteCategory),
      switchMap(({ categoryId }) =>
        this.categoryServices.Delete(categoryId).pipe(
          map(() =>
            CategoryActions.deleteCategorySuccess({ categoryId: categoryId }),
          ),
          catchError(() => EMPTY),
        ),
      ),
    );
  });

  constructor(
    private actions$: Actions,
    private categoryServices: CategoriesService,
  ) {}
}
