import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-transcript',
  templateUrl: './transcript.component.html',
  styleUrls: ['./transcript.component.css']
})
export class TranscriptComponent implements OnInit {

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
