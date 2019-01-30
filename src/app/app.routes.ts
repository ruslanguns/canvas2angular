import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { ModuleWithProviders } from '@angular/core';

/**
 * {
    path: '',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'about',
    loadChildren: './about/about.module#AboutModule'
  },
 */

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', component: PagenotfoundComponent }
];


export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES, { useHash: true});
