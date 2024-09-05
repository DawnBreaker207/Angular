import { User } from '@/base/interfaces/common';
import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const AuthActions = createActionGroup({
  source: 'Auth',
  events: {
    'Load Register': props<{ user: User }>(),
    'Register Success': props<{ user: User }>(),
    'Load Login': props<{ email: string; password: string }>(),
    'Login Success': props<{ user: User; token: string }>(),
    'Load Logout': emptyProps(),
    'Logout Success': props<{ data: unknown }>(),
  },
});
