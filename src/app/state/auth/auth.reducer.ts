import { UserState } from '@/base/interfaces/common';
import { createReducer, on } from '@ngrx/store';
import { AuthActions } from './auth.actions';

export const authFeatureKey = 'authKey';

export const initialState: UserState = {
  user: null,
  token: null,
};

export const authReducer = createReducer(
  initialState,
  on(AuthActions.loadLogin, AuthActions.loadRegister, (state) => ({
    ...state,
  })),
  on(AuthActions.registerSuccess, (state, { user }) => ({
    ...state,
    user: user,
  })),
  on(AuthActions.loginSuccess, (state, { user, token }) => ({
    ...state,
    user: user,
    token: token,
  })),
);
