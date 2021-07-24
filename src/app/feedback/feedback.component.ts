import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  fedBackStatus:any=false;
  constructor() { }

  ngOnInit(): void {
  }

   onfeedback(){
       this.fedBackStatus=true; 
   }
}
