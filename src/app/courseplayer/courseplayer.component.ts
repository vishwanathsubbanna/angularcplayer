import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {environment} from "../../environments/environment"

@Component({
  selector: 'app-courseplayer',
  templateUrl: './courseplayer.component.html',
  styleUrls: ['./courseplayer.component.css']
})
export class CourseplayerComponent implements OnInit,OnChanges{

  ccode:string
  tcode:string
  constructor(private activatedRoute:ActivatedRoute,private myrouter:Router) 
  {
   
    this.activatedRoute.params.subscribe(param=>{
      this.ccode=param.coursecode
    })
  }

  navigatetocontent($event)
  {
    console.log($event)
    this.tcode=$event.topiccode
    console.log(this.tcode +"Course Player Page")
    //this.myrouter.navigate(["content",$event.topiccode],{relativeTo:this.activatedRoute})
  }


  ngOnInit() {

  }

  ngOnChanges()
  {

  }

}
