import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as toc from '../../data/toc.json'

@Component({
  selector: 'app-contentpage',
  templateUrl: './contentpage.component.html',
  styleUrls: ['./contentpage.component.css']
})
export class ContentpageComponent implements OnInit {
  @Input('topiccode') topiccode:string

  pagetitle:string=""
  pagedesc:string=""
  constructor(private myactiveroute:ActivatedRoute) 
  { 
    myactiveroute.params.subscribe(params=>{
      
      for(let topic of toc.toc)
      {        
          if (topic.topiccode==params.topiccode)
          {
            this.pagetitle=topic.title
            this.pagedesc=topic.desc
          }
      }            
    })
  }



  ngOnInit() 
  {

  }

}
