import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reference',
  templateUrl: './reference.component.html',
  styleUrls: ['./reference.component.css']
})
export class ReferenceComponent implements OnInit {

  //topiccode:string;
  referencelink=new Array<string>();
  constructor(private activatedRoute:ActivatedRoute) 
  {
    activatedRoute.parent.params.subscribe(params=>{

      //this.topiccode=params.topiccode;
    })
  }

  ngOnInit() {
  }

}
