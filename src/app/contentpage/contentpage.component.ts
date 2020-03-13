import { Component, OnInit, Input, Output,EventEmitter, OnChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseRatingService } from '../course-rating.service';
import { HttpClient } from '@angular/common/http';
import {environment} from "../../environments/environment"

@Component({
  selector: 'app-contentpage',
  templateUrl: './contentpage.component.html',
  styleUrls: ['./contentpage.component.css'],
  providers:[CourseRatingService]
})
export class ContentpageComponent implements OnInit,OnChanges {
  @Input('topiccode') topiccode:string
  
  pagetitle:string=""
  pagedesc:string=""
  videoURL=""
  ccode=""  
  courserating:number
  maxrating=[1,2,3,4,5]

  refLink="ref/"
  notesLink="notes/"
  qaLink="qa/"
  transLink="trans/"
  reviewLink="review/"

  showContentForTopic()
  {
    this.myactiveroute.params.subscribe(params=>{ 
      this.ccode=params.coursecode   
      this.httpclient.get(`http://${environment.serverIPAddress}/getcontentforcourse?ccode=${this.ccode}`).subscribe(response=>{              
    
       for(let topic of response["data"][0]["coursecontent"])
       {        
           if (topic.topiccode==this.topiccode)
           {
             this.videoURL=topic.videoUrl             
           }
       }    
     })
    })

    this.myactiveroute.params.subscribe(params=>{ 
      this.ccode=params.coursecode
      this.httpclient.get(`http://${environment.serverIPAddress}/gettocforcourse?ccode=${this.ccode}`).subscribe(response=>{    
        
         for(let topic of response["data"][0]["toc"])
         {                   
             if (topic.topiccode==this.topiccode)
             {            
               this.pagetitle=topic.title
               this.pagedesc=topic.desc
               this.courserating=this.crating.getRating(this.topiccode)               
             }
         }    
       })
    })       

  }

  constructor(private myactiveroute:ActivatedRoute,private crating:CourseRatingService,private httpclient:HttpClient,private router:Router) 
  {            
    //this.router.routeReuseStrategy.shouldReuseRoute = () => false;                        
  }

  isfilled(num:number):boolean
  {    
    if(num<=this.courserating)
    return true
    return false;
  }

  ngOnInit() 
  {
    this.showContentForTopic();
  }


  ngOnChanges()
  {
    this.showContentForTopic();  
  }

}
