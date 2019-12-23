import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';

import { HomeComponent } from './components/home/home.component';
import { SessionService } from './services/session.service';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { SpeakerService } from './services/speaker.service';
import { HomeService } from './services/home.service';
import { SessionsComponent } from './components/sessions/sessions.component';
import { SpeakersComponent } from './components/speakers/speakers.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SessionsComponent,
    SpeakersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [SessionService, SpeakerService, HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
