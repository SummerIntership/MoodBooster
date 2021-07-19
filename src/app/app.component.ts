import { Component } from '@angular/core';
//import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MoodBooster';

  status:boolean=true;

  changeStatus(){
    this.status=!this.status;
  }
}
