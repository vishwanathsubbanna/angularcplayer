import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as reflink from '../../data/reference.json'

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

      for(let rlink of reflink.refmaterial)
      {
        if(rlink.topiccode==params.topiccode)
        {

          this.referencelink=rlink.materiallink;
        }
      }
   
      //this.topiccode=params.topiccode;
    })
  }

  ngOnInit() {
  }

}
