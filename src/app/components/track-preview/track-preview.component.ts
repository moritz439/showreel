import { Component, Input, OnInit } from '@angular/core';
import { Style, Track } from 'src/app/models';
import { ShareService } from 'src/app/services/share.service';
import { TrackService } from 'src/app/services/track.service';

@Component({
  selector: 'app-track-preview',
  templateUrl: './track-preview.component.html',
  styleUrls: ['./track-preview.component.scss']
})
export class TrackPreviewComponent implements OnInit {

  @Input() track: Track;
  @Input() showcase: boolean = false;
  styleList = Style;

  constructor(private trackService: TrackService, private shareService: ShareService) { }

  ngOnInit(): void {
  }

  play() {
    this.trackService.play(this.track);
  }

  share() {
    this.shareService.shareTrack(this.track);
  }
}
