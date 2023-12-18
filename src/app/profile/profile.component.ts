import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  getData:any
  respData: any=[];
  constructor(private http:HttpClient){}
  ngOnInit() {
    this.userData()
  }

  userData() {
    this.http.get("https://mocki.io/v1/b8d69ada-908f-4d70-97a9-c7dba1b99126").subscribe((data)=>{ this.getData = data
  
this.respData=data
this.getData = this.respData.dashboardData.userData[0]
console.log(this.respData)
})
   
  }
}
