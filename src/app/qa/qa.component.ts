import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-qa',
  templateUrl: './qa.component.html',
  styleUrls: ['./qa.component.css']
})
export class QaComponent implements OnInit {

  questionAnswer:string;
  constructor(private myactiveroute:ActivatedRoute) 
  {
   myactiveroute.parent.params.subscribe(params=>{
   })
  }


  ngOnInit() {
  }

}
