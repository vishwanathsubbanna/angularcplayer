import { Component, OnInit, Input, OnChanges, } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit,OnChanges {

  private _safeVideoURL
  private _pagetitle
  private _pagedesc


  constructor(private sanitizer: DomSanitizer) { }



  @Input('content-video-src') 
  
  set contentvideo(url:string)
  {    
    this._safeVideoURL=this.sanitizer.bypassSecurityTrustResourceUrl(url);    
  }

  get contentvideo() 
  {    
    return this._safeVideoURL;
  }

  @Input('page-title') 
  
  set pagetitle(ptitle:string)
  {    
    this._pagetitle=ptitle;    
  }

  get pagetitle() 
  {    
    return this._pagetitle;    
  }

  @Input('page-desc') 
  
  set pagedesc(pdesc:string)
  {    
    this._pagedesc=pdesc;    
  }

  get pagedesc() 
  {    
    return this._pagedesc;    
  }

  ngOnInit() 
  {

  }

  ngOnChanges()
  {
    console.log("Changed"+this.contentvideo)
  }

}
