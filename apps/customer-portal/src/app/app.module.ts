import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';
import { authRoutes, AuthModule } from '@demo-app/auth';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuard } from '@demo-app/auth';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NxModule.forRoot(),
    RouterModule.forRoot(
      [
        { path: '', pathMatch: 'full', redirectTo: 'user-profile' },
        { path: 'auth', children: authRoutes },
        {
          path: 'user-profile',
          loadChildren: '@demo-app/user-profile#UserProfileModule',
          canActivate: [AuthGuard]
        }
      ],
      {
        initialNavigation: 'enabled'
      }
    ),
    AuthModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
