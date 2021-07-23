import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin/admin.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  constructor(private As:AdminService) { }

  ngOnInit(): void {
  }

onContactus(user:any)
{
  console.log(user.value)
    this.As.getQueryToContactUs(user.value).subscribe(
      res=>{
          alert(res.message)
      },
      err=>{
        console.log(err)
       alert("something went wrong in adding data to the DB")
      }
    )
}

}
