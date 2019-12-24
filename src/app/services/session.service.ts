import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from 'src/environments/environment.prod';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private http: HttpClient) { }

  getSessions() {
    let headers = new HttpHeaders();
    headers.append('content-type', 'application/json');
    headers.append('accept', 'application/json');
    if (environment.production === true) {
      return this.http.get(environment.apiUrl + '/api/v1/sessions', {headers: headers});
    }
    else {
      return this.http.get(environment.apiUrl + '/api/v1/sessions');
    }

  }

  getSession(id: number) {
    return this.http.get('/api/v1/sessions/' + id);
  }

  createSessionRegistration(session) {
    let body = JSON.stringify(session);
    return this.http.post('/api/v1/sessions', body, httpOptions);
  }

}
