import { Action } from '@ngrx/store';
import { User, Authenticate } from '@demo-app/data-models';

export enum AuthStateActionTypes {
  Login = '[Login Page] Login',
  LoginSuccess = '[Auth API] Login Success',
  LoginFail = '[Auth API] Login Fail',
  NavigateToProfile = '[Login Page] Navigate To Profile'
}

export class LoginAction implements Action {
  readonly type = AuthStateActionTypes.Login;
  constructor(public payload: Authenticate) {}
}

export class LoginSuccessAction implements Action {
  readonly type = AuthStateActionTypes.LoginSuccess;
  constructor(public payload: User) {}
}

export class LoginFailAction implements Action {
  readonly type = AuthStateActionTypes.LoginFail;
  constructor(public payload) {}
}

export class NavigateToProfileAction implements Action {
  readonly type = AuthStateActionTypes.NavigateToProfile;
  constructor(public payload: number) {}
}

export type AuthStateActions =
  | LoginAction
  | LoginFailAction
  | LoginSuccessAction
  | NavigateToProfileAction;
