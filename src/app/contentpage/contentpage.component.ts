import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-contentpage',
  templateUrl: './contentpage.component.html',
  styleUrls: ['./contentpage.component.css']
})
export class ContentpageComponent implements OnInit {
  @Input('topiccode') topiccode:string

  pagetitle:string
  pagedesc:string
  constructor(private myactiveroute:ActivatedRoute) 
  { 
    myactiveroute.params.subscribe(params=>{
      this.pagetitle=params.title
      this.pagedesc=params.desc
    })
  }



  ngOnInit() 
  {

  }

}
