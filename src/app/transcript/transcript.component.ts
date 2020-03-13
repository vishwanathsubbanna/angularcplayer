import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {environment} from '../../environments/environment'

@Component({
  selector: 'app-transcript',
  templateUrl: './transcript.component.html',
  styleUrls: ['./transcript.component.css']
})
export class TranscriptComponent implements OnInit {

  @Input() topiccode:string
  @Input() ccode:string
  constructor(private activatedRoute:ActivatedRoute) 
  {

  }


  ngOnInit() {
  }

}
