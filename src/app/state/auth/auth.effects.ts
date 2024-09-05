import { AuthService } from '@/base/services/auth.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { throwError } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { AuthActions } from './auth.actions';

@Injectable()
export class AuthEffects {
  register$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.loadRegister),
      switchMap(({ user }) =>
        this.authService.Register(user).pipe(
          map((user) => AuthActions.registerSuccess({ user: user })),
          catchError(() => throwError(() => new Error('Something was wrong'))),
        ),
      ),
    );
  });
  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.loadLogin),
      switchMap(({ email, password }) =>
        this.authService.Login({ email, password }).pipe(
          map(({ user, token }) =>
            AuthActions.loginSuccess({ user: user, token: token }),
          ),
          catchError(() => throwError(() => new Error('Something was wrong'))),
        ),
      ),
    );
  });

  constructor(
    private actions$: Actions,
    private authService: AuthService,
  ) {}
}
