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
  $selectedTrack: Observable<Track>;

  trackList = [];

  constructor(private route: ActivatedRoute) {

    for (var i = 1; i <= 10; i++) {
      this.trackList.push(
        {
          name: '#' + i,
          styles: [Style.aggressive, Style.chill, Style.dark],
          source: '',
        }
      )
    }
  }

  ngOnInit(): void {
    this.$selectedTrack = this.route.queryParams.pipe(
      map(params => params['track']),
      map(name => this.trackList.find(track => track.name === name)),
    )
  }
}
