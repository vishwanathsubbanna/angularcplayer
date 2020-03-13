import { Component, OnInit,Input, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {environment} from "../../environments/environment"

@Component({
  selector: 'app-reference',
  templateUrl: './reference.component.html',
  styleUrls: ['./reference.component.css']
})
export class ReferenceComponent implements OnInit,OnChanges {

  @Input() topiccode:string
  @Input() ccode:string
  topictitle:string
  referencelink=new Array<string>();

  loadReferenceMaterials()
  {
    console.log("Course Code from reference Materials:"+this.ccode+this.topiccode)
    this.httpclient.get(`http://${environment.serverIPAddress}/getrefforcourse?ccode=${this.ccode}`).subscribe(response=>{    
        console.log(response["data"][0]["toc"])
         for(let topic of response["data"][0]["toc"])
         {                   
             if (topic.topiccode==this.topiccode)
             {                         
               this.topictitle=topic.title              
               this.referencelink=topic.url                             
             }
         }    
       })
  }

  constructor(private httpclient:HttpClient) 
  {

  }

  ngOnInit() {
  }

  ngOnChanges()
  {
    this.loadReferenceMaterials()
  }

}
