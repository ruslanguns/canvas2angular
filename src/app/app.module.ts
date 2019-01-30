import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './_shared/header/header.component';
import { FooterComponent } from './_shared/footer/footer.component';
import { NavbarComponent } from './_shared/navbar/navbar.component';
import { SidebarRightComponent } from './_shared/sidebar-right/sidebar-right.component';
import { SidebarLeftComponent } from './_shared/sidebar-left/sidebar-left.component';
import { HomeComponent } from './pages/home/home.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { BreadcrumbComponent } from './_shared/breadcrumb/breadcrumb.component';
import { AppRoutingModule } from './app.routes';
import { ContactoComponent } from './pages/contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    SidebarRightComponent,
    SidebarLeftComponent,
    HomeComponent,
    PagenotfoundComponent,
    BreadcrumbComponent,
    ContactoComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
