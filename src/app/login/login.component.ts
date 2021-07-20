import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private uS:UserService,private router:Router,private App:AppComponent) { }

  ngOnInit(): void {
  }
first=0
h4:any;
  onLogin(data:any)
  {
    //console.log(data.value)
    if(this.first!=0)
    {
     this.h4.textContent=" ";
    }
    let checkuser=false;
    this.uS.checkAdminLogin(data.value).subscribe(
      res=>{
           if(res.message=="Invalid user")
           {
             checkuser=true;
             this.checkloginuser(data.value);
           }
           else
           {
                
            if(res.message!=="login successfull")
            {
              alert(res.message)
              if(this.first==0)
              {
              let divElement:any;
              divElement=document.querySelector(".parent")
              this.h4=document.createElement("h4")
              this.first=1;
              this.h4.textContent=res.message;
              this.h4.style.backgroundColor="#d8d9db";
              this.h4.style.color="#FF5733"
              divElement.appendChild(this.h4)
              //console.log("first",this.h4)
              //console.log(divElement.appendChild(this.h4))
              }
              else
              {
                this.h4.textContent=res.message;
                [this.h4.style.backgroundColor,this.h4.style.color]=[this.h4.style.color,this.h4.style.backgroundColor]
              }
              //console.log(this.h4)
              //divElement.appendChild()  
            }
            else{
              this.App.acheck=true;
              localStorage.setItem("token",res.token)
              localStorage.setItem("firstname",res.firstname)
              localStorage.setItem("userObj",JSON.stringify(res.userObj))
              alert(res.message)
              this.router.navigateByUrl("/admin")
               
            }



           }
      },
      err=>{
        console.log(err)
        alert("something went wrong in getting userlogin response ")
      }
    )
  }
  checkloginuser(data:any)
  {
    //console.log("entered into the check userlogin")
    if(this.first!=0)
    {
     this.h4.textContent=" ";
    }
    this.uS.checkUserLogin(data).subscribe(res=>{

      if(res.message!=="login successfull")
      {
        alert(res.message)
        if(this.first==0)
        {
        let divElement:any;
        divElement=document.querySelector(".parent")
        this.h4=document.createElement("h4")
        this.first=1;
        this.h4.textContent=res.message;
        this.h4.style.backgroundColor="#d8d9db";
        this.h4.style.color="#FF5733"
        divElement.appendChild(this.h4)
        //console.log("first",this.h4)
        //console.log(divElement.appendChild(this.h4))
        }
        else
        {
          this.h4.textContent=res.message;
          [this.h4.style.backgroundColor,this.h4.style.color]=[this.h4.style.color,this.h4.style.backgroundColor]
        }
        //console.log(this.h4)
        //divElement.appendChild()  
      }
      else{
        this.App.check=true;
        localStorage.setItem("token",res.token)
        localStorage.setItem("username",res.firstname)
        localStorage.setItem("userObj",JSON.stringify(res.userObj))
        this.App.userObj=res.userObj;
        this.App.username=res.firstname
       // this.getusercartCount()
        alert(res.message)
        this.router.navigateByUrl("/analysis")
        
      }

    },
    err=>{
      console.log(err)
      alert("something went wrong in getting userlogin response ")
    }
    )
  }



}
