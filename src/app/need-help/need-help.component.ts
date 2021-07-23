import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin/admin.service';

@Component({
  selector: 'app-need-help',
  templateUrl: './need-help.component.html',
  styleUrls: ['./need-help.component.css']
})
export class NeedHelpComponent implements OnInit {

  constructor(private As:AdminService) { }

  doctors:any=[];
  ngOnInit(): void {
    this.As.getdoctorsList().subscribe(
      res=>{
           if(res.message=="No doctors Available")
           {
              alert(res.message)
           }
            else
            {
              this.doctors=res.doctors
              console.log(this.doctors)
            }
      }
    )
  }

  contact=false;
  displayContact(){
    this.contact=!this.contact;
    console.log("called")
  }

}
