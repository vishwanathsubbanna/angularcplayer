import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TocComponent } from './toc/toc.component';
import { ContentpageComponent } from './contentpage/contentpage.component';
import { VideoComponent } from './video/video.component';
import { TranscriptComponent } from './transcript/transcript.component';
import { ReviewComponent } from './review/review.component';
import { NotesComponent } from './notes/notes.component';
import { QaComponent } from './qa/qa.component';
import { ReferenceComponent } from './reference/reference.component';
import {RouterModule,Routes} from '@angular/router';

import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CourseplayerComponent } from './courseplayer/courseplayer.component'
import {FormsModule} from "@angular/forms";
import { HomComponent } from './hom/hom.component'

const route:Routes=[
  {
    path:"",
    component:HomComponent
  },
  {
    path:"home",
    component:HomComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"dashboard",
    component:DashboardComponent
  },
  {
    path:"courseplayer/:coursecode",
    component:CourseplayerComponent,
    children:
    [      
          {
            path:"",component:ReferenceComponent
          },
          {
            path:"trans/:topiccode",component:TranscriptComponent
          },
          {
            path:"review/:topiccode",component:ReviewComponent
          },
          {
            path:"qa/:topiccode",component:QaComponent
          },
          {
            path:"ref/:topiccode",component:ReferenceComponent
          },
          {
            path:"notes/:topiccode",component:NotesComponent
          }
    ]
  }      
]

@NgModule({
  declarations: [
    AppComponent,
    TocComponent,
    ContentpageComponent,
    VideoComponent,
    TranscriptComponent,
    ReviewComponent,
    NotesComponent,
    QaComponent,
    ReferenceComponent,
    LoginComponent,
    DashboardComponent,
    CourseplayerComponent,
    HomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(route),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
