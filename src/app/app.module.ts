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
import { ToctargetDirective } from './toctarget.directive';
import {RouterModule,Routes} from '@angular/router';
import { ShowFilledRatingDirective } from './show-filled-rating.directive'

<<<<<<< HEAD
const route:Routes=[{path:"content/:title/:desc/:topiccode",component:ContentpageComponent}]
=======
const route:Routes=[{path:"content/:topiccode",component:ContentpageComponent,children:[{path:"",component:ReferenceComponent},{path:"trans",component:TranscriptComponent},{path:"review",component:ReviewComponent},{path:"qa",component:QaComponent},{path:"ref",component:ReferenceComponent},{path:"notes",component:NotesComponent}]}]
>>>>>>> 71647d9cdaf94f67ecfdf1a1783ae5e96bdafaf8

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
    ToctargetDirective,
    ShowFilledRatingDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(route)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
