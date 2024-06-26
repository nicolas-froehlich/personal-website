import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { EverestComponent } from './everest/everest.component'; // Import EverestComponent
import { DeadSeaComponent } from './deadsea/deadsea.component';
import { GuelbComponent } from './guelb/guelb.component';
import { BaikalComponent } from './baikal/baikal.component';
import { PragueComponent } from './prague/prague.component';
import { LandingComponent } from './landing/landing.component'; // Import LandingComponent
import { QuizComponent } from './quiz/quiz.component'; // Import LandingComponent


@NgModule({
  declarations: [
    AppComponent,
    EverestComponent,
    LandingComponent,
    DeadSeaComponent,
    GuelbComponent,
    BaikalComponent,
    PragueComponent,
    QuizComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
