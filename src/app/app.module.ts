import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ExplorePageComponent } from './explore-page/explore-page.component';  
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    ExplorePageComponent, 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
