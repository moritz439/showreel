import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { Style, Track } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  style = Style;
  selectedTrack: Track;

  trackList = [];

  constructor(private route: ActivatedRoute) {

    for (var i = 1; i <= 10; i++) {
      this.trackList.push(
        {
          name: 'test',
          styles: [Style.aggressive, Style.chill, Style.dark],
          source: '../assets/trakcs/ice.mp3',
        }
      )
    }
  }

  ngOnInit(): void {
    console.log(this.route.snapshot.params['track']);
    const trackName = this.route.snapshot.params['track'];
    this.selectedTrack = this.trackList.find(track => track.name === trackName);
  }
}
