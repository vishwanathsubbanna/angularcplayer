import { Injectable } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class TopicContentService {
  coursecode:string
  coursecontent:Array<object>

  constructor(ccode?:string) 
  {
    this.coursecode=ccode    
  }

}
