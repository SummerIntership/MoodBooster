import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TestimonalsComponent } from './testimonals/testimonals.component';
<<<<<<< HEAD
import { AnalysisComponent } from './analysis/analysis.component';
import { TrackComponent } from './track/track.component';
import { PerformanceComponent } from './performance/performance.component';
=======
import { DefaultComponent } from './default/default.component';
>>>>>>> 29fd831012b37895727cbd8792fa84dd08a277e6

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TestimonalsComponent,
<<<<<<< HEAD
    AnalysisComponent,
    TrackComponent,
    PerformanceComponent
=======
    DefaultComponent
>>>>>>> 29fd831012b37895727cbd8792fa84dd08a277e6
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
