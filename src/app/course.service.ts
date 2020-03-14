import { Injectable } from '@angular/core';
import { TopicService } from './topic.service';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  coursecode:string
  coursetitle:string
  coursedesc:string
  courselogo:string
  toc=Array<TopicService>()

  constructor() { }
}
