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


constructor(tcode?:string,ttitle?:string,tdesc?:string,ttype?:string) 
{
  this.topiccode=tcode
  this.title=ttitle
  this.desc=tdesc
  this.status="not started"
  this.typesofContent=ttype

}
}
