import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { VisualsComponent } from './components/visuals/visuals.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'visuals', component: VisualsComponent },
  { path: '**', redirectTo: '' }
];
