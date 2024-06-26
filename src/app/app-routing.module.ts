import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { EverestComponent } from './everest/everest.component';
import { DeadSeaComponent } from './deadsea/deadsea.component';
import { GuelbComponent } from './guelb/guelb.component';
import { BaikalComponent } from './baikal/baikal.component';
import { PragueComponent } from './prague/prague.component';
import { QuizComponent } from './quiz/quiz.component';

const routes: Routes = [
  { path: '', redirectTo: '/landing', pathMatch: 'full' }, // Default route
  { path: 'landing', component: LandingComponent },
  { path: 'everest', component: EverestComponent },
  { path: 'deadsea', component: DeadSeaComponent },
  { path: 'guelb', component: GuelbComponent },
  { path: 'baikal', component: BaikalComponent },
  { path: 'prague', component: PragueComponent },
  { path: 'quiz', component: QuizComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
