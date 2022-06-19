import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { Style, Track } from './models';
import { ShareService } from './services/share.service';
import { TrackService } from './services/track.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  style = Style;
  selectedTrack: Track;
  trackList = [];
  constructor(private trackService: TrackService, private shareService: ShareService) {

   
  }

  ngOnInit(): void {
    this.trackList = this.trackService.getTracks();
  }

  share() {
    this.shareService.sharePage();
  }
}
