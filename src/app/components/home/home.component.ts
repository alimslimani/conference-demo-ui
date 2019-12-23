import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public homePage;
  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.getHome();
  }

  getHome() {
    this.homeService.getHome().subscribe(
      homePage => {this.homePage=homePage},
      err => console.error(err),
      () => console.log('Welcome Home page !!!')
    );
  }
}
