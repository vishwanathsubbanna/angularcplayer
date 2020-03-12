import { Component, OnInit, OnChanges, Input, Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-toc',
  templateUrl: './toc.component.html',
  styleUrls: ['./toc.component.css']
})
export class TocComponent implements OnInit,OnChanges {
  
  @Input('course-code') ccode:string;
  @Output() navTopic:EventEmitter<string>=new EventEmitter()

  tocfordisplay:any=[];

  constructor(private myrouter:Router,private httpclient:HttpClient) 
  { 
  }

  onbuttonClick(data)
  {
    console.log("button Clicked" + this.ccode)
    this.navTopic.emit(data)
    
    
  }

  ngOnInit() 
  {
    this.httpclient.get(`http://192.168.1.4/gettocforcourse?ccode=${this.ccode}`).subscribe(response=>{            
      this.tocfordisplay=response["data"][0]      
    })
  }

  ngOnChanges()
  {
    this.httpclient.get(`http://192.168.1.4/gettocforcourse?ccode=${this.ccode}`).subscribe(response=>{            
      this.tocfordisplay=response["data"][0]     
    })
  }

}
