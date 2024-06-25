import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { EverestComponent } from './everest/everest.component'; // Import EverestComponent
import { LandingComponent } from './landing/landing.component'; // Import LandingComponent

@NgModule({
  declarations: [
    AppComponent,
    EverestComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
