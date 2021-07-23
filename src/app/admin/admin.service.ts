import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private hc:HttpClient) { }

  getQueryToContactUs(data1:any):Observable<any>
  {
    return this.hc.post("/admin/contactus",data1)
  }
  addNewdoctor(newDoc:any):Observable<any>
  {
    //console.log("data came to admin service",newDoc)
    return this.hc.post("/admin/adddoctor",newDoc); 
  } 
  getdoctorsList():Observable<any>
  {
     return this.hc.get("/admin/getdoctors");
  }
  deletedDoctor(name:any):Observable<any>
  {
    return this.hc.delete(`/admin/deletedoctor/${name}`)
  }

  addcard(newcard:any):Observable<any>{

    //console.log("new product",newcard)
    return  this.hc.post("/admin/add-card",newcard)
    
  }
  getcards():Observable<any>{

      return this.hc.get("/admin/getcardsdata")

  }
  deletecard(cn:any):Observable<any>{
    return this.hc.delete(`/admin/deletecard/${cn}`)
  }

}
