import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

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
