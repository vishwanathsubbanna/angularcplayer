import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { TopicService } from '../topic.service';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css'],
  providers:[CourseService,TopicService]
})
export class CreateCourseComponent implements OnInit {

  topicCreateStarted:boolean=false
  ccode:string
  ctitle:string
  cdesc:string
  clogoURL:string


  tcode:string
  ttitle:string
  tdesc:string
  ttype:string
  tcontent:string

  topicList=Array<TopicService>()

  constructor() { }


  addTopic()
  {
    this.topicCreateStarted=true
  }


  saveTopic(topicform)
  {
    console.log(topicform)
    this.tcode=topicform.controls.topiccode.value
    this.ttitle=topicform.controls.topictitle.value
    this.tdesc=topicform.controls.topicdesc.value
    this.ttype=topicform.controls.topictype.value
    this.tcontent=topicform.controls.topiccontentURL.value

    this.topicList.push(new TopicService(this.tcode,this.ttitle,this.tdesc,this.ttype,this.tcontent))
    console.log(this.topicList)
  }

  ngOnInit() {
  }

}
