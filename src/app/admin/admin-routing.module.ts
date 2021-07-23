import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{ViewcardsComponent } from'../viewcards/viewcards.component';
import { AddCardComponent } from './add-card/add-card.component';
import { AdddoctorsComponent } from './adddoctors/adddoctors.component';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  /*{ path: '', component: AdminComponent },*/
  {path:'adddoctors',component:AdddoctorsComponent},
  {path:'addcards',component:AddCardComponent},
  {path:'viewcards',component:ViewcardsComponent},
  {path:'',redirectTo:'viewcards',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
