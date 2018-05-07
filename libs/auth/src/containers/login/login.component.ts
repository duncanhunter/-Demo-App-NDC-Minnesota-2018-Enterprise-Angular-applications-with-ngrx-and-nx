import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User, Authenticate } from '@demo-app/data-models';
import { Store } from '@ngrx/store';
import * as authActions from './../../+state/auth.actions';
import { AuthData } from '@demo-app/auth/src/+state/auth.reducer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private store: Store<AuthData>) {}

  ngOnInit() {}

  login(authenticate: Authenticate): void {
    this.store.dispatch(new authActions.LoginAction(authenticate));
  }
}
