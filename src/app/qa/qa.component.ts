import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment'


@Component({
  selector: 'app-qa',
  templateUrl: './qa.component.html',
  styleUrls: ['./qa.component.css']
})
export class QaComponent implements OnInit {

  @Input() topiccode:string
  @Input() ccode:string

  qalist=Array()

  loadQaMaterials()
  {
    console.log("Course Code from QA Materials:"+this.ccode+this.topiccode)
    this.httpclient.get(`http://${environment.serverIPAddress}/getqaforcourse?ccode=${this.ccode}`).subscribe(response=>{    
      this.qalist=response["data"][0]["quesAns"]
      console.log(this.qalist)
       })
  }

  constructor(private httpclient:HttpClient) 
  {

  }

  ngOnInit() {
    this.loadQaMaterials()
  }

}
