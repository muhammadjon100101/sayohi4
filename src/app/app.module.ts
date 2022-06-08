import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ExplorePageComponent } from './explore-page/explore-page.component'; 
import { PagesComponent } from './pages/pages.component';
import { ContactComponent } from './contact/contact.component'; 
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    ExplorePageComponent, 
    PagesComponent, 
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
