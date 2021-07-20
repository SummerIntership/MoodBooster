import { Component } from '@angular/core';
import { Router } from '@angular/router';
//import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router:Router) { }

  title = 'MoodBooster';
  username:any;
  check=false;
  acheck=false;
  userObj:any;

  status:boolean=true;

  changeStatus(){
    this.status=!this.status;
  }

  onlogOut()
  {
    localStorage.clear();
    this.check=false;
    this.acheck=false;
    this.router.navigateByUrl("\default")
  }

}
