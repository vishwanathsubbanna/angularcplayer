import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {environment} from '../../environments/environment'

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  @Input() topiccode:string
  @Input() ccode:string
  constructor(private activatedRoute:ActivatedRoute) 
  {

  }

  ngOnInit() {
  }

}
