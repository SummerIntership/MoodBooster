import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
//import{NgxPaginationModule} from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
//import { ChartsModule } from 'ng2-charts/ng2-charts';
//import { Chart } from 'chart.js';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TestimonalsComponent } from './testimonals/testimonals.component';
import { AnalysisComponent } from './analysis/analysis.component';
import { TrackComponent } from './track/track.component';
import { PerformanceComponent } from './performance/performance.component';
import { DefaultComponent } from './default/default.component';
import { RegisterComponent } from './register/register.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { OverviewComponent } from './overview/overview.component';
import { SharedModule } from './shared/shared.module';
import { FeedbackComponent } from './feedback/feedback.component';
import { NeedHelpComponent } from './need-help/need-help.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TestimonalsComponent,
    AnalysisComponent,
    TrackComponent,
    PerformanceComponent,
    DefaultComponent,
    RegisterComponent,
    ContactusComponent,
    PageNotFoundComponent,
    OverviewComponent,
    FeedbackComponent,
    NeedHelpComponent,
    FeedbackComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ChartsModule,
    HttpClientModule,
    SharedModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
