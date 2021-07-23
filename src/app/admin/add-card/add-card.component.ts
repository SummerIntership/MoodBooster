import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css']
})
export class AddCardComponent implements OnInit {

  constructor(public As:AdminService,private router:Router) { }

  ngOnInit(): void {
  }


  file:any;

  selectFile(event:any){
     this.file= event.target.files[0]
    
  }


  onAddcard(data:any)
  {
    console.log(data.value)
    this.As.addcard(data.value).subscribe(
      res=>{
          alert(res.message)
      }
    )
    data.reset()
    //this.router.navigateByUrl("")
  }

 /* onAddProduct(prodObj:any){

    console.log("prod obj",prodObj)
    //create FOrmData obj
    let formData=new FormData();
    //add file
    //formData.append("photo",this.file,this.file.name)
    //add userObj
    formData.append("prodObj",JSON.stringify(prodObj))

    this.As.addNewProduct(formData).subscribe(
      res=>{
          if(res.message=='New product added'){
            alert("New product added")
            //navigate to view products 
          }
          else{
            alert(res.message)
          }
      },
      err=>{
        console.log("err in adding rpoduct",err)
        alert("Something went wrong in adding product")
      }
    )
   
  }*/
}
