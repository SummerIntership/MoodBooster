import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.css']
})
export class PerformanceComponent{

  constructor() { }

  ngOnInit(): void {
  }
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = ['Monday', 'Tuesday', 'Wednesday', 'Thrusday', 'Friday', 'Saturday', 'Sunday'];
  public barChartType:any = 'bar';
  
  public chartType: string = 'bar';
  public barChartLegend = true;
  //public barChartColor:any = 'green'; 
  public barChartData = [
    //{backgrounColor:'green'},
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Happy Score',
    backgroundColor:[
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
    ],
    borderWidth: 1
     },
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Day',
     
    backgroundColor:[
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
    ],
    borderWidth: 1
     
    },
  ];

  @Component({
    selector: 'app-my-doughnut-chart',
    templateUrl: './my-doughnut-chart.component.html',
    styleUrls: ['./my-doughnut-chart.component.css']
  })
    public doughnutChartLabels = ['Sleep', 'Work', 'Hobbies', 'Exercise'];
    public doughnutChartData = [[10, 8, 4, 2],
            [12,2,6,4]];
    public doughnutChartType:any = 'doughnut';


  /*  public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData: MultiDataSet = [
    [350, 450, 100],
    [50, 150, 120],
    [250, 130, 70],
  ];
  public doughnutChartType: ChartType = 'doughnut';
  */

}
