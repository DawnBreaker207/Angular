import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCategory from './category.reducer';
import { CategoryState } from '@/base/interfaces/common';

export const selectCategoryState = createFeatureSelector<CategoryState>(
  fromCategory.categoryFeatureKey,
);

export const loadAllCategory = createSelector(
  selectCategoryState,
  (state: CategoryState) => {
    return state.category;
  },
);

export const selectedById = (categoryId: string) =>
  createSelector(
    selectCategoryState,
    (state: CategoryState) =>
      state.category.find((category) => category._id === categoryId) || null,
  );
