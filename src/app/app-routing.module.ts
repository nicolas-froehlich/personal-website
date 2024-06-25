import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EverestComponent } from './everest/everest.component';

const routes: Routes = [
  { path: '', redirectTo: '/everest', pathMatch: 'full' }, // Default route
  { path: 'everest', component: EverestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
