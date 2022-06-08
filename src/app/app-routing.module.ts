import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ExplorePageComponent } from './explore-page/explore-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'explore', component:ExplorePageComponent },
  { path: 'pages', component:PagesComponent },
  { path: 'contact', component:ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
