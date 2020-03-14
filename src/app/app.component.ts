import { Component,OnChanges, Input } from '@angular/core';
import { $ } from 'protractor';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CourseplayerComponent } from './courseplayer/courseplayer.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  coursecode:string
  title = 'coursePlayer';
  buttonText="LOGIN"
  homeLink="/home"
  onclick(coursename)
  {    
    if (coursename=="angular")
      this.coursecode="c001"
    else
      this.coursecode="c002"
  }

  onActivate($event)
  {
    if ($event.constructor.name==DashboardComponent.name || $event.constructor.name==CourseplayerComponent.name || $event.constructor.name==AdmindashboardComponent.name)
    {
      this.buttonText="LOGOUT"
      if($event.constructor.name==DashboardComponent.name || $event.constructor.name==CourseplayerComponent.name)
        this.homeLink="/dashboard"
      else
        this.homeLink="/admindashboard"
      console.log("Activate:"+$event.constructor.name)
    }
  }

  onDeactivated($event)
  {
    if ($event.constructor.name==DashboardComponent.name || $event.constructor.name==CourseplayerComponent.name || $event.constructor.name==AdmindashboardComponent.name )
    {
      this.buttonText="LOGIN"
      this.homeLink="/home"
      console.log("DeActivate:"+$event.constructor.name)
    }
  }
}
