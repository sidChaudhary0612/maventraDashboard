import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private http: HttpClient) {

  }
  ngOnInit() {
    this.latestResults();
  }
  weekDays=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]
  getData:any
  myData:any
  latestResults() {
    this.http.get("https://mocki.io/v1/b8d69ada-908f-4d70-97a9-c7dba1b99126").subscribe((data)=>{ this.getData = data
    this.myData = this.getData.dashboardData.userData[0]
  })
   
  }
 
  

}
