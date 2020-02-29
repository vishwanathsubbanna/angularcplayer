import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
<<<<<<< HEAD
import { CourseRatingService } from '../course-rating.service';

=======
import * as toc from '../../data/toc.json'
>>>>>>> 71647d9cdaf94f67ecfdf1a1783ae5e96bdafaf8

@Component({
  selector: 'app-contentpage',
  templateUrl: './contentpage.component.html',
  styleUrls: ['./contentpage.component.css'],
  providers:[CourseRatingService]
})
export class ContentpageComponent implements OnInit {
  @Input('topiccode') topiccode:string

<<<<<<< HEAD
  pagetitle:string
  pagedesc:string
  courserating:number
  maxrating=[1,2,3,4,5]
  constructor(private myactiveroute:ActivatedRoute,private crating:CourseRatingService) 
  { 
    myactiveroute.params.subscribe(params=>{
      this.pagetitle=params.title
      this.pagedesc=params.desc
      this.courserating=crating.getRating(params.topiccode)
=======
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
>>>>>>> 71647d9cdaf94f67ecfdf1a1783ae5e96bdafaf8
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
