import { Category } from '@/base/interfaces/common';
import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const CategoryActions = createActionGroup({
  source: 'Category',
  events: {
    'Load Categories': emptyProps(),
    'Load Categories Success': props<{ category: Category[] }>(),

    'Create Category': props<{ category: Category }>(),

    'Create Category Success': props<{ category: Category }>(),

    'Update Category ': props<{ category: Category }>(),
    'Update Category Success': props<{ category: Category }>(),

    'Delete Category Success': props<{ categoryId: string }>(),
    'Delete Category ': props<{ categoryId: string }>(),
  },
});
