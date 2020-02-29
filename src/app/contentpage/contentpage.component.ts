import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseRatingService } from '../course-rating.service';
import * as toc from '../../data/toc.json'

@Component({
  selector: 'app-contentpage',
  templateUrl: './contentpage.component.html',
  styleUrls: ['./contentpage.component.css'],
  providers:[CourseRatingService]
})
export class ContentpageComponent implements OnInit {
  @Input('topiccode') topiccode:string
  
  pagetitle:string=""
  pagedesc:string=""
  courserating:number
  maxrating=[1,2,3,4,5]
  constructor(private myactiveroute:ActivatedRoute,private crating:CourseRatingService) 
  {          
       myactiveroute.params.subscribe(params=>{
      
      for(let topic of toc.toc)
      {        
          if (topic.topiccode==params.topiccode)
          {
            this.pagetitle=topic.title
            this.pagedesc=topic.desc
            this.courserating=crating.getRating(params.topiccode)
          }
      }            
    })
  }

  isfilled(num:number):boolean
  {    
    if(num<=this.courserating)
    return true
    return false;
  }

  ngOnInit() 
  {

  }

}
