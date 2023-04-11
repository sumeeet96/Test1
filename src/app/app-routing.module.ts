import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Home component route
  { path: 'about', component: AboutComponent }, // About component route
  { path: 'services', component:ServicesComponent}, // Services component route
  { path: 'contact', component:ContactComponent}, // Contact component route

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
