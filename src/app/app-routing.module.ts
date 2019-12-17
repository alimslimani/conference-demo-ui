import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { SessionsComponent } from './components/sessions/sessions.component';
import { SpeakersComponent } from './components/speakers/speakers.component';


const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'sessions', component: SessionsComponent
  },
  {
    path: 'speakers', component: SpeakersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
