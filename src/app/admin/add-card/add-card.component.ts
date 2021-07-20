import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css']
})
export class AddCardComponent implements OnInit {

  constructor(public As:AdminService) { }

  ngOnInit(): void {
  }


  file:any;

  selectFile(event:any){
     this.file= event.target.files[0]
    
  }



  onAddProduct(prodObj:any){

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
   
  }
}
