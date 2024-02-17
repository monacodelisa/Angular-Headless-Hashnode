import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DemosComponent } from './components/demos/demos.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'demos', component: DemosComponent },
  // { path: 'about', component: AboutComponent },
  // { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full'},
];
