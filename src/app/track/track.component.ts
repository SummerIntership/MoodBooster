import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  moodValue:any;
 
  sendData(data:any){
    console.log(data.value);
  }

}
