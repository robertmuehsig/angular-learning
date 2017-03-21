import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TemplatelistComponent } from './templatelist/templatelist.component';
import { TemplatedetailsComponent } from './templatedetails/templatedetails.component';
import { AuthComponent } from './auth/auth.component';

export const router: Routes = [
    { path: '', redirectTo: 'templates', pathMatch: 'full' },
    { path: 'templates', component: TemplatelistComponent },
    { path: 'template', component: TemplatedetailsComponent },
    { path: 'auth', component: AuthComponent },
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);