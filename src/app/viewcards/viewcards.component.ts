import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin/admin.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-viewcards',
  templateUrl: './viewcards.component.html',
  styleUrls: ['./viewcards.component.css']
})
export class ViewcardsComponent implements OnInit {
  products=[]
  constructor(private adminService:AdminService,private userService:UserService) { }

  ngOnInit(): void {
  }

}
