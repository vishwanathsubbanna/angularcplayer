import { Directive,ElementRef, OnChanges, OnInit } from '@angular/core';

@Directive({
  selector: '[Toctarget]'
})
export class ToctargetDirective implements OnChanges,OnInit {

  constructor(private el:ElementRef) 
  {

  }

  ngOnInit()
  {
  }


  ngOnChanges()
  {
  }

}
