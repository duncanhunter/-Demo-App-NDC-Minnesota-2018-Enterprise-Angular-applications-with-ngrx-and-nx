import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './containers/login/login.component';
import { AuthService } from './services/auth/auth.service';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { MaterialModule } from '@demo-app/material';
import { ReactiveFormsModule } from '@angular/forms';

export const authRoutes: Route[] = [
  { path: 'login', component: LoginComponent }
];
const COMPONENTS = [LoginComponent, LoginFormComponent];

@NgModule({
  imports: [CommonModule, RouterModule, HttpClientModule, MaterialModule, ReactiveFormsModule],
  declarations: [COMPONENTS],
  exports: [COMPONENTS],
  providers: [AuthService]
})
export class AuthModule {}
