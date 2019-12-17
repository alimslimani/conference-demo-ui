import { Component, OnInit } from '@angular/core';
import { SpeakerService } from 'src/app/services/speaker.service';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.css']
})
export class SpeakersComponent implements OnInit {
  public speakers;
  constructor(private speakerService: SpeakerService) { }

  ngOnInit() {
    this.getSpeakers();
  }

  getSpeakers() {
    this.speakerService.getSpeakers().subscribe(
      data => {this.speakers=data},
      err => console.error(err),
      () => console.log('Speakers Loaded !!!')
    );
  }


}
