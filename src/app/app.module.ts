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
import {RouterModule,Routes} from '@angular/router'

const route:Routes=[{path:"content/:title/:desc",component:ContentpageComponent}]

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
    ToctargetDirective
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
