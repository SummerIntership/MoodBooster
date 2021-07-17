import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }
  genders:any=["Male","Female","Others","Agender","Androgyne","Androgynes","Androgynes","Bigender","Trans","Trans Male","Trans Female","Trangender","Non-binary","Two-spirit"];

  ngOnInit(): void {
  }

  onRegister(userObj:any)
{
 console.log(userObj.value)
}

}
