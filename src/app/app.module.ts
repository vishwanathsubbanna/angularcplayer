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
import {FormsModule} from "@angular/forms"

const route:Routes=[
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
        path:"content/:topiccode",
        component:ContentpageComponent,
        children:
        [
          {
            path:"",component:ReferenceComponent
          },
          {
            path:"trans",component:TranscriptComponent
          },
          {
            path:"review",component:ReviewComponent
          },
          {
            path:"qa",component:QaComponent
          },
          {
            path:"ref",component:ReferenceComponent
          },
          {
            path:"notes",component:NotesComponent
          }
        ]
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
    CourseplayerComponent
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
