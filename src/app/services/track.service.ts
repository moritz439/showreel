import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { TrackList } from 'src/assets/trackList';
import { Style, Track } from '../models';

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  private tracks = [];
  currentAudio: HTMLAudioElement;
  currentTrack: Track;
  isPaused = true;
  private isPausedSubject: Subject<boolean> = new Subject();

  private $nowPlaying: Subject<Track> = new Subject();
  
  trackList: Track[] = TrackList;

  constructor() {
    this.isPausedSubject.next(true);
    this.tracks.push(
      ...this.trackList
    );
    for (var i = 1; i <= 4; i++) {
      this.tracks.push(
        {
          name: 'test',
          styles: [Style.aggressive, Style.chill, Style.dark],
          source: '../assets/tracks/ice.mp3',
        }
      )
    }
  }

  getTracks(): Track[] {
    return this.tracks;
  }

  getNowPlaying() {
    return this.$nowPlaying.asObservable();
  }

  getPausedState() {
    return this.isPausedSubject.asObservable();
  }

  getTrackByName(name: string): Track {
    return this.tracks.find(track => track.name === name);
  }

  play(track?: Track) {
    if (this.isPaused) {
      if (track && track.name !== this.currentTrack?.name) {
        this.currentTrack = track;
        this.$nowPlaying.next(track);
        this.currentAudio = new Audio(track.source);
      }
      this.isPaused = false;
      this.currentAudio.play();
    } else {
      this.isPaused = true;
      this.currentAudio.pause();
    }
    this.isPausedSubject.next(this.isPaused);
  }

  stop() {
    this.$nowPlaying.next(null);
  }


}
