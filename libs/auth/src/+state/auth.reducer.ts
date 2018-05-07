import { Action } from '@ngrx/store';
import { AuthStateActions, AuthStateActionTypes } from './auth.actions';
import { User } from '@demo-app/data-models';

export interface AuthData {
  user: User,
  loading: boolean
}

export interface AuthState {
  readonly auth: AuthData;
}

export const initialState: AuthData = {
  user: null,
  loading: false
};

export function authReducer(
  state: AuthData,
  action: AuthStateActions
): AuthData {
  switch (action.type) {
    case AuthStateActionTypes.Login: {
      return {
        ...state,
        loading: true
      };
    }
    case AuthStateActionTypes.LoginSuccess: {
      return {
        ...state,
        loading: false,
        user: action.payload
      };
    }
    default: {
      return state;
    }
  }
}
