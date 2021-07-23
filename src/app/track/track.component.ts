import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from '../user.service';
import { UserstatusService } from '../userstatus.service';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {
 


constructor(private Us:UserService,private router:Router,public Uss:UserstatusService) { }
mySubscription:any;
mySubscription1:any;
mySubscription2:any;
mySubscription3:any;
userMoodObj:any;
formFillStatus:any=true;
moodstatus:any;
tMood:any;
flag=0;

gotoPerformance()
{
   this.router.navigateByUrl("/analysis/performance")
   this.updatingdata()
}

  ngOnInit(): void {


    if(this.Uss.flag==0)
    {
      this.flag=1;
      this.Uss.flag=1;
    let firstname=localStorage.getItem("username")
    console.log("username"," ",firstname)
    this.mySubscription=this.Us.getUsermoodObject(firstname).subscribe(res=>{
       
      console.log(res)
         if(res.message == "usermoodobj exists")
          {
            this.userMoodObj=res.data
            alert("the data exsits")
            this.Uss.userMoodObj=this.userMoodObj
            var today = new Date();
            var date1=today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
            if(this.userMoodObj.lastdate==date1)
              {
                this.formFillStatus=true;
                this.tMood=this.userMoodObj.status[this.userMoodObj.status.length-1].mood;
                this.Uss.totalScore=this.userMoodObj.score
                this.Uss.userMoodObj=this.userMoodObj
                this.Uss.tMood=this.tMood;
                this.Uss.formFillStatus=true;
                console.log(this.tMood,"if exsists",this.formFillStatus)
                alert("already filled the form")
              }
            else{
                this.formFillStatus=false;
                this.Uss.formFillStatus=false;
                alert("track your mood now")
            }
            this.Uss.performanceStatus=true;
          }
        else
        {
          this.formFillStatus=false;
          this.Uss.performanceStatus=false;
          this.Uss.formFillStatus=false;
          alert("not tracked your mood yet")
        }
          //this.Uss.userMoodObj=this.userMoodObj; 
    },
    err=>{
      console.log(err)
      alert("something went wrong in getting track response ")
    }

    )
    }
    //this.Uss.userMoodObj=this.userMoodObj;
    //this.updatingdata();
  }
 

 
  sendData(data:any){
    console.log(data.value);
    let firstname=localStorage.getItem("username")
    let todayObj=data.value;
    this.tMood=data.value.mood;
    var today = new Date();
    var date1=today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
    todayObj.day=today.toLocaleDateString('default', { weekday: 'long' }); 
    todayObj.date=date1; 
    
    console.log(todayObj)

    let newusermObj={firstname,todayObj}
    console.log(newusermObj)

    this.mySubscription1=this.Us.AddStatusTouser(newusermObj).subscribe(
      res=>{
          alert(res.message)
          this.updatingdata()
          this.gotoPerformance();
          //this.updatingdata();
      },
      err=>{
        console.log(err)
        alert("something went wrong in adding track response")
      }
    )

    this.updatingdata();

  }

  updatingdata()
  {
    let firstname=localStorage.getItem("username")
    console.log("username"," ",firstname)
    this.mySubscription2=this.Us.getUsermoodObject(firstname).subscribe(res=>{ 
      console.log(res)
         if(res.message == "usermoodobj exists")
          {
            this.userMoodObj=res.data
            //alert("the data exsits")
            this.Uss.userMoodObj=this.userMoodObj
            var today = new Date();
            var date1=today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
            if(this.userMoodObj.lastdate==date1)
              {
                this.formFillStatus=true;
                this.tMood=this.userMoodObj.status[this.userMoodObj.status.length-1].mood;
                this.Uss.totalScore=this.userMoodObj.score
                this.Uss.userMoodObj=this.userMoodObj
                this.Uss.tMood=this.tMood;
                this.Uss.formFillStatus=true;
                console.log(this.tMood,"if exsists",this.formFillStatus)
                //alert("already filled the form")
              }
            else{
                this.formFillStatus=false;
                this.Uss.formFillStatus=false;
                //alert("track your mood now")
            }
            this.Uss.performanceStatus=true;
          }
        else
        {
          this.formFillStatus=false;
          this.Uss.performanceStatus=false;
          this.Uss.formFillStatus=false;
         // alert("not tracked your mood yet")
        }
          //this.Uss.userMoodObj=this.userMoodObj; 
    },
    err=>{
      console.log(err)
      alert("something went wrong in getting track response ")
    }

    )
  }

  ngOnDestroy():void {
    
   // this.mySubscription.unsubscribe();
   // this.mySubscription1.unsubscribe();
   // this.mySubscription2.unsubscribe();
   // this.mySubscription3.unsubscribe();
   this.updatingdata();
  }


}
