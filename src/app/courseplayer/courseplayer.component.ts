import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-courseplayer',
  templateUrl: './courseplayer.component.html',
  styleUrls: ['./courseplayer.component.css']
})
export class CourseplayerComponent implements OnInit,OnChanges{

  ccode:string
  constructor(private activatedRoute:ActivatedRoute,private myrouter:Router) 
  {
    this.myrouter.routeReuseStrategy.shouldReuseRoute = () => false;
    this.activatedRoute.params.subscribe(param=>{
      this.ccode=param.coursecode
    })
  }

  navigatetocontent($event)
  {
    //console.log($event)
    this.myrouter.navigate(["content",$event.topiccode],{relativeTo:this.activatedRoute})
  }


  ngOnInit() {
  }

  ngOnChanges()
  {
  }

}
