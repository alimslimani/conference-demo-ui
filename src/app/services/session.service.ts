import { Injectable } from '@angular/core';

import { HttpClient,HttpHeaders } from '@angular/common/http';


const httpOptions ={
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};


@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private http: HttpClient) { }

  getSessions() {
    return this.http.get('/server/api/v1/sessions');
  }

  getSession(id: number){
    return this.http.get('/server/api/v1/sessions/'+id);
  }

  createSessionRegistration(session){
    let body = JSON.stringify(session);
    return this.http.post('/server/api/v1/sessions',body,httpOptions);
  }

}
