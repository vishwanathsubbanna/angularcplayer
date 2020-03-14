import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

title:string
desc:string
topiccode:string
status:string
typesofContent:string
videoUrl:string
audioUrl:string
htmlUrl:string

constructor(tcode?:string,ttitle?:string,tdesc?:string,ttype?:string,turl?:string) 
{
  this.topiccode=tcode
  this.title=ttitle
  this.desc=tdesc
  this.status="not started"
  this.typesofContent=ttype
  if(this.typesofContent=="Video")
    this.videoUrl=turl
  else if(this.typesofContent=="Audio")
    this.audioUrl=turl
  else if(this.typesofContent=="HTML")
    this.htmlUrl=turl
}
}
