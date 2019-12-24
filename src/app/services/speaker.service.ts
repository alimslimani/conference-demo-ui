import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};


@Injectable({
  providedIn: 'root'
})
export class SpeakerService {

  constructor(private http: HttpClient) { }

  getSpeakers() {
    if (environment.production === true) {
      return this.http.get(environment.apiUrl + '/api/v1/speakers', httpOptions);
    } else {
      return this.http.get('/api/v1/speakers', httpOptions);
    }
  }

  getSpeaker(id: number) {
    if (environment.production === true) {
      return this.http.get(environment.apiUrl + '/api/v1/speakers/' + id, httpOptions);
    } else {
      return this.http.get('/api/v1/speakers' + id, httpOptions);
    }
  }

  createSpeakerRegistration(speaker) {
    let body = JSON.stringify(speaker);
    if (environment.production === true) {
      return this.http.post(environment.apiUrl + '/api/v1/sessions', body, httpOptions);
    } else {
      return this.http.post('/api/v1/sessions', body, httpOptions);
    }
  }

}
