import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routes } from './app.router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';

import { AuthModule } from './auth/auth.module';
import { OidcSecurityService } from './auth/services/oidc.security.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UnauthorizedComponent,
    ForbiddenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes,
    AuthModule.forRoot()
  ],
  providers: [OidcSecurityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
