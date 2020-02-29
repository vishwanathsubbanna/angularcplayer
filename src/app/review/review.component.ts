import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  topiccode:string;
  constructor(private activatedRoute:ActivatedRoute) 
  {
    activatedRoute.parent.params.subscribe(params=>{
      this.topiccode=params.topiccode;
    })
  }

  ngOnInit() {
  }

}
