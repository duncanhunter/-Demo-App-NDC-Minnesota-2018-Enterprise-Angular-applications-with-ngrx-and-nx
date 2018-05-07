import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { map, catchError, tap, mergeMap } from 'rxjs/operators';
import { DataPersistence } from '@nrwl/nx';
import { Router } from '@angular/router';

import { AuthService } from './../services/auth/auth.service';
import { User } from '@demo-app/data-models';
import { AuthData } from './auth.reducer';
import * as authActions from './auth.actions';

@Injectable()
export class AuthEffects {
  @Effect()
  login$ = this.dataPersistence.fetch(authActions.AuthStateActionTypes.Login, {
    run: (action: authActions.LoginAction, state: AuthData) => {
      return this.authService
        .login(action.payload)
        .pipe(
          mergeMap((user: User) => [
            new authActions.LoginSuccessAction(user),
            new authActions.NavigateToProfileAction(user.id)
          ])
        );
    },

    onError: (action: authActions.LoginAction, error) => {
      return of(new authActions.LoginFailAction(error));
    }
  });

  @Effect({ dispatch: false })
  navigateToProfile = this.actions
    .ofType(authActions.AuthStateActionTypes.NavigateToProfile)
    .pipe(
      map((action: authActions.NavigateToProfileAction) =>
        this.router.navigate([`/user-profile/${action.payload}`])
      )
    );

  constructor(
    private actions: Actions,
    private dataPersistence: DataPersistence<AuthData>,
    private authService: AuthService,
    private router: Router
  ) {}
}
