import { HttpClient } from '@angular/common/http';
import { Component,ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexResponsive,
  ApexXAxis,
  ApexLegend,
  ApexFill,
  ApexYAxis,
  ApexGrid
} from "ng-apexcharts";
export type ChartOptions = {
  series: ApexAxisChartSeries |any;
  chart: ApexChart |any;
  dataLabels: ApexDataLabels |any;
  plotOptions: ApexPlotOptions |any;
  responsive: ApexResponsive[] |any;
  xaxis: ApexXAxis |any;
  legend: ApexLegend |any;
  fill: ApexFill |any;
  yaxis:ApexYAxis |any;
  grid:ApexGrid |any
};
@Component({
  selector: 'app-time-spent-chart',
  templateUrl: './time-spent-chart.component.html',
  styleUrls: ['./time-spent-chart.component.css']
})
export class TimeSpentChartComponent {
  
  ngOnInit() {
    this.timeSpent();
  }
  
  getData:any
  timeSpent() {
    this.http.get("https://mocki.io/v1/b8d69ada-908f-4d70-97a9-c7dba1b99126").subscribe((data)=>{ this.getData = data
  console.log(this.getData) })
   
  }


  @ViewChild("chart") chart: ChartComponent | any;
  public chartOptions: Partial<ChartOptions>;

  constructor(private http: HttpClient) {
    this.chartOptions = {
      series: [
        { name: 'Vocabulary', data: [20, 25, 15, 92, 18, 12, 1] },
        { name: 'Grammar', data: [30, 20, 35, 99, 28, 55, 2] },
        { name: 'Listening', data: [15, 30, 25, 5, 38, 44, 52] },
        { name: 'Writing', data: [35, 25, 25, 2, 78, 33, 58] }
      ],
      chart: {
        type: 'bar',
        height: 230,
        stacked: true,
        stackType: "100%"
      },
      plotOptions: {
        bar: {
          
          horizontal: false,
          columnWidth: "10%",
        },
      },
      xaxis: {
        lines: {
          show: false
        },
        categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],position: "top",
      },
      grid: {
        show: false,
      },
      yaxis: {
        
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          show: false,
        
         
        }
      },
      
      legend: {
        position: 'bottom',
      },
      dataLabels: {
        enabled: false,
      },
     
    };
  }
}
