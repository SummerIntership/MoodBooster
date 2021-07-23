import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private router:Router,private hc:HttpClient) { }

  addNewuser(newUser:any):Observable<any>
  {
    console.log("data came to user service",newUser)
    return this.hc.post("/user/register",newUser); 
  } 

  checkUserLogin(user:any):Observable<any>
  {
   return this.hc.post("/user/login",user)
  }
  checkAdminLogin(admin:any):Observable<any>{
    //console.log("in user service admin data",admin)
    return this.hc.post("/admin/login",admin)
  }
  AddStatusTouser(data:any):Observable<any>
  {
     return this.hc.post("/user/addtodaymood",data)
  }
  getUsermoodObject(name:any):Observable<any>{
    return this.hc.get(`/user/getusermood/${name}`)
  }

}
