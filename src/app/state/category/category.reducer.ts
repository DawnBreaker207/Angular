import { createReducer, on } from '@ngrx/store';
import { CategoryActions } from './category.actions';
import { CategoryState } from '@/base/interfaces/common';

export const categoryFeatureKey = 'categoryKey';

export const initialState: CategoryState = {
  category: [],
  selectedCategory: null,
};

export const categoryReducer = createReducer(
  initialState,
  on(CategoryActions.loadCategoriesSuccess, (state, { category }) => {
    return { ...state, category };
  }),

  on(CategoryActions.createCategorySuccess, (state, { category }) => {
    return { ...state, category: [...state.category, category] };
  }),

  on(CategoryActions.updateCategorySuccess, (state, { category }) => {
    return {
      ...state,
      category: state.category.map((categories) =>
        categories._id !== category._id ? category : categories,
      ),
    };
  }),

  on(CategoryActions.deleteCategorySuccess, (state, { categoryId }) => {
    return {
      ...state,
      category: state.category.filter(
        (categories) => categories._id !== categoryId,
      ),
    };
  }),
);
