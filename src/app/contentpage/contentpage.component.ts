import { Component, OnInit, Input, Output,EventEmitter, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseRatingService } from '../course-rating.service';
import { HttpClient } from '@angular/common/http';

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
  tcode=""
  courserating:number
  maxrating=[1,2,3,4,5]
  constructor(private myactiveroute:ActivatedRoute,private crating:CourseRatingService,private httpclient:HttpClient) 
  { 

    
       myactiveroute.params.subscribe(params=>{ this.tcode=params.topiccode})
       myactiveroute.parent.params.subscribe(params=>{ this.ccode=params.coursecode})       

    
    // console.log(params)
      httpclient.get(`http://192.168.1.4/getcontentforcourse?ccode=${this.ccode}`).subscribe(response=>{      

      for(let topic of response["data"][0]["coursecontent"])
      {        
          if (topic.topiccode==this.tcode)
          {
            this.videoURL=topic.videoUrl
            // this.pagetitle=topic.title
            // this.pagedesc=topic.desc
            // this.courserating=crating.getRating(this.tcode)
          }
      }    
    })

    httpclient.get(`http://192.168.1.4/gettocforcourse?ccode=${this.ccode}`).subscribe(response=>{    

      for(let topic of response["data"][0]["toc"])
      {        
          if (topic.topiccode==this.tcode)
          {            
            this.pagetitle=topic.title
            this.pagedesc=topic.desc
            this.courserating=crating.getRating(this.tcode)
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


  ngOnChanges()
  {

  }

}
