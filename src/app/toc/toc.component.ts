import { Component, OnInit, OnChanges, Input } from '@angular/core';
import * as toc from '../../data/toc.json'
import { Router } from '@angular/router';

@Component({
  selector: 'app-toc',
  templateUrl: './toc.component.html',
  styleUrls: ['./toc.component.css']
})
export class TocComponent implements OnInit,OnChanges {

  tocfordisplay:string;

  constructor(private myrouter:Router) 
  { 
    this.tocfordisplay=toc["default"]
  }

  onbuttonClick(data)
  {
<<<<<<< HEAD
    this.myrouter.navigate(['/content',data.title,data.desc,data.topiccode])
=======
    this.myrouter.navigate(['/content',data.topiccode])
>>>>>>> 71647d9cdaf94f67ecfdf1a1783ae5e96bdafaf8
    console.log("button Clicked")
  }

  ngOnInit() 
  {
    
  }

  ngOnChanges()
  {
  }

}
