import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalysisComponent } from './analysis/analysis.component';
import { LoginComponent } from './login/login.component';
import { PerformanceComponent } from './performance/performance.component';
import { TestimonalsComponent } from './testimonals/testimonals.component';
import { TrackComponent } from './track/track.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"testimonals",component:TestimonalsComponent},
  {path:"analysis",component:AnalysisComponent,children:[
    {path:"track",component:TrackComponent},
    {path:"performance",component:PerformanceComponent},
    {path:"",redirectTo:"/analysis/track",pathMatch:'full'}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
