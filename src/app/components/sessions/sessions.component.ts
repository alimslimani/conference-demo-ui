import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/services/session.service';
import "bootstrap/dist/css/bootstrap.min.css";

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.css']
})
export class SessionsComponent implements OnInit {
  public sessions;
  constructor(private sessionService: SessionService) { }

  ngOnInit() {
    this.getSessions();
  }

  getSessions() {
    this.sessionService.getSessions().subscribe(
      data => {this.sessions=data},
      err => console.error(err),
      () => console.log('Sessions Loaded !!!')
    );
  }

}
