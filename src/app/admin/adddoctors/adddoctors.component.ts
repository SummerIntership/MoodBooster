import { Component, OnInit, ɵCREATE_ATTRIBUTE_DECORATOR__POST_R3__ } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-adddoctors',
  templateUrl: './adddoctors.component.html',
  styleUrls: ['./adddoctors.component.css']
})
export class AdddoctorsComponent implements OnInit {

  constructor(private As:AdminService,private router:Router) { }

  specializations:any=["Psychologist","Psychiatrist","Psychoanalyst","Psychiatric nurse","School psychologist","Neuro psychologist","Occupational psychologist","Psychotherapist","Mental health counselor","Family and marriage counselor","Addiction counselor","Religious counselor","Art therapist","Social worker"];
  genders:any=["Male","Female","Others"];
  
  doctors:any=[];

  ngOnInit(): void {
 
  this.As.getdoctorsList().subscribe(
    res=>{
         if(res.message=="No doctors Available")
            alert(res.message)
          else
          {
            this.doctors=res.doctors
            console.log(this.doctors)
          }
    }
  )

  }

  file:any;
  selectFile(event:any)
  {
    this.file=event.target.files[0];
    console.log(this.file);
  }

  first=0
  h4:any;

  onAddDoctor(docObj:any)
  {
   console.log(docObj.value)
   if(this.first!=0)
   {
    this.h4.textContent=" ";
   }
   let doctorformData=new FormData();
    doctorformData.append("photo",this.file,this.file.name)
    doctorformData.append("docObj",JSON.stringify(docObj.value))
    console.log(docObj.value," ",doctorformData);
    //console.log(docObj.value) 
    
     this.As.addNewdoctor(doctorformData).subscribe(
       res=>{

        if(res.message=="doctor added successfully")
        {
          alert(res.message)
          this.router.navigateByUrl("/admin/adddoctors")
        }
        else
        {
          docObj.reset();
          //alert(res.message)
          if(this.first==0)
          {
          let divElement:any;
          divElement=document.querySelector(".parent")
          this.h4=document.createElement("h4")
          this.first=1;
          this.h4.textContent=res.message;
          this.h4.style.backgroundColor="white"
          this.h4.style.color="#FF5733 "
          divElement.appendChild(this.h4)
          //console.log("first",this.h4)
          //console.log(divElement.appendChild(this.h4))
          }
          else
          {
            this.h4.textContent=res.message;
            [this.h4.style.backgroundColor,this.h4.style.color]=[this.h4.style.color,this.h4.style.backgroundColor]
          }
         
        }
       },
       err=>{
        alert("error in adding doctors data")
       }
     )


  }

  
  Ondeletedoctor(k:any)
  {
     this.As.deletedDoctor(this.doctors[k].name).subscribe(
       res=>{
           if(res.message==="deleted successfully")
            {
              alert(res.message)  
              this.doctors.splice(k,1);
            }
            else{
              alert(res.message)
            }
       }
     )
  }

}
