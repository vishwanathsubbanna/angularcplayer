import { Component, OnInit,Input, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment'

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit,OnChanges {

  @Input() topiccode:string
  @Input() ccode:string
  topictitle:string
  notes:string

  loadNotesMaterials()
  {
    console.log("Course Code from QA Materials:"+this.ccode+this.topiccode)
    this.httpclient.get(`http://${environment.serverIPAddress}/getnotesforcourse?ccode=${this.ccode}`).subscribe(response=>{    
      console.log(response["data"][0]["toc"])
         for(let topic of response["data"][0]["toc"])
         {                   
             if (topic.topiccode==this.topiccode)
             {                         
               this.topictitle=topic.title              
               this.notes=topic.notes                             
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
    this.loadNotesMaterials()
  }

}
