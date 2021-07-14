import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TestimonalsComponent } from './testimonals/testimonals.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"testimonals",component:TestimonalsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
