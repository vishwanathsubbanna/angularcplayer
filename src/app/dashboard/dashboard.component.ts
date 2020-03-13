import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment'
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
    httpClient.get(`http://${environment.serverIPAddress}/getcourses`).subscribe(result=>{
      this.courseList=result["data"]
    })
  }

  ngOnInit() {
  }

}
