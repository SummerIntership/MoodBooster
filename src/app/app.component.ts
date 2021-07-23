import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserstatusService } from './userstatus.service';
//import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router:Router,private Uss:UserstatusService) { }

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
    this.Uss.flag=0;
   // this.Uss.bardata1="null"
    //this.Uss.bardata2="null"
    //this.Uss.barlabels="null"
    //this.Uss.doughnutdata="null"
  }

}
