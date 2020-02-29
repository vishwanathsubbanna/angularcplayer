import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseRatingService 
{

  public getRating(ccode:string) : number
  {       
    return Math.ceil(Math.random()*5);
  }

  constructor() { }
}
