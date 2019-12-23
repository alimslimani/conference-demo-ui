import { Injectable } from '@angular/core';

import { HttpClient,HttpHeaders } from '@angular/common/http';


const httpOptions ={
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};


@Injectable({
  providedIn: 'root'
})
export class SpeakerService {

  constructor(private http: HttpClient) { }

  getSpeakers() {
    return this.http.get('/server/api/v1/speakers');
  }

  getSpeaker(id: number){
    return this.http.get('/server/api/v1/speakers/'+id);
  }

  createSpeakerRegistration(speaker){
    let body = JSON.stringify(speaker);
    return this.http.post('/server/api/v1/sessions',body,httpOptions);
  }
}
