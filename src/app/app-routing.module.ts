import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactusComponent } from './contactus/contactus.component';
import { AnalysisComponent } from './analysis/analysis.component';
import { DefaultComponent } from './default/default.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterComponent } from './register/register.component';
import { PerformanceComponent } from './performance/performance.component';
import { TestimonalsComponent } from './testimonals/testimonals.component';
import { TrackComponent } from './track/track.component';
import { AdddoctorsComponent } from './admin/adddoctors/adddoctors.component';
import {ViewcardsComponent} from './viewcards/viewcards.component' ;
import { FeedbackComponent } from './feedback/feedback.component';
import { NeedHelpComponent } from './need-help/need-help.component';
//import { NeedHelpComponent } from './need-help/need-help.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"testimonals",component:TestimonalsComponent},
  {path:"feedback",component:FeedbackComponent},
  {path:"analysis",component:AnalysisComponent,children:[
    {path:"track",component:TrackComponent},
    {path:"performance",component:PerformanceComponent},
    {path:"",redirectTo:"/analysis/track",pathMatch:'full'}
  ]},
  {path:'viewcards',component:ViewcardsComponent},
  {path:"default",component:DefaultComponent},
  {path:"contactus",component:ContactusComponent},
  {path:"needhelp",component:NeedHelpComponent},
  {path:'',redirectTo:'default',pathMatch:'full'},
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  {path:'**',component:PageNotFoundComponent},
  
];

@NgModule({
  imports: 
  [RouterModule.forRoot(routes,{useHash:false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
