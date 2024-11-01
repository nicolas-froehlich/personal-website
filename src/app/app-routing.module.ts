import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { EverestComponent } from './everest/everest.component';
import { DeadSeaComponent } from './deadsea/deadsea.component';
import { GuelbComponent } from './guelb/guelb.component';
import { BaikalComponent } from './baikal/baikal.component';
import { PragueComponent } from './prague/prague.component';
import { SansibarComponent } from './sansibar/sansibar.component';
import { HeimComponent } from './heimerdingen/heimerdingen.component';
import { NoumeaComponent } from './noumea/noumea.component';
import { QuizComponent } from './quiz/quiz.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' }, // Default route
  { path: 'landing', component: LandingComponent },
  { path: 'e', component: EverestComponent },
  { path: 'd', component: DeadSeaComponent },
  { path: 'g', component: GuelbComponent },
  { path: 'b', component: BaikalComponent },
  { path: 'p', component: PragueComponent },
  { path: 's', component: SansibarComponent },
  { path: 'p', component: PragueComponent },
  { path: 'p', component: PragueComponent },
  { path: 'h', component: HeimComponent },
  { path: 'n', component: NoumeaComponent },
  { path: 'quiz', component: QuizComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
