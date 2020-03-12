import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  courseList=[]
  coursePlayerRoute="/courseplayer/"

  constructor(private httpClient:HttpClient) 
  { 
    httpClient.get("http://192.168.1.4/getcourses").subscribe(result=>{
      this.courseList=result["data"]
    })
  }

  ngOnInit() {
  }

}
