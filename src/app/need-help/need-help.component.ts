import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-need-help',
  templateUrl: './need-help.component.html',
  styleUrls: ['./need-help.component.css']
})
export class NeedHelpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  contact=false;
  displayContact(){
    this.contact=!this.contact;
    console.log("called")
  }

}
