import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {ViewcardsComponent} from '../viewcards/viewcards.component';



@NgModule({
  declarations: [ViewcardsComponent],
  imports: [CommonModule],
  exports:[ CommonModule, FormsModule ]
})
export class SharedModule{}
