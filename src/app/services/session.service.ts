import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private http: HttpClient) { }

  getSessions() {
    if (environment.production === true) {
      return this.http.get(environment.apiUrl + '/api/v1/sessions', httpOptions);
    } else {
      return this.http.get('/api/v1/sessions', httpOptions);
    }
  }

  getSession(id: number) {
    if (environment.production === true) {
      return this.http.get(environment.apiUrl + '/api/v1/sessions' + id, httpOptions);
    } else {
      return this.http.get('/api/v1/sessions' + id, httpOptions);
    }
  }


  createSessionRegistration(session) {
    let body = JSON.stringify(session);
    if (environment.production === true) {
      return this.http.post(environment.apiUrl + '/api/v1/sessions', body, httpOptions);
    } else {
      return this.http.post('/api/v1/sessions', body, httpOptions);
    }
  }

}
