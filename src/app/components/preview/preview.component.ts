import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Track } from 'src/app/models';
import { TrackService } from 'src/app/services/track.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {

  $selectedTrack: Observable<Track>;

  constructor(private route: ActivatedRoute, private trackService: TrackService) { }

  ngOnInit(): void {
    const trackList = this.trackService.getTracks();
    this.$selectedTrack = this.route.params.pipe(
      map(params => params['track']),
      map(name => this.trackService.getTrackByName(name)),
    );

  }

}
