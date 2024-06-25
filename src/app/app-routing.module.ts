import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EverestComponent } from './everest/everest.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' }, // Default route
  { path: 'everest', component: EverestComponent },
  { path: 'landing', component: LandingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
