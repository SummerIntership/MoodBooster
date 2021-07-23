import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserstatusService {

 bardata1:any=[];
bardata2:any=[];
barlabels:any=[]
doughnutdata:any=[]

performanceStatus:any;
userMoodObj:any;
formFillStatus:any;
moodstatus:any;
tMood:any;
totalScore:any;
flag:any=0;

  constructor() { }
}
