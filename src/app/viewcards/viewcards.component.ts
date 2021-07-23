import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin/admin.service';
import { AppComponent } from '../app.component';
import { UserService } from '../user.service';

@Component({
  selector: 'app-viewcards',
  templateUrl: './viewcards.component.html',
  styleUrls: ['./viewcards.component.css']
})
export class ViewcardsComponent implements OnInit {
  cards=[]
  cardsStatus:any;
  constructor(private As:AdminService,private uS:UserService,public App:AppComponent,private router:Router) { }

  ngOnInit(): void {
     
     this.As.getcards().subscribe(
       res=>{
         if(res.message=="cards present")
            {
              this.cards=res.data
              this.cardsStatus=true;
              console.log(this.cards)
            }
          else{
            alert(res.message)
          }
       }
     )
     
  }
  gotothatpage(link:any)
  {
     this.router.navigateByUrl(link)
  }
  ondelete(x:any)
  {
     let card=this.cards[x]
     this.As.deletecard(card['articlename']).subscribe(
       res=>{
         alert(res.message)
       }
     )
     this.cards.splice(x,1)
  }


}
