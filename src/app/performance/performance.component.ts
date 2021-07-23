import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChartDataSets, ChartType } from 'chart.js';
import { TrackComponent } from '../track/track.component';
import { UserstatusService } from '../userstatus.service';

@Component({
  selector: 'app-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.css']
})
export class PerformanceComponent{

  constructor(public Uss:UserstatusService,private router:Router) {
     this.updatenow();
   }

  userMoodObj=this.Uss.userMoodObj
  status=this.userMoodObj.status


  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero : false,
          min: 180,
        }
      }]
    }

  };
 //public barChartLabels = ['Monday', 'Tuesday', 'Wednesday', 'Thrusday', 'Friday', 'Saturday', 'Sunday'];
 //public barChartLabels = this.Uss.barlabels; 
 //public barChartLabels = ['Monday', 'Tuesday', 'Wednesday'];
 
  @Component({
    selector: 'app-my-doughnut-chart',
    templateUrl: './my-doughnut-chart.component.html',
    styleUrls: ['./my-doughnut-chart.component.css']
  })
    public doughnutChartLabels = ['Sleep', 'Work', 'Hobbies', 'Exercise'];
    //public doughnutChartData = [[10, 8, 4, 2],[12,2,6,4]];
   /* public doughnutChartData = {
      data:[]
    };*/
    public doughnutChartData :any = [
      { 
          data: []
      }
  ];

    public doughnutChartType : any = 'doughnut';

    public lineChartData: ChartDataSets[] = [
      { data: [65, 59, 80, 81, 56, 55, 40], label: 'Screen Time' },
    ];
    public lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    public lineChartOptions= {
      responsive: true,
    };
    public lineChartColors=[
      {
        borderColor: 'black',
        backgroundColor: 'rgba(255,0,0,0.3)',
      },
    ];
    public lineChartLegend = true;
    public lineChartType:any = 'line';
    public lineChartPlugins = [];
  

  ngOnInit(): void {

  //this.Track.updatingdata();

    var bardata1:any=[];
    var bardata2:any=[];
    var barlabels:any=[]
    var doughnutdata:any=[]


    if(this.status.length<=7)
    {
      
       for(let v of this.status)
       {
           bardata1.push(v.todayscore)
           bardata2.push(Number(v.mood)+180)
           barlabels.push(v.day)
       }
    }
    else
    {
      let data1=this.status.slice(status.length-7)
      //console.log(data1,"😶😶😶😑😑",this.status)
      for(let v of data1)
      {
        bardata1.push(v.todayscore)
        bardata2.push(Number(v.mood)+180)
        barlabels.push(v.day)
      }
    }
    if(this.status.length>=3)
    {
      let data1=this.status.slice(status.length-3)
        for(let v of data1)
        { 
           let a:any=[]
           a.push(v.sleepTime)
           a.push(v.workTime)
           a.push(v.hobbyTime)
           a.push(v.workoutTime)
           doughnutdata.push(a)
        }
    }
    else
    {
      for(let v of this.status)
      { 
         let a:any=[]
         a.push(v.sleepTime)
         a.push(v.workTime)
         a.push(v.hobbyTime)
         a.push(v.workoutTime)
         doughnutdata.push(a)
      }
    }

    this.Uss.bardata1=bardata1
    this.Uss.bardata2=bardata2
    this.Uss.barlabels=barlabels
    this.Uss.doughnutdata=doughnutdata
     console.log("😊😊😉😉")
     console.log("bardata1",bardata1)
     console.log("bardata2",bardata2)
     console.log("barlabels",barlabels)
     console.log("doughnut",doughnutdata)
     this.doughnutChartData = doughnutdata as any[];
     this.barChartData[0].data = bardata2 as any[];
     this.barChartData[1].data = bardata1 as any[];
     this.barChartLabels = barlabels as any[];
    // this.barChartData=bardata1 as any[]
  }


  public barChartLabels = this.Uss.barlabels as any[];
 public barChartType:any = 'bar';
  
  public chartType: string = 'bar';
  public barChartLegend = true;
  //public barChartColor:any = 'green'; 
  public barChartData = [
    //{backgrounColor:'green'},
    {
      //data: [65, 59, 80, 81, 56, 55, 40], 
      data: this.Uss.bardata2 as any[],
      label: 'Happy Score',
   /* backgroundColor:[
    'rgba(255, 99, 132, 0.2)',
    'rgba(255, 159, 64, 0.2)',
    'rgba(255, 205, 86, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(54, 162, 235, 0.2)',
    'rgba(153, 102, 255, 0.2)',
    'rgba(201, 203, 207, 0.2)'],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)'
    ],*/
    borderWidth: 1
     },
    {
      //data: [28, 48, 40, 19, 86, 27, 90],
      data: this.Uss.bardata1 as any[],
       label: 'Daily Score',
     
   /* backgroundColor:[
      'rgba(255, 99, 132, 0.2)',
    'rgba(255, 159, 64, 0.2)',
    'rgba(255, 205, 86, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(54, 162, 235, 0.2)',
    'rgba(153, 102, 255, 0.2)',
    'rgba(201, 203, 207, 0.2)'],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)'
    ],*/
    borderWidth: 1
     
    },
  ];



  /*  public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData: MultiDataSet = [
    [350, 450, 100],
    [50, 150, 120],
    [250, 130, 70],
  ];
  public doughnutChartType: ChartType = 'doughnut';


 this.pieChartData = data as any [];

  */

 gotoTrackMood()
 {
  this.router.navigateByUrl("/analysis/track")
 }

 updatenow()
 {
  var bardata1:any=[];
  var bardata2:any=[];
  var barlabels:any=[]
  var doughnutdata:any=[]


  if(this.status.length<=7)
  {
    
     for(let v of this.status)
     {
         bardata1.push(v.todayscore)
         bardata2.push(Number(v.mood)+180)
         barlabels.push(v.day)
     }
  }
  else
  {
    let data1=this.status.slice(status.length-7)
    //console.log(data1,"😶😶😶😑😑",this.status)
    for(let v of data1)
    {
      bardata1.push(v.todayscore)
      bardata2.push(Number(v.mood)+180)
      barlabels.push(v.day)
    }
  }
  if(this.status.length>=3)
  {
    let data1=this.status.slice(status.length-3)
      for(let v of data1)
      { 
         let a:any=[]
         a.push(v.sleepTime)
         a.push(v.workTime)
         a.push(v.hobbyTime)
         a.push(v.workoutTime)
         doughnutdata.push(a)
      }
  }
  else
  {
    for(let v of this.status)
    { 
       let a:any=[]
       a.push(v.sleepTime)
       a.push(v.workTime)
       a.push(v.hobbyTime)
       a.push(v.workoutTime)
       doughnutdata.push(a)
    }
  }

  this.Uss.bardata1=bardata1
  this.Uss.bardata2=bardata2
  this.Uss.barlabels=barlabels
  this.Uss.doughnutdata=doughnutdata
   console.log("😊😊😉😉")
   console.log("bardata1",bardata1)
   console.log("bardata2",bardata2)
   console.log("barlabels",barlabels)
   console.log("doughnut",doughnutdata)
   this.doughnutChartData = doughnutdata as any[];
   this.barChartData[0].data = bardata2 as any[];
   this.barChartData[1].data = bardata1 as any[];
   this.barChartLabels = barlabels as any[];
 }


}
