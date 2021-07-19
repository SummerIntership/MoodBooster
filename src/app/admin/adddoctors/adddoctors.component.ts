import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adddoctors',
  templateUrl: './adddoctors.component.html',
  styleUrls: ['./adddoctors.component.css']
})
export class AdddoctorsComponent implements OnInit {

  constructor() { }

  specializations:any=["Psychologist","Psychiatrist","Psychoanalyst","Psychiatric nurse","School psychologist","Neuro psychologist","Occupational psychologist","Psychotherapist","Mental health counselor","Family and marriage counselor","Addiction counselor","Religious counselor","Art therapist","Social worker"];
  genders:any=["Male","Female","Others"]


  ngOnInit(): void {
  }

  onAddDoctor(userObj:any)
  {
   console.log(userObj.value)
  }

}
