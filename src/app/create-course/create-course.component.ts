import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { TopicService } from '../topic.service';
import icons from 'glyphicons'
import { TopicContentService } from '../topic-content.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from "../../environments/environment"

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
  videoemoji:string=icons.arrowTriR
  audioemoji:string=icons.musicalNoteDouble
  htmlemoji:string=icons.menu

  canCreateTopic:boolean
  canCreateTopicContent:boolean

  topicList=Array<TopicService>()
  topicContents=Array<object>()

  constructor(private httpClient:HttpClient) 
  {
    this.canCreateTopic=true
    this.canCreateTopicContent=true
  }


  addTopic(courseForm)
  {    
    if(courseForm.valid)
      this.canCreateTopic=true
    else
      this.canCreateTopic=false

      this.topicCreateStarted=this.canCreateTopic
  }


  saveTopic(topicform)
  {
    
    if (topicform.valid)
      this.canCreateTopicContent=true
    else
    {
      this.canCreateTopicContent=false
      return
    }  
    

    this.tcode=topicform.controls.topiccode.value
    this.ttitle=topicform.controls.topictitle.value
    this.tdesc=topicform.controls.topicdesc.value
    this.ttype=topicform.controls.topictype.value
    this.tcontent=topicform.controls.topiccontentURL.value
    this.topicList.push(new TopicService(this.tcode,this.ttitle,this.tdesc,this.ttype))


    if(this.ttype=="Video")
    {
      this.topicContents.push({topiccode:this.tcode,videoUrl:this.tcontent,audioUrl:"",htmlUrl:"",typesofContent:this.ttype})
    }
    else if(this.ttype=="Audio")
    {
      this.topicContents.push({topiccode:this.tcode,videoUrl:"",audioUrl:this.tcontent,htmlUrl:"",typesofContent:this.ttype})
    }
    else if(this.ttype=="HTML")
    {
      this.topicContents.push({topiccode:this.tcode,videoUrl:"",audioUrl:"",htmlUrl:this.tcontent,typesofContent:this.ttype})
    }

  }


  saveCourse()
  {
    let course=new CourseService()
    course.coursecode=this.ccode
    course.coursetitle=this.ctitle
    course.coursedesc=this.cdesc
    course.courselogo=this.clogoURL
    course.toc=this.topicList

    console.log(course)

    let contentForTopic=new TopicContentService

    contentForTopic.coursecode=this.ccode
    contentForTopic.coursecontent=this.topicContents

    console.log(contentForTopic)


    const httpHeaderOptions:object={headers:new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded'})}        
    this.httpClient.post(`http://${environment.serverIPAddress}/createcourse`,`ctopic=${JSON.stringify(course)}&ccontent=${JSON.stringify(contentForTopic)}`,httpHeaderOptions).subscribe(data=>{
      console.log(data)
    })

  }

  ngOnInit() {
  }

}
