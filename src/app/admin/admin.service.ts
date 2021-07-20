import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private hc:HttpClient) { }

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

}
