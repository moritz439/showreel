import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Track } from 'src/app/models';
import { TrackService } from 'src/app/services/track.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  $isPaused;
  $currentTrack: Observable<Track>;

  constructor(private trackService: TrackService) { }

  ngOnInit(): void {
    this.$isPaused = this.trackService.getPausedState();
    this.$currentTrack = this.trackService.getNowPlaying();
  }

  public close() {
    this.trackService.stop();
  }

  public playPause() {
    this.trackService.play();
  }
}
